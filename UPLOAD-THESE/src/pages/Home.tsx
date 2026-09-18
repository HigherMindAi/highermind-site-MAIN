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
import Plate from '../components/Plate';
import WorkCard from '../components/WorkCard';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP, FOUNDER } from '../lib/site';
import { GENERAL_FAQ } from '../lib/services';
import { FEATURED } from '../lib/work';
import type { StillKey } from '../lib/media';
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

/**
 * One product band.
 *
 * v12 adds two things above the old band and changes nothing below it: the
 * DREAM STATE, set in the serif, and the PLATE it sits against. The state
 * lands first because that is the thing he recognises; the mechanism lands
 * underneath because that is the thing he buys. The old order had it the
 * other way round and it read like a specification.
 */
function Product({
  n, eyebrow, state, image, filmKey, head, em, lead, stats, points, href, cta, stage, flip,
}: {
  n: string; eyebrow: string; state: string; image: StillKey; filmKey: string;
  head: string; em: string; lead: string;
  stats: [string, string, { c?: number; pre?: string; suf?: string }?][];
  points: string[]; href: string; cta: string; stage: React.ReactNode; flip?: boolean;
}) {
  return (
    <section className="sec prod">
      <div className="wrap">
        <div className={`chap ${flip ? 'flip' : ''}`} style={{ marginBottom: 'clamp(48px,6vw,84px)' }}>
          <div className="chap-copy reveal">
            <span className="eyebrow"><span className="n">{n}</span> {eyebrow}</span>
            <p className="chap-state" style={{ marginTop: 22 }}>{state}</p>
            <h2 style={{ fontSize: 'clamp(27px,3.4vw,44px)' }}>
              {head} <span className="em">{em}</span>
            </h2>
          </div>
          <div className="chap-media reveal">
            <Plate image={image} filmKey={filmKey} ratio="4 / 3" scrim="soft" />
          </div>
        </div>

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
            <p className="lead reveal" style={{ marginTop: 0 }}>{lead}</p>
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
                  <Link to="/book/" className="btn btn-ghost">Take the nine minutes</Link>
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

      {/* ------------------------------------------------------------- HERO
          Full-bleed film behind the title, the way a title sits over a plate
          in a film. The still is the poster frame, so there is never a blank
          box - and on a phone, or on a metered connection, the still is all
          that loads. */}
      <section className="chero">
        <Plate image="catchment" filmKey="catchment" ratio="auto" className="plate-bleed" priority />
        <div className="chero-veil" aria-hidden="true" />
        <div className="wrap chero-in">
          <div className="reveal">
            <span className="eyebrow">Local visibility, intake, the record</span>
            <h1 style={{ marginTop: 22 }}>The work you never knew <span className="em">you lost.</span></h1>
            <p className="sub">
              Two ways it happens. They never find you, or nobody answers. I build the visibility
              and the intake, and hand you a timestamped record of every contact - so
              responsiveness stops being a thing you claim and becomes a number you can put in
              front of anyone.
            </p>
            <div className="ctas">
              <Link to="/book/" className="btn btn-primary">Take the nine minutes <Arrow /></Link>
              <a href={`tel:${PHONE_E164}`} className="btn btn-ghost">Call {PHONE_DISP}</a>
            </div>
            <div className="undercta">
              <span><span className="t">/</span> Answered and qualified</span>
              <span><span className="t">/</span> Live in 14-21 days</span>
              <span><span className="t">/</span> One firm per market, US and Canada</span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- THE LEAK
          The only amber on the site. Three ways the work goes missing, stated
          flat, in the words used on the phone. */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow leak"><span className="n">01</span> Where it goes</span>
            <h2 style={{ marginTop: 22 }}>
              Two things lose you the job.{' '}
              <span className="em">They never find you, or nobody answers.</span>
            </h2>
          </div>

          <div className="loss reveal">
            <div className="loss-cell">
              <span className="k">Fourth</span>
              <p>
                Three names come up in the box. Your next customer rings one, maybe two. <b>Being fourth is not a
                close second</b> - it is not being in the conversation, and being better than the
                first three does not change it.
              </p>
            </div>
            <div className="loss-cell">
              <span className="k">6:40pm</span>
              <p>
                The enquiry lands after hours and the line rings out. <b>Whoever answers is on site
                tomorrow.</b> You are never told you were in the running.
              </p>
            </div>
            <div className="loss-cell">
              <span className="k">Not named</span>
              <p>
                They ask an assistant instead of a search box and get three names back. <b>There is
                no page two.</b> A profile written only for a person is now half written.
              </p>
            </div>
          </div>

          <p className="lead reveal" style={{ marginTop: 'clamp(32px,4vw,48px)' }}>
            Someone who has just decided to stop doing it themselves reads the first three results and
            calls two of them. If you are not in that pack you were never in the running, and you
            will never learn the enquiry existed. If you were, and it rang out at seven in the
            evening, that job went to whoever answered - permanently. I close both ends, and the
            second one is the one nobody else will sell you.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------- PULL QUOTE
          Full bleed. The page's only raised voice. */}
      <section className="bleed" style={{ marginTop: 'clamp(40px,6vw,80px)' }}>
        <Plate image="threeLit" filmKey="threeLit" ratio="21 / 9" scrim="hard">
          <div className="wrap">
            <p className="pull">
              Three come up. <em>Being fourth is not a close second.</em>
            </p>
            <p className="pull-by">The map box, every day, in every town</p>
          </div>
        </Plate>
      </section>

      <div className="divider" />

      <section className="sec" id="doors">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow"><span className="n">02</span> Two doors</span>
            <h2 style={{ marginTop: 22 }}>Two things every owner wants. <span className="em">I engineer both.</span></h2>
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
        state="You are the first name they see, in every town you already work in."
        image="twoTowns"
        filmKey="twoTowns"
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
          'Review capture, review response and listing consistency carried inside the same monthly, never quoted as a second invoice.',
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
        state="It is twenty past nine at night. Somebody answered, and it was not you."
        image="reception"
        filmKey="reception"
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
        flip
      />

      <div className="divider" />

      <Product
        n="03"
        eyebrow="AI Search Visibility &middot; The Mention"
        state="They asked an assistant who to call. It gave three names, and one of them was yours."
        image="oneNamed"
        filmKey="oneNamed"
        head="Get named by the AI"
        em="people now ask instead of Google."
        lead="Your buyers have started asking ChatGPT, Claude, Gemini and Perplexity for a recommendation. They get one answer with two or three names in it. I do the entity, evidence and access work that makes you one of them. Nobody controls whether a model names a business, including the people who build the surfaces - what can be controlled is whether you are reachable, resolvable and quotable, and that is the whole offer."
        stats={[
          ['1 answer', 'No page two to be on', { c: 1, suf: ' answer' }],
          ['6+', 'AI systems targeted', { c: 6, suf: '+' }],
          ['30-60d', 'Structural signals register'],
        ]}
        points={[
          'A structured entity graph so the models know exactly who you are, what you do and where you do it.',
          'Answer-first pages and matching markup, written so a model can lift a clean quote and attribute it to you.',
          'Explicit crawler access and an llms.txt summary - most sites have never opened the door, and some have accidentally shut it with a block-everything rule that took the answering crawlers out along with the training ones.',
          'A monthly log of the same questions re-asked, in the same wording, on the same day - showing whether you got named, flattering or not. A mention nobody measured is a claim.',
        ]}
        href="/ai-search-optimization/"
        cta="See AI search visibility"
        stage={<SearchStage />}
      />

      <div className="divider" />

      <Product
        n="04"
        eyebrow="Custom AI Systems &middot; The Motion"
        state="The job that took a day a week now takes nobody's day at all."
        image="theWayIn"
        filmKey="theWayIn"
        head="The job that eats your week,"
        em="running by itself."
        lead="Every business has one motion that consumes the day - intake, triage, quoting, follow-up, scheduling. I build custom AI on your own knowledge to run it, so it answers from your truth instead of a plausible guess. Scoping is free, because scoping is what makes the quote honest."
        stats={[
          ['Your data', 'Never a generic model'],
          ['Hands off', 'When stakes are real'],
          ['Built once', 'Runs every day'],
        ]}
        points={[
          'Trained on your documents, your policies and your process - it answers from your truth or it escalates.',
          'Wired into the tools you already run, so nothing needs re-typing into a second system.',
          'Guardrails first: a do-not-say list, and a human handoff wherever the stakes justify one, written into the agreement rather than promised on a call.',
        ]}
        href="/services/ai-systems/"
        cta="See custom AI systems"
        stage={<SystemsStage />}
        flip
      />

      <div className="divider" />

      {/* ------------------------------------------------------- THE RECORD
          The one place monospace survives, because the thing genuinely is a
          log. Everywhere else on this site gave it up. */}
      <section className="sec">
        <div className="wrap">
          <div className="chap">
            <div className="chap-copy reveal">
              <span className="eyebrow"><span className="n">05</span> The record</span>
              <p className="chap-state" style={{ marginTop: 22 }}>
                You can put a number in front of anyone who asks.
              </p>
              <p className="lead">
                Every contact, timestamped - what arrived, what was answered, what was missed, and
                how fast. One page on the first of the month. Responsiveness stops being a thing you
                claim and becomes a thing you can evidence, which matters the day a board, an
                insurer or a bigger client asks you to prove it.
              </p>
              <div className="pfoot reveal">
                <Link to="/the-record/" className="btn btn-ghost">See The Record <Arrow /></Link>
              </div>
            </div>
            <div className="chap-media reveal">
              <RecordTicker variant="mixed" />
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="gband">
        <div className="wrap">
          <div className="flag-grid">
            <div>
              <div className="sec-head left reveal" style={{ marginBottom: 28 }}>
                <span className="eyebrow"><span className="n">06</span> The flagship</span>
                <h2 style={{ marginTop: 22 }}>Welded together, it is one loop. <span className="em">Demand in, booked work out.</span></h2>
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

      {/* --------------------------------------------------------- THE WORK */}
      <section className="sec" id="work">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow"><span className="n">07</span> Selected work</span>
            <h2 style={{ marginTop: 22 }}>
              Sites that do a job, <span className="em">not sites that sit there.</span>
            </h2>
            <p className="lead">
              Most businesses are running one process by hand every day - reading a part number down
              the phone, taking a booking on paper, chasing a quote. I find that process and build
              the thing that eats it, then wrap it in a site worth arriving at.
            </p>
          </div>
          <div className="workgrid">
            {FEATURED.map((w) => (
              <WorkCard key={w.slug} item={w} />
            ))}
            <div className="work reveal" style={{ display: 'grid', placeItems: 'center', padding: 34 }}>
              <div style={{ textAlign: 'center' }}>
                <p className="chap-state" style={{ margin: '0 auto 20px', fontSize: 25 }}>
                  Yours could be the next one.
                </p>
                <Link to="/services/website-build/" className="btn btn-ghost">
                  How a build runs <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec" id="services">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow"><span className="n">08</span> Every line</span>
            <h2 style={{ marginTop: 22 }}>Every piece, <span className="em">on its own if that is what the job needs.</span></h2>
          </div>
          <ServiceLadder />
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow"><span className="n">09</span> Who I help</span>
            <h2 style={{ marginTop: 22 }}>One system, <span className="em">and any business where one client is worth having.</span></h2>
            <p className="lead">
              A category set wrong, a service area never drawn and a phone that rings out at seven in
              the evening are the same defect in a roofing company, a dental practice and an auto
              recycler. The arithmetic that closes them is the same arithmetic with a different job
              value in it. Property and condominium management, roofing, and arborists have the
              scripts and the seasons already worked out because I built for them first.
            </p>
          </div>
          <div className="inds reveal">
            <span className="ind lead-ind">Property &amp; condominium management</span>
            <span className="ind lead-ind">Roofing</span>
            <span className="ind lead-ind">Arborists &amp; tree care</span>
            {['Auto parts & recycling','HVAC','Plumbing','Restoration','Accountants','Dentists & orthodontists','Medical clinics','Veterinary','Insurance brokers','Any appointment-led business'].map((i) => (
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
              <span className="eyebrow"><span className="n">10</span> Why this is built right</span>
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
            <span className="eyebrow"><span className="n">11</span> Coverage</span>
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
            <span className="eyebrow"><span className="n">12</span> Questions</span>
            <h2 style={{ marginTop: 22 }}>Answered plainly.</h2>
          </div>
          <FAQ items={GENERAL_FAQ} />
        </div>
      </section>

      {/* ------------------------------------------------------- THE NINE
          The refrain. It is what he actually says on the phone, so it is what
          the site asks for - in the same words, everywhere. */}
      <section className="bleed">
        <Plate image="checked" ratio="21 / 9" scrim="hard">
          <div className="wrap">
            <div className="nine">
              <span className="num">Nine</span>
              <span className="word">minutes. No pitch.</span>
            </div>
          </div>
        </Plate>
      </section>

      <section className="ctastrip" id="contact">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="lead" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              I will ask what a job is worth to you, what happens to an enquiry that lands at seven
              in the evening, and where you show up when somebody nearby goes looking. Then I tell
              you straight what I would build and what it would take. First question is which market
              you are in, because I take one firm per trade in each - if yours is taken, you hear it
              then rather than after you have spent an hour.
            </p>
          </div>
          <div className="ctas reveal">
            <Link to="/book/" className="btn btn-primary">Take the nine minutes <Arrow /></Link>
            <a href={`tel:${PHONE_E164}`} className="btn btn-ghost">Call {PHONE_DISP}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
