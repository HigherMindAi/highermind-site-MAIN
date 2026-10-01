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
//
// v15.14 (Derek's call): told as a builder's record, not a hard-luck story.
// Temple leads as the business he built; COVID is the lesson, not the loss -
// the warehouse, vehicles and home are NOT mentioned. Policing stays one short
// paragraph. Keep it that way in any rewrite.
// ---------------------------------------------------------------------------

const URL = '/about/';

const DESC =
  'Derek Train, founder of HigherMindAI in Erin, Ontario. Built a business to twenty-six cities, ran operations, and now builds how local businesses get found.';

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
            From selling apples in Orangeville to twenty-six cities.{' '}
            <span className="em">I build like an owner, because I have been one.</span>
          </h1>
          <p className="sub reveal">
            I am {FOUNDER}, founder and solo operator of HigherMindAI, based in Erin, Ontario. I have
            built businesses, run teams and managed operations - and when you work with me, you deal
            with the person doing the work.
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
                I built Temple, a produce delivery business, from the ground up. It began with me
                selling apples and avocados in Orangeville and grew to twenty-six cities, with delivery
                teams, vehicles on the road and a 16,000 square foot warehouse with a drive-in fridge.
                Running it taught me what a business at that size actually takes - the people, the
                logistics and the customers who keep coming back.
              </p>
              <p>
                Every bit of that demand came through referral and community, and it taught me the
                most valuable lesson I have. When COVID cut the referrals off, I saw exactly what
                happens to a good business that does not own its way of being found. That lesson is
                the reason the order here never changes.
              </p>
              <p>
                Before Temple, I spent ten years in policing with the RCMP, across several special
                units. It taught me that a record is only as good as what it captures - which is why
                everything I build counts what came in and what happened to it - and that the first
                one to pick up is usually the one that gets the job.
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
                  A second business. <span className="em">Then the operator's seat.</span>
                </h2>
              </div>
              <p className="lead">
                After Temple I built again. For two years I ran a cleaning company while I learned
                digital marketing properly - how a Google profile actually ranks, why a site that
                looks fine does not sell, and what happens to a call nobody picks up.
              </p>
              <p className="lead">
                Then I was brought in as general manager of a property management and maintenance
                operation: owner enquiries arriving at the wrong moment, work orders, and trades
                coordinated against units that had to turn before the month closed. It is the reason
                I talk about calls, jobs and work orders instead of impressions and engagement. It was
                the operations side, not the licensed condominium side, and I describe it exactly that
                way.
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
            <span className="eyebrow">What I care about</span>
            <h2>
              Work done properly. <span className="em">Built to last.</span>
            </h2>
            <p className="lead">
              I have a deep respect for real craftsmanship and for things with history behind them.
              It is why I build for people who make and fix things for a living, and why I hold my
              own work to the same standard. I have stood on the owner's side of the counter, so I
              build what an owner wants: more of the right calls, fewer of them missed, and a clear
              count of both.
            </p>
            <ul className="plist" style={{ marginTop: 26 }}>
              <li>Built a business to twenty-six cities, with teams, vehicles and a warehouse</li>
              <li>Built and ran a second business, a cleaning company</li>
              <li>General manager on the operations side of property management and maintenance</li>
              <li>Ten years of policing with the RCMP</li>
              <li>Every profile, site and call desk built by me, start to finish</li>
            </ul>
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
              trades, auto service and collision shops, and auto parts suppliers and recyclers:
              good at the work, busy on the tools, and depending on referral the
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
