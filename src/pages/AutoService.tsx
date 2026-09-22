import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import Plate from '../components/Plate';
import { Arrow, Go } from '../components/Icons';
import {
  CTA_LABEL,
  CTA_HREF,
  RANK_LOCK,
  LAUNCH_LOCK,
  TAP_LINE,
  STEPS,
  READ,
  TAP,
  FLIP,
  PIN,
  FOUNDATION,
  STOREFRONT,
  VERTICALS,
  LADDER_FAQ,
} from '../lib/ladder';
import { NightShiftStage } from '../components/Stages';
import { orgSchema, serviceSchema, faqSchema, breadcrumbs } from '../lib/schema';

// ---------------------------------------------------------------------------
// /auto-service-collision/ - one of the three verticals the outreach dials.
//
// Independent mechanical repair and collision. Three findings carry the page
// and every one of them is checkable by the reader in about a minute:
//
//   1. Collision and mechanical are DIFFERENT Google categories. A shop in one
//      is invisible for half of what it does, and most are in one.
//   2. The front counter is one person who is also writing estimates, in a
//      building with air tools running. The phone leak is severe and provable.
//   3. There is almost never a booking or estimate-request link, so every
//      enquiry has to survive a phone call to exist at all.
//
// v15: shops land on The Foundation. The leaky story (the counter) and the
// empty story (the category) sit in separate sections and never share one.
// ---------------------------------------------------------------------------

const URL = '/auto-service-collision/';

const VERTICAL = VERTICALS.find((v) => v.key === 'auto_service')!;

const DESC =
  'Local SEO and call answering for auto repair shops and collision centres. Found in the right category, answered when the counter cannot, every call counted.';

const FAQS: [string, string][] = [
  [
    'Why does my shop not come up for collision work?',
    'Most often because the profile is in one category and you do two jobs. Collision and mechanical repair are separate categories on Google, and a shop sitting in the general one is effectively invisible for half of what it does. It is a single setting, it was almost certainly chosen when the listing was claimed years ago, and it has been quietly costing you the higher-ticket half of your work ever since. It is the first thing I check and I will run it against the three shops above you before the call.',
  ],
  [
    'How many calls is my front counter actually missing?',
    'More than you think, and you have almost certainly never counted it. The counter is one person who is also writing estimates, ordering parts and talking to whoever walked in, in a building with air tools running. I ring the published line in the evening before the call and log exactly what happened, so the conversation is about your shop rather than about shops in general.',
  ],
  [
    'What does an estimate request flow actually do?',
    'It gets you the photographs before the car arrives. Every shop in the country already takes damage photos by text and calls it a system - the customer sends four dark pictures to somebody’s personal mobile and they get lost in a thread. Built properly it is a page that takes the vehicle details, the damage photos and the insurer if there is one, routes it to whoever writes estimates, and lands as one item rather than a scavenger hunt. On a collision centre that is usually the single highest-value thing on the site, and it belongs to The Storefront.',
  ],
  [
    'Insurance pays for most of my collision work. Does ranking matter?',
    'More, not less. When the insurer is paying, the customer’s budget stops being the constraint - the only question left is whether you were the shop that got found and answered first. A driver choosing between three names on a map is not comparing prices, because the price is not his problem. He is picking whoever came up and picked up.',
  ],
  [
    'I am already booked three weeks out. Why would I want more calls?',
    'You might not, and I will ask your booking lead time before I sell you anything. Ranking a shop that genuinely cannot take the work produces a worse review profile than it started with, which is a harm I would have been paid to cause. If you are at capacity with no plan to add a bay or a tech, the honest answer is the desk first so the calls you do take stop leaking, and more visibility later.',
  ],
  [
    'Does the desk quote repairs or promise a completion date?',
    'No. It never quotes a repair, never estimates a job, never tells a caller whether damage is covered by their policy or touches a deductible, and never commits your shop to a completion date you have not authorised. It takes the vehicle, the damage, the urgency and the contact details, books what should be booked, and routes the rest to a person. Those boundaries are published rather than promised.',
  ],
  LADDER_FAQ[0],
  LADDER_FAQ[2],
];

export default function AutoService() {
  return (
    <main>
      <Seo
        title="Auto Repair and Collision Shop SEO | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[
          orgSchema(),
          serviceSchema(
            'Local search, call answering and call tracking for auto repair shops and collision centres',
            DESC,
            URL
          ),
          breadcrumbs([['Home', '/'], ['Who I Help', '/who-i-help/'], ['Auto Service and Collision', URL]]),
          faqSchema(FAQS),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <span className="eyebrow reveal">Auto service and collision</span>
          <h1 className="reveal">
            For independent repair shops <span className="em">and collision centres.</span>
          </h1>
          <p className="sub reveal">
            Your front counter is one person who is also writing estimates, ordering parts and
            talking to whoever walked in. I get the shop found on the map in the right category, I
            put a desk on your line that answers when the counter cannot, and I count every call and
            form so you see exactly what it did. <b>Found first, answered second, then the ads.</b>
          </p>
          <div className="ctas reveal">
            <Link to={CTA_HREF} className="btn btn-primary">
              {CTA_LABEL} <Arrow />
            </Link>
          </div>
          <p className="trustline reveal">
            Found on the map &middot; Answered when you cannot &middot; Every call counted
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* -------------------------------------------------------- the ladder */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Three steps, in order</span>
            <h2>
              Most shops land on <span className="em">{VERTICAL.landsOn}.</span>
            </h2>
            <p className="lead">
              The way in is <Link to={READ.href}>{READ.name}</Link>: everything you have online,
              gone through properly in a week. Then three steps, always in this order. A shop with a
              ringing counter lands on the second one, because the calls already exist and the
              leak is the loudest thing in the building. Each step has a fixed price, said plainly on
              the nine minutes once I have seen what you have.
            </p>
          </div>
          <div className="ladder">
            {STEPS.map((s, i) => {
              const here = VERTICAL.landsOn.includes(s.name);
              return (
                <Link key={s.key} to={s.href} className={'svc reveal' + (here ? ' flag' : '')}>
                  <div className="si">{String(i + 1).padStart(2, '0')}</div>
                  <div className="sbody">
                    <span className="sn">
                      {s.position}
                      {here ? ' - where most shops start' : ''}
                    </span>
                    <h3>{s.name}</h3>
                    <p>{s.line}</p>
                  </div>
                  <Go />
                </Link>
              );
            })}
          </div>
          <p className="lead reveal">
            <Link to={TAP.href}>{TAP.name}</Link> comes last, always. Paid campaigns on your own
            accounts go on only once the profile and the desk are already working.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ----------------------------------------------------- leaky: intake */}
      <section className="sec">
        <div className="wrap">
          <div className="prod-cols">
            <div>
              <div className="sec-head left reveal">
                <span className="eyebrow leak">
                  <span className="n">01</span> The counter &middot; inside {FOUNDATION.name}
                </span>
                <h2>
                  {FLIP.leaky.hook}{' '}
                  <span className="em">The bays are loud and the phone still rings.</span>
                </h2>
                <p className="lead">
                  A driver whose car is undrivable is calling three shops, not one, and he is taking
                  whoever answers. He does not leave a voicemail and he does not call back, so the
                  loss never appears anywhere you would look for it. One desk answers on your line
                  and on your site, takes the vehicle, the damage and the urgency, books what should
                  be booked, and hands the rest to a person.
                </p>
              </div>
              <ul className="plist reveal">
                <li>
                  Most of what arrives does not need an estimator: do you work on this make, do you
                  deal with my insurer, are you taking cars this week, do you do loaners. Those need
                  something that replies, not somebody who is mid-estimate.
                </li>
                <li>
                  After six in the evening is when a driver who has had an accident starts ringing
                  round. That is the busiest hour of your week for enquiries and the emptiest hour of
                  your week for staff.
                </li>
                <li>
                  Administrative intake only. It never quotes a repair, never states whether damage
                  is covered, never touches a deductible and never commits you to a completion date.{' '}
                  <Link to="/scope-limits/">Where the desk stops</Link> is published.
                </li>
                <li>
                  Every contact routed on your own escalation order, so a tow-in emergency and a
                  brake enquiry do not arrive the same way - and every one of them counted, so you
                  see what came in and what happened to it.
                </li>
                <li>{LAUNCH_LOCK}</li>
              </ul>
            </div>
            <div className="stg-wrap reveal">
              <NightShiftStage />
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ---------------------------------------------- empty: the category */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">
              <span className="n">02</span> The setting nobody checks &middot; inside {PIN.name}
            </span>
            <h2>
              Collision and mechanical are two categories.{' '}
              <span className="em">Your shop is probably in one.</span>
            </h2>
            <p className="lead">
              Nobody drives past a collision shop and remembers it - Google is the entire top of the
              funnel. Google treats auto body and auto repair as different things, because drivers
              search for them as different things. A shop that does both and is listed as one is
              invisible for half of what it does - usually the higher-ticket half. It is one
              setting, it was chosen when the listing was claimed, and nothing about it announces
              itself. I will have run yours against the three shops above you before the call.
            </p>
          </div>
          <div className="vgrid">
            <div className="vtile reveal">
              <h3>The category, corrected</h3>
              <p>
                Primary category set to what you actually want the work in, secondary categories
                carrying the rest, and every service named the way a driver types it - brakes,
                transmission, auto body, collision repair, not a generic label chosen in a hurry.
              </p>
            </div>
            <div className="vtile reveal">
              <h3>The service area, drawn</h3>
              <p>
                Most shop profiles compete only in the postal code the building sits in, because the
                area was never drawn. Drivers will cross a town for a shop they trust, and they
                cannot choose one they never saw.
              </p>
            </div>
            <div className="vtile reveal">
              <h3>The reviews, worked properly</h3>
              <p>
                The customers most motivated to write about a repair are the unhappy ones. A
                structured ask to the quiet majority corrects an average built out of complaints,
                and every review gets answered. It is carried inside The Pin rather than billed
                beside it.
              </p>
            </div>
          </div>
          <p className="lead reveal">{RANK_LOCK}</p>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------ the estimate flow, step 3 */}
      <section className="sec">
        <div className="wrap">
          <div className="chap">
            <div className="chap-media reveal">
              <Plate image="vAutoService" filmKey="vAutoService" ratio="4 / 3" scrim="soft" />
            </div>
            <div className="chap-copy reveal">
              <div className="sec-head left">
                <span className="eyebrow">
                  <span className="n">03</span> The estimate flow &middot; inside {STOREFRONT.name}
                </span>
                <h2>
                  Get the photographs <span className="em">before the car arrives.</span>
                </h2>
                <p className="lead">
                  Every shop in the country already takes damage photos by text and calls it a
                  system. Four dark pictures land in somebody's personal messages, the vehicle
                  details arrive in a separate thread, and whoever writes estimates spends his
                  morning assembling it. Built properly it is one page: vehicle, damage, photos,
                  insurer if there is one, routed to the estimator as a single item.
                </p>
              </div>
              <ul className="plist">
                <li>
                  The photo is the estimate. Getting it before the car is on your lot is the
                  argument for building the site rather than refreshing it.
                </li>
                <li>
                  A booking or estimate-request link that actually exists. Most shop sites have
                  neither, so every enquiry has to survive a phone call to exist at all.
                </li>
                <li>
                  A page per service, so brakes, transmission, collision and diagnostics each have
                  something to be found on rather than sharing one paragraph.
                </li>
                <li>Fast on a phone in a parking lot, which is where it is actually opened.</li>
              </ul>
              <p className="lead">
                The Storefront comes after The Foundation is working. There is a{' '}
                <Link to="/work/">parts build on the work page</Link> showing what a site that does
                a job looks like.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------------- the honesty */}
      <section className="sec">
        <div className="wrap">
          <div className="prod-cols">
            <div className="vcard reveal">
              <div className="vlab">What I will ask before selling you anything</div>
              <div className="vbig">
                Your booking lead time. If you are at capacity with no plan to add a bay or a tech,{' '}
                <b>ranking you makes your reviews worse, not your month better.</b> I would rather
                fix the desk and come back to visibility later.
              </div>
            </div>
            <div className="termpanel reveal">
              <div className="tp-label">The order, and why</div>
              <p className="tp-note">
                {FOUNDATION.name} on most shops, because the leak at the counter is loud and
                provable, and because the category fault inside it is usually costing you the
                collision half of your work. {STOREFRONT.name} follows, and it earns its place where
                an estimate-request flow is genuinely in scope.
              </p>
              <div className="tp-label" style={{ marginTop: 26 }}>Why the ads wait</div>
              <p className="tp-note">{TAP_LINE}</p>
            </div>
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
          <FAQ items={FAQS} />
        </div>
      </section>

      <CTAStrip
        head={<>I will ring your line <span className="em">before the call.</span></>}
        sub="Tell me your shop and your town. I will tell you which category you are in, what happened when I called at twenty to seven, and which step fits."
      />
    </main>
  );
}
