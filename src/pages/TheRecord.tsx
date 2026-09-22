import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import RecordTicker from '../components/RecordTicker';
import { RecordStage } from '../components/Stages';
import { Arrow } from '../components/Icons';
import { CTA_LABEL, CTA_HREF, FOUNDATION } from '../lib/ladder';
import { featurePageSchema, faqSchema, breadcrumbs } from '../lib/schema';

/*
 * The Record is "measured" - the fourth word in The Foundation's line (found,
 * trusted, answered, measured). It is how the owner SEES what the work did,
 * never the headline and never sold on its own. Nobody buys reporting; they
 * buy more calls and more time, and this is how they know they got them.
 */

const URL = '/the-record/';

const DESC =
  'Inside The Foundation: every call and form counted, with when it came in and what happened next, so you see exactly what the work did. Never sold separately.';

const RECORD_FAQ: [string, string][] = [
  [
    'What does "measured" actually mean?',
    'Every call and every form that comes through the channels I build is counted, with the time it came in, whether it was answered, and what happened next. So when something changes, you see it as a number with a date on it rather than a feeling.',
  ],
  [
    'Is this sold on its own?',
    'No. It sits inside The Foundation, alongside the profile, the social pages and the desk, and it comes with The Storefront too. It is not a line on the invoice and it is not an upgrade. Work that cannot be seen is work you are taking on faith, and I would rather you did not have to.',
  ],
  [
    'Who decides what counts as answered?',
    'You do, at kickoff, before anything goes live. You set what answered means for your business, so the count measures your standard rather than mine. A roofer and a collision shop do not have the same threshold and should not be scored against one.',
  ],
  [
    'Can I look up a specific date?',
    'Yes. The contact log is continuous and searchable, and it exports. When a customer says he called three times on a particular evening, you can answer with a record rather than a recollection.',
  ],
  [
    'Does it count calls my own staff answered?',
    'It counts every contact that comes through the channels I build - the site, the web desk and the phone desk. Contacts handled entirely on a staff mobile outside those channels are not captured, and I will not claim otherwise. The nights, the weekends and the overflow are where the missed work usually hides, and that is exactly what runs through the desk.',
  ],
];

const SCENARIOS: [string, string][] = [
  [
    'Where every enquiry came from',
    'Phone, form, Google profile or site: each contact counted by where it arrived, so you know which part of the work is doing the lifting.',
  ],
  [
    'What the desk caught while you were on a job',
    'The enquiries that arrived on a roof, under a car or after you locked up, and what happened to each one. This is usually the number that surprises people.',
  ],
  [
    'The customer who called three times',
    'He may well have. Without a log you are arguing recollection against recollection. With one, you look it up.',
  ],
  [
    'Whether it is time for The Tap',
    'Paid campaigns go on last, and only once every call and form is counted. The count is what tells you the ground is ready, and later, what the spend actually sold.',
  ],
];

export default function TheRecord() {
  return (
    <main>
      <Seo
        title="The Record: Every Call and Form Counted | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[
          /* Not a Service. The Record is the counting inside The Foundation
             and is never sold or quoted on its own. */
          featurePageSchema('The Record - every call and form counted, inside The Foundation', DESC, URL),
          breadcrumbs([
            ['Home', '/'],
            ['How it works', '/how-it-works/'],
            ['The Record', URL],
          ]),
          faqSchema(RECORD_FAQ),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <Link to={FOUNDATION.href} className="eyebrow reveal">
            Inside The Foundation &middot; measured
          </Link>
          <h1 className="reveal">
            See exactly what it did.{' '}
            <span className="em">Every call and form, counted.</span>
          </h1>
          <p className="sub reveal">
            The Foundation is found, trusted, answered, measured. This is the measured part. Every
            call and every form is counted, with when it came in and what happened next, so when the
            phone rings more you can see it rather than guess at it. It sits inside The Foundation
            and is never sold on its own.
          </p>
          <div className="ctas reveal">
            <Link to={CTA_HREF} className="btn btn-primary">
              {CTA_LABEL} <Arrow />
            </Link>
          </div>
          <p className="trustline reveal">
            Every call and form counted &middot; What happened next, written down &middot; Inside
            The Foundation, never a separate line.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ---------------------------------------------------------- the ticker */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">What it looks like</span>
            <h2>Every contact, with a time on it.</h2>
          </div>
          <div className="prod-cols">
            <div className="reveal">
              <RecordTicker variant="property" />
            </div>
            <div className="stg-wrap reveal">
              <RecordStage />
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------------------- the badge */}
      <section className="sec">
        <div className="wrap">
          <div className="vcard reveal">
            <div className="vlab">Why it is built this way</div>
            <div className="vbig">
              I spent years in a job where{' '}
              <b>an incident was only ever as good as the record of it.</b> That is not a credential
              I lead with, but it is the reason every call gets counted from the first day.
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* --------------------------------------------------------- scenarios */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">What you get to see</span>
            <h2>The work, as numbers with dates on them.</h2>
          </div>
          <div className="vgrid four">
            {SCENARIOS.map(([h, b]) => (
              <div className="vtile reveal" key={h}>
                <h3>{h}</h3>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------------- what lands */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">What sits inside it</span>
            <h2>Three pieces, and one of them is yours to set.</h2>
          </div>
          <div className="vgrid">
            <div className="vtile feat reveal">
              <div className="vt-n">Continuous</div>
              <h3>The count</h3>
              <p>
                Every call and form through the channels I build, counted as it arrives: where it
                came from, whether it was answered, and what happened next.
              </p>
            </div>
            <div className="vtile reveal">
              <div className="vt-n">On demand</div>
              <h3>The contact log</h3>
              <p>
                Every enquiry with a time in and a time answered. Searchable, and exportable when a
                specific date is in question.
              </p>
            </div>
            <div className="vtile reveal">
              <div className="vt-n">At kickoff</div>
              <h3>What answered means</h3>
              <p>
                You set what &ldquo;answered&rdquo; means for your business before anything goes live,
                so the count measures your standard rather than mine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Where this sits</span>
            <h2>
              More calls is the point.{' '}
              <span className="em">This is how you know you got them.</span>
            </h2>
            <p className="lead">
              {FOUNDATION.see[2]}. It sits inside{' '}
              <Link to={FOUNDATION.href}>The Foundation</Link> with the profile, the social pages and
              the desk, and comes with The Storefront too. The whole order is on{' '}
              <Link to="/how-it-works/">how it works</Link>.
            </p>
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
          <FAQ items={RECORD_FAQ} />
        </div>
      </section>

      <CTAStrip
        head={<>Find out what your phone <span className="em">is missing now.</span></>}
        sub="Nine minutes. I will already have called you as a customer, and I will read you what happened."
      />
    </main>
  );
}
