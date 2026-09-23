import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import Plate from '../components/Plate';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import type { StillKey } from '../lib/media';
import { orgSchema, faqSchema, breadcrumbs } from '../lib/schema';

const URL = '/who-i-help/';

const DESC =
  'Trades, auto parts and recyclers, auto service and collision. Found on Google, answered when you cannot pick up, every call counted. Property management too.';

interface Book {
  name: string;
  href: string;
  img: StillKey;
  lands: string;
  wound: string;
  body: string;
}

const BOOKS: Book[] = [
  {
    name: 'Trades',
    href: '/trades/',
    img: 'vTrades',
    lands: 'Most start on the Foundation',
    wound: 'On the tools all day, and the call at seven in the evening rings out.',
    body: 'Plumbing, heating and cooling, electrical, roofing, concrete, landscaping, septic, painting - two to twelve people and the owner still on the tools. The work is good and the phone is the leak. The Foundation puts you in the map, keeps your pages alive with your own job photos, answers when you cannot, and counts every call.',
  },
  {
    name: 'Auto Parts and Recyclers',
    href: '/auto-parts-recyclers/',
    img: 'vAutoParts',
    lands: 'The Read, then the Storefront',
    wound: 'Nobody can tell from the site whether the part fits their car.',
    body: 'So every request has to survive a phone call, and the counter is one person answering all of them. A parts business is the one place the site does the heavy lifting: a matcher on year, make, model and trim, a page for each vehicle you stock for, and a request that reaches the counter complete. It usually starts with The Read, because the mess cannot be priced from outside.',
  },
  {
    name: 'Auto Service and Collision',
    href: '/auto-service-collision/',
    img: 'vAutoService',
    lands: 'Most start on the Foundation',
    wound: 'Bays full, hands dirty, and the booking goes to the shop that answered.',
    body: 'The counter is one person also writing estimates in a building with air tools running. Collision and mechanical are two different searches and most shops only show up for one. The Foundation fixes the profile for both, answers the calls the counter cannot take, and counts them.',
  },
];

const FAQ_ITEMS: [string, string][] = [
  [
    'Do you only work with trades and auto?',
    'Those three are the ones I build for every week, so the vocabulary, the questions the desk asks and the boundaries are already worked out. Property and condominium management runs on the same system. Any business where one won customer is worth real money and the phone rings when nobody can answer fits the same three steps.',
  ],
  [
    'What makes a business a good fit?',
    'One new customer is worth real money, enquiries arrive when nobody can answer them, and the business is either losing the calls it already gets or not being found at all. If a missed call costs you a job, the Foundation earns its keep.',
  ],
  [
    'Do you work outside the Headwaters?',
    'Yes. I am based in Erin and work with businesses across Canada and the United States. The profile, the desk and the counting are all done remotely.',
  ],
];

export default function WhoIHelp() {
  return (
    <main>
      <Seo
        title="Who I Help - Trades, Auto Parts, Auto Service | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[orgSchema(), breadcrumbs([['Home', '/'], ['Who I help', URL]]), faqSchema(FAQ_ITEMS)]}
      />

      <section className="phero">
        <div className="wrap">
          <div className="reveal">
            <div className="crumb">
              <Link to="/">Home</Link> &nbsp;/&nbsp; Who I help
            </div>
            <span className="eyebrow">Who I help</span>
            <h1>
              Trades, auto parts, auto service. <span className="em">Found, answered, counted.</span>
            </h1>
            <p className="sub">
              Three kinds of business I build for every week. The same two failures show up in all
              of them: they never find you, or nobody answers. Which one is yours decides the step.
            </p>
          </div>
        </div>
      </section>

      {BOOKS.map((b, i) => (
        <div key={b.name}>
          <div className="divider" />
          <section className="sec">
            <div className="wrap">
              <div className={'chap' + (i % 2 ? ' flip' : '')}>
                <div className="chap-copy reveal">
                  <span className="eyebrow"><span className="n">0{i + 1}</span> {b.lands}</span>
                  <h2 style={{ marginTop: 22 }}>
                    {b.name}. <span className="em">{b.wound}</span>
                  </h2>
                  <p className="lead">{b.body}</p>
                  <p className="lead">
                    <Link to={b.href}>How it works for {b.name.toLowerCase()} <Arrow /></Link>
                  </p>
                </div>
                <div className="chap-media reveal">
                  <Plate image={b.img} filmKey={b.img} ratio="4 / 3" scrim="soft" />
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}

      <div className="divider" />

      <section className="sec-sm">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Also on the same system</span>
            <h2 style={{ marginTop: 22, fontSize: 'clamp(26px,3.2vw,38px)' }}>
              Property and condominium management.
            </h2>
            <p className="lead">
              An owner deciding to stop managing it themselves is already searching, and when three
              names go to a board somebody looks all three up that evening. See{' '}
              <Link to="/property-management/">property management</Link> and{' '}
              <Link to="/condominium-management-marketing/">condominium management</Link>.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap narrow">
          <div className="sec-head left reveal">
            <span className="eyebrow">Questions</span>
            <h2 style={{ marginTop: 22 }}>Answered plainly.</h2>
          </div>
          <FAQ items={FAQ_ITEMS} />
        </div>
      </section>

      <CTAStrip
        head={<>Take the nine minutes. <span className="em">I will tell you which step fits.</span></>}
        sub="Before the call I look at your profile, your site and the businesses above you. On it, I show you what I found and the fixed price on the step that fits."
      />
    </main>
  );
}
