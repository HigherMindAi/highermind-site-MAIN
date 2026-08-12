import { useEffect, useState } from 'react';

/**
 * The Record. The first four rows and the totals are in the prerendered HTML,
 * so crawlers read real content; the rotation is a client layer on top.
 * Labelled as a sample until the desk feeds it live numbers.
 *
 * No response-time claims in any row. Status reads "Answered" or "Booked" -
 * never a duration. That is a permanent copy rule, not a style preference.
 */
type Variant = 'legal' | 'property';

const LEGAL: [string, string, string, string][] = [
  ['9:41p', 'Call', 'Slip & fall \u00b7 Brampton', 'Booked Thu 10:30'],
  ['9:44p', 'Web', 'MVA enquiry \u00b7 screened in', 'Booked Fri 2:00'],
  ['10:12p', 'Call', 'Family \u00b7 urgent', 'Answered'],
  ['11:03p', 'Form', 'Immigration \u00b7 qualified', 'Booked Mon 9:15'],
  ['6:52a', 'Call', 'Criminal \u00b7 conflict cleared', 'Booked Tue 11:00'],
  ['1:18a', 'Web', 'Injury \u00b7 after-hours', 'Booked Wed 3:30'],
];

const PROPERTY: [string, string, string, string][] = [
  ['7:12p', 'Call', 'Owner enquiry \u00b7 4 doors', 'Booked Thu 10:30'],
  ['9:38p', 'Web', 'Owner enquiry \u00b7 qualified', 'Booked Fri 2:00'],
  ['11:47p', 'Call', 'Work order \u00b7 water, unit 304', 'Routed \u00b7 on-call'],
  ['1:22a', 'Call', 'Resident \u00b7 no heat', 'Routed \u00b7 escalated'],
  ['8:05a', 'Form', 'Board question \u00b7 reserve', 'Routed \u00b7 licensed mgr'],
  ['6:41p', 'Web', 'Owner enquiry \u00b7 condo, 1 unit', 'Booked Mon 9:15'],
];

const FOOT: Record<Variant, [string, string][]> = {
  legal: [
    ['arrived', '62'],
    ['answered', '62'],
    ['booked', '50'],
    ['missed', '0'],
  ],
  property: [
    ['arrived', '84'],
    ['answered', '84'],
    ['booked', '31'],
    ['missed', '0'],
  ],
};

interface Props {
  variant?: Variant;
}

export default function RecordTicker({ variant = 'legal' }: Props) {
  const rows = variant === 'property' ? PROPERTY : LEGAL;
  const n = rows.length;
  const [head, setHead] = useState(3);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setHead((h) => h + 1), 2600);
    return () => clearInterval(t);
  }, []);

  const visible = Array.from({ length: 4 }, (_, k) => {
    const idx = (((head - 3 + k) % n) + n) % n;
    return { idx, row: rows[idx] };
  });

  const foot = FOOT[variant];

  return (
    <div
      className="rec reveal"
      aria-label="Illustrative log of enquiries answered, routed and booked"
    >
      <div className="rec-head">
        <span className="rec-lab">The Record</span>
        <span className="rec-live">
          <span className="rec-dot" />
          24/7
        </span>
      </div>
      <div className="rec-rows">
        {visible.map(({ idx, row: [tm, ch, tx, st] }) => (
          <div className="recrow" key={idx}>
            <span className="rt">{tm}</span>
            <span className="rc">{ch}</span>
            <span className="rx">{tx}</span>
            <span className={'rs' + (st.startsWith('Booked') ? ' ok' : '')}>{st}</span>
          </div>
        ))}
      </div>
      <div className="rec-foot">
        {foot.map(([lab, val], i) => (
          <span key={lab}>
            {lab}{' '}
            <b className={i === 2 ? 'tl' : undefined}>{val}</b>
          </span>
        ))}
      </div>
      <div className="rec-note">
        Sample month &middot; every contact logged with the time it came in and the time it was
        answered
      </div>
    </div>
  );
}
