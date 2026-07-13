/**
 * The Catchment Report.
 *
 * The cinematic spec calls this a trust asset and a design centrepiece at once,
 * and it is right. Every competitor in this market promises an "owner dashboard"
 * and none of them will show you one before you have paid. This is what lands on
 * the practice owner's desk on the first of the month, rendered, before he has
 * given up a dollar.
 *
 * It is also where the Catch Lock stops being a slogan and becomes an audit
 * trail: the caught count and the total are the same number, and the line at the
 * bottom says what happens on the month they are not.
 *
 * Pure SVG/CSS. Zero images, zero JS, zero network cost. The numbers are a
 * plausible month for a mid-size practice and the component is labelled as a
 * sample, because putting a fake client's real-looking data on a page about
 * honesty would be an odd way to make the point.
 */

const CHANNELS: [string, number, number][] = [
  // label, arrived, caught
  ['Phone', 34, 34],
  ['Web chat', 26, 26],
  ['Contact form', 19, 19],
  ['Google profile', 15, 15],
];

const AFTER_HOURS: [string, string, string][] = [
  ['21:48', 'Phone', 'Booked - Thu 10:30'],
  ['22:15', 'Web chat', 'Qualified out - no coverage'],
  ['06:52', 'Contact form', 'Booked - Fri 14:00'],
  ['23:31', 'Phone', 'Booked - Mon 09:15'],
];

export default function CatchmentReport() {
  const arrived = CHANNELS.reduce((s, c) => s + c[1], 0);
  const caught = CHANNELS.reduce((s, c) => s + c[2], 0);
  const max = Math.max(...CHANNELS.map((c) => c[1]));

  return (
    <div className="rep reveal">
      <div className="rep-head">
        <div>
          <div className="rep-lab">The Catchment Report</div>
          <div className="rep-title">Sample &middot; a mid-size practice, one month</div>
        </div>
        <div className="rep-stamp">Issued the 1st</div>
      </div>

      <div className="rep-top">
        <div className="rep-fig">
          <div className="rep-n">{arrived}</div>
          <div className="rep-l">enquiries arrived</div>
        </div>
        <div className="rep-fig">
          <div className="rep-n rep-good">{caught}</div>
          <div className="rep-l">answered and offered a booking</div>
        </div>
        <div className="rep-fig">
          <div className="rep-n">41</div>
          <div className="rep-l">booked into the calendar</div>
        </div>
        <div className="rep-fig">
          <div className="rep-n">
            <em>0</em>
          </div>
          <div className="rep-l">went unanswered</div>
        </div>
      </div>

      <div className="rep-body">
        <div className="rep-block">
          <div className="rep-sub">Where they came from</div>
          {CHANNELS.map(([name, n], i) => (
            <div className="rep-row" key={name} style={{ ['--i' as string]: i }}>
              <span className="rep-ch">{name}</span>
              <span className="rep-track">
                <span className="rep-fill" style={{ ['--w' as string]: `${(n / max) * 100}%` }} />
              </span>
              <span className="rep-v">{n}</span>
            </div>
          ))}
        </div>

        <div className="rep-block">
          <div className="rep-sub">Arrived after you had gone home</div>
          {AFTER_HOURS.map(([t, ch, out], i) => (
            <div className="rep-log" key={t} style={{ ['--i' as string]: i }}>
              <span className="rep-t">{t}</span>
              <span className="rep-src">{ch}</span>
              <span className={'rep-out' + (out.startsWith('Booked') ? ' rep-booked' : '')}>{out}</span>
            </div>
          ))}
          <p className="rep-note">
            Four of them. Every one answered inside sixty seconds. Three booked. This is the page most
            owners look at first, and it is the one nobody else will show you.
          </p>
        </div>
      </div>

      <div className="rep-foot">
        <span className="rep-lock">Catch Lock</span>
        <span>
          Arrived <b>{arrived}</b> &middot; answered <b>{caught}</b> &middot; unanswered <b>0</b>.
          Any month those first two numbers do not match, <b>you do not pay for it.</b>
        </span>
      </div>
    </div>
  );
}
