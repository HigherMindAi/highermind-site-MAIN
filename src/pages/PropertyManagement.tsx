import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import {
  PROPERTY_FAQ, PROPERTY_PROOF, DOOR_MATH, PRICE, PRICE_FOOTNOTE,
  RANK_LOCK, LAUNCH_LOCK, RECORD_LOCK, NO_DOORS_PROMISE, LAUNCH_WINDOW,
} from '../lib/property';
import { TrustStage } from '../components/Stages';
import { orgSchema, serviceSchema, faqSchema, breadcrumbs } from '../lib/schema';

const URL = '/property-management';

const DESC =
  'Ranking, intake, records and reviews for property management firms across Canada. Own the channel instead of renting leads. Systems from $900 a month.';

// Schema description carries NO rate. A figure in structured data can be cached
// into a rich result against me; visible copy changes in one deploy. See property.ts.
const SCHEMA_DESC =
  'Ranking, intake, records and reviews for property and condominium management firms across Canada. Local visibility, an intake desk that answers and qualifies every owner enquiry, a timestamped record of every contact, and reputation work.';

const ENGINES: [string, string, string, string][] = [
  [
    'The Inflow',
    'Ranking and local visibility. Make it rain.',
    'Your Google Business Profile claimed and rebuilt. Every service you offer, named the way owners actually search for it. Your real service area, mapped properly. A site you own. Organic position first because it compounds and you keep it; paid demand layered over the top when volume is needed faster than ranking can deliver.',
    '/property-management-seo',
  ],
  [
    'The Intake',
    'Cortex and The Operator. Catch it.',
    'Ranking creates enquiries. It does not answer them, and in this industry that gap is wider than in almost any other, because a large share of your inbound arrives outside office hours from people who have a problem rather than a question. Answered and qualified from your own documents, triaged on your criteria, logged, and routed to a licensed manager.',
    '/property-management-intake',
  ],
  [
    'The Record',
    'Timestamped logs and board reports. Prove it.',
    'Every contact with the time it arrived and the time it was answered, plus a monthly report written to be forwarded to an owner or tabled at a board meeting without editing. In property management your exposure is almost never the event. It is the account of the event.',
    '/property-management/the-record',
  ],
  [
    'The Trust',
    'Reviews and response. Keep it.',
    'Property management has a structural reputation problem almost no other industry shares: the people most motivated to review you are not the people who pay you. A tenant with a maintenance complaint writes four paragraphs. A satisfied owner collecting rent quietly for three years writes nothing at all. The engine is volume, timing and response quality.',
    '/the-keystone',
  ],
];

const LEAKS: [string, string][] = [
  [
    'They cannot find you',
    'An owner with a rental to hand over searches, reads the first three results, and calls two of them. If you are not in that pack you were never in the running, and you will never know the enquiry existed.',
  ],
  [
    'They find you and nobody answers',
    'The enquiry lands after six, or during a showing, or while you are on the phone to a contractor. It goes to voicemail. He does not leave one. He calls the next firm, who does answer, and that door is gone permanently.',
  ],
  [
    'You cannot prove what happened',
    'A resident says he called three times. A board wants to know who was told what and when. An owner wants to know why his unit sat empty for six weeks. Without a record you are defending your firm from memory.',
  ],
  [
    'Your reputation is written by the wrong people',
    'Your reviews come from tenants during their worst week, not from the owners who are happy. An average built from complaints costs you owners who never contacted you at all, and it costs you board work outright.',
  ],
];

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
            'Marketing, Ranking and AI Intake for Property Management Companies',
            SCHEMA_DESC,
            URL
          ),
          breadcrumbs([['Home', '/'], ['Property Management', URL]]),
          faqSchema(PROPERTY_FAQ),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <span className="eyebrow reveal">Property &amp; condominium management &middot; Canada</span>
          <h1 className="reveal">
            You are renting leads. <span className="em">I build the position you keep.</span>
          </h1>
          <p className="sub reveal">
            Most firms your size buy owner leads from a pay-per-lead service. They are frequently
            shared with your competitors, they cost the same every month forever, and the day you
            stop paying they stop completely. Three years of payments leaves nothing behind. Same
            budget line, different ending.
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
            Answered and qualified &middot; {LAUNCH_WINDOW} &middot; I managed property before I
            marketed it.
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
              is, and why buying one-off marketing has never worked properly for firms like yours.
              Full residential management runs eight to twelve percent of collected rent, and
              roughly ten percent is common across the GTA. Tenant placement is charged separately
              at half to a full month&rsquo;s rent every time a unit turns.
            </p>
          </div>

          <div className="prod-cols">
            <div className="termpanel reveal">
              <div className="tp-label">Your own industry&rsquo;s published numbers</div>
              <ul className="tp-list">
                {DOOR_MATH.map(([lab, note, val]) => (
                  <li key={lab}>
                    <b>{val}</b> &nbsp;&middot;&nbsp; {lab}
                    <br />
                    <span style={{ opacity: 0.62 }}>{note}</span>
                  </li>
                ))}
              </ul>
              <p className="tp-note">
                The whole system, measured against one door: one door carries it.
              </p>
            </div>
            <div className="vcard reveal">
              <div className="vlab">The honest frame</div>
              <div className="vbig">
                You are not buying marketing. You are buying <b>doors that pay you every month for
                years</b>, and the arithmetic only has to work once.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ---------------------------------------------------- where it leaks */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Where it goes</span>
            <h2>Where a firm like yours actually leaks.</h2>
            <p className="lead">
              The losses are never in one place. They are in four, and fixing one while the other
              three stay open is why agency work so often produces nothing you can feel.
            </p>
          </div>
          <div className="vgrid four">
            {LEAKS.map(([h, b], i) => (
              <div className="vtile reveal" key={h}>
                <div className="vt-n">{String(i + 1).padStart(2, '0')}</div>
                <h3>{h}</h3>
                <p>{b}</p>
              </div>
            ))}
          </div>
          <p className="note reveal">
            Why these four and not a longer list: because they are sequential, and each one wastes
            the one before it. Ranking without intake means paying to generate calls nobody
            answers. Intake without a record means solving the problem and still losing the
            argument. A record without reputation means running a tight firm that boards screen out
            on a star rating.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* --------------------------------------------------- the four engines */}
      <section className="sec" id="engines">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The four engines</span>
            <h2>
              Four places a firm like yours loses an owner.{' '}
              <span className="em">One engine each.</span>
            </h2>
          </div>
          <div className="steps">
            {ENGINES.map(([name, job, body, href], i) => (
              <div className="step reveal" key={name}>
                <div className="sn">Engine {String(i + 1).padStart(2, '0')}</div>
                <h3>{name}</h3>
                <p style={{ color: 'var(--faint)', marginBottom: 10 }}>{job}</p>
                <p>{body}</p>
                <p style={{ marginTop: 16 }}>
                  <Link to={href}>
                    {i === 3 ? 'See it inside the Keystone' : `See ${name}`}
                  </Link>
                </p>
              </div>
            ))}
          </div>
          <div className="prod-cols" style={{ margin: '36px 0 4px' }}>
            <div className="stg-wrap reveal">
              <TrustStage />
            </div>
            <div className="vcard reveal">
              <div className="vlab">Engine 04, drawn</div>
              <div className="vbig">
                Eleven reviews means one bad month defines you.{' '}
                <b>A hundred and forty means it does not.</b> The engine does not change who wrote
                the first eleven - it changes who writes the next hundred.
              </div>
            </div>
          </div>
          <p className="note reveal">
            The Inflow is the engine that gets bought first, and that is fine - everybody
            understands what page one is worth. It is also the least valuable of the four on its
            own, which is the honest thing to tell you at the start rather than at renewal. Organic
            is a well. Paid is a tap. I build the well first.
          </p>
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
                  <td>Lead engine</td>
                  <td>The Inflow</td>
                  <td>The Trust and The Record</td>
                </tr>
                <tr>
                  <td>The decision</td>
                  <td>One person, usually the principal, often the same day.</td>
                  <td>A committee, on a season.</td>
                </tr>
                <tr>
                  <td>Regulation</td>
                  <td>&mdash;</td>
                  <td>CMRAO-licensed in Ontario, equivalents elsewhere.</td>
                </tr>
                <tr>
                  <td>Order of build</td>
                  <td>Inflow, Intake, Trust, Record</td>
                  <td>Trust, Record, Inflow, Intake</td>
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

          <p className="note reveal">
            Most firms are both. A mixed firm gets both tracks in one build, sequenced
            rental-first, because rental produces a number you can feel inside ninety days - and
            that number is what buys the patience for the board side.{' '}
            <Link to="/condominium-management-marketing">See the condominium track</Link>.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------------------ pricing */}
      <section className="sec" id="pricing">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">What it costs</span>
            <h2>Published, so you can do the arithmetic before you call.</h2>
          </div>
          <div className="prod-cols">
            <div className="termpanel reveal">
              <div className="tp-label">Engines, standalone</div>
              <ul className="tp-list">
                <li>
                  <b>The SEO Engine</b> &nbsp;&middot;&nbsp; {PRICE.seoMonthly}
                  <br />
                  <span style={{ opacity: 0.62 }}>
                    The Inflow, organic. Or a one-time Optimization Sprint at {PRICE.seoSprint}.
                  </span>
                </li>
                <li>
                  <b>Cortex</b> &nbsp;&middot;&nbsp; {PRICE.cortex}
                  <br />
                  <span style={{ opacity: 0.62 }}>
                    Chat intake. {PRICE.cortexSetup}. Live in 14 days.
                  </span>
                </li>
                <li>
                  <b>The Operator</b> &nbsp;&middot;&nbsp; {PRICE.operator}
                  <br />
                  <span style={{ opacity: 0.62 }}>
                    Voice intake. {PRICE.operatorSetup}. Live in 21 days.
                  </span>
                </li>
                <li>
                  <b>The Desk whole</b> &nbsp;&middot;&nbsp; {PRICE.deskWhole}
                  <br />
                  <span style={{ opacity: 0.62 }}>
                    Cortex and The Operator together. {PRICE.deskWholeSetup}.
                  </span>
                </li>
                <li>
                  <b>The Trust Engine</b> &nbsp;&middot;&nbsp; {PRICE.trustFrom}
                  <br />
                  <span style={{ opacity: 0.62 }}>One-time build, per platform.</span>
                </li>
              </ul>
              <p className="tp-note">{PRICE_FOOTNOTE}</p>
            </div>
            <div className="termpanel reveal">
              <div className="tp-label">What is guaranteed</div>
              <ul className="tp-list">
                <li>
                  <b>The Rank Lock.</b> {RANK_LOCK}
                </li>
                <li>
                  <b>The Launch Lock.</b> {LAUNCH_LOCK}
                </li>
                <li>
                  <b>The Record.</b> {RECORD_LOCK}
                </li>
              </ul>
              <p className="tp-note">{NO_DOORS_PROMISE}</p>
              <p className="tp-note">
                <Link to="/the-keystone">See the whole Keystone</Link> - all four engines welded
                into one system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* -------------------------------------------------------------- proof */}
      <section className="sec" id="proof">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Why you should believe any of this</span>
            <h2>
              Not a portfolio. Three profiles I can show you the dashboards for,{' '}
              <span className="em">including the one that is not entirely flattering.</span>
            </h2>
          </div>
          <div className="vgrid">
            {PROPERTY_PROOF.map((p) => (
              <div className="vtile reveal" key={p.head}>
                <h3>{p.head}</h3>
                <p>{p.body}</p>
                <p style={{ marginTop: 14, color: 'var(--faint)' }}>{p.note}</p>
              </div>
            ))}
          </div>
          <p className="note reveal">
            I do not name clients on my own website. Every figure above is from a live dashboard
            and I will walk you through the screens on a call. Before any of this I was general
            manager of a property management company and the maintenance operation that served it,
            which is why this page talks about doors and corporations instead of impressions and
            engagement. <Link to="/about">The full story</Link>.
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
          <FAQ items={PROPERTY_FAQ} />
        </div>
      </section>

      <CTAStrip
        head={<>Nine minutes, and you will know exactly where you sit.</>}
        sub="Not a proposal, not an audit, not a deck. I will show you your current position, the three firms above you, the review gap between you, and what happens to an enquiry that arrives at your office at seven in the evening. Then you decide whether the rest is worth a longer conversation."
      />
    </main>
  );
}
