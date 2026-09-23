/* eslint-disable @typescript-eslint/no-explicit-any, prefer-rest-params */
import { useEffect } from 'react';
import { CAL_INTRO, calUrl } from '../lib/site';
import { track } from '../lib/tracking';

// Module-level so they survive the embed re-initialising on the same page.
const WIRED = new Set<string>();
const BOOKED = new Set<string>();
const VIEWED = new Set<string>();
let CTX: Record<string, string> = {};

/**
 * Cal.com inline booking, embedded with the official loader and themed teal.
 * The prerendered HTML carries the direct link as a fallback, so the booking
 * path exists even before the script loads (and for crawlers).
 *
 * `link` selects which event type loads. It defaults to the general nine
 * minutes; the service pages pass their own. The namespace is derived from the
 * slug so two different event types can never collide in Cal's global state.
 */
export default function CalEmbed({
  link = CAL_INTRO,
  prefill = {},
}: {
  link?: string;
  /** Booking-form prefill + UTM passthrough. Keys become Cal query params. */
  prefill?: Record<string, string>;
}) {
  const pre = JSON.stringify(prefill);
  useEffect(() => {
    const extra = JSON.parse(pre) as Record<string, string>;
    const host = document.getElementById('cal-inline');
    if (host) host.innerHTML = '';
    const ns = link.replace(/[^a-z0-9]/gi, '');
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
    w.Cal('init', ns, { origin: 'https://app.cal.com' });
    w.Cal.ns[ns]('inline', {
      elementOrSelector: '#cal-inline',
      config: { layout: 'month_view', theme: 'dark', ...extra },
      calLink: link,
    });
    // Found and counted (v15.3): the booking itself is the conversion. Cal
    // fires these from inside its iframe; they reach GA4 as generate_lead
    // (a key event), plus a view and a failure signal for the calendar.
    // Listeners are registered ONCE per namespace - the embed re-inits when
    // the source answer changes, and a second set of listeners would count
    // one booking twice. The context they report is read live from CTX.
    CTX = {
      cal_event: link,
      booking_source: extra.source || '',
      campaign_source: extra.utm_source || '',
      campaign_medium: extra.utm_medium || '',
      campaign_name: extra.utm_campaign || '',
    };
    if (!WIRED.has(ns)) {
      WIRED.add(ns);
      const detail = (e: any) => (e && e.detail && e.detail.data) || {};
      const onBooked = (e: any) => {
        const d = detail(e);
        const key = d.uid || d.startTime || 'booked';
        if (BOOKED.has(key)) return; // V2 and the legacy event both fire
        BOOKED.add(key);
        track('generate_lead', { ...CTX, method: 'cal', booking_status: d.status || '' });
      };
      w.Cal.ns[ns]('on', { action: 'bookingSuccessfulV2', callback: onBooked });
      w.Cal.ns[ns]('on', { action: 'bookingSuccessful', callback: onBooked });
      w.Cal.ns[ns]('on', {
        action: 'linkReady',
        callback: () => {
          if (VIEWED.has(ns)) return;
          VIEWED.add(ns);
          track('booking_view', CTX);
        },
      });
      w.Cal.ns[ns]('on', {
        action: 'linkFailed',
        callback: (e: any) => track('booking_error', { ...CTX, error_code: String(detail(e).code || '') }),
      });
    }
    w.Cal.ns[ns]('ui', {
      theme: 'dark',
      cssVarsPerTheme: { dark: { 'cal-brand': '#3FE0B5' } },
      hideEventTypeDetails: false,
      layout: 'month_view',
    });
  }, [link, pre]);

  return (
    <div className="calwrap reveal">
      <div id="cal-inline" style={{ minHeight: 620, width: '100%', overflow: 'auto' }} />
      <p className="cal-fallback">
        If the calendar does not load,{' '}
        <a href={calUrl(link) + (Object.keys(prefill).length ? '?' + new URLSearchParams(prefill).toString() : '')} target="_blank" rel="noreferrer">
          book directly at {calUrl(link).replace('https://', '')}
        </a>
        .
      </p>
    </div>
  );
}
