import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import { serviceSchema, faqSchema, breadcrumbs } from '../lib/schema';

const URL = '/solutions';

const DESC =
  'Who I build for. Law firms are the specialty - personal injury, family, criminal defence and immigration. The same AI intake and visibility system works for any business where a missed call is a lost job.';

const SOL_FAQ: [string, string][] = [
  [
    'Do you only work with law firms?',
    'Law firms are the specialty and where the system is sharpest, because legal intake has conflict checks, jurisdiction and urgency baked into it. But the underlying problem - demand arriving when nobody can answer - is not a legal problem. I build the same system for any business where one missed call is real money.',
  ],
  [
    'Why specialise in law firms at all?',
    'Because depth beats breadth. Legal intake has rules a general answering service gets wrong, and I spent close to a decade inside the justice system before building any of this. Specialising means the screening questions, the language and the handoffs are right on day one instead of after three months of correction.',
  ],
  [
    'What makes a business a good fit?',
    'One new client is worth real money rather than a few hundred dollars, enquiries arrive outside business hours, and there is nobody who can reliably answer them. If a missed call costs you a job, the system pays for itself. If your work is low-value and high-volume, it probably does not.',
  ],
  [
    'I am not a law firm. Will the pages say the wrong thing?',
    'No. The intake desk is built on your knowledge, your screening rules and your words. Nothing about it is borrowed from a legal script - the legal specialty shapes how carefully I build intake, not what your version says.',
  ],
];

const LEGAL: [string, string][] = [
  ['Personal injury', 'Someone just injured is calling from a hospital corridor. Whoever answers gets the file.'],
  ['Family & divorce', 'The call comes at night, after a decision that could not wait for business hours.'],
  ['Criminal defence', 'An arrest does not keep office hours. Neither can intake.'],
  ['Immigration', 'Deadlines, status and fear. The firm that answers calmly at 9pm is the one retained.'],
];

const OTHERS: string[] = [
  'Accountants & bookkeepers',
  'Dental & orthodontic',
  'Medical & specialist clinics',
  'Veterinary',
  'Insurance brokers',
  'Real estate',
  'HVAC & plumbing',
  'Electrical & roofing',
  'Restoration & emergency trades',
  'Auto service',
  'Financial advisers',
  'Any appointment-led practice',
];

export default function Solutions() {
  return (
    <main>
      <Seo
        title="Who I Help - Law Firms First, Not Law Firms Only | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[
          serviceSchema('AI intake and visibility systems by industry', DESC, URL),
          breadcrumbs([['Home', '/'], ['Who I Help', URL]]),
          faqSchema(SOL_FAQ),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <span className="eyebrow reveal">Who I help</span>
          <h1 className="reveal">
            Law firms are the specialty. <span className="em">They are not the only door.</span>
          </h1>
          <p className="sub reveal">
            I build for law firms first because legal intake is the hardest version of the problem -
            conflict checks, jurisdiction, urgency, and a caller in the worst week of their life who
            retains whoever picks up. Solve it there and it is solved nearly everywhere else. If you
            are not a law firm, the system does not change shape. It is built on your knowledge, your
            screening rules, and your words.
          </p>
          <div className="ctas reveal">
            <Link to="/book/" className="btn btn-primary">
              Book a call <Arrow />
            </Link>
            <a href={`tel:${PHONE_E164}`} className="btn btn-ghost">
              Call {PHONE_DISP}
            </a>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The specialty</span>
            <h2>
              Legal intake, <span className="em">built by someone who worked inside it.</span>
            </h2>
            <p className="lead">
              Close to a decade in courtrooms and federal case files before I built any of this. I
              know what a real intake looks like and why the first firm to pick up is usually the
              firm that gets retained.{' '}
              <Link to="/the-watershed">See the full system</Link>.
            </p>
          </div>
          <div className="vgrid four reveal">
            {LEGAL.map(([h, b]) => (
              <div className="vtile" key={h}>
                <h3>{h}</h3>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Everyone else</span>
            <h2>
              The problem is not legal.{' '}
              <span className="em">It is that nobody answers after five.</span>
            </h2>
            <p className="lead">
              Demand arriving when there is nobody to catch it is a universal problem with a
              universal cost. If one new client is worth real money to you and your phone rings when
              you cannot reach it, this is built for you too.
            </p>
          </div>
          <div className="inds reveal">
            <span className="ind lead-ind">Law firms - the specialty</span>
            {OTHERS.map((o) => (
              <span className="ind" key={o}>
                {o}
              </span>
            ))}
          </div>
          <p className="note reveal">
            Not on the list is not a no. If a missed enquiry costs you real money, tell me what you
            do and I will tell you straight whether I can help.
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The honest filter</span>
            <h2>A no is a good answer, and it is faster than a bad yes.</h2>
          </div>
          <div className="steps reveal">
            <div className="step">
              <div className="sn">This is for you if</div>
              <ul className="plist" style={{ marginTop: 16 }}>
                <li>One new client is worth real money, not a few hundred dollars</li>
                <li>Enquiries arrive after hours and nobody reliably catches them</li>
                <li>You want booked appointments, not a dashboard of impressions</li>
                <li>You would rather own the channel than rent leads from an aggregator</li>
              </ul>
            </div>
            <div className="step">
              <div className="sn">This is not for you if</div>
              <ul className="plist" style={{ marginTop: 16 }}>
                <li>You are shopping purely on price</li>
                <li>You would rather not know how many enquiries you are missing</li>
                <li>Your work is low-value and high-volume</li>
                <li>You want page one overnight, before the work compounds</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap narrow">
          <div className="sec-head left reveal">
            <span className="eyebrow">Questions</span>
            <h2>Answered plainly.</h2>
          </div>
          <FAQ items={SOL_FAQ} />
        </div>
      </section>

      <CTAStrip
        head={<>Tell me what you do. I will tell you if I can help.</>}
        sub="Fifteen minutes on the phone, no pitch. If your market is not winnable or the numbers do not work, I will say so on the call rather than sell you something."
      />
    </main>
  );
}
