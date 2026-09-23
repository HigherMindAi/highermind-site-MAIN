// ---------------------------------------------------------------------------
// HigherMindAI - FOUND AND COUNTED (v15.3, 23 September 2026)
//
// The measurement layer. Nothing here changes how the site looks. It answers
// one question the business could not answer before: how did this person find
// me, and did they take the nine minutes?
//
// IDs come from Netlify environment variables at build time, with the
// constants below as the fallback. An empty ID switches that tool off
// completely - no script, no request, no cookie. So the code ships dormant and
// wakes up the moment an ID is set and the site rebuilds.
//
//   VITE_GA4_ID              Google Analytics 4 measurement ID   G-XXXXXXXXXX
//   VITE_GSC_VERIFICATION    Search Console HTML-tag token       (content="...")
//   VITE_BING_VERIFICATION   Bing Webmaster msvalidate.01 token
//   VITE_CLARITY_ID          Microsoft Clarity project ID
//   VITE_META_PIXEL_ID       Meta (Facebook/Instagram) pixel ID
//
// EVENTS (GA4 names - mark the first four as key events in GA4 Admin)
//   generate_lead            a nine minutes booked in the Cal embed
//   phone_click              any tel: link
//   whatsapp_click           any wa.me link
//   email_click              any mailto: link
//   cta_click                any link to /book/ (Take the nine minutes)
//   booking_view             the Cal calendar finished loading on /book/
//   booking_error            the Cal calendar failed to load
//   booking_source_selected  "Where did you find me?" answered
//
// Internal traffic: visit any page with ?hm_internal=1 once on each of your own
// devices. Every hit from that browser is then tagged traffic_type=internal and
// the GA4 Internal Traffic filter drops it. ?hm_internal=0 undoes it.
// Debug: ?hm_debug=1 sends hits to GA4 DebugView for that page load.
// ---------------------------------------------------------------------------

/* eslint-disable @typescript-eslint/no-explicit-any */

const env = (import.meta as any).env || {};
const pick = (k: string, fallback: string) => String(env[k] || fallback || '').trim();

// Fallbacks - paste an ID here if you would rather commit it than set it in
// Netlify. The environment variable wins when both are present.
export const GA4_ID = pick('VITE_GA4_ID', 'G-JE24G76TLQ'); // property highermindai.com (511393636), stream 12843393600
export const GSC_VERIFICATION = pick('VITE_GSC_VERIFICATION', '');
export const BING_VERIFICATION = pick('VITE_BING_VERIFICATION', '');
export const CLARITY_ID = pick('VITE_CLARITY_ID', '');
export const META_PIXEL_ID = pick('VITE_META_PIXEL_ID', '');

const ok = (id: string, re: RegExp) => (re.test(id) ? id : '');
const GA = ok(GA4_ID, /^G-[A-Z0-9]{4,}$/);
const CLARITY = ok(CLARITY_ID, /^[a-z0-9]{6,}$/i);
const PIXEL = ok(META_PIXEL_ID, /^[0-9]{6,}$/);
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

// EEA, UK and Switzerland: analytics and ad storage default to denied (consent
// mode v2 - Google still receives cookieless pings and models the gap). No
// banner is needed while the book is Canada and the United States; the day the
// UK edition opens, a consent banner goes in front of these regions.
const CONSENT_REGIONS = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IS', 'IE', 'IT',
  'LV', 'LI', 'LT', 'LU', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB', 'CH',
];

/**
 * The <head> block baked into every prerendered page by prerender.js.
 * Verification tags always render when set; each script only when its ID is valid.
 */
export function trackingHead(): string {
  const out: string[] = [];
  if (GSC_VERIFICATION) out.push(`<meta name="google-site-verification" content="${esc(GSC_VERIFICATION)}" />`);
  if (BING_VERIFICATION) out.push(`<meta name="msvalidate.01" content="${esc(BING_VERIFICATION)}" />`);

  if (GA) {
    out.push(`<link rel="preconnect" href="https://www.googletagmanager.com" />`);
    out.push(
      `<script>` +
        `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}` +
        `gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',region:${JSON.stringify(CONSENT_REGIONS)},wait_for_update:500});` +
        `gtag('consent','default',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});` +
        `(function(){var q=location.search,i=false,d=/[?&]hm_debug=1/.test(q);` +
        `try{if(/[?&]hm_internal=1/.test(q))localStorage.setItem('hm_internal','1');if(/[?&]hm_internal=0/.test(q))localStorage.removeItem('hm_internal');i=localStorage.getItem('hm_internal')==='1';}catch(e){}` +
        `var c={send_page_view:false};if(i)c.traffic_type='internal';if(d)c.debug_mode=true;window.__hmInternal=i;` +
        `gtag('js',new Date());gtag('config','${GA}',c);})();` +
        `</script>`
    );
    out.push(`<script async src="https://www.googletagmanager.com/gtag/js?id=${GA}"></script>`);
  }

  if (CLARITY) {
    out.push(
      `<script>(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};` +
        `t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;` +
        `y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY}");</script>`
    );
  }

  if (PIXEL) {
    out.push(
      `<script>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?` +
        `n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';` +
        `n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];` +
        `s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');` +
        `fbq('init','${PIXEL}');</script>`
    );
  }
  return out.join('\n    ');
}

// --------------------------------------------------------------- client side

type Params = Record<string, string | number | boolean | undefined>;

function w(): any {
  return typeof window === 'undefined' ? null : (window as any);
}

function clean(p: Params): Params {
  const o: Params = {};
  Object.keys(p).forEach((k) => {
    if (p[k] !== undefined && p[k] !== '') o[k] = p[k];
  });
  return o;
}

/** Send one event to every tool that is switched on. Never throws. */
export function track(name: string, params: Params = {}): void {
  const win = w();
  if (!win) return;
  const p = clean(params);
  try {
    if (typeof win.gtag === 'function') {
      win.gtag('event', name, win.__hmInternal ? { ...p, traffic_type: 'internal' } : p);
    }
  } catch { /* measurement must never break the page */ }
  try {
    if (typeof win.clarity === 'function') win.clarity('event', name);
  } catch { /* ignore */ }
  try {
    if (typeof win.fbq === 'function') {
      const map: Record<string, string> = {
        generate_lead: 'Schedule',
        phone_click: 'Contact',
        whatsapp_click: 'Contact',
        email_click: 'Contact',
      };
      if (map[name]) win.fbq('track', map[name], p);
    }
  } catch { /* ignore */ }
}

let lastPage = '';
/** A page_view per route, sent after the route has set its own title. */
export function trackPageView(): void {
  const win = w();
  if (!win) return;
  const loc = win.location.pathname + win.location.search;
  if (loc === lastPage) return;
  lastPage = loc;
  try {
    if (typeof win.gtag === 'function') {
      const p: Params = {
        page_location: win.location.href,
        page_path: win.location.pathname,
        page_title: win.document.title,
      };
      if (win.__hmInternal) p.traffic_type = 'internal';
      win.gtag('event', 'page_view', p);
    }
    if (typeof win.fbq === 'function') win.fbq('track', 'PageView');
  } catch { /* ignore */ }
}

/** Where on the page a click happened - nav, footer, or the nearest section. */
function whereOn(el: Element): string {
  if (el.closest('nav, header')) return 'nav';
  if (el.closest('footer')) return 'footer';
  const sec = el.closest('section[id], [data-track]');
  if (sec) return sec.getAttribute('data-track') || sec.id;
  const s = el.closest('section');
  if (s && s.className) return String(s.className).split(' ')[0];
  return 'body';
}

let wired = false;
/** One delegated listener for every contact link on every page. */
export function wireClicks(): void {
  const win = w();
  if (!win || wired) return;
  wired = true;
  win.document.addEventListener(
    'click',
    (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute('href') || '';
      const base = {
        link_url: href,
        link_text: (a.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 80),
        cta_location: whereOn(a),
        page_path: win.location.pathname,
      };
      if (href.startsWith('tel:')) track('phone_click', base);
      else if (href.startsWith('mailto:')) track('email_click', base);
      else if (/wa\.me\/|api\.whatsapp\.com/.test(href)) track('whatsapp_click', base);
      else if (/^(https:\/\/highermindai\.com)?\/book\/?(\?|#|$)/.test(href)) track('cta_click', base);
    },
    { capture: true }
  );
}
