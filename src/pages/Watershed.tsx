import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import { LAW_FAQ } from '../lib/services';
import { orgSchema, serviceSchema, faqSchema, breadcrumbs } from '../lib/schema';

const URL = '/the-watershed';

const WATERSHED_DESC =
  'A done-for-you system for law firms: engineered demand so clients find the firm, plus a 24/7 AI intake desk that answers, screens, captures, and books consultations. Live in 14 days, first page of Google Maps in 60 days or you stop paying.';

export default function Watershed() {
  return (
    <main>
      <Seo
        title="The Watershed: AI Intake + Ranking for Law Firms | HigherMindAI"
        desc={WATERSHED_DESC}
        path={URL}
        schema={[
          orgSchema(),
          serviceSchema('The Watershed', WATERSHED_DESC, URL),
          breadcrumbs([['Home', '/'], ['The Watershed', URL]]),
          faqSchema(LAW_FAQ),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <span className="eyebrow reveal">The Watershed - the full system</span>
          <h1 className="reveal">
            I make the firm easy to find. <span className="em">Then I answer the phone.</span>
          </h1>
          <p className="sub reveal">
            The Watershed is a done-for-you system for law firms with two halves welded into one
            loop: I engineer the people searching for a lawyer to find your firm, and I put a 24/7
            AI intake desk on the other end that answers every call and message, screens it, captures
            it into your case system, and books the consultation. A person in a legal crisis calls
            three firms and retains whoever answers first. After five, that is never the small firm.
            The Watershed is what answers.
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
            First page of Google Maps in 60 days or you stop paying &middot; Live in 14 days &middot;
            Built by someone who spent a decade inside the justice system.
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The two halves</span>
            <h2>
              Getting found is half a system. <span className="em">On its own it is a phone
              ringing in an empty office.</span>
            </h2>
          </div>
          <div className="vgrid">
            <div className="vtile reveal">
              <div className="vt-n">The Inflow</div>
              <h3>They find your firm first</h3>
              <p>
                Managed Google ranking and, where you want speed, paid campaigns on the most
                expensive keywords in legal search - engineered so the person searching for a lawyer
                lands on your firm, not the national brand three towns over.{' '}
                <Link to="/law-firm-seo">See the ranking half</Link>.
              </p>
            </div>
            <div className="vtile feat reveal">
              <div className="vt-n">The Intake</div>
              <h3>Every enquiry answered, 24/7</h3>
              <p>
                An AI intake desk on the phone and the web that answers the moment an enquiry
                arrives, runs your screening questions, captures the file, and books the consultation
                live - day, night, and weekend.{' '}
                <Link to="/law-firm-intake">See the intake half</Link>.
              </p>
            </div>
            <div className="vtile reveal">
              <div className="vt-n">The Report</div>
              <h3>Proof on the first of the month</h3>
              <p>
                Every enquiry that arrived, every one that came in after hours, and every consultation
                booked, with the times on them. The work never goes invisible - you hold the answer
                to whether it is working.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec" id="does">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">What the intake desk does</span>
            <h2>Five jobs, on every enquiry, without a day off.</h2>
          </div>
          <div className="vgrid five">
            {[
              ['Answer', 'On the first ring or the first message, at any hour. The caller reaches a real answer, not a voicemail box.'],
              ['Screen', 'Your screening questions, in your words. Conflicts, practice area, urgency, jurisdiction - the file is qualified before it reaches you.'],
              ['Capture', 'The enquiry is written into your case-management system as a clean intake record, not a sticky note someone means to type up later.'],
              ['Book', 'The consultation goes into your calendar while the caller is still on the line, before they think to try the next firm.'],
              ['Follow up', 'No-shows and cold enquiries get worked automatically, so a missed connection does not quietly become a lost file.'],
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

      <section className="sec" id="who">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Who it is for</span>
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

      <section className="sec" id="guarantee">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The guarantee</span>
            <h2>Two locks. I carry the risk, not you.</h2>
          </div>
          <div className="vgrid">
            <div className="vtile feat reveal">
              <div className="vt-n">The Rank Lock</div>
              <h3>First page in 60 days</h3>
              <p>
                Or you stop paying the monthly and I keep working at no charge until you are there.
                The clock starts the day I have what I need, not the day you sign.
              </p>
            </div>
            <div className="vtile reveal">
              <div className="vt-n">The Launch Lock</div>
              <h3>Live in 14 days</h3>
              <p>Or the build fee comes back in full. No conditions, no argument, no small print.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec" id="faq">
        <div className="wrap narrow">
          <div className="sec-head left reveal">
            <span className="eyebrow">Questions</span>
            <h2>Answered plainly.</h2>
          </div>
          <FAQ items={LAW_FAQ} />
        </div>
      </section>

      <CTAStrip
        head={<>See exactly what your firm is missing.</>}
        sub="I will run a free Watershed Audit - where you rank across your service area, and a log of what happened when I called your firm as a client. Fifteen minutes, no pitch."
      />
    </main>
  );
}
