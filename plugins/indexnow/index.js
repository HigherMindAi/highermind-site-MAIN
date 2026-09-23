// HigherMindAI - IndexNow on every production deploy (v15.3)
//
// Bing, Yandex, Seznam and Naver read IndexNow. Bing's index is what feeds
// Copilot and a large share of what ChatGPT search can see, so a page that is
// in Bing the same day it ships is a page an assistant can name the same week.
// Google does not use IndexNow - Search Console and the sitemap cover Google.
//
// Runs after the deploy is live (onSuccess), production only. It can NEVER
// fail a build: every path ends in a status line, never a thrown error.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const HOST = 'highermindai.com';
const KEY = '3c75f3ca8323e7b21e4572747ee84e4c';

export const onSuccess = async ({ constants, utils }) => {
  if (process.env.CONTEXT !== 'production') {
    console.log('IndexNow: not a production deploy - skipped.');
    return;
  }
  try {
    const xml = readFileSync(join(constants.PUBLISH_DIR, 'sitemap.xml'), 'utf8');
    const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
    });
    const msg = `IndexNow: ${urlList.length} URLs submitted - HTTP ${res.status}`;
    console.log(msg);
    utils.status.show({ title: 'IndexNow', summary: msg });
  } catch (e) {
    console.log('IndexNow: submission skipped -', e && e.message ? e.message : e);
  }
};
