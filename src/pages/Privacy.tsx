import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { EMAIL, PHONE_E164, PHONE_DISP } from '../lib/site';
import { CTA_HREF } from '../lib/ladder';
import { breadcrumbs, orgSchema } from '../lib/schema';

/*
 * v15.3 - Privacy. Required the day Google Analytics goes on the site (its
 * terms need the use disclosed), and the plain version of what gets counted.
 * Same page shell as Contact: no new components, no new styles.
 */

const URL = '/privacy/';

const DESC =
  'What highermindai.com counts, why, and what it never does. Plain words from Derek Train, the one person who runs HigherMindAI in Erin, Ontario.';

const UPDATED = '23 September 2026';

const BLOCKS: [string, string][] = [
  [
    'What I count',
    'Which pages are visited, how a visitor arrived (a search, a link, a post, a profile), the rough area a visit comes from, the device type, and whether someone booked the nine minutes, called, or sent an email from the site. I use Google Analytics for this. Where a tool is switched on, I may also use Microsoft Clarity to see where a page confuses people, and the Meta pixel to measure visits that come from Facebook or Instagram.',
  ],
  [
    'What I keep in your browser',
    'A small note of how you first arrived (the link or site that sent you and the page you landed on), kept for up to ninety days. If you book, it travels with the booking so I know where you found me without asking twice. It is never sold.',
  ],
  [
    'What you give me when you book',
    'Your name, contact details and anything you type into the booking form go to my booking calendar (Cal.com) and to me. I use them to hold the nine minutes and follow up on it. Nothing else.',
  ],
  [
    'What I never do',
    'I never sell your details, and nothing you give this site is added to a mailing list.',
  ],
];

export default function Privacy() {
  return (
    <main>
      <Seo
        title="Privacy - What This Site Counts | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[orgSchema(), breadcrumbs([['Home', '/'], ['Privacy', URL]])]}
      />

      <section className="phero">
        <div className="wrap">
          <span className="eyebrow reveal">Privacy</span>
          <h1 className="reveal">
            What this site counts. <span className="em">And what it never does.</span>
          </h1>
          <p className="sub reveal">
            I count how people find me, the same way I count it for the businesses I work with. Here
            is exactly what that means. Last updated {UPDATED}.
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap narrow">
          {BLOCKS.map(([label, body]) => (
            <div className="sec-head left reveal" key={label} style={{ marginBottom: 44 }}>
              <span className="eyebrow">{label}</span>
              <p className="lead">{body}</p>
            </div>
          ))}
          <div className="sec-head left reveal">
            <span className="eyebrow">Your choices</span>
            <p className="lead">
              You can block or clear cookies and site storage in your browser at any time, and the
              site keeps working. To see or delete anything I hold about you, email{' '}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or call{' '}
              <a href={`tel:${PHONE_E164}`}>{PHONE_DISP}</a>. I answer it myself.
            </p>
            <p className="lead">
              Questions before the nine minutes? <Link to={CTA_HREF}>Pick a time here.</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
