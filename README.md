# TheSocialVerse — Next.js

This is the TheSocialVerse agency website, wired together as a Next.js 14 project (App Router).

## Quick start

```bash
npm install
npm run dev
```

The site runs at <http://localhost:3000>.

## What changed from the static HTML build

### 1. Routing
All HTML pages are now Next.js routes:

| Static file | Next.js route |
|---|---|
| `index.html` | `/` |
| `about.html` | `/about` |
| `services.html` | `/services` |
| `service-detail.html?service=X` | `/services/[slug]` |
| `works.html` | `/works` |
| `project.html` | `/projects/[slug]` |
| `case-study.html` | `/case-studies/[slug]` |
| `blog-post.html` | `/blog/[slug]` |
| `career.html` | `/careers` |

### 2. Theme: red → gold
Single source of truth for colors is in `app/globals.css`:

```css
:root {
  --accent:      #d4a017;            /* gold (was #e60028 red) */
  --accent-dark: #b8860b;            /* hover (was #c40023)    */
  --accent-soft: #fff5d6;            /* soft tint              */
  --accent-glow: rgba(212,160,23,.35);
}
```

Change `--accent` and `--accent-dark` to re-skin the entire site. Every CTA, link hover, eyebrow, focus ring, and active state pulls from these variables.

### 3. Per-page hero gradient themes
Each page that previously had the red→purple gradient now has its own palette. The themes are defined as utility classes in `globals.css`:

| Page | Theme class | Palette |
|---|---|---|
| `/services`, `/services/[slug]` | `.theme-purple` | violet → magenta |
| `/projects/[slug]` | `.theme-blue` | navy → teal |
| `/case-studies/[slug]` | `.theme-green` | emerald → mint |
| `/careers` | `.theme-orange` | sunset orange |

To add a new theme, copy the pattern in `globals.css`:

```css
.hero-gradient.theme-XXX {
  background: ...;
}
.hero-gradient.theme-XXX::before {
  background: radial-gradient(...);
}
```

Then add `hero-gradient theme-XXX` to your hero `<section>`.

## Project structure

```
.
├── app/
│   ├── layout.js                    Root layout (Inter font, Navbar, Footer)
│   ├── globals.css                  Theme tokens + shared component CSS
│   ├── page.js                      Home
│   ├── about/page.js
│   ├── services/page.js
│   ├── services/[slug]/page.js      Service detail (dynamic)
│   ├── works/page.js                Portfolio listing
│   ├── projects/[slug]/page.js      Single project (dynamic)
│   ├── case-studies/[slug]/page.js  Case study (dynamic)
│   ├── blog/[slug]/page.js          Blog post (dynamic)
│   └── careers/page.js
├── components/
│   ├── Navbar.jsx                   Active route detection, hamburger menu
│   ├── Footer.jsx                   Cities accordion, social icons
│   └── WhatsAppFloat.jsx            Bottom-right floating button
├── public/
│   └── hero.mp4                     Homepage hero video
├── package.json
├── next.config.mjs
├── jsconfig.json                    `@/` alias
└── .gitignore
```

## Notes & next steps

- **Dynamic routes (`[slug]`)** currently render the same content regardless of the slug. To wire them up to a CMS or data file, use `generateStaticParams` in each `[slug]/page.js`, then fetch the right item by slug from your data source.
- **Forms** call `event.preventDefault()` and show a placeholder `alert()`. Wire them to your real backend (or a service like Formspree, Resend, or a Lambda).
- **Hero video** lives at `public/hero.mp4`. Replace with your own.
- **WhatsApp link** is `https://wa.me/` — add your phone number.
- **Trust badges** in the footer are styled placeholders. Replace with real Trustpilot/Glassdoor embeds or remove.
- **Per-page CSS** is currently embedded in each page component as a `<style>{`…`}</style>` block. As you refactor, you can move repeated rules into `globals.css` or convert each page to use a CSS module (`page.module.css`).

## License

Yours to use however you want.
