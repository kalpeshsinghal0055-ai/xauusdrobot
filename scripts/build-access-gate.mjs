/**
 * Build the access gate: minify, hash, stamp.
 *
 * The readable source lives at scripts/assets/access-gate.js and is never served. This
 * writes the minified file to client/public/access-gate.js and rewrites every page's
 * ?v= query with its content hash, because Cloudflare serves these with max-age=14400 -
 * an unversioned edit stays invisible for four hours.
 *
 * Run it after ANY edit to the source:  node scripts/build-access-gate.mjs
 */
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
// the API, not the .bin shim - Windows cannot execFile a .CMD without a shell
import { buildSync } from 'esbuild';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'scripts', 'assets', 'access-gate.js');
const OUT = path.join(ROOT, 'client', 'public', 'access-gate.js');

buildSync({ entryPoints: [SRC], outfile: OUT, minify: true, target: 'es2017', legalComments: 'none' });

const bytes = fs.readFileSync(OUT);
const hash = createHash('md5').update(bytes).digest('hex').slice(0, 8);
console.log(`minified ${fs.statSync(SRC).size} -> ${bytes.length} bytes, hash ${hash}`);

// stamp every page that references the file
const pages = [path.join(ROOT, 'client', 'index.html')];
const walk = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html')) pages.push(p);
  }
};
walk(path.join(ROOT, 'client', 'public'));

let stamped = 0;
for (const p of pages) {
  const s = fs.readFileSync(p, 'utf8');
  const out = s.replace(/\/access-gate\.js(\?v=[0-9a-f]+)?/g, `/access-gate.js?v=${hash}`);
  if (out !== s) {
    fs.writeFileSync(p, out);
    stamped++;
  }
}
console.log(`stamped ${stamped} pages with ?v=${hash}`);
