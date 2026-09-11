import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import RecordTicker from '../components/RecordTicker';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import { RANK_LOCK, LAUNCH_WINDOW } from '../lib/property';
import { NightShiftStage, InflowStage } from '../components/Stages';
import { orgSchema, serviceSchema, faqSchema, breadcrumbs } from '../lib/schema';

const URL = '/arborists/';

const DESC =
  'Local search marketing and AI intake for tree care companies. Found first when somebody nearby needs a tree dealt with, and every call answered while your crew is in the canopy.';

const FAQS: [string, string][] = [
  [
    'What happens to the call that lands while my climber is up a tree?',
    'It gets answered and qualified. Nobody sixty feet up is reaching a phone, and nobody on the ground running a chipper is hearing one. The desk takes the job, the town, whether anything is on a structure or a wire, books the assessment if it should be booked, and logs the contact with a timestamp in and a timestamp answered.',
  ],
  [
    'Will it tell a caller whether their tree is dangerous?',
    'Never, and this is the clause that matters most in your trade. The desk does not assess whether a tree is hazardous, does not state or imply whether one is likely to fail, does not advise whether a tree should be removed or retained, does not comment on root, decay or structural condition, and performs no part of a tree risk assessment. Those are professional judgements reserved to a qualified arborist attending the site. It also never rules on a permit, a tree bylaw or a protected species. Every one is a hard escalation, written into the agreement rather than promised on a call.',
  ],
  [
    'Is this worth it when my season is only half the year?',
    'Your season is not half the year - it inverts. Ice load, wind, snow-broken limbs and the dormant pruning window make winter the busy half rather than the dead one, and the storm that fills the phone is the same storm that puts every crew you have in the air. That is the week where answering is worth the most and is hardest to do.',
  ],
  [
    'I get most work from referrals and drive-bys. Does search matter?',
    'A referral gets looked up before the call. The referral opens the tab; what is in the tab decides whether the phone rings. And the emergency work - the limb through the garage at nine at night - is almost never a referral. That one is whoever comes up first and picks up.',
  ],
];

export default function Arborists() {
  return (
    <main>
      <Seo
        title="Local Visibility & AI Intake for Tree Care Companies | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[
          orgSchema(),
          serviceSchema('Local search marketing and AI intake for tree care companies', DESC, URL),
          breadcrumbs([['Home', '/'], ['Arborists and tree care', URL]]),
          faqSchema(FAQS),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <span className="eyebrow reveal">Arborists &amp; tree care</span>
          <h1 className="reveal">
            The call that came in <span className="em">while you were up a tree.</span>
          </h1>
          <p className="sub reveal">
            Two ways the work goes missing. They never find you, or nobody answers. A tree is not
            sound on three sides and hollow on the fourth, and neither is the thing that brings you
            work. The homeowners who never found you do not complain, and the ones who called while
            you were up a tree do not call back - so it is invisible from the inside, which is why
            it runs for years in companies that are otherwise very well run.
          </p>
          <div className="ctas reveal">
            <Link to="/book/" className="btn btn-primary">
              Book a call <Arrow />
            </Link>
            <a href={`tel:${PHONE_E164}`} className="btn btn-ghost">
              Call {PHONE_DISP}
            </a>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="prod-cols">
            <div>
              <div className="sec-head left reveal">
                <span className="eyebrow">01 &middot; Intake &middot; The Line</span>
                <h2>
                  Somebody on the ground <span className="em">who always picks up.</span>
                </h2>
                <p className="lead">
                  Nobody is sixty feet up in a canopy with a saw running and answering the phone at
                  the same time. That is not discipline, it is physics - and your busiest days are
                  the days you miss the most work. One desk answers on two channels, the web and the
                  phone. It asks what kind of work, which town and whether anything is on a
                  structure or a wire, books the assessment, and routes the genuine emergencies
                  straight through. {LAUNCH_WINDOW}.
                </p>
              </div>
              <ul className="plist reveal">
                <li>
                  Administrative intake only. It routes to a person and stops - the published scope
                  limits say exactly where.
                </li>
                <li>
                  Never assesses whether a tree is hazardous, never says whether one is likely to
                  fail, never advises removal, never rules on a permit or a bylaw.
                </li>
                <li>
                  A storm night does not overwhelm it. The fortieth call is answered like the first,
                  and the ones on wires or structures are flagged as they arrive.
                </li>
                <li>
                  A form is a filing cabinet, not a dispatcher. A request that lands at eight on a
                  Friday sits until Monday, and by Monday he has had two other companies out.
                </li>
                <li>Every contact logged with a timestamp in and a timestamp answered.</li>
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

      <section className="sec">
        <div className="wrap">
          <div className="prod-cols">
            <div className="stg-wrap reveal">
              <InflowStage />
            </div>
            <div>
              <div className="sec-head left reveal">
                <span className="eyebrow">02 &middot; Visibility &middot; The Pin</span>
                <h2>
                  First in the pack <span className="em">the night the limb comes down.</span>
                </h2>
                <p className="lead">
                  A homeowner with a limb hanging over his garage does not scroll. He taps the
                  first three companies on the map and takes whoever answers, and if you are the
                  fourth pin you were never in that job at all. It never shows up anywhere you would
                  look for it either, because a call you never received does not appear in your CRM.
                  The companies beating you to it are not better tree services. They are higher on a
                  list.
                </p>
              </div>
              <ul className="plist reveal">
                <li>Profile rebuilt properly: correct category, every service named, service area mapped.</li>
                <li>Review velocity, citation authority and local content - the signals that decide the top three.</li>
                <li>The Rank Lock: {RANK_LOCK}</li>
                <li>
                  The next town over built as its own pin, once the home town is holding.{' '}
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

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">03 &middot; Reviews &middot; inside Visibility</span>
            <h2>
              The nine reviews <span className="em">that decide it.</span>
            </h2>
            <p className="lead">
              The only customers motivated enough to review you unprompted are the ones who were
              angry, so a company that does three hundred good jobs a year can carry a wall
              describing the three that went wrong. A homeowner cannot tell a bad arborist from a
              good one with no system for asking, and he will not investigate. He will call the
              other two.
            </p>
          </div>
          <div className="vgrid reveal">
            <div className="vtile">
              <h3>The ask</h3>
              <p>
                A structured, compliant request to the quiet, satisfied majority who would never
                think to leave one. Nothing gated, nothing filtered, nothing written by me.
              </p>
            </div>
            <div className="vtile">
              <h3>The response</h3>
              <p>
                A negative review is read by the next homeowner, not by the one who wrote it. Every
                one gets a plain, non-defensive answer written for that reader.
              </p>
            </div>
            <div className="vtile">
              <span className="sn">The Storefront</span>
              <h3>And the site behind it</h3>
              <p>
                A slow site with four stock photos of a tree reads as a company that is small and
                struggling, even when you are booked eight weeks out. Nobody tells you they left.{' '}
                <Link to="/services/website-build/">The site</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">04 &middot; The Record</span>
            <h2>
              What came in, <span className="em">and how fast it was answered.</span>
            </h2>
            <p className="lead">
              Every contact logged with a timestamp in and a timestamp answered, and a report on the
              first of the month. <Link to="/the-record/">See The Record</Link>.
            </p>
          </div>
          <div className="prod-cols">
            <RecordTicker variant="mixed" />
            <div className="termpanel reveal">
              <div className="tp-label">The season note</div>
              <p className="tp-note">
                Tree care is the one book where the season inverts. Ice load, wind, snow-broken
                limbs and the dormant pruning window make winter the busy half rather than the dead
                one - and the storm that floods the phone is the same storm that puts every climber
                you have in the air. The week you can least afford to answer is the week the work is
                worth the most.
              </p>
              <div className="tp-label" style={{ marginTop: 26 }}>
                The boundary
              </div>
              <p className="tp-note">
                The hazard boundary is the clause that matters most in this trade. The desk does
                not assess whether a tree is hazardous, does not state or imply whether one is
                likely to fail, does not advise whether a tree should be removed or retained, does
                not comment on root, decay or structural condition, and performs no part of a tree
                risk assessment. Those are professional judgements reserved to a qualified arborist
                attending the site. It also never rules on a permit, a tree bylaw or a protected
                species. Every one of them is a hard escalation, not a judgement call.{' '}
                <Link to="/scope-limits/">The full scope limits</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The whole thing</span>
            <h2>
              Welded together, <span className="em">it is the whole operation.</span>
            </h2>
            <p className="lead">
              Visibility brings the enquiry, the desk answers and qualifies it, the record proves
              both. Each piece stands on its own and can be bought on its own.{' '}
              <Link to="/the-whole-operation/">See the whole operation</Link>.
            </p>
          </div>
          <div className="ctas reveal">
            <Link to="/the-whole-operation/" className="btn btn-primary">
              The Whole Operation <Arrow />
            </Link>
            <Link to="/coverage/" className="btn btn-ghost">
              One tree care company per market
            </Link>
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
        head={<>Nine minutes. No pitch.</>}
        sub="I will ask what a removal is worth to you, what happens to the call that lands while the crew is in the air, and where you show up when somebody nearby goes looking. First question is which market you are in, because I take one tree care company in each."
      />
    </main>
  );
}
