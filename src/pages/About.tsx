import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP, FOUNDER } from '../lib/site';
import { personSchema, orgSchema, breadcrumbs } from '../lib/schema';

const URL = '/about';

const DESC =
  'HigherMindAI is built by someone who spent close to a decade inside the justice system - courtrooms and federal casework - before building AI intake and ranking systems for law firms.';

export default function About() {
  return (
    <main>
      <Seo
        title="About - Built From Inside the Justice System | HigherMindAI"
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
                Before HigherMindAI, I spent the better part of a decade inside the justice system -
                in courtrooms and in federal case files. I am not a marketer who read a blog about
                your world. I worked inside it. I know what a real intake looks like, and why the
                first firm to pick up is usually the firm that gets retained.
              </p>
              <p>
                That is the whole idea behind what I build. A person who has just been injured,
                arrested, or served does not shop carefully. They call three firms in ten minutes and
                retain whoever answers. After five o'clock, that is almost never the small firm -
                not because the small firm is worse, but because there is no one at the desk. I close
                that gap: I rank the firm so clients find it, and I put an intake desk on the other
                end that answers, screens, and books every enquiry the moment it arrives.
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
