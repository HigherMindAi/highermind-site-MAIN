import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import { serviceSchema, faqSchema, breadcrumbs } from '../lib/schema';

const URL = '/ai-search-optimization';

const DESC =
  'AI Search Optimization and GEO: get named when someone asks ChatGPT, Claude, Gemini, Perplexity or Google AI for a firm like yours. Entity, evidence, answers and access - built so AI can find, trust and cite you.';

const AIS_FAQ: [string, string][] = [
  [
    'What is AI Search Optimization?',
    'It is the work of making a business legible and credible to AI systems, so they name it when someone asks for a recommendation. Traditional SEO targets a position on a results page. AI Search Optimization targets being cited inside the answer itself, on ChatGPT, Claude, Gemini, Perplexity, Copilot and Google AI Overviews.',
  ],
  [
    'What is Generative Engine Optimization (GEO)?',
    'GEO is the part of AI Search Optimization aimed specifically at large language models - making sure a business is understood as a real, specific, trustworthy entity so the model is willing to name it. SEO produces a ranking report. GEO produces a mention in a generated answer.',
  ],
  [
    'Why would AI not recommend my business already?',
    'Usually because there is not enough evidence to name you safely. Thin or vague service pages, business details that disagree across directories, an underfed Google Business Profile, few recent reviews, and no structured data all add up to a business an AI cannot describe with confidence - so it names a competitor it can.',
  ],
  [
    'Does this replace SEO?',
    'No, and anyone selling it as a replacement is overselling. The foundations overlap: a fast, deep, consistent, well-reviewed business does better in both. The priorities differ. Ranking work aims at position; AI search work aims at being the source an answer is built from. Most of my clients want both, which is why they are built together.',
  ],
  [
    'How long does AI search visibility take?',
    'Structural work - schema, crawler access, entity consistency, answer-first pages - can register within 30 to 60 days. The trust signals that make a model comfortable naming you accumulate over 60 to 90 days and keep compounding. It is early, and in most local markets almost nobody has started.',
  ],
  [
    'How do I know it is working?',
    'I test the same way a client would: I ask the major AI systems the questions your buyers ask, before and after, and log what comes back and whether you are in it. That log is yours, on the first of every month, alongside the ranking and intake numbers.',
  ],
];

const LAYERS: [string, string, string][] = [
  [
    '01',
    'The Entity',
    'Before an AI can recommend you it has to be certain who you are. A structured entity graph, one consistent name, number and service area everywhere it appears, and machine-readable markup that states what you do and who you do it for - so nothing has to be inferred.',
  ],
  [
    '02',
    'The Evidence',
    'Models weigh reputation heavily because it is the cheapest proof available. Review volume and recency, a fed Google Business Profile, consistent listings, and third-party mentions that agree with each other. Disagreement reads as risk, and risk gets you left out of the answer.',
  ],
  [
    '03',
    'The Answers',
    'Content written the way people actually ask, with the answer in the first two lines instead of buried under an introduction. Question-shaped pages, real specifics, and FAQ markup that matches the visible text - so a model can lift a clean, quotable answer and attribute it to you.',
  ],
  [
    '04',
    'The Access',
    'None of it counts if the crawlers cannot get in. Explicit permission for the AI retrieval agents, a plain-language site summary at llms.txt, real HTML rather than content that only appears after JavaScript runs, and pages fast enough to be fetched cleanly.',
  ],
  [
    '05',
    'The Recommendation',
    'The output of the four above. When the entity is certain, the evidence agrees, the answers are liftable and the doors are open, you stop being a business the model has heard of and become one it is willing to name out loud.',
  ],
];

export default function AiSearch() {
  return (
    <main>
      <Seo
        title="AI Search Optimization & GEO - Get Named by AI | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[
          serviceSchema('AI Search Optimization and Generative Engine Optimization', DESC, URL),
          breadcrumbs([['Home', '/'], ['AI Search Optimization', URL]]),
          faqSchema(AIS_FAQ),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <span className="eyebrow reveal">AI Search Optimization &middot; GEO</span>
          <h1 className="reveal">
            When someone asks an AI who to call,{' '}
            <span className="em">you are in the answer or you are nowhere.</span>
          </h1>
          <p className="sub reveal">
            People have stopped typing keywords and started asking questions. "Who is the best injury
            lawyer near me." "Which firm actually answers the phone." They get one answer, assembled
            by a model, naming two or three businesses. AI Search Optimization is the work of making
            sure you are one of the names - and it is the same work whether the answer comes from
            ChatGPT, Claude, Gemini, Perplexity, Copilot or Google's AI Overviews.
          </p>
          <div className="ctas reveal">
            <Link to="/book/" className="btn btn-primary">
              Book a call <Arrow />
            </Link>
            <a href={`tel:${PHONE_E164}`} className="btn btn-ghost">
              Call {PHONE_DISP}
            </a>
          </div>
          <p className="trustline reveal">
            The window is open right now &middot; In most local markets, almost nobody has started.
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The short answer</span>
            <h2>
              Ranking puts you on a page.{' '}
              <span className="em">This puts you inside the answer.</span>
            </h2>
          </div>
          <p className="lead reveal">
            AI Search Optimization is the work of making a business legible and credible to AI
            systems, so they are willing to name it when someone asks for a recommendation.
            Generative Engine Optimization - GEO - is the part of that aimed squarely at the language
            models. Traditional search hands back ten links and lets the person choose. An AI hands
            back one answer with two or three names in it. There is no page two to be on.
          </p>
          <div style={{ marginTop: 30 }} className="reveal">
            <table className="cmp">
              <thead>
                <tr>
                  <th>Signal</th>
                  <th>Traditional ranking work</th>
                  <th>AI search work</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>The target</td>
                  <td>A position on a results page</td>
                  <td>A citation inside a generated answer</td>
                </tr>
                <tr>
                  <td>The lever</td>
                  <td>Keywords and links</td>
                  <td>Entity certainty and trust signals</td>
                </tr>
                <tr>
                  <td>The content job</td>
                  <td>Match the phrase being searched</td>
                  <td>Be the cleanest quotable answer available</td>
                </tr>
                <tr>
                  <td>Where it plays</td>
                  <td>Google and Bing</td>
                  <td>ChatGPT, Claude, Gemini, Perplexity, Copilot, AI Overviews</td>
                </tr>
                <tr>
                  <td>How you measure it</td>
                  <td>Position and traffic</td>
                  <td>Whether you get named, and how often</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="note reveal">
            Both matter, and anyone telling you one replaces the other is selling. They share
            foundations - a fast, deep, consistent, well-reviewed business wins in both - but they
            reward different priorities, so I build them together.
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The problem</span>
            <h2>
              Most businesses are invisible to AI,{' '}
              <span className="em">and it is almost never about quality.</span>
            </h2>
            <p className="lead">
              A model will not name a business it cannot describe with confidence. Six things
              usually cause that, and every one of them is fixable.
            </p>
          </div>
          <div className="vgrid reveal">
            {[
              ['Nothing specific to read', 'A thin site with one vague services page gives a model nothing concrete to work from. It cannot say what you do, so it says someone else\u2019s name.'],
              ['Details that disagree', 'A phone number or business name that differs across directories reads as uncertainty. Uncertainty is the cheapest reason to leave you out.'],
              ['A neglected Google profile', 'The profile is one of the richest sources these systems read. Left half-built, it removes the best evidence you have.'],
              ['Thin or stale reviews', 'Reputation is the fastest proxy for trust a model has. Volume, recency and consistency across platforms all count.'],
              ['No structured data', 'Without schema, a machine has to guess what you are, where you work and who you serve. Guessing loses to a competitor who spelled it out.'],
              ['The doors are shut', 'Most sites have never told the AI crawlers they are welcome, and plenty of them accidentally block the exact agents that would have cited them.'],
            ].map(([h, b]) => (
              <div className="vtile" key={h}>
                <h3>{h}</h3>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The method</span>
            <h2>
              Five layers. <span className="em">Each one makes the next one believable.</span>
            </h2>
          </div>
          <div className="steps reveal" style={{ gridTemplateColumns: '1fr' }}>
            {LAYERS.map(([n, h, b]) => (
              <div className="step" key={n}>
                <div className="sn">
                  {n} &middot; {h}
                </div>
                <h3 style={{ marginTop: 10 }}>{h}</h3>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Proof, not a pitch</span>
            <h2>
              I did all of it to my own site first.{' '}
              <span className="em">You can go and check.</span>
            </h2>
            <p className="lead">
              I am not going to sell you something I have not done. Every layer above is already
              running on the page you are reading, and unlike most claims in this industry, you can
              verify it yourself in about a minute.
            </p>
          </div>
          <ul className="plist reveal" style={{ maxWidth: 760 }}>
            <li>
              <b>Access:</b> open{' '}
              <a href="/robots.txt" target="_blank" rel="noreferrer">
                highermindai.com/robots.txt
              </a>{' '}
              - every major AI retrieval agent is named and allowed, deliberately.
            </li>
            <li>
              <b>Orientation:</b> open{' '}
              <a href="/llms.txt" target="_blank" rel="noreferrer">
                highermindai.com/llms.txt
              </a>{' '}
              - a plain-language summary written for models rather than for people.
            </li>
            <li>
              <b>Entity:</b> view the source of any page here and you will find a structured entity
              graph, cross-linked by identifier, stating exactly what this business is.
            </li>
            <li>
              <b>Answers:</b> every question block on this site is answer-first and carries matching
              markup, so it can be lifted cleanly and attributed.
            </li>
          </ul>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">What is included</span>
            <h2>The whole stack, done for you.</h2>
          </div>
          <div className="vgrid reveal">
            {[
              ['AI visibility read', 'I ask the major systems the questions your buyers ask and log what comes back - who gets named, who does not, and what the models believe about you today.'],
              ['Entity and schema build', 'A structured entity graph, service and location markup, and answer markup that matches the visible page rather than contradicting it.'],
              ['Crawler access', 'Explicit permission for the AI retrieval agents, an llms.txt summary, and a technical pass so pages can actually be fetched and read.'],
              ['Answer-first content', 'Pages and question blocks built around the exact questions people ask AI in your category, with the answer in the first two lines.'],
              ['Evidence and consistency', 'Google Business Profile depth, review velocity, and listing consistency so the trust signals agree with each other everywhere.'],
              ['Monthly visibility log', 'The same questions re-asked every month, with what changed - reported next to your ranking and intake numbers, not in a separate story.'],
            ].map(([h, b]) => (
              <div className="vtile" key={h}>
                <h3>{h}</h3>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap narrow">
          <div className="sec-head left reveal">
            <span className="eyebrow">Questions</span>
            <h2>Answered plainly.</h2>
          </div>
          <FAQ items={AIS_FAQ} />
        </div>
      </section>

      <CTAStrip
        head={<>Find out what the models say about you.</>}
        sub="On a call I will ask the major AI systems the questions your buyers ask, live, and read you the answer. It takes about fifteen minutes and you keep whatever we find."
      />
    </main>
  );
}
