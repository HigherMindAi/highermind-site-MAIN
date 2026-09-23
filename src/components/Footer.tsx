import { Link } from 'react-router-dom';
import {
  BRAND, BIZ_NAME, PHONE_E164, PHONE_DISP, EMAIL, LOCALITY, REGION, HOURS_DISPLAY,
} from '../lib/site';
import { ONE_LINE, CTA_LABEL, CTA_HREF } from '../lib/ladder';
import { TOWNS, townPath } from '../lib/towns';
import { Wordmark } from './Icons';

/**
 * The footer carries the ladder in order, never a menu of lines, plus the
 * Headwaters town pages - every one internally linked from every page, which
 * is most of what a new local page needs to get crawled and trusted.
 */
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
            <p>{ONE_LINE}</p>
            <div className="op">
              <img
                src="/derek-sm.webp"
                width={46}
                height={46}
                loading="lazy"
                decoding="async"
                alt="Derek Train, founder, HigherMindAI"
              />
              <div>
                <b>Derek Train</b>
                Founder &middot; Erin, Ontario
              </div>
            </div>
            <p style={{ marginTop: 18 }}>
              <Link to={CTA_HREF} className="btn btn-primary">{CTA_LABEL}</Link>
            </p>
          </div>
          <div className="foot-links">
            <div className="foot-col">
              <h4>How it works</h4>
              <Link to="/the-read/">The Read - the way in</Link>
              <Link to="/how-it-works/#the-pin">The Pin</Link>
              <Link to="/how-it-works/#the-foundation">The Foundation</Link>
              <Link to="/how-it-works/#the-storefront">The Storefront</Link>
              <Link to="/how-it-works/#the-tap">The Tap - last</Link>
              <Link to="/how-it-works/#after">After you have chosen</Link>
            </div>
            <div className="foot-col">
              <h4>Who I help</h4>
              <Link to="/trades/">Trades</Link>
              <Link to="/auto-parts-recyclers/">Auto parts and recyclers</Link>
              <Link to="/auto-service-collision/">Auto service and collision</Link>
              <Link to="/property-management/">Property management</Link>
              <Link to="/condominium-management-marketing/">Condominium management</Link>
              <Link to="/answers/">Straight answers</Link>
            </div>
            <div className="foot-col">
              <h4>Local SEO</h4>
              {TOWNS.map((t) => (
                <Link key={t.slug} to={townPath(t.slug)}>{t.name}</Link>
              ))}
            </div>
            <div className="foot-col">
              <h4>HigherMindAI</h4>
              <Link to="/about/">About</Link>
              <Link to="/work/">Work</Link>
              <Link to="/coverage/">Coverage</Link>
              <Link to="/scope-limits/">Where the desk stops</Link>
              <Link to="/contact/">Contact</Link>
              <Link to="/privacy/">Privacy</Link>
              <a href={`tel:${PHONE_E164}`}>{PHONE_DISP}</a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <span>{HOURS_DISPLAY}</span>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span className="nap">
            {BIZ_NAME} &nbsp;&middot;&nbsp; {LOCALITY}, {REGION}, Canada &nbsp;&middot;&nbsp;{' '}
            {PHONE_DISP} &nbsp;&middot;&nbsp; {EMAIL}
          </span>
          <span>
            &copy; {year} {BRAND}. Local SEO, Google Business Profile management and call answering
            for trades and auto businesses across the Headwaters, Canada and the United States.
            Veteran-owned.
          </span>
        </div>
      </div>
    </footer>
  );
}
