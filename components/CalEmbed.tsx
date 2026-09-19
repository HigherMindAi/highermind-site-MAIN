/* eslint-disable @typescript-eslint/no-explicit-any, prefer-rest-params */
import { useEffect, useRef, useState } from 'react';
import { CAL_OPTIONS, CAL_INTRO, calUrl } from '../lib/site';

// ---------------------------------------------------------------------------
// THE BOOKING EMBED
//
// Three event types behind three tabs, which is where the previous version
// broke. Understanding why matters, because the obvious fix is the wrong one.
//
// Cal's snippet is a QUEUE. `window.Cal` starts life as a stub that records
// calls into `cal.q` and creates a stub api per namespace in `cal.ns`, then
// appends embed.js. When embed.js lands it drains that queue ONCE: it walks
// the namespaces that exist at that moment and swaps each stub for a real
// instance. A namespace created after that drain gets a stub that nothing
// ever comes back for - every call on it queues silently and nothing renders.
//
// The old version created a namespace lazily, on tab click, long after the
// drain. So the first tab (created during the load window) worked and the
// other two were dead stubs. It also remounted the component on every tab
// change via `key`, which tore the mount node out from under the one instance
// that WAS real - hence the first tab going dark too once you came back to it.
//
// So:
//   1. Every namespace is initialised in the first tick, before embed.js can
//      finish loading. All three are real instances by the time anyone clicks.
//   2. Every option owns its own mount node, and those nodes are never
//      unmounted. Tabs toggle visibility, not existence.
//   3. `inline` is called at most once per option, and it is handed the live
//      element rather than a selector, so there is no shared `#cal-inline` id
//      for three embeds to fight over.
//   4. Nothing is torn down, so there is no teardown to get wrong.
//
// A watchdog reveals a direct link if an iframe has not appeared. This is the
// page every call to action on the site funnels into; a blank rectangle here
// is the most expensive failure on the site, so it fails loudly and usefully.
// ---------------------------------------------------------------------------

/** Cal namespaces must be simple identifiers. Derived, never hand-written. */
const nsOf = (slug: string) => slug.replace(/[^a-z0-9]/gi, '');

const UI = {
  theme: 'dark' as const,
  cssVarsPerTheme: { dark: { 'cal-brand': '#3FE0B5' } },
  hideEventTypeDetails: false,
  layout: 'month_view' as const,
};

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
  // Every option gets a slot, whether or not it has been opened yet.
  const slots = useRef<Record<string, HTMLDivElement | null>>({});
  const mounted = useRef<Record<string, boolean>>({});
  const [failed, setFailed] = useState(false);

  const active = CAL_OPTIONS.some((o) => o.slug === link) ? link : CAL_INTRO;

  // --- one-time: loader plus every namespace, in the same tick -------------
  useEffect(() => {
    const w = window as any;
    ensureLoader(w);
    // Init order is the whole fix. These all land before embed.js drains.
    for (const o of CAL_OPTIONS) {
      w.Cal('init', nsOf(o.slug), { origin: 'https://app.cal.com' });
    }
  }, []);

  // --- per option: mount its calendar the first time it is asked for -------
  useEffect(() => {
    setFailed(false);
    const w = window as any;
    const ns = nsOf(active);
    const el = slots.current[active];
    if (!el || mounted.current[active]) return;

    const api = w.Cal?.ns?.[ns];
    if (typeof api !== 'function') {
      setFailed(true);
      return;
    }

    mounted.current[active] = true;
    try {
      api('inline', {
        // The element itself, not '#cal-inline'. Three embeds on one page
        // cannot share a selector, and a selector can go stale.
        elementOrSelector: el,
        config: { layout: 'month_view', theme: 'dark' },
        calLink: active,
      });
      api('ui', UI);
    } catch {
      mounted.current[active] = false;
      setFailed(true);
    }
  }, [active]);

  // --- watchdog: a blank rectangle must never be the final state -----------
  useEffect(() => {
    const t = window.setTimeout(() => {
      const el = slots.current[active];
      if (el && !el.querySelector('iframe')) setFailed(true);
    }, 7000);
    return () => window.clearTimeout(t);
  }, [active]);

  return (
    <div className="calwrap reveal">
      {CAL_OPTIONS.map((o) => (
        <div
          key={o.slug}
          ref={(n) => {
            slots.current[o.slug] = n;
          }}
          className="cal-slot"
          hidden={o.slug !== active}
          style={{ minHeight: 620, width: '100%', overflow: 'auto' }}
        />
      ))}

      {failed ? (
        <p className="cal-rescue">
          The calendar is slow to load on this connection.{' '}
          <a href={calUrl(active)} target="_blank" rel="noreferrer">
            Open it directly at {calUrl(active).replace('https://', '')}
          </a>
          .
        </p>
      ) : (
        <p className="cal-fallback">
          Prefer a full page?{' '}
          <a href={calUrl(active)} target="_blank" rel="noreferrer">
            Open this one at {calUrl(active).replace('https://', '')}
          </a>
          .
        </p>
      )}
    </div>
  );
}
