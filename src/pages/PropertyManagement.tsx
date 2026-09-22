import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import Plate from '../components/Plate';
import { Arrow, Go } from '../components/Icons';
import {
  PROPERTY_FAQ, RANK_LOCK, LAUNCH_LOCK, NO_DOORS_PROMISE,
} from '../lib/property';
import {
  CTA_LABEL, CTA_HREF, STEPS, READ, TAP, TAP_LINE, FLIP, PIN, FOUNDATION, PROOF_PLAIN, LADDER_FAQ,
} from '../lib/ladder';
import { TrustStage, NightShiftStage } from '../components/Stages';
import { CITIES, cityPath, LOCATIONS_HUB } from '../lib/cities';
import { orgSchema, serviceSchema, faqSchema, breadcrumbs } from '../lib/schema';

// ---------------------------------------------------------------------------
// /property-management/ - a live vertical, secondary to the three the outreach
// dials. v15: the four old "engines" are now shown as what sits INSIDE the
// ladder steps - visibility and reviews inside The Pin, the desk and the record
// inside The Foundation. The empty story (they cannot find you) and the leaky
// story (nobody answers) each get their own section and never share one.
// ---------------------------------------------------------------------------

const URL = '/property-management/';

const DESC =
  'Local SEO, reviews and an intake desk for property management firms. Found by owners, answered when you cannot, every enquiry counted. Own the channel.';

// Schema description carries NO rate. See property.ts.
const SCHEMA_DESC =
  'Local search, reviews and intake for property and community association management firms across Canada and the United States. The Google profile rebuilt and held, an intake desk that answers and qualifies every owner enquiry, and every call and form counted.';

const FAQS: [string, string][] = [...PROPERTY_FAQ, LADDER_FAQ[0]];

export default function PropertyManagement() {
  return (
    <main>
      <Seo
        title="Marketing for Property Management Companies | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[
          orgSchema(),
          serviceSchema(
            'Local Search, Reviews and Intake for Property Management Companies',
            SCHEMA_DESC,
            URL
          ),
          breadcrumbs([['Home', '/'], ['Property Management', URL]]),
          faqSchema(FAQS),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <span className="eyebrow reveal">Property &amp; condominium management &middot; Canada</span>
          <h1 className="reveal">
            You are renting leads. <span className="em">I build the position you keep.</span>
          </h1>
          <p className="sub reveal">
            For property and condominium management firms. Most firms your size buy owner leads from
            a pay-per-lead service. They are frequently shared with your competitors, they cost the
            same every month forever, and the day you stop paying they stop completely. I get your
            firm found by owners searching for a manager, answered when you cannot pick up, and
            every enquiry counted. <b>Same budget line, different ending.</b>
          </p>
          <div className="ctas reveal">
            <Link to={CTA_HREF} className="btn btn-primary">
              {CTA_LABEL} <Arrow />
            </Link>
          </div>
          <p className="trustline reveal">
            Found by owners &middot; Answered when you cannot &middot; Built from inside a property
            operation
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------------- the premise */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The premise</span>
            <h2>
              A door is worth more to you{' '}
              <span className="em">than a job is worth to anyone else.</span>
            </h2>
            <p className="lead">
              Almost every business I could work with sells a job. You sell a relationship that
              renews every month for years. That single difference is why this is built the way it
              is, and why buying one-off campaigns has never worked properly for firms like yours.
              Full management is a share of collected rent, and placement is charged again every
              time a unit turns - so one owner kept for years is worth far more than the first month
              suggests.
            </p>
          </div>

          <div className="prod-cols">
            <div className="termpanel reveal">
              <div className="tp-label">The arithmetic, done on the call</div>
              <ul className="tp-list">
                <li>
                  <b>What one door is worth to you</b>
                  <br />
                  <span style={{ opacity: 0.62 }}>
                    Your fee, your average rent, your placement fee. Yours, not a market average.
                  </span>
                </li>
                <li>
                  <b>How long you keep one</b>
                  <br />
                  <span style={{ opacity: 0.62 }}>
                    The number that decides everything, and the one nobody in this industry
                    calculates before buying anything.
                  </span>
                </li>
                <li>
                  <b>What the work has to return to be worth it</b>
                  <br />
                  <span style={{ opacity: 0.62 }}>
                    Worked out live, on your figures, so you can challenge any number as it goes in.
                  </span>
                </li>
              </ul>
              <p className="tp-note">
                Each step has a fixed price, said plainly on the nine minutes once I have seen what
                you have. A price before a diagnosis invites a comparison against a quote for
                something else, and anchors the conversation to a figure chosen before anything was
                known about your firm.
              </p>
            </div>
            <div className="vcard reveal">
              <div className="vlab">The honest frame</div>
              <div className="vbig">
                You are not buying a campaign. You are buying <b>doors that pay you every month for
                years</b>, and the arithmetic only has to work once.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* -------------------------------------------------------- the ladder */}
      <section className="sec" id="engines">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Three steps, in order</span>
            <h2>
              Found, then answered, <span className="em">then the site, then the ads.</span>
            </h2>
            <p className="lead">
              The way in is <Link to={READ.href}>{READ.name}</Link>: everything your firm has online,
              gone through properly in a week, with what is wrong ranked by what it costs you. Then
              three steps, always in this order. Visibility and reviews sit inside The Pin. The
              intake desk and the record of every call and form sit inside The Foundation. The site
              is The Storefront.
            </p>
          </div>
          <div className="ladder">
            {STEPS.map((s, i) => (
              <Link key={s.key} to={s.href} className="svc reveal">
                <div className="si">{String(i + 1).padStart(2, '0')}</div>
                <div className="sbody">
                  <span className="sn">{s.position}</span>
                  <h3>{s.name}</h3>
                  <p>{s.line}</p>
                </div>
                <Go />
              </Link>
            ))}
          </div>
          <p className="lead reveal">
            <Link to={TAP.href}>{TAP.name}</Link> comes last, always. {TAP_LINE}
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* --------------------------------------------- empty: nobody finds you */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">
              <span className="n">01</span> Well run, and owners cannot find you &middot; inside {PIN.name}
            </span>
            <h2>
              {FLIP.empty.hook.split('. ')[0]}.{' '}
              <span className="em">Almost nobody does.</span>
            </h2>
            <p className="lead">
              An owner with a rental to hand over searches, reads the first few results, and calls
              two of them. If you are not in that pack you were never in the running, and you will
              never know the enquiry existed. Your reviews make it worse: they come from tenants
              during their worst week, not from the owners who are happy. An average built from
              complaints costs you owners who never contacted you at all.
            </p>
          </div>
          <div className="prod-cols">
            <div>
              <ul className="plist reveal">
                <li>
                  Your Google profile claimed and rebuilt against the firms above you, every service
                  named the way owners actually search for it, and your real service area mapped
                  properly.
                </li>
                <li>
                  Every review answered, and new ones asked for properly from the owners and quiet
                  residents who never think to leave one. Carried inside The Pin, never billed
                  beside it.
                </li>
                <li>{RANK_LOCK}</li>
              </ul>
              <p className="lead reveal">
                <Link to="/property-management-seo/">How visibility is built for a management firm</Link>.
              </p>
            </div>
            <div className="stg-wrap reveal">
              <TrustStage />
            </div>
          </div>
          <div className="vcard reveal" style={{ marginTop: 32 }}>
            <div className="vlab">Reviews, drawn</div>
            <div className="vbig">
              Eleven reviews means one bad month defines you.{' '}
              <b>A hundred and forty means it does not.</b> The work does not change who wrote the
              first eleven - it changes who writes the next hundred.
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------ leaky: nobody answers */}
      <section className="sec">
        <div className="wrap">
          <div className="prod-cols">
            <div className="stg-wrap reveal">
              <NightShiftStage />
            </div>
            <div>
              <div className="sec-head left reveal">
                <span className="eyebrow leak">
                  <span className="n">02</span> Busy, and it rings out &middot; inside {FOUNDATION.name}
                </span>
                <h2>
                  {FLIP.leaky.hook.replace(/\.$/, '')}{' '}
                  <span className="em">- after six, and during every showing.</span>
                </h2>
                <p className="lead">
                  The enquiry lands after six, or during a showing, or while you are on the phone to
                  a contractor. It goes to voicemail. He does not leave one. He calls the next firm,
                  who does answer, and that door is gone permanently. Then a resident says he called
                  three times, a board wants to know who was told what and when, and without a record
                  you are defending your firm from memory.
                </p>
              </div>
              <ul className="plist reveal">
                <li>
                  A desk that answers on your site and on your phone line, from your own documents,
                  triaged on your criteria and routed to a licensed manager.
                </li>
                <li>
                  Every call and form counted, with the time it arrived and what happened to it - a
                  record you can forward to an owner or table at a board meeting.{' '}
                  <Link to="/the-record/">How that is evidenced</Link>.
                </li>
                <li>{LAUNCH_LOCK}</li>
              </ul>
              <p className="lead reveal">
                <Link to="/property-management-intake/">How the desk works for a management firm</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ---------------------------------------------------------- two tracks */}
      <section className="sec" id="tracks">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Two tracks</span>
            <h2>Two tracks, because you are two businesses.</h2>
            <p className="lead">
              Rental management and condominium management buy this for genuinely different
              reasons. Running the same theory at both is the most common mistake in this market.
            </p>
          </div>
          <div className="reveal">
            <table className="cmp">
              <thead>
                <tr>
                  <th style={{ width: '24%' }}></th>
                  <th>Rental &middot; investor-owner</th>
                  <th>Condominium &middot; board</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>How the lead arrives</td>
                  <td>Search. An owner looks for a manager.</td>
                  <td>Not search. Boards run an RFP through a selection committee.</td>
                </tr>
                <tr>
                  <td>What does the work</td>
                  <td>Visibility, inside The Pin</td>
                  <td>Reviews and the record</td>
                </tr>
                <tr>
                  <td>The decision</td>
                  <td>One person, usually the principal, often the same day.</td>
                  <td>A committee, on a season.</td>
                </tr>
                <tr>
                  <td>Regulation</td>
                  <td>Not a licensed function in most markets.</td>
                  <td>CMRAO-licensed in Ontario, equivalents elsewhere.</td>
                </tr>
                <tr>
                  <td>Weight inside the steps</td>
                  <td>The profile first, then the desk</td>
                  <td>Reviews and the record first, then the profile</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="vcard reveal" style={{ marginTop: 32 }}>
            <div className="vlab">The condominium reframe</div>
            <div className="vbig">
              On the condominium side, Google&rsquo;s job is not to win you the lead. It is to{' '}
              <b>stop you losing an RFP you were already shortlisted for.</b>
            </div>
          </div>

          <p className="lead reveal">
            Most firms are both. A mixed firm gets both tracks in one build, sequenced rental-first,
            because rental produces owner enquiries you can see first - and that is what buys the
            patience for the board side.{' '}
            <Link to="/condominium-management-marketing/">The condominium track</Link> is laid out
            on its own page.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------- what it is, in writing */}
      <section className="sec" id="terms">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The terms</span>
            <h2>What I put in writing before you pay for anything.</h2>
          </div>
          <div className="prod-cols">
            <div className="termpanel reveal">
              <div className="tp-label">What gets built</div>
              <ul className="tp-list">
                <li>
                  <b>The profile and the reviews</b> &nbsp;&middot;&nbsp; inside The Pin
                  <br />
                  <span style={{ opacity: 0.62 }}>
                    Rebuilt against the firms above you, then held. Every review answered and new
                    ones asked for properly.
                  </span>
                </li>
                <li>
                  <b>The desk</b> &nbsp;&middot;&nbsp; inside The Foundation
                  <br />
                  <span style={{ opacity: 0.62 }}>
                    On the web, on your phone line, or both. Start on one and add the other at what
                    it would have cost on day one.
                  </span>
                </li>
                <li>
                  <b>The record</b> &nbsp;&middot;&nbsp; inside The Foundation
                  <br />
                  <span style={{ opacity: 0.62 }}>
                    Every call and form counted, so you see exactly what the work did.
                  </span>
                </li>
              </ul>
              <p className="tp-note">
                Each step has a fixed price, said plainly on the nine minutes once I have seen what
                you have - how many corporations the desk carries and how far behind the profile is
                starting.
              </p>
            </div>
            <div className="termpanel reveal">
              <div className="tp-label">What is in writing</div>
              <ul className="tp-list">
                <li>{RANK_LOCK}</li>
                <li>
                  <b>The Launch Lock.</b> {LAUNCH_LOCK}
                </li>
                <li>
                  Month to month, fourteen days notice either way, and you own every account from
                  day one.
                </li>
              </ul>
              <p className="tp-note">{NO_DOORS_PROMISE}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* -------------------------------------------------------------- proof */}
      <section className="sec" id="proof">
        <div className="wrap">
          <div className="chap">
            <div className="chap-copy reveal">
              <div className="sec-head left">
                <span className="eyebrow">Why you should believe any of this</span>
                <h2>
                  Built from inside the work, <span className="em">not from a blog about it.</span>
                </h2>
              </div>
              <p className="lead">
                I was general manager inside a property management and maintenance operation. Owner
                enquiries arriving at the wrong moment, work orders, trades coordinated against units
                that had to turn before the month closed. That is why this page talks about doors and
                work orders instead of impressions and engagement. I have never held a CMRAO licence
                or managed a condominium corporation, and I say so plainly rather than let a title do
                work it cannot do. <Link to="/about/">The full story</Link>.
              </p>
              <p className="lead">
                One build sits on the work page, described as what was built. {PROOF_PLAIN}{' '}
                <Link to="/work/">What was built</Link>.
              </p>
            </div>
            <div className="chap-media reveal">
              <Plate image="office" filmKey="office" ratio="4 / 3" scrim="soft" />
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------------- the cities */}
      <section className="sec" id="cities">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Where I build</span>
            <h2>
              Every winnable town{' '}
              <span className="em">built as its own ranked unit.</span>
            </h2>
            <p className="lead">
              &ldquo;Property management company&rdquo; plus a city name is what an owner actually
              types, and it is the term the Rank Lock is measured on. Your home town is built inside
              The Pin. The next towns over are built as their own ranked units{' '}
              <Link to="/how-it-works/#after">after you have chosen</Link>, once the first one holds.
              Search your own city and see where you currently sit.
            </p>
          </div>
          <div className="loclist reveal">
            {CITIES.map((c) => (
              <Link key={c.slug} to={cityPath(c.slug)} className="loclink">
                {c.city}
              </Link>
            ))}
          </div>
          <p className="lead reveal">
            I also work firms across the Prairies, Alberta and Atlantic Canada. The work is
            delivered to your Google profile, so distance is no barrier to it.{' '}
            <Link to={LOCATIONS_HUB}>Every city I have written up</Link>.
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="sec" id="faq">
        <div className="wrap narrow">
          <div className="sec-head left reveal">
            <span className="eyebrow">Questions</span>
            <h2>Answered plainly.</h2>
          </div>
          <FAQ items={FAQS} />
        </div>
      </section>

      <CTAStrip
        head={<>Nine minutes, and you will know exactly where you sit.</>}
        sub="Not a proposal and not a deck. Your current position, the three firms above you, the review gap between you, and what happens to an enquiry that arrives at your office at seven in the evening. Then you decide which step fits."
      />
    </main>
  );
}
