import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP, EMAIL } from '../lib/site';
import { CTA_LABEL, CTA_HREF, ONE_LINE } from '../lib/ladder';
import { GENERAL_FAQ } from '../lib/services';
import { faqSchema, breadcrumbs, orgSchema } from '../lib/schema';

/*
 * Contact. Phone, email and the booking page, as plain lines. The ONLY button
 * is Take the nine minutes - the written form lives on /book/, so this page
 * carries no second submit button beside it.
 */

const URL = '/contact/';

const DESC =
  'Reach Derek Train at HigherMindAI in Erin, Ontario. Call 647-242-5800, email, or take the nine minutes. One operator, and he answers his own phone.';

export default function Contact() {
  return (
    <main>
      <Seo
        title="Contact Derek Train | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[
          orgSchema(),
          faqSchema(GENERAL_FAQ),
          breadcrumbs([['Home', '/'], ['Contact', URL]]),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <span className="eyebrow reveal">Contact</span>
          <h1 className="reveal">
            Nine minutes. <span className="em">No pitch.</span>
          </h1>
          <p className="sub reveal">
            {ONE_LINE} Before the nine minutes I will already have looked at where you show and
            called you as a customer. On it, I read you what I found, and tell you which step fits
            where you are. Nothing to prepare, nothing to send me first.
          </p>
          <div className="ctas reveal" style={{ marginTop: 30 }}>
            <Link to={CTA_HREF} className="btn btn-primary">
              {CTA_LABEL} <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec" id="contact">
        <div className="wrap narrow">
          <div className="sec-head left reveal">
            <span className="eyebrow">Or reach me directly</span>
            <h2>One operator, in Erin, Ontario.</h2>
          </div>
          <div className="contact-lines reveal">
            <p>
              Phone: <a href={`tel:${PHONE_E164}`}>{PHONE_DISP}</a>
            </p>
            <p>
              Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
            <p>
              Booking: <Link to={CTA_HREF}>pick a time for the nine minutes</Link>
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap narrow">
          <div className="sec-head left reveal">
            <span className="eyebrow">Common questions</span>
            <h2>Answered plainly.</h2>
          </div>
          <FAQ items={GENERAL_FAQ} />
        </div>
      </section>
    </main>
  );
}
