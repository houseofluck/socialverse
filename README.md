# Social Verse — Studio Site

A Next.js 14 marketing site for Social Verse, a Mumbai-based creative studio. Built with the App Router, server components where possible, and custom SVG assets throughout.

## Stack

- **Next.js 14.2** with App Router
- **React 18**
- **No CSS framework** — vanilla CSS with CSS variables and inline styles
- **Google Fonts** — Fraunces, Archivo, JetBrains Mono (loaded via `@import`)
- **No external images or video hosting** — all media lives in `/public/media`

## Project structure

```
.
├── app/
│   ├── layout.jsx       # Root layout + metadata + Open Graph
│   ├── page.jsx         # Composes all sections
│   ├── globals.css      # Tokens, typography, responsive grid classes
│   └── sitemap.js       # Auto-generated sitemap
├── components/
│   ├── layout/
│   │   ├── Nav.jsx             # Responsive nav with mobile toggle
│   │   ├── Footer.jsx
│   │   └── StructuredData.jsx  # JSON-LD schema
│   ├── sections/        # 11 section components
│   ├── assets/          # SVG asset library (packaging, social, film, OOH)
│   └── ui/              # Motion primitives, logo marks
├── lib/
│   ├── palette.js       # Design tokens + brand constants
│   └── hooks.js         # useInView, useScroll, useTime, useMediaQuery
├── public/media/        # All images + video
│   ├── portraits/       # Testimonial headshots
│   ├── social/          # Social feed post imagery
│   ├── web/             # Web design screenshots
│   ├── editorial/       # Journal essay covers
│   └── video/           # App demo footage
├── next.config.js       # Image optimization + security headers
├── vercel.json          # Region: bom1 (Mumbai)
└── package.json
```

## Local development

```bash
# Install dependencies (use the package manager you prefer)
pnpm install        # or npm install / yarn install

# Run dev server (hot reload)
pnpm dev
# → http://localhost:3000

# Build production
pnpm build
pnpm start
```

Requirements: **Node.js 18.17+**.

## Deploy to Vercel

### One-click

1. Push this repo to GitHub / GitLab / Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js. Click **Deploy**.
4. Done. The Mumbai (`bom1`) region is already configured in `vercel.json` for Indian users.

### Via CLI

```bash
npm i -g vercel
vercel
```

## What's responsive

Every section has explicit breakpoints defined in `app/globals.css`:

- **Mobile (< 768px)** — single-column stacks, hamburger menu, reduced type scale, smaller section padding (80px vs 140px)
- **Tablet (768–1023px)** — two-column grids where sensible, nav stays visible
- **Desktop (≥ 1024px)** — full magazine layouts

Responsive classes used: `.sv-section-header`, `.sv-branding-grid`, `.sv-social-layout`, `.sv-digital-layout`, `.sv-content-grid`, `.sv-reels-grid`, `.sv-offline-3up`, `.sv-offline-2up`, `.sv-featured-metrics`, `.sv-studio-grid`, `.sv-studio-team`, `.sv-writing-grid`, `.sv-contact-grid`, `.sv-hero-trio`, `.sv-work-row`, `.sv-footer-grid`, `.sv-deliverables`, `.sv-nav-links`.

All typography uses `clamp()` for fluid scaling between breakpoints.

## Media

All uploaded media has been optimized:

- **Portraits** — resized to 1600px max, JPEG quality 82
- **Editorial illustrations** — resized to 1800px max, JPEG quality 85
- **App demo video** — compressed from 153MB to 1.8MB (720p, CRF 28, H.264 + AAC, `+faststart` for streaming)
- **Web screenshot** — JPEG quality 88

Total media weight: **~3.8MB**. Well within Vercel's edge limits.

## SEO

- **Full metadata** in `app/layout.jsx` — title template, description, keywords, authors, Open Graph, Twitter cards, canonical URL
- **JSON-LD structured data** (Organization + WebSite + Service catalog) in `components/layout/StructuredData.jsx`
- **Sitemap** auto-generated at `/sitemap.xml` via `app/sitemap.js`
- **Semantic HTML** — exactly one `<h1>`, proper heading hierarchy, ARIA labels on all SVGs, landmark roles (`banner`, `main`, `navigation`, `contentinfo`)
- **Skip-to-content** link for keyboard users
- **Reduced-motion** support via `prefers-reduced-motion` media query

## Customizing

- **Colors** — edit `lib/palette.js` (the `P` object) and matching CSS variables in `app/globals.css` `:root`
- **Brand details** — `BRAND` object in `lib/palette.js` (email, phone, address, social links)
- **Section order** — `app/page.jsx`
- **Copy** — each section component in `components/sections/`
- **SVG assets** — `components/assets/packaging-social.jsx` and `components/assets/film-ooh.jsx`

## Replacing placeholder media

Placeholder media from this build is stored by intent:

- `/media/portraits/anika.jpg`, `rohan.jpg`, `ishita.jpg` → testimonial headshots. Used in `components/sections/Testimonial.jsx`.
- `/media/social/online-to-offline.jpg`, `still-alone.jpg` → social feed post examples. Used in `DisciplineSocial` in `components/sections/Disciplines.jsx`.
- `/media/web/annatar-forge.jpg` → web design portfolio screenshot. Used in `DisciplineDigital` + `WorkIndex`.
- `/media/video/app-demo.mp4` → app demo, plays inside the phone frame when scrolled into view. Used in `DisciplineDigital`.
- `/media/editorial/community.jpg`, `growth.jpg`, `isolation.jpg` → essay cover images. Used in `Writing.jsx`.

To swap, just replace the files at those paths (or update the paths in the relevant component).

## Fonts

Fonts load from Google Fonts via `@import` at the top of `globals.css`. For better performance, migrate to `next/font` later — the setup is compatible but not yet wired up (would need a `fonts.js` module).

## License

© 2026 Social Verse Studio. All rights reserved.
