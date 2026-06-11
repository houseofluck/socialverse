"use client";

import { useEffect, useRef } from "react";

export default function WorksPage() {
  const initRef = useRef(false);
  useEffect(() => {
    // Strict-mode dev double-invoke guard: only run once per mount
    if (initRef.current) return;
    initRef.current = true;

    // ---------- DATA ----------
      // Portfolio dataset — real client work, interleaved for a diverse "All" view.
      const allProjects = [
        { title: "Sundays Are For Indulgence", meta: "Olive Heights · Creative Reel",  cat: "videos",     type: "video", src: "/work/reels/reel-olive-heights-1.mp4", poster: "/work/reels/posters/reel-olive-heights-1.jpg" },
        { title: "Old Gold, Instant Value",    meta: "Ahvi Gold · Our Creativity",      cat: "creativity", type: "image", src: "/work/creatives/showcase-01.jpg" },
        { title: "New Beginnings",             meta: "Ahvi Gold · Social Media",        cat: "social",     type: "image", src: "/work/creatives/creative-01.jpg" },
        { title: "Backstage Siblings",         meta: "Jewellery Hub · Hoarding Design", cat: "hoarding",   type: "image", src: "/work/hoarding.jpg" },
        { title: "Elegance In Every Detail",   meta: "Awesome Palace · Creative Reel",  cat: "videos",     type: "video", src: "/work/reels/reel-awesome-palace.mp4", poster: "/work/reels/posters/reel-awesome-palace.jpg" },
        { title: "Silver Pass",                meta: "Jewellery Hub · Ticket Design",   cat: "tickets",    type: "image", src: "/work/tickets/ticket-1.jpg", fit: "contain" },

        { title: "Sunset Dining Rhythm",       meta: "Olive Heights · Our Creativity",  cat: "creativity", type: "image", src: "/work/creatives/showcase-03.jpg" },
        { title: "Apple Tart Elegance",        meta: "Olive Heights · Social Media",    cat: "social",     type: "image", src: "/work/creatives/creative-05.jpg" },
        { title: "The Feed That Stops Scroll", meta: "Olive Heights · Social Media",    cat: "social",     type: "image", src: "/work/creatives/social-grid.jpg" },
        { title: "Plated To Perfection",       meta: "Olive Garden · Creative Reel",    cat: "videos",     type: "video", src: "/work/reels/reel-olive-garden.mp4", poster: "/work/reels/posters/reel-olive-garden.jpg" },
        { title: "Events, Made Magic",         meta: "Awesome Palace · Our Creativity", cat: "creativity", type: "image", src: "/work/creatives/showcase-04.jpg" },
        { title: "You Deserve Comfort",        meta: "Awesome Palace · Social Media",   cat: "social",     type: "image", src: "/work/creatives/creative-02.jpg" },

        { title: "Event Pass — Gold",          meta: "Jewellery Hub · Ticket Design",   cat: "tickets",    type: "image", src: "/work/tickets/ticket-2.jpg", fit: "contain" },
        { title: "Your Dream Home, Funded",    meta: "Ahvi Gold · Creative Reel",       cat: "videos",     type: "video", src: "/work/reels/reel-ahvi-gold.mp4", poster: "/work/reels/posters/reel-ahvi-gold.jpg" },
        { title: "Cocktail Elegance",          meta: "Olive Garden · Our Creativity",   cat: "creativity", type: "image", src: "/work/creatives/showcase-02.jpg" },
        { title: "Limited Edition Grills",     meta: "Olive Garden · Social Media",     cat: "social",     type: "image", src: "/work/creatives/creative-07.jpg" },
        { title: "Lingering Sips",             meta: "Awesome Palace · Our Creativity", cat: "creativity", type: "image", src: "/work/creatives/showcase-05.jpg" },
        { title: "Sounds Of The Kitchen",      meta: "Olive Heights · Creative Reel",   cat: "videos",     type: "video", src: "/work/reels/reel-olive-heights-2.mp4", poster: "/work/reels/posters/reel-olive-heights-2.jpg" },

        { title: "Premium Rooftop",            meta: "Awesome Palace · Social Media",   cat: "social",     type: "image", src: "/work/creatives/creative-06.jpg" },
        { title: "Event Pass",                 meta: "Jewellery Hub · Ticket Design",   cat: "tickets",    type: "image", src: "/work/tickets/ticket-3.jpg", fit: "contain" },
        { title: "Timeless Classic",           meta: "Awesome Palace · Our Creativity", cat: "creativity", type: "image", src: "/work/creatives/showcase-06.jpg" },
        { title: "Minutes From The Airport",   meta: "Awesome Palace · Social Media",   cat: "social",     type: "image", src: "/work/creatives/creative-03.jpg" },
        { title: "Rich Neapolitan",            meta: "Olive Heights · Social Media",    cat: "social",     type: "image", src: "/work/creatives/creative-08.jpg" },
        { title: "Golden Herb Crusted",        meta: "Olive Garden · Our Creativity",   cat: "creativity", type: "image", src: "/work/creatives/showcase-07.jpg" },
        { title: "Gold Into Dreams",           meta: "Ahvi Gold · Social Media",        cat: "social",     type: "image", src: "/work/creatives/creative-04.jpg" },
        { title: "Pure Sophistication",        meta: "Olive Heights · Social Media",    cat: "social",     type: "image", src: "/work/creatives/creative-09.jpg" },
      ];

      // ---------- STATE ----------
      const PAGE_SIZE = 6;
      let currentCategory = "all";
      let pageIndex = 0;
      let isLoading = false;

      const grid       = document.getElementById('worksGrid');
      const loader     = document.getElementById('loader');
      const endMessage = document.getElementById('endMessage');

      function getFiltered() {
        if (currentCategory === "all") return allProjects;
        return allProjects.filter(p => p.cat === currentCategory);
      }

      function buildMedia(p) {
        const fitClass = p.fit === 'contain' ? ' fit-contain' : '';
        if (p.type === 'video') {
          return `<div class="work-card-image is-video">
            <video src="${p.src}" poster="${p.poster}" muted loop playsinline preload="metadata"></video>
            <span class="play-badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </span>
          </div>`;
        }
        return `<div class="work-card-image${fitClass}">
          <img src="${p.src}" alt="${p.title}" loading="lazy" />
        </div>`;
      }

      function renderCards(items) {
        items.forEach((p, i) => {
          const card = document.createElement('article');
          card.className = 'work-card';
          card.style.animationDelay = (i * 60) + 'ms';
          card.innerHTML = `
            ${buildMedia(p)}
            <h3 class="work-title">${p.title}</h3>
            <p class="work-meta">${p.meta}</p>
          `;
          // Hover-to-play for video cards
          const video = card.querySelector('video');
          if (video) {
            const wrap = card.querySelector('.work-card-image');
            wrap.addEventListener('mouseenter', () => { video.play().catch(() => {}); });
            wrap.addEventListener('mouseleave', () => { video.pause(); });
          }
          grid.appendChild(card);
        });
      }

      function loadNextPage() {
        if (isLoading) return;
        const filtered = getFiltered();
        const start = pageIndex * PAGE_SIZE;
        const end   = start + PAGE_SIZE;
        const slice = filtered.slice(start, end);

        if (slice.length === 0) {
          endMessage.classList.add('active');
          loader.classList.remove('active');
          return;
        }

        isLoading = true;
        loader.classList.add('active');
        endMessage.classList.remove('active');

        // Simulated network delay so the loader is visible
        setTimeout(() => {
          renderCards(slice);
          pageIndex++;
          isLoading = false;
          loader.classList.remove('active');

          // Show end message if we've now exhausted the dataset
          if (pageIndex * PAGE_SIZE >= filtered.length) {
            endMessage.classList.add('active');
          }
        }, 700);
      }

      function resetAndReload(newCat) {
        currentCategory = newCat;
        pageIndex = 0;
        grid.innerHTML = '';
        endMessage.classList.remove('active');
        loadNextPage();
      }

      // ---------- FILTER CLICKS ----------
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          resetAndReload(btn.dataset.cat);
        });
      });

      // ---------- INFINITE SCROLL ----------
      const sentinel = document.querySelector('.loader-wrapper');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) loadNextPage();
        });
      }, { rootMargin: '200px' });
      observer.observe(sentinel);

      // ---------- INITIAL LOAD ----------
      loadNextPage();

      // ---------- DEEP-LINK: filter from URL hash ----------
      const hashMap = {
        'our-creativity': 'creativity',
        'hoarding-designs': 'hoarding',
        'ticket-designs': 'tickets',
        'creative-videos': 'videos',
        'social-media-creatives': 'social',
      };
      const hash = window.location.hash.replace('#', '');
      if (hash && hashMap[hash]) {
        const btn = document.querySelector(`.filter-btn[data-cat="${hashMap[hash]}"]`);
        if (btn) btn.click();
      }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html, body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #fff;
    color: #111;
    overflow-x: hidden;
  }

  /* ---------- NAVBAR (same as main page) ---------- */




  /* ---------- PAGE HEADER ---------- */
  .page-header {
    margin-top: 90px;
    background: #ededed;
    padding: 90px 60px 100px;
    text-align: center;
  }
  .page-header .section-eyebrow {
    font-size: 13px; font-weight: 600; letter-spacing: 2px;
    color: #111; margin-bottom: 18px;
  }
  .page-header h1 {
    font-size: 64px; font-weight: 700; color: #111;
    letter-spacing: -1.5px; line-height: 1.05;
  }

  /* ---------- CATEGORY FILTERS ---------- */
  .filters-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 50px 30px 40px;
    background: #fff;
  }
  .filter-item {
    display: flex; align-items: center;
  }
  .filter-btn {
    background: none;
    border: none;
    font-family: inherit;
    font-size: 18px;
    font-weight: 500;
    color: #111;
    padding: 8px 22px;
    cursor: pointer;
    transition: color 0.2s ease;
  }
  .filter-btn:hover { color: var(--accent); }
  .filter-btn.active { color: var(--accent); font-weight: 600; }

  .filter-sep {
    color: #aaa;
    font-size: 18px;
    user-select: none;
  }

  /* ---------- WORKS GRID ---------- */
  .works {
    width: 100%;
    padding: 20px 60px 80px;
    background: #fff;
  }

  .works-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px 28px;
    row-gap: 60px;
  }

  .work-card {
    display: flex;
    flex-direction: column;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeUp 0.6s ease forwards;
  }
  @keyframes fadeUp {
    to { opacity: 1; transform: translateY(0); }
  }

  .work-card-image {
    display: block; width: 100%;
    aspect-ratio: 4 / 5;
    border-radius: 18px;
    overflow: hidden;
    position: relative;
    margin-bottom: 24px;
    text-decoration: none;
    background: #111;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }
  .work-card-image:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 50px rgba(0,0,0,0.16);
  }
  .work-card-image img,
  .work-card-image video {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    object-fit: cover; display: block;
    transition: transform 0.5s ease;
  }
  .work-card-image:hover img { transform: scale(1.04); }
  /* Tickets are landscape — show the full design, no crop */
  .work-card-image.fit-contain { background: #161616; }
  .work-card-image.fit-contain img { object-fit: contain; }
  /* Video play badge */
  .work-card-image .play-badge {
    position: absolute; left: 50%; top: 50%;
    transform: translate(-50%, -50%);
    width: 56px; height: 56px; border-radius: 50%;
    background: rgba(0,0,0,0.42);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1.5px solid rgba(255,255,255,0.65);
    color: #fff; display: flex; align-items: center; justify-content: center;
    padding-left: 3px; z-index: 2; pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  .work-card-image.is-video:hover .play-badge {
    opacity: 0; transform: translate(-50%, -50%) scale(0.8);
  }

  .work-title {
    font-size: 28px; font-weight: 700; color: #111;
    margin-bottom: 10px; letter-spacing: -0.5px;
  }
  .work-meta { font-size: 16px; color: #444; }

  /* Mock card visuals — varied per category */
  .work-mock {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
  }
  .mock-cover {
    width: 38%; height: 70%;
    background: linear-gradient(180deg, #2a2f3a 0%, #1a1f28 100%);
    border-radius: 4px;
    box-shadow: 0 30px 50px rgba(0,0,0,0.35);
    transform: rotate(-4deg);
    display: flex; flex-direction: column; justify-content: space-between;
    padding: 18px 14px; color: #fff;
  }
  .mock-cover .mock-label {
    font-family: 'Georgia', serif; font-style: italic; font-size: 16px; line-height: 1.1;
  }
  .mock-cover .mock-year { font-size: 13px; text-align: right; opacity: 0.85; }

  .mock-spread {
    width: 70%; height: 55%;
    display: flex; transform: rotate(-3deg);
    box-shadow: 0 30px 50px rgba(0,0,0,0.3);
  }
  .spread-page { flex: 1; background: #fafafa; position: relative; }
  .spread-page.left {
    border-right: 1px solid #ddd;
    background: linear-gradient(180deg, transparent 8%, #ddd 8%, #ddd 9%, transparent 9%) 0 6px / 100% 14px repeat-y, #fafafa;
  }
  .spread-page.right {
    background:
      radial-gradient(circle at 30% 40%, #e8a87c 0 18%, transparent 18%),
      linear-gradient(180deg, transparent 70%, #ddd 70%, #ddd 72%, transparent 72%) 0 0 / 100% 12px repeat-y,
      #fafafa;
  }

  .mock-stack {
    position: absolute; width: 32%; height: 60%;
    border-radius: 3px; box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  }
  .stack-back {
    background: linear-gradient(180deg, #6b1a1a 0%, #4a0f0f 100%);
    transform: rotate(-12deg) translate(-30%, -8%);
  }
  .stack-front {
    background: linear-gradient(180deg, #8a2424 0%, #5e1414 100%);
    transform: rotate(8deg) translate(20%, 5%);
    display: flex; align-items: flex-end; padding: 14px;
  }
  .mock-stack-label { color: #fff; font-size: 13px; font-weight: 700; line-height: 1.1; }

  /* Generic abstract mock for variety */
  .mock-abstract {
    width: 60%; height: 60%;
    background: rgba(255,255,255,0.92);
    border-radius: 6px;
    box-shadow: 0 30px 50px rgba(0,0,0,0.3);
    transform: rotate(-2deg);
    padding: 18px;
    display: flex; flex-direction: column; gap: 8px;
  }
  .mock-abstract .bar { height: 8px; background: #e0e0e0; border-radius: 2px; }
  .mock-abstract .bar.short { width: 60%; }
  .mock-abstract .bar.accent { background: var(--accent); height: 14px; width: 40%; margin-bottom: 4px; }

  /* ---------- LOADING INDICATOR ---------- */
  .loader-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0 20px;
    min-height: 80px;
  }
  .loader {
    width: 40px; height: 40px;
    border: 3px solid #f0f0f0;
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    display: none;
  }
  .loader.active { display: block; }
  @keyframes spin { to { transform: rotate(360deg); } }

  .end-message {
    display: none;
    text-align: center;
    color: #888;
    font-size: 14px;
    letter-spacing: 1px;
  }
  .end-message.active { display: block; }

  /* ---------- WHATSAPP FLOAT ---------- */

  /* ---------- RESPONSIVE ---------- */
  @media (max-width: 1024px) {
    .page-header { padding: 70px 30px 80px; }
    .page-header h1 { font-size: 48px; }
    .works { padding: 20px 30px 60px; }
    .works-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 768px) {
    .page-header { padding: 50px 20px 60px; }
    .page-header h1 { font-size: 36px; }
    .works { padding: 20px 20px 60px; }
    .works-grid { grid-template-columns: 1fr; gap: 36px; }
    .filter-btn { font-size: 15px; padding: 6px 12px; }
  }
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


  /* ======================================================
     HAMBURGER + MOBILE NAV
     ====================================================== */


  /* ======================================================
     RESPONSIVE — DESKTOP DOWN TO LAPTOP (≤1200px)
     ====================================================== */
  @media (max-width: 1200px) {
    .section-heading,
    .task-heading,
    .related-heading,
    .testimonials-heading,
    .start-cta h2 {
      font-size: 48px !important;
    }
    .project-title { font-size: 56px; }
    .page-header h1 { font-size: 56px; }
  }

  /* ======================================================
     RESPONSIVE — TABLET (≤900px)
     ====================================================== */
  @media (max-width: 900px) {
    /* Nav: hide desktop links, show hamburger */


    /* Section headings */
    .section-heading,
    .task-heading,
    .related-heading,
    .testimonials-heading,
    .start-cta h2 {
      font-size: 38px !important;
    }
    .page-header h1 { font-size: 44px; }
    .project-title { font-size: 40px; }

    /* Hero */
    .hero {
      margin-top: 80px;
      height: calc(100vh - 80px);
      min-height: 480px;
    }

    /* Works section */
    .works { padding: 60px 24px 80px; }
    .works-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; row-gap: 50px; }
    .works-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }

    /* Works page header */
    .page-header { padding: 60px 24px 70px; }

    /* Filters */
    .filters-bar { padding: 36px 16px 30px; gap: 4px; }
    .filter-btn { font-size: 15px; padding: 8px 14px; }
    .filter-sep { font-size: 16px; }

    /* Project page */
    .project-hero { padding: 30px 24px 50px; min-height: 400px; }
    .project-body {
      grid-template-columns: 1fr;
      gap: 50px;
      padding: 60px 24px;
    }
    .project-meta { grid-template-columns: 1fr 1fr; gap: 24px; }
    .our-task {
      grid-template-columns: 1fr;
      gap: 24px;
      padding: 40px 24px 70px;
    }

    /* Showcase */
    .showcase-grid { grid-template-columns: 1fr; }
    .showcase-tile.logo-tile,
    .showcase-tile.monitor-tile { padding: 40px 24px; }

    /* Laptop section */
    .laptop-section { padding: 60px 24px 80px; }
    .laptop { transform: rotateY(-8deg) rotateX(5deg); max-width: 100%; }
    .laptop-arrows { margin-top: -180px; }
    .laptop-arrow { font-size: 24px; padding: 8px; }

    /* Related */
    .related-section { padding: 70px 24px 60px; }
    .related-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; row-gap: 40px; }
    .related-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      margin-bottom: 40px;
    }

    /* Testimonials */
    .testimonials { padding: 70px 24px; }
    .testimonials-inner { grid-template-columns: 1fr; gap: 36px; }
    .testimonial-quote { font-size: 17px; }

    /* Start CTA */
    .start-cta {
      padding: 60px 24px;
      flex-direction: column;
      align-items: flex-start;
      gap: 32px;
    }

    /* Footer */

    /* Floating next project — make narrower */
    .next-project-float {
      min-width: auto;
      width: calc(100% - 100px);
      max-width: 380px;
      padding: 16px 22px;
    }
    .next-project-float .np-title { font-size: 14px; }
  }

  /* ======================================================
     RESPONSIVE — PHONE (≤600px)
     ====================================================== */
  @media (max-width: 600px) {

    /* Headings */
    .section-heading,
    .task-heading,
    .related-heading,
    .testimonials-heading,
    .start-cta h2 {
      font-size: 30px !important;
      letter-spacing: -0.5px;
    }
    .page-header h1 { font-size: 34px; }
    .project-title { font-size: 28px; letter-spacing: -0.5px; }

    /* Hero */
    .hero {
      margin-top: 72px;
      height: calc(100vh - 72px);
      min-height: 420px;
    }

    /* Works */
    .works { padding: 50px 18px 60px; }
    .works-grid { grid-template-columns: 1fr; gap: 32px; row-gap: 40px; }
    .work-card-image { aspect-ratio: 4 / 5; }
    .work-title { font-size: 24px; }

    /* Works page */
    .page-header { padding: 50px 18px 60px; }
    .filters-bar { padding: 24px 12px 24px; gap: 2px; }
    .filter-btn { font-size: 14px; padding: 6px 10px; }
    .filter-sep { font-size: 14px; }

    /* Project page */
    .project-hero {
      padding: 24px 18px 40px;
      min-height: 340px;
    }
    .back-btn { margin-bottom: 36px; font-size: 22px; }
    .project-category { font-size: 14px; margin-bottom: 16px; }
    .project-body { padding: 50px 18px; gap: 40px; }
    .project-meta { grid-template-columns: 1fr; }
    .project-description { font-size: 16px; }
    .our-task { padding: 30px 18px 60px; }
    .task-text { font-size: 16px; }
    .visit-btn { padding: 14px 28px; font-size: 15px; width: 100%; text-align: center; }

    /* Showcase */
    .showcase-tile { aspect-ratio: 4 / 3; }
    .showcase-tile.logo-tile,
    .showcase-tile.monitor-tile { padding: 30px 18px; }
    .placeholder-logo { gap: 10px; }
    .placeholder-logo .logo-mark { width: 44px; height: 44px; font-size: 26px; }
    .placeholder-logo .logo-text { font-size: 22px; }
    .placeholder-logo .logo-text small { font-size: 22px; }

    /* Laptop */
    .laptop-section { padding: 50px 18px 70px; }
    .laptop { transform: rotateY(-4deg) rotateX(2deg); }
    .laptop-arrows { margin-top: -130px; }
    .laptop-arrow { font-size: 22px; padding: 6px; }

    /* Related */
    .related-section { padding: 60px 18px 50px; }
    .related-grid { grid-template-columns: 1fr; gap: 32px; }
    .related-card-title { font-size: 24px; }

    /* Testimonials */
    .testimonials { padding: 60px 18px; }
    .testimonial-quote { font-size: 16px; line-height: 1.6; }
    .testimonial-stars { font-size: 18px; }
    .testimonial-author { font-size: 16px; }

    /* CTA */
    .start-cta { padding: 50px 18px; }
    .start-cta p { font-size: 16px; }
    .start-cta .meeting-btn {
      padding: 16px 32px;
      width: 100%;
      text-align: center;
    }

    /* Footer */
    .accordion-inner { padding: 18px 20px 4px; }
    .accordion-cities { gap: 10px 20px; }
    .accordion-cities span { font-size: 14px; }
    .footer-bottom {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      font-size: 13px;
    }
    .footer-bottom-links { gap: 20px; }

    /* Floating next project */
    .next-project-float {
      width: calc(100vw - 100px);
      padding: 12px 18px;
      border-radius: 0 10px 0 0;
    }
    .next-project-float .np-label { font-size: 12px; gap: 16px; }
    .next-project-float .np-title { font-size: 13px; }

    /* WhatsApp — hide tooltip on small screens */
  }

  /* ======================================================
     RESPONSIVE — TINY PHONE (≤380px)
     ====================================================== */
  @media (max-width: 380px) {
    .section-heading,
    .task-heading,
    .related-heading,
    .testimonials-heading,
    .start-cta h2 {
      font-size: 26px !important;
    }
    .page-header h1 { font-size: 28px; }
    .project-title { font-size: 24px; }
    .filter-btn { font-size: 13px; padding: 6px 8px; }
  }

  /* ======================================================
     PREFERS REDUCED MOTION
     ====================================================== */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }


  /* ======================================================
     POLISH FIXES
     ====================================================== */
  body { -webkit-text-size-adjust: 100%; }

  /* Long title word breaking */
  .project-title,
  .section-heading,
  .task-heading,
  .related-heading,
  .testimonials-heading,
  .start-cta h2,
  .page-header h1 {
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  }

  /* Long words in description */
  .project-description,
  .task-text,
  .testimonial-quote {
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  /* Match top margin to mobile navbar heights */
  @media (max-width: 900px) {
    .page-header { margin-top: 80px; }
    .project-hero { margin-top: 80px; }
  }
  @media (max-width: 600px) {
    .page-header { margin-top: 72px; }
    .project-hero { margin-top: 72px; }

    /* Filter bar: allow horizontal scroll on very small screens */
    .filters-bar {
      flex-wrap: nowrap;
      overflow-x: auto;
      justify-content: flex-start;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }
    .filters-bar::-webkit-scrollbar { display: none; }
    .filter-item, .filter-sep { flex-shrink: 0; }

    /* Breadcrumb on tiny screens — keep on one line if possible */
  }

  /* iOS Safari fix for video sizing */
  .hero video {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  /* Smooth scroll for anchor links */
  html { scroll-behavior: smooth; }

  /* Selection color */
  ::selection {
    background: var(--accent);
    color: #fff;
  }

  /* Focus visibility for keyboard users */
  a:focus-visible,
  button:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
    border-radius: 4px;
  }

  /* Fix inputs/buttons inheriting font */
  button, input, textarea, select {
    font-family: inherit;
  }

  /* Image fallback responsive */
  img, video, svg { max-width: 100%; height: auto; display: block; }
  .hero video { height: 100%; }

  /* Prevent horizontal scroll from any rogue element */
  body { overflow-x: hidden; position: relative; }


      `}} />

{/* NAVBAR */}


{/* PAGE HEADER */}
<header className="page-header">
  <p className="section-eyebrow">PORTFOLIO</p>
  <h1>A Showcase of Brands, Campaigns &amp; Creativity</h1>
</header>

{/* CATEGORY FILTERS */}
<div className="filters-bar" id="filtersBar">
  <div className="filter-item"><button className="filter-btn active" data-cat="all">All</button></div>
  <span className="filter-sep">/</span>
  <div className="filter-item"><button className="filter-btn" data-cat="creativity" id="our-creativity">Our Creativity</button></div>
  <span className="filter-sep">/</span>
  <div className="filter-item"><button className="filter-btn" data-cat="hoarding" id="hoarding-designs">Hoarding Designs</button></div>
  <span className="filter-sep">/</span>
  <div className="filter-item"><button className="filter-btn" data-cat="tickets" id="ticket-designs">Ticket Designs</button></div>
  <span className="filter-sep">/</span>
  <div className="filter-item"><button className="filter-btn" data-cat="videos">Creative Videos</button></div>
  <span className="filter-sep">/</span>
  <div className="filter-item"><button className="filter-btn" data-cat="social">Social Media Creatives</button></div>
</div>

{/* WORKS GRID */}
<section className="works">
  <div className="works-grid" id="worksGrid"></div>

  <div className="loader-wrapper">
    <div className="loader" id="loader"></div>
    <div className="end-message" id="endMessage">— You've reached the end —</div>
  </div>
</section>

{/* ==== FOOTER START ==== */}

{/* ==== FOOTER END ==== */}


{/* WHATSAPP FLOAT */}
    </>
  );
}