import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import ContactForm from '../components/ContactForm';
import CalEmbed from '../components/CalEmbed';
import { PHONE_E164, PHONE_DISP, EMAIL } from '../lib/site';
import { orgSchema, breadcrumbs } from '../lib/schema';

/**
 * /book/ is the Google Business Profile appointment link. The URL never changes.
 * Rewritten to lead with the call rather than the audit, and to speak with the
 * confidence of someone who already knows what he is going to find.
 */
export default function Book() {
  return (
    <main>
      <Seo
        title="Book a Call | HigherMindAI"
        desc="Book a fifteen-minute call. I will tell you what is costing you clients, what I would build, and how fast it goes live. No pitch, no obligation."
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
              Fifteen minutes. <span className="em">You will know exactly where you stand.</span>
            </h1>
            <p className="sub">
              I have already seen what your market looks like, because I look before every call. So
              we skip the discovery theatre. I will tell you what a missed enquiry is costing you,
              what I would build, and how fast it goes live. <b>Then you decide.</b>
            </p>
            <div className="ctas">
              <a href="#book-cal" className="btn btn-primary">
                Pick a time
              </a>
              <a href={`tel:${PHONE_E164}`} className="btn btn-ghost">
                Call {PHONE_DISP}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec-sm">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">What happens on it</span>
            <h2>
              Three questions, straight answers,{' '}
              <span className="em">and a decision either way.</span>
            </h2>
          </div>
          <div className="steps">
            <div className="step reveal">
              <div className="sn">The number</div>
              <h3>What a client is worth</h3>
              <p>
                One question sets the whole conversation. If a signed file is worth real money to
                you, everything after this is arithmetic rather than opinion.
              </p>
            </div>
            <div className="step reveal">
              <div className="sn">The gap</div>
              <h3>What happens at seven at night</h3>
              <p>
                Where the enquiries currently go when nobody is there, and where you appear when
                somebody nearby goes looking - on Google and inside the AI systems they now ask.
              </p>
            </div>
            <div className="step reveal">
              <div className="sn">The build</div>
              <h3>What I would put in, and when</h3>
              <p>
                Exactly what I would build, in what order, and the date it goes live. Fourteen days
                from a yes, and the guarantees are on my side of the table, not yours.
              </p>
            </div>
            <div className="step reveal">
              <div className="sn">The answer</div>
              <h3>Yes, or a clean no</h3>
              <p>
                If your market is not winnable, or the numbers do not work, I will say so on the call
                and tell you what I would do instead. A fast no is worth more to both of us than a
                slow maybe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec-sm" id="book-cal">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Pick a time</span>
            <h2>
              Straight into my calendar. <span className="em">No back and forth.</span>
            </h2>
          </div>
          <CalEmbed />
        </div>
      </section>

      <div className="divider" />

      <section className="sec" id="contact">
        <div className="wrap">
          <div className="contact-grid">
            <div className="reveal">
              <span className="eyebrow">Direct line</span>
              <h2 style={{ marginTop: 24 }}>
                One operator. <span className="em">One number.</span>
              </h2>
              <p className="lead">
                You deal with the person doing the work. No account manager, no junior team learning
                on your profile, no handoff after you sign. I reply personally, usually the same day.
              </p>
              <div className="contactline">
                <a href={`tel:${PHONE_E164}`}>
                  <span className="ic">&#9742;</span> {PHONE_DISP}
                </a>
                <a href={`mailto:${EMAIL}`}>
                  <span className="ic">&#9993;</span> {EMAIL}
                </a>
                <Link to="/solutions">
                  <span className="ic">&#9678;</span> Ontario, Canada &middot; serving firms
                  Canada-wide
                </Link>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
