// scripts/prerender.mjs
// Post-build static prerendering for the wouter SPA.
//
// Loads each React-rendered route in headless Chrome, lets it fully render
// (running useSeo effects + framer-motion), then writes the finished HTML to
// <route>/index.html so crawlers receive real content instead of an empty #root.
//
// Key detail: during rendering we must always serve the PRISTINE index.html
// (empty #root) as the SPA fallback, otherwise the app boots on top of an
// already-populated container. We therefore stage results in memory and only
// write them to disk after every route has been rendered.
//
// The two hand-written static posts in public/blog/* are left untouched.

import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { writeFileSync, mkdirSync } from "node:fs";
import { createServer } from "node:http";
import sirv from "sirv";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist", "public");
const PORT = 4180;

// Only the routes React actually renders. The file-based blog posts
// (xauusd-robot-complete-guide, how-to-set-up-...) already ship static HTML.
const ROUTES = [
  "/",
  "/blog",
  "/blog/bbfxai-xauusd-expert-advisor-guide",
  "/blog/bbfxai-xauusd-robot-mt5-complete-guide",
];

// Serve the built app. `single: true` makes unknown paths fall back to the
// (pristine) index.html so wouter can route them client-side during prerender.
const serve = sirv(DIST, { single: true, dev: false, etag: false });
const server = createServer((req, res) =>
  serve(req, res, () => {
    res.statusCode = 404;
    res.end("Not found");
  }),
);
await new Promise((r) => server.listen(PORT, r));
console.log(`[prerender] static server on http://localhost:${PORT}`);

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const staged = []; // { outDir, html } - flushed to disk after the loop
let failures = 0;

for (const route of ROUTES) {
  const page = await browser.newPage();

  // Abort requests to unresolved build-time template URLs (e.g. a broken
  // "%VITE_ANALYTICS_ENDPOINT%/umami" script) so they don't pollute the snapshot.
  await page.setRequestInterception(true);
  page.on("request", (req) => {
    if (req.url().includes("%")) req.abort().catch(() => {});
    else req.continue().catch(() => {});
  });

  const url = `http://localhost:${PORT}${route}`;
  try {
    // domcontentloaded is enough to boot the SPA; we don't wait on networkidle
    // because the live price ticker polls continuously.
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });

    // Wait until React has mounted substantial content into #root.
    await page.waitForFunction(
      () => {
        const r = document.getElementById("root");
        return r && r.innerText.replace(/\s+/g, " ").trim().length > 400;
      },
      { timeout: 45000, polling: 200 },
    );

    // Let framer-motion settle and useSeo effects flush to <head>.
    await new Promise((r) => setTimeout(r, 800));

    const html = await page.content();
    const outDir = route === "/" ? DIST : join(DIST, route);
    staged.push({ route, outDir, html });
    console.log(`[prerender] rendered ${route} (${html.length} bytes)`);
  } catch (err) {
    failures++;
    console.error(`[prerender] FAILED ${route}: ${err.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
server.close();

if (failures > 0) {
  console.error(`[prerender] ${failures} route(s) failed - not writing output`);
  process.exit(1);
}

// Flush staged HTML to disk only after all routes rendered from the pristine template.
for (const { outDir, html } of staged) {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html, "utf8");
}
console.log(`[prerender] wrote ${staged.length} pages`);
