// Fetches performance screenshots from the public Telegram channel preview
// (t.me/s/pssforxr) into client/public/performance/ with a manifest.json.
// Run by .github/workflows/performance.yml on a schedule; safe to run locally.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const CHANNEL = "pssforxr";
const OUT_DIR = path.resolve(import.meta.dirname, "..", "client", "public", "performance");
const MANIFEST = path.join(OUT_DIR, "manifest.json");
const KEEP = 12; // newest posts shown on the site

const html = await (await fetch(`https://t.me/s/${CHANNEL}`, {
  headers: { "user-agent": "Mozilla/5.0 (compatible; xauusdrobot-site)" },
})).text();

// Split into message blocks; each carries data-post="channel/<id>"
const blocks = html.split('tgme_widget_message_wrap').slice(1);
const posts = [];
for (const block of blocks) {
  const id = block.match(/data-post="[^"/]+\/(\d+)"/)?.[1];
  if (!id) continue;
  const date = block.match(/<time datetime="([^"]+)"/)?.[1] ?? null;
  const photos = [...block.matchAll(/message_photo_wrap[^>]*style="[^"]*background-image:url\('(https:[^']+)'\)/g)]
    .map((m) => m[1]);
  if (photos.length) posts.push({ id: Number(id), date, photos });
}
posts.sort((a, b) => b.id - a.id);
const latest = posts.slice(0, KEEP);

await mkdir(OUT_DIR, { recursive: true });
let manifest = [];
try { manifest = JSON.parse(await readFile(MANIFEST, "utf8")); } catch {}
const known = new Set(manifest.map((e) => e.id));

for (const post of latest) {
  if (known.has(post.id)) continue;
  const files = [];
  for (let i = 0; i < post.photos.length; i++) {
    const file = `${post.id}${post.photos.length > 1 ? `-${i + 1}` : ""}.jpg`;
    const dest = path.join(OUT_DIR, file);
    if (!existsSync(dest)) {
      const res = await fetch(post.photos[i]);
      if (!res.ok) continue;
      await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    }
    files.push(file);
  }
  if (files.length) manifest.push({ id: post.id, date: post.date, files });
}

manifest.sort((a, b) => b.id - a.id);
manifest = manifest.slice(0, KEEP);
await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
console.log(`manifest: ${manifest.length} posts (${manifest.map((e) => e.id).join(", ")})`);
