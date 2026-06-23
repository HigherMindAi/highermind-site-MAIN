import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { SearchMag } from './Icons';

// useLayoutEffect warns during SSR; fall back to useEffect on the server.
const useIsoLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

interface Result {
  id: string;
  name: string;
  you?: boolean;
  score: string;
  stars: string;
  reviews: number;
  years: number;
  open: boolean;
  hours: string;
}

const RESULTS: Record<string, Result> = {
  you: { id: 'you', name: 'Your Business', you: true, score: '5.0', stars: '\u2605\u2605\u2605\u2605\u2605', reviews: 52, years: 12, open: true, hours: 'Closes 6:00 pm' },
  a: { id: 'a', name: 'A competitor', score: '4.6', stars: '\u2605\u2605\u2605\u2605', reviews: 38, years: 6, open: true, hours: 'Closes 5:00 pm' },
  b: { id: 'b', name: 'Another competitor', score: '4.5', stars: '\u2605\u2605\u2605\u2605', reviews: 21, years: 9, open: false, hours: 'Opens 8:00 am' },
};

const BURIED = ['a', 'b', 'you']; // your profile starts at the bottom
const RANKED = ['you', 'a', 'b']; // the system lifts it to the top

function prefersReduced() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function StorefrontGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l1.2-4.2A1 1 0 0 1 5.16 4h13.68a1 1 0 0 1 .96.8L21 9" />
      <path d="M3 9v1.5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 3 0" />
      <path d="M4.5 13v6.5a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V13" />
      <path d="M9.5 20.5v-4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4" />
    </svg>
  );
}

function Row({ r, refCb }: { r: Result; refCb: (el: HTMLDivElement | null) => void }) {
  return (
    <div className={'gresult' + (r.you ? ' you' : '')} ref={refCb}>
      <div className="gtext">
        <div className="gname">{r.name}</div>
        <div className="grow">
          <span className="gscore">{r.score}</span>
          <span className="gstars">{r.stars}</span>
          <span className="gnum">({r.reviews})</span>
        </div>
        <div className="gsub">Local service &middot; {r.years} years in business</div>
        <div className="gstatus">
          {r.open ? <span className="gopen">Open</span> : <span className="gclosed">Closed</span>}{' '}
          &middot; {r.hours}
        </div>
        <div className="gacts">
          <span className={'gact' + (r.you ? ' primary' : '')}>Call</span>
          <span className="gact">Directions</span>
          <span className="gact">Website</span>
        </div>
      </div>
      <div className="gthumb">
        <StorefrontGlyph />
      </div>
    </div>
  );
}

export default function LocalPackCard() {
  const reduce = prefersReduced();
  const [order, setOrder] = useState<string[]>(reduce ? RANKED : BURIED);
  const cardRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const prevRects = useRef<Record<string, DOMRect>>({});

  // lift to #1 once the card is in view
  useEffect(() => {
    if (reduce) return;
    const el = cardRef.current;
    if (!el || !('IntersectionObserver' in window)) {
      const t = setTimeout(() => setOrder(RANKED), 700);
      return () => clearTimeout(t);
    }
    let timer: ReturnType<typeof setTimeout>;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            timer = setTimeout(() => setOrder(RANKED), 650);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.45 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, [reduce]);

  // FLIP: animate rows from their previous positions to the new order
  useIsoLayoutEffect(() => {
    const newRects: Record<string, DOMRect> = {};
    order.forEach((id) => {
      const node = rowRefs.current[id];
      if (node) newRects[id] = node.getBoundingClientRect();
    });

    order.forEach((id) => {
      const node = rowRefs.current[id];
      const oldRect = prevRects.current[id];
      const newRect = newRects[id];
      if (node && oldRect && newRect) {
        const dy = oldRect.top - newRect.top;
        if (Math.abs(dy) > 1) {
          node.style.transition = 'none';
          node.style.transform = `translateY(${dy}px)`;
          node.style.zIndex = id === 'you' ? '2' : '1';
          requestAnimationFrame(() => {
            node.style.transition =
              'transform 0.95s cubic-bezier(.22,.61,.36,1)';
            node.style.transform = '';
          });
        }
      }
    });

    prevRects.current = newRects;
  }, [order]);

  return (
    <div
      className="gpack"
      id="rankcard"
      ref={cardRef}
      aria-label="A business ranked at the top of the Google local results"
    >
      <div className="gbar">
        <SearchMag />
        <span className="gq">best service near me</span>
        <span className="gmaps">Maps</span>
      </div>
      <div className="gfilters">
        <span>Rating</span>
        <span>Hours</span>
        <span>Open now</span>
      </div>
      {order.map((id) => (
        <Row
          key={id}
          r={RESULTS[id]}
          refCb={(el) => {
            rowRefs.current[id] = el;
          }}
        />
      ))}
      <div className="gfoot">The three results that take most of the local calls.</div>
    </div>
  );
}
