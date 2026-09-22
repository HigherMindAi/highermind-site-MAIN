import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import Plate from '../components/Plate';
import { Arrow } from '../components/Icons';
import {
  SCOPE_DOES, SCOPE_STOPS, CMRAO_LINE,
  PORTFOLIO_SCALING, DESK_ADD_CHANNEL, LAUNCH_LOCK,
} from '../lib/property';
import { CTA_LABEL, CTA_HREF, FOUNDATION, FLIP, LADDER_FAQ } from '../lib/ladder';
import { NightShiftStage } from '../components/Stages';
import { serviceSchema, faqSchema, breadcrumbs } from '../lib/schema';

// ---------------------------------------------------------------------------
// /property-management-intake/ - the desk, which sits inside The Foundation.
//
// The slug is kept because it ranks. The page is the desk for any local
// business, with property management as the deepest example. It tells the
// leaky story only - calls the business already gets, ringing out - and keeps
// the empty story off the page.
//
// The scope line is kept word for word: administrative intake only, never
// quotes, never commits a crew. Launch timing reads exactly LAUNCH_LOCK.
// ---------------------------------------------------------------------------

const URL = '/property-management-intake/';

const DESC =
  'An intake desk for your site and your phone line. Every enquiry and after-hours call answered, qualified and routed to a person on your own order.';

// No rate in schema. See property.ts.
const SCHEMA_DESC = DESC;

const SCOPE_LINE = 'Administrative intake only, never quotes, never commits a crew.';

const INTAKE_FAQ: [string, string][] = [
  [
    'What is an intake desk, and does it actually work?',
    'It answers your line and your site, in your business’s own words, at the hours you cannot. It is not a script read by a stranger and it is not a voicemail box with a nicer greeting. It answers the routine question from your own documents, qualifies the enquiry against criteria you set, books what should be booked, logs the contact with the time it arrived and what happened to it, and hands anything real to a person on your escalation order. Where it works is the overflow and the after-hours - the calls that currently become nothing. Where it does not is anything requiring judgement, and it is built to hand those over rather than have an opinion.',
  ],
  [
    'What happens to a call to my business at seven in the evening right now?',
    'Usually it goes to voicemail and he does not leave one. He calls the next name on the list, who answers, and that job is gone permanently - and the part that costs you is that you never learn it existed. There is no gap in your day where a missed enquiry announces itself. That is the whole reason the desk exists, and it is why I will ring your own office line after hours before the call rather than ask you what happens.',
  ],
  [
    'Does this work for a roofer, an arborist or a trade that is out on site all day?',
    'That is where it matters most. A business where the owner is on a roof, up a tree or under a sink is the business least able to answer a phone at the moment it rings, and most able to tell you to the dollar what one missed job is worth. The desk covers the hours you are working with both hands, qualifies whether it is a real job or a price shopper, and books the ones worth booking.',
  ],
  [
    'What does a property management answering service actually do after hours?',
    'Most take a name and a number and pass it on in the morning. The desk I build answers and qualifies the contact, triages it against the criteria you set, books owner enquiries straight into your calendar, logs everything with the time it arrived and what happened to it, and routes anything real to a licensed manager on your own escalation order. It is administrative intake and nothing else.',
  ],
  [
    'Can an intake desk handle condominium enquiries without breaching CMRAO rules?',
    'It can, because it never performs a licensed function. It answers from the corporation’s own documents, triages on the corporation’s own criteria, logs the contact, routes to a licensed manager, and stops. It does not interpret a declaration, decide common element versus unit, commit the corporation to a dollar, touch another owner’s file, put dates on statutory processes, or accept service.',
  ],
  [
    'Why does the phone take longer than the web?',
    LAUNCH_LOCK +
      ' The phone takes longer on purpose, because every emergency criterion and the escalation order has to be loaded and tested before a phone answers. A burst pipe at eleven at night is not a thing to get approximately right, and I would rather be a week later than answer that call wrong.',
  ],
  [
    'How many corporations does one desk cover?',
    'Every desk covers a set number of corporations, and most firms sit comfortably inside it. Past that, intake volume genuinely changes and so does what it takes to carry it - agreed in writing before go-live, never applied retroactively, and worked out against your actual portfolio on the call.',
  ],
  [
    'Do I need both the web and the phone?',
    'Not on day one. Inside The Foundation the desk runs on the web, on your phone line, or both. The web suits a business whose site form is where enquiries land. The phone suits one with a working form and a line ringing out at seven in the evening. And if you start on one, adding the second later costs exactly what it would have cost on day one. No upgrade premium, nothing renegotiated, a one-line amendment.',
  ],
  [
    'Does it replace my staff?',
    'No. It covers the hours and the overflow your staff cannot, and it hands everything real to a person. What it replaces is the voicemail box and, usually, the answering service you are already paying for - one that transcribes rather than triages and leaves no record behind.',
  ],
  LADDER_FAQ[0],
];

export default function PropertyIntake() {
  return (
    <main>
      <Seo
        title="Phone and Web Intake Desk for Local Business | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[
          serviceSchema('Phone and web intake and answering desk', SCHEMA_DESC, URL),
          breadcrumbs([
            ['Home', '/'],
            ['How It Works', '/how-it-works/'],
            ['The Desk', URL],
          ]),
          faqSchema(INTAKE_FAQ),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <span className="eyebrow reveal">The desk &middot; inside {FOUNDATION.name}</span>
          <h1 className="reveal">
            The enquiry that arrives{' '}
            <span className="em">at seven in the evening.</span>
          </h1>
          <p className="sub reveal">
            For property managers, trades and shops whose calls ring out while they are working.
            One desk answers on your site and on your phone line when you cannot - answered and
            qualified, triaged against your criteria, and routed to a person on your own escalation
            order. Every call and form counted, so you see exactly what it did.
          </p>
          <div className="ctas reveal">
            <Link to={CTA_HREF} className="btn btn-primary">
              {CTA_LABEL} <Arrow />
            </Link>
          </div>
          <p className="trustline reveal">{SCOPE_LINE} The limits are published below.</p>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------------ leaky story */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow leak">Where the calls go</span>
            <h2>
              {FLIP.leaky.hook.replace(/\.$/, '')}{' '}
              <span className="em">- and never hear about it.</span>
            </h2>
            <p className="lead">
              It goes to voicemail. He does not leave one. He calls the next firm, who answers, and
              that job is gone permanently - and you never learn it existed. The gap is widest in
              property management and the trades, because a large share of the inbound arrives
              outside office hours from people who have a problem rather than a question. The desk
              sits inside {FOUNDATION.name}: {FOUNDATION.line.toLowerCase()}
            </p>
          </div>
          <div className="prod-cols" style={{ marginBottom: 36 }}>
            <div className="stg-wrap reveal">
              <NightShiftStage />
            </div>
            <div className="vcard reveal">
              <div className="vlab">Same desk, either way in</div>
              <div className="vbig">
                Same knowledge, same triage criteria, same escalation order, same log - so a
                caller gets the same answer whether they type it or say it.{' '}
                <b>This is the difference between a contact and a voicemail.</b>
              </div>
            </div>
          </div>
          <div className="steps">
            <div className="step reveal">
              <div className="sn">On the web</div>
              <h3>The desk on your site</h3>
              <p>
                Sits on your site and one more messaging channel. Answers from your own documents,
                qualifies the enquiry, books the conversation, and hands you the transcript.
              </p>
            </div>
            <div className="step reveal">
              <div className="sn">On the phone</div>
              <h3>The desk on your line</h3>
              <p>
                Answers the line you cannot get to, triages against your criteria, logs the call,
                and routes anything real to a person on your escalation order. Longer to launch, on
                purpose, because the emergency criteria are tested before a phone answers.
              </p>
            </div>
          </div>
          <p className="lead reveal">{LAUNCH_LOCK}</p>
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
              A desk that does not know where it stops is a liability rather than a service.{' '}
              <b>{SCOPE_LINE}</b> I would rather put the limits on a public page than have you
              discover them later.
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
            <div className="vlab">Licensed and regulated trades</div>
            <div className="vbig">{CMRAO_LINE}</div>
          </div>
          <p className="lead reveal">
            The same rule holds wherever the work is regulated. The desk never tells a caller
            whether damage is covered by insurance, never quotes a price, and never assesses whether
            a tree is hazardous - it takes the contact and routes it. I put the limits in writing
            before being asked, because it is the question every serious business asks third and
            because the answer is the differentiator rather than the disclaimer.{' '}
            <Link to="/scope-limits/">Every limit is published here</Link>.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* --------------------------------------------------- what changes */}
      <section className="sec">
        <div className="wrap">
          <div className="chap" style={{ marginBottom: 36 }}>
            <div className="chap-copy reveal">
              <div className="sec-head left">
                <span className="eyebrow">On the ground</span>
                <h2>What actually changes.</h2>
                <p className="lead">
                  The calls you already get stop leaking. More of them turn into booked work, and
                  you get your evenings back from the callback list.
                </p>
              </div>
            </div>
            <div className="chap-media reveal">
              <Plate image="vProperty" filmKey="vProperty" ratio="4 / 3" scrim="soft" />
            </div>
          </div>
          <div className="vgrid">
            <div className="vtile reveal">
              <h3>The after-hours call stops being a message</h3>
              <p>
                It becomes a triaged contact with a route out, instead of a name on a pad that
                somebody means to type up in the morning.
              </p>
            </div>
            <div className="vtile reveal">
              <h3>The enquiry stops competing with your day</h3>
              <p>
                It is qualified and booked before you are down off the roof or out of the
                walkthrough you are standing in. You arrive at a calendar entry rather than a
                callback list.
              </p>
            </div>
            <div className="vtile reveal">
              <h3>You see what it did</h3>
              <p>
                Every call and form counted, with the time it arrived and what happened to it, so
                what the desk did stops being a thing anyone claims.{' '}
                <Link to="/the-record/">How that is evidenced</Link>.
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

      {/* ------------------------------------------------- channels + terms */}
      <section className="sec" id="channels">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Inside {FOUNDATION.name}</span>
            <h2>The web, the phone, or both. And you can add the other later.</h2>
          </div>
          <div className="prod-cols">
            <div className="termpanel reveal">
              <div className="tp-label">How the desk runs</div>
              <ul className="tp-list">
                <li>
                  <b>On the web</b>
                  <br />
                  <span style={{ opacity: 0.62 }}>
                    Answers on your site, including nights and weekends.
                  </span>
                </li>
                <li>
                  <b>On the phone</b>
                  <br />
                  <span style={{ opacity: 0.62 }}>
                    Answers your line when you cannot. The emergency criteria and escalation order
                    are loaded and tested before a phone answers.
                  </span>
                </li>
                <li>
                  <b>Both</b>
                  <br />
                  <span style={{ opacity: 0.62 }}>The whole desk, one build, one record.</span>
                </li>
              </ul>
              <p className="tp-note">{DESK_ADD_CHANNEL}</p>
            </div>
            <div className="termpanel reveal">
              <div className="tp-label">Scaling and the launch</div>
              <ul className="tp-list">
                <li>{PORTFOLIO_SCALING}</li>
                <li>
                  <b>The Launch Lock.</b> {LAUNCH_LOCK}
                </li>
              </ul>
              <p className="tp-note">
                Each step has a fixed price, said plainly on the nine minutes once I have seen what
                you have. Usage is included to a set monthly allowance and charged at cost above it -
                I do not mark up usage.
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
        sub="On a nine-minute call I will tell you what I found when I rang your own line after hours, what an enquiry meets when it lands on your site, and which step fits."
      />
    </main>
  );
}
