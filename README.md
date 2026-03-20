# Online Projects

Marketing site for **Online Projects** — Filipino VA training. Built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## Local development

```bash
npm install
npm run dev
```

```bash
npm run build   # production build → dist/
npm run preview # serve dist locally
```

## Deploy on Vercel

1. Push this repo to GitHub (or GitLab / Bitbucket).
2. In [Vercel](https://vercel.com/new), **Import** the repository.
3. Vercel should detect **Vite** automatically:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Deploy — no extra env vars are required for the static landing page.

`vercel.json` adds a SPA-style rewrite so deep links keep working if you add client-side routes later.

## Project structure

- `src/LandingPage.tsx` — page sections and copy
- `src/components/` — nav, footer, FAQ, scroll reveal
- `src/index.css` — Tailwind + CSS theme variables
