import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import { serviceSchema, faqSchema, breadcrumbs } from '../lib/schema';

const URL = '/law-firm-intake';

const DESC =
  'An AI intake desk that answers every call and message for your law firm 24/7, screens it, captures it into your case system, and books the consultation. Live in 14 days.';

const INTAKE_FAQ: [string, string][] = [
  [
    'How can a law firm stop missing new client calls after hours?',
    'An AI intake desk answers every call and web message 24/7, screens it against the firm\u2019s criteria, and books the consultation - so the person who calls at 2am is captured instead of lost to the next firm.',
  ],
  [
    'Does an AI intake desk give legal advice?',
    'No. It performs administrative intake only - it answers, screens, captures the enquiry into the firm\u2019s case-management system, and books a consultation. It never gives legal advice or implies a solicitor-client relationship; the lawyer stays the responsible licensee.',
  ],
  [
    'Can AI answer a law firm\u2019s phone and book consultations?',
    'Yes. A voice intake desk answers on the first ring day or night, runs the firm\u2019s screening questions, checks the calendar, and books the consultation live on the call.',
  ],
  [
    'What if it does not know the answer to something?',
    'It captures the enquiry and hands off to a human rather than inventing an answer. It is built to book the consultation, not to practise law.',
  ],
];

export default function LawFirmIntake() {
  return (
    <main>
      <Seo
        title="AI Intake Desk for Law Firms - Answer Every Call | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[
          serviceSchema('AI Intake Desk for Law Firms', DESC, URL),
          breadcrumbs([['Home', '/'], ['AI Intake Desk', URL]]),
          faqSchema(INTAKE_FAQ),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <span className="eyebrow reveal">The intake half of The Watershed</span>
          <h1 className="reveal">
            The call that comes in at 9pm <span className="em">goes to whoever answers.</span>
          </h1>
          <p className="sub reveal">
            An AI intake desk answers every call and web message for your firm 24/7, screens it
            against your criteria, captures it into your case system, and books the consultation -
            so the person who calls after hours is captured instead of lost to the next firm on the
            list. A person in a legal crisis retains whoever picks up first. This is what picks up.
          </p>
          <div className="ctas reveal">
            <Link to="/contact" className="btn btn-primary">
              Book a free Watershed Audit <Arrow />
            </Link>
            <a href={`tel:${PHONE_E164}`} className="btn btn-ghost">
              Call {PHONE_DISP}
            </a>
          </div>
          <p className="trustline reveal">
            Live in 14 days &middot; Answers on the phone and the web &middot; Administrative intake
            only - never legal advice.
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">What it does</span>
            <h2>Answer, screen, capture, book, follow up - on every enquiry.</h2>
          </div>
          <div className="vgrid">
            {[
              ['It answers from your firm', 'Built on your practice areas, your process, your screening questions - not a generic script. When it does not know, it hands off to a human instead of guessing.'],
              ['It screens before it books', 'Conflicts, practice area, urgency, jurisdiction. The people who are not a fit get a courteous close. The people who are get a slot in your calendar while they are still on the line.'],
              ['It never sleeps and never gets busy', 'Nine at night, Saturday morning, or while your paralegal is already on another call. Every enquiry answered the moment it arrives.'],
            ].map(([h, b]) => (
              <div className="vtile reveal" key={h}>
                <h3>{h}</h3>
                <p>{b}</p>
              </div>
            ))}
          </div>
          <p className="note reveal">
            The intake desk performs administrative intake only. It does not give legal advice or
            create a solicitor-client relationship. The responsible lawyer stays the licensee at all
            times.
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
          <FAQ items={INTAKE_FAQ} />
        </div>
      </section>

      <CTAStrip
        head={<>Hear it answer your firm's phone.</>}
        sub="Book a free Watershed Audit and I will show you the log of what happened when I called your firm as a client - the calls, the chat, the form, and how long it took anyone to come back."
      />
    </main>
  );
}
