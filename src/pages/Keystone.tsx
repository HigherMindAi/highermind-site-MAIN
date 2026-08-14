import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import {
  PROPERTY_FAQ, PRICE, PRICE_FOOTNOTE, KEYSTONE_WHOLE_NOTE, PORTFOLIO_SCALING,
  RANK_LOCK, LAUNCH_LOCK, RECORD_LOCK, NO_DOORS_PROMISE, LAUNCH_WINDOW,
} from '../lib/property';
import { KeystoneArchStage, TrustStage } from '../components/Stages';
import { orgSchema, serviceSchema, faqSchema, breadcrumbs } from '../lib/schema';

const URL = '/the-keystone';

const DESC =
  'Four engines welded into one system for property and condominium management firms: ranking, intake, the record and reputation. Live in 14 to 21 days.';

const FIT: string[] = [
  'A door is worth real recurring money to you, the way it is at eight to twelve percent of rent plus placement',
  'Your intake is one or two people who cannot always pick up',
  'You are buying owner leads and cannot prove what they returned',
  'You have ever had to defend your firm\u2019s responsiveness from memory',
  'You want doors under management, not clicks and impressions',
];

const NOT_FIT: string[] = [
  'You are at staffing capacity and genuinely cannot take another door',
  'You are shopping purely on price',
  'You would rather keep renting leads than own the channel',
  'You do not want to know how many enquiries you are currently missing',
  'You want page one overnight, before the work compounds',
];

export default function Keystone() {
  return (
    <main>
      <Seo
        title="The Keystone: Property Management System | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[
          orgSchema(),
          serviceSchema('The Keystone', DESC, URL),
          breadcrumbs([
            ['Home', '/'],
            ['Property Management', '/property-management'],
            ['The Keystone', URL],
          ]),
          faqSchema(PROPERTY_FAQ),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <span className="eyebrow reveal">The Keystone - the full system</span>
          <h1 className="reveal">
            A keystone is the one stone <span className="em">that holds the arch.</span>
          </h1>
          <p className="sub reveal">
            Take it out and everything either side of it comes down. Yours is the owner who has
            just decided to stop managing it himself, and he is already searching. A landlord with
            a second unit, an investor with four doors, an executor with a property to hold, a
            board that has just lost patience with its manager. The only questions are whether he
            finds you, whether anybody answers when he does, and whether you can show what happened
            afterwards. For most firms your size, all three of those leak.
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
            Answered and qualified &middot; {LAUNCH_WINDOW} &middot; The Record from month one.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* --------------------------------------------------------- four engines */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The four engines</span>
            <h2>
              Sequential, and{' '}
              <span className="em">each one wastes the one before it.</span>
            </h2>
            <p className="lead">
              Ranking without intake means generating enquiries nobody answers. Intake without a
              record means solving the problem and still losing the argument. A record without
              reputation means running a tight firm that boards screen out on a star rating. That
              is why this is sold as one system rather than four line items.
            </p>
          </div>
          <div className="prod-cols" style={{ marginBottom: 36 }}>
            <div className="stg-wrap reveal">
              <KeystoneArchStage />
            </div>
            <div className="vcard reveal">
              <div className="vlab">Why it is called that</div>
              <div className="vbig">
                The stones either side carry nothing on their own. They carry once the last one is
                set. <b>Take it out and both sides come down.</b>
              </div>
            </div>
          </div>
          <div className="vgrid four">
            <div className="vtile reveal">
              <div className="vt-n">Make it rain</div>
              <h3>The Inflow</h3>
              <p>
                Your profile claimed and rebuilt, every service named the way owners search for it,
                your service area mapped properly, and a site you own. Organic first because it
                compounds and you keep it.{' '}
                <Link to="/property-management-seo">See The Inflow</Link>.
              </p>
            </div>
            <div className="vtile feat reveal">
              <div className="vt-n">Catch it</div>
              <h3>The Intake</h3>
              <p>
                Cortex on your site and The Operator on your line. Answered and qualified from your
                own documents, triaged on your criteria, logged, and routed to a licensed manager.{' '}
                <Link to="/property-management-intake">See The Intake</Link>.
              </p>
            </div>
            <div className="vtile feat reveal">
              <div className="vt-n">Prove it</div>
              <h3>The Record</h3>
              <p>
                Every contact with the time it arrived and the time it was answered, and a monthly
                report written to be tabled at a board meeting without editing.{' '}
                <Link to="/property-management/the-record">See The Record</Link>.
              </p>
            </div>
            <div className="vtile reveal">
              <div className="vt-n">Keep it</div>
              <h3>The Trust</h3>
              <p>
                A structured ask to the owners and outgoing satisfied tenants who never think to
                leave a review, and a proper response to every negative one - written for the next
                owner who finds it, because that is who is actually reading it.
              </p>
            </div>
          </div>
          <div className="prod-cols" style={{ margin: '36px 0 4px' }}>
            <div className="stg-wrap reveal">
              <TrustStage />
            </div>
            <div className="vcard reveal">
              <div className="vlab">The structural problem</div>
              <div className="vbig">
                A tenant with a maintenance complaint writes four paragraphs. An owner collecting rent
                quietly for three years writes nothing at all.{' '}
                <b>The average misrepresents the firm, and boards screen on it.</b>
              </div>
            </div>
          </div>
          <p className="note reveal">
            The honest limit on Trust: I will not write reviews, incentivise them, gate them, or
            filter who gets asked based on how they are likely to answer. All of that is against
            platform rules and all of it is detectable. The engine is volume, timing and response
            quality, which is slower than the alternatives and is the only version that survives
            contact with Google.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* -------------------------------------------------------- configurator */}
      <section className="sec" id="configurator">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The Configurator</span>
            <h2>
              Two axes. How demand arrives,{' '}
              <span className="em">and how it gets answered.</span>
            </h2>
            <p className="lead">
              You are not buying a package. You are switching on the engines your firm is actually
              losing money through.
            </p>
          </div>

          <div className="prod-cols">
            <div className="termpanel reveal">
              <div className="tp-label">Axis one - how demand arrives</div>
              <ul className="tp-list">
                <li>
                  <b>Organic.</b> The well. Profile and local position rebuilt and held. Slower to
                  start, compounds, and you keep it.
                </li>
                <li>
                  <b>Paid.</b> The tap. Demand from day one. Stops when the spend stops.
                </li>
                <li>
                  <b>Both.</b> Paid carries the first ninety days while organic position is built
                  underneath it.
                </li>
              </ul>
            </div>
            <div className="termpanel reveal">
              <div className="tp-label">Axis two - how it gets answered</div>
              <ul className="tp-list">
                <li>
                  <b>Chat.</b> Cortex on your site. Qualifies and books an owner enquiry without you
                  touching it.
                </li>
                <li>
                  <b>Voice.</b> The Operator on your line. The after-hours and overflow half,
                  triaged and logged.
                </li>
                <li>
                  <b>Both.</b> The Desk whole. Nothing arrives at your firm through a channel that
                  does not answer.
                </li>
              </ul>
            </div>
          </div>

          <p className="note reveal">
            The Record and The Trust are not optional axes. The Record ships with every
            configuration, because a system that cannot show what it did is not a system. Trust is
            included on the whole Keystone and available standalone on smaller builds.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------------------- pricing */}
      <section className="sec" id="pricing">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">What it costs</span>
            <h2>The parts, published. The whole, on the call.</h2>
          </div>
          <div className="prod-cols">
            <div className="termpanel reveal">
              <div className="tp-label">Engines, standalone</div>
              <ul className="tp-list">
                <li>
                  <b>The SEO Engine</b> &nbsp;&middot;&nbsp; {PRICE.seoMonthly}
                  <br />
                  <span style={{ opacity: 0.62 }}>
                    Or a one-time Optimization Sprint at {PRICE.seoSprint}.
                  </span>
                </li>
                <li>
                  <b>Cortex</b> &nbsp;&middot;&nbsp; {PRICE.cortex} &nbsp;&middot;&nbsp;{' '}
                  {PRICE.cortexSetup}
                </li>
                <li>
                  <b>The Operator</b> &nbsp;&middot;&nbsp; {PRICE.operator} &nbsp;&middot;&nbsp;{' '}
                  {PRICE.operatorSetup}
                </li>
                <li>
                  <b>The Desk whole</b> &nbsp;&middot;&nbsp; {PRICE.deskWhole} &nbsp;&middot;&nbsp;{' '}
                  {PRICE.deskWholeSetup}
                </li>
                <li>
                  <b>The Trust Engine</b> &nbsp;&middot;&nbsp; {PRICE.trustFrom}
                </li>
              </ul>
              <p className="tp-note">{KEYSTONE_WHOLE_NOTE}</p>
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
            </div>
          </div>
          <p className="note reveal">
            <b>Portfolio scaling.</b> {PORTFOLIO_SCALING}
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ----------------------------------------------------------- fit / not */}
      <section className="sec" id="fit">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Before you book</span>
            <h2>I would rather lose the call than the third month.</h2>
          </div>
          <div className="prod-cols">
            <div className="termpanel reveal">
              <div className="tp-label">This is for your firm if</div>
              <ul className="tp-list">
                {FIT.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="termpanel reveal">
              <div className="tp-label">This is not for you if</div>
              <ul className="tp-list">
                {NOT_FIT.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="note reveal">
            I am one person. There is no account manager, no junior and no pod. You deal with the
            person who builds it, every time, which is the reason the founding terms are capped
            rather than sold to as many firms as will sign. If you want to see where your firm
            currently sits, start with{' '}
            <Link to="/local-seo/">your own city page</Link>.
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
        head={<>One door pays for the whole system.</>}
        sub="Nine minutes on the phone. I will show you where you sit, the firms above you, the review gap between you, and what happens to an enquiry that lands at seven in the evening. Then a straight answer on what I would build and the date it goes live."
      />
    </main>
  );
}
