# The Social Verse — React project

A 1:1 React port of the site: identical markup, inline styling, tokens, animations and page-wipe transitions. High-fidelity — treat every color, size and easing as final.

## Quick start
```
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Pages (17)
index (Home), portfolio, services, case-studies + case-olive-heights / case-awesome-palace / case-ahvi-gold, about, clients, contact, blog + 6 blog articles (blog-reels, blog-meta-ads, blog-trust, blog-hoardings, blog-local-seo, blog-grid).

## Structure
- One HTML entry per page (Vite multi-page app). Internal links do real navigations so the chevron page-wipe plays between pages.
- `src/pages/*.jsx` — JSX render + a `Component` class per page (data in `renderVals`, behavior in `boot()`: reveals, marquees, mega menu, wipe, magnetic buttons, video autoplay management, three.js dot field).
- `src/lib/dc.js` — hook that runs those classes. `src/lib/three-fx.js` — WebGL dot field (npm `three`). `src/lib/cssText.js` — CSS-string → style-object helper.
- `src/styles/global.css` — design tokens; `src/styles/hover.css` — generated hover states.
- `public/ds/styles.css` — Modernist design-system stylesheet (buttons, forms, tables). `public/image-slot.js` — drag-and-drop image placeholder web component (drops persist in localStorage; swap for real `<img>` in production). `public/uploads/` — media (4K originals; compress before shipping).

## Design tokens
Brand gold `#ab905c` on paper `#f6f3ec` with ink `#1d1a14`; pop colors (`#ffd23f #ff6b35 #2ec4b6 #ff8fab`) appear only in hovers, effects and the page-wipe. Type: Archivo via the design-system stylesheet.

## Notes
- No `<StrictMode>`: page classes attach document-level listeners on mount; StrictMode's dev double-mount would double-run them.
- `prefers-reduced-motion` is honored (calm mode disables wipe, zooms, magnetics).
- Contact form opens a pre-filled email to info@thesocialverse.co.in.
