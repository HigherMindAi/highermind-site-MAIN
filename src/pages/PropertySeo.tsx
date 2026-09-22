import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import Plate from '../components/Plate';
import { Arrow } from '../components/Icons';
import { CTA_LABEL, CTA_HREF, RANK_LOCK, PIN, TAP, TAP_LINE, FOUNDATION, LADDER_FAQ } from '../lib/ladder';
import { InflowStage } from '../components/Stages';
import { serviceSchema, faqSchema, breadcrumbs } from '../lib/schema';
import { CITIES, cityPath } from '../lib/cities';

// ---------------------------------------------------------------------------
// /property-management-seo/ - visibility, which sits inside The Pin. The slug
// is kept because it ranks, and the city pages hang off it. The Rank Lock is
// quoted word for word from ladder.ts; the ads are The Tap, last, always.
// ---------------------------------------------------------------------------

const URL = '/property-management-seo/';

const DESC =
  'Get found by owners searching for a manager in your city. Your Google profile rebuilt against the firms above you, then held. Backed by the Rank Lock.';

// No rate in schema. See property.ts.
const SCHEMA_DESC =
  'Google Business Profile and local search visibility for property management firms across the United States and Canada. The profile claimed and rebuilt, services named the way owners search, service area mapped, and position held in the local pack.';

const SEO_FAQ: [string, string][] = [
  [
    'How do property management companies rank higher on Google Maps?',
    'With a managed Google Business Profile - correct primary category, every service named the way owners actually search for it, the real service area mapped properly, consistent name and phone across every directory, steady review velocity, and local content - rebuilt against the firms above you and held there.',
  ],
  [
    'How long does it take a property management firm to rank?',
    RANK_LOCK +
      ' The clock starts the day I have what I need from you rather than the day you sign, and the hardest markets are agreed at kickoff rather than argued afterwards.',
  ],
  [
    'Is this a one-time fix or ongoing?',
    'Ongoing. The Pin is the profile rebuilt against the firms above you, then held - because local ranking is not a thing you finish, and the firms below you do not stop working the day you pass them. What it takes for your market, and the fixed price on it, gets said plainly on the call once I have seen what you have.',
  ],
  [
    'Is reputation management included, or is it a separate cost?',
    'Included, and it is not sold separately at all. Review capture, review responses and listing consistency are inside The Pin along with the profile work, the citations and the local content. One engagement, one invoice. The reason is not generosity - the work overlaps almost completely with the work that wins the pin, and charging twice for one job is not something I would want to explain in a room.',
  ],
  [
    'How do I get more Google reviews without breaking the rules?',
    'Volume, timing and response quality, and nothing else. A structured ask goes to the satisfied customers who would never think to leave one, at the point in the job where they are most likely to act. I will not write reviews, incentivise them, gate them, or pick who gets asked based on how they are likely to answer. All of that is against platform rules and all of it is detectable. The compliant version is slower and it is the only one that survives contact with Google.',
  ],
  LADDER_FAQ[2],
  [
    'Is ranking worth it if my leads come from referrals?',
    'Often yes, and for a reason most firms do not expect. Even when an owner arrives by referral they search your name before they call, and what they find decides whether they call at all. On the condominium side that effect is the whole game. Ranking is offensive on the rental track and defensive everywhere else, and both are worth having.',
  ],
];

const BUILD: [string, string][] = [
  [
    'The profile, rebuilt',
    'Correct primary category, every service you actually offer named the way owners search for it, consistent name and phone across every directory, and the real service area mapped instead of a radius guess. The signals Google reads, set correctly.',
  ],
  [
    'Reviews and authority',
    'Review velocity and recency are part of what decides local pack position, so the reputation work pays directly into this one. Add citation consistency and local content and you have the short list of things that actually move a pin.',
  ],
  [
    'Owned, not rented',
    'Organic position is an asset your firm keeps. It carries on sending you owner enquiries long after the build is done, and it does not stop the day you pause a spend or cancel a lead subscription.',
  ],
];

export default function PropertySeo() {
  const ontario = CITIES.filter((c) => c.region === 'ON');

  return (
    <main>
      <Seo
        title="Property Management SEO, Google Ranking | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[
          serviceSchema('Property Management SEO and Google Ranking', SCHEMA_DESC, URL),
          breadcrumbs([
            ['Home', '/'],
            ['Property Management', '/property-management/'],
            ['Property Management SEO', URL],
          ]),
          faqSchema(SEO_FAQ),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <span className="eyebrow reveal">Visibility &middot; inside {PIN.name}</span>
          <h1 className="reveal">
            Owners are searching for a manager{' '}
            <span className="em">in your city right now.</span>
          </h1>
          <p className="sub reveal">
            For property and condominium management firms. {PIN.promise} Every service named the
            way owners search for it, your real service area mapped properly, and every review
            answered. Organic first because it compounds and you keep it - the ads come last, on
            top of a profile that already works.
          </p>
          <div className="ctas reveal">
            <Link to={CTA_HREF} className="btn btn-primary">
              {CTA_LABEL} <Arrow />
            </Link>
          </div>
          <p className="trustline reveal">{RANK_LOCK}</p>
        </div>
      </section>

      <div className="divider" />

      {/* --------------------------------------------------------- the well/tap */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Organic first, paid last, never paid only</span>
            <h2>
              Organic is a well. Paid is a tap.{' '}
              <span className="em">I build the well first.</span>
            </h2>
            <p className="lead">
              Paid demand produces enquiries the day it is switched on and stops the day it is
              switched off. Organic position is the part that survives. I build the well first
              because it is the part you keep. <Link to={TAP.href}>{TAP.name}</Link> comes last,
              always. {TAP_LINE}
            </p>
          </div>
          <div className="prod-cols" style={{ marginBottom: 36 }}>
            <div className="stg-wrap reveal">
              <InflowStage />
            </div>
            <div className="vcard reveal">
              <div className="vlab">Why the order matters</div>
              <div className="vbig">
                A tap produces enquiries the day it is switched on and nothing the day it is switched
                off. <b>A well keeps rising.</b> Same budget line, different ending.
              </div>
            </div>
          </div>
          <div className="vgrid">
            {BUILD.map(([h, b]) => (
              <div className="vtile reveal" key={h}>
                <h3>{h}</h3>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------------------ the plate */}
      <section className="sec">
        <div className="wrap">
          <div className="chap">
            <div className="chap-media reveal">
              <Plate image="vProperty" filmKey="vProperty" ratio="4 / 3" scrim="soft" />
            </div>
            <div className="chap-copy reveal">
              <div className="sec-head left">
                <span className="eyebrow">Who this is for</span>
                <h2>
                  Management firms <span className="em">owners should be finding.</span>
                </h2>
                <p className="lead">
                  Rental firms taking on investor-owners, and condominium firms that need the search
                  after a shortlist to find the right thing. Good at the work, well reviewed by the
                  owners who stay, and missing from the map when a new owner goes looking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ----------------------------------------------------- renting vs owning */}
      <section className="sec">
        <div className="wrap">
          <div className="prod-cols">
            <div className="vcard reveal">
              <div className="vlab">The structure, not the incumbent</div>
              <div className="vbig">
                Purchased owner leads are frequently shared with your competitors, cost the same
                every month forever, and stop dead when payment stops.{' '}
                <b>Three years of payments leaves no asset behind.</b>
              </div>
            </div>
            <div className="termpanel reveal">
              <div className="tp-label">What sits inside {PIN.name}</div>
              <ul className="tp-list">
                <li>Your profile in the map for the agreed term</li>
                <li>Every review answered, and new ones asked for properly</li>
                <li>Where you started, recorded before anything is touched</li>
              </ul>
              <p className="tp-note">{RANK_LOCK}</p>
              <p className="tp-note">
                Each step has a fixed price, said plainly on the nine minutes once I have seen what
                you have - your market, and how far behind the profile is starting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------- reviews live in here */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Inside {PIN.name}, not beside it</span>
            <h2>
              Reviews, responses and consistent details.{' '}
              <span className="em">Never a second invoice.</span>
            </h2>
            <p className="lead">
              Review velocity, review recency and listing consistency are ranking signals. They are
              not a parallel service that happens to sit next to local search - they are part of
              how the pin is won and how it is held. So the capture, the responses and the
              consistency work are carried inside {PIN.name}, and{' '}
              <b>there is no reputation line to buy on top of it</b>. If somebody has quoted you
              for reputation management alongside local SEO, read the two quotes side by side and
              see how much of the second one is already in the first.
            </p>
          </div>
          <div className="vgrid">
            <div className="vtile reveal">
              <h3>The ask, to the quiet majority</h3>
              <p>
                The people most motivated to write a review are the ones with a complaint. A
                customer mid-dispute writes four paragraphs; a satisfied one who paid on time
                writes nothing. A structured, compliant ask to the happy and silent is what
                corrects an average built out of complaints. Nothing is written, incentivised or
                gated, because all three are against platform rules and all three are detectable.
              </p>
            </div>
            <div className="vtile reveal">
              <h3>The response is the artefact</h3>
              <p>
                A negative review is read by the next person considering you, not by the one who
                wrote it. Every review gets a plain, non-defensive reply written for that reader.
                It is the piece most businesses skip and the piece that reads loudest.
              </p>
            </div>
            <div className="vtile reveal">
              <h3>Consistent wherever you appear</h3>
              <p>
                Same name, same phone, same service area across every directory and profile
                somebody lands on. Inconsistency costs ranking, and it also makes a business look
                smaller and less permanent than it is.{' '}
                <Link to="/services/reputation-management/">The longer version is here</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ----------------------------------------------------------- the honesty */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The part worth saying out loud</span>
            <h2>
              {PIN.name} is the easiest step to say yes to.{' '}
              <span className="em">On its own it is not the whole answer.</span>
            </h2>
            <p className="lead">
              Everybody understands what page one is worth, which is why ranking gets bought first.
              But a ranking on its own is a phone ringing in an office nobody is sitting in. The
              owner enquiry you paid to create arrives while you are at a showing, coordinating a
              contractor, or asleep, and it leaves as quietly as it came. I would rather tell you
              that at the start than at renewal.{' '}
              The desk that answers sits inside{' '}
              <Link to={FOUNDATION.href}>{FOUNDATION.name}</Link>, and{' '}
              <Link to="/property-management-intake/">how it works for a management firm</Link> is
              laid out on its own page.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* -------------------------------------------------------------- cities */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Where I work</span>
            <h2>Every winnable town built as its own ranked unit.</h2>
            <p className="lead">
              &ldquo;Property management company&rdquo; plus a city name is what owners actually
              type, and it is the term the Rank Lock is measured on. Your home town is built inside
              {PIN.name}. The next towns over are built as their own ranked units{' '}
              <Link to="/how-it-works/#after">after you have chosen</Link>, once the first one holds.
            </p>
          </div>
          <div className="loclist reveal">
            {ontario.map((c) => (
              <Link key={c.slug} to={cityPath(c.slug)} className="loclink">
                {c.city}
              </Link>
            ))}
          </div>
          <p className="lead reveal">
            I also work firms across eight American states, Atlantic Canada, the Prairies and Alberta. Ranking is
            delivered to your profile, so distance is no barrier to the work - only to my coffee
            budget.
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap narrow">
          <div className="sec-head left reveal">
            <span className="eyebrow">Questions</span>
            <h2>Answered plainly.</h2>
          </div>
          <FAQ items={SEO_FAQ} />
        </div>
      </section>

      <CTAStrip
        head={<>See where your firm actually ranks.</>}
        sub="On a nine-minute call I will read you exactly where you show from every corner of your service area, where you do not, and which three firms are sitting above you."
      />
    </main>
  );
}
