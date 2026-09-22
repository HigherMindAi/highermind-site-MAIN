import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import CTAStrip from '../components/CTAStrip';
import Plate from '../components/Plate';
import { FOUNDER } from '../lib/site';
import { personSchema, orgSchema, breadcrumbs } from '../lib/schema';

// ---------------------------------------------------------------------------
// /about/ - Derek's story, first person, in his own facts and nothing added.
//
// Every fact on this page was stated by Derek. No invented numbers, clients or
// results. The lesson is the reason for the order: found first, answered
// second, then ads.
// ---------------------------------------------------------------------------

const URL = '/about/';

const DESC =
  'Derek Train, founder and solo operator of HigherMindAI in Erin, Ontario. Why the order is found first, answered second, then ads - learned the hard way.';

export default function About() {
  return (
    <main>
      <Seo
        title="About Derek Train | HigherMindAI, Erin, Ontario"
        desc={DESC}
        path={URL}
        schema={[
          orgSchema(),
          personSchema(),
          breadcrumbs([['Home', '/'], ['About', URL]]),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <span className="eyebrow reveal">About HigherMindAI</span>
          <h1 className="reveal">
            I lost a business to having no way of being found.{' '}
            <span className="em">That is why I do this in order.</span>
          </h1>
          <p className="sub reveal">
            I am {FOUNDER}, founder and solo operator of HigherMindAI, based in Erin, Ontario. When
            you work with me, you deal with the person doing the work.
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap narrow">
          <div className="who-grid reveal">
            <div>
              <div className="who-shot">
                <img
                  src="/derek.webp"
                  width={360}
                  height={360}
                  loading="lazy"
                  decoding="async"
                  alt={`${FOUNDER}, founder of HigherMindAI`}
                />
              </div>
              <div className="who-name">
                <b>{FOUNDER}</b>
                Founder &middot; Erin, Ontario
              </div>
            </div>
            <div className="who-copy">
              <p>
                My background is law enforcement and the Canadian Armed Forces, and HigherMindAI is
                listed as veteran-owned. I spent the better part of ten years as a sworn officer,
                across a number of units, in courtrooms and in federal case files. That is where I
                learned that an incident is only ever as good as the record of it, which is why everything I build counts what came in and
                what happened to it. It is also where I learned what a real intake looks like, and
                why the first one to pick up is usually the one that gets the job.
              </p>
              <p className="credential">Former RCMP. Canadian Armed Forces veteran.</p>
              <p>
                After that I built Temple, a produce delivery business. It began with me selling
                apples and avocados in Orangeville and it grew to twenty-six cities, with delivery
                teams and a 16,000 square foot warehouse. Every bit of that demand came through
                referral and community. I never owned a single way of being found.
              </p>
              <p>
                When COVID came, that demand went, and over about three years the business
                collapsed. I lost the warehouse, the vehicles and my home. Nothing I had built could
                bring a customer back, because none of it was mine - it was goodwill, and goodwill
                does not show up on a map.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="chap">
            <div className="chap-copy reveal">
              <div className="sec-head left">
                <span className="eyebrow">What came next</span>
                <h2>
                  Nights on a cleaning crew. <span className="em">Days learning the craft.</span>
                </h2>
              </div>
              <p className="lead">
                For about two years I ran a cleaning company at night and learned digital marketing
                by day - how a Google profile actually ranks, why a site that looks fine does not
                sell, and what happens to a call nobody picks up.
              </p>
              <p className="lead">
                Then I went inside a property management and maintenance operation as general
                manager. Owner enquiries arriving at the wrong moment, work orders, coordinating
                trades against units that had to turn before the month closed, and the paperwork that
                had to hold up afterwards. It is the reason I talk about calls, jobs and work orders
                instead of impressions and engagement. I have never held a CMRAO licence and never
                managed a condominium corporation, and I will not dress it up as more than it was.
              </p>
            </div>
            <div className="chap-media reveal">
              <Plate image="office" filmKey="office" ratio="4 / 3" scrim="soft" />
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap narrow">
          <div className="sec-head left reveal">
            <span className="eyebrow">The lesson</span>
            <h2>
              A business with no owned way of being found{' '}
              <span className="em">is one bad year from gone.</span>
            </h2>
            <p className="lead">
              That is the whole reason for the order. Found first, so the business has a way in that
              belongs to it. Answered second, so the calls it already gets stop ringing out. Then,
              and only then, the ads. I will not spend your money sending traffic to a profile with
              the wrong hours and a site that does not convert.
            </p>
            <p className="lead">
              It is why the work runs as three steps in a fixed order -{' '}
              <Link to="/how-it-works/#the-pin">The Pin</Link>,{' '}
              <Link to="/how-it-works/#the-foundation">The Foundation</Link> and{' '}
              <Link to="/how-it-works/#the-storefront">The Storefront</Link> - with{' '}
              <Link to="/the-read/">The Read</Link> as the way in. The businesses I build for are
              trades, auto service and collision shops, auto parts suppliers and recyclers, and
              property managers: good at the work, busy on the tools, and depending on referral the
              way I did.
            </p>
            <p className="lead">
              I run this as a single operator. No account manager, no handoff to a junior team
              learning on your business. <Link to="/how-it-works/">How it works</Link> is laid out
              in full.
            </p>
          </div>
        </div>
      </section>

      <CTAStrip
        head={<>Nine minutes on <span className="em">how you get found.</span></>}
        sub="Where you come up, what happens to a call you cannot take, and which step fits - with its fixed price, said plainly once I have seen what you have."
      />
    </main>
  );
}
