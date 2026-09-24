import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Plate from '../components/Plate';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import Reel from '../components/Reel';
import { Arrow } from '../components/Icons';
import {
  READ, PIN, FOUNDATION, STOREFRONT, TAP, AFTER_YOU_CHOOSE, THE_QUESTION, ONE_LINE,
  LADDER_FAQ, LAUNCH_LOCK, TAP_LINE, CTA_HREF, CTA_LABEL, type Step,
} from '../lib/ladder';
import type { StillKey } from '../lib/media';
import { orgSchema, ladderSchema, breadcrumbs, faqSchema } from '../lib/schema';

const URL = '/how-it-works/';

interface Inside {
  name: string;
  line: string;
  href?: string;
}

interface Row {
  step: Step;
  id: string;
  img: StillKey;
  n: string;
  intro: string;
  inside: Inside[];
  extra?: string;
}

const ROWS: Row[] = [
  {
    step: READ,
    id: 'the-read',
    img: 'sRead',
    n: 'The way in',
    intro:
      'When the mess cannot be priced from outside - several profiles, an old site, ads nobody can explain - I do not guess. I go through everything you have online, properly, in a week, and hand you the findings in writing ranked by what they cost you.',
    inside: [
      { name: 'Your Google profile, against the businesses above you', line: 'Category, services, service area, reviews, photos, hours.' },
      { name: 'Your site on a phone', line: 'How long it takes to become useful, and what it says to Google.' },
      { name: 'What happens to a call at seven in the evening', line: 'Timed, on your own line.' },
      { name: 'A fixed price on the right step', line: 'Three real findings or it is free. The fee comes off whichever step you choose within thirty days.' },
    ],
  },
  {
    step: PIN,
    id: 'the-pin',
    img: 'sPin',
    n: 'Step one',
    intro:
      'Your Google profile rebuilt against the businesses above you, then held. This is the part that decides whether you are one of the three names in the map when someone nearby looks.',
    inside: [
      { name: 'Local search', line: 'The profile rebuilt: category, every service named the way people type it, the service area drawn properly, consistent details everywhere you appear.', href: '/local-seo/' },
      { name: 'Reviews', line: 'Every review answered, and new ones asked for properly - never bought, never filtered.', href: '/services/reputation-management/' },
      { name: 'The Day 0 record', line: 'Where you started, recorded before anything is touched, so the change is measured and not remembered.' },
    ],
  },
  {
    step: FOUNDATION,
    id: 'the-foundation',
    img: 'sFoundation',
    n: 'Step two - where most start',
    intro:
      'Found, trusted, answered, measured. The Pin gets you the call; the Foundation makes sure it is picked, answered and counted. Bought as separate pieces, what is inside it costs more every month than it does here.',
    inside: [
      { name: 'Everything in the Pin', line: 'The profile, the reviews, the Day 0 record.' },
      { name: 'Facebook and Instagram', line: 'Rebuilt properly and kept current from your own job photos.', href: '/services/social-media-management/' },
      { name: 'The desk', line: `Answers when you cannot, on the web or on your phone line. Administrative intake only - it never quotes and never commits a crew. ${LAUNCH_LOCK}`, href: '/answers/what-is-a-virtual-receptionist/' },
      { name: 'Every call and form counted', line: 'So you see exactly what it did.', href: '/the-record/' },
    ],
  },
  {
    step: STOREFRONT,
    id: 'the-storefront',
    img: 'sStorefront',
    n: 'Step three',
    intro:
      'The Foundation, and a site that sells. Built around how your customers buy and how you actually close - a part matcher for a parts counter, a booking path for a shop, a quote request that arrives complete. Not a brochure. Hosted and cared for.',
    inside: [
      { name: 'Everything in the Foundation', line: 'Profile, reviews, social, the desk, the counting.' },
      { name: 'The site', line: 'Answers a buyer’s questions on a phone in the time it takes to decide.', href: '/services/website-build/' },
      { name: 'Every enquiry through it', line: 'Counted and answered, the same as the phone.' },
    ],
  },
  {
    step: TAP,
    id: 'the-tap',
    img: 'sTap',
    n: 'Last, always',
    intro: TAP_LINE,
    inside: [
      { name: 'Paid campaigns on your own accounts', line: 'Google and Meta, built on the words people actually type.', href: '/services/paid-growth/' },
      { name: 'Spend on your own card', line: 'Visible without asking. I never hold it and never mark it up.' },
      { name: 'Paid on what it sells', line: 'Not on what it spends. Tracking before spend, or the build comes back.' },
    ],
  },
];

export default function HowItWorks() {
  return (
    <main>
      <Seo
        title="How It Works - The Pin, The Foundation, The Storefront | HigherMindAI"
        desc="Three steps in order. The Pin gets you found on Google. The Foundation adds social, a desk that answers and every call counted. The Storefront adds a site."
        path={URL}
        schema={[
          orgSchema(),
          ladderSchema(),
          breadcrumbs([['Home', '/'], ['How it works', URL]]),
          faqSchema(LADDER_FAQ),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <div className="reveal">
            <div className="crumb">
              <Link to="/">Home</Link> &nbsp;/&nbsp; How it works
            </div>
            <span className="eyebrow">How it works</span>
            <h1>
              Three steps, in order. <span className="em">Most businesses start on the Foundation.</span>
            </h1>
            <p className="sub">{ONE_LINE} {THE_QUESTION}</p>
            <div className="ctas">
              <Link to={CTA_HREF} className="btn btn-primary">{CTA_LABEL} <Arrow /></Link>
              <Reel label="Watch it in 48 seconds" />
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec-sm">
        <div className="wrap">
          <ol className="hiw-rail reveal" aria-label="The order">
            {ROWS.map((r) => (
              <li key={r.id} className={r.step.anchor ? 'anchor' : ''}>
                <a href={`#${r.id}`}>
                  <span>{r.n}</span>
                  <b>{r.step.name}</b>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {ROWS.map((r, i) => (
        <div key={r.id}>
          <div className="divider" />
          <section className={'sec hiw' + (r.step.anchor ? ' hiw-anchor' : '')} id={r.id}>
            <div className="wrap">
              <div className={'chap' + (i % 2 ? ' flip' : '')}>
                <div className="chap-copy reveal">
                  <span className="eyebrow">{r.n}</span>
                  <h2 style={{ marginTop: 22 }}>
                    {r.step.name}. <span className="em">{r.step.line}</span>
                  </h2>
                  <p className="lead">{r.intro}</p>
                </div>
                <div className="chap-media reveal">
                  <Plate image={r.img} filmKey={r.img} ratio="4 / 3" scrim="soft" />
                  {r.step.anchor ? <span className="lad-badge big">Where most start</span> : null}
                </div>
              </div>
              <div className="hiw-grid">
                <div className="hiw-col reveal">
                  <h3>What sits inside</h3>
                  <ul className="hiw-inside">
                    {r.inside.map((x) => (
                      <li key={x.name}>
                        <b>{x.href ? <Link to={x.href}>{x.name}</Link> : x.name}</b>
                        <span>{x.line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hiw-col reveal">
                  <h3>What you will be able to see</h3>
                  <ul className="lad-see">
                    {r.step.see.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                  <p className="lad-lock">{r.step.guarantee}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}

      <div className="divider" />

      <section className="sec" id="after">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">After you have chosen</span>
            <h2 style={{ marginTop: 22 }}>
              Added once a step is working. <span className="em">Never instead of one.</span>
            </h2>
            <p className="lead">
              These are offered after the choice, never as the menu. Each one is scoped on its own
              and only where it pays.
            </p>
          </div>
          <div className="after4">
            {AFTER_YOU_CHOOSE.map((a) => (
              <Link key={a.name} to={a.href || CTA_HREF} className="after-card reveal">
                <b>{a.name}</b>
                <span>{a.line}</span>
              </Link>
            ))}
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
          <FAQ items={LADDER_FAQ} />
        </div>
      </section>

      <CTAStrip
        head={<>Not whether you want it. <span className="em">Which one fits where you are.</span></>}
        sub="Nine minutes. I will have looked at your profile, your site and the businesses above you before the call, and I will tell you which step fits and the fixed price on it."
      />
    </main>
  );
}
