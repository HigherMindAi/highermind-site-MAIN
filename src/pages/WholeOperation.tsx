import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import { RANK_LOCK, LAUNCH_LOCK, RECORD_LOCK, DESK_ADD_CHANNEL } from '../lib/property';
import { ArchitectureStage, TrustStage } from '../components/Stages';
import { orgSchema, serviceSchema, faqSchema, breadcrumbs } from '../lib/schema';

const URL = '/the-whole-operation/';

const DESC =
  'Both ends of the problem in one engagement: local search visibility, AI intake on web and phone, and the timestamped record that proves both. One operator.';

const FAQS: [string, string][] = [
  [
    'Why buy the whole thing instead of one piece?',
    'Because the two failures are joined. Visibility with no intake sends more enquiries into a phone nobody answers, and intake with no visibility answers a phone that does not ring. Each piece stands on its own and can be bought on its own, and plenty of businesses should start with one. The whole operation is for the owner who already knows both ends are leaking.',
  ],
  [
    'Does the build change by trade?',
    'The order changes, not the loop. Property management starts with visibility, because an owner or a board looks a firm up before it calls. Roofing and tree care start with intake, because the owner already knows to the dollar what a missed call costs him and the phone is ringing while he is on a roof or up a tree. Your trade gets read the same way on the call.',
  ],
  [
    'What does it cost?',
    'That gets worked out on the call, on your figures rather than mine. I will not put a number on this page, because a price before a diagnosis turns a custom system into a commodity quote and anchors the conversation to a figure chosen before anything was known about your business. Nine minutes, and you will have the number.',
  ],
  [
    'How long before it is all running?',
    'Fourteen to twenty-one days to live on intake, and the visibility work is a sixty-day horizon on the agreed primary term. Nothing waits on everything else - the desk answers while the position is still being built underneath it.',
  ],
];

export default function WholeOperation() {
  return (
    <main>
      <Seo
        title="The Whole Operation - SEO + AI Intake | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[
          orgSchema(),
          serviceSchema('Local search visibility and AI intake system', DESC, URL),
          breadcrumbs([['Home', '/'], ['The Whole Operation', URL]]),
          faqSchema(FAQS),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <span className="eyebrow reveal">The flagship &middot; both ends, one engagement</span>
          <h1 className="reveal">
            Welded together, <span className="em">it is one loop.</span>
          </h1>
          <p className="sub reveal">
            Visibility brings the enquiry. The desk answers and qualifies it. The record on the
            first of the month proves both happened. Each piece stands alone and can be bought
            alone - together they close the circle, and the circle is the thing that compounds. One
            name and one build, and what changes between trades is the order, because some
            businesses are bleeding harder at the front and some at the back.
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
          <div className="sec-head left reveal">
            <span className="eyebrow">What is in it</span>
            <h2>
              Found, answered, proven, <span className="em">and kept.</span>
            </h2>
            <p className="lead">
              Nothing here is a bundle discount on things you did not want. It is the smallest set
              of parts that closes the loop, and if one of them is already working in your business
              I will tell you to keep it rather than sell you a replacement. Paid is deliberately
              not in it. The Tap is sold last, never before the organic position has moved and never
              before there is a page worth sending a click to.
            </p>
          </div>
          <div className="prod-cols">
            <div className="stg-wrap reveal">
              <ArchitectureStage />
            </div>
            <div className="vgrid reveal" style={{ gridTemplateColumns: '1fr' }}>
              <div className="vtile">
                <span className="sn">The Pin</span>
                <h3>Visibility</h3>
                <p>
                  Found first when somebody nearby goes looking. The profile rebuilt properly, the
                  signals that decide the top three, the review work - capture, responses and the
                  same details wherever your name appears - and every winnable town around you built
                  as its own ranked unit.
                </p>
              </div>
              <div className="vtile">
                <span className="sn">The Line</span>
                <h3>Intake</h3>
                <p>
                  One desk on two channels, web and phone. It answers, screens on your criteria in
                  your words, books what should be booked, and routes anything real to a person.
                </p>
              </div>
              <div className="vtile">
                <span className="sn">The Storefront</span>
                <h3>Website</h3>
                <p>
                  The page the enquiry lands on and the page somebody opens at ten at night with two
                  other names in the other tabs. It takes the routine off your phone line, and it
                  holds up when your name is being checked against the alternatives.
                </p>
              </div>
              <div className="vtile">
                <span className="sn">The Mention</span>
                <h3>AI Search Visibility</h3>
                <p>
                  The same work carried onto the surfaces that give one answer instead of ten blue
                  links. There is no second page when somebody asks an assistant, so the entity and
                  evidence work either puts you in the answer or it does not.
                </p>
              </div>
              <div className="vtile">
                <span className="sn">The Record</span>
                <h3>The proof</h3>
                <p>
                  Every contact logged with a timestamp in and a timestamp answered. The report on
                  the first of the month is the part that makes the rest arguable rather than
                  claimed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The order of build</span>
            <h2>
              Same loop, <span className="em">three different first moves.</span>
            </h2>
          </div>
          <div className="vgrid reveal">
            <div className="vtile">
              <span className="sn">The Whole Operation</span>
              <h3>Property management</h3>
              <p>
                Visibility first. An owner deciding to stop managing it himself is already
                searching, and a board looks all three names up before it decides who gets the
                package. <Link to="/property-management/">The property book</Link>.
              </p>
            </div>
            <div className="vtile">
              <span className="sn">The Whole Operation</span>
              <h3>Roofing</h3>
              <p>
                Intake first. A roofing owner knows to the dollar what a missed call costs him, and
                the call lands while he is on a roof with a nail gun running.{' '}
                <Link to="/roofing/">The roofing book</Link>.
              </p>
            </div>
            <div className="vtile">
              <span className="sn">The Whole Operation</span>
              <h3>Arborists &amp; tree care</h3>
              <p>
                Intake first, and harder. A climber sixty feet up cannot answer at all, and the
                storm that puts the phone in flood is the same storm that puts him in the canopy.{' '}
                <Link to="/arborists/">The tree care book</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="prod-cols">
            <div className="stg-wrap reveal">
              <TrustStage />
            </div>
            <div className="termpanel reveal">
              <div className="tp-label">What I put in writing</div>
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
              <p className="tp-note">{DESK_ADD_CHANNEL}</p>
              <p className="tp-note">
                One firm per trade, per market. A roofer and a property manager in the same city are
                not competitors; two roofers are. If yours is taken you hear it in the first minute
                of the call rather than after an hour.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Before you book</span>
            <h2>I would rather lose the call than the third month.</h2>
          </div>
          <div className="steps reveal">
            <div className="step">
              <div className="sn">This fits if</div>
              <ul className="plist" style={{ marginTop: 16 }}>
                <li>One won client is worth real money over a year, not a few hundred dollars</li>
                <li>Enquiries arrive after hours and nobody reliably catches them</li>
                <li>You want booked work, not a dashboard of impressions</li>
                <li>You would rather own the channel than rent leads from an aggregator</li>
              </ul>
            </div>
            <div className="step">
              <div className="sn">This does not fit if</div>
              <ul className="plist" style={{ marginTop: 16 }}>
                <li>You are shopping purely on price</li>
                <li>You would rather not know how many enquiries you are missing</li>
                <li>Your work is low-value and high-volume</li>
                <li>You want page one overnight, before anything compounds</li>
              </ul>
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
        head={<>Nine minutes. No pitch.</>}
        sub="I will have looked before I call, so the nine minutes is me showing you what I found rather than asking you for anything. If your market is taken or the arithmetic does not work, you hear it then."
      />
    </main>
  );
}
