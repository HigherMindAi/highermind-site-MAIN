import { Link } from 'react-router-dom';
import {
  BRAND, BIZ_NAME, PHONE_E164, PHONE_DISP, EMAIL,
  ADDRESS_STREET, POSTAL, LOCALITY, REGION,
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
              I engineer the people already searching to find you, and I make sure
              every one of them is answered, qualified and booked. One operator, one
              loop, built around a guarantee that renews every morning. Based in the
              Headwaters, serving Canada.
            </p>
          </div>
          <div className="foot-links">
            <div className="foot-col">
              <h4>Services</h4>
              {SERVICES.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}/`}>
                  {s.name}
                </Link>
              ))}
            </div>
            <div className="foot-col">
              <h4>Locations</h4>
              <Link to="/local-seo/">All locations</Link>
              <Link to="/local-seo/mississauga/">Mississauga</Link>
              <Link to="/local-seo/brampton/">Brampton</Link>
              <Link to="/local-seo/vaughan/">Vaughan</Link>
              <Link to="/local-seo/moncton/">Moncton, NB</Link>
            </div>
            <div className="foot-col">
              <h4>Contact</h4>
              <a href={`tel:${PHONE_E164}`}>{PHONE_DISP}</a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <span>
                {ADDRESS_STREET}, {LOCALITY}, {REGION} {POSTAL}
              </span>
              <Link to="/#contact">Book a call</Link>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span className="nap">
            {BIZ_NAME} &nbsp;&middot;&nbsp; {ADDRESS_STREET}, {LOCALITY}, {REGION}{' '}
            {POSTAL} &nbsp;&middot;&nbsp; {PHONE_DISP}
          </span>
          <span>
            &copy; {year} {BRAND}. Local SEO, paid growth &amp; AI front desk systems.
          </span>
        </div>
      </div>
    </footer>
  );
}
