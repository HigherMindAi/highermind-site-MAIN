import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { HeadContext } from './lib/head';
import './index.css';

const sink = { current: null };

const tree = (
  <StrictMode>
    <HeadContext.Provider value={sink}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HeadContext.Provider>
  </StrictMode>
);

const root = document.getElementById('root')!;
// If the route was prerendered to static HTML, hydrate it; otherwise mount.
if (root.firstElementChild) {
  hydrateRoot(root, tree);
} else {
  createRoot(root).render(tree);
}
