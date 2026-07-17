import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import ServiceLadder from '../components/ServiceLadder';
import HeroField from '../components/HeroField';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP, FOUNDER } from '../lib/site';
import { LAW_FAQ } from '../lib/services';
import { orgSchema, faqSchema, personSchema } from '../lib/schema';

export default function Home() {
  return (
    <main id="top">
      <Seo
        title="AI Intake & Lead Generation for Law Firms | HigherMindAI"
        desc="An AI intake desk that answers every call and message for your law firm 24/7, screens it, and books the consultation. Live in 14 days. First page of Google Maps in 60 days or you stop paying."
        path="/"
        schema={[orgSchema(), personSchema(), faqSchema(LAW_FAQ)]}
      />

      {/* HERO */}
      <section className="hero">
        <HeroField />
        <div className="wrap">
          <div className="hero-grid solo">
            <div className="reveal">
              <span className="eyebrow">AI intake + lead generation for law firms</span>
              <h1>
                The clients you're missing{' '}
                <span className="em">are calling right now.</span>
              </h1>
              <p className="sub">
                I engineer the people searching for a lawyer to find your firm, then put an AI intake
                desk on the other end that answers every call and message, screens it, and books the
                consultation - day, night, and weekend.
              </p>
              <div className="ctas">
                <Link to="/contact" className="btn btn-primary">
                  Book a free Watershed Audit <Arrow />
                </Link>
                <a href={`tel:${PHONE_E164}`} className="btn btn-ghost">
                  Call {PHONE_DISP}
                </a>
              </div>
              <div className="undercta">
                <span><span className="t">/</span> First page in 60 days or you stop paying</span>
                <span><span className="t">/</span> Live in 14 days</span>
                <span><span className="t">/</span> Built from inside the justice system</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ANSWER-FIRST INTRO / THE PROBLEM */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">01 &middot; The problem</span>
            <h2>
              If you run a small firm,{' '}
              <span className="em">you are losing signed files to voicemail.</span>
            </h2>
          </div>
          <p className="lead reveal">
            A person who has just been injured, arrested, or served calls three firms in ten minutes
            and retains whoever picks up. The Watershed makes sure that firm is yours: it ranks you
            so they find you, and it answers, screens, and books every enquiry the moment it arrives -
            24/7. Missed intake is not a missed call. It is a lost case, and the client never knew you
            existed.
          </p>
          <div className="ctas reveal">
            <Link to="/the-watershed" className="btn btn-primary">
              See the full system <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* THE SYSTEM - 3 cards */}
      <section className="sec" id="system">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">02 &middot; The Watershed</span>
            <h2>
              Two halves, welded into one loop.{' '}
              <span className="em">Nothing gets in without being answered.</span>
            </h2>
          </div>
          <div className="vgrid">
            <Link to="/law-firm-seo" className="vtile reveal">
              <div className="vt-n">The Inflow</div>
              <h3>They find your firm</h3>
              <p>
                Managed Google ranking into the Map Pack top three, plus paid campaigns on the
                highest-intent legal searches. The person searching for a lawyer lands on you.
              </p>
            </Link>
            <Link to="/law-firm-intake" className="vtile feat reveal">
              <div className="vt-n">The Intake</div>
              <h3>You answer every one</h3>
              <p>
                A 24/7 AI intake desk on the phone and the web. It answers, runs your screening
                questions, captures the file, and books the consultation live.
              </p>
            </Link>
            <div className="vtile reveal">
              <div className="vt-n">The Report</div>
              <h3>Proof, monthly</h3>
              <p>
                Every enquiry that arrived, every one that came in after hours, and every consultation
                booked, with the times on them. You hold the answer to whether it works.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* THE FIVE THINGS THE INTAKE DESK DOES */}
      <section className="sec" id="does">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">03 &middot; What the intake desk does</span>
            <h2>Five jobs, on every enquiry, without a day off.</h2>
          </div>
          <div className="vgrid five">
            {[
              ['Answer', 'On the first ring or first message, at any hour. A real answer, not a voicemail box.'],
              ['Screen', 'Your questions, in your words - conflicts, practice area, urgency, jurisdiction.'],
              ['Capture', 'Written into your case system as a clean intake record, not a note someone means to type up later.'],
              ['Book', 'The consultation goes in your calendar while the caller is still on the line.'],
              ['Follow up', 'No-shows and cold enquiries worked automatically, so a missed connection is not a lost file.'],
            ].map(([h, b]) => (
              <div className="vtile reveal" key={h}>
                <h3>{h}</h3>
                <p>{b}</p>
              </div>
            ))}
          </div>
          <p className="note reveal">
            The intake desk performs administrative intake only. It never gives legal advice or
            implies a solicitor-client relationship - the lawyer stays the responsible licensee.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* WHO IT IS FOR */}
      <section className="sec" id="who">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">04 &middot; Who it is for</span>
            <h2>Urgent, high-value work where the first firm to answer gets retained.</h2>
          </div>
          <div className="vgrid">
            {[
              ['Personal injury', 'Someone just injured is calling from a hospital corridor. Whoever answers gets the file.'],
              ['Family & divorce', 'The call comes at night, after a decision that could not wait for business hours.'],
              ['Criminal defence', 'An arrest does not keep office hours. Neither can intake.'],
              ['Immigration', 'Deadlines, status, and fear - the firm that answers calmly at 9pm is the one retained.'],
            ].map(([h, b]) => (
              <div className="vtile reveal" key={h}>
                <h3>{h}</h3>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FOUNDER CREDIBILITY STRIP */}
      <section className="gband who">
        <div className="wrap">
          <div className="who-grid reveal">
            <div className="who-shot">
              <img
                src="/derek.webp"
                width={300}
                height={300}
                loading="lazy"
                decoding="async"
                alt={`${FOUNDER}, founder of HigherMindAI`}
              />
              <div className="who-name">
                <b>{FOUNDER}</b>
                Founder &middot; Ontario, Canada
              </div>
            </div>
            <div>
              <span className="eyebrow">Why this is built right</span>
              <h2 style={{ marginTop: 24 }}>
                Built by someone who lived in the file,{' '}
                <span className="em">not a marketer who read about it.</span>
              </h2>
              <p>
                Before HigherMindAI, I spent the better part of a decade inside the justice system -
                in courtrooms and in federal case files. I know what a real intake looks like, and why
                the first firm to pick up is usually the firm that gets retained.
              </p>
              <div className="ctas">
                <Link to="/about" className="btn btn-primary">
                  The full story <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ALSO AVAILABLE - service ladder */}
      <section className="sec" id="services">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">05 &middot; Also available</span>
            <h2>
              The Watershed leads.{' '}
              <span className="em">Each half also stands on its own.</span>
            </h2>
          </div>
          <ServiceLadder />
        </div>
      </section>

      <div className="divider" />

      {/* FAQ */}
      <section className="sec" id="faq">
        <div className="wrap narrow">
          <div className="sec-head left reveal">
            <span className="eyebrow">06 &middot; Questions</span>
            <h2>Answered plainly.</h2>
          </div>
          <FAQ items={LAW_FAQ} />
        </div>
      </section>

      <div className="divider" />

      {/* CONTACT */}
      <section className="sec" id="contact">
        <div className="wrap narrow">
          <div className="sec-head left reveal">
            <span className="eyebrow">07 &middot; Book the audit</span>
            <h2>
              See your own leak first.{' '}
              <span className="em">Fifteen minutes, no pitch.</span>
            </h2>
            <p className="lead">
              I will show you where your firm ranks across its service area, and the log of what
              happened when I contacted your firm as a client.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
