import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import Plate from '../components/Plate';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import LadderBlock from '../components/LadderBlock';
import { Arrow } from '../components/Icons';
import NotFound from './NotFound';
import { TOWNS, townBySlug, townPath, type Town } from '../lib/towns';
import { RANK_LOCK, CTA_HREF, CTA_LABEL } from '../lib/ladder';
import { HOURS_DISPLAY } from '../lib/site';
import { breadcrumbs, faqSchema, townServiceSchema, orgSchema } from '../lib/schema';

function titleFor(t: Town): string {
  if (t.slug === 'orangeville') return 'Google Maps Ranking in Orangeville | HigherMindAI';
  if (t.slug === 'caledon') return 'Marketing Agency in Caledon - Local SEO | HigherMindAI';
  return `Local SEO in ${t.name}, Ontario | HigherMindAI`;
}

function h1For(t: Town): string {
  if (t.slug === 'orangeville') return 'Google Maps ranking in Orangeville.';
  if (t.slug === 'caledon') return 'Local SEO and marketing in Caledon.';
  return `Local SEO in ${t.name}.`;
}

function faqFor(t: Town): [string, string][] {
  const places = t.places.filter((p) => p !== t.name).slice(0, 3).join(', ');
  return [
    [
      `How do I get my business into the Google map pack in ${t.name}?`,
      `Three things decide it: how close the business is to the person searching, how well the Google Business Profile matches what they typed, and how established the business looks. Proximity cannot be changed. The other two can: the right primary category, every service named the way people in ${t.name} search for it, a service area that includes ${places || 'the communities you actually serve'}, photos of real work, and reviews that keep arriving and get answered. That is the work inside The Pin.`,
    ],
    [
      `Do you work with businesses in ${t.name} in person?`,
      `I work from Erin and most of the work is done on your profile, your pages and your phone line rather than on site, so distance does not slow anything down. The nine minutes is a call, and I will have looked at your profile and the businesses above you in ${t.name} before it starts.`,
    ],
    [
      'Is there a guarantee?',
      `One, and it is written into the agreement: ${RANK_LOCK.replace('The Rank Lock: ', '')} That is the only outcome I promise, and it is the one I can stand behind.`,
    ],
  ];
}

export function LocalSeoTown() {
  const { slug = '' } = useParams();
  const t = townBySlug(slug);
  if (!t) return <NotFound />;
  const path = townPath(t.slug);
  const faq = faqFor(t);
  const near = t.near.map((s) => townBySlug(s)).filter(Boolean) as Town[];

  return (
    <main>
      <Seo
        title={titleFor(t)}
        desc={`Get your ${t.name} business into the Google map pack, answered when you cannot pick up, and every call counted. ${t.area}. Based in Erin, Ontario.`}
        path={path}
        schema={[
          orgSchema(),
          townServiceSchema(t, path),
          breadcrumbs([['Home', '/'], ['Local SEO', '/local-seo/'], [t.name, path]]),
          faqSchema(faq),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <div className="reveal">
            <div className="crumb">
              <Link to="/">Home</Link> &nbsp;/&nbsp; <Link to="/local-seo/">Local SEO</Link> &nbsp;/&nbsp; {t.name}
            </div>
            <span className="eyebrow">{t.name} &middot; {t.area}</span>
            <h1>
              {h1For(t)} <span className="em">Found in the map, answered when you cannot pick up.</span>
            </h1>
            <p className="sub">
              I get {t.name} businesses into the Google map pack for the searches that bring work,
              put a desk behind the phone for the calls you cannot take, and count every call and
              form so you see exactly what it did.
            </p>
            <div className="ctas">
              <Link to={CTA_HREF} className="btn btn-primary">{CTA_LABEL} <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="chap">
            <div className="chap-copy reveal">
              <span className="eyebrow"><span className="n">01</span> The ground</span>
              <h2 style={{ marginTop: 22 }}>
                {t.name}, <span className="em">as the map sees it.</span>
              </h2>
              <p className="lead">{t.ground}</p>
              <p className="lead">{t.map}</p>
            </div>
            <div className="chap-media reveal">
              <Plate image={t.slug === 'erin' ? 'office' : 'mainStreet'} filmKey={t.slug === 'erin' ? 'office' : 'mainStreet'} ratio="4 / 3" scrim="soft" alt={`Main street in a Headwaters town near ${t.name}`} />
            </div>
          </div>
          <div className="town-places reveal">
            <span className="tp-label">Searches I build {t.name} profiles for</span>
            <div className="townrow">
              {t.places.map((p) => (
                <span className="town" key={p}>{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow"><span className="n">02</span> What I do in {t.name}</span>
            <h2 style={{ marginTop: 22 }}>
              Three steps, in order. <span className="em">Most {t.name} businesses start on the Foundation.</span>
            </h2>
          </div>
          <LadderBlock showCta={false} />
        </div>
      </section>

      <div className="divider" />

      <section className="sec-sm">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow"><span className="n">03</span> Nearby</span>
            <h2 style={{ marginTop: 22, fontSize: 'clamp(26px,3.2vw,38px)' }}>
              The towns around {t.name}.
            </h2>
          </div>
          <div className="townrow reveal">
            {near.map((n) => (
              <Link key={n.slug} to={townPath(n.slug)} className="town">
                Local SEO in {n.name}
              </Link>
            ))}
            <Link to="/local-seo/" className="town">All Headwaters towns</Link>
          </div>
          <p className="lead reveal" style={{ marginTop: 22 }}>
            Hours: {HOURS_DISPLAY}. The Google profile work, the desk and the counting are all done
            remotely from Erin, so a business anywhere in {t.area} is served the same way.
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap narrow">
          <div className="sec-head left reveal">
            <span className="eyebrow"><span className="n">04</span> Questions from {t.name}</span>
            <h2 style={{ marginTop: 22 }}>Answered plainly.</h2>
          </div>
          <FAQ items={faq} />
        </div>
      </section>

      <CTAStrip
        head={<>Take the nine minutes. <span className="em">I will have looked at {t.name} first.</span></>}
        sub={`Before the call I pull up your profile and the businesses above you in the ${t.name} map. On the call I show you what I found and which step fits.`}
      />
    </main>
  );
}

export function LocalSeoHub() {
  const path = '/local-seo/';
  return (
    <main>
      <Seo
        title="Local SEO in the Headwaters, Ontario | HigherMindAI"
        desc="Google map pack ranking and call answering for businesses in Erin, Orangeville, Caledon, Guelph, Halton Hills, Mono, Shelburne, Fergus, Elora and Grand Valley."
        path={path}
        schema={[orgSchema(), breadcrumbs([['Home', '/'], ['Local SEO', path]])]}
      />
      <section className="phero">
        <div className="wrap">
          <div className="reveal">
            <div className="crumb">
              <Link to="/">Home</Link> &nbsp;/&nbsp; Local SEO
            </div>
            <span className="eyebrow">Local SEO &middot; The Headwaters</span>
            <h1>
              Local SEO in the Headwaters. <span className="em">Based in Erin, working town by town.</span>
            </h1>
            <p className="sub">
              Every town in the Headwaters is its own map. A business can hold the pack in one and be
              invisible ten minutes down the road. These are the towns I work in first - each page is
              how the map actually behaves there.
            </p>
            <div className="ctas">
              <Link to={CTA_HREF} className="btn btn-primary">{CTA_LABEL} <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="towngrid">
            {TOWNS.map((t) => (
              <Link key={t.slug} to={townPath(t.slug)} className="towncard reveal">
                <span className="tc-area">{t.area}</span>
                <h2>{t.name}</h2>
                <p>{t.map}</p>
                <span className="tc-go">Local SEO in {t.name} <Arrow /></span>
              </Link>
            ))}
          </div>
          <div className="chap" style={{ marginTop: 'clamp(48px,6vw,84px)' }}>
            <div className="chap-copy reveal">
              <span className="eyebrow">Outside the Headwaters</span>
              <h2 style={{ marginTop: 22 }}>
                Across Canada and the United States. <span className="em">Same work, same order.</span>
              </h2>
              <p className="lead">
                The Headwaters is home ground. The same three steps run for businesses anywhere -
                the profile, the desk and the counting are all done remotely. See{' '}
                <Link to="/coverage/">where I work</Link>.
              </p>
            </div>
            <div className="chap-media reveal">
              <Plate image="aerial" filmKey="aerial" ratio="4 / 3" scrim="soft" />
            </div>
          </div>
        </div>
      </section>

      <CTAStrip
        head={<>Take the nine minutes. <span className="em">Your town, your map, your step.</span></>}
        sub="I will have your profile and the businesses above you pulled up before the call. Then I tell you which step fits and the fixed price on it."
      />
    </main>
  );
}
