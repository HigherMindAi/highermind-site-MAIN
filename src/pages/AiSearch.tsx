import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import { CTA_LABEL, CTA_HREF } from '../lib/ladder';
import { serviceSchema, faqSchema, breadcrumbs } from '../lib/schema';

const URL = '/ai-search-optimization/';

/*
 * The ONE page on the site allowed to use "AI search" as a search term, and
 * the only one that names ChatGPT, Claude, Gemini and Perplexity. Everywhere
 * else this is The Mention: getting named when people ask an assistant
 * instead of searching. It is offered after you have chosen a step, never as
 * a step, and nothing here promises a mention - nobody can.
 */

const DESC =
  'AI search optimization for local firms: getting named when people ask ChatGPT, Claude, Gemini or Perplexity instead of searching. Offered after you choose.';

const AIS_FAQ: [string, string][] = [
  [
    'What is AI Search Optimization?',
    'It is the work of making a business clear and credible to the assistants people now ask instead of searching, so there is nothing stopping them from naming it when someone asks for a recommendation. Traditional SEO targets a position on a results page. AI search optimization targets being one of the names inside the answer itself, on ChatGPT, Claude, Gemini and Perplexity, and in the summary Google now puts above its own results.',
  ],
  [
    'What is Generative Engine Optimization (GEO)?',
    'GEO is the part of AI search optimization aimed at the language models behind those assistants - making sure a business is understood as a real, specific, trustworthy entity so the model has no reason to leave it out. SEO aims at a ranking. GEO aims at a mention in a generated answer.',
  ],
  [
    'Why would an assistant not name my business already?',
    'Usually because there is not enough evidence to name you safely. Thin or vague service pages, business details that disagree across directories, an underfed Google Business Profile, few recent reviews, and no structured data all add up to a business an assistant cannot describe with confidence - so it names a competitor it can.',
  ],
  [
    'Does this replace SEO?',
    'No, and anyone selling it as a replacement is overselling. The foundations overlap: a fast, deep, consistent, well-reviewed business does better in both. That is exactly why this is offered after you have chosen a step. The profile, the reviews and the pages that The Pin and The Foundation fix are the same evidence an assistant reads.',
  ],
  [
    'Can you guarantee my business gets mentioned?',
    'No, and nobody honestly can. The assistants decide what they say, and they change how they decide. What I can do is remove every reason to leave you out - an uncertain entity, disagreeing details, pages with nothing quotable on them, crawlers that cannot get in - and keep a log of what the assistants actually say about you so nobody is guessing.',
  ],
  [
    'How do I know it is working?',
    'I ask the assistants the same questions your buyers ask, before anything is touched and again on a rhythm afterwards, and log what comes back and whether you are in it. That re-ask log is yours. It sits next to the calls and forms The Foundation already counts, so you see it in the same place rather than in a separate story.',
  ],
];

const LAYERS: [string, string, string][] = [
  [
    '01',
    'The Entity',
    'Before an assistant can name you it has to be certain who you are. One consistent name, number and service area everywhere you appear, and machine-readable markup that states what you do and who you do it for - so nothing has to be inferred.',
  ],
  [
    '02',
    'The Evidence',
    'Models weigh reputation heavily because it is the cheapest proof available. Review volume and recency, a properly fed Google Business Profile, consistent listings, and mentions elsewhere that agree with each other. Disagreement reads as risk, and risk gets you left out of the answer.',
  ],
  [
    '03',
    'The Answers',
    'Pages written the way people actually ask, with the answer in the first two lines instead of buried under an introduction. Question-shaped pages, real specifics, and FAQ markup that matches the visible text - so an assistant can lift a clean, quotable answer and attribute it to you.',
  ],
  [
    '04',
    'The Access',
    'None of it counts if the crawlers cannot get in. Explicit permission for the retrieval crawlers the assistants use, a plain-language site summary at llms.txt, real HTML rather than content that only appears after JavaScript runs, and pages fast enough to be fetched cleanly.',
  ],
  [
    '05',
    'The Re-ask',
    'The same questions asked again on a rhythm, with what changed written down. Nobody can promise the mention itself, and anyone who does is guessing. What the four layers above do is remove every reason to leave you out, and the re-ask log is how you see whether it is landing.',
  ],
];

const SEG: ReadonlyArray<readonly [string, boolean]> = [
  ['Based on reviews and what is published about local roofers, ', false],
  ['your firm', true],
  [' is a strong fit - it names the exact work you describe, lists your town in its service area, and its recent reviews mention the same kind of job.', false],
];
const FULL = SEG.reduce((a, [t]) => a + t.length, 0);

/** The answer, typing itself out. The full text ships in the prerendered HTML
 *  (crawlers read it); the typing is a client layer, off under reduced motion. */
function TypeDemo() {
  const [n, setN] = useState(FULL);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let alive = true;
    let i = 0;
    const type = () => {
      if (!alive) return;
      i += 1;
      setN(i);
      if (i < FULL) {
        setTimeout(type, 22);
      } else {
        setTimeout(() => {
          if (!alive) return;
          i = 0;
          setN(0);
          setTimeout(type, 400);
        }, 5200);
      }
    };
    const t = setTimeout(() => { setN(0); setTimeout(type, 500); }, 700);
    return () => { alive = false; clearTimeout(t); };
  }, []);

  let used = 0;
  return (
    <div className="aid reveal">
      <div className="aid-lab">assistant</div>
      <div className="aid-q">who near me can fix a leaking roof properly?</div>
      <div className="aid-a">
        {SEG.map(([t, hi], k) => {
          const start = used;
          used += t.length;
          const take = Math.max(0, Math.min(t.length, n - start));
          const txt = t.slice(0, take);
          return hi ? <b key={k}>{txt}</b> : <span key={k}>{txt}</span>;
        })}
        {n < FULL && <span className="aid-crt" />}
      </div>
      <div className="aid-note">Illustrative &middot; This is the shelf space. <b>Nobody can promise you a place on it.</b></div>
    </div>
  );
}

export default function AiSearch() {
  return (
    <main>
      <Seo
        title="AI Search Optimization (GEO) | HigherMindAI"
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
          <Link to="/how-it-works/#after" className="eyebrow reveal">
            After you have chosen &middot; The Mention
          </Link>
          <h1 className="reveal">
            AI Search Optimization:{' '}
            <span className="em">getting named when people ask an assistant instead of searching.</span>
          </h1>
          <p className="sub reveal">
            People have started asking questions instead of typing keywords. "Who is a good roofer
            near me." "Which shop does collision properly." They get one answer, assembled by a model,
            naming two or three businesses. The work is making sure nothing stops you being one of
            the names, and it is the same work whether the answer comes from ChatGPT, Claude, Gemini
            or Perplexity. It is offered after you have chosen a step, because an assistant reads the
            same profile, reviews and pages that The Pin and The Foundation fix first.
          </p>
          <div className="ctas reveal">
            <Link to={CTA_HREF} className="btn btn-primary">
              {CTA_LABEL} <Arrow />
            </Link>
          </div>
          <p className="trustline reveal">
            In most local markets, almost nobody has started &middot; Nobody can promise a mention,
            and I do not.
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
              <span className="em">This is about the answer itself.</span>
            </h2>
          </div>
          <p className="lead reveal">
            AI search optimization is the work of making a business clear and credible to the
            assistants people now ask, so nothing stands in the way of them naming it when someone
            asks for a recommendation. Generative Engine Optimization - GEO - is the part of that
            aimed squarely at the language models. Traditional search hands back ten links and lets
            the person choose. An assistant hands back one answer with two or three names in it. There
            is no page two to be on.
          </p>
          <TypeDemo />
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
                  <td>A name inside a generated answer</td>
                </tr>
                <tr>
                  <td>The lever</td>
                  <td>Relevance and links</td>
                  <td>Entity certainty and trust signals</td>
                </tr>
                <tr>
                  <td>The page job</td>
                  <td>Match the phrase being searched</td>
                  <td>Be the cleanest quotable answer available</td>
                </tr>
                <tr>
                  <td>Where it plays</td>
                  <td>Google and Bing</td>
                  <td>ChatGPT, Claude, Gemini, Perplexity</td>
                </tr>
                <tr>
                  <td>How you see it</td>
                  <td>Position and calls</td>
                  <td>Whether you get named, logged on each re-ask</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="note reveal">
            Both matter, and anyone telling you one replaces the other is selling. They share
            foundations - a fast, deep, consistent, well-reviewed business does better in both. That
            is why the steps come first and this comes after.
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The problem</span>
            <h2>
              Most businesses never get named,{' '}
              <span className="em">and it is almost never about the work.</span>
            </h2>
            <p className="lead">
              A model will not name a business it cannot describe with confidence. Six things
              usually cause that, and every one of them is fixable.
            </p>
          </div>
          <div className="vgrid reveal">
            {[
              ['Nothing specific to read', 'A thin site with one vague services page gives a model nothing concrete to work from. It cannot say what you do, so it says someone else’s name.'],
              ['Details that disagree', 'A phone number or business name that differs across directories reads as uncertainty. Uncertainty is the cheapest reason to leave you out.'],
              ['A neglected Google profile', 'The profile is one of the richest sources the assistants read. Left half-built, it removes the best evidence you have.'],
              ['Thin or stale reviews', 'Reputation is the fastest stand-in for trust a model has. Volume, recency and consistency across platforms all count.'],
              ['No structured data', 'Without schema, a machine has to guess what you are, where you work and who you serve. Guessing loses to a competitor who spelled it out.'],
              ['The doors are shut', 'Most sites have never told the assistants’ crawlers they are welcome, and plenty of them accidentally block the exact crawlers that would have read them.'],
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
                <div className="sn">Layer {n}</div>
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
            <span className="eyebrow">Check it yourself</span>
            <h2>
              I did all of it to my own site first.{' '}
              <span className="em">You can go and look.</span>
            </h2>
            <p className="lead">
              I am not going to sell you something I have not done. Every layer above is already
              running on the page you are reading, and you can check it yourself in about a minute.
            </p>
          </div>
          <ul className="plist reveal" style={{ maxWidth: 760 }}>
            <li>
              <b>Access:</b> open{' '}
              <a href="/robots.txt" target="_blank" rel="noreferrer">
                highermindai.com/robots.txt
              </a>{' '}
              - the assistants&rsquo; retrieval crawlers are named and allowed, deliberately.
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
            <span className="eyebrow">What sits inside The Mention</span>
            <h2>Offered after you have chosen a step.</h2>
            <p className="lead">
              The Mention is never the step itself. It sits on top of whichever step you choose, and
              the order is on <Link to="/how-it-works/#after">how it works</Link>.
            </p>
          </div>
          <div className="vgrid reveal">
            {[
              ['The first ask', 'I ask the assistants the questions your buyers ask and write down what comes back - who gets named, who does not, and what the models believe about you today. Recorded before anything is touched.'],
              ['Entity and schema', 'A structured entity graph, service and location markup, and answer markup that matches the visible page rather than contradicting it.'],
              ['Crawler access', 'Explicit permission for the assistants’ retrieval crawlers, an llms.txt summary, and a technical pass so pages can actually be fetched and read.'],
              ['Answer-first pages', 'Pages and question blocks built around the exact questions people ask an assistant in your category, with the answer in the first two lines.'],
              ['Evidence that agrees', 'Google Business Profile depth, steady reviews, and the same details everywhere, so the trust signals agree with each other. Most of this is already moving inside The Pin.'],
              ['The re-ask log', 'The same questions asked again on a rhythm, with what changed written down, so you see whether you are being named rather than taking my word for it.'],
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
        head={<>Hear what the assistants <span className="em">say about you now.</span></>}
        sub="In the nine minutes I ask the assistants the questions your buyers ask, live, and read you the answer. You keep whatever it turns up."
      />
    </main>
  );
}
