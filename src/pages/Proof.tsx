import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import { breadcrumbs, faqSchema, personSchema } from '../lib/schema';

/**
 * The proof page.
 *
 * The client is never named. The numbers are real and they are cited raw. The
 * honest turn is the point of the page: this is a genuine result with a genuine
 * hole in it, and saying so out loud is what makes every other number on the
 * page believable.
 */

const PROOF_FAQ: [string, string][] = [
  [
    'Why will you not name the client?',
    'Because he did not ask to be a case study, and his competitors read the internet too. My own numbers publish raw. A client\u2019s numbers stay anonymous unless he tells me otherwise. That rule protects him, and it is the same rule that will protect you.',
  ],
  [
    'Can I verify any of this?',
    'The profile is live and public and I will walk you through it on a call. The screenshots come straight out of Google Business Profile insights. I do not publish a number I cannot show you the source of.',
  ],
  [
    'Only one case?',
    'I have ranked eight businesses and most of them reached the top three. What I learned across all of them is the reason this business changed shape. I am not going to pad this page with logos to hide that. One case, told honestly, and the reason a ranking on its own was not enough.',
  ],
];

export default function Proof() {
  return (
    <main>
      <Seo
        title="Proof: A Profile That Did Not Exist, Ranked #1 | HigherMindAI"
        desc="A security systems installer in Atlantic Canada. From a Google profile that did not exist to #1 for both money keywords in five months. Real numbers, and the honest hole in them."
        path="/proof/"
        schema={[
          breadcrumbs([
            ['Home', '/'],
            ['Proof', '/proof/'],
          ]),
          personSchema(),
          faqSchema(PROOF_FAQ),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <div className="reveal">
            <div className="crumb">
              <Link to="/">Home</Link> &nbsp;/&nbsp; Proof
            </div>
            <span className="eyebrow">Proof, not promises</span>
            <h1>
              A profile that did not exist.{' '}
              <span className="em">Number one in five months.</span>
            </h1>
            <p className="sub">
              A security systems installer in Atlantic Canada. No history, no reviews, no rankings, no
              profile at all on day one. Built from zero on the same clock and the same levers every
              client runs on. These are his real numbers, straight off Google, and I am not going to
              round any of them up.
            </p>
            <div className="ctas">
              <Link to="/#contact" className="btn btn-primary">
                Book a Watershed Audit <Arrow />
              </Link>
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
          <div className="stats reveal">
            <div className="s">
              <div className="n">18 &rarr; 96</div>
              <div className="l">monthly profile interactions, Feb to Jun</div>
            </div>
            <div className="s">
              <div className="n">44</div>
              <div className="l">calls straight off the profile</div>
            </div>
            <div className="s">
              <div className="n">184</div>
              <div className="l">clicks through to the site</div>
            </div>
            <div className="s">
              <div className="n">
                <em>#1</em>
              </div>
              <div className="l">both money keywords, and holding</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">01 &middot; What was actually done</span>
            <h2>
              No tricks. <span className="em">The levers Google actually rewards, worked in order.</span>
            </h2>
            <p className="lead">
              Nothing on this page came from a shortcut. No name-stuffing, no fake geotags, no bought
              citations, no mass-published AI pages. Those things risk a profile, and a profile is the
              asset.
            </p>
          </div>
          <div className="steps">
            <div className="step reveal">
              <div className="sn">The heavy levers</div>
              <h3>The profile, rebuilt from nothing</h3>
              <p>
                Primary category set to the most specific accurate one - the single biggest factor, and
                the fastest to act. Services built out with real descriptions. Completeness to green.
                Real photographs of real work, on a weekly cadence. Exact hours.
              </p>
            </div>
            <div className="step reveal">
              <div className="sn">The hour most skip</div>
              <h3>The site tuned underneath it</h3>
              <p>
                Title front-loaded with the service and the area. NAP exact-matched to the profile, site
                wide. LocalBusiness schema, validated. A dedicated page per service, which is also the
                heaviest lever for getting named when somebody asks an AI instead of Google.
              </p>
            </div>
            <div className="step reveal">
              <div className="sn">The measurement</div>
              <h3>A locked heatmap, never moved</h3>
              <p>
                Same grid, same radius, same term, same centre point, run at day 0, 30, 40 and 60. The
                config does not change mid-cycle, because a measurement you can move is not a
                measurement. The trend is the story, not a single pin.
              </p>
            </div>
            <div className="step reveal">
              <div className="sn">The compounding</div>
              <h3>Reviews and the answer layer</h3>
              <p>
                Policy-clean review velocity - every satisfied customer asked the same way, never gated,
                never incentivised. Then the citations that feed the AI surfaces, because a growing share
                of buyers now ask a model instead of a search bar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The honest turn. It is the whole reason this page is credible. */}
      <section className="gband">
        <div className="wrap narrow reveal">
          <span className="eyebrow center">The part nobody else puts on their proof page</span>
          <h2>
            I made his phone ring.{' '}
            <span className="em">I have no idea how many of those calls were answered.</span>
          </h2>
          <p>
            Forty-four calls arrived at a small business with a small team. Some were picked up. Some
            rang out at seven in the evening, or while somebody was up a ladder. Nobody knows which,
            because there was no system catching them and nothing was ever counted.{' '}
            <b>That is a real result with a real hole in it.</b>
          </p>
          <p>
            I ranked eight businesses. Most of them reached the top three. Every one of them was happy
            with the ranking, and a ranking on its own is still a phone ringing in an empty room. So I
            stopped selling the ring on its own.{' '}
            <b>Now I make it ring, and then I answer it.</b>
          </p>
          <div className="ctas">
            <Link to="/the-watershed" className="btn btn-primary">
              What I sell now <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">02 &middot; What you get instead</span>
            <h2>
              I would rather hand you evidence{' '}
              <span className="em">than a case study about somebody else.</span>
            </h2>
            <p className="lead">
              His numbers are his. Yours are the ones that matter, and I will go and get them before I
              ever quote you. The Watershed Audit is a rank read across your service area and a leak log
              where I become your customer and time how long you take to answer. Forty minutes of my
              time, free, and yours to keep whether or not you ever hire me.
            </p>
            <div className="ctas" style={{ marginTop: 30 }}>
              <Link to="/#audit" className="btn btn-ghost">
                How the Audit works <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip
        head={
          <>
            Find out what <span className="em">your</span> profile is really doing.
          </>
        }
        sub="Tell me your firm and your city. I will run the rank read and the leak log, and send you both. No pitch attached."
      />
    </main>
  );
}
