import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import { SCOPE_DOES, SCOPE_STOPS, CMRAO_LINE, LAUNCH_WINDOW } from '../lib/property';
import { TrustStage } from '../components/Stages';
import { serviceSchema, faqSchema, breadcrumbs } from '../lib/schema';

const URL = '/condominium-management-marketing';

const DESC =
  'Boards do not find you through search. They shortlist you and then look you up, and what they find decides who receives the package. Reputation and record, built properly.';

const CONDO_FAQ: [string, string][] = [
  [
    'Does Google ranking win condominium management contracts?',
    'No, and I will not pretend otherwise. Boards run an RFP through a selection committee, usually working from names put forward by a director, a lawyer or an engineer. What search does on this track is defensive: somebody looks all three names up that evening, and what they find decides who receives the package. Ranking matters here, it just is not the lead engine.',
  ],
  [
    'What does a board actually check before it sends a package?',
    'Public reviews and rating. How long the firm has managed their type of property. How many properties it currently manages. Licensing status. Named references. Manager tenure and client retention. Almost all of that is checked before anybody meets anybody, which is why reputation and record do the work on this track.',
  ],
  [
    'My rating is low because of tenant complaints. Can that be fixed?',
    'It can be moved, not erased, and the honest version takes time. The engine is volume, timing and response quality: a structured ask to the owners and outgoing satisfied residents who never think to leave a review, and a proper reply to every negative one written for the next reader rather than the complainant. I will not write reviews, incentivise them, gate them, or filter who gets asked. All of that is against platform rules and all of it is detectable.',
  ],
  [
    'Can an intake desk touch condominium work without breaching CMRAO rules?',
    'It can, because it never performs a licensed function. It answers from the corporation\u2019s own documents, triages on the corporation\u2019s own criteria, logs the contact, routes to a licensed manager, and stops. It does not interpret a declaration, decide common element versus unit, commit the corporation to a dollar, touch another owner\u2019s file, put dates on statutory processes, or accept service.',
  ],
  [
    'If you work with my firm, will you approach my boards?',
    'No. Once a management firm is my client, its boards are not my prospects. A board that approaches me goes back to the manager first, in writing. I say that early rather than when asked, because the firms worth having do ask.',
  ],
];

const CHECKS: [string, string][] = [
  [
    'What a shortlisting board checks',
    'Public reviews and rating. How long the firm has managed their type of property. How many properties it currently manages. Licensing status. Named references. Manager tenure and client retention.',
  ],
  [
    'Which engines answer that list',
    'Trust answers the rating. The Record answers retention and responsiveness with numbers instead of adjectives. The Inflow makes sure the search finds you rather than a stale directory listing from four years ago.',
  ],
  [
    'The season is real and it is short',
    'Board work runs on a cycle - budget months, meeting months, renewal months. During meeting season I hold a real date and come back on it rather than pushing. Renewal season is the best month of the year in both directions.',
  ],
  [
    'The rule that protects the relationship',
    'Once a management firm is my client, its boards are not my prospects. A board that approaches me goes back to the manager first, in writing. It is in the agreement, not just on this page.',
  ],
];

export default function CondoMarketing() {
  return (
    <main>
      <Seo
        title="Condominium Management Marketing & RFP Visibility | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[
          serviceSchema('Condominium Management Marketing and Reputation', DESC, URL),
          breadcrumbs([
            ['Home', '/'],
            ['Property Management', '/property-management'],
            ['Condominium Management Marketing', URL],
          ]),
          faqSchema(CONDO_FAQ),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <span className="eyebrow reveal">The condominium track</span>
          <h1 className="reveal">
            Three names go to the board.{' '}
            <span className="em">Somebody searches all three that evening.</span>
          </h1>
          <p className="sub reveal">
            When a board is handed three names by a director, a lawyer or an engineer, the first
            thing somebody does is look those three names up. What they find decides who receives
            the package. A firm that is invisible, or that shows a 3.2 average built from eleven
            tenant complaints, loses at that stage - before any proposal is read, and without ever
            learning it was in contention.
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
            Reputation and record first &middot; {LAUNCH_WINDOW} &middot; Your boards are never my
            prospects.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* --------------------------------------------------------- the reframe */}
      <section className="sec">
        <div className="wrap">
          <div className="vcard reveal">
            <div className="vlab">The reframe this whole track runs on</div>
            <div className="vbig">
              Google&rsquo;s job here is not to win you the lead. It is to{' '}
              <b>stop you losing an RFP you were already shortlisted for.</b>
            </div>
          </div>
          <p className="note reveal">
            If somebody has told you that ranking wins board work, they have not sold to a
            condominium firm. You already know how you get work: referrals, reputation, and an RFP
            run through a selection committee. What I am selling on this track is the thing that
            stops you being quietly removed from a list you never saw.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ---------------------------------------------------- surviving the list */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Surviving the shortlist</span>
            <h2>The due diligence happens before anybody meets anybody.</h2>
          </div>
          <div className="prod-cols" style={{ marginBottom: 36 }}>
            <div className="stg-wrap reveal">
              <TrustStage />
            </div>
            <div className="vcard reveal">
              <div className="vlab">What loses the package</div>
              <div className="vbig">
                A rating built from eleven tenant complaints is the first thing a shortlisting board
                finds. <b>It decides the outcome before a proposal is opened.</b>
              </div>
            </div>
          </div>
          <div className="vgrid four">
            {CHECKS.map(([h, b]) => (
              <div className="vtile reveal" key={h}>
                <h3>{h}</h3>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------------- order of build */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Order of build on this track</span>
            <h2>
              Trust, then Record, then visibility.{' '}
              <span className="em">In that order, and not the other one.</span>
            </h2>
          </div>
          <div className="steps">
            <div className="step reveal">
              <div className="sn">First</div>
              <h3>The Trust</h3>
              <p>
                The rating is the first thing checked and the cheapest thing to lose on. The people
                most motivated to review a management firm are not the people who pay it - a resident
                with a complaint writes four paragraphs, a satisfied owner writes nothing. Eleven
                reviews means one bad month defines you. A hundred and forty means it does not.
              </p>
            </div>
            <div className="step reveal">
              <div className="sn">Second</div>
              <h3>The Record</h3>
              <p>
                Retention and responsiveness are on every board&rsquo;s list and almost nobody can
                answer them with a number. A monthly report written to be tabled at a board meeting
                without editing turns your strongest argument from an adjective into evidence.{' '}
                <Link to="/property-management/the-record">See The Record</Link>.
              </p>
            </div>
            <div className="step reveal">
              <div className="sn">Third</div>
              <h3>The Inflow</h3>
              <p>
                Defensive, on this track. The search has to find your firm rather than a stale
                directory listing, a wrong phone number, or nothing at all. Worth doing, and worth
                being honest that it is third.{' '}
                <Link to="/property-management-seo">See The Inflow</Link>.
              </p>
            </div>
            <div className="step reveal">
              <div className="sn">Fourth</div>
              <h3>The Intake</h3>
              <p>
                The after-hours contact from a resident, logged and routed on your escalation order.
                Administrative only, and the limits are below.{' '}
                <Link to="/property-management-intake">See The Intake</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ---------------------------------------------------------- the licence */}
      <section className="sec" id="licensing">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Licensing, stated precisely</span>
            <h2>The desk routes to a licensed manager and stops.</h2>
          </div>
          <div className="prod-cols">
            <div className="termpanel reveal">
              <div className="tp-label">What it does</div>
              <ul className="tp-list">
                {SCOPE_DOES.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="termpanel reveal">
              <div className="tp-label">Where it stops</div>
              <ul className="tp-list">
                {SCOPE_STOPS.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="note reveal">{CMRAO_LINE}</p>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap narrow">
          <div className="sec-head left reveal">
            <span className="eyebrow">Questions</span>
            <h2>Answered plainly.</h2>
          </div>
          <FAQ items={CONDO_FAQ} />
        </div>
      </section>

      <CTAStrip
        head={<>Find out what a board sees when it looks you up.</>}
        sub="On a nine-minute call I will read you your public rating against the firms you compete with for packages, what your listing shows a director searching at nine at night, and what I would fix first."
      />
    </main>
  );
}
