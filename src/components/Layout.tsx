import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import { useReveal } from '../lib/useReveal';
import { useParallax } from '../lib/useParallax';

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
      <div className="page">
        <ScrollManager />
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
