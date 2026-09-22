import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import { CTA_LABEL, CTA_HREF, PROOF_PLAIN, STOREFRONT, FOUNDATION } from '../lib/ladder';
import { breadcrumbs, faqSchema, personSchema } from '../lib/schema';

/**
 * The proof page.
 *
 * v15: proof is shown as the WORK, never as a result. The Brampton auto parts
 * build is described in PROOF_PLAIN's words with no number, ranking or revenue
 * attached. The first profile build is kept as the story of why The
 * Foundation exists - and it is told without figures, because the honest part
 * of it was never the figures.
 *
 * No client is ever named.
 */

const PROOF_FAQ: [string, string][] = [
  [
    'Why will you not name the client?',
    'Because he did not ask to be a case study, and his competitors read the internet too. A client stays anonymous unless he tells me otherwise. That rule protects him, and it is the same rule that will protect you.',
  ],
  [
    'Can I see the build?',
    'Yes. I will open it on the nine minutes and walk you through what it does: the part matcher, the vehicle pages, and a request arriving at the counter already carrying what is needed to quote it. I show the work rather than describe it.',
  ],
  [
    'Why no results figures on this page?',
    'Because a figure on somebody else’s business tells you almost nothing about yours, and it is the easiest thing on the internet to dress up. The only outcome I put in writing is the Rank Lock, and it goes in the agreement rather than on a proof page.',
  ],
];

export default function Proof() {
  return (
    <main>
      <Seo
        title="Proof: The Work, Shown as Builds | HigherMindAI"
        desc="What gets built, shown plainly: an auto parts site with a part matcher and a page per vehicle, and the first profile build that shaped The Foundation."
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
            <Link to={STOREFRONT.href} className="eyebrow">
              The Storefront &middot; a build, not a result
            </Link>
            <h1>
              The work, shown plainly.{' '}
              <span className="em">Not a results page.</span>
            </h1>
            <p className="sub">{PROOF_PLAIN}</p>
            <div className="ctas">
              <Link to={CTA_HREF} className="btn btn-primary">
                {CTA_LABEL} <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">01 &middot; What was built</span>
            <h2>
              A phone number and an address,{' '}
              <span className="em">turned into a counter that quotes.</span>
            </h2>
            <p className="lead">
              An auto parts business in Brampton. The site was a phone number and an address. The
              work was a site built around how its customers actually buy a part and how the counter
              actually closes one.
            </p>
          </div>
          <div className="steps">
            <div className="step reveal">
              <div className="sn">The matcher</div>
              <h3>Year, make, model and trim</h3>
              <p>
                A part matcher that starts where the customer starts: the vehicle. Four fields, in the
                order a person at the counter would ask them.
              </p>
            </div>
            <div className="step reveal">
              <div className="sn">The pages</div>
              <h3>A page for each vehicle it stocks for</h3>
              <p>
                Every vehicle the business stocks for gets its own page, written the way somebody
                searching for that part would describe the car. Each one is a surface the business
                can be found on.
              </p>
            </div>
            <div className="step reveal">
              <div className="sn">The request</div>
              <h3>At the counter, by text, ready to quote</h3>
              <p>
                A request reaches the counter by text already carrying everything needed to quote it,
                so nobody has to phone the customer back to ask what car it was.
              </p>
            </div>
            <div className="step reveal">
              <div className="sn">Where it sits</div>
              <h3>Inside The Storefront</h3>
              <p>
                {STOREFRONT.promise} The order it sits in is on{' '}
                <Link to="/how-it-works/">how it works</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The honest turn. It is why The Foundation exists. */}
      <section className="gband">
        <div className="wrap narrow reveal">
          <span className="eyebrow center">02 &middot; The build that changed what I sell</span>
          <h2>
            I made his phone ring.{' '}
            <span className="em">Nobody knew how many of those calls were answered.</span>
          </h2>
          <p>
            A security installer in Atlantic Canada, with no Google profile at all on day one. I built
            it from nothing on the same levers I use now: the category, the services, real photos of
            real work, the site tuned underneath it, reviews asked for properly. The calls came.
          </p>
          <p>
            Some were picked up. Some rang out at seven in the evening, or while somebody was up a
            ladder. Nobody knows which, because there was nothing catching them and nothing was ever
            counted. <b>A phone ringing in an empty room is not the job done.</b>
          </p>
          <p>
            So I stopped selling the ring on its own. The Foundation is the answer to that build:{' '}
            <Link to={FOUNDATION.href}>{FOUNDATION.line.toLowerCase()}</Link>
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">03 &middot; How the profile work is done</span>
            <h2>
              No tricks. <span className="em">The levers Google actually rewards, worked in order.</span>
            </h2>
            <p className="lead">
              No name-stuffing, no fake geotags, no bought listings, no mass-produced pages. Those
              things risk a profile, and a profile is the asset.
            </p>
          </div>
          <div className="steps">
            <div className="step reveal">
              <div className="sn">The heavy levers</div>
              <h3>The profile, rebuilt properly</h3>
              <p>
                Primary category set to the most specific accurate one - the single biggest factor,
                and the fastest to act. Services built out with real descriptions. Every field
                complete. Real photographs of real work, on a weekly rhythm. Exact hours.
              </p>
            </div>
            <div className="step reveal">
              <div className="sn">The hour most skip</div>
              <h3>The site tuned underneath it</h3>
              <p>
                Title front-loaded with the service and the area. Name, address and phone matched
                exactly to the profile, site wide. LocalBusiness schema, validated. A dedicated page
                per service, which is also what an assistant reads when somebody asks one instead of
                searching.
              </p>
            </div>
            <div className="step reveal">
              <div className="sn">The measurement</div>
              <h3>A locked heatmap, never moved</h3>
              <p>
                Same grid, same radius, same term, same centre point, recorded before anything is
                touched and run again on the same settings. A measurement you can move is not a
                measurement. The trend is the story, not a single pin.
              </p>
            </div>
            <div className="step reveal">
              <div className="sn">What holds it</div>
              <h3>Reviews, asked for properly</h3>
              <p>
                Every satisfied customer asked the same way, never gated, never paid for. Then the
                listings the assistants read, kept consistent with everything else.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap narrow">
          <div className="sec-head left reveal">
            <span className="eyebrow">Questions</span>
            <h2>Asked about this page.</h2>
          </div>
          <FAQ items={PROOF_FAQ} />
        </div>
      </section>

      <CTAStrip
        head={
          <>
            Your own numbers <span className="em">are the ones that matter.</span>
          </>
        }
        sub="Nine minutes. I will already have looked at where you show and called you as a customer, and I will read you what I found. You keep it whether or not you ever hire me."
      />
    </main>
  );
}
