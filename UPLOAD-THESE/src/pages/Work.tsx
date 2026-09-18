import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import WorkCard from '../components/WorkCard';
import Plate from '../components/Plate';
import { Arrow } from '../components/Icons';
import { WORK } from '../lib/work';
import { orgSchema, breadcrumbs } from '../lib/schema';

/**
 * /work/ - selected builds.
 *
 * Honest by construction. What was built and what it does, never a performance
 * figure, because a performance figure on a portfolio is the one claim a
 * prospect can check and the one nobody ever sources. A site that overclaims
 * here loses the argument the whole rest of the site is making.
 */
export default function Work() {
  return (
    <main>
      <Seo
        title="Selected Work | Website Builds by HigherMindAI"
        desc="Websites built to do a job rather than sit there - a part finder, an intake path, a quote flow. Selected builds by HigherMindAI, Erin, Ontario."
        path="/work/"
        schema={[orgSchema(), breadcrumbs([['Home', '/'], ['Work', '/work/']])]}
      />

      <section className="phero">
        <div className="wrap">
          <div className="reveal">
            <div className="crumb">
              <Link to="/">Home</Link> &nbsp;/&nbsp; Work
            </div>
            <span className="eyebrow">Selected work</span>
            <h1 style={{ marginTop: 22 }}>
              Sites that do a job, <span className="em">not sites that sit there.</span>
            </h1>
            <p className="sub">
              Almost every local business is running one process by hand every day - reading a part
              number down the phone, taking a booking on paper, chasing a quote through a text
              thread. <b>I find that process and build the thing that eats it</b>, then wrap it in a
              site worth arriving at. The design gets you in the room. The working part is what gets
              used on the Monday.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="workgrid">
            {WORK.map((w) => (
              <WorkCard key={w.slug} item={w} />
            ))}
          </div>
        </div>
      </section>

      {WORK.map((w) => (
        <section className="sec" key={w.slug}>
          <div className="wrap">
            <div className="sec-head left reveal">
              <span className="eyebrow">{w.tag}</span>
              <h2 style={{ marginTop: 22 }}>{w.name}</h2>
            </div>
            <div className="chap">
              <div className="chap-copy reveal">
                <p className="lead" style={{ marginTop: 0 }}>{w.body}</p>
                <ul className="plist" style={{ marginTop: 26 }}>
                  {w.built.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <div className="pfoot">
                  <a href={w.href} className="btn btn-primary" target="_blank" rel="noreferrer">
                    Visit {w.url} <Arrow />
                  </a>
                </div>
              </div>
              <div className="chap-media reveal">
                {w.shot ? (
                  <figure className="shotfull">
                    <img src={w.shot} alt={`The ${w.name} website`} loading="lazy" decoding="async" />
                  </figure>
                ) : (
                  <Plate image="storefront" filmKey="storefront" ratio="4 / 3" scrim="soft" />
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      <div className="divider" />

      <section className="ctastrip">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Nine minutes. <span className="em">No pitch.</span></h2>
            <p className="lead" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              I will open your site on a phone while we talk and time how long it takes to become
              useful, then read your homepage title tag back to you exactly as it appears in a
              search result. If it does what it should, I will tell you and we are done.
            </p>
          </div>
          <div className="ctas reveal">
            <Link to="/book/" className="btn btn-primary">Take the nine minutes <Arrow /></Link>
            <Link to="/services/website-build/" className="btn btn-ghost">How a build runs</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
