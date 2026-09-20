import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import ServiceLadder from '../components/ServiceLadder';
import CTAStrip from '../components/CTAStrip';
import { LADDER } from '../lib/services';
import { breadcrumbs, servicesItemList } from '../lib/schema';

export default function ServicesHub() {
  return (
    <main>
      <Seo
        title="Local SEO, AI Intake and Web Services | HigherMindAI"
        desc="Visibility, intake, website builds, more cities, social, AI search and paid. Eight lines for local business, each one bought on its own. Erin, Ontario."
        path="/services/"
        schema={[
          breadcrumbs([['Home', '/'], ['Services', '/services/']]),
          servicesItemList(LADDER),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <div className="reveal">
            <div className="crumb">
              <Link to="/">Home</Link> &nbsp;/&nbsp; Services
            </div>
            <span className="eyebrow">Services</span>
            <h1>
              Everything built around <span className="em">one job</span>: an enquiry that gets
              answered.
            </h1>
            <p className="sub">
              Eight lines, and every one of them is bought on its own. There is no bundle to talk
              you into and no package that only makes sense whole. Most businesses are leaking at
              one end hard enough that the first move is obvious, and{' '}
              <b>I will tell you which one it is on the first call</b> - including when the answer
              is that you do not need me yet.
            </p>
          </div>
        </div>
      </section>

      <section className="sec-sm" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <ServiceLadder />
        </div>
      </section>

      <div className="divider" />

      <section className="sec-sm">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Starting on one</span>
            <h2>
              Start where it is bleeding.{' '}
              <span className="em">Add the rest when you want it.</span>
            </h2>
            <p className="lead">
              These are not tiers and there is no upgrade path to climb. Take the one line that
              fixes the thing actually costing you work, and if you add a second one later{' '}
              <b>it costs exactly what it would have cost on day one</b> - no upgrade premium,
              nothing renegotiated, a one-line amendment to what you already signed. Nothing here
              is priced higher for arriving second, because pricing it that way would mean charging
              you for the decision to be careful.
            </p>
          </div>
          <div className="vgrid">
            <div className="vtile reveal">
              <h3>They are joined, not bundled</h3>
              <p>
                Visibility brings the enquiry. Intake answers it. The site holds up when somebody
                checks you afterwards. The record on the first of the month proves all three did
                their job. That is a loop, and it is worth understanding - but it is not a thing
                you have to buy all at once.
              </p>
            </div>
            <div className="vtile reveal">
              <h3>The order changes with the trade</h3>
              <p>
                Property management usually starts with visibility, because an owner looks a firm
                up before calling it. Roofing and tree care usually start with intake, because the
                phone is already ringing while you are on a roof. Your trade gets read the same way
                on the call.
              </p>
            </div>
            <div className="vtile reveal">
              <h3>What is never a line of its own</h3>
              <p>
                Review capture, review responses and listing consistency sit inside{' '}
                <Link to="/property-management-seo/">Visibility</Link>. The record sits inside
                whichever managed line you take. Neither is quoted separately, and if somebody has
                billed you for reputation management on top of local search, read the two quotes
                side by side.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip
        head={<>Not sure where to <span className="em">start?</span></>}
        sub="Tell me your business and your city. I will tell you the one move that gets you the most, fastest - and whether I can win it."
      />
    </main>
  );
}
