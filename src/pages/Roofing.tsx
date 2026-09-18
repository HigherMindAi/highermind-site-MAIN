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

const URL = '/roofing/';

const DESC =
  'Local SEO and AI intake for roofing companies. Found first when somebody nearby needs a roof, and every call answered and qualified while you are up on one.';

const FAQS: [string, string][] = [
  [
    'What happens to a call that comes in while I am on a roof?',
    'It gets answered and qualified. The desk takes the job type, the town, whether it is urgent and whether it is a repair or a replacement, books the site visit into your calendar if it should be booked, and logs the whole thing with a timestamp in and a timestamp answered. You come down off the roof to booked work rather than four voicemails and a guess about which one was real.',
  ],
  [
    'Will it quote a price or promise a crew?',
    'No, and that boundary is written into the agreement rather than promised on a call. It never quotes a price, never estimates a job, never commits a crew to a date or time you have not authorised, never promises an attendance window, never states or implies whether damage is covered by insurance, never contacts a carrier or adjuster, and never discusses, absorbs, rebates or waives a deductible. Several states regulate roofers on exactly that point and treat deductible rebating as insurance fraud. Every one of those is a hard escalation to a person. The full list is on the scope limits page.',
  ],
  [
    'When should I start if I want to be found next season?',
    'Now, and the arithmetic is the whole argument. The season closes in November and ranking takes sixty days on the agreed primary term. Build it in the quiet and you open in April already found, rather than starting the sixty-day clock in the first week of the busiest month you have.',
  ],
  [
    'I already buy leads. Why change?',
    'A purchased lead is often sold to two of your competitors as well, costs the same every month forever, and stops dead the day you stop paying. A ranked position compounds and stays yours. You do not have to stop buying leads to start owning the position - most roofers run both for the first season and let the numbers decide.',
  ],
];

export default function Roofing() {
  return (
    <main>
      <Seo
        title="Local SEO & AI Intake for Roofers | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[
          orgSchema(),
          serviceSchema('Local search marketing and AI intake for roofing companies', DESC, URL),
          breadcrumbs([['Home', '/'], ['Roofing', URL]]),
          faqSchema(FAQS),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <span className="eyebrow reveal">Roofing</span>
          <h1 className="reveal">
            The two ends where <span className="em">a job gets lost.</span>
          </h1>
          <p className="sub reveal">
            They never find you, or nobody answers. A roof is not watertight in three places and
            open in the fourth, and neither is the thing that brings you work. The homeowners who
            never found you do not complain, and the ones who called while you were on a roof do
            not call back - so it is invisible from the inside, which is why it runs for years in
            companies that are otherwise very well run.
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
                  Every call answered and qualified, <span className="em">while you are on a roof.</span>
                </h2>
                <p className="lead">
                  Nobody is thirty feet up with a nail gun running and answering the phone at the
                  same time. That is not a discipline problem, it is physics - and it means your
                  busiest days are the days you miss the most work. One desk answers on two
                  channels, the web and the phone. It asks what kind of job, which town and whether
                  it is urgent, books the site visit, and routes the real emergencies to whoever is
                  on call. {LAUNCH_WINDOW}.
                </p>
              </div>
              <ul className="plist reveal">
                <li>
                  Administrative intake only. It routes to a person and stops - the published scope
                  limits say exactly where.
                </li>
                <li>
                  Never quotes, never estimates, never commits a crew to a date you have not
                  authorised, never states whether damage is covered, never touches a deductible.
                </li>
                <li>
                  Most of what arrives is answerable without you: do you do flat roofs, do you work
                  in my town, how far out are you booking, do you offer financing. Those do not need
                  an estimator. They need something that replies.
                </li>
                <li>A form is a filing cabinet, not a dispatcher. A request that lands at eight on a Friday sits until Monday, and by Monday he has had two roofers out.</li>
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
                  Found first when somebody nearby <span className="em">goes looking for a roofer.</span>
                </h2>
                <p className="lead">
                  A homeowner with water coming through a ceiling does not scroll. He taps the
                  first three companies on the map and takes whoever answers, and if you are the
                  fourth pin you were never in that job at all. It never shows up anywhere you would
                  look for it either, because a call you never received does not appear in your CRM.
                  The companies beating you to it are not better roofers. They are higher on a
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
              angry, so a company that does two hundred good roofs a year can carry a wall
              describing the three that went wrong. A homeowner cannot tell a bad roofer from a good
              roofer with no system for asking, and he will not investigate. He will call the other
              two.
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
                A slow site with four stock photos of a roof reads as a company that is small and
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
              first of the month. It is the difference between telling a homeowner you are
              responsive and showing an insurer, a supplier or a builder a number.{' '}
              <Link to="/the-record/">See The Record</Link>.
            </p>
          </div>
          <div className="prod-cols">
            <RecordTicker variant="mixed" />
            <div className="termpanel reveal">
              <div className="tp-label">The season note</div>
              <p className="tp-note">
                The season closes in November. Ranking takes sixty days on the agreed primary term.
                Those two facts only fit together one way: build it in the quiet, and open in April
                already found. A roofer who starts in May starts the clock in the busiest month he
                has, and pays for the wait twice.
              </p>
              <div className="tp-label" style={{ marginTop: 26 }}>
                The boundary
              </div>
              <p className="tp-note">
                The desk never quotes a price, never estimates a job, never commits a crew to a
                date you have not authorised, never promises an attendance window, never states or
                implies whether damage is covered by insurance, never contacts a carrier or an
                adjuster, and never discusses, absorbs, rebates or waives a deductible. Several
                states regulate roofers on exactly that last point and treat deductible rebating as
                insurance fraud. Every one of them is a hard escalation, not a judgement call.{' '}
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
              One roofer per market
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
        sub="I will ask what a roof is worth to you, what happens to a call that lands at seven in the evening, and where you show up when somebody nearby goes looking. First question is which market you are in, because I take one roofer in each."
      />
    </main>
  );
}
