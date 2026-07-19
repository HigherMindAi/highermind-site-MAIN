import { useEffect, useState } from 'react';

/**
 * The Record in the hero. The first four rows and the totals are in the
 * prerendered HTML, so crawlers read real content; the rotation is a client
 * layer on top. Labelled as a sample until Cortex feeds it live numbers.
 */
const ROWS: [string, string, string, string][] = [
  ['9:41p', 'Call', 'Slip & fall · Brampton', 'Booked Thu 10:30'],
  ['9:44p', 'Web', 'MVA enquiry · screened in', 'Booked Fri 2:00'],
  ['10:12p', 'Call', 'Family · urgent', 'Answered 4s'],
  ['11:03p', 'Form', 'Immigration · qualified', 'Booked Mon 9:15'],
  ['6:52a', 'Call', 'Criminal · conflict cleared', 'Booked Tue 11:00'],
  ['1:18a', 'Web', 'Injury · after-hours', 'Booked Wed 3:30'],
];
const N = ROWS.length;

export default function RecordTicker() {
  const [head, setHead] = useState(3);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setHead((h) => h + 1), 2600);
    return () => clearInterval(t);
  }, []);

  const visible = Array.from({ length: 4 }, (_, k) => {
    const idx = (((head - 3 + k) % N) + N) % N;
    return { idx, row: ROWS[idx] };
  });

  return (
    <div className="rec reveal" aria-label="Illustrative log of enquiries answered and booked">
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
        <span>
          arrived <b>62</b>
        </span>
        <span>
          answered <b>62</b>
        </span>
        <span>
          booked <b className="tl">50</b>
        </span>
        <span>
          missed <b>0</b>
        </span>
      </div>
      <div className="rec-note">Sample month &middot; every enquiry logged and timestamped</div>
    </div>
  );
}
