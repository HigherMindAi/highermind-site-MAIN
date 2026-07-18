import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import { PHONE_E164, PHONE_DISP, EMAIL } from '../lib/site';
import { LAW_FAQ } from '../lib/services';
import { faqSchema, breadcrumbs, orgSchema } from '../lib/schema';

const URL = '/contact';

const DESC =
  'Book a call with HigherMindAI. Phone 647-242-5800, or send a message. AI client intake, AI search visibility and Google ranking - live in 14 days.';

export default function Contact() {
  return (
    <main>
      <Seo
        title="Contact - Book a Call | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[
          orgSchema(),
          faqSchema(LAW_FAQ),
          breadcrumbs([['Home', '/'], ['Contact', URL]]),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <span className="eyebrow reveal">Contact</span>
          <h1 className="reveal">
            Book a call. <span className="em">Fifteen minutes, no pitch.</span>
          </h1>
          <p className="sub reveal">
            I will show you where your firm ranks across its service area, and the log of what
            happened when I contacted your firm as a client - the call, the chat, the form, and how
            long it took anyone to come back. You will know exactly how much work is draining to the
            firm that answered first, before you decide anything.
          </p>
          <div className="contact-lines reveal">
            <a href={`tel:${PHONE_E164}`}>{PHONE_DISP}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec" id="contact">
        <div className="wrap narrow">
          <ContactForm />
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap narrow">
          <div className="sec-head left reveal">
            <span className="eyebrow">Common questions</span>
            <h2>Answered plainly.</h2>
          </div>
          <FAQ items={LAW_FAQ} />
        </div>
      </section>
    </main>
  );
}
