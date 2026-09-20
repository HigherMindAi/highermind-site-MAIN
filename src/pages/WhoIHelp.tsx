import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import { serviceSchema, faqSchema, breadcrumbs } from '../lib/schema';

const URL = '/who-i-help/';

const DESC =
  'One visibility and intake system, built out for auto service and collision, auto parts and recyclers, trades and home services, and property management.';

const SOL_FAQ: [string, string][] = [
  [
    'Do you only work with the four books?',
    'No. It is one system, and four books already have the scripts and the vocabulary worked out because I built for them first - auto service and collision, auto parts and recyclers, trades and home services, and property and condominium management. Every other business runs on the same two failures: they never find you, or nobody answers. If one won client is worth having in your business, the arithmetic works.',
  ],
  [
    'Why build books at all instead of one generic system?',
    'Because depth beats breadth on the parts that get a business in trouble. A shop desk that tells a driver whether damage is covered by his policy is a problem, and one that touches a deductible is a worse one. A parts desk that confirms stock the shelf does not have costs a customer and a reputation. A property desk that answers a question reserved to a licensed manager is worse again. Building each book separately means the screening questions, the language and the handoffs are right on day one instead of after three months of correction.',
  ],
  [
    'What makes a business a good fit?',
    'One new client is worth real money rather than a few hundred dollars, enquiries arrive outside business hours, and there is nobody who can reliably answer them. If a missed call costs you a job, the system pays for itself. If your work is low-value and high-volume, it probably does not.',
  ],
  [
    'My trade is not one of the four. Will the copy say the wrong thing?',
    'No. The desk is built on your knowledge, your screening rules and your words. The books I have already built shape how carefully I build intake and where I know the boundaries bite - they do not decide what your version says.',
  ],
];

const BOOKS: [string, string, string, string][] = [
  [
    'Auto service & collision',
    'Intake first',
    'Intake first, because the leak is loud and provable in one phone call. The counter is one person also writing estimates, in a building with air tools running. Then the category, because collision and mechanical are two of them and most shops are in one.',
    '/auto-service-collision/',
  ],
  [
    'Auto parts & recyclers',
    'The build first',
    'The build first, and it is the one book where that is true on day one. A customer cannot specify a year, make, model and part anywhere on most yard sites, so every request has to survive a phone call. There is a live one you can go and use.',
    '/auto-parts-recyclers/',
  ],
  [
    'Trades & home services',
    'Visibility first',
    'Visibility first, almost always. Plumbing, HVAC, electrical, concrete, landscaping, septic, painting and the rest - two to twelve people and the owner still on tools. The site is the second conversation, never the first.',
    '/trades/',
  ],
  [
    'Property & condominium management',
    'Visibility first',
    'Visibility first. An owner deciding to stop managing it themselves is already searching, and when three names go to a board somebody looks all three up that evening.',
    '/property-management/',
  ],
];

const OTHERS: string[] = [
  'Roofing',
  'Tree care & arborists',
  'Restoration',
  'Towing & recovery',
  'Tyre & wheel',
  'Fleet & commercial service',
  'Accountants & bookkeepers',
  'Medical & specialist clinics',
  'Veterinary',
  'Insurance brokers',
  'Any appointment-led business',
];

export default function WhoIHelp() {
  return (
    <main>
      <Seo
        title="Who I Help - Auto, Trades and Property Management | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[
          serviceSchema('Local search, AI intake and website builds by trade', DESC, URL),
          breadcrumbs([['Home', '/'], ['Who I Help', URL]]),
          faqSchema(SOL_FAQ),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <span className="eyebrow reveal">Who I help</span>
          <h1 className="reveal">
            One system, <span className="em">four books it is already built for.</span>
          </h1>
          <p className="sub reveal">
            Auto service and collision, auto parts and recyclers, trades and home services, and
            property and condominium management already have the scripts and the vocabulary worked
            out, because I built for them first. <b>If you are none of the four, the system does not
            change shape.</b> It is built on your knowledge, your screening rules, and your words.
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
            <span className="eyebrow">Where it is already built out</span>
            <h2>
              Same two failures. <span className="em">Different order of build.</span>
            </h2>
            <p className="lead">
              Every business here loses work the same two ways - they never find you, or nobody
              answers. What changes between books is which end is bleeding faster, and that decides
              what I build first. It is the first thing settled on the call and it is settled with
              your numbers, not mine.
            </p>
          </div>
          <div className="vgrid reveal">
            {BOOKS.map(([h, tag, b, href]) => (
              <div className="vtile" key={h}>
                <span className="sn">{tag}</span>
                <h3>{h}</h3>
                <p>{b}</p>
                <p style={{ marginTop: 14 }}>
                  <Link to={href}>See the detail</Link>
                </p>
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
              The problem is not the trade.{' '}
              <span className="em">It is that nobody answers after five.</span>
            </h2>
            <p className="lead">
              Demand arriving when there is nobody to catch it is a universal problem with a
              universal cost. If one new client is worth real money to you and your phone rings when
              you cannot reach it, this is built for you too.
            </p>
          </div>
          <div className="inds reveal">
            <span className="ind lead-ind">Property &amp; condominium management</span>
            <span className="ind lead-ind">Roofing</span>
            <span className="ind lead-ind">Arborists &amp; tree care</span>
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
                <li>You want booked work, not a dashboard of impressions</li>
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
        sub="Nine minutes on the phone, no pitch. If your market is taken or the numbers do not work, I will say so on the call rather than sell you something."
      />
    </main>
  );
}
