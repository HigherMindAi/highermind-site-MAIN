import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import ContactForm from '../components/ContactForm';
import { PHONE_E164, PHONE_DISP, EMAIL } from '../lib/site';
import { orgSchema, breadcrumbs } from '../lib/schema';

export default function Book() {
  return (
    <main>
      <Seo
        title="Book a Call | HigherMindAI"
        desc="Book a call about ranking your business in the top 3 of Google Maps. A straight read on whether the Local Ranking System fits, and what your first 60 days look like."
        path="/book/"
        schema={[
          orgSchema(),
          breadcrumbs([['Home', '/'], ['Book a call', '/book/']]),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <div className="reveal">
            <div className="crumb">
              <Link to="/">Home</Link> &nbsp;/&nbsp; Book a call
            </div>
            <span className="eyebrow">Book a call</span>
            <h1>
              Tell me your business and your city. <span className="em">I&rsquo;ll tell you if I can win it.</span>
            </h1>
            <p className="sub">
              No pressure pitch. A straight read on whether the Local Ranking System fits, what the
              first 60 days look like, and the most direct path to the top of the Map Pack for you.
            </p>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="contact-grid">
            <div className="reveal">
              <span className="eyebrow">Direct line</span>
              <h2 style={{ marginTop: 22 }}>
                One operator. <span className="em">One number to call.</span>
              </h2>
              <p className="lead">
                You work directly with the person doing the work - no account managers, no handoffs.
                I reply personally, usually the same day.
              </p>
              <div className="contactline">
                <a href={`tel:${PHONE_E164}`}><span className="ic">&#9742;</span> {PHONE_DISP}</a>
                <a href={`mailto:${EMAIL}`}><span className="ic">&#9993;</span> {EMAIL}</a>
                <Link to="/local-seo/erin/"><span className="ic">&#9678;</span> Erin, Ontario &middot; serving Canada, US &amp; UK</Link>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
