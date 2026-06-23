import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import LocalPackCard from '../components/LocalPackCard';
import ServiceLadder from '../components/ServiceLadder';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP, EMAIL } from '../lib/site';
import { orgSchema, faqSchema } from '../lib/schema';

const HOME_FAQ: [string, string][] = [
  ['What does \u201cfirst page in 60 days or you stop paying\u201d mean?', 'Your 60-day clock starts the day I have what I need to begin, not the day you sign. If you are not on the first page of Google Maps by then, you stop paying the monthly and I keep working at no charge until you are. The risk is mine, not yours.'],
  ['How fast will I actually see results?', 'It depends on your category and your competition, which is exactly why the guarantee exists. The work compounds - early movement, then ranking, then staying there. Vanguard went from a brand-new profile to #2 in 30 days. Yours has 60 on the clock.'],
  ['Do I have to sign a contract?', 'No. It is $600/mo flat, month-to-month. Your first month is due the day I start, then it is a simple monthly cycle. Cancel anytime.'],
  ['What areas do you serve?', 'I am based in Erin, in the Headwaters region of Ontario, and work with local businesses across Canada, with active expansion into the United States and the United Kingdom.'],
  ['Why work with one operator instead of an agency?', 'You work directly with the person doing the work. No account managers, no handoffs to a junior team learning on your profile. One operator, one system, one number to call.'],
];

const italicTeal = { fontStyle: 'italic', color: 'var(--teal)' } as const;

export default function Home() {
  return (
    <main id="top">
      <Seo
        title="Local SEO & Google Maps Ranking in the Headwaters | HigherMindAI"
        desc="I engineer local businesses into the top 3 of the Google Map Pack and keep them there. First page in 60 days or you stop paying. $600/mo flat, month-to-month. Erin, Ontario."
        path="/"
        schema={[orgSchema(), faqSchema(HOME_FAQ)]}
      />

      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div className="reveal">
              <span className="eyebrow">Local SEO &middot; Google Business Profile ranking</span>
              <h1>
                When they search, you&rsquo;re <span className="em">one of the three</span> they see first.
              </h1>
              <p className="sub">
                I engineer your Google Business Profile into the Map Pack - the three results that take
                most of the local clicks and calls - and keep it there.{' '}
                <b>First page in 60 days, or you stop paying.</b>
              </p>
              <div className="ctas">
                <Link to="/#contact" className="btn btn-primary">
                  Book a call <Arrow />
                </Link>
                <a href={`tel:${PHONE_E164}`} className="btn btn-ghost">
                  Call {PHONE_DISP}
                </a>
              </div>
              <div className="undercta">
                <span><span className="t">-</span> $600/mo flat</span>
                <span><span className="t">-</span> Month-to-month</span>
                <span><span className="t">-</span> Pay for a result, not activity</span>
              </div>
            </div>
            <div className="reveal">
              <LocalPackCard />
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec-sm">
        <div className="wrap">
          <div className="proof-grid">
            <div className="reveal">
              <span className="eyebrow">Proof, not promises</span>
              <h2 style={{ marginTop: 22 }}>
                The guarantee is 60 days. <span className="em" style={italicTeal}>The work tends to beat it.</span>
              </h2>
              <p className="lead" style={{ margin: 0 }}>
                I lead with the guarantee and let the results outrun it. Under-promise on the page,
                over-deliver on the profile. That is the whole operating principle.
              </p>
            </div>
            <div className="vcard reveal">
              <div className="vlab">Case &middot; Vanguard Security, NB</div>
              <div className="vbig">
                From a brand-new profile to <b>#2 in Google Maps</b> in <b>30 days</b>.
              </div>
              <p className="vnote">
                Built from nothing, ranked in a month. The 60-day guarantee gives the work room. This
                case used half of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-sm" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="stats reveal">
            <div className="s"><div className="n">$600</div><div className="l">per month, flat</div></div>
            <div className="s"><div className="n">60<em>d</em></div><div className="l">first-page guarantee</div></div>
            <div className="s"><div className="n">Top 3</div><div className="l">where the calls happen</div></div>
            <div className="s"><div className="n">1:1</div><div className="l">work directly with me</div></div>
          </div>
        </div>
      </section>

      <section className="sec" id="system">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The Local Ranking System</span>
            <h2>
              How I get you ranked - <span style={italicTeal}>and keep you there.</span>
            </h2>
            <p className="lead">
              Nothing here is guesswork. I work the levers Google actually rewards: primary category,
              proximity, review velocity, citation consistency, and behavioural signals. Every move has
              a reason.
            </p>
          </div>
          <div className="steps reveal">
            <div className="step"><div className="sn">Phase one</div><h3>Audit &amp; rebuild</h3><p>A full teardown of your profile and your top three local competitors, then a rebuild - category, services, attributes, photos, description - engineered for maximum local relevance.</p></div>
            <div className="step"><div className="sn">Phase two</div><h3>Citations &amp; authority</h3><p>Deep-tier citation cleanup and authority building across the directories Google uses to verify a business. Consistent name, address, and phone everywhere it counts.</p></div>
            <div className="step"><div className="sn">Phase three</div><h3>Reviews that move rankings</h3><p>A structured system that brings in consistent 5-star reviews and gets them responded to - the velocity and social proof that lift both ranking and conversion.</p></div>
            <div className="step"><div className="sn">Phase four</div><h3>Weekly ranking signals</h3><p>Three high-authority posts a week, published to your profile to maintain the activity signals that keep you ranked once you get there.</p></div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec" id="services">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">What I do</span>
            <h2>
              One system to get you found. <span style={italicTeal}>A ladder to keep you growing.</span>
            </h2>
            <p className="lead">
              Start where it fits. Move up when the work justifies it. No tiers buried inside the core
              offer, no surprise fees.
            </p>
          </div>
          <ServiceLadder />
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="offer reveal">
            <div className="price-side">
              <span className="eyebrow">The core offer</span>
              <div className="big" style={{ marginTop: 24 }}>$600<sub>/mo</sub></div>
              <p className="terms">
                Flat. Month-to-month, no contract. One rate that covers the whole Local Ranking System -
                no tiers, no upsells, no surprise fees.
              </p>
            </div>
            <div className="gtee-side" id="guarantee">
              <span className="eyebrow">The guarantee</span>
              <h3 style={{ marginTop: 24 }}>
                First page in 60 days. <span className="em">Or you stop paying.</span>
              </h3>
              <p>
                Your clock starts the day I have what I need to begin. Not on the first page of Google
                Maps by then? You stop paying the monthly - and I keep working at no charge until you are.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Straight talk</span>
            <h2>Whether this is for you.</h2>
            <p className="lead">
              I would rather tell you up front than waste your time on a call. Here is who the system
              fits - and who it does not.
            </p>
          </div>
          <div className="fit reveal">
            <div className="col yes">
              <h3>This is for you if</h3>
              <ul>
                <li>You serve a local area and your customers find you through Google.</li>
                <li>You want a steady flow of inbound calls, not vanity impressions.</li>
                <li>You would rather pay for a result than rent activity.</li>
              </ul>
            </div>
            <div className="col no">
              <h3>This isn&rsquo;t for you if</h3>
              <ul>
                <li>You are shopping purely on price.</li>
                <li>You expect page one overnight, before the work compounds.</li>
                <li>You want to &ldquo;post once and hope&rdquo; instead of running a system.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec" id="faq">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow center">Questions</span>
            <h2>The things people ask before they call.</h2>
          </div>
          <FAQ items={HOME_FAQ} />
        </div>
      </section>

      <div className="divider" />

      <section className="sec" id="contact">
        <div className="wrap">
          <div className="contact-grid">
            <div className="reveal">
              <span className="eyebrow">Let&rsquo;s get you ranked</span>
              <h2 style={{ marginTop: 22 }}>
                Tell me your business and your city. <span className="em">I&rsquo;ll tell you if I can win it.</span>
              </h2>
              <p className="lead">
                No pressure pitch. A straight read on whether the Local Ranking System fits, and what the
                first 60 days look like for you.
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
