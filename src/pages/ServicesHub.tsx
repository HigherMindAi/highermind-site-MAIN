import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import ServiceLadder from '../components/ServiceLadder';
import CTAStrip from '../components/CTAStrip';
import { SERVICES } from '../lib/services';
import { breadcrumbs, servicesItemList } from '../lib/schema';

export default function ServicesHub() {
  return (
    <main>
      <Seo
        title="Ranking, Paid Growth & AI Intake for Law Firms | HigherMindAI"
        desc="The Watershed, the AI intake desk, Google ranking, paid growth and more. Lead generation welded to a 24/7 AI intake desk that answers, screens and books every enquiry for your firm."
        path="/services/"
        schema={[
          breadcrumbs([['Home', '/'], ['Services', '/services/']]),
          servicesItemList(SERVICES),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <div className="reveal">
            <div className="crumb">
              <Link to="/">Home</Link> &nbsp;/&nbsp; Services
            </div>
            <span className="eyebrow">Services</span>
            <h1>
              Everything built around <span className="em">one job</span>: a booked appointment.
            </h1>
            <p className="sub">
              The Watershed is the flagship, and it is the one I want you to take. But every piece of it
              stands on its own, and every piece can be bought on its own. If that is genuinely what the
              job needs, <b>I will tell you so on the first call.</b>
            </p>
          </div>
        </div>
      </section>

      <section className="sec-sm" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <ServiceLadder />
        </div>
      </section>

      <CTAStrip
        head={<>Not sure where to <span className="em">start?</span></>}
        sub="Tell me your business and your city. I will tell you the one move that gets you the most, fastest - and whether I can win it."
      />
    </main>
  );
}
