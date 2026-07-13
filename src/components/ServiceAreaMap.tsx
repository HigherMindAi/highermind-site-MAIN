import { Link } from 'react-router-dom';
import { City, REGION_FULL } from '../lib/cities';
import { nearestCities, projectAround } from '../lib/geo';

/**
 * The service-area chart.
 *
 * This replaces the Google Maps iframe the SEO spec bans on non-Erin pages. An
 * embed passes zero ranking signal and costs ~500KB of third-party JS on the
 * exact pages where speed IS the product.
 *
 * This costs a few KB, no JS, no third party, and it does something the embed
 * never could: every neighbouring city on it is a real internal link to that
 * city's page, positioned at its true bearing and distance. The mesh the spec
 * asks for is delivered as the illustration rather than bolted on beside it.
 *
 * The honesty rule holds. This is not a pin and it does not claim one. It is a
 * survey of where the work reaches from a pin that is openly in Erin.
 */
const SIZE = 520;
const RING = [58, 108, 158, 200]; // survey rings

export default function ServiceAreaMap({ c }: { c: City }) {
  const ns = nearestCities(c);
  const pts = projectAround(c, ns, SIZE, 168);
  const cx = SIZE / 2;
  const cy = SIZE / 2;
  const rfull = REGION_FULL[c.region];

  return (
    <div className="samap reveal">
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="samap-svg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={`Service area chart centred on ${c.city}, ${rfull}${
          pts.length
            ? `, showing the nearest markets I also rank in: ${pts
                .map((p) => p.n.city.city)
                .join(', ')}.`
            : '.'
        }`}
      >
        {/* the survey grid */}
        <defs>
          <pattern id="sag" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0 L0 0 0 40" fill="none" className="samap-grid" />
          </pattern>
        </defs>
        <rect width={SIZE} height={SIZE} fill="url(#sag)" />

        {/* range rings */}
        {RING.map((r, i) => (
          <circle key={r} className="samap-ring" cx={cx} cy={cy} r={r} style={{ ['--i' as string]: i }} />
        ))}

        {/* channels out to each neighbouring market */}
        {pts.map((p) => (
          <line
            key={`l-${p.n.city.slug}`}
            className="samap-link"
            x1={cx}
            y1={cy}
            x2={p.x}
            y2={p.y}
          />
        ))}

        {/* the neighbours. Each one is a real link. */}
        {pts.map((p) => (
          <Link key={p.n.city.slug} to={`/local-seo/${p.n.city.slug}/`} className="samap-node">
            <circle className="samap-hit" cx={p.x} cy={p.y} r="26" />
            <circle className="samap-dot" cx={p.x} cy={p.y} r="5" />
            <text className="samap-name" x={p.x} y={p.y - 14} textAnchor="middle">
              {p.n.city.city}
            </text>
            <text className="samap-km" x={p.x} y={p.y + 22} textAnchor="middle">
              {Math.round(p.n.km)} km
            </text>
          </Link>
        ))}

        {/* the target city */}
        <circle className="samap-core-halo" cx={cx} cy={cy} r="17" />
        <circle className="samap-core" cx={cx} cy={cy} r="7" />
        <text className="samap-core-name" x={cx} y={cy - 26} textAnchor="middle">
          {c.city}
        </text>
      </svg>

      <div className="samap-legend">
        <span className="samap-key samap-key-here">{c.city}, {c.region}</span>
        {pts.length > 0 && <span className="samap-key samap-key-near">Markets I also rank in</span>}
      </div>
    </div>
  );
}
