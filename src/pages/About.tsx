import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP, FOUNDER } from '../lib/site';
import { personSchema, orgSchema, breadcrumbs } from '../lib/schema';

const URL = '/about';

const DESC =
  'I spent ten months contracted inside a property management operation, and close to a decade inside the justice system before that. Now I build local ranking and AI intake systems for property management firms across Canada.';

export default function About() {
  return (
    <main>
      <Seo
        title="About - Built From Inside the Work | HigherMindAI"
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
            I am not a marketer who read a blog about your world.{' '}
            <span className="em">I worked inside it.</span>
          </h1>
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
                Founder &middot; Ontario, Canada
              </div>
            </div>
            <div className="who-copy">
              <p>
                Before any of this I spent ten months contracted to a property management
                company - the sales and CRM side of it, and the maintenance operation that serviced
                the portfolio they managed. Owner enquiries arriving at the wrong moment, work
                orders, coordinating trades against units that had to turn before the month closed,
                and the internal paperwork that had to hold up afterwards. It is the reason I talk
                about doors and work orders instead of impressions and engagement.
              </p>
              <p>
                I am not going to inflate that into more than it was, so here it is plainly: I was
                a contractor, not an employee. I have never held a CMRAO licence, never managed a
                corporation, and never sat in a board meeting. What I had was a seat at the exact
                point where enquiries arrive and get handled or dropped - which happens to be the
                only part of your business I am selling anything about.
              </p>
              <p>
                The decade before that is the part I will stand on without a caveat. I spent the
                better part of ten years inside the justice system, as a sworn officer across a
                number of units, in courtrooms and in federal case files. That is where I learned
                that an incident is only ever as good as the record of it, which is why every system
                I build logs what came in and when it was answered. I know what a real intake looks
                like, and why the first firm to pick up is usually the firm that gets retained.
              </p>
              <p>
                That is the whole idea behind what I build. A person who has just been injured,
                arrested, or served does not shop carefully. They call three firms in ten minutes and
                retain whoever answers. After five o'clock, that is almost never the small firm -
                not because the small firm is worse, but because there is no one at the desk. An
                owner with a rental to hand over behaves the same way: he reads three results and
                calls two of them. I close that gap in both books. I rank the firm so people find
                it, I put a desk on the other end that answers and qualifies every enquiry the
                moment it arrives, and I hand over the record of both.
              </p>
              <p className="credential">Former RCMP.</p>
              <p>
                I run this as a single operator. When you work with me, you deal with the person
                doing the work - no account manager, no handoff to a junior team learning on your
                firm.
              </p>
              <div className="ctas">
                <Link to="/the-watershed" className="btn btn-primary">
                  See what I build <Arrow />
                </Link>
                <a href={`tel:${PHONE_E164}`} className="btn btn-ghost">
                  Call {PHONE_DISP}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip
        head={<>Let me show you what it is costing you.</>}
        sub="Fifteen minutes on the phone. Where your firm ranks across its service area, what happened when I contacted you as a client, and what I would build. No pitch."
      />
    </main>
  );
}
