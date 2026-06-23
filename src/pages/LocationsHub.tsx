import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import CTAStrip from '../components/CTAStrip';
import { LinkArrow } from '../components/Icons';
import { CITIES, CITY_GROUPS, REGION_FULL } from '../lib/cities';
import { breadcrumbs, locationsItemList } from '../lib/schema';

export default function LocationsHub() {
  return (
    <main>
      <Seo
        title="Local SEO Locations across Ontario & Canada | HigherMindAI"
        desc="Local SEO and Google Maps ranking for businesses across the Headwaters, the Greater Toronto Area, Southwestern Ontario, and Greater Moncton. First page in 60 days or you stop paying."
        path="/local-seo/"
        schema={[
          breadcrumbs([['Home', '/'], ['Locations', '/local-seo/']]),
          locationsItemList(CITIES),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <div className="reveal">
            <div className="crumb">
              <Link to="/">Home</Link> &nbsp;/&nbsp; Locations
            </div>
            <span className="eyebrow">Local SEO across Canada</span>
            <h1>
              Where I rank <span className="em">local businesses.</span>
            </h1>
            <p className="sub">
              Home turf is the Headwaters - Erin, Orangeville, Caledon. From there I rank businesses
              across Ontario and into the Maritimes. Local SEO is delivered to your Google profile, so
              distance is no barrier - what matters is whether I can out-rank the businesses around you.
              These are the markets I am actively building in; more go live as I take on clients in new
              cities.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap narrow">
          {CITY_GROUPS.map((g) => {
            const inGroup = CITIES.filter((c) => c.group === g);
            if (inGroup.length === 0) return null;
            return (
              <div className="locgroup reveal" key={g}>
                <h3>{g}</h3>
                <div className="loclist">
                  {inGroup.map((c) => (
                    <Link key={c.slug} to={`/local-seo/${c.slug}/`} className="loclink">
                      <span className="ln">
                        {c.city}
                        <span className="lr">
                          {REGION_FULL[c.region]}
                          {c.tier === 'home' ? ' \u00b7 home base' : ''}
                        </span>
                      </span>
                      <LinkArrow />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTAStrip
        head={<>Don&rsquo;t see <span className="em">your city?</span></>}
        sub="I work with local businesses across Canada. Tell me where you are and what you do - I will tell you if I can win it."
      />
    </main>
  );
}
