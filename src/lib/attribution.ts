// ---------------------------------------------------------------------------
// HigherMindAI - where did this visitor come from (v15.3)
//
// The booking question "Where did you find me?" is the backstop. This is the
// front line. On the first page a visitor lands on, it records where they came
// from: the UTM on the link if there was one, otherwise the site that sent
// them. That survives the click from a town page or an answer page through to
// /book/, where it is handed to Cal with the booking, so every booking says how
// it was found even when nobody answers the question.
//
// Kept in this browser only (localStorage, 90 days), never sent anywhere but
// the booking itself. Every read and write is guarded - private windows and
// blocked storage fall back to "nothing recorded", never an error.
// ---------------------------------------------------------------------------

export const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;

export interface Touch {
  utm: Record<string, string>;
  referrer: string; // external referrer host, '' for direct
  landing: string; // first path + query on this site
  ts: number;
}

const FIRST = 'hm_first_touch';
const LAST = 'hm_last_touch';
const TTL = 90 * 24 * 3600 * 1000;

function read(key: string): Touch | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const t = JSON.parse(raw) as Touch;
    if (!t || typeof t.ts !== 'number' || Date.now() - t.ts > TTL) return null;
    return t;
  } catch {
    return null;
  }
}

function write(key: string, t: Touch): void {
  try {
    localStorage.setItem(key, JSON.stringify(t));
  } catch {
    /* storage blocked - the booking question still covers it */
  }
}

function externalReferrerHost(): string {
  try {
    if (!document.referrer) return '';
    const h = new URL(document.referrer).hostname.replace(/^www\./, '');
    if (h === location.hostname.replace(/^www\./, '') || h.endsWith('netlify.app')) return '';
    return h;
  } catch {
    return '';
  }
}

/** Call once per page load. Records first touch, and last touch when it carries a source. */
export function recordTouch(): void {
  if (typeof window === 'undefined') return;
  const q = new URLSearchParams(location.search);
  const utm: Record<string, string> = {};
  UTM_KEYS.forEach((k) => {
    const v = q.get(k);
    if (v) utm[k] = v.slice(0, 100);
  });
  const referrer = externalReferrerHost();
  const touch: Touch = { utm, referrer, landing: (location.pathname + location.search).slice(0, 200), ts: Date.now() };
  if (!read(FIRST)) write(FIRST, touch);
  if (Object.keys(utm).length || referrer) write(LAST, touch);
}

export function firstTouch(): Touch | null {
  return read(FIRST);
}
export function lastTouch(): Touch | null {
  return read(LAST);
}

/**
 * A referrer host, mapped onto the ten booking-source answers (the Source
 * column of The Choice). Anything unrecognised returns '' and the visitor
 * answers the question themselves.
 */
export function sourceFromReferrer(host: string): string {
  const h = host.toLowerCase();
  if (!h) return '';
  // Webmail first - mail.google.com is not a Google search.
  if (/(^|\.)mail\.|outlook\.|gmail\.|proton\.me$/.test(h)) return 'Email';
  if (/^gemini\.google\./.test(h)) return '';
  if (/^(www\.)?google\.|(^|\.)google\.[a-z.]+$|(^|\.)bing\.com$|duckduckgo\.com$|search\.yahoo\.|ecosia\.org$|search\.brave\.com$/.test(h)) return 'Google';
  if (/facebook\.com$|fb\.com$|instagram\.com$|fb\.me$|l\.messenger\.com$/.test(h)) return 'Facebook or Instagram';
  if (/linkedin\.com$|lnkd\.in$/.test(h)) return 'LinkedIn';
  if (/(^|\.)x\.com$|twitter\.com$|t\.co$/.test(h)) return 'X';
  if (/whatsapp\.com$|wa\.me$/.test(h)) return 'WhatsApp';
  // Anything else (a directory, an assistant, a blog) is left for the visitor
  // to answer - the host still travels with the booking as first_referrer.
  return '';
}
