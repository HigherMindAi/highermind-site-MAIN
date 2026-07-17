import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Arrow } from '../components/Icons';

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
              That page isn&rsquo;t <span className="em">ranking here.</span>
            </h1>
            <p className="sub">
              The link you followed has moved or never existed. Let&rsquo;s get you back to something
              useful.
            </p>
            <div className="ctas" style={{ marginTop: 34, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/" className="btn btn-primary">
                Back home <Arrow />
              </Link>
              <Link to="/the-watershed" className="btn btn-ghost">
                See The Watershed
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
