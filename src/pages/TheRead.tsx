import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Plate from '../components/Plate';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import { READ, CTA_HREF, CTA_LABEL, LADDER_FAQ } from '../lib/ladder';
import { orgSchema, breadcrumbs, faqSchema } from '../lib/schema';
import { BASE, BIZ_NAME } from '../lib/site';

const URL = '/the-read/';

const LOOKS: [string, string][] = [
  [
    'Your Google profile, against the three above you',
    'Categories, services named the way buyers search, the service area, hours, the attributes Google added on its own, photos, questions, and how many reviews were answered.',
  ],
  [
    'Your details everywhere Google cross-checks them',
    'Name, address, postal code and phone across the directories. A wrong postal code in three places is a real finding.',
  ],
  [
    'Your site, on a phone',
    'How long it takes to become useful, what the title says in a search result, every way in - call, form, text, booking - and where each one actually lands.',
  ],
  [
    'Facebook and Instagram',
    'When they were last posted to, what they link to, and whether a buyer checking you would think you are still open.',
  ],
  [
    'Your phone, after hours',
    'I call the published line outside hours and write down what happens. Time and outcome.',
  ],
  [
    'Who gets named',
    'I ask an assistant the question your buyer would ask, and write down who it names.',
  ],
  [
    'What is being counted',
    'Whether anything counts your calls, forms and bookings. If nothing does, that is a finding - and it decides whether ads can ever be run properly.',
  ],
];

const WEEK: [string, string][] = [
  ['Monday to Thursday', 'The look. Only what a customer can see, plus anything you give me read-only. Nothing on any account is touched.'],
  ['Thursday', 'The findings, ranked by what each one costs you, each with where to see it for yourself, and the ten-minute fixes that are yours regardless.'],
  ['Friday', 'Thirty minutes together. What I found, which story it tells - losing the calls you get, or not being found at all - and a fixed price on each step, with the one I would pick and why.'],
];

const READ_FAQ: [string, string][] = [
  [
    'How is The Read different from a free review?',
    'A free review is a sales call with a screenshot. The Read is a week of work on everything a customer sees when they check you, with the findings written down, ranked by what they cost, and each one checkable on your own screen. It ends on a fixed price for the right step, and the fee comes off that step if you choose one within thirty days.',
  ],
  [
    'What if you do not find three real findings?',
    'Then it is free. Three real findings - specific, checkable, each with the screen where you can see it yourself - or the fee comes back.',
  ],
  [
    'Do I have to buy a step afterwards?',
    'No. The findings are yours either way, and so are the ten-minute fixes. If you do choose a step within thirty days, the fee comes off it.',
  ],
  [
    'Do you need my passwords?',
    'No. The Read works from what any customer can see. If you want to give read-only access to something, it helps, and nothing is ever changed.',
  ],
  LADDER_FAQ[0],
];

export default function TheRead() {
  return (
    <main>
      <Seo
        title="The Read - Everything Online, Gone Through in a Week | HigherMindAI"
        desc="Everything you have online, gone through properly in a week. What is wrong, what it costs, and a fixed price on the right step. Three real findings or it is free."
        path={URL}
        schema={[
          orgSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: READ.name,
            serviceType: 'Local business online presence review',
            description: `${READ.promise} ${READ.guarantee}`,
            url: BASE + URL,
            provider: { '@type': 'Organization', name: BIZ_NAME, url: BASE + '/' },
          },
          breadcrumbs([['Home', '/'], ['The Read', URL]]),
          faqSchema(READ_FAQ),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <div className="reveal">
            <div className="crumb">
              <Link to="/">Home</Link> &nbsp;/&nbsp; The Read
            </div>
            <span className="eyebrow">The Read &middot; the way in</span>
            <h1>
              Not ready to pick? <span className="em">The Read.</span>
            </h1>
            <p className="sub">
              Everything you have online, gone through properly in a week. What is wrong, what it
              costs, and a fixed price on the right step. <b>Three real findings or it is free.</b>
            </p>
            <div className="ctas">
              <Link to={CTA_HREF} className="btn btn-primary">{CTA_LABEL} <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="chap">
            <div className="chap-copy reveal">
              <span className="eyebrow"><span className="n">01</span> Why it exists</span>
              <h2 style={{ marginTop: 22 }}>
                I do not put a price on a mess <span className="em">nobody has looked at.</span>
              </h2>
              <p className="lead">
                Two profiles for one business, a site built by someone who has left, ads running on
                an account nobody can log into. From outside, that cannot be priced honestly. So I
                look first - properly, for a week - and then the price is fixed, in writing, on the
                step that actually fixes it.
              </p>
              <p className="lead">
                The findings are yours either way. The fee comes off whichever step you choose
                within thirty days.
              </p>
            </div>
            <div className="chap-media reveal">
              <Plate image="sRead" filmKey="sRead" ratio="4 / 3" scrim="soft" alt="A written review of a business's online presence, marked up in red, beside a laptop showing its listing" />
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow"><span className="n">02</span> What I go through</span>
            <h2 style={{ marginTop: 22 }}>
              Everything a customer sees <span className="em">when they check you.</span>
            </h2>
          </div>
          <div className="read-grid">
            {LOOKS.map(([h, p], i) => (
              <div className="read-item reveal" key={h}>
                <span className="read-n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow"><span className="n">03</span> The week</span>
            <h2 style={{ marginTop: 22 }}>
              Monday to Friday. <span className="em">Then you choose, or you do not.</span>
            </h2>
          </div>
          <div className="steps">
            {WEEK.map(([d, p]) => (
              <div className="step reveal" key={d}>
                <div className="sn">{d}</div>
                <p>{p}</p>
              </div>
            ))}
          </div>
          <div className="read-out reveal">
            <h3>What you walk away with</h3>
            <ul className="lad-see">
              {READ.see.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <p className="lad-lock">{READ.guarantee}</p>
            <p className="lead" style={{ marginTop: 18 }}>
              The three steps it prices are on <Link to="/how-it-works/">how it works</Link>. Paid
              ads are named last, and not yet.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap narrow">
          <div className="sec-head left reveal">
            <span className="eyebrow"><span className="n">04</span> Questions</span>
            <h2 style={{ marginTop: 22 }}>Answered plainly.</h2>
          </div>
          <FAQ items={READ_FAQ} />
        </div>
      </section>

      <CTAStrip
        head={<>Take the nine minutes. <span className="em">If it cannot be priced, it becomes The Read.</span></>}
        sub="On the call I tell you whether your step is clear from outside. If it is, you get the price there. If it is not, The Read is the way in."
      />
    </main>
  );
}
