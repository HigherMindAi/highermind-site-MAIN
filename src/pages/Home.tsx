import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import HeroField from '../components/HeroField';
import FAQ from '../components/FAQ';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP, FOUNDER } from '../lib/site';
import { LAW_FAQ } from '../lib/services';
import { orgSchema, faqSchema, personSchema } from '../lib/schema';

/** One product band. Numbered, claimed, measured, then the concrete things. */
function Product({
  n, eyebrow, head, em, lead, stats, points, href, cta,
}: {
  n: string; eyebrow: string; head: string; em: string; lead: string;
  stats: [string, string][]; points: string[]; href: string; cta: string;
}) {
  return (
    <section className="sec prod">
      <div className="wrap">
        <div className="prod-top">
          <div className="reveal">
            <span className="pnum">Product {n} &middot; {eyebrow}</span>
            <h2>{head} <span className="em">{em}</span></h2>
          </div>
          <p className="lead reveal">{lead}</p>
        </div>
        <div className="stats three tight reveal">
          {stats.map(([v, l]) => (
            <div className="s" key={l}>
              <div className="n"><em>{v}</em></div>
              <div className="l">{l}</div>
            </div>
          ))}
        </div>
        <ul className="plist reveal" style={{ marginTop: 34 }}>
          {points.map((p) => <li key={p}>{p}</li>)}
        </ul>
        <div className="pfoot reveal">
          <Link to={href} className="btn btn-primary">{cta} <Arrow /></Link>
          <Link to="/book/" className="btn btn-ghost">Book a call</Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main id="top">
      <Seo
        title="AI Intake, AI Search & Lead Generation for Law Firms | HigherMindAI"
        desc="An AI intake desk that answers every call and message 24/7, AI search visibility so you get named by ChatGPT and Google AI, and Google ranking that brings the demand. Built for law firms. Live in 14 days."
        path="/"
        schema={[orgSchema(), personSchema(), faqSchema(LAW_FAQ)]}
      />

      <section className="hero">
        <HeroField />
        <div className="wrap">
          <div className="hero-grid solo">
            <div className="reveal">
              <span className="eyebrow">AI intake &middot; AI search visibility &middot; lead generation</span>
              <h1>The clients you're missing <span className="em">are calling right now.</span></h1>
              <p className="sub">
                I build the AI that answers them. An intake desk that picks up every call and message
                24/7, screens it, and books it - plus the visibility work that makes people find you in
                the first place, on Google and inside the AI systems they now ask instead.
              </p>
              <div className="ctas">
                <Link to="/book/" className="btn btn-primary">Book a call <Arrow /></Link>
                <a href={`tel:${PHONE_E164}`} className="btn btn-ghost">Call {PHONE_DISP}</a>
              </div>
              <div className="undercta">
                <span><span className="t">/</span> Answered in under 60 seconds</span>
                <span><span className="t">/</span> Live in 14 days</span>
                <span><span className="t">/</span> Built from inside the justice system</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The problem</span>
            <h2>Two things lose you the client. <span className="em">They never find you, or nobody answers.</span></h2>
          </div>
          <p className="lead reveal">
            Someone in a crisis calls three firms in ten minutes and retains whoever picks up. If you
            are not in the answer they were given, you never got the call. If you were, and it rang out
            at nine at night, you lost it to whoever did answer. I close both ends - and the second one
            is the one nobody else will sell you.
          </p>
        </div>
      </section>

      <div className="divider" />

      <Product
        n="01"
        eyebrow="AI Intake Desk"
        head="Every call answered."
        em="Screened, booked, 24/7."
        lead="An AI intake desk on your phone and your website. It answers the moment an enquiry lands, runs your screening questions in your words, captures the file, and books the consultation while the caller is still on the line."
        stats={[['<60s', 'Response, every channel'], ['24/7', 'Nights, weekends, holidays'], ['14 days', 'From yes to live']]}
        points={[
          'Answers from your knowledge and your process, never a generic script - and hands off to a human rather than guessing.',
          'Screens on the things that actually matter: conflicts, practice area, urgency, jurisdiction, location.',
          'Books straight into your calendar, then chases no-shows and cold enquiries automatically.',
          'Administrative intake only. It never gives legal advice and never implies a solicitor-client relationship.',
        ]}
        href="/law-firm-intake"
        cta="See the intake desk"
      />

      <div className="divider" />

      <Product
        n="02"
        eyebrow="AI Search Visibility &middot; GEO"
        head="Get named by the AI"
        em="people now ask instead of Google."
        lead="Your buyers have started asking ChatGPT, Claude, Gemini and Perplexity for a recommendation. They get one answer with two or three names in it. I do the entity, evidence and access work that makes you one of them."
        stats={[['1 answer', 'No page two to be on'], ['6+', 'AI systems targeted'], ['30-60d', 'Structural signals register']]}
        points={[
          'A structured entity graph so the models know exactly who you are, what you do and where you do it.',
          'Answer-first pages and matching markup, written so a model can lift a clean quote and attribute it to you.',
          'Explicit crawler access and an llms.txt summary - most sites have never opened the door, and some have accidentally shut it.',
          'A monthly log of the same questions re-asked, showing whether you got named and what changed.',
        ]}
        href="/ai-search-optimization"
        cta="See AI search visibility"
      />

      <div className="divider" />

      <Product
        n="03"
        eyebrow="Ranking & Local Leads"
        head="Found first on Google,"
        em="and it stays yours."
        lead="The demand half. A managed Google Business Profile engineered into the top three of the Map Pack and held there, plus paid campaigns where you want volume faster than ranking can compound."
        stats={[['Top 3', 'Map Pack target'], ['60 days', 'Or you stop paying'], ['Owned', 'An asset, not rent']]}
        points={[
          'Profile rebuilt properly: correct category, complete services, consistent details everywhere they appear.',
          'Review velocity, citation authority and local content - the signals that decide who holds the top three.',
          'Every winnable town around you built as its own ranked unit, so you own more than one pin.',
          'The Rank Lock: first page in 60 days or you stop paying the monthly and I keep working at no charge.',
        ]}
        href="/law-firm-seo"
        cta="See the ranking work"
      />

      <div className="divider" />

      <Product
        n="04"
        eyebrow="Custom AI Systems"
        head="The job that eats your week,"
        em="running by itself."
        lead="Every business has one motion that consumes the day - intake, triage, quoting, follow-up, scheduling. I build custom AI on your own knowledge to run it, so it answers from your truth instead of a plausible guess."
        stats={[['Your data', 'Never a generic model'], ['Hands off', 'When stakes are real'], ['Built once', 'Runs every day']]}
        points={[
          'Trained on your documents, your policies and your process - it answers from your truth or it escalates.',
          'Wired into the tools you already run, so nothing needs re-typing into a second system.',
          'Guardrails first: a do-not-say list, and a human handoff wherever the stakes justify one.',
        ]}
        href="/services/ai-systems/"
        cta="See custom AI systems"
      />

      <div className="divider" />

      <section className="gband">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The flagship</span>
            <h2>The Watershed is all of it, welded together. <span className="em">Demand in, booked consultations out.</span></h2>
            <p className="lead">
              Each piece above stands on its own and can be bought on its own. Together they are a
              closed loop: visibility brings the enquiry, the intake desk answers it, and the report on
              the first of the month proves both. Nothing gets in without being caught.
            </p>
          </div>
          <div className="ctas reveal">
            <Link to="/the-watershed" className="btn btn-primary">See the full system <Arrow /></Link>
            <Link to="/book/" className="btn btn-ghost">Book a call</Link>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Who I help</span>
            <h2>Law firms are the specialty. <span className="em">They are not the only door.</span></h2>
            <p className="lead">
              I build for law firms first, because legal intake is the hardest version of the problem
              and I spent close to a decade inside the justice system before building any of this. But
              a missed enquiry costs the same in any business where one client is worth real money.
            </p>
          </div>
          <div className="inds reveal">
            <span className="ind lead-ind">Law firms - the specialty</span>
            {['Accountants','Dental & orthodontic','Medical clinics','Veterinary','Insurance brokers','Real estate','HVAC & plumbing','Electrical & roofing','Auto service','Any appointment-led practice'].map((i) => (
              <span className="ind" key={i}>{i}</span>
            ))}
          </div>
          <div className="pfoot reveal">
            <Link to="/solutions" className="btn btn-ghost">Who I help <Arrow /></Link>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="gband who">
        <div className="wrap">
          <div className="who-grid reveal">
            <div className="who-shot">
              <img src="/derek.webp" width={300} height={300} loading="lazy" decoding="async"
                alt={`${FOUNDER}, founder of HigherMindAI`} />
              <div className="who-name"><b>{FOUNDER}</b>Founder &middot; Ontario, Canada</div>
            </div>
            <div>
              <span className="eyebrow">Why this is built right</span>
              <h2 style={{ marginTop: 24 }}>
                Built by someone who lived in the file, <span className="em">not a marketer who read about it.</span>
              </h2>
              <p>
                Before HigherMindAI, I spent the better part of a decade inside the justice system - in
                courtrooms and in federal case files. I know what a real intake looks like, and why the
                first firm to pick up is usually the firm that gets retained. One operator, start to
                finish. No account manager between you and the work.
              </p>
              <div className="ctas">
                <Link to="/about" className="btn btn-primary">The full story <Arrow /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec" id="faq">
        <div className="wrap narrow">
          <div className="sec-head left reveal">
            <span className="eyebrow">Questions</span>
            <h2>Answered plainly.</h2>
          </div>
          <FAQ items={LAW_FAQ} />
        </div>
      </section>

      <div className="divider" />

      <section className="ctastrip" id="contact">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Fifteen minutes. <span className="em">No pitch.</span></h2>
            <p className="lead">
              I will ask what a new client is worth to you, what happens to a call at seven in the
              evening, and where you show up when somebody nearby goes looking. Then I tell you
              straight what I would build and what it would take.
            </p>
          </div>
          <div className="ctas reveal">
            <Link to="/book/" className="btn btn-primary">Book a call <Arrow /></Link>
            <a href={`tel:${PHONE_E164}`} className="btn btn-ghost">Call {PHONE_DISP}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
