import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav';
import ScrollProgress from './ScrollProgress';
import Footer from './Footer';
import PageFilm from './PageFilm';
import { useReveal } from '../lib/useReveal';
import { useParallax } from '../lib/useParallax';
import { trackPageView, wireClicks } from '../lib/tracking';
import { recordTouch } from '../lib/attribution';

const NAV_OFFSET = 92; // sticky-nav height + breathing room

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      // wait for the route to paint, then ease to the anchor
      const t = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const top =
            el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
          window.scrollTo({ top, behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0 });
        }
      }, 60);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
}

/**
 * Found and counted (v15.3). Renders nothing. Placed AFTER the page in the tree
 * so its effect runs after the page's <Seo> has set the new title - otherwise
 * GA4 would record every page under the previous page's title.
 */
function RouteTracker() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    recordTouch();
    wireClicks();
  }, []);
  useEffect(() => {
    const t = window.setTimeout(trackPageView, 0);
    return () => window.clearTimeout(t);
  }, [pathname, search]);
  return null;
}

export default function Layout() {
  const { pathname } = useLocation();
  useReveal(pathname);
  useParallax();

  // content-protection deterrent (ported from network.js); inputs stay usable
  useEffect(() => {
    const guard = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (t && t.closest && t.closest('input,textarea')) return;
      e.preventDefault();
    };
    const events = ['contextmenu', 'copy', 'cut', 'dragstart', 'selectstart'];
    events.forEach((ev) => document.addEventListener(ev, guard));
    return () => events.forEach((ev) => document.removeEventListener(ev, guard));
  }, []);

  return (
    <>
      <div className="deep" aria-hidden="true">
        <span className="caustic ca" />
        <span className="caustic cb" />
      </div>
      <div className="page">
        <ScrollManager />
        <ScrollProgress />
        <Nav />
        <PageFilm />
        <Outlet />
        <Footer />
        <RouteTracker />
      </div>
    </>
  );
}
