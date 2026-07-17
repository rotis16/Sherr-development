# Sherr Development — Redesign Preview

A modern, static redesign preview of [sherrdev.com](https://sherrdev.com), built to pitch the owner on an updated site. This is **not** the live site — it's a standalone preview.

Stack: Vite + React + TypeScript + Tailwind CSS, deployed as a static SPA.

## Content is centralized

All copy lives in [`src/content/content.ts`](src/content/content.ts) — one file, easy to edit. Anything not yet confirmed against the real site is wrapped in `PLACEHOLDER(...)` and rendered with a visible "Needs content" badge (see `src/components/Copy.tsx`) so unverified text can never accidentally look finished. Replace placeholders with real copy/photos as they're confirmed, and the badges disappear automatically.

## Development

```bash
npm install
npm run dev       # local dev server
npm run lint       # oxlint
npm run build      # tsc -b && vite build
npm run preview    # preview the production build locally
```

## Structure

- `src/content/content.ts` — single source of truth for all copy/data
- `src/layouts/RootLayout.tsx` — header nav + footer shared across pages
- `src/pages/` — one file per route, matching the real site's navigation
- `src/components/` — shared UI (`Copy` for placeholder-aware text, `PlaceholderImage` for missing photos)
