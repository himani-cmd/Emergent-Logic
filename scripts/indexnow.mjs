// Submit URLs to IndexNow (Bing, Yandex, Naver, Seznam).
// Usage: node scripts/indexnow.mjs [comma-separated URLs]  (default: every <loc> in the sitemap)
const HOST = 'www.emergent-logic.ca';
const KEY = 'af1baa7dca563d129883eea656b2b41c';
const SITEMAP = `https://${HOST}/sitemap.xml`;
const BATCH = 500;

async function urlsFromSitemap() {
  const res = await fetch(SITEMAP);
  if (!res.ok) throw new Error(`Sitemap fetch failed: HTTP ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
}

const arg = process.argv[2];
const urls = arg
  ? arg.split(',').map((u) => u.trim()).filter(Boolean)
  : await urlsFromSitemap();

if (!urls.length) {
  console.error('No URLs to submit.');
  process.exit(1);
}

let failed = false;
for (let i = 0; i < urls.length; i += BATCH) {
  const batch = urls.slice(i, i + BATCH);
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList: batch,
    }),
  });
  console.log(`Submitted ${batch.length} URL(s): HTTP ${res.status}`);
  if (res.status >= 400) failed = true;
}
process.exit(failed ? 1 : 0);
