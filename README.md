# xauusdrobot.com

Marketing site for the free BBFxAi XAUUSD trading robots (MT4/MT5), plus a
blog, free gold-trading calculators and a weekly gold news calendar.

## Stack
- React 19 + Vite + Tailwind (SPA in `client/`)
- Static prerender of key routes via `scripts/prerender.mjs` (Puppeteer)
- Static blog posts and tools live in `client/public/`
- Deployed to GitHub Pages by `.github/workflows/deploy.yml` (pnpm)

## Develop
```
pnpm install
pnpm dev          # local dev server
pnpm vite build   # production build to dist/public
node scripts/prerender.mjs
```

## Publishing a blog post
Add a folder under `client/public/blog/<slug>/index.html`, a card in
`client/src/pages/Blog.tsx`, a `<url>` entry in `client/public/sitemap.xml`,
and cross-link it from related posts. Push to `main` to deploy.
