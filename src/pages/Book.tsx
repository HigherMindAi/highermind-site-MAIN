import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import ContactForm from '../components/ContactForm';
import { PHONE_E164, PHONE_DISP, EMAIL } from '../lib/site';
import { orgSchema, breadcrumbs } from '../lib/schema';

/**
 * /book/ is the Google Business Profile appointment link. The URL never changes.
 * The copy did: it was still selling the Local Ranking System and a 60-day Map
 * Pack promise. It now asks for the Catchment Audit, like every other surface.
 */
export default function Book() {
  return (
    <main>
      <Seo
        title="Book a Call | HigherMindAI"
        desc="Book a call, or take the free Catchment Audit first. I map where you vanish across your service area, then I become your customer and time how long you take to answer."
        path="/book/"
        schema={[orgSchema(), breadcrumbs([['Home', '/'], ['Book a call', '/book/']])]}
      />

      <section className="phero">
        <div className="wrap">
          <div className="reveal">
            <div className="crumb">
              <Link to="/">Home</Link> &nbsp;/&nbsp; Book a call
            </div>
            <span className="eyebrow">Book a call</span>
            <h1>
              Fifteen minutes. <span className="em">No pitch.</span>
            </h1>
            <p className="sub">
              I will ask what a new client is worth to you, what happens to a call at seven in the
              evening, and where you show up when somebody nearby searches. Then I tell you straight
              whether I can win your market. <b>If I cannot, I will say so.</b>
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec-sm">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Better than a call</span>
            <h2>
              Take the Audit first. <span className="em">It costs you nothing.</span>
            </h2>
            <p className="lead">
              Most people book a call and spend the first ten minutes describing their own business to
              me. Skip it. I will go and find out for myself, so the call starts from facts instead of
              a description of them.
            </p>
          </div>
          <div className="steps">
            <div className="step reveal">
              <div className="sn">The Rank Read</div>
              <h3>Where you vanish</h3>
              <p>
                A heatmap across your whole service area, not one pin. Plus the three names sitting
                above you in the box where the calls get decided.
              </p>
            </div>
            <div className="step reveal">
              <div className="sn">The Leak Log</div>
              <h3>How long you take to answer</h3>
              <p>
                I become your customer. Six calls over five days at varied hours, your web chat, your
                contact form. Then I wait, and I time you. Timestamps on all of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="contact-grid">
            <div className="reveal">
              <span className="eyebrow">Direct line</span>
              <h2 style={{ marginTop: 24 }}>
                One operator. <span className="em">One number.</span>
              </h2>
              <p className="lead">
                You deal with the person doing the work. No account manager, no junior team learning on
                your profile. I reply personally, usually the same day.
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
