// Inline SVGs ported 1:1 from the static build for pixel fidelity.

export const Arrow = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Go = () => (
  <svg className="sgo" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const LinkArrow = () => (
  <svg className="larr" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Hamburger = () => (
  <svg className="ico-open" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const Close = () => (
  <svg className="ico-close" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <line x1="5" y1="5" x2="19" y2="19" />
    <line x1="19" y1="5" x2="5" y2="19" />
  </svg>
);

export const SearchMag = () => (
  <svg className="gmag" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9aa7bb" strokeWidth="2">
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
);

export const Wordmark = () => (
  <>
    <span className="dot" />
    <span className="wm">
      HigherMind<span className="ai">AI</span>
    </span>
  </>
);
