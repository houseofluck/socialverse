# Social Verse - Website

Premium digital marketing agency website built with Next.js, Tailwind CSS, and Framer Motion. All user inquiries route to WhatsApp via `wa.me` deep links with a backend API for lead capture.

## Quick Start

```bash
# Install dependencies
npm install

# Copy env file and configure
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

### 1. WhatsApp Number (Required)

Update in **two places**:

- `.env.local` → `NEXT_PUBLIC_WHATSAPP_NUMBER=91XXXXXXXXXX`
- `src/lib/config.ts` → fallback value in `WHATSAPP_NUMBER`

Format: country code + number, no `+` or spaces. Example: `919876543210`

### 2. Site Details

Edit `src/lib/config.ts` → `SITE_CONFIG` object:

```ts
export const SITE_CONFIG = {
  name: "Social Verse",
  email: "info@thesocialverse.com",
  instagram: "https://instagram.com/thesocialverse",
  facebook: "https://facebook.com/thesocialverse",
  linkedin: "https://linkedin.com/company/thesocialverse",
};
```

### 3. Domain

Set `SITE_URL` in `.env.local` for sitemap and OG tags.

## Architecture

```
src/
├── app/
│   ├── api/lead/route.ts    ← POST/GET lead capture + webhook notifications
│   ├── admin/
│   │   ├── layout.tsx       ← Admin metadata (noindex)
│   │   ├── loading.tsx      ← Admin loading state
│   │   └── page.tsx         ← Lead dashboard with stats, search, CSV export
│   ├── globals.css           ← Tailwind v4 theme + animations
│   ├── layout.tsx            ← Root layout + SEO metadata + Analytics
│   ├── page.tsx              ← Home page (composes sections)
│   ├── not-found.tsx         ← Custom 404
│   ├── sitemap.ts            ← Dynamic sitemap.xml
│   └── robots.ts             ← robots.txt (blocks /api, /admin)
├── lib/
│   └── config.ts             ← All data, WA number, helper functions
└── components/
    ├── Analytics.tsx          ← GA4 + Meta Pixel + event tracking helpers
    ├── Reveal.tsx             ← Scroll animation wrapper (Framer Motion)
    ├── SectionLabel.tsx       ← Reusable "- LABEL" element
    ├── Preloader.tsx          ← Loading screen
    ├── Navbar.tsx             ← Sticky nav + mobile fullscreen menu
    ├── Hero.tsx               ← Animated hero + WA CTA
    ├── Marquee.tsx            ← Services ticker
    ├── Stats.tsx              ← Animated counters
    ├── About.tsx              ← About + 4 pillars
    ├── Services.tsx           ← 7 service cards + per-service WA links
    ├── Portfolio.tsx           ← Work showcase grid
    ├── Process.tsx            ← 4-step process
    ├── Testimonials.tsx       ← Client reviews
    ├── WhyUs.tsx              ← 6 advantage cards
    ├── FAQ.tsx                ← Accordion + WA fallback
    ├── Contact.tsx            ← Form → API → WhatsApp redirect
    ├── Footer.tsx             ← Footer + socials + WA button
    └── FloatingButtons.tsx    ← Floating WA bubble + back-to-top
```

## WhatsApp Flow

```
User fills contact form
  → POST /api/lead (saves to data/leads.json)
  → Opens wa.me/{number}?text={structured_message}
  → Conversation continues on WhatsApp
```

Every CTA on the site (hero, service cards, FAQ, footer, floating button) uses the same `openWhatsApp()` helper from `config.ts`.

## Lead Capture API

### Save a lead

```
POST /api/lead
Content-Type: application/json

{
  "name": "John Doe",
  "business": "Acme Corp",
  "service": "Social Media Management",
  "budget": "₹25K - ₹50K/mo",
  "message": "Looking to grow our Instagram",
  "source": "contact_form"
}
```

### List all leads

```
GET /api/lead
```

> ⚠️ The GET endpoint is unprotected. Add auth middleware before deploying to production.

### Storage

Leads save to `data/leads.json` by default. For production, swap the file-based storage in `src/app/api/lead/route.ts` with your preferred database (PostgreSQL, MongoDB, Supabase, etc).

### Lead Notifications

Get instant alerts when a new lead comes in. Configure in `.env.local`:

**Telegram** - set `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID`. Create a bot via @BotFather.

**Slack** - set `LEAD_WEBHOOK_URL` to your Slack Incoming Webhook URL.

**Discord / Custom** - set `LEAD_WEBHOOK_URL` to any POST endpoint. Receives `{ text, lead }`.

Notifications are fire-and-forget - they never block the lead capture or WhatsApp redirect.

## Admin Dashboard

Access at `/admin`. Default password: `socialverse2026` (change via `NEXT_PUBLIC_ADMIN_PASSWORD` env var).

Features:
- Lead stats (total, today, this week, top service)
- Searchable leads table
- CSV export
- Auto-refresh

The admin page is blocked from search engine indexing via `robots.txt` and `<meta robots>`.

## Analytics

Google Analytics 4 and Meta Pixel are supported out of the box. Set env vars:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=1234567890
```

Every WhatsApp click is tracked with the source (hero, service card, FAQ, footer, floating button, contact form). Custom events available via `analytics` helper in `src/components/Analytics.tsx`.

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Set environment variables in Vercel dashboard:
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `SITE_URL`
- `NEXT_PUBLIC_GA_ID` (optional)
- `NEXT_PUBLIC_META_PIXEL_ID` (optional)
- `TELEGRAM_BOT_TOKEN` + `TELEGRAM_CHAT_ID` (optional)
- `NEXT_PUBLIC_ADMIN_PASSWORD` (optional)

> **Note:** The file-based lead storage (`data/leads.json`) won't persist on Vercel's serverless functions. Use a database for production lead capture, or pipe leads to a Google Sheet / Notion / webhook instead.

### Railway / VPS

```bash
npm run build
npm start
```

Runs on port 3000 by default. File-based storage works fine on persistent servers.

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Remix Icon (CDN)
- **Fonts:** Playfair Display + Outfit + DM Sans (Google Fonts)
- **Lead API:** Next.js Route Handlers (file-based, swap for DB)

## Customization

### Add/Edit Services

Edit the `SERVICES` array in `src/lib/config.ts`. Each service needs an icon (Remix Icon class), title, description, and tags array.

### Add/Edit Testimonials

Edit the `TESTIMONIALS` array in `src/lib/config.ts`.

### Add/Edit FAQ

Edit the `FAQ_ITEMS` array in `src/lib/config.ts`.

### Colors

Brand tokens are defined in `src/app/globals.css` under `@theme inline`. Key values:
- `--color-gold: #C4A265` (primary accent)
- `--color-black: #0A0A0A` (backgrounds)
- `--color-cream: #F5F0E8` (light sections)

## License

Private. All rights reserved.
# socialverse
