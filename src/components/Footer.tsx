import { Link } from 'react-router-dom';
import {
  BRAND, BIZ_NAME, PHONE_E164, PHONE_DISP, EMAIL, LOCALITY, REGION,
} from '../lib/site';
import { SERVICES } from '../lib/services';
import { Wordmark } from './Icons';

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
              I rank your firm so clients find it, then answer every call and message
              24/7, screen it, and book the consultation. One operator, one loop, built
              from inside the justice system.
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
              <h4>What I build</h4>
              <Link to="/law-firm-intake">AI intake desk</Link>
              <Link to="/ai-search-optimization">AI search visibility</Link>
              <Link to="/law-firm-seo">Ranking &amp; leads</Link>
              <Link to="/the-watershed">The Watershed</Link>
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
            &copy; {year} {BRAND}. AI client intake &amp; lead generation for law firms.
          </span>
        </div>
      </div>
    </footer>
  );
}
