import { Link } from 'react-router-dom';
import Plate from './Plate';
import { Arrow } from './Icons';
import { STEPS, READ, TAP, CTA_LABEL, CTA_HREF, type Step } from '../lib/ladder';
import type { StillKey } from '../lib/media';

const IMG: Record<Step['key'], StillKey> = {
  read: 'sRead',
  pin: 'sPin',
  foundation: 'sFoundation',
  storefront: 'sStorefront',
  tap: 'sTap',
};

/**
 * The ladder block - HANDOFF v6.0 section 4, set as written.
 * Three steps in a fixed order, the Foundation badged as where most start,
 * The Read beneath as the way in, The Tap last. Never a menu of eight.
 */
export default function LadderBlock({
  highlight,
  showCta = true,
}: {
  /** Step key to mark for a vertical (defaults to the anchor, the Foundation). */
  highlight?: Step['key'];
  showCta?: boolean;
}) {
  const mark = highlight ?? 'foundation';
  return (
    <div className="lad">
      <div className="lad-grid">
        {STEPS.map((s, i) => (
          <article
            key={s.key}
            className={'lad-step reveal' + (s.anchor ? ' anchor' : '') + (s.key === mark ? ' hl' : '')}
            id={`step-${s.key}`}
          >
            <div className="lad-media">
              <Plate image={IMG[s.key]} filmKey={IMG[s.key]} ratio="16 / 10" light scrim="soft" />
              <span className="lad-pos">Step {i + 1}</span>
              {s.anchor ? <span className="lad-badge">Where most start</span> : null}
            </div>
            <div className="lad-body">
              <h3>{s.name}</h3>
              <p className="lad-line">{s.line}</p>
              <p className="lad-promise">{s.promise}</p>
              <ul className="lad-see">
                {s.see.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <p className="lad-lock">{s.guarantee}</p>
              <Link to={s.href} className="lad-more">
                What sits inside {s.name} <Arrow />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="lad-ends">
        <Link to={READ.href} className="lad-end reveal">
          <span className="lad-k">Not ready to pick?</span>
          <b>{READ.name}.</b>
          <span>
            Everything you have online, gone through properly in a week. What is wrong, what it
            costs, and a fixed price on the right step. {READ.guarantee}
          </span>
        </Link>
        <Link to={TAP.href} className="lad-end reveal">
          <span className="lad-k">Last:</span>
          <b>{TAP.name}.</b>
          <span>
            I will not spend your money sending traffic to a profile with the wrong hours and a
            website that does not convert. Fix that first, then the ads - on your own accounts,
            your spend on your own card, and I am paid on what it sells.
          </span>
        </Link>
      </div>

      {showCta ? (
        <div className="ctas lad-cta reveal">
          <Link to={CTA_HREF} className="btn btn-primary">
            {CTA_LABEL} <Arrow />
          </Link>
        </div>
      ) : null}
    </div>
  );
}
