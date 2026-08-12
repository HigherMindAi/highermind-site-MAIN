import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import {
  SCOPE_DOES, SCOPE_STOPS, CMRAO_LINE, PRICE, PRICE_FOOTNOTE,
  PORTFOLIO_SCALING, LAUNCH_LOCK, LAUNCH_WINDOW,
} from '../lib/property';
import { NightShiftStage } from '../components/Stages';
import { serviceSchema, faqSchema, breadcrumbs } from '../lib/schema';

const URL = '/property-management-intake';

const DESC =
  'Cortex on your site, The Operator on your line. Every owner enquiry and after-hours call answered and qualified, triaged on your criteria, logged and routed.';

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
    'Five, on every desk tier. Past that, intake volume genuinely changes and so does the price - a modest per-corporation monthly plus a one-time charge to load that corporation\u2019s documents. The figures are published in the pricing block on this page. Any increase is agreed in writing before go-live, and never applied retroactively.',
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
        title="Property Management Answering Service & AI Intake | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[
          serviceSchema('Property Management AI Intake and Answering Service', SCHEMA_DESC, URL),
          breadcrumbs([
            ['Home', '/'],
            ['Property Management', '/property-management'],
            ['Property Management Intake', URL],
          ]),
          faqSchema(INTAKE_FAQ),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <span className="eyebrow reveal">The Intake - the half that answers</span>
          <h1 className="reveal">
            The enquiry that arrives{' '}
            <span className="em">at seven in the evening.</span>
          </h1>
          <p className="sub reveal">
            It goes to voicemail. He does not leave one. He calls the next firm, who answers, and
            that door is gone permanently - and you never learn it existed. Cortex answers on your
            site and The Operator answers your line. Answered and qualified, triaged against your
            criteria, logged with a timestamp, and routed to a licensed manager.
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
            <span className="eyebrow">Two components</span>
            <h2>
              Ranking creates enquiries.{' '}
              <span className="em">It does not answer them.</span>
            </h2>
            <p className="lead">
              In this industry that gap is wider than in almost any other, because a large share of
              your inbound arrives outside office hours from people who have a problem rather than a
              question.
            </p>
          </div>
          <div className="prod-cols" style={{ marginBottom: 36 }}>
            <div className="stg-wrap reveal">
              <NightShiftStage />
            </div>
            <div className="vcard reveal">
              <div className="vlab">The shape of the problem</div>
              <div className="vbig">
                A large share of your inbound lands outside office hours, from people who have a
                problem rather than a question. <b>The desk is the difference between a contact and a
                voicemail.</b>
              </div>
            </div>
          </div>
          <div className="steps">
            <div className="step reveal">
              <div className="sn">Component</div>
              <h3>Cortex</h3>
              <p>
                The chat desk. Sits on your site, answers from your own documents, qualifies an owner
                enquiry, books the conversation, and hands you a transcript. Live in 14 days.
              </p>
            </div>
            <div className="step reveal">
              <div className="sn">Component</div>
              <h3>The Operator</h3>
              <p>
                The voice desk. Answers the line you cannot get to, triages against your criteria,
                logs it with a timestamp, and routes anything real to a licensed manager. Live in 21
                days.
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
                <Link to="/property-management/the-record">See The Record</Link>.
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

      {/* ------------------------------------------------------------- pricing */}
      <section className="sec" id="pricing">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">What it costs</span>
            <h2>Compare it to what the answering service charges.</h2>
          </div>
          <div className="prod-cols">
            <div className="termpanel reveal">
              <div className="tp-label">The desk</div>
              <ul className="tp-list">
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
                    Both together, below the sum of the parts. {PRICE.deskWholeSetup}.
                  </span>
                </li>
              </ul>
              <p className="tp-note">{PRICE_FOOTNOTE}</p>
            </div>
            <div className="termpanel reveal">
              <div className="tp-label">Portfolio scaling and the launch window</div>
              <ul className="tp-list">
                <li>{PORTFOLIO_SCALING}</li>
                <li>
                  <b>The Launch Lock.</b> {LAUNCH_LOCK}
                </li>
              </ul>
              <p className="tp-note">
                Usage is included to $50 a month and charged at cost above that. I do not mark up
                usage.
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
