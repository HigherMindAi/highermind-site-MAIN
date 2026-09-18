import { useState } from 'react';
import type { WorkItem } from '../lib/work';

/**
 * One piece of work.
 *
 * The screenshot is a real file under /work/. If it 404s - because a shot is
 * pending, or because somebody moved it - the card swaps to a designed frame
 * carrying the live URL rather than showing a broken image. A portfolio with a
 * broken box on it argues against itself.
 */
export default function WorkCard({ item }: { item: WorkItem }) {
  // Second line of defence only. The primary guard is an empty `shot`, because
  // on a prerendered page an image error fires before hydration and this
  // handler would never run.
  const [shotFailed, setShotFailed] = useState(false);
  const hasShot = !!item.shot && !shotFailed;

  return (
    <a
      className="work reveal"
      href={item.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${item.name} - opens ${item.url} in a new tab`}
    >
      <div className="work-shot" style={{ background: item.tone }}>
        {!hasShot ? (
          <div className="work-frame">
            <span className="work-frame-url">{item.url}</span>
          </div>
        ) : (
          <img
            src={item.shot}
            alt={`The ${item.name} website`}
            loading="lazy"
            decoding="async"
            onError={() => setShotFailed(true)}
          />
        )}
      </div>

      <div className="work-in">
        <span className="work-tag">{item.tag}</span>
        <h3>{item.name}</h3>
        <p>{item.line}</p>
        <div className="work-meta">
          {item.built.slice(0, 3).map((b) => (
            <span key={b}>{b}</span>
          ))}
        </div>
        <span className="work-live">
          {item.url}
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M5 11L11 5M11 5H6M11 5V10"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </a>
  );
}
