import { Link } from 'react-router-dom';
import {
  BRAND, BIZ_NAME, PHONE_E164, PHONE_DISP, EMAIL, LOCALITY, REGION,
} from '../lib/site';
import { SERVICES } from '../lib/services';
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
              I rank your firm so owners find it, answer and qualify every enquiry that
              lands, then hand you a record of what came in and how fast it was answered.
              Property management first, law firms second, one operator, one loop.
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
              <h4>Property management</h4>
              <Link to="/property-management">Property management</Link>
              <Link to="/the-keystone">The Keystone</Link>
              <Link to="/property-management-seo">Ranking &amp; visibility</Link>
              <Link to="/property-management-intake">The intake desk</Link>
              <Link to="/property-management/the-record">The Record</Link>
              <Link to="/condominium-management-marketing">Condominium boards</Link>
              <Link to="/scope-limits">Where the desk stops</Link>
              <Link to="/coverage">Where I work</Link>
              <Link to={LOCATIONS_HUB}>Cities I rank in</Link>
            </div>
            <div className="foot-col">
              <h4>Law firms</h4>
              <Link to="/the-watershed">The Watershed</Link>
              <Link to="/law-firm-intake">AI intake desk</Link>
              <Link to="/law-firm-seo">Ranking &amp; leads</Link>
              <Link to="/ai-search-optimization">AI search visibility</Link>
              <Link to="/solutions">Who I help</Link>
              <Link to="/about">About</Link>
            </div>
            <div className="foot-col">
              <h4>Also available</h4>
              {SERVICES.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}/`}>
                  {s.name}
                </Link>
              ))}
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
            &copy; {year} {BRAND}. Local ranking, AI intake and lead generation for
            property management companies and law firms.
          </span>
        </div>
      </div>
    </footer>
  );
}
