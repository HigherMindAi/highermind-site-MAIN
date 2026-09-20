import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import { RANK_LOCK, LAUNCH_WINDOW } from '../lib/property';
import { NightShiftStage, InflowStage } from '../components/Stages';
import { orgSchema, serviceSchema, faqSchema, breadcrumbs } from '../lib/schema';

// ---------------------------------------------------------------------------
// /trades/ - the wide bench.
//
// Replaces the two single-trade pages. Deliberately wide, because the findings
// never depended on the trade: a category set wrong, a service area never
// drawn and a phone that rings out at seven in the evening are the same defect
// in a plumbing company, a paving contractor and a fencing crew. The trades
// are NAMED in the copy rather than each given a page, which is what lets one
// page rank for fifteen categories without pretending to be fifteen pages.
//
// /roofing/ and /arborists/ 301 here. Both are trades, so the redirect is
// honest and the equity transfers.
// ---------------------------------------------------------------------------

const URL = '/trades/';

const DESC =
  'Local SEO and AI intake for trades and home service businesses. Found first when somebody nearby goes looking, and every call answered while your hands are full.';

const TRADES = [
  'Plumbing', 'HVAC and heating', 'Electrical', 'Concrete and paving',
  'Landscaping and hardscaping', 'Roofing', 'Tree care and arborists', 'Flooring',
  'Garage doors', 'Septic', 'Excavation', 'Painting', 'Fencing', 'Masonry',
  'Pest control', 'Junk removal', 'Mobile welding',
];

const FAQS: [string, string][] = [
  [
    'What happens to a call that comes in while my hands are full?',
    'It gets answered and qualified instead of going to voicemail. The desk takes the job type, the town, whether it is urgent and whether it is a repair or an install, books the visit into your calendar if it should be booked, and routes anything real to you on your own escalation order. You come off the job to booked work rather than four missed calls and a guess about which one was worth returning.',
  ],
  [
    'Why am I being out-ranked by companies smaller than mine?',
    'Usually one setting, and usually the category. A broad category picked at claim time quietly cannot rank for the specific thing you sell, so a two-van operation in the correct category beats a twelve-van operation in the wrong one. The second most common cause is a service area that was never drawn, which leaves the profile competing only in the postal code your address sits in. Neither is a reflection of how good you are, and neither fixes itself.',
  ],
  [
    'Should I buy a new website first?',
    'Almost never, and I will talk you out of it if the visibility work is not in hand. A better site that nobody reaches is a more expensive version of the problem you already have, and you would be right to blame me for it. Visibility first, the site second. The exception is a site so slow or so broken that it is losing the traffic you already get, and I will tell you if that is what I find.',
  ],
  [
    'I already buy leads. Why change?',
    'A purchased lead is frequently sold to two of your competitors as well, costs the same every month forever, and stops dead the day you stop paying. A ranked position compounds and it stays yours. You do not have to stop buying leads to start owning the position - most contractors run both for a season and let the numbers decide.',
  ],
  [
    'Does the desk quote prices or commit my crew?',
    'No. It never quotes a price, never estimates a job, never commits a crew to a date or a window you have not authorised, and never tells a caller whether something is covered by insurance. Those are hard escalations to a person, written into the agreement rather than promised on a call. The full list is published.',
  ],
];

export default function Trades() {
  return (
    <main>
      <Seo
        title="Local SEO & AI Intake for Trades | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[
          orgSchema(),
          serviceSchema('Local search marketing and AI intake for trades and home services', DESC, URL),
          breadcrumbs([['Home', '/'], ['Who I Help', '/who-i-help/'], ['Trades', URL]]),
          faqSchema(FAQS),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <span className="eyebrow reveal">Trades and home services</span>
          <h1 className="reveal">
            The work you lose <span className="em">while your hands are full.</span>
          </h1>
          <p className="sub reveal">
            Two ways it goes. They never find you, or nobody answers. Neither one ever shows up in
            your day - the customer who never found you does not complain, and the one who rang
            while you were under a sink does not ring back. He calls the next name on the list and
            that job is gone permanently. <b>It is invisible from the inside</b>, which is why it
            runs for years in businesses that are otherwise very well run.
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
            Answered and qualified &middot; {LAUNCH_WINDOW} &middot; One firm per trade, per market.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------------------ intake */}
      <section className="sec">
        <div className="wrap">
          <div className="prod-cols">
            <div>
              <div className="sec-head left reveal">
                <span className="eyebrow"><span className="n">01</span> Intake &middot; The Line</span>
                <h2>
                  Every call answered, <span className="em">while you are on the job.</span>
                </h2>
                <p className="lead">
                  Nobody is under a floor with a tool running and answering the phone at the same
                  time. That is not a discipline problem, it is physics, and it means your busiest
                  days are the days you lose the most work. One desk answers on two channels, the
                  web and the phone. It asks what kind of job, which town and whether it is urgent,
                  books the visit, and routes the real emergencies to whoever is on call.{' '}
                  {LAUNCH_WINDOW}.
                </p>
              </div>
              <ul className="plist reveal">
                <li>
                  Most of what arrives does not need you: do you do that kind of work, do you cover
                  my town, how far out are you booking, do you offer financing. Those do not need a
                  tradesman. They need something that replies.
                </li>
                <li>
                  A contact form is a filing cabinet, not a dispatcher. A request that lands at
                  eight on a Friday sits until Monday, and by Monday he has had two other quotes.
                </li>
                <li>
                  Administrative intake only. It routes to a person and stops, and the limits are
                  published rather than described.
                </li>
                <li>
                  Never quotes, never estimates, never commits your crew to a window you have not
                  authorised.
                </li>
              </ul>
              <div className="pfoot reveal">
                <Link to="/property-management-intake/" className="btn btn-primary">
                  How intake is built <Arrow />
                </Link>
                <Link to="/scope-limits/" className="btn btn-ghost">
                  Where the desk stops
                </Link>
              </div>
            </div>
            <div className="stg-wrap reveal">
              <NightShiftStage />
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* -------------------------------------------------------- visibility */}
      <section className="sec">
        <div className="wrap">
          <div className="prod-cols">
            <div className="stg-wrap reveal">
              <InflowStage />
            </div>
            <div>
              <div className="sec-head left reveal">
                <span className="eyebrow"><span className="n">02</span> Visibility &middot; The Pin</span>
                <h2>
                  Found first when somebody nearby{' '}
                  <span className="em">goes looking for your trade.</span>
                </h2>
                <p className="lead">
                  Somebody with water coming through a ceiling does not scroll. He taps the first
                  three on the map and takes whoever answers, and if you are the fourth pin you were
                  never in that job at all. It never appears anywhere you would look for it either,
                  because a call you did not receive does not land in any system you own. The
                  companies beating you to it are usually not better at the work.{' '}
                  <b>They are higher on a list.</b>
                </p>
              </div>
              <ul className="plist reveal">
                <li>
                  The profile rebuilt properly: correct primary category, every service named the
                  way customers actually search for it, and the real service area drawn instead of
                  a radius guess.
                </li>
                <li>
                  Review capture, review responses and consistent details across every directory -
                  carried inside this line, never billed as a second one.
                </li>
                <li>The Rank Lock: {RANK_LOCK}</li>
                <li>
                  The next town over built as its own pin once the home town is holding.{' '}
                  <Link to="/services/service-area-expansion/">More cities</Link>.
                </li>
              </ul>
              <div className="pfoot reveal">
                <Link to="/property-management-seo/" className="btn btn-primary">
                  How visibility is built <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* --------------------------------------------------------- the bench */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Who this is built for</span>
            <h2>
              Two to twelve people, <span className="em">and the owner still on tools.</span>
            </h2>
            <p className="lead">
              You quote it, you sell it, you schedule it, and most days you are still running a
              crew. The findings do not care which trade it is - a category set wrong and a phone
              that rings out at seven in the evening cost the same work in any of these.
            </p>
          </div>
          <div className="mesh reveal">
            <span className="mesh-lab">Built for</span>
            {TRADES.map((t) => (
              <span key={t} className="mesh-item">{t}</span>
            ))}
          </div>
          <p className="note reveal">
            If yours is not on that list it almost certainly still fits. The system is built on your
            own knowledge, your screening rules and your words, so the trade is an input rather than
            a version.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------------- the honesty */}
      <section className="sec">
        <div className="wrap">
          <div className="prod-cols">
            <div className="vcard reveal">
              <div className="vlab">What I will talk you out of</div>
              <div className="vbig">
                A build before the visibility work is a more expensive version of the same problem.{' '}
                <b>A better site that nobody reaches still nobody reaches.</b> I would rather lose
                the bigger invoice than sell you that.
              </div>
            </div>
            <div className="termpanel reveal">
              <div className="tp-label">The order, and why</div>
              <p className="tp-note">
                Visibility first, almost always. It is the part that creates the enquiry, it
                compounds, and you keep it. The site is the second conversation and it usually lands
                on a straightforward rebuild - a page per service, a page per town you actually
                serve. Intake sells itself on any business where the evening call already rings out.
              </p>
              <div className="tp-label" style={{ marginTop: 26 }}>Before you rank</div>
              <p className="tp-note">
                Tell me your booking lead time on the call. If you are already at capacity with no
                intention of adding a van or a tech, ranking you produces a worse review profile
                than you started with, and I will say so rather than take the work.
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
            <h2>Answered plainly.</h2>
          </div>
          <FAQ items={FAQS} />
        </div>
      </section>

      <CTAStrip
        head={<>What does a job <span className="em">actually cost you</span> to miss?</>}
        sub="Tell me your trade and your town. I will tell you where you come up, what happens to a call at seven in the evening, and which end to fix first."
      />
    </main>
  );
}
