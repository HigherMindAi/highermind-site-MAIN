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
import { GENERAL_FAQ } from '../lib/services';
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
        title="Local Visibility & AI Intake for Trades and Service Businesses | HigherMindAI"
        desc="I get you found when somebody nearby goes looking, answer every enquiry that lands, and hand you the record of both. One operator, Canada and the US."
        path="/"
        schema={[orgSchema(), personSchema(), faqSchema(GENERAL_FAQ)]}
      />

      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div className="reveal">
              <span className="eyebrow">Local visibility, intake, the record</span>
              <h1>The work you never knew <span className="em">you lost.</span></h1>
              <p className="sub">
                Two ways it happens. They never find you, or nobody answers. I build the visibility
                and the intake, and hand you a timestamped record of every contact - so
                responsiveness stops being a thing you claim and becomes a number you can put in
                front of anyone.
              </p>
              <div className="ctas">
                <Link to="/book/" className="btn btn-primary">Book a call <Arrow /></Link>
                <a href={`tel:${PHONE_E164}`} className="btn btn-ghost">Call {PHONE_DISP}</a>
              </div>
              <div className="undercta">
                <span><span className="t">/</span> Answered and qualified</span>
                <span><span className="t">/</span> Live in 14-21 days</span>
                <span><span className="t">/</span> One firm per market, US and Canada</span>
              </div>
            </div>
            <RecordTicker variant="mixed" />
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The problem</span>
            <h2>Two things lose you the job. <span className="em">They never find you, or nobody answers.</span></h2>
          </div>
          <p className="lead reveal">
            Somebody who has just decided to stop doing it himself reads the first three results and
            calls two of them. If you are not in that pack you were never in the running, and you
            will never learn the enquiry existed. If you were, and it rang out at seven in the
            evening, that job went to whoever answered - permanently. I close both ends, and the
            second one is the one nobody else will sell you.
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="sec" id="doors">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Two doors</span>
            <h2>Two things every owner wants. <span className="em">I engineer both.</span></h2>
            <p className="lead">
              Both come apart in the same two places, which is why one system serves both.
            </p>
          </div>
          <div className="steps">
            <div className="step reveal">
              <div className="sn">Door one</div>
              <h3>More work.</h3>
              <p>
                You want the phone to ring more, take the next town, put a second crew on. That is
                the visibility half - found first when somebody nearby goes looking, and it stays
                yours rather than stopping the day you stop paying for it.
              </p>
            </div>
            <div className="step reveal">
              <div className="sn">Door two</div>
              <h3>More time.</h3>
              <p>
                You want the phone to stop owning your evenings, and to get closer to stepping back
                from it. That is the intake half - every call and message answered and qualified,
                the routine absorbed, and only the real ones reaching you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <Product
        n="01"
        eyebrow="Visibility &middot; The Pin"
        head="Found first when somebody nearby goes looking,"
        em="and it stays yours."
        lead="The traffic half, and the one every owner understands first. It has two ways in. Organic is a well: a managed Google Business Profile engineered into the top three of the local pack and held there. Paid is a tap, for when you want volume faster than ranking can compound. Organic is a well, paid is a tap - I build the well first."
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
        href="/property-management-seo/"
        cta="See how visibility is built"
        stage={<InflowStage />}
      />

      <div className="divider" />

      <Product
        n="02"
        eyebrow="Intake &middot; The Line"
        head="Every call answered and qualified,"
        em="24/7."
        lead="One intake desk on two channels, the web and the phone. It answers when an enquiry lands, runs your screening questions in your words, captures the job, and books it while the caller is still on the line. Start on one channel and add the other whenever you want it, at what it would have cost on day one."
        stats={[
          ['Every one', 'Answered and qualified'],
          ['24/7', 'Nights, weekends, holidays', { c: 24, suf: '/7' }],
          ['14-21 days', 'From yes to live'],
        ]}
        points={[
          'Administrative intake only. It routes to a person and stops - the published scope limits say exactly where.',
          'Answers from your knowledge and your process, never a generic script - and hands off rather than guessing.',
          'Screens on the things that actually matter: what kind of job, which town, and is it urgent.',
          'Books straight into your calendar, then chases no-shows and cold enquiries automatically.',
        ]}
        href="/property-management-intake/"
        cta="See how intake is built"
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
          'A monthly log of the same questions re-asked - "who near me actually answers the phone?" - showing whether you got named and what changed.',
        ]}
        href="/ai-search-optimization/"
        cta="See AI search visibility"
        stage={<SearchStage />}
      />

      <div className="divider" />

      <Product
        n="04"
        eyebrow="Custom AI Systems &middot; The Motion"
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
                <h2>Welded together, it is one loop. <span className="em">Demand in, booked work out.</span></h2>
                <p className="lead">
                  Each piece above stands on its own and can be bought on its own. Together they are
                  a closed loop: visibility brings the enquiry, the desk answers and qualifies it,
                  and the report on the first of the month proves both. One name, one build, and the order changes with the
                  trade - some businesses are bleeding harder at the front and some at the back.
                </p>
              </div>
              <div className="ctas reveal">
                <Link to="/the-whole-operation/" className="btn btn-primary">The Whole Operation <Arrow /></Link>
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
            <h2>One system, <span className="em">and three trades it is already built for.</span></h2>
            <p className="lead">
              Property and condominium management, roofing, and arborists and tree care already have
              the scripts, the seasons and the vocabulary worked out, because I built for them
              first. Everything else runs on the same two failures, and a missed enquiry costs the
              same in any business where one client is worth having.
            </p>
          </div>
          <div className="inds reveal">
            <span className="ind lead-ind">Property &amp; condominium management</span>
            <span className="ind lead-ind">Roofing</span>
            <span className="ind lead-ind">Arborists &amp; tree care</span>
            {['HVAC','Plumbing','Restoration','Accountants','Dentists & orthodontists','Medical clinics','Veterinary','Insurance brokers','Any appointment-led business'].map((i) => (
              <span className="ind" key={i}>{i}</span>
            ))}
          </div>
          <div className="pfoot reveal">
            <Link to="/who-i-help/" className="btn btn-ghost">Who I help <Arrow /></Link>
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
                is only ever as good as the record of it. That is why every system I build hands you
                a timestamped log - not because it is a feature, but because a claim you cannot
                evidence is not a claim. One operator, start to finish. No account manager between
                you and the work.
              </p>
              <div className="ctas">
                <Link to="/about/" className="btn btn-primary">The full story <Arrow /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec-sm">
        <div className="wrap">
          <div className="reveal">
            <span className="eyebrow">Coverage</span>
            <h2 style={{ marginTop: 24, fontSize: 'clamp(26px,3.2vw,38px)' }}>
              Eight US states, five Canadian regions.{' '}
              <span className="em">One firm in each of them.</span>
            </h2>
            <p className="lead">
              I take one firm per trade, per market, which means the honest answer to &ldquo;do you
              work in my area&rdquo; is sometimes no. A roofer and a property manager in the same
              city are not competitors; two roofers are. The full list is one page, and it takes
              about three seconds to check.
            </p>
            <div className="ctas" style={{ marginTop: 26 }}>
              <Link to="/coverage/" className="btn btn-primary">
                See where I work <Arrow />
              </Link>
              <Link to="/scope-limits/" className="btn btn-ghost">
                Where the desk stops
              </Link>
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
          <FAQ items={GENERAL_FAQ} />
        </div>
      </section>

      <div className="divider" />

      <section className="ctastrip" id="contact">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Nine minutes. <span className="em">No pitch.</span></h2>
            <p className="lead">
              I will ask what a job is worth to you, what happens to an enquiry that lands at seven
              in the evening, and where you show up when somebody nearby goes looking. Then I tell
              you straight what I would build and what it would take. First question is which market
              you are in, because I take one firm per trade in each - if yours is taken, you hear it
              then rather than after you have spent an hour.
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
