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
        title="Local SEO Services in the Headwaters, Ontario | HigherMindAI"
        desc="Local SEO and Google ranking services for local businesses: the Local Ranking System, Service Area Expansion, Website Build, Social Authority, and Paid Growth. Erin, Ontario."
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
            <span className="eyebrow">Local SEO services &middot; Headwaters, Ontario</span>
            <h1>
              Everything built around <span className="em">one job</span>: getting you found first.
            </h1>
            <p className="sub">
              Each service stands on its own and compounds with the rest. The Local Ranking System gets
              you into the Map Pack. The rest of the ladder widens the lead and protects it. No tiers, no
              padding - only what moves a customer closer to calling you.
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
