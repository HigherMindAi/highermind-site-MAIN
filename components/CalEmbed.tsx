/* eslint-disable @typescript-eslint/no-explicit-any, prefer-rest-params */
import { useEffect, useRef, useState } from 'react';
import { CAL_INTRO, calUrl } from '../lib/site';

// ---------------------------------------------------------------------------
// THE BOOKING EMBED - one calendar, no moving parts.
//
// This was three event types behind three tabs, and the tabs were the bug.
// Cal's snippet is a queue: `window.Cal` starts as a stub that records calls,
// then loads embed.js, which drains that queue ONCE and swaps the namespaces
// that exist at that moment for real calendars. Anything created after the
// drain is a stub nobody comes back for - it queues silently and renders
// nothing. Tabs created namespaces lazily, on click, long after the drain, and
// remounting the component on each click tore the mount node out from under
// the one instance that was real. Hence one tab working and then none of them.
//
// One event type removes the whole class of problem. There is no second
// namespace to create late, nothing remounts, and nothing is torn down.
//
// Two layers, in order:
//   1. Cal's official inline embed. Themed, auto-resizing, what they support.
//   2. If no iframe has appeared after six seconds, a plain iframe pointed
//      straight at the booking page. No script, no globals, nothing to fail.
//
// The direct link is always visible either way. This page is where every call
// to action on the site funnels, so a blank rectangle here is the most
// expensive failure on the site and it is not allowed to be the final state.
// ---------------------------------------------------------------------------

const NS = 'hmintro';
const WAIT_MS = 6000;

function ensureLoader(w: any) {
  if (w.Cal) return;
  (function (C: any, A: string, L: string) {
    const p = function (a: any, ar: any) {
      a.q.push(ar);
    };
    const d = C.document;
    C.Cal =
      C.Cal ||
      function () {
        const cal = C.Cal;
        const ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement('script')).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () {
            p(api, arguments);
          };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === 'string') {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ['initNamespace', namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
  })(window, 'https://app.cal.com/embed/embed.js', 'init');
}

export default function CalEmbed({ link = CAL_INTRO }: { link?: string }) {
  const slot = useRef<HTMLDivElement | null>(null);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const w = window as any;
    let alive = true;

    try {
      ensureLoader(w);
      w.Cal('init', NS, { origin: 'https://app.cal.com' });
      w.Cal.ns[NS]('inline', {
        elementOrSelector: slot.current,
        config: { layout: 'month_view', theme: 'dark' },
        calLink: link,
      });
      w.Cal.ns[NS]('ui', {
        theme: 'dark',
        cssVarsPerTheme: { dark: { 'cal-brand': '#3FE0B5' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    } catch {
      setFallback(true);
      return;
    }

    // Cal's script is blocked by some extensions and some corporate networks.
    // If it has not produced an iframe by now, it is not going to.
    const t = window.setTimeout(() => {
      if (alive && slot.current && !slot.current.querySelector('iframe')) {
        setFallback(true);
      }
    }, WAIT_MS);

    return () => {
      alive = false;
      window.clearTimeout(t);
    };
  }, [link]);

  const direct = calUrl(link);

  return (
    <div className="calwrap reveal">
      <div
        ref={slot}
        className="cal-slot"
        hidden={fallback}
        style={{ minHeight: 640, width: '100%', overflow: 'auto' }}
      />

      {fallback ? (
        <iframe
          className="cal-frame"
          src={`${direct}?embed=true&layout=month_view&theme=dark`}
          title="Book a call with HigherMindAI"
          loading="eager"
        />
      ) : null}

      <p className="cal-fallback">
        Prefer a full page?{' '}
        <a href={direct} target="_blank" rel="noreferrer">
          Open the calendar at {direct.replace('https://', '')}
        </a>
        .
      </p>
    </div>
  );
}
