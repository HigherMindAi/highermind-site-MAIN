import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP, FOUNDER } from '../lib/site';
import { personSchema, orgSchema, breadcrumbs } from '../lib/schema';

const URL = '/about/';

const DESC =
  'Ten months contracted inside a property management operation, and close to a decade in the justice system before that. One operator, no account manager.';

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
            I did not read a blog about your world.{' '}
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
                That is the whole idea behind what I build. Somebody with water coming through a
                ceiling, a limb on the garage, or a rental he has just decided to stop managing
                himself does not shop carefully. He reads the first three results, calls two of
                them, and books whoever answers. After five o'clock that is almost never the small
                company - not because it is worse, but because there is nobody at the desk. Three
                trades already have the vocabulary and the seasons worked out because I built for
                them first: property and condominium management, roofing, and arborists and tree
                care. The failure underneath them is the same one in every business. I get the business found, I put
                a desk on the other end that answers and qualifies every enquiry the moment it
                arrives, and I hand over the record of both.
              </p>
              <p className="credential">Former RCMP.</p>
              <p>
                I run this as a single operator. When you work with me, you deal with the person
                doing the work - no account manager, no handoff to a junior team learning on your
                firm.
              </p>
              <div className="ctas">
                <Link to="/who-i-help/" className="btn btn-primary">
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
        sub="Nine minutes on the phone. Where you rank across your service area, what happened when I contacted you as a customer, and what I would build. No pitch."
      />
    </main>
  );
}
