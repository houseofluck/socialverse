"use client";

import { useEffect } from "react";

export default function ServicesSlugPage() {
  useEffect(() => {
    // ============================================================
      //  SERVICE DATA
      //  Each service has a unique slug. The page reads ?service=<slug>
      //  from the URL and populates content accordingly.
      //  Add or modify services here.
      // ============================================================
      const SERVICE_DATA = {
        'digital-marketing': {
          titleStatic: 'Digital Marketing ',
          titleAccent: 'Services',
          pageTitle: 'Digital Marketing — TheSocialVerse',
          boostTitle: 'With The Help Of Digital Marketing Services',
          boostText: "In today's age, just having an online presence isn't enough. You need a dynamic strategy that helps you stand out in a crowded digital landscape. Our team partners with you to design and execute campaigns that drive real growth — combining creative storytelling with data-led decisions to scale your brand and connect with the right audience at the right time.",
          capsTitle: 'Our Digital Marketing Services',
          capsDesc: 'We offer a wide range of digital marketing services to meet all your needs:',
          caps: [
            { title: 'Digital Marketing',  body: 'A comprehensive strategy that ties together every channel — paid, organic, and owned — so every campaign works harder for your business.' },
            { title: 'Google Ads',          body: 'High-intent leads delivered through tightly targeted Google Ads campaigns, optimised continuously for cost per acquisition and ROI.' },
            { title: 'SEO Services',        body: 'Long-term organic visibility through technical SEO, on-page optimisation, and authority building that compounds over time.' },
            { title: 'Email Marketing',     body: 'Personalised email journeys that nurture leads, re-engage customers, and drive measurable revenue from your existing audience.' },
            { title: 'Google My Business',  body: 'Dominate local search with optimised Google Business profiles, accurate listings, and review-driven trust signals.' },
            { title: 'Content Marketing',   body: 'Story-led content that earns attention, builds trust, and ranks — from long-form articles to short-form social hooks.' },
            { title: 'Social Media Marketing', body: 'Always-on social presence built around platform-native creative, community engagement, and performance media.' },
            { title: 'WhatsApp Marketing',  body: 'Reach your audience where they actually respond — broadcast updates, automated flows, and 1:1 conversations at scale.' }
          ],
          whyTitle: 'Why Choose TheSocialVerse?',
          elevateTitle: 'Elevate Your Business with Expert Digital Marketing',
          elevate: [
            { title: 'Comprehensive Strategy Development', body: "Our experts work closely with you to understand your brand identity, audience, and objectives — then craft a marketing strategy built to deliver real results, not just clicks." },
            { title: 'Data-Driven Decision Making',         body: "We don't believe in guesswork. Our digital marketing services are powered by deep analytics — we measure open rates, click-throughs, and conversion metrics to continuously optimise for ROI." },
            { title: 'Top Industry Experts',                body: "At TheSocialVerse you work with senior practitioners across SEO, paid media, content, and design. Years of experience and a track record of delivering — that's what shapes your campaigns." }
          ],
          faqs: [
            { q: 'What is Digital Marketing?',
              a: 'Digital marketing involves promoting products or services through digital channels — including search engines, social media, email, and websites — to reach and engage potential customers wherever they spend their time online.' },
            { q: 'How long does it take to see results from digital marketing?',
              a: 'Paid channels can show signal within days, while organic channels like SEO and content typically take 3–6 months to compound. We share weekly reporting so you always know how campaigns are tracking against goals.' },
            { q: 'How do I choose the right digital marketing partner?',
              a: 'Look for a partner that asks about your business outcomes first, shares clear measurement frameworks, and shows real client results. Strategy clarity, transparent reporting, and senior involvement matter more than headline rates.' },
            { q: 'What is the cost of digital marketing services?',
              a: 'Costs vary based on scope, channels, and ambition. We build custom proposals after understanding your goals and current setup — get in touch for a tailored quote.' }
          ]
        },
        'website-development': {
          titleStatic: 'Website Development ',
          titleAccent: 'Services',
          pageTitle: 'Website Development — TheSocialVerse',
          boostTitle: 'Build A Website That Actually Performs',
          boostText: "Your website is your most important digital asset — the always-on storefront that introduces your brand, converts visitors, and powers your campaigns. Our development team builds sites that are fast, accessible, and built to scale, with clean code, thoughtful UX, and CMS workflows your team will actually enjoy using.",
          capsTitle: 'Our Website Development Services',
          capsDesc: 'From quick landing pages to complex e-commerce platforms — we build the right web stack for your goals.',
          caps: [
            { title: 'Shopify Development',       body: 'Beautiful, conversion-focused Shopify stores built for performance, scalability, and easy day-to-day merchandising.' },
            { title: 'WordPress Development',     body: 'Custom WordPress sites with bespoke themes, plugin engineering, and editor experiences your content team will love.' },
            { title: 'Custom Web Applications',   body: 'Bespoke web apps built on modern stacks (Next.js, Node, Laravel) — engineered for performance, security, and scale.' },
            { title: 'Landing Pages',             body: 'High-converting landing pages designed and built fast — perfect for paid campaigns, launches, and lead generation.' },
            { title: 'Magento Development',       body: 'Enterprise-grade e-commerce on Magento — multi-store, multi-region, complex catalogue, full integrations.' },
            { title: 'UI / UX Design',            body: 'User research, wireframes, and design systems that make every interaction feel intentional and easy.' },
            { title: 'Website AMC',               body: 'Ongoing maintenance, security patches, performance tuning, and feature releases — your site, always cared for.' },
            { title: 'PHP Development',           body: 'Custom PHP-based websites and tooling — clean architecture, well-tested, and built to last.' }
          ],
          whyTitle: 'Why Build With TheSocialVerse?',
          elevateTitle: 'Build Better with Expert Web Development',
          elevate: [
            { title: 'Performance-First Engineering', body: "Sites built to load fast, score green on Core Web Vitals, and convert. We treat performance as a feature, not an afterthought." },
            { title: 'Conversion-Focused Design',     body: "Every page is designed around the user's journey — clear hierarchy, friction-free flows, and copy that earns the next click." },
            { title: 'Reliable Long-Term Support',    body: "We don't disappear after launch. Our AMC plans keep your site secure, fast, and current as your business evolves." }
          ],
          faqs: [
            { q: 'How long does it take to build a website?',
              a: 'A typical marketing website takes 4–8 weeks from kickoff to launch. E-commerce and custom builds can take 8–16 weeks depending on scope. We share a clear timeline upfront.' },
            { q: 'Which platform should I choose — WordPress, Shopify, or custom?',
              a: 'It depends on your goals. WordPress is great for content-heavy sites, Shopify is best for retail e-commerce, and custom builds make sense when you have specific functional needs that off-the-shelf platforms cannot meet.' },
            { q: 'Will my website be mobile-friendly?',
              a: 'Yes. Every site we ship is fully responsive across devices and tested on real phones, tablets, and desktops before going live.' },
            { q: 'Do you provide ongoing maintenance after launch?',
              a: 'Yes — our AMC plans cover security updates, backups, performance monitoring, content changes, and small feature work on an ongoing basis.' }
          ]
        },
        'video-production': {
          titleStatic: 'Video Production ',
          titleAccent: 'Services',
          pageTitle: 'Video Production — TheSocialVerse',
          boostTitle: 'Tell Your Story Through Powerful Video',
          boostText: "Video is the most engaging format on the internet — and the format your audience expects. Our production team handles everything from concept and scripting through shoot, edit, motion, and delivery, producing videos that earn attention on social, on TV, and in your sales conversations.",
          capsTitle: 'Our Video Production Services',
          capsDesc: 'Strategy, shoot, post, and motion — full-stack video production under one roof.',
          caps: [
            { title: 'Video Content Strategy', body: 'Editorial calendars, formats, and platform-fit thinking that turns video from a one-off into a system.' },
            { title: 'TV & OTT Commercials',   body: 'Brand campaigns engineered for the big screen — concept, casting, shoot, and post in one production.' },
            { title: 'Corporate Videos',       body: 'Internal comms, training, brand films, and event recap videos — polished, on-brand, and on time.' },
            { title: '2D & 3D Animation',      body: 'Bespoke 2D and 3D animation for explainer videos, product demos, and social-first content.' },
            { title: 'Promotional Videos',     body: 'Short, punchy campaign videos built for paid social and performance — designed to convert in the first three seconds.' },
            { title: 'Whiteboard Animation',   body: 'Whiteboard explainers that simplify complex products, services, or training material into clear, watchable stories.' }
          ],
          whyTitle: 'Why Produce With TheSocialVerse?',
          elevateTitle: 'Create Video That Actually Performs',
          elevate: [
            { title: 'End-to-End Production',   body: 'From the first scribble on a script through the final colour grade — one team, one timeline, one accountable partner.' },
            { title: 'Platform-Native Thinking', body: 'Vertical for Reels, square for feed, 16:9 for YouTube — we shoot and edit with the destination platform in mind.' },
            { title: 'Story-First Craft',       body: "Beautiful visuals matter, but story matters more. Every project starts with what you're trying to say and who you're trying to reach." }
          ],
          faqs: [
            { q: 'How long does video production take?',
              a: 'A simple promo video takes 2–4 weeks. Larger commercials or films with location shoots, casting, and complex post can take 6–12 weeks. We map the timeline to your launch date.' },
            { q: 'Do you handle scripting, or do I provide it?',
              a: 'Either works. Most clients prefer us to lead scripting based on a brief — but we are equally happy to bring an existing script to life if you have one.' },
            { q: 'Can you shoot on location?',
              a: 'Yes. We handle location scouting, permits, talent, crew, and equipment — anywhere we are licensed to operate.' },
            { q: 'What deliverables do I get at the end?',
              a: 'Master files in the formats you need (broadcast, social, web), short cutdowns for paid campaigns, and source files where appropriate.' }
          ]
        },
        'presentation-design': {
          titleStatic: 'Presentation Design ',
          titleAccent: 'Services',
          pageTitle: 'Presentation Design — TheSocialVerse',
          boostTitle: 'Decks That Win Rooms',
          boostText: "A great presentation can move money, win clients, and shift strategy — a bad one buries it. Our presentation designers turn complex content into clear, beautiful slides that your audience actually wants to read, whether it's a 90-slide investor deck or a five-minute internal pitch.",
          capsTitle: 'Our Presentation Design Services',
          capsDesc: 'Custom decks, templates, and pitch design — all tailored to your audience and goal.',
          caps: [
            { title: 'Investor Pitch Decks',     body: 'Fundraising decks that tell a tight, compelling story — built around the metrics, narrative, and visuals investors want to see.' },
            { title: 'Corporate Presentations',  body: 'Polished decks for boards, leadership, and external stakeholders — visually consistent and on-brand.' },
            { title: 'Sales Presentations',      body: 'Decks engineered to close — clear value proposition, customer-centric framing, and persuasive design.' },
            { title: 'Financial Presentations',  body: 'Earnings decks, investor updates, and financial reviews where clarity, accuracy, and credibility matter most.' },
            { title: 'Slide Templates',          body: 'Reusable, on-brand PowerPoint and Google Slides templates that empower your whole team to ship great-looking decks.' },
            { title: 'Custom PowerPoint Design', body: 'One-off bespoke decks built from scratch — no templates, no compromises, every slide tailored to your story.' }
          ],
          whyTitle: 'Why Design Decks With TheSocialVerse?',
          elevateTitle: 'Win Rooms with Better Presentation Design',
          elevate: [
            { title: 'Story Before Slides',  body: "We build the narrative first, then design around it. Every slide earns its place in the story you're telling." },
            { title: 'Editable Deliverables', body: "We hand over fully editable PowerPoint or Google Slides files — your team can update content without a designer in the loop." },
            { title: 'Brand-Consistent Design', body: "Decks that feel unmistakably yours — consistent typography, colour, iconography, and visual language across every slide." }
          ],
          faqs: [
            { q: 'How long does it take to design a presentation?',
              a: 'A 20–30 slide deck typically takes 1–2 weeks. Larger decks or projects with heavy custom illustration can take 3–4 weeks. Rush turnarounds are possible — talk to us about your deadline.' },
            { q: 'Do you work in PowerPoint, Google Slides, or Keynote?',
              a: 'All three. We deliver in whichever format your team uses day-to-day so the deck stays editable for you.' },
            { q: 'Can you help with content as well as design?',
              a: 'Yes. Many of our deck projects start with story and content strategy before we touch a slide. We can be as hands-on or as design-only as you need.' },
            { q: 'Will I be able to edit the deck after delivery?',
              a: 'Absolutely. Files are clean, layered, and built with editable text and reusable components so your team can keep updating the deck long after we hand it over.' }
          ]
        },
        'branding-strategy': {
          titleStatic: 'Branding & Strategy ',
          titleAccent: 'Services',
          pageTitle: 'Branding & Strategy — TheSocialVerse',
          boostTitle: 'Brands That Stand For Something',
          boostText: "Strong brands aren't built by accident. They're the result of clear positioning, sharp visual identity, and consistent storytelling — applied with discipline across every touchpoint. Our branding team helps you define what your brand stands for, what it sounds like, and how it shows up — across every channel and every audience.",
          capsTitle: 'Our Branding & Strategy Services',
          capsDesc: 'From positioning to identity systems — full-stack brand work for companies ready to grow up.',
          caps: [
            { title: 'Brand Strategy',           body: 'Positioning, audience, and narrative work that gives your brand a clear point of view and a reason to exist.' },
            { title: 'Logo & Identity',          body: 'Distinctive logo systems and visual identities that work as hard at 16px on a phone as they do on a billboard.' },
            { title: 'Brand Style Guide',        body: 'Documented design systems — typography, colour, spacing, logo usage — that keep your brand consistent at scale.' },
            { title: 'Naming & Taglines',        body: 'Names and taglines that are memorable, ownable, and built to last. Strategy first, words second.' },
            { title: 'Messaging & Positioning',  body: 'A clear messaging hierarchy that tells your audience what you do, who you do it for, and why it matters.' },
            { title: 'Voice & Tone',             body: 'A defined brand voice with practical guidance — so every email, post, and pitch sounds unmistakably like you.' },
            { title: 'Corporate Identity',       body: 'Stationery, signage, presentation templates, and brand collateral — every touchpoint, on-system.' }
          ],
          whyTitle: 'Why Brand With TheSocialVerse?',
          elevateTitle: 'Build a Brand That Lasts',
          elevate: [
            { title: 'Strategy First',         body: 'We never start with a logo. Strategy comes first — because what your brand stands for shapes how it looks and sounds.' },
            { title: 'Systems, Not Just Assets', body: 'You leave with reusable design systems your team can extend — not a folder of one-off files.' },
            { title: 'Built to Last',          body: 'Brands designed for a decade, not a season. We work toward identities that age well and scale across channels.' }
          ],
          faqs: [
            { q: 'How long does a branding project take?',
              a: 'A focused identity project takes 4–6 weeks. Full brand work with strategy, naming, identity, and guidelines typically runs 8–12 weeks.' },
            { q: 'Do you offer logo-only design?',
              a: "We don't usually take on logo-only projects because logos work best as part of a system. We're happy to discuss a small identity package if a full project isn't a fit." },
            { q: 'What deliverables do I receive?',
              a: 'A typical brand kit includes the logo (in all formats and variants), colour and type system, brand guidelines PDF, and starter templates for social and presentations.' },
            { q: 'Can you also build the website with the new brand?',
              a: 'Yes — we can roll the new identity directly into a website project so launch day is fully aligned end-to-end.' }
          ]
        },
        'print-package-design': {
          titleStatic: 'Print & Package Design ',
          titleAccent: 'Services',
          pageTitle: 'Print & Package Design — TheSocialVerse',
          boostTitle: 'Packaging That Sells Off The Shelf',
          boostText: "Great packaging is the silent salesperson on every shelf. It tells your story in three seconds, builds trust at the point of decision, and turns first-time buyers into loyal customers. Our packaging team designs structures and graphics that protect your product, communicate your brand, and stand out wherever your buyers are looking.",
          capsTitle: 'Our Print & Package Design Services',
          capsDesc: 'From packaging structure to brochures and reports — print design done right.',
          caps: [
            { title: 'Food Packaging',           body: 'Appetite-driving packaging design for FMCG, snacks, beverages, and specialty food brands — built for retail shelves and direct-to-consumer.' },
            { title: 'Box & Carton Design',      body: 'Structural and graphic design for primary and secondary cartons — beautiful, functional, and production-ready.' },
            { title: 'Electronics Packaging',    body: 'Premium unboxing experiences for tech and electronics — packaging that feels as considered as the product inside.' },
            { title: 'Brochures & Catalogues',   body: 'Editorial-quality brochures and catalogues that present your range, your story, and your offer clearly.' },
            { title: 'Annual Reports',           body: "Editorial-led annual reports that turn dense data into a compelling read — printed beautifully, designed for digital too." },
            { title: 'Corporate Stationery',     body: 'Letterheads, business cards, envelopes, and folders — every print touchpoint, on brand.' }
          ],
          whyTitle: 'Why Print & Package With Us?',
          elevateTitle: 'Packaging That Wins on Shelf',
          elevate: [
            { title: 'Production-Ready From Day One', body: 'We design with print in mind — die-lines, bleeds, colour profiles, substrates. No nasty surprises at proofing.' },
            { title: 'Strategy + Craft',              body: "We start by understanding the shelf, the shopper, and the moment of decision. Then we design to win that moment." },
            { title: 'Print Partner Network',         body: "Long-standing printer relationships across India and abroad mean we can recommend the right partner for your run size and budget." }
          ],
          faqs: [
            { q: 'Can you handle the print production too?',
              a: "Yes. We can manage everything end-to-end — design, dieline approval, press checks, and final delivery — or hand off print-ready files to your existing printer." },
            { q: 'Do you offer 3D mockups before printing?',
              a: 'Always. Every packaging project includes 3D renders for stakeholder approval before we go to press, plus dieline drawings for production.' },
            { q: 'Can you design eco-friendly packaging?',
              a: 'Yes — we work with FSC-certified paper, recyclable plastics, and biodegradable substrates. We can advise on sustainable choices that fit your budget and brand.' },
            { q: 'How many design rounds are included?',
              a: "Most projects include three rounds of revision after the initial concepts. We'll lay out exactly what's covered before we kick off." }
          ]
        },
        'social-media-marketing': {
          titleStatic: 'Social Media Marketing ',
          titleAccent: 'Services',
          pageTitle: 'Social Media Marketing — TheSocialVerse',
          boostTitle: 'Build Communities, Not Just Followers',
          boostText: "Social media is more than posting — it's how modern brands build real audiences, ship products, and earn loyalty. Our social team runs always-on content, paid media, and community management for ambitious brands across Instagram, LinkedIn, YouTube, and beyond. We focus on what actually moves the business: engagement, leads, and revenue.",
          capsTitle: 'Our Social Media Marketing Services',
          capsDesc: 'Strategy, content, paid media, and community — full-service social marketing.',
          caps: [
            { title: 'Facebook & Instagram',     body: 'Always-on Meta presence with platform-native content, paid amplification, and community management.' },
            { title: 'LinkedIn Marketing',       body: 'B2B-grade LinkedIn presence — thought leadership, employee advocacy, lead gen forms, and ABM creative.' },
            { title: 'Social Media Management',  body: 'End-to-end management of your social handles — calendar, content, scheduling, monitoring, and reporting.' },
            { title: 'Social Advertising',       body: 'Performance media across Meta, LinkedIn, X, and YouTube — built around clear KPIs and continuous optimisation.' },
            { title: 'Brand Management',         body: 'Brand-safe community engagement, response playbooks, and crisis-ready protocols — protecting your brand 24/7.' },
            { title: 'Reputation Management',    body: 'Review monitoring, response strategy, and online reputation management — so your social signal stays positive.' }
          ],
          whyTitle: 'Why Run Social With TheSocialVerse?',
          elevateTitle: 'Grow Faster with Strategic Social Marketing',
          elevate: [
            { title: 'Platform-Native Creative', body: 'No more recycled assets. We build content for the platform it lives on — Reels look like Reels, LinkedIn looks like LinkedIn.' },
            { title: 'Paid + Organic, Together', body: 'We run paid amplification and organic content side-by-side — so your best content gets seen, and your best ads feel native.' },
            { title: 'Reporting You Can Use',    body: 'Weekly snapshots and monthly reviews focused on what matters — reach, engagement, leads, and revenue.' }
          ],
          faqs: [
            { q: 'Which platforms should I be on?',
              a: 'It depends on your audience. Most B2C brands win on Instagram and YouTube; most B2B brands win on LinkedIn. We help you pick the right two or three to focus on rather than spreading thin.' },
            { q: 'How often will you post?',
              a: 'Cadence depends on platform and goal. A typical brand we manage publishes 3–5 times per week per priority channel, plus daily stories and weekly Reels.' },
            { q: 'Do you also handle paid social?',
              a: 'Yes. Paid and organic are run by the same team so creative and targeting stay tightly integrated — that integration is where most of the performance comes from.' },
            { q: 'How do you measure success?',
              a: 'We agree KPIs upfront — usually a mix of reach/engagement, lead volume, and downstream revenue. Reporting maps directly to those metrics each month.' }
          ]
        },
        'ui-ux-design': {
          titleStatic: 'UI / UX Design ',
          titleAccent: 'Services',
          pageTitle: 'UI / UX Design — TheSocialVerse',
          boostTitle: 'Design Products People Love To Use',
          boostText: "Great products feel inevitable. Every flow makes sense, every screen earns its place, and every interaction respects the user's time. Our UI/UX team applies user research, interaction design, and visual craft to turn complex products into experiences people genuinely enjoy — and keep coming back to.",
          capsTitle: 'Our UI / UX Design Services',
          capsDesc: 'Research, interaction design, and visual systems for digital products that work.',
          caps: [
            { title: 'User Flows',         body: 'Carefully mapped user journeys that clarify what users need, what stands in their way, and the cleanest path through.' },
            { title: 'Prototype Design',   body: 'Interactive prototypes you can click through — to validate ideas with users and stakeholders before a line of code is written.' },
            { title: 'Dashboard UI',       body: 'Information-dense interfaces designed to help users make decisions fast — clear hierarchy, smart defaults, no clutter.' },
            { title: 'Mobile App UI / UX', body: 'Native-feeling iOS and Android interfaces designed around platform conventions and the realities of small screens.' },
            { title: 'User Research',      body: 'Interviews, usability testing, and analytics review — grounded research that informs every design decision.' },
            { title: 'Concept Ideation',   body: 'Early-stage exploration sprints that pressure-test ideas and turn vague briefs into shippable concepts.' }
          ],
          whyTitle: 'Why Design Products With Us?',
          elevateTitle: 'Build Products Users Love',
          elevate: [
            { title: 'Research-Led Design',  body: 'We design with users, not just for them — every project starts with talking to real people about real problems.' },
            { title: 'Systems Thinking',     body: 'We build design systems, not one-off screens. Components, tokens, and patterns your eng team can ship faster with.' },
            { title: 'Hand-Off Engineers Trust', body: 'Specs, prototypes, and assets organised the way developers actually want them — so design hits production with no guesswork.' }
          ],
          faqs: [
            { q: 'Do you handle research, design, and prototyping?',
              a: 'Yes — full-stack product design. We can come in at any stage: discovery research, redesign of an existing product, or design partnership for a new build.' },
            { q: 'How do you collaborate with my engineering team?',
              a: 'Closely. We use Figma for design, share specs and prototypes weekly, attend standups when needed, and stay involved through implementation and QA.' },
            { q: 'Can you also build a design system for us?',
              a: 'Yes. We design and document reusable component libraries with tokens, variants, and usage guidelines that scale across products and teams.' },
            { q: 'How long does a typical product project take?',
              a: 'A focused redesign takes 6–10 weeks. New product design from research through to handoff usually runs 12–20 weeks depending on complexity.' }
          ]
        }
      };

      // ============================================================
      //  ICONS — keyed by capability title keyword
      // ============================================================
      function iconFor(title) {
        const t = title.toLowerCase();
        if (t.includes('digital marketing'))  return iconLaptopMegaphone();
        if (t.includes('google ads'))         return iconLaptopAds();
        if (t.includes('seo'))                return iconLaptopSEO();
        if (t.includes('email'))              return iconEmail();
        if (t.includes('google my business')) return iconLetters();
        if (t.includes('content'))            return iconBox();
        if (t.includes('social') || t.includes('facebook') || t.includes('linkedin')) return iconSocial();
        if (t.includes('whatsapp'))           return iconPhoneAlert();
        if (t.includes('shopify') || t.includes('wordpress') || t.includes('magento') || t.includes('php')) return iconLaptopSEO();
        if (t.includes('landing'))            return iconLaptopAds();
        if (t.includes('app') || t.includes('mobile')) return iconPhoneAlert();
        if (t.includes('ui') || t.includes('ux')) return iconLaptopAds();
        if (t.includes('amc') || t.includes('maintenance')) return iconLaptopMegaphone();
        if (t.includes('custom web'))         return iconLaptopMegaphone();
        if (t.includes('video') || t.includes('animation') || t.includes('whiteboard') || t.includes('promotional') || t.includes('tv')) return iconVideo();
        if (t.includes('investor') || t.includes('corporate') || t.includes('sales') || t.includes('financial') || t.includes('slide') || t.includes('powerpoint')) return iconPresentation();
        if (t.includes('logo') || t.includes('identity') || t.includes('brand')) return iconBrand();
        if (t.includes('messaging') || t.includes('voice') || t.includes('naming') || t.includes('style')) return iconBrand();
        if (t.includes('packag') || t.includes('box') || t.includes('food') || t.includes('electronics')) return iconBox();
        if (t.includes('brochure') || t.includes('annual') || t.includes('stationery')) return iconPresentation();
        if (t.includes('research') || t.includes('flow') || t.includes('prototype') || t.includes('dashboard') || t.includes('concept')) return iconLaptopAds();
        if (t.includes('management') || t.includes('reputation')) return iconSocial();
        return iconLaptopMegaphone();
      }
      // SVG icon definitions
      function iconLaptopMegaphone() { return `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="14" width="44" height="28" rx="2" fill="none" stroke="#1a1a1a" stroke-width="2"/>
        <rect x="2" y="42" width="52" height="3" rx="1.5" fill="#1a1a1a"/>
        <path d="M36 22 L46 17 L46 33 L36 28 Z" fill="#e60028"/>
        <circle cx="22" cy="26" r="6" fill="#e60028" opacity="0.3"/>
        <path d="M16 30 Q22 32 28 30" stroke="#e60028" stroke-width="2" fill="none"/>
      </svg>`; }
      function iconLaptopAds() { return `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="14" width="44" height="28" rx="2" fill="none" stroke="#1a1a1a" stroke-width="2"/>
        <rect x="2" y="42" width="52" height="3" rx="1.5" fill="#1a1a1a"/>
        <line x1="6" y1="22" x2="50" y2="22" stroke="#1a1a1a" stroke-width="1.5"/>
        <rect x="12" y="26" width="20" height="2" fill="#e60028"/>
        <rect x="12" y="30" width="14" height="2" fill="#e60028" opacity="0.5"/>
        <path d="M44 30 l-3 3 3 3" stroke="#e60028" stroke-width="2" fill="none" stroke-linecap="round"/>
      </svg>`; }
      function iconLaptopSEO() { return `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="14" width="44" height="28" rx="2" fill="none" stroke="#1a1a1a" stroke-width="2"/>
        <rect x="2" y="42" width="52" height="3" rx="1.5" fill="#1a1a1a"/>
        <path d="M14 32 L20 26 L26 30 L36 22" stroke="#e60028" stroke-width="2" fill="none" stroke-linecap="round"/>
        <circle cx="36" cy="22" r="2.5" fill="#e60028"/>
      </svg>`; }
      function iconEmail() { return `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="14" width="44" height="28" rx="2" fill="none" stroke="#1a1a1a" stroke-width="2"/>
        <rect x="2" y="42" width="52" height="3" rx="1.5" fill="#1a1a1a"/>
        <path d="M10 20 L28 32 L46 20" stroke="#e60028" stroke-width="2" fill="none"/>
      </svg>`; }
      function iconLetters() { return `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="20" width="22" height="16" rx="2" fill="none" stroke="#1a1a1a" stroke-width="2"/>
        <path d="M14 22 L25 30 L36 22" stroke="#1a1a1a" stroke-width="2" fill="none"/>
        <rect x="28" y="14" width="22" height="16" rx="2" fill="#fde6e6" stroke="#1a1a1a" stroke-width="2"/>
        <circle cx="33" cy="20" r="1.5" fill="#e60028"/>
        <circle cx="44" cy="24" r="1.5" fill="#e60028"/>
      </svg>`; }
      function iconBox() { return `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22 L32 12 L52 22 L52 44 L32 54 L12 44 Z" fill="#fde6e6" stroke="#1a1a1a" stroke-width="2"/>
        <path d="M12 22 L32 32 L52 22" fill="none" stroke="#1a1a1a" stroke-width="2"/>
        <line x1="32" y1="32" x2="32" y2="54" stroke="#1a1a1a" stroke-width="2"/>
        <path d="M22 17 L42 27" stroke="#e60028" stroke-width="2"/>
      </svg>`; }
      function iconSocial() { return `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="14" width="22" height="22" rx="3" fill="#fde6e6" stroke="#1a1a1a" stroke-width="2"/>
        <circle cx="21" cy="25" r="4" fill="none" stroke="#e60028" stroke-width="2"/>
        <circle cx="42" cy="20" r="6" fill="#fde6e6" stroke="#1a1a1a" stroke-width="2"/>
        <text x="42" y="24" text-anchor="middle" font-family="Arial" font-size="9" font-weight="bold" fill="#e60028">!</text>
        <path d="M34 38 L42 32 L52 38 L52 48 L42 54 L34 48 Z" fill="#fde6e6" stroke="#1a1a1a" stroke-width="2"/>
      </svg>`; }
      function iconPhoneAlert() { return `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="10" width="22" height="40" rx="3" fill="#fde6e6" stroke="#1a1a1a" stroke-width="2"/>
        <line x1="20" y1="16" x2="42" y2="16" stroke="#1a1a1a" stroke-width="1.5"/>
        <rect x="24" y="20" width="14" height="2" fill="#1a1a1a"/>
        <rect x="24" y="24" width="10" height="2" fill="#1a1a1a" opacity="0.5"/>
        <rect x="24" y="30" width="6" height="6" fill="#e60028"/>
        <text x="27" y="35" text-anchor="middle" font-family="Arial" font-size="6" fill="#fff">×</text>
      </svg>`; }
      function iconVideo() { return `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="14" width="44" height="28" rx="2" fill="none" stroke="#1a1a1a" stroke-width="2"/>
        <rect x="2" y="42" width="52" height="3" rx="1.5" fill="#1a1a1a"/>
        <circle cx="28" cy="28" r="9" fill="#fde6e6"/>
        <path d="M25 23 L25 33 L34 28 Z" fill="#e60028"/>
      </svg>`; }
      function iconPresentation() { return `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="14" width="44" height="28" rx="2" fill="none" stroke="#1a1a1a" stroke-width="2"/>
        <rect x="2" y="42" width="52" height="3" rx="1.5" fill="#1a1a1a"/>
        <rect x="11" y="20" width="20" height="3" fill="#e60028"/>
        <rect x="11" y="26" width="28" height="2" fill="#1a1a1a" opacity="0.4"/>
        <rect x="11" y="30" width="22" height="2" fill="#1a1a1a" opacity="0.4"/>
        <rect x="38" y="26" width="8" height="10" fill="#fde6e6"/>
      </svg>`; }
      function iconBrand() { return `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="12" width="22" height="30" rx="2" fill="#fde6e6" stroke="#1a1a1a" stroke-width="2"/>
        <circle cx="20" cy="20" r="3" fill="#e60028"/>
        <circle cx="30" cy="20" r="3" fill="#1a1a1a"/>
        <rect x="18" y="28" width="14" height="2" fill="#1a1a1a"/>
        <path d="M40 18 L52 18 L52 34 L46 38 L40 34 Z" fill="#fde6e6" stroke="#1a1a1a" stroke-width="2"/>
      </svg>`; }

      // ============================================================
      //  POPULATE PAGE
      // ============================================================
      function getServiceSlug() {
        const params = new URLSearchParams(window.location.search);
        return params.get('service') || 'digital-marketing';
      }

      function populate() {
        const slug = getServiceSlug();
        const data = SERVICE_DATA[slug] || SERVICE_DATA['digital-marketing'];

        document.title = data.pageTitle;
        document.getElementById('heroTitleStatic').textContent = data.titleStatic;
        document.getElementById('heroAccent').textContent = data.titleAccent;
        document.getElementById('boostTitle').textContent = data.boostTitle;
        document.getElementById('boostText').textContent = data.boostText;
        document.getElementById('capsTitle').textContent = data.capsTitle;
        document.getElementById('capsDesc').textContent = data.capsDesc;
        document.getElementById('whyTitle').textContent = data.whyTitle;
        document.getElementById('elevateTitle').textContent = data.elevateTitle;

        // Capabilities cards
        const capsGrid = document.getElementById('capsGrid');
        capsGrid.innerHTML = data.caps.map(c => `
          <article class="cap-card">
            <div class="cap-icon">${iconFor(c.title)}</div>
            <h3>${c.title}</h3>
            <p>${c.body}</p>
          </article>
        `).join('');

        // Elevate cards
        const elevateGrid = document.getElementById('elevateGrid');
        elevateGrid.innerHTML = data.elevate.map((e, i) => `
          <article class="elevate-card${i === 1 ? ' highlight' : ''}">
            <div class="elevate-num">${String(i + 1).padStart(2, '0')}</div>
            <h3>${e.title}</h3>
            <p>${e.body}</p>
          </article>
        `).join('');

        // FAQs
        const faqList = document.getElementById('faqList');
        faqList.innerHTML = data.faqs.map((f, i) => `
          <div class="faq-item${i === 0 ? ' open' : ''}">
            <button class="faq-toggle" type="button">
              <span class="faq-icon"></span>
              <span class="faq-question">${f.q}</span>
            </button>
            <div class="faq-answer">
              <div class="faq-answer-inner">${f.a}</div>
            </div>
          </div>
        `).join('');

        // Wire up FAQ toggles
        document.querySelectorAll('.faq-toggle').forEach(btn => {
          btn.addEventListener('click', () => {
            btn.parentElement.classList.toggle('open');
          });
        });
      }

      populate();

      // Testimonials dots (simple visual toggle)
      document.querySelectorAll('.testi-dots .dot').forEach((dot, idx) => {
        dot.addEventListener('click', () => {
          document.querySelectorAll('.testi-dots .dot').forEach(d => d.classList.remove('active'));
          dot.classList.add('active');
        });
      });
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `

  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #fff; color: #111; overflow-x: hidden;
  }

  /* ---------- NAVBAR ---------- */



  /* ---------- HERO ---------- */
  .service-hero {
    margin-top: 90px;
    background: #0a0a0a;
    color: #fff;
    padding: 100px 60px 120px;
    position: relative;
    overflow: hidden;
  }
  /* Decorative background icons (faint) */
  .service-hero::before {
    content: ""; position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 25% 30%, rgba(212,160,23,0.08) 0%, transparent 8%),
      radial-gradient(circle at 60% 60%, rgba(212,160,23,0.06) 0%, transparent 6%),
      radial-gradient(circle at 80% 25%, rgba(212,160,23,0.07) 0%, transparent 7%),
      radial-gradient(circle at 40% 80%, rgba(212,160,23,0.05) 0%, transparent 6%);
    pointer-events: none;
  }
  .hero-grid {
    position: relative; z-index: 1;
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    gap: 60px;
    align-items: center;
  }
  .hero-eyebrow {
    font-size: 14px; font-weight: 600;
    letter-spacing: 2px; color: #fff;
    margin-bottom: 28px;
    text-transform: uppercase;
  }
  .hero-title {
    font-size: 72px; font-weight: 700; color: #fff;
    line-height: 1.05; letter-spacing: -2px;
  }
  .hero-title .accent {
    color: var(--accent);
    position: relative;
  }
  .hero-title .cursor {
    display: inline-block;
    width: 4px;
    height: 0.9em;
    background: #fff;
    margin-left: 4px;
    vertical-align: text-bottom;
    animation: blink 1s steps(2) infinite;
  }
  @keyframes blink { 50% { opacity: 0; } }

  .hero-form-card {
    background: #fff; color: #111;
    border-radius: 14px;
    padding: 38px 36px;
    box-shadow: 0 30px 60px rgba(0,0,0,0.25);
  }
  .form-card-eyebrow {
    font-size: 13px; font-weight: 600; letter-spacing: 2px;
    color: #111; margin-bottom: 12px;
  }
  .form-card-title {
    font-size: 32px; font-weight: 700;
    color: var(--accent); letter-spacing: -0.5px;
    line-height: 1.1; margin-bottom: 28px;
  }
  .hero-form .form-input {
    background: #f3f3f3;
    border: 1px solid transparent;
    border-radius: 6px;
    padding: 14px 16px;
    font-size: 15px;
    font-family: inherit;
    color: #111;
    width: 100%;
    margin-bottom: 14px;
    transition: border-color 0.2s ease, background 0.2s ease;
  }
  .hero-form .form-input:focus {
    outline: none; background: #fff; border-color: #111;
  }
  .hero-form .form-input::placeholder { color: #999; }
  .hero-form .form-row-2 {
    display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 0;
  }
  .hero-form .form-row-2 .form-input { margin-bottom: 14px; }
  .hero-form textarea.form-input {
    min-height: 110px;
    resize: vertical;
  }
  .hero-form .submit {
    background: #0d0d0d; color: #fff; border: none;
    width: 100%; padding: 16px;
    font-size: 16px; font-weight: 600;
    border-radius: 6px; cursor: pointer;
    font-family: inherit; margin-top: 6px;
    transition: background 0.2s ease, transform 0.2s ease;
  }
  .hero-form .submit:hover { background: #000; transform: translateY(-1px); }

  /* ---------- BOOST SECTION ---------- */
  .boost-section {
    padding: 100px 60px;
    background: #fff;
  }
  .boost-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }
  .boost-image {
    aspect-ratio: 4 / 3;
    border-radius: 18px;
    background:
      linear-gradient(135deg, rgba(0,0,0,0.1), rgba(0,0,0,0.3)),
      linear-gradient(120deg, #1e88e5 0%, #5e35b1 100%);
    position: relative;
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(0,0,0,0.12);
  }
  .boost-image::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 30%),
      radial-gradient(circle at 70% 30%, rgba(255,255,255,0.08) 0%, transparent 30%);
  }
  .boost-eyebrow {
    font-size: 18px; font-weight: 700; color: #111;
    margin-bottom: 18px;
  }
  .boost-title {
    font-size: 56px; font-weight: 700; color: #111;
    letter-spacing: -1px; line-height: 1.05;
    margin-bottom: 32px;
  }
  .boost-text {
    font-size: 17px; line-height: 1.75; color: #1a1a1a;
    margin-bottom: 36px;
  }
  .boost-btn, .red-btn {
    display: inline-block;
    background: var(--accent);
    color: #fff;
    padding: 16px 32px;
    border-radius: 6px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s ease, transform 0.2s ease;
  }
  .boost-btn:hover, .red-btn:hover {
    background: var(--accent-dark); transform: translateY(-2px);
  }

  /* ---------- CAPABILITIES SECTION ---------- */
  .caps-section {
    background: #fff;
    padding: 60px 60px 100px;
    text-align: center;
  }
  .caps-eyebrow {
    font-size: 18px; font-weight: 700; color: #111;
    margin-bottom: 16px;
  }
  .caps-title {
    font-size: 56px; font-weight: 700; color: #111;
    letter-spacing: -1px; line-height: 1.05;
    margin-bottom: 16px;
  }
  .caps-desc {
    font-size: 18px; color: #1a1a1a;
    max-width: 700px; margin: 0 auto 60px;
  }
  .caps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    text-align: left;
  }
  .cap-card {
    background: #fff;
    border-radius: 16px;
    padding: 40px 36px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    border: 1px solid #f0f0f0;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    display: flex; flex-direction: column;
  }
  .cap-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 30px rgba(0,0,0,0.08);
  }
  .cap-icon {
    width: 70px; height: 70px;
    margin-bottom: 32px;
    display: flex; align-items: center; justify-content: center;
  }
  .cap-icon svg { width: 100%; height: 100%; }
  .cap-card h3 {
    font-size: 22px; font-weight: 700; color: #111;
    letter-spacing: -0.3px; margin-bottom: 18px;
  }
  .cap-card p {
    font-size: 15px; line-height: 1.7; color: #444;
  }

  /* ---------- WHY US SECTION ---------- */
  .why-section {
    background: var(--accent);
    color: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
  }
  .why-text-block {
    padding: 90px 60px;
  }
  .why-eyebrow {
    font-size: 14px; font-weight: 600; letter-spacing: 2px;
    color: #fff; text-transform: uppercase;
    margin-bottom: 18px;
  }
  .why-title {
    font-size: 56px; font-weight: 700; color: #fff;
    letter-spacing: -1px; line-height: 1.05;
    margin-bottom: 32px;
  }
  .why-body {
    font-size: 17px; line-height: 1.75; color: #fff;
    margin-bottom: 36px;
  }
  .why-btn {
    display: inline-block;
    background: #0d0d0d; color: #fff;
    padding: 16px 32px;
    border-radius: 6px; text-decoration: none;
    font-size: 16px; font-weight: 600;
    transition: background 0.2s ease, transform 0.2s ease;
  }
  .why-btn:hover { background: #000; transform: translateY(-2px); }

  .why-image {
    background:
      linear-gradient(135deg, rgba(0,0,0,0.2), rgba(0,0,0,0.5)),
      linear-gradient(120deg, #6a4c93 0%, #1e88e5 50%, #2c3e50 100%);
    min-height: 100%;
    position: relative;
    overflow: hidden;
  }
  .why-image::after {
    content: "";
    position: absolute; inset: 0;
    background:
      radial-gradient(circle at 70% 30%, rgba(255,255,255,0.08) 0%, transparent 35%),
      radial-gradient(circle at 30% 70%, rgba(255,255,255,0.06) 0%, transparent 30%);
  }

  /* ---------- CLIENTS ---------- */
  .clients-section {
    padding: 100px 60px;
    background: #fff;
  }
  .clients-header {
    display: flex; justify-content: space-between;
    align-items: flex-end; margin-bottom: 50px;
    flex-wrap: wrap; gap: 24px;
  }
  .clients-eyebrow {
    font-size: 13px; font-weight: 600; letter-spacing: 2px;
    color: #111; margin-bottom: 14px;
  }
  .clients-title-block h2 {
    font-size: 56px; font-weight: 700; color: #111;
    letter-spacing: -1px; line-height: 1.05;
  }
  .view-all-btn {
    border: 1.5px solid #111; background: #fff; color: #111;
    padding: 16px 28px; border-radius: 10px; font-size: 16px;
    font-weight: 500; text-decoration: none;
    transition: background 0.25s ease, color 0.25s ease;
    cursor: pointer; font-family: inherit;
  }
  .view-all-btn:hover { background: #111; color: #fff; }

  .clients-grid {
    display: grid; grid-template-columns: repeat(6, 1fr);
    gap: 24px;
  }
  .client-logo {
    aspect-ratio: 5 / 3;
    background: #fff;
    border: 1px solid #ececec;
    border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    transition: transform 0.25s ease, border-color 0.25s ease;
    padding: 20px;
    filter: grayscale(1);
    opacity: 0.7;
  }
  .client-logo:hover { filter: none; opacity: 1; }
  .client-logo span {
    font-size: 22px; font-weight: 700;
    color: #6a6a6a; letter-spacing: 0.5px;
    text-align: center;
  }

  /* ---------- ELEVATE ---------- */
  .elevate-section {
    background: #f5f5f5;
    padding: 100px 60px;
  }
  .elevate-title {
    font-size: 48px; font-weight: 700; color: #111;
    letter-spacing: -1px; line-height: 1.1;
    margin-bottom: 24px;
  }
  .elevate-desc {
    font-size: 17px; color: #1a1a1a; line-height: 1.65;
    max-width: 1100px;
    margin-bottom: 60px;
  }
  .elevate-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  .elevate-card {
    background: #f0f0f0;
    border-radius: 16px;
    padding: 40px 36px;
    transition: background 0.25s ease, transform 0.25s ease;
  }
  .elevate-card:hover { transform: translateY(-4px); }
  .elevate-card.highlight { background: #fff3d6; }
  .elevate-num {
    font-size: 22px; font-weight: 700; color: #111;
    margin-bottom: 18px;
  }
  .elevate-card h3 {
    font-size: 24px; font-weight: 700; color: #111;
    letter-spacing: -0.3px; margin-bottom: 20px;
    line-height: 1.2;
  }
  .elevate-card p {
    font-size: 16px; line-height: 1.65; color: #1a1a1a;
  }

  /* ---------- TESTIMONIALS ---------- */
  .testi-section {
    background: #f5f5f5;
    padding: 80px 60px 100px;
  }
  .testi-grid {
    display: grid;
    grid-template-columns: 1fr 2.4fr;
    gap: 80px;
    align-items: start;
  }
  .testi-eyebrow {
    font-size: 14px; font-weight: 500; color: #555;
    margin-bottom: 12px;
  }
  .testi-heading {
    font-size: 48px; font-weight: 700; color: #111;
    letter-spacing: -1px; line-height: 1.1;
  }
  .testi-cards {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
  .testi-card {
    background: #fff;
    border-radius: 16px;
    padding: 32px 30px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.04);
    display: flex; flex-direction: column;
  }
  .testi-quote-text {
    font-size: 16px; line-height: 1.7; color: #1a1a1a;
    font-style: italic;
    margin-bottom: 24px;
    flex: 1;
  }
  .testi-stars {
    color: #f5b800; font-size: 18px;
    letter-spacing: 2px; margin-bottom: 14px;
  }
  .testi-author {
    font-size: 17px; font-weight: 700; color: #111;
    margin-bottom: 4px;
  }
  .testi-author-meta {
    font-size: 14px; color: #666;
    font-style: italic;
  }
  .testi-dots {
    display: flex; gap: 8px;
    grid-column: 1 / -1;
    justify-content: center;
    margin-top: 16px;
  }
  .testi-dots .dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: #ccc; cursor: pointer;
    transition: background 0.2s ease, transform 0.2s ease;
  }
  .testi-dots .dot.active { background: #111; transform: scale(1.3); }

  /* ---------- FAQ ---------- */
  .faq-section {
    background: #fff;
    padding: 100px 60px;
  }
  .faq-heading {
    font-size: 56px; font-weight: 700; color: #111;
    letter-spacing: -1px; line-height: 1.05;
    text-align: center; margin-bottom: 60px;
  }
  .faq-list {
    max-width: 1300px;
    margin: 0 auto;
    display: flex; flex-direction: column;
    gap: 16px;
  }
  .faq-item {
    background: #f3f3f3;
    border-radius: 8px;
    overflow: hidden;
    transition: background 0.2s ease;
  }
  .faq-toggle {
    width: 100%;
    background: none; border: none;
    padding: 24px 28px;
    text-align: left;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px; font-weight: 600;
    color: #111;
    display: flex; align-items: center; gap: 16px;
  }
  .faq-icon {
    width: 22px; height: 22px;
    display: inline-flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    font-size: 22px;
    line-height: 1;
    font-weight: 300;
    transition: transform 0.3s ease;
  }
  .faq-item.open .faq-icon {
    transform: rotate(45deg);
  }
  .faq-icon::after {
    content: "+";
    display: block;
  }
  .faq-item.open .faq-icon::after {
    content: "+";
  }
  .faq-question {
    flex: 1;
  }
  .faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease;
  }
  .faq-answer-inner {
    padding: 0 28px 24px;
    font-size: 16px;
    line-height: 1.65;
    color: #333;
  }
  .faq-item.open .faq-answer { max-height: 400px; }

  /* ---------- COLLABORATE CTA ---------- */
  .collab-section {
    background: #fff;
    padding: 60px 60px 100px;
    border-top: 1px solid #ededed;
  }
  .collab-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 60px;
    align-items: center;
    padding-top: 40px;
  }
  .collab-eyebrow {
    font-size: 14px; font-weight: 600; letter-spacing: 2px;
    color: #111; margin-bottom: 18px;
    text-transform: uppercase;
  }
  .collab-title {
    font-size: 40px; font-weight: 700; color: #111;
    letter-spacing: -0.5px; line-height: 1.2;
  }
  .collab-section .red-btn {
    justify-self: end;
  }

  /* ---------- WHATSAPP ---------- */
  /* ---------- FOOTER ---------- */


  /* Brand column */
  .footer-logo-main {
    font-weight: 800;
    font-size: 24px;
    letter-spacing: 0.5px;
    color: #fff;
    line-height: 1;
  }
  .footer-logo-main .thin { font-weight: 500; }
  .footer-logo-tagline {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.5px;
    color: #fff;
    margin-top: 6px;
  }
  .footer-logo-tagline .dot-red { color: var(--accent); }


  .trust-badge-title {
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 4px;
    letter-spacing: 0.5px;
  }
  .trust-badge-stars {
    color: #00b67a;
    font-size: 16px;
    letter-spacing: 1px;
    margin-bottom: 4px;
  }
  .trust-badge-source {
    font-size: 11px;
    color: #555;
    text-transform: uppercase;
    letter-spacing: 1px;
  }


  /* Other columns */
  .footer-heading-spaced { margin-top: 40px; }

  .footer-address {
    font-style: normal;
    font-size: 16px;
    line-height: 1.8;
    color: #e8e8e8;
    margin-bottom: 36px;
  }

  .footer-line {
    font-size: 16px;
    line-height: 1.9;
    color: #e8e8e8;
  }

  .footer-links {
    list-style: none;
  }
  .footer-links li { margin-bottom: 14px; }
  .footer-links a {
    color: #e8e8e8;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.2s ease, padding-left 0.2s ease;
  }
  .footer-links a:hover {
    color: var(--accent);
    padding-left: 4px;
  }

  /* Accordion */
  .footer-accordion {
    border-top: 1px solid #1a1a1a;
    padding: 30px 0 20px;
  }
  .accordion-icon, .accordion-icon-right {
    width: 22px;
    height: 22px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: 300;
    flex-shrink: 0;
  }
  .accordion-icon-right { margin-left: auto; }
  .accordion-title { flex: 1; text-align: left; }


  .accordion-inner {
    padding: 24px 28px 8px;
  }
  .accordion-cities {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 28px;
  }
  .accordion-cities span {
    color: #ccc;
    font-size: 15px;
    padding: 6px 0;
    cursor: default;
    transition: color 0.2s ease;
  }
  .accordion-cities span:hover { color: var(--accent); }

  /* Bottom bar */
  .footer-bottom {
    border-top: 1px solid #1a1a1a;
    padding: 24px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    color: #888;
    font-size: 14px;
  }
  .footer-bottom-links {
    display: flex;
    gap: 28px;
  }
  .footer-bottom-links a {
    color: #888;
    text-decoration: none;
    transition: color 0.2s ease;
  }
  .footer-bottom-links a:hover { color: var(--accent); }

  @media (max-width: 1024px) {
  }
  @media (max-width: 600px) {
    .footer-bottom { flex-direction: column; align-items: flex-start; }
  }


  /* ====== HAMBURGER ====== */


  /* ====== POLISH ====== */
  body { -webkit-text-size-adjust: 100%; overflow-x: hidden; position: relative; }
  html { scroll-behavior: smooth; }
  ::selection { background: var(--accent); color: #fff; }
  a:focus-visible, button:focus-visible {
    outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px;
  }
  img, video, svg { max-width: 100%; height: auto; }

  /* ====== RESPONSIVE ====== */
  @media (max-width: 1200px) {
    .hero-title { font-size: 60px; }
    .boost-title, .why-title, .clients-title-block h2,
    .faq-heading, .caps-title { font-size: 44px; }
    .elevate-title, .testi-heading { font-size: 38px; }
    .caps-grid { grid-template-columns: repeat(2, 1fr); }
    .clients-grid { grid-template-columns: repeat(5, 1fr); }
    .elevate-grid { grid-template-columns: 1fr; gap: 18px; }
    .hero-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
  }

  @media (max-width: 900px) {

    .service-hero { margin-top: 80px; padding: 70px 24px 80px; }
    .hero-grid { grid-template-columns: 1fr; gap: 50px; }
    .hero-title { font-size: 48px; letter-spacing: -1px; }
    .hero-eyebrow { font-size: 13px; margin-bottom: 18px; }
    .hero-form-card { padding: 32px 28px; }
    .form-card-title { font-size: 26px; }

    .boost-section { padding: 70px 24px; }
    .boost-grid { grid-template-columns: 1fr; gap: 40px; }
    .boost-title, .why-title, .clients-title-block h2,
    .faq-heading, .caps-title { font-size: 36px; }
    .elevate-title, .testi-heading { font-size: 30px; }

    .caps-section { padding: 40px 24px 70px; }
    .caps-grid { grid-template-columns: 1fr; gap: 18px; }
    .cap-card { padding: 32px 28px; }

    .why-section { grid-template-columns: 1fr; }
    .why-text-block { padding: 60px 24px; }
    .why-image { min-height: 300px; }

    .clients-section { padding: 70px 24px; }
    .clients-header { flex-direction: column; align-items: flex-start; gap: 18px; margin-bottom: 36px; }
    .clients-grid { grid-template-columns: repeat(4, 1fr); gap: 16px; }

    .elevate-section { padding: 70px 24px; }
    .elevate-grid { grid-template-columns: 1fr; }

    .testi-section { padding: 60px 24px 80px; }
    .testi-grid { grid-template-columns: 1fr; gap: 36px; }
    .testi-cards { grid-template-columns: 1fr; }

    .faq-section { padding: 70px 24px; }
    .faq-toggle { padding: 20px 22px; font-size: 16px; }
    .faq-answer-inner { padding: 0 22px 22px; font-size: 15px; }

    .collab-section { padding: 50px 24px 70px; }
    .collab-grid { grid-template-columns: 1fr; gap: 24px; }
    .collab-section .red-btn { justify-self: start; }
    .collab-title { font-size: 28px; }

  }

  @media (max-width: 600px) {

    .service-hero { margin-top: 72px; padding: 50px 18px 60px; }
    .hero-title { font-size: 36px; }
    .hero-form-card { padding: 26px 22px; }
    .form-card-title { font-size: 22px; }
    .hero-form .form-row-2 { grid-template-columns: 1fr; gap: 0; }

    .boost-section { padding: 50px 18px; }
    .boost-image { aspect-ratio: 4 / 3; }
    .boost-title, .why-title, .clients-title-block h2,
    .faq-heading, .caps-title { font-size: 28px; letter-spacing: -0.5px; }
    .boost-text { font-size: 16px; }
    .boost-btn, .red-btn, .why-btn { width: 100%; text-align: center; }

    .caps-section { padding: 30px 18px 50px; }
    .caps-desc { font-size: 16px; margin-bottom: 36px; }
    .cap-card { padding: 28px 22px; }
    .cap-card h3 { font-size: 20px; }

    .why-section .why-text-block { padding: 50px 18px; }
    .why-image { min-height: 240px; }

    .clients-section { padding: 50px 18px; }
    .clients-grid { grid-template-columns: repeat(3, 1fr); gap: 12px; }
    .client-logo { padding: 14px; }
    .client-logo span { font-size: 15px; }

    .elevate-section { padding: 50px 18px; }
    .elevate-card { padding: 28px 24px; }
    .elevate-card h3 { font-size: 20px; }
    .elevate-title, .testi-heading { font-size: 26px; }
    .elevate-desc { font-size: 16px; }

    .testi-section { padding: 50px 18px 70px; }
    .testi-card { padding: 28px 24px; }
    .testi-quote-text { font-size: 15px; }

    .faq-section { padding: 50px 18px; }
    .faq-toggle { padding: 18px 20px; font-size: 15px; }
    .faq-answer-inner { padding: 0 20px 20px; }

    .collab-section { padding: 40px 18px 60px; }
    .collab-title { font-size: 24px; }


  }

  @media (max-width: 380px) {
    .hero-title { font-size: 30px; }
    .boost-title, .why-title, .clients-title-block h2,
    .faq-heading, .caps-title { font-size: 24px; }
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }


      `}} />

{/* NAVBAR */}


{/* HERO */}
<section className="service-hero">
  <div className="hero-grid">
    <div className="hero-text">
      <p className="hero-eyebrow" id="heroEyebrow">We help your business get online!</p>
      <h1 className="hero-title">
        <span id="heroTitleStatic">Digital Marketing </span><span className="accent" id="heroAccent">Services</span><span className="cursor"></span>
      </h1>
    </div>
    <div className="hero-form-card">
      <p className="form-card-eyebrow">BOOK A STRATEGY CALL</p>
      <h2 className="form-card-title">Get a Custom Proposal</h2>
      <form className="hero-form" onSubmit={(e) => { e.preDefault(); alert('Thanks! We will get back to you shortly.'); }}>
        <input type="text" className="form-input" placeholder="Full Name" required />
        <div className="form-row-2">
          <input type="email" className="form-input" placeholder="Email" required />
          <input type="tel" className="form-input" placeholder="Phone Number" required />
        </div>
        <textarea className="form-input" placeholder="Message"></textarea>
        <button type="submit" className="submit">Submit</button>
      </form>
    </div>
  </div>
</section>

{/* BOOST SECTION */}
<section className="boost-section">
  <div className="boost-grid">
    <div className="boost-image"></div>
    <div>
      <p className="boost-eyebrow" id="boostEyebrow">Boost Your Online Presence</p>
      <h2 className="boost-title" id="boostTitle">With The Help Of Digital Marketing Services</h2>
      <p className="boost-text" id="boostText">
        In today's age, just having an online presence is no longer enough. You need a
        dynamic strategy that helps you stand out in a crowded digital landscape. Our team
        partners with you to design and execute campaigns that drive real growth — combining
        creative storytelling with data-led decisions to scale your brand and connect with
        the right audience at the right time.
      </p>
      <a href="#" className="boost-btn">Get a Free Quote!</a>
    </div>
  </div>
</section>

{/* CAPABILITIES */}
<section className="caps-section">
  <p className="caps-eyebrow">Capabilities</p>
  <h2 className="caps-title" id="capsTitle">Our Digital Marketing Services</h2>
  <p className="caps-desc" id="capsDesc">We offer a wide range of digital marketing services to meet all your needs:</p>

  <div className="caps-grid" id="capsGrid">
    {/* Cards injected by JS */}
  </div>
</section>

{/* WHY US */}
<section className="why-section">
  <div className="why-text-block">
    <p className="why-eyebrow">Why Us</p>
    <h2 className="why-title" id="whyTitle">Why Choose TheSocialVerse?</h2>
    <p className="why-body" id="whyBody">
      TheSocialVerse is a trusted partner for ambitious brands. We bring together strategy,
      creative, and performance under one roof — so your campaigns aren't just beautifully
      crafted, they're built to perform. From SEO and paid media to social and content, we
      take care of your full digital growth journey, with measurable outcomes at every step.
    </p>
    <a href="#" className="why-btn">Get a Free Quote!</a>
  </div>
  <div className="why-image"></div>
</section>

{/* CLIENTS */}
<section className="clients-section">
  <div className="clients-header">
    <div className="clients-title-block">
      <p className="clients-eyebrow">TRUSTED BY THE WORLD'S LEADING BRANDS</p>
      <h2>Our Clients</h2>
    </div>
    <a href="#" className="view-all-btn">View All Clients</a>
  </div>
  <div className="clients-grid">
    <div className="client-logo"><span>BrandOne</span></div>
    <div className="client-logo"><span>NovaCo</span></div>
    <div className="client-logo"><span>Apex</span></div>
    <div className="client-logo"><span>Stellar</span></div>
    <div className="client-logo"><span>Vertex</span></div>
    <div className="client-logo"><span>Orbit</span></div>
    <div className="client-logo"><span>Lumen</span></div>
    <div className="client-logo"><span>Pulse</span></div>
    <div className="client-logo"><span>Forge</span></div>
    <div className="client-logo"><span>Helix</span></div>
    <div className="client-logo"><span>Atlas</span></div>
    <div className="client-logo"><span>Beacon</span></div>
  </div>
</section>

{/* ELEVATE */}
<section className="elevate-section">
  <h2 className="elevate-title" id="elevateTitle">Elevate Your Business with Expert Digital Marketing</h2>
  <p className="elevate-desc" id="elevateDesc">
    It's all about choosing the right partner. The difference between digital success and
    failure starts with the team you work with. Here's what sets TheSocialVerse apart and
    why our clients trust us to deliver the work that moves their business forward.
  </p>
  <div className="elevate-grid" id="elevateGrid">
    {/* 3 numbered cards injected by JS */}
  </div>
</section>

{/* TESTIMONIALS */}
<section className="testi-section">
  <div className="testi-grid">
    <div>
      <p className="testi-eyebrow">Testimonials</p>
      <h2 className="testi-heading">What our clients say</h2>
    </div>
    <div>
      <div className="testi-cards">
        <div className="testi-card">
          <p className="testi-quote-text">
            "TheSocialVerse is fantastic to work with. The team communicates clearly and
            consistently goes the extra mile to make sure every deliverable is on point.
            They took the time to understand our goals and built a strategy that actually
            worked for our business — recommending them to everyone."
          </p>
          <div className="testi-stars">★ ★ ★ ★ ★</div>
          <div className="testi-author">Sample Client A</div>
          <div className="testi-author-meta">Sample Company</div>
        </div>
        <div className="testi-card">
          <p className="testi-quote-text">
            "Working with TheSocialVerse has been a real pleasure. The team delivered
            sharp results with clear, effective strategies. Special thanks to the leads
            for their ongoing support and crisp communication. Highly recommended."
          </p>
          <div className="testi-stars">★ ★ ★ ★ ★</div>
          <div className="testi-author">Sample Client B</div>
          <div className="testi-author-meta">Sample Company</div>
        </div>
      </div>
      <div className="testi-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  </div>
</section>

{/* FAQ */}
<section className="faq-section">
  <h2 className="faq-heading">Frequently Asked Questions</h2>
  <div className="faq-list" id="faqList">
    {/* FAQ items injected by JS */}
  </div>
</section>

{/* COLLABORATE */}
<section className="collab-section">
  <p className="collab-eyebrow">Let's Collaborate</p>
  <div className="collab-grid">
    <h2 className="collab-title">Send us an email to discuss your project and explore how we can help.</h2>
    <a href="#" className="red-btn">Get a Free Quote!</a>
  </div>
</section>

{/* ==== FOOTER START ==== */}

{/* ==== FOOTER END ==== */}


{/* WHATSAPP */}
    </>
  );
}