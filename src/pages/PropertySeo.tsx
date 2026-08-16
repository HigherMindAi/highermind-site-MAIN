import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import { PRICE, PRICE_FOOTNOTE, RANK_LOCK, RANK_LOCK_SHORT } from '../lib/property';
import { InflowStage } from '../components/Stages';
import { serviceSchema, faqSchema, breadcrumbs } from '../lib/schema';
import { CITIES } from '../lib/cities';

const URL = '/property-management-seo';

const DESC =
  'Get found by owners searching for a manager in your city. Google Business Profile rebuilt and held in the local pack. First page in 60 days or the monthly pauses.';

// No rate in schema. See property.ts.
const SCHEMA_DESC =
  'Google Business Profile and local search visibility for property management firms across the United States and Canada. The profile claimed and rebuilt, services named the way owners search, service area mapped, and position held in the local pack.';

const SEO_FAQ: [string, string][] = [
  [
    'How do property management companies rank higher on Google Maps?',
    'With a managed Google Business Profile - correct primary category, every service named the way owners actually search for it, the real service area mapped properly, consistent name and phone across every directory, steady review velocity, and local content - engineered into the local pack top three and held there.',
  ],
  [
    'How long does it take a property management firm to rank?',
    'The Rank Lock puts 60 days on the clock, starting the day I have what I need rather than the day you sign. If you are not on the first page for the agreed primary term by then, the monthly pauses until it lands. Toronto, Vancouver and Montreal carry a 90-day provision, agreed at kickoff rather than argued afterwards.',
  ],
  [
    'What is the difference between the SEO Engine and the Optimization Sprint?',
    'The Engine is managed and ongoing - position built, then held, because local ranking is not a thing you finish. The Sprint is a one-time rebuild: the profile corrected, services named properly, service area mapped, and the on-page work done once, then it is yours to maintain. The Sprint suits a solo manager under forty doors. The Engine suits a firm that intends to keep taking doors. Both rates are published further up this page.',
  ],
  [
    'Is ranking worth it if my leads come from referrals?',
    'Often yes, and for a reason most firms do not expect. Even when an owner arrives by referral he searches your name before he calls, and what he finds decides whether he calls at all. On the condominium side that effect is the whole game. Ranking is offensive on the rental track and defensive everywhere else, and both are worth having.',
  ],
];

const BUILD: [string, string][] = [
  [
    'The profile, rebuilt',
    'Correct primary category, every service you actually offer named the way owners search for it, consistent name and phone across every directory, and the real service area mapped instead of a radius guess. The signals Google reads, set correctly.',
  ],
  [
    'Reviews and authority',
    'Review velocity and recency are part of what decides local pack position, so the Trust Engine pays directly into this one. Add citation consistency and local content and you have the short list of things that actually move a pin.',
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
            ['Property Management', '/property-management'],
            ['Property Management SEO', URL],
          ]),
          faqSchema(SEO_FAQ),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <span className="eyebrow reveal">The Inflow - the demand engine</span>
          <h1 className="reveal">
            Owners are searching for a manager{' '}
            <span className="em">in your city right now.</span>
          </h1>
          <p className="sub reveal">
            The Inflow puts you in the three results they actually read. Your Google Business
            Profile claimed and rebuilt, every service named the way owners search for it, your
            real service area mapped properly, and a site you own. Organic first because it
            compounds and you keep it - paid over the top when you need volume faster than ranking
            can deliver.
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
            {RANK_LOCK_SHORT} &middot; {PRICE.seoMonthly} managed, or {PRICE.seoSprint} once
            &middot; The position is an asset you keep.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* --------------------------------------------------------- the well/tap */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Organic first, paid second, never paid only</span>
            <h2>
              Organic is a well. Paid is a tap.{' '}
              <span className="em">I build the well first.</span>
            </h2>
            <p className="lead">
              Paid demand produces enquiries the day it is switched on and stops the day it is
              switched off. Organic position is the part that survives. I build the well first
              because it is the part you keep, then run the tap over it when volume is needed faster
              than ranking can compound.
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
              <div className="tp-label">What it costs</div>
              <ul className="tp-list">
                <li>
                  <b>The SEO Engine</b> &nbsp;&middot;&nbsp; {PRICE.seoMonthly}
                  <br />
                  <span style={{ opacity: 0.62 }}>Managed. Position built, then held.</span>
                </li>
                <li>
                  <b>The Optimization Sprint</b> &nbsp;&middot;&nbsp; {PRICE.seoSprint}
                  <br />
                  <span style={{ opacity: 0.62 }}>
                    One-time rebuild. Suits a solo manager under forty doors.
                  </span>
                </li>
              </ul>
              <p className="tp-note">
                <b>The Rank Lock.</b> {RANK_LOCK}
              </p>
              <p className="tp-note">{PRICE_FOOTNOTE}</p>
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
              This is the easiest engine to say yes to.{' '}
              <span className="em">It is also the least valuable of the four on its own.</span>
            </h2>
            <p className="lead">
              Everybody understands what page one is worth, which is why ranking gets bought first.
              But a ranking on its own is a phone ringing in an office nobody is sitting in. The
              owner enquiry you paid to create arrives while you are at a showing, coordinating a
              contractor, or asleep, and it leaves as quietly as it came. I would rather tell you
              that at the start than at renewal.{' '}
              <Link to="/property-management-intake">See the half that answers</Link>, or{' '}
              <Link to="/the-keystone">see the whole Keystone</Link>.
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
              type, and it is the term the Rank Lock is measured on. Each town is built and measured
              separately, so you own more than one pin.
            </p>
          </div>
          <div className="loclist reveal">
            {ontario.map((c) => (
              <Link key={c.slug} to={`/local-seo/${c.slug}/`} className="loclink">
                {c.city}
              </Link>
            ))}
          </div>
          <p className="note reveal">
            I also work firms across eight US states, Atlantic Canada, the Prairies and Alberta. Ranking is
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
