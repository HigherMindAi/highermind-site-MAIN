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

/* ---------------------------------------- the ai search answer, typing */
const SEG: ReadonlyArray<readonly [string, boolean]> = [
  ['For after-hours response and owner reviews, ', false],
  ['your firm', true],
  [' is where I would start - every enquiry answered and qualified, and the owner call booked on the first contact.', false],
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
    <div className="stg" aria-label="Illustrative AI answer naming your firm">
      <div className="stg-top">
        <span className="stg-lab">ai assistant</span>
        <span className="stg-chip">one answer</span>
      </div>
      <div className="stg-q">who manages rental property near me and actually answers?</div>
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

/* -------------------------------------------- the signature motion */
const NODES = ['Enquiry', 'Screen', 'Book', 'Follow up'];

export function SystemsStage() {
  return (
    <div className="stg" aria-label="Illustrative automated workflow">
      <div className="stg-top">
        <span className="stg-lab">your signature motion</span>
        <span className="stg-chip">running</span>
      </div>
      <div className="stg-flow">
        <svg className="sf-path" viewBox="0 0 400 64" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="sfg" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#3FE0B5" stopOpacity="0" />
              <stop offset="0.5" stopColor="#3FE0B5" />
              <stop offset="1" stopColor="#9BF4DD" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            className="sf-route"
            d="M0 40 C 55 16, 105 52, 160 33 S 265 12, 320 35 S 382 46, 400 30"
            fill="none"
          />
          <path
            className="sf-dash"
            d="M0 40 C 55 16, 105 52, 160 33 S 265 12, 320 35 S 382 46, 400 30"
            fill="none"
            stroke="url(#sfg)"
          />
        </svg>
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


/* ===========================================================================
   THE ARGUMENT STAGES
   ---------------------------------------------------------------------------
   The stages above are mock interfaces: a chat window, a ranked list, a week
   of a calendar. They show what the product looks like. These five show what
   the product CLAIMS - the argument drawn rather than the screen photographed.

   Every one of them renders its finished state in the prerendered HTML, so a
   crawler and a no-JS reader get the whole thing; the playback is a client
   layer over the top, and all of it stands down under prefers-reduced-motion.

   No timing claims anywhere. Nothing here states a response duration.
   =========================================================================== */

/* ------------------------------------------- the inflow · the well and the tap
   The central argument of the property book, drawn: paid demand is a tap that
   stops the day the spend stops, organic is a well that keeps rising. Twelve
   months across, with the moment the spend stops marked. */

const WELL_D = 'M6 118 C 60 112, 104 96, 148 78 S 236 44, 300 22';
const TAP_D = 'M6 118 L 30 62 L 74 56 L 118 60 L 162 55 L 196 58 L 197 118 Z';

export function InflowStage() {
  const n = usePlayhead(2, 1400, 4600);
  return (
    <div className="stg" aria-label="Illustrative comparison: organic position compounds, paid demand stops when spend stops">
      <div className="stg-top">
        <span className="stg-lab">twelve months of demand</span>
        <span className="stg-chip">the well and the tap</span>
      </div>

      <div className="ifl">
        <svg viewBox="0 0 306 132" className="ifl-svg" aria-hidden="true">
          <defs>
            <linearGradient id="ifl-tap" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#8DA2A6" stopOpacity=".22" />
              <stop offset="1" stopColor="#8DA2A6" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* baseline */}
          <line x1="6" y1="118" x2="300" y2="118" className="ifl-base" />

          {/* the tap: fills fast, holds, then stops dead */}
          <path d={TAP_D} className={'ifl-tap' + (n >= 1 ? ' on' : '')} fill="url(#ifl-tap)" />

          {/* the moment the spend stops */}
          <line x1="197" y1="26" x2="197" y2="118" className={'ifl-cut' + (n >= 1 ? ' on' : '')} />

          {/* the well: slower, and it does not stop */}
          <path d={WELL_D} className={'ifl-well' + (n >= 2 ? ' on' : '')} fill="none" />
        </svg>

        <span className="ifl-cutlab">spend stops</span>

        <div className="ifl-key">
          <span className="ifl-k ifl-k-well">Organic · the well</span>
          <span className="ifl-k ifl-k-tap">Paid · the tap</span>
        </div>
      </div>

      <div className="stg-note">Illustrative &middot; the well is the part you keep</div>
    </div>
  );
}

/* ------------------------------------------------ the intake · the night shift
   A day of arrivals across twenty-four hours, run twice. The same arrivals,
   with the desk and without it. The office window is the lit band; everything
   outside it is the argument. */

// hour of arrival, 0-24
const ARRIVALS = [8.4, 10.1, 11.6, 13.2, 15.5, 17.4, 18.9, 20.2, 21.7, 23.1, 1.4, 6.8];
const OPEN_FROM = 9;
const OPEN_TO = 18;
const AFTER = ARRIVALS.filter((h) => h < OPEN_FROM || h > OPEN_TO).length;

export function NightShiftStage() {
  const n = usePlayhead(3, 1500, 4400);
  const pct = (h: number) => (h / 24) * 100;
  return (
    <div className="stg" aria-label="Illustrative day of enquiry arrivals, with and without an intake desk">
      <div className="stg-top">
        <span className="stg-lab">one day &middot; 24 hours</span>
        <span className="stg-chip">
          {AFTER} of {ARRIVALS.length} arrive outside hours
        </span>
      </div>

      <div className="nsh">
        <div className="nsh-row">
          <span className="nsh-lab">No desk</span>
          <div className="nsh-band">
            <span className="nsh-open" style={{ left: `${pct(OPEN_FROM)}%`, width: `${pct(OPEN_TO - OPEN_FROM)}%` }} />
            {ARRIVALS.map((h, i) => {
              const out = h < OPEN_FROM || h > OPEN_TO;
              return (
                <span
                  key={i}
                  className={'nsh-dot' + (out ? ' out' : '') + (n >= 2 && out ? ' gone' : '') + (n >= 1 ? ' shown' : '')}
                  style={{ left: `${pct(h)}%`, transitionDelay: `${i * 55}ms` }}
                />
              );
            })}
          </div>
          <span className="nsh-out">{n >= 2 ? `${ARRIVALS.length - AFTER} caught` : '\u2014'}</span>
        </div>

        <div className="nsh-row">
          <span className="nsh-lab">With the desk</span>
          <div className="nsh-band">
            <span className="nsh-open" style={{ left: `${pct(OPEN_FROM)}%`, width: `${pct(OPEN_TO - OPEN_FROM)}%` }} />
            {ARRIVALS.map((h, i) => (
              <span
                key={i}
                className={'nsh-dot held' + (n >= 3 ? ' shown' : '')}
                style={{ left: `${pct(h)}%`, transitionDelay: `${i * 55}ms` }}
              />
            ))}
          </div>
          <span className={'nsh-out' + (n >= 3 ? ' ok' : '')}>
            {n >= 3 ? `${ARRIVALS.length} caught` : '\u2014'}
          </span>
        </div>

        <div className="nsh-axis">
          <span />
          <span className="nsh-ticks">
            <span>midnight</span>
            <span className="nsh-ax-lit">9 to 6</span>
            <span>midnight</span>
          </span>
          <span />
        </div>
      </div>

      <div className="stg-note">
        Illustrative &middot; the lit band is when somebody is at the desk
      </div>
    </div>
  );
}

/* ------------------------------------------ the record · the report, as artifact
   Not a log list - the hero ticker already does that. This is the monthly
   Keystone Report as a thing you hand across a board table: the shape of the
   month, the totals, and the stamp that says it went out unedited. */

const HIST: number[] = [3, 2, 1, 1, 2, 4, 7, 9, 8, 6, 5, 7, 9, 8, 6, 5, 4, 3];

export function RecordStage() {
  const n = usePlayhead(HIST.length + 2, 105, 4200);
  const max = Math.max(...HIST);
  return (
    <div className="stg" aria-label="Illustrative monthly report: arrivals by hour, totals, and the record of every contact">
      <div className="stg-top">
        <span className="stg-lab">the keystone report &middot; monthly</span>
        <span className="stg-chip">forwarded unedited</span>
      </div>

      <div className="rcd">
        <div className="rcd-head">
          <span className="rcd-t">When they arrived</span>
          <span className="rcd-s">every contact, logged</span>
        </div>

        <div className="rcd-hist">
          {HIST.map((v, i) => (
            <span
              key={i}
              className={'rcd-bar' + (i < n ? ' on' : '')}
              style={{ height: `${(v / max) * 100}%` }}
            />
          ))}
        </div>
        <div className="rcd-axis">
          <span>6a</span>
          <span>noon</span>
          <span>6p</span>
          <span>midnight</span>
        </div>

        <div className="rcd-tot">
          <span>
            arrived <b>84</b>
          </span>
          <span>
            answered <b className="tl">84</b>
          </span>
          <span>
            booked <b>31</b>
          </span>
          <span>
            missed <b>0</b>
          </span>
        </div>

        <div className={'rcd-stamp' + (n >= HIST.length + 2 ? ' on' : '')}>
          On the record
        </div>
      </div>

      <div className="stg-note">
        Illustrative &middot; written to be tabled at a board meeting without editing
      </div>
    </div>
  );
}

/* ----------------------------------------- the trust · the average, rewritten
   The structural problem, drawn: the people most motivated to review a
   management firm are not the people who pay it. Two populations, one average.
   Nothing here is gated or filtered - the volume simply changes hands. */

type Dist = [number, number, number]; // stars, tenant count, owner count
const BEFORE: Dist[] = [[5, 1, 0], [4, 1, 0], [3, 1, 0], [2, 3, 0], [1, 5, 0]];
const AFTER_D: Dist[] = [[5, 1, 71], [4, 1, 38], [3, 1, 9], [2, 3, 2], [1, 5, 1]];

function avg(d: Dist[]) {
  let n = 0;
  let t = 0;
  d.forEach(([s, a, b]) => {
    n += a + b;
    t += s * (a + b);
  });
  return { n, a: t / n };
}

export function TrustStage() {
  const n = usePlayhead(2, 1500, 4600);
  const set = n >= 2 ? AFTER_D : BEFORE;
  const { n: count, a } = avg(set);
  const peak = Math.max(...AFTER_D.map(([, x, y]) => x + y));
  return (
    <div className="stg" aria-label="Illustrative review distribution: tenant reviews versus owner reviews and the resulting average">
      <div className="stg-top">
        <span className="stg-lab">who actually writes the reviews</span>
        <span className="stg-chip">{count} reviews</span>
      </div>

      <div className="trs">
        <div className="trs-score">
          <span className="trs-n">{a.toFixed(1)}</span>
          <span className="trs-of">average, out of five</span>
        </div>

        <div className="trs-rows">
          {set.map(([s, ten, own]) => (
            <div className="trs-row" key={s}>
              <span className="trs-s">{s}</span>
              <span className="trs-track">
                <span className="trs-ten" style={{ width: `${(ten / peak) * 100}%` }} />
                <span className="trs-own" style={{ width: `${(own / peak) * 100}%` }} />
              </span>
            </div>
          ))}
        </div>

        <div className="trs-key">
          <span className="trs-k trs-k-ten">Tenant, worst week</span>
          <span className="trs-k trs-k-own">Owner, quietly happy</span>
        </div>
      </div>

      <div className="stg-note">
        Illustrative &middot; volume and timing only. Nothing written, gated or filtered
      </div>
    </div>
  );
}

/* -------------------------------------------------- the keystone · the arch
   The brand mark, assembling. Voussoirs rise from both springs, the keystone
   drops in last, and only then does the load run across the span. Take it out
   and both sides come down - which is the whole reason for the name. */

const VOUSSOIRS: { d: string; side: 'l' | 'r' | 'k'; i: number }[] = [
  { side: 'l', i: 0, d: 'M20 120 L20 92 L48 82 L52 110 Z' },
  { side: 'l', i: 1, d: 'M50 108 L46 80 L79 62 L88 88 Z' },
  { side: 'l', i: 2, d: 'M86 86 L77 60 L114 48 L119 76 Z' },
  { side: 'r', i: 0, d: 'M244 120 L244 92 L216 82 L212 110 Z' },
  { side: 'r', i: 1, d: 'M214 108 L218 80 L185 62 L176 88 Z' },
  { side: 'r', i: 2, d: 'M178 86 L187 60 L150 48 L145 76 Z' },
  { side: 'k', i: 3, d: 'M117 74 L112 46 L152 46 L147 74 Z' },
];

export function KeystoneArchStage() {
  // 0 springs, 1-3 courses rise, 4 keystone lands, 5 load runs
  const n = usePlayhead(5, 620, 4200);
  return (
    <div className="stg" aria-label="Illustrative arch assembling, with the keystone set last">
      <div className="stg-top">
        <span className="stg-lab">the keystone</span>
        <span className="stg-chip">{n >= 4 ? 'the span holds' : 'setting the stones'}</span>
      </div>

      <div className="ksa">
        <svg viewBox="0 0 264 136" className="ksa-svg" aria-hidden="true">
          <defs>
            <linearGradient id="ksa-load" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#3FE0B5" stopOpacity="0" />
              <stop offset=".5" stopColor="#7DF5DD" />
              <stop offset="1" stopColor="#3FE0B5" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* the ground the springs sit on */}
          <line x1="8" y1="120.5" x2="256" y2="120.5" className="ksa-ground" />

          {VOUSSOIRS.map((v) => (
            <path
              key={v.side + v.i}
              d={v.d}
              className={
                'ksa-v ksa-' + v.side + (n >= (v.side === 'k' ? 4 : v.i + 1) ? ' set' : '')
              }
            />
          ))}

          {/* the load only runs once the keystone is in */}
          <path
            d="M24 92 C 60 40, 96 30, 132 30 S 204 40, 240 92"
            className={'ksa-load' + (n >= 5 ? ' on' : '')}
            fill="none"
            stroke="url(#ksa-load)"
          />
        </svg>

        <p className="ksa-cap">
          {n >= 4
            ? 'The span carries. Take the keystone out and both sides come down.'
            : 'Four engines rising. Nothing carries until the last stone is in.'}
        </p>
      </div>

      <div className="stg-note">Illustrative &middot; ranking, intake, the record, the trust</div>
    </div>
  );
}

/* ------------------------------------------------ the architecture · lattice
   The whole product set in one picture. The Inflow is the traffic half and it
   has two taps into it, The Well and The Tap. Under it sits The Desk, the
   intake half, on two channels. Under that, The Record. Every name on the site
   and in the kits appears here once, in its place.

   Static by design - it is a map, not a scene, and nothing about it benefits
   from motion. Colours come from the tokens via inline style so this adds no
   CSS classes. */

const LAT_LABEL: React.CSSProperties = {
  fontFamily: 'var(--f-mono)',
  fontSize: '9.5px',
  letterSpacing: '.14em',
  textTransform: 'uppercase',
  fill: 'var(--faint)',
};
const LAT_NAME: React.CSSProperties = {
  fontFamily: 'var(--f-display)',
  fontSize: '15px',
  fontWeight: 650,
  fill: 'var(--text)',
};
const LAT_NAME_T: React.CSSProperties = { ...LAT_NAME, fill: 'var(--teal)' };
const LAT_LINE: React.CSSProperties = { stroke: 'var(--line)', strokeWidth: 1 };
const LAT_BOX: React.CSSProperties = {
  fill: 'var(--panel-2)',
  stroke: 'var(--line)',
  strokeWidth: 1,
};
const LAT_BOX_T: React.CSSProperties = {
  fill: 'rgba(63,224,181,.06)',
  stroke: 'rgba(63,224,181,.35)',
  strokeWidth: 1,
};

export function ArchitectureStage() {
  return (
    <div
      className="stg"
      aria-label="How the parts fit: The Inflow is the traffic half, made of The Well (organic) and The Tap (paid). The Desk is the intake half, on a web channel and a voice channel. The Record proves both."
    >
      <div className="stg-top">
        <span className="stg-lab">how the parts fit</span>
        <span className="stg-chip">one system</span>
      </div>

      <svg viewBox="0 0 320 226" width="100%" role="img" aria-hidden="true">
        {/* the inflow - the layer */}
        <rect x="86" y="6" width="148" height="34" rx="8" style={LAT_BOX} />
        <text x="160" y="21" textAnchor="middle" style={LAT_LABEL}>
          the traffic half
        </text>
        <text x="160" y="34" textAnchor="middle" style={LAT_NAME}>
          The Inflow
        </text>

        {/* fork down to the two halves */}
        <path d="M160 40 V 52 H 74 V 64" fill="none" style={LAT_LINE} />
        <path d="M160 40 V 52 H 246 V 64" fill="none" style={LAT_LINE} />

        <rect x="10" y="64" width="128" height="38" rx="8" style={LAT_BOX_T} />
        <text x="74" y="79" textAnchor="middle" style={LAT_LABEL}>
          organic
        </text>
        <text x="74" y="93" textAnchor="middle" style={LAT_NAME_T}>
          The Well
        </text>

        <rect x="182" y="64" width="128" height="38" rx="8" style={LAT_BOX} />
        <text x="246" y="79" textAnchor="middle" style={LAT_LABEL}>
          paid
        </text>
        <text x="246" y="93" textAnchor="middle" style={LAT_NAME}>
          The Tap
        </text>

        {/* converge into the desk */}
        <path d="M74 102 V 116 H 160 V 128" fill="none" style={LAT_LINE} />
        <path d="M246 102 V 116 H 160 V 128" fill="none" style={LAT_LINE} />

        <rect x="46" y="128" width="228" height="42" rx="8" style={LAT_BOX_T} />
        <text x="160" y="144" textAnchor="middle" style={LAT_LABEL}>
          the intake half · web channel · voice channel
        </text>
        <text x="160" y="160" textAnchor="middle" style={LAT_NAME_T}>
          The Desk
        </text>

        <path d="M160 170 V 186" fill="none" style={LAT_LINE} />

        <rect x="86" y="186" width="148" height="34" rx="8" style={LAT_BOX} />
        <text x="160" y="201" textAnchor="middle" style={LAT_LABEL}>
          the proof
        </text>
        <text x="160" y="214" textAnchor="middle" style={LAT_NAME}>
          The Record
        </text>
      </svg>

      <div className="stg-note">
        Ranking is half of it &middot; answering is the half that pays
      </div>
    </div>
  );
}
