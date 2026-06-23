import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { HeadContext, HeadSink, renderHeadTags } from './lib/head';

// Renders a route to { appHtml, headHtml } for the prerender script.
export function render(url: string): { appHtml: string; headHtml: string } {
  const sink: HeadSink = { current: null };
  const appHtml = renderToString(
    <StrictMode>
      <HeadContext.Provider value={sink}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HeadContext.Provider>
    </StrictMode>
  );
  const headHtml = sink.current ? renderHeadTags(sink.current) : '';
  return { appHtml, headHtml };
}
