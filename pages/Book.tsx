import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import ContactForm from '../components/ContactForm';
import CalEmbed from '../components/CalEmbed';
import { PHONE_E164, PHONE_DISP, EMAIL, CAL_OPTIONS, CAL_INTRO } from '../lib/site';
import { orgSchema, breadcrumbs } from '../lib/schema';

/**
 * /book/ is the Google Business Profile appointment link. The URL never changes.
 * Rewritten to lead with the call rather than the audit, and to speak with the
 * confidence of someone who already knows what he is going to find.
 */
export default function Book() {
  // Three real Cal event types rather than one generic one. A prospect who
  // already knows which half is broken should not have to explain it twice.
  const [slug, setSlug] = useState(CAL_INTRO);

  // Read ?on= AFTER hydration rather than in the state initialiser. The page
  // is prerendered, so an initialiser that reads the query string produces
  // markup React did not build and React 19 throws the whole tree away and
  // re-renders it client-side - which on this page means the calendar mounts
  // into a node that is about to be discarded.
  useEffect(() => {
    const on = new URLSearchParams(window.location.search).get('on');
    if (!on) return;
    const hit = CAL_OPTIONS.find((o) => o.slug.endsWith(on));
    if (hit) setSlug(hit.slug);
  }, []);

  return (
    <main>
      <Seo
        title="Book a Call | HigherMindAI"
        desc="Book a nine-minute call. I will tell you what is costing you clients, what I would build, and how fast it goes live. No pitch, no obligation."
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
              Nine minutes. <span className="em">You will know exactly where you stand.</span>
            </h1>
            <p className="sub">
              I have already seen what your market looks like, because I look before every call. So
              there is no discovery theatre. I will tell you what a missed enquiry is costing you,
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
                and tell you what I would do instead. A fast no is worth more to you and to me than a
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
            <span className="eyebrow"><span className="n">01</span> Pick the nine minutes</span>
            <h2 style={{ marginTop: 22 }}>
              Straight into my calendar. <span className="em">No back and forth.</span>
            </h2>
            <p className="lead">
              Three ways in. They are the same nine minutes - the difference is what I have already
              pulled up before you join, so none of it gets spent on setup.
            </p>
          </div>

          <div className="calpick reveal" role="tablist" aria-label="Choose a conversation">
            {CAL_OPTIONS.map((o) => (
              <button
                key={o.slug}
                role="tab"
                aria-selected={slug === o.slug}
                className={`calopt ${slug === o.slug ? 'on' : ''}`}
                onClick={() => setSlug(o.slug)}
              >
                <span className="calopt-name">{o.name}</span>
                <span className="calopt-line">{o.line}</span>
                <span className="calopt-who">{o.who}</span>
              </button>
            ))}
          </div>

          {/* No `key`. Remounting this tears the calendar out of the DOM and
              Cal never recovers - it was half of the original bug. */}
          <CalEmbed link={slug} />
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
                <Link to="/who-i-help/">
                  <span className="ic">&#9678;</span> Erin, Ontario &middot; serving firms across the
                  US and Canada
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
