import { CITIES, City } from './cities';

/**
 * The internal mesh is geographic, not decorative.
 *
 * The `nearby` field in cities.ts lists hamlets (Hillsburgh, Bramalea, Kleinburg)
 * which have no pages of their own, so linking them builds nothing. The links
 * that actually compound are the ones between the ten INDEXED city pages, and
 * those are worked out here from real coordinates rather than guessed.
 */

const R = 6371; // km

export function distanceKm(a: City, b: City): number {
  const p1 = (a.geo[0] * Math.PI) / 180;
  const p2 = (b.geo[0] * Math.PI) / 180;
  const dp = p2 - p1;
  const dl = ((b.geo[1] - a.geo[1]) * Math.PI) / 180;
  const x =
    Math.sin(dp / 2) ** 2 +
    Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
}

export interface Neighbour {
  city: City;
  km: number;
}

/**
 * The nearest indexed cities to `c`, inside `maxKm`. Moncton comes back empty,
 * because the nearest indexed city to it is about 1,100km away and pretending
 * otherwise would be a lie on a page whose whole job is to be honest about
 * geography.
 */
export function nearestCities(c: City, count = 4, maxKm = 80): Neighbour[] {
  return CITIES.filter((o) => o.slug !== c.slug)
    .map((o) => ({ city: o, km: distanceKm(c, o) }))
    .filter((n) => n.km <= maxKm)
    .sort((a, b) => a.km - b.km)
    .slice(0, count);
}

/**
 * Project neighbours onto a square SVG canvas centred on `c`. Equirectangular,
 * with the longitude squeezed by cos(lat) so the shape is not stretched at
 * Ontario's latitude. Auto-scaled so the farthest neighbour lands on the outer
 * ring rather than off the edge.
 */
export function projectAround(
  c: City,
  ns: Neighbour[],
  size: number,
  radius: number
): { n: Neighbour; x: number; y: number }[] {
  if (!ns.length) return [];
  const cx = size / 2;
  const cy = size / 2;
  const latRad = (c.geo[0] * Math.PI) / 180;

  const raw = ns.map((n) => ({
    n,
    dx: (n.city.geo[1] - c.geo[1]) * Math.cos(latRad),
    dy: -(n.city.geo[0] - c.geo[0]),
  }));

  const max = Math.max(...raw.map((r) => Math.hypot(r.dx, r.dy))) || 1;
  const k = radius / max;

  return raw.map((r) => ({ n: r.n, x: cx + r.dx * k, y: cy + r.dy * k }));
}
