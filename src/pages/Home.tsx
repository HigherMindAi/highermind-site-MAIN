import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import RecordTicker from '../components/RecordTicker';
import {
  SearchStage, SystemsStage,
  InflowStage, NightShiftStage, KeystoneArchStage,
} from '../components/Stages';
import ServiceLadder from '../components/ServiceLadder';
import FAQ from '../components/FAQ';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP, FOUNDER } from '../lib/site';
import { LAW_FAQ } from '../lib/services';
import { PROPERTY_FAQ } from '../lib/property';
import { orgSchema, faqSchema, personSchema } from '../lib/schema';

/** Count-up for stats: final value ships in the HTML (crawlers read it);
 *  the animation runs client-side when the band scrolls into view. */
function useCountUp() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          io.unobserve(el);
          const target = Number(el.dataset.count);
          const pre = el.dataset.pre ?? '';
          const suf = el.dataset.suf ?? '';
          const t0 = performance.now();
          const step = (t: number) => {
            const p = Math.min(1, (t - t0) / 900);
            el.textContent = pre + Math.round(target * (1 - Math.pow(1 - p, 3))) + suf;
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.6 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const RAIL = ['01', '02', '03', '04'] as const;

/** One product band: depth-rail on the left, claim, hard numbers, the work. */
function Product({
  n, eyebrow, head, em, lead, stats, points, href, cta, stage,
}: {
  n: string; eyebrow: string; head: string; em: string; lead: string;
  stats: [string, string, { c?: number; pre?: string; suf?: string }?][];
  points: string[]; href: string; cta: string; stage: React.ReactNode;
}) {
  return (
    <section className="sec prod">
      <div className="wrap">
        <div className="prod-body">
          <div className="drail reveal" aria-hidden="true">
            {RAIL.map((m, i) => (
              <span key={m} className="dcell">
                <span className={'dm' + (m === n ? ' on' : '')}>{m}</span>
                {i < RAIL.length - 1 && (
                  <span className={'dline' + (m === n ? ' fill' : '')} />
                )}
              </span>
            ))}
          </div>
          <div>
            <div className="prod-top">
              <div className="reveal">
                <span className="pnum">Product {n} &middot; {eyebrow}</span>
                <h2>{head} <span className="em">{em}</span></h2>
              </div>
              <p className="lead reveal">{lead}</p>
            </div>
            <div className="prod-cols">
              <div>
                <div className="stats three tight reveal">
                  {stats.map(([v, l, cnt]) => (
                    <div className="s" key={l}>
                      <div className="n">
                        {cnt ? (
                          <em data-count={cnt.c} data-pre={cnt.pre ?? ''} data-suf={cnt.suf ?? ''}>
                            {v}
                          </em>
                        ) : (
                          <em>{v}</em>
                        )}
                      </div>
                      <div className="l">{l}</div>
                    </div>
                  ))}
                </div>
                <ul className="plist reveal" style={{ marginTop: 30 }}>
                  {points.map((p) => <li key={p}>{p}</li>)}
                </ul>
                <div className="pfoot reveal">
                  <Link to={href} className="btn btn-primary">{cta} <Arrow /></Link>
                  <Link to="/book/" className="btn btn-ghost">Book a call</Link>
                </div>
              </div>
              <div className="stg-wrap reveal">{stage}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useCountUp();
  return (
    <main id="top">
      <Seo
        title="Property Management Marketing & AI Intake, Canada | HigherMindAI"
        desc="I rank property management firms so owners find them, answer every enquiry that lands, and hand over the record of both. Systems from $900 a month."
        path="/"
        schema={[orgSchema(), personSchema(), faqSchema([...PROPERTY_FAQ, ...LAW_FAQ])]}
      />

      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div className="reveal">
              <span className="eyebrow">Property management &middot; local visibility, intake, the record</span>
              <h1>The doors you never knew <span className="em">you lost.</span></h1>
              <p className="sub">
                Two ways it happens. They never find you, or nobody answers. I build ranking and
                intake for property and condominium management firms, and hand you a timestamped
                record of every contact - so responsiveness stops being a thing you claim and
                becomes a number you can put in front of an owner or a board.
              </p>
              <div className="ctas">
                <Link to="/book/" className="btn btn-primary">Book a call <Arrow /></Link>
                <a href={`tel:${PHONE_E164}`} className="btn btn-ghost">Call {PHONE_DISP}</a>
              </div>
              <div className="undercta">
                <span><span className="t">/</span> Answered and qualified</span>
                <span><span className="t">/</span> Live in 14-21 days</span>
                <span><span className="t">/</span> One operator, start to finish</span>
              </div>
            </div>
            <RecordTicker variant="property" />
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The problem</span>
            <h2>Two things lose you the door. <span className="em">They never find you, or nobody answers.</span></h2>
          </div>
          <p className="lead reveal">
            An owner who has just decided to stop managing it himself reads the first three results
            and calls two of them. If you are not in that pack you were never in the running, and you
            will never learn the enquiry existed. If you were, and it rang out at seven in the
            evening, that door went to whoever answered - permanently. I close both ends, and the
            second one is the one nobody else will sell you.
          </p>
        </div>
      </section>


      <div className="divider" />

      <section className="sec" id="doors">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Two books</span>
            <h2>Pick the one <span className="em">you are.</span></h2>
            <p className="lead">
              Property management is the specialty and where nearly all of my work goes. Law firms
              are the second book, still live and still built. Both lose work the same two ways, but
              they lose it in a different order - so they get built in a different order.
            </p>
          </div>
          <div className="steps">
            <div className="step reveal">
              <div className="sn">The specialty &middot; Property &amp; condominium management</div>
              <h3>The Keystone</h3>
              <p>
                Ranking first, because an owner who has just decided to stop managing it himself is
                already searching. Then the desk that answers him, the record that proves it, and the
                reputation work that keeps board packages coming. Rental portfolios and condominium
                corporations.
              </p>
              <div className="ctas" style={{ marginTop: 22 }}>
                <Link to="/property-management" className="btn btn-primary">The Keystone <Arrow /></Link>
              </div>
            </div>
            <div className="step reveal">
              <div className="sn">The second book &middot; Law firms</div>
              <h3>The Watershed</h3>
              <p>
                Intake first, because a person in a crisis retains the firm that picks up. Personal
                injury, family, criminal defence, immigration.
              </p>
              <div className="ctas" style={{ marginTop: 22 }}>
                <Link to="/the-watershed" className="btn btn-primary">The Watershed <Arrow /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <Product
        n="01"
        eyebrow="Ranking & Local Leads"
        head="Found first by the owner searching,"
        em="and it stays yours."
        lead="The demand half, and the engine every firm understands first. A managed Google Business Profile engineered into the top three of the local pack and held there, plus paid campaigns where you want volume faster than ranking can compound. Organic is a well, paid is a tap - I build the well first."
        stats={[
          ['Top 3', 'Map Pack target', { c: 3, pre: 'Top ' }],
          ['60 days', 'Or the monthly pauses'],
          ['Owned', 'An asset, not rent'],
        ]}
        points={[
          'Profile rebuilt properly: correct category, complete services, consistent details everywhere they appear.',
          'Review velocity, citation authority and local content - the signals that decide who holds the top three.',
          'Every winnable town around you built as its own ranked unit, so you own more than one pin.',
          'The Rank Lock: first page inside 60 days on the agreed primary term, or the monthly pauses until it lands. Toronto, Vancouver and Montreal carry a 90-day provision agreed at kickoff.',
        ]}
        href="/property-management-seo"
        cta="See the ranking work"
        stage={<InflowStage />}
      />

      <div className="divider" />

      <Product
        n="02"
        eyebrow="AI Intake Desk"
        head="Every call answered."
        em="Screened, booked, 24/7."
        lead="An AI intake desk on your phone and your website. It answers the moment an enquiry lands, runs your screening questions in your words, captures the file, and books the consultation while the caller is still on the line."
        stats={[
          ['Every one', 'Answered and qualified'],
          ['24/7', 'Nights, weekends, holidays', { c: 24, suf: '/7' }],
          ['14-21 days', 'From yes to live'],
        ]}
        points={[
          'Answers from your knowledge and your process, never a generic script - and hands off to a human rather than guessing.',
          'Screens on the things that actually matter: is it an owner enquiry, how many doors, which city, and is it urgent.',
          'Books straight into your calendar, then chases no-shows and cold enquiries automatically.',
          'Administrative intake only. It routes to a licensed manager and stops - the published scope limits say exactly where.',
        ]}
        href="/property-management-intake"
        cta="See the intake desk"
        stage={<NightShiftStage />}
      />

      <div className="divider" />

      <Product
        n="03"
        eyebrow="AI Search Visibility &middot; GEO"
        head="Get named by the AI"
        em="people now ask instead of Google."
        lead="Your buyers have started asking ChatGPT, Claude, Gemini and Perplexity for a recommendation. They get one answer with two or three names in it. I do the entity, evidence and access work that makes you one of them."
        stats={[
          ['1 answer', 'No page two to be on', { c: 1, suf: ' answer' }],
          ['6+', 'AI systems targeted', { c: 6, suf: '+' }],
          ['30-60d', 'Structural signals register'],
        ]}
        points={[
          'A structured entity graph so the models know exactly who you are, what you do and where you do it.',
          'Answer-first pages and matching markup, written so a model can lift a clean quote and attribute it to you.',
          'Explicit crawler access and an llms.txt summary - most sites have never opened the door, and some have accidentally shut it.',
          'A monthly log of the same questions re-asked, showing whether you got named and what changed.',
        ]}
        href="/ai-search-optimization"
        cta="See AI search visibility"
        stage={<SearchStage />}
      />

      <div className="divider" />

      <Product
        n="04"
        eyebrow="Custom AI Systems"
        head="The job that eats your week,"
        em="running by itself."
        lead="Every business has one motion that consumes the day - intake, triage, quoting, follow-up, scheduling. I build custom AI on your own knowledge to run it, so it answers from your truth instead of a plausible guess."
        stats={[
          ['Your data', 'Never a generic model'],
          ['Hands off', 'When stakes are real'],
          ['Built once', 'Runs every day'],
        ]}
        points={[
          'Trained on your documents, your policies and your process - it answers from your truth or it escalates.',
          'Wired into the tools you already run, so nothing needs re-typing into a second system.',
          'Guardrails first: a do-not-say list, and a human handoff wherever the stakes justify one.',
        ]}
        href="/services/ai-systems/"
        cta="See custom AI systems"
        stage={<SystemsStage />}
      />

      <div className="divider" />

      <section className="gband">
        <div className="wrap">
          <div className="flag-grid">
            <div>
              <div className="sec-head left reveal" style={{ marginBottom: 28 }}>
                <span className="eyebrow">The flagship</span>
                <h2>Welded together, it is one loop. <span className="em">Demand in, booked owners out.</span></h2>
                <p className="lead">
                  Each piece above stands on its own and can be bought on its own. Together they are
                  a closed loop: visibility brings the owner enquiry, the desk answers and qualifies
                  it, and the report on the first of the month proves both. It is called The Keystone
                  for a property management company and The Watershed for a law firm - same loop,
                  different order of build, because the two books leak differently.
                </p>
              </div>
              <div className="ctas reveal">
                <Link to="/the-keystone" className="btn btn-primary">The Keystone <Arrow /></Link>
                <Link to="/the-watershed" className="btn btn-ghost">The Watershed</Link>
              </div>
            </div>
            <div className="stg-wrap reveal">
              <KeystoneArchStage />
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec" id="services">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Also available</span>
            <h2>Every piece, <span className="em">on its own if that is what the job needs.</span></h2>
          </div>
          <ServiceLadder />
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Who I help</span>
            <h2>Property management is the specialty. <span className="em">It is not the only door.</span></h2>
            <p className="lead">
              Property management first, because a door pays every month for years and one won owner
              carries the whole system. Law firms second, because legal intake is the hardest version
              of the same problem and I spent close to a decade inside the justice system. A missed
              enquiry costs the same in any business where one client is worth having.
            </p>
          </div>
          <div className="inds reveal">
            <span className="ind lead-ind">Property &amp; condominium management - the specialty</span>
            {['Law firms - the second book','Accountants','Dentists & orthodontists','Medical clinics','Veterinary','Insurance brokers','Any appointment-led practice'].map((i) => (
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
            <div>
              <div className="who-shot">
                <img src="/derek.webp" width={300} height={300} loading="lazy" decoding="async"
                  alt={`${FOUNDER}, founder of HigherMindAI`} />
              </div>
              <div className="who-name"><b>{FOUNDER}</b>Founder &middot; Ontario, Canada</div>
            </div>
            <div>
              <span className="eyebrow">Why this is built right</span>
              <h2 style={{ marginTop: 24 }}>
                Built by someone who lived in the file, <span className="em">not a marketer who read about it.</span>
              </h2>
              <p>
                Before this I spent ten months contracted inside a property management operation -
                the sales and CRM side, and the maintenance arm that serviced the portfolio. Not
                licensed, not in the boardroom, and I say so on the about page. Before that, the
                better part of ten years inside the justice system, where I learned that an incident
                is only ever as good as the record of it. One operator, start to finish. No account
                manager between you and the work.
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
          <h3 className="sn" style={{ marginBottom: 18 }}>Property &amp; condominium management</h3>
          <FAQ items={PROPERTY_FAQ} />
          <h3 className="sn" style={{ margin: '40px 0 18px' }}>Law firms</h3>
          <FAQ items={LAW_FAQ} />
        </div>
      </section>

      <div className="divider" />

      <section className="ctastrip" id="contact">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Nine minutes. <span className="em">No pitch.</span></h2>
            <p className="lead">
              I will ask what a door is worth to you, what happens to an owner enquiry that lands at
              seven in the evening, and where you show up when somebody nearby goes looking. Then I
              tell you straight what I would build and what it would take.
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
