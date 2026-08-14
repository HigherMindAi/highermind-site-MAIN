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
        title="Property Management SEO by City, Canada | HigherMindAI"
        desc="Google ranking for property management firms across the Headwaters, the GTA, Southwestern Ontario and Greater Moncton. Every city built separately."
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
            <span className="eyebrow">Property management SEO across Canada</span>
            <h1>
              Where I rank <span className="em">property management firms.</span>
            </h1>
            <p className="sub">
              Home turf is the Headwaters - Erin, Orangeville, Caledon. From there I rank firms across
              Ontario and into the Maritimes. The work is delivered to your Google profile, so distance
              is no barrier - what matters is whether I can out-rank the firms around you. These are the
              markets I am actively building in, and each city page is built to rank on the term an owner
              actually types. Search your own city term and see where you sit.
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
        sub="I work with property management firms across Canada, including Alberta, the Prairies and Atlantic Canada. Tell me your city and how many doors you carry - I will tell you straight whether I can win it."
      />
    </main>
  );
}
