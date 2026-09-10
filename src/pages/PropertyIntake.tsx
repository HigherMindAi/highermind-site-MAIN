import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import {
  SCOPE_DOES, SCOPE_STOPS, CMRAO_LINE,
  PORTFOLIO_SCALING, DESK_ADD_CHANNEL, LAUNCH_LOCK, LAUNCH_WINDOW,
} from '../lib/property';
import { NightShiftStage } from '../components/Stages';
import { serviceSchema, faqSchema, breadcrumbs } from '../lib/schema';

const URL = '/property-management-intake/';

const DESC =
  'One intake desk on your site and on your line. Every enquiry and after-hours call answered and qualified, triaged on your criteria, logged and routed to a person.';

// No rate in schema. See property.ts.
const SCHEMA_DESC = DESC;

const INTAKE_FAQ: [string, string][] = [
  [
    'What does a property management answering service actually do after hours?',
    'Most take a name and a number and pass it on in the morning. The desk I build answers and qualifies the contact, triages it against the criteria you set, books owner enquiries straight into your calendar, logs everything with a timestamp in and a timestamp answered, and routes anything real to a licensed manager on your own escalation order. It is administrative intake and nothing else.',
  ],
  [
    'Can an AI intake desk handle condominium enquiries without breaching CMRAO rules?',
    'It can, because it never performs a licensed function. It answers from the corporation\u2019s own documents, triages on the corporation\u2019s own criteria, logs the contact, routes to a licensed manager, and stops. It does not interpret a declaration, decide common element versus unit, commit the corporation to a dollar, touch another owner\u2019s file, put dates on statutory processes, or accept service.',
  ],
  [
    'Why does voice take 21 days when chat takes 14?',
    'Because every corporation\u2019s emergency criteria and escalation order has to be loaded and tested before a phone answers. A burst pipe at eleven at night is not a thing to get approximately right. I would rather be a week later than answer that call wrong, and if it is not live inside the window the launch half of the build is not owed.',
  ],
  [
    'How many corporations does one desk cover?',
    'Every desk tier covers a set number of corporations, and most firms sit comfortably inside it. Past that, intake volume genuinely changes and so does what it takes to carry it - agreed in writing before go-live, never applied retroactively, and worked out against your actual portfolio on the call.',
  ],
  [
    'Do I have to take both channels?',
    'No. There are three ways to buy this and all three are real products: web only, voice only, or both. Web only suits a business whose site form is where enquiries land. Voice only suits one with a working form and a phone ringing out at seven in the evening - that used to have nothing to buy, and now it does. And if you start on one, adding the second later costs exactly what it would have cost on day one. No upgrade premium, nothing renegotiated, a one-line amendment.',
  ],
  [
    'Does it replace my staff?',
    'No. It covers the hours and the overflow your staff cannot, and it hands everything real to a person. What it replaces is the voicemail box and, usually, the answering service you are already paying for - one that transcribes rather than triages and leaves no record behind.',
  ],
];

export default function PropertyIntake() {
  return (
    <main>
      <Seo
        title="AI Phone and Web Intake for Local Businesses | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[
          serviceSchema('AI phone and web intake and answering service', SCHEMA_DESC, URL),
          breadcrumbs([
            ['Home', '/'],
            ['Property Management', '/property-management/'],
            ['Property Management Intake', URL],
          ]),
          faqSchema(INTAKE_FAQ),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <span className="eyebrow reveal">Intake &middot; The Line</span>
          <h1 className="reveal">
            The enquiry that arrives{' '}
            <span className="em">at seven in the evening.</span>
          </h1>
          <p className="sub reveal">
            It goes to voicemail. He does not leave one. He calls the next firm, who answers, and
            that job is gone permanently - and you never learn it existed. One desk answers on
            your site and on your line. Answered and qualified, triaged against your criteria,
            logged with a timestamp, and routed to a person on your own escalation order.
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
            Answered and qualified &middot; {LAUNCH_WINDOW} &middot; Administrative intake only, and
            the limits are published below.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ---------------------------------------------------------- components */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">One desk, three ways in</span>
            <h2>
              Ranking creates enquiries.{' '}
              <span className="em">It does not answer them.</span>
            </h2>
            <p className="lead">
              The gap is widest in the trades and service businesses, because a large share of your
              inbound arrives outside office hours from people who have a problem rather than a
              question.
            </p>
          </div>
          <div className="prod-cols" style={{ marginBottom: 36 }}>
            <div className="stg-wrap reveal">
              <NightShiftStage />
            </div>
            <div className="vcard reveal">
              <div className="vlab">Same desk, either way in</div>
              <div className="vbig">
                Same knowledge, same triage criteria, same escalation order, same log - so an owner
                gets the same answer whether he types it or says it.{' '}
                <b>This is the difference between a contact and a voicemail.</b>
              </div>
            </div>
          </div>
          <div className="steps">
            <div className="step reveal">
              <div className="sn">Channel</div>
              <h3>The web channel</h3>
              <p>
                Sits on your site and one more messaging channel. Answers from your own documents,
                qualifies the enquiry, books the conversation, and hands you the transcript. Live in
                14 days.
              </p>
            </div>
            <div className="step reveal">
              <div className="sn">Channel</div>
              <h3>The voice channel</h3>
              <p>
                Answers the line you cannot get to, triages against your criteria, logs it with a
                timestamp, and routes anything real to a person on your escalation order. Live in 21
                days, longer on purpose. It stands on its own - a business with a working form and a
                phone ringing out in the evening can buy this and nothing else.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* --------------------------------------------------------- the scope */}
      <section className="sec" id="scope">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The scope line, in writing, before you ask for it</span>
            <h2>What the desk does, and exactly where it stops.</h2>
            <p className="lead">
              A system that does not know where it stops is a liability rather than a service. This
              is administrative intake and nothing else, and I would rather put the limits on a
              public page than have you discover them later.
            </p>
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
          <div className="vcard reveal" style={{ marginTop: 32 }}>
            <div className="vlab">Licensing</div>
            <div className="vbig">{CMRAO_LINE}</div>
          </div>
          <p className="note reveal">
            I put that in writing before being asked because it is the question every serious firm
            asks third, and because the answer is the differentiator rather than the disclaimer.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* --------------------------------------------------- what changes */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">On the ground</span>
            <h2>What actually changes.</h2>
          </div>
          <div className="vgrid">
            <div className="vtile reveal">
              <h3>The after-hours call stops being a message</h3>
              <p>
                It becomes a logged, triaged contact with a time on it and a route out, instead of a
                name on a pad that somebody means to type up in the morning.
              </p>
            </div>
            <div className="vtile reveal">
              <h3>The owner enquiry stops competing with your day</h3>
              <p>
                It is qualified and booked before you have finished the walkthrough you are standing
                in. You arrive at a calendar entry rather than a callback list.
              </p>
            </div>
            <div className="vtile reveal">
              <h3>Your after-hours line becomes reviewable</h3>
              <p>
                Every contact carries a timestamp in and a timestamp answered, which means
                responsiveness stops being a thing you claim and becomes a number.{' '}
                <Link to="/the-record/">See The Record</Link>.
              </p>
            </div>
          </div>
          <div className="vcard reveal" style={{ marginTop: 32 }}>
            <div className="vlab">The budget already exists</div>
            <div className="vbig">
              If you are paying an answering service or a call centre for overnight coverage, this is
              not a new line on your P&amp;L. It is{' '}
              <b>a better version of one you already approved</b> - one that triages instead of
              transcribes, and that leaves a record behind.
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------- channels + guarantees */}
      <section className="sec" id="channels">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Three ways to buy it</span>
            <h2>Web, voice, or both. And you can add the other later.</h2>
          </div>
          <div className="prod-cols">
            <div className="termpanel reveal">
              <div className="tp-label">Three ways to buy it</div>
              <ul className="tp-list">
                <li>
                  <b>The web channel</b>
                  <br />
                  <span style={{ opacity: 0.62 }}>
                    Answers on your site, day and night. Live in 14 days.
                  </span>
                </li>
                <li>
                  <b>The voice channel</b>
                  <br />
                  <span style={{ opacity: 0.62 }}>
                    Answers your line. Live in 21 days, because the emergency criteria and
                    escalation order have to be loaded and tested before a phone answers.
                  </span>
                </li>
                <li>
                  <b>Both channels</b>
                  <br />
                  <span style={{ opacity: 0.62 }}>The whole desk, one build, one record.</span>
                </li>
              </ul>
              <p className="tp-note">
                <b>All three are real products.</b> {DESK_ADD_CHANNEL}
              </p>
            </div>
            <div className="termpanel reveal">
              <div className="tp-label">Scaling and the launch window</div>
              <ul className="tp-list">
                <li>{PORTFOLIO_SCALING}</li>
                <li>
                  <b>The Launch Lock.</b> {LAUNCH_LOCK}
                </li>
              </ul>
              <p className="tp-note">
                No rate on this page on purpose. What the desk costs depends on how much it has to
                carry, and that gets worked out on the call against your own numbers rather than
                guessed at here. Usage is included to a set monthly allowance and charged at cost
                above it - I do not mark up usage.
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
          <FAQ items={INTAKE_FAQ} />
        </div>
      </section>

      <CTAStrip
        head={<>Find out what happens to a call at seven in the evening.</>}
        sub="On a nine-minute call I will tell you what I found when I rang your office line after hours, what an owner enquiry meets when it lands on your site, and what I would build."
      />
    </main>
  );
}
