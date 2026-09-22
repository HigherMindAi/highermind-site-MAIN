import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Arrow } from '../components/Icons';
import { CTA_LABEL, CTA_HREF } from '../lib/ladder';

export default function NotFound() {
  return (
    <main>
      <Seo
        title="Page not found | HigherMindAI"
        desc="The page you are looking for has moved or no longer exists."
        path="/404/"
      />
      <section className="phero" style={{ minHeight: '52vh' }}>
        <div className="wrap">
          <div className="reveal">
            <span className="eyebrow">404</span>
            <h1>
              That page is not <span className="em">here any more.</span>
            </h1>
            <p className="sub">
              The link you followed has moved or never existed. Go back to the{' '}
              <Link to="/">home page</Link>, or see the order the work is done in on{' '}
              <Link to="/how-it-works/">how it works</Link>.
            </p>
            <div className="ctas" style={{ marginTop: 34 }}>
              <Link to={CTA_HREF} className="btn btn-primary">
                {CTA_LABEL} <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
