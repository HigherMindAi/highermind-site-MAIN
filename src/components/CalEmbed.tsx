/* eslint-disable @typescript-eslint/no-explicit-any, prefer-rest-params */
import { useEffect } from 'react';

const CAL_LINK = 'highermindai/consult';

/**
 * Cal.com inline booking, embedded with the official loader and themed teal.
 * The prerendered HTML carries the direct link as a fallback, so the booking
 * path exists even before the script loads (and for crawlers).
 */
export default function CalEmbed() {
  useEffect(() => {
    const w = window as any;
    if (!w.Cal) {
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
    w.Cal('init', 'consult', { origin: 'https://app.cal.com' });
    w.Cal.ns.consult('inline', {
      elementOrSelector: '#cal-inline',
      config: { layout: 'month_view', theme: 'dark' },
      calLink: CAL_LINK,
    });
    w.Cal.ns.consult('ui', {
      theme: 'dark',
      cssVarsPerTheme: { dark: { 'cal-brand': '#3FE0B5' } },
      hideEventTypeDetails: false,
      layout: 'month_view',
    });
  }, []);

  return (
    <div className="calwrap reveal">
      <div id="cal-inline" style={{ minHeight: 620, width: '100%', overflow: 'auto' }} />
      <p className="cal-fallback">
        If the calendar does not load,{' '}
        <a href="https://cal.com/highermindai/consult" target="_blank" rel="noreferrer">
          book directly at cal.com/highermindai/consult
        </a>
        .
      </p>
    </div>
  );
}
