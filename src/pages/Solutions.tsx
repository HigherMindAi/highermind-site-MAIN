import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import { serviceSchema, faqSchema, breadcrumbs } from '../lib/schema';

const URL = '/solutions';

const DESC =
  'Who I build for. Property and condominium management is the specialty, with law firms as the second book. The same ranking and intake system works for any business where a missed enquiry is lost money.';

const SOL_FAQ: [string, string][] = [
  [
    'Do you only work with property management firms?',
    'No. Property and condominium management is the specialty and where most of my work goes. Law firms are the second book. Both are versions of the same problem - an urgent enquiry arriving when nobody can answer, worth real recurring money to whoever catches it. The underlying system is the same and I build it for other appointment-led businesses too.',
  ],
  [
    'Why specialise at all?',
    'Because depth beats breadth. Legal intake has rules a general answering service gets wrong, and I spent close to a decade inside the justice system before building any of this. Property management has its own set - CMRAO licensing, escalation orders, common element questions - and I spent ten months contracted inside a property operation learning where they bite. Specialising means the screening questions, the language and the handoffs are right on day one instead of after three months of correction.',
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

const PROPERTY: [string, string][] = [
  ['Rental portfolios', 'An owner deciding to stop managing it himself reads three results and calls two of them. Position decides whether you are one.'],
  ['Condominium boards', 'Three names go to the board and somebody searches all three that evening. What they find decides who receives the package.'],
  ['Mixed firms', 'Two businesses under one roof with two different problems. Sequenced rental-first, because that side produces a number you can feel.'],
  ['Solo managers', 'Under forty doors, answering your own phone. A one-time rebuild rather than a retained system, and I will say so.'],
];

const OTHERS: string[] = [
  'Accountants & bookkeepers',
  'Dentists & orthodontists',
  'Medical & specialist clinics',
  'Veterinary',
  'Insurance brokers',
  'Financial advisers',
  'Any appointment-led practice',
];

export default function Solutions() {
  return (
    <main>
      <Seo
        title="Who I Help - Property Management First, Not Only | HigherMindAI"
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
            Property management is the specialty.{' '}
            <span className="em">It is not the only door.</span>
          </h1>
          <p className="sub reveal">
            Property and condominium management first, because a door pays every month for years and
            one won owner carries the whole system. Law firms second, because legal intake is the
            hardest version of the same problem and I worked inside the justice system for close to a
            decade. If you are neither, the system does not change shape. It is built on your
            knowledge, your screening rules, and your words.
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
              Property &amp; condominium management,{' '}
              <span className="em">built by someone who managed it.</span>
            </h2>
            <p className="lead">
              I spent ten months contracted inside a property management operation - the sales and
              CRM side, and the maintenance arm that serviced the portfolio. Owner enquiries, work
              orders, and units that had to turn before the month closed. A door is worth more to you
              than a job is worth to anyone else, which is why the build order is different here.{' '}
              <Link to="/property-management">See the property track</Link>.
            </p>
          </div>
          <div className="vgrid four reveal">
            {PROPERTY.map(([h, b]) => (
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
            <span className="eyebrow">The second book</span>
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
            <span className="ind lead-ind">Property &amp; condominium management - the specialty</span>
            <span className="ind lead-ind">Law firms - the second book</span>
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
