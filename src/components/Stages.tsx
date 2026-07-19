import { useEffect, useState } from 'react';

/**
 * The stage theatre: one small scene per product band, each acting out the
 * thing the service actually does. Every stage renders its FINISHED state in
 * the prerendered HTML - crawlers and no-JS readers get the full content -
 * and the looping playback is a client-side layer on top. Each is labelled
 * illustrative, and all of them stand down under prefers-reduced-motion.
 */

function usePlayhead(steps: number, ms: number, rest = 4200) {
  const [n, setN] = useState(steps);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let alive = true;
    let i = 0;
    const tick = () => {
      if (!alive) return;
      i += 1;
      setN(i);
      if (i < steps) setTimeout(tick, ms);
      else
        setTimeout(() => {
          if (!alive) return;
          i = 0;
          setN(0);
          setTimeout(tick, 700);
        }, rest);
    };
    const t = setTimeout(() => {
      setN(0);
      setTimeout(tick, 500);
    }, 900);
    return () => {
      alive = false;
      clearTimeout(t);
    };
  }, [steps, ms, rest]);
  return n;
}

/* ------------------------------------------------ 01 · the intake desk */
const CHAT: { k: 'in' | 'out' | 'tag' | 'book'; t: string }[] = [
  { k: 'in', t: 'I was rear-ended an hour ago. Is anyone there?' },
  { k: 'out', t: "I'm here, and I can help. Are you safe right now?" },
  { k: 'in', t: "Yes - just shaken. I know it's late." },
  { k: 'out', t: 'Late is fine. Which city are you in, and were you the driver?' },
  { k: 'tag', t: 'Screened · qualified · no conflict' },
  { k: 'book', t: 'Consultation booked · Thu 10:30 am' },
];

export function IntakeStage() {
  const n = usePlayhead(CHAT.length, 1050);
  return (
    <div className="stg" aria-label="Illustrative after-hours intake conversation">
      <div className="stg-top">
        <span className="stg-lab">10:41 pm &middot; after hours</span>
        <span className="stg-chip">answered in 3s</span>
      </div>
      <div className="stg-chat">
        {CHAT.map((r, i) => (
          <div key={i} className={`sc sc-${r.k}${i < n ? ' on' : ''}`}>
            {r.t}
          </div>
        ))}
      </div>
      <div className="stg-note">Illustrative</div>
    </div>
  );
}

/* ------------------------------------------- 02 · the ai search answer */
const SEG: ReadonlyArray<readonly [string, boolean]> = [
  ['For after-hours response and client reviews, ', false],
  ['Hartley Family Law', true],
  [' is the standout - they pick up 24/7 and book the consultation on the first call.', false],
];
const FULL = SEG.reduce((a, [t]) => a + t.length, 0);

export function SearchStage() {
  const [n, setN] = useState(FULL);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let alive = true;
    let i = 0;
    const type = () => {
      if (!alive) return;
      i += 1;
      setN(i);
      if (i < FULL) setTimeout(type, 20);
      else
        setTimeout(() => {
          if (!alive) return;
          i = 0;
          setN(0);
          setTimeout(type, 400);
        }, 5200);
    };
    const t = setTimeout(() => {
      setN(0);
      setTimeout(type, 500);
    }, 900);
    return () => {
      alive = false;
      clearTimeout(t);
    };
  }, []);
  let used = 0;
  return (
    <div className="stg" aria-label="Illustrative AI answer naming a firm">
      <div className="stg-top">
        <span className="stg-lab">ai assistant</span>
        <span className="stg-chip">one answer</span>
      </div>
      <div className="stg-q">best family lawyer near me that answers at night?</div>
      <div className="stg-a">
        {SEG.map(([t, hi], k) => {
          const s = used;
          used += t.length;
          const take = Math.max(0, Math.min(t.length, n - s));
          const txt = t.slice(0, take);
          return hi ? <b key={k}>{txt}</b> : <span key={k}>{txt}</span>;
        })}
        {n < FULL && <span className="stg-crt" />}
      </div>
      <div className="stg-note">Illustrative &middot; this is the shelf space</div>
    </div>
  );
}

/* --------------------------------------------- 03 · the map pack climb */
export function RankStage() {
  const n = usePlayhead(7, 520, 4400);
  const pos = Math.max(1, 7 - n);
  const others = ['National chain', 'Aggregator listing', 'Legacy firm'];
  const list: { name: string; you?: boolean }[] = others.map((o) => ({ name: o }));
  if (pos <= 3) list.splice(pos - 1, 0, { name: 'Your firm', you: true });
  const top3 = list.slice(0, 3);
  return (
    <div className="stg" aria-label="Illustrative Google Maps ranking climb">
      <div className="stg-top">
        <span className="stg-lab">google maps &middot; &ldquo;injury lawyer&rdquo;</span>
        <span className="stg-chip">{pos <= 3 ? 'in the pack' : 'climbing'}</span>
      </div>
      <div className="stg-pack">
        {top3.map((r, i) => (
          <div key={r.name} className={'sp' + (r.you ? ' you' : '')}>
            <span className="sp-n">{i + 1}</span>
            <span className="sp-name">{r.name}</span>
            {r.you && <span className="sp-tag">that&rsquo;s you</span>}
          </div>
        ))}
        {pos > 3 && (
          <div className="sp dim you">
            <span className="sp-n">{pos}</span>
            <span className="sp-name">Your firm</span>
            <span className="sp-tag">rising</span>
          </div>
        )}
      </div>
      <div className="stg-note">Illustrative &middot; 60 days or you stop paying</div>
    </div>
  );
}

/* -------------------------------------------- 04 · the signature motion */
const NODES = ['Enquiry', 'Screen', 'Book', 'Follow up'];

export function SystemsStage() {
  return (
    <div className="stg" aria-label="Illustrative automated workflow">
      <div className="stg-top">
        <span className="stg-lab">your signature motion</span>
        <span className="stg-chip">running</span>
      </div>
      <div className="stg-flow">
        <span className="sf-line">
          <span className="sf-pulse" />
        </span>
        {NODES.map((s, i) => (
          <span key={s} className="sf-node" style={{ animationDelay: `${i * 1.1}s` }}>
            {s}
          </span>
        ))}
      </div>
      <div className="stg-note">Built on your knowledge &middot; hands off when stakes are real</div>
    </div>
  );
}

/* ------------------------------------- the watershed · calendar filling */
const BOOKINGS: [number, number, string][] = [
  [0, 1, '10:30'], [2, 0, '9:15'], [1, 2, '4:00'], [4, 0, '11:00'], [3, 1, '2:30'],
  [0, 2, '6:45'], [2, 2, '5:15'], [4, 1, '3:00'], [1, 0, '8:30'],
];
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

export function CalendarStage() {
  const n = usePlayhead(BOOKINGS.length, 620, 4400);
  const set = new Set(BOOKINGS.slice(0, n).map(([d, s]) => `${d}-${s}`));
  const label = new Map(BOOKINGS.map(([d, s, t]) => [`${d}-${s}`, t]));
  return (
    <div className="stg stg-cal" aria-label="Illustrative week of booked consultations">
      <div className="stg-top">
        <span className="stg-lab">your calendar &middot; this week</span>
        <span className="stg-chip">{n} booked</span>
      </div>
      <div className="cal-grid">
        {DAYS.map((d, di) => (
          <div key={d} className="cal-day">
            <span className="cal-dl">{d}</span>
            {[0, 1, 2].map((s) => {
              const k = `${di}-${s}`;
              const bk = set.has(k);
              return (
                <span key={s} className={'cal-cell' + (bk ? ' bk' : '')}>
                  {bk ? label.get(k) : ''}
                </span>
              );
            })}
          </div>
        ))}
      </div>
      <div className="stg-note">Illustrative &middot; demand in, booked consultations out</div>
    </div>
  );
}
