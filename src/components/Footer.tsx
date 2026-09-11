import { Link } from 'react-router-dom';
import {
  BRAND, BIZ_NAME, PHONE_E164, PHONE_DISP, EMAIL, LOCALITY, REGION,
} from '../lib/site';
import { LADDER, serviceHref } from '../lib/services';
import { Wordmark } from './Icons';
import { LOCATIONS_HUB } from '../lib/cities';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-grid">
          <div className="about">
            <Link to="/" className="mark">
              <Wordmark />
            </Link>
            <p>
              I get you found when somebody nearby goes looking, answer and qualify every enquiry
              that lands, then hand you a record of what came in and how fast it was answered.
              One system, one operator, one loop.
            </p>
            <div className="op">
              <img
                src="/derek-sm.webp"
                width={46}
                height={46}
                loading="lazy"
                decoding="async"
                alt="Derek, founder, HigherMindAI"
              />
              <div>
                <b>Derek</b>
                Founder &middot; Ontario, Canada
              </div>
            </div>
          </div>
          <div className="foot-links">
            <div className="foot-col">
              <h4>Who I help</h4>
              <Link to="/property-management/">Property management</Link>
              <Link to="/roofing/">Roofing</Link>
              <Link to="/arborists/">Arborists &amp; tree care</Link>
              <Link to="/condominium-management-marketing/">Condominium boards</Link>
              <Link to="/who-i-help/">Who I help</Link>
            </div>
            <div className="foot-col">
              <h4>Services</h4>
              {LADDER.map((s) => (
                <Link key={s.slug} to={serviceHref(s)}>
                  {s.name}
                </Link>
              ))}
              <Link to="/services/">Every service</Link>
            </div>
            <div className="foot-col">
              <h4>Company</h4>
              <Link to="/about/">About</Link>
              <Link to="/coverage/">Coverage</Link>
              <Link to={LOCATIONS_HUB}>Cities I rank in</Link>
              <Link to="/the-record/">The Record</Link>
              <Link to="/scope-limits/">Where the desk stops</Link>
              <Link to="/book/">Book a call</Link>
            </div>
            <div className="foot-col">
              <h4>Contact</h4>
              <a href={`tel:${PHONE_E164}`}>{PHONE_DISP}</a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <span>{LOCALITY}, {REGION}, Canada</span>
              <Link to="/book/">Book a call</Link>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span className="nap">
            {BIZ_NAME} &nbsp;&middot;&nbsp; {LOCALITY}, {REGION}, Canada &nbsp;&middot;&nbsp;{' '}
            {PHONE_DISP} &nbsp;&middot;&nbsp; {EMAIL}
          </span>
          <span>
            &copy; {year} {BRAND}. Local search, AI intake and marketing systems for trades
            and service businesses across Canada and the United States.
          </span>
        </div>
      </div>
    </footer>
  );
}
