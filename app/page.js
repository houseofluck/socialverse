"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // ---------- HOME TESTIMONIALS CAROUSEL ----------
      (function() {
        const slides = document.querySelectorAll('.ht-slide');
        const dots   = document.querySelectorAll('.ht-dot');
        const prev   = document.querySelector('.ht-prev');
        const next   = document.querySelector('.ht-next');
        if (!slides.length) return;
        let idx = 0;

        function show(i) {
          slides.forEach(s => s.classList.remove('active'));
          dots.forEach(d => d.classList.remove('active'));
          slides[i].classList.add('active');
          dots[i].classList.add('active');
          idx = i;
        }
        if (prev) prev.addEventListener('click', () => show((idx - 1 + slides.length) % slides.length));
        if (next) next.addEventListener('click', () => show((idx + 1) % slides.length));
        dots.forEach(d => d.addEventListener('click', () => show(parseInt(d.dataset.i, 10))));

        // Auto-advance every 7s
        setInterval(() => show((idx + 1) % slides.length), 7000);
      })();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #fff;
    color: #111;
    overflow-x: hidden;
  }

  /* ---------- NAVBAR ---------- */





  /* The little red arrow accent inside the logo (like the X in NEXUS) */










  /* ---------- HERO VIDEO SECTION ---------- */
  .hero {
    margin-top: 90px;
    width: 100%;
    height: calc(100vh - 90px);
    background: #000;
    position: relative;
    overflow: hidden;
  }

  .hero video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    background: #000;
  }

  /* Optional dark overlay for readability if needed later */
  .hero::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0); /* keep clean for now */
    pointer-events: none;
  }

  /* ---------- WHATSAPP FLOATING BUTTON ---------- */






  /* ---------- OUR WORKS SECTION ---------- */
  .works {
    width: 100%;
    padding: 100px 60px 120px;
    background: #fff;
  }

  .works-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 60px;
    flex-wrap: wrap;
    gap: 24px;
  }

  .section-eyebrow {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 2px;
    color: #111;
    margin-bottom: 14px;
  }

  .section-heading {
    font-size: 56px;
    font-weight: 700;
    color: #111;
    letter-spacing: -1px;
    line-height: 1.05;
  }

  .view-all-btn {
    border: 1.5px solid #111;
    background: #fff;
    color: #111;
    padding: 16px 28px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    transition: background 0.25s ease, color 0.25s ease;
    font-family: inherit;
    cursor: pointer;
  }

  .view-all-btn:hover {
    background: #111;
    color: #fff;
  }

  .works-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }

  .work-card {
    display: flex;
    flex-direction: column;
  }

  .work-card-image {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: 18px;
    overflow: hidden;
    position: relative;
    margin-bottom: 24px;
    text-decoration: none;
    transition: transform 0.4s ease;
  }

  .work-card-image:hover {
    transform: translateY(-4px);
  }

  /* Card backgrounds — matching the reference vibe */
  .card-bg-1 {
    background: linear-gradient(135deg, #d9756c 0%, #c44a3f 100%);
  }
  .card-bg-2 {
    background: #d6443a;
  }
  .card-bg-3 {
    background: linear-gradient(135deg, #1a1410 0%, #c97a3c 100%);
  }

  /* Generic mock element shared styles */
  .work-mock {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Mock 1 — single magazine cover */
  .mock-cover {
    width: 38%;
    height: 70%;
    background: linear-gradient(180deg, #2a2f3a 0%, #1a1f28 100%);
    border-radius: 4px;
    box-shadow: 0 30px 50px rgba(0, 0, 0, 0.35);
    transform: rotate(-4deg);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 16px;
    color: #fff;
  }

  .mock-label {
    font-family: 'Georgia', serif;
    font-style: italic;
    font-size: 18px;
    line-height: 1.1;
  }

  .mock-year {
    font-size: 14px;
    text-align: right;
    opacity: 0.85;
  }

  /* Mock 2 — open magazine spread */
  .mock-spread {
    width: 70%;
    height: 55%;
    display: flex;
    transform: rotate(-3deg);
    box-shadow: 0 30px 50px rgba(0, 0, 0, 0.3);
  }

  .spread-page {
    flex: 1;
    background: #fafafa;
    position: relative;
  }

  .spread-page.left {
    border-right: 1px solid #ddd;
    background:
      linear-gradient(180deg, transparent 8%, #ddd 8%, #ddd 9%, transparent 9%) 0 6px / 100% 14px repeat-y,
      #fafafa;
    background-size: 100% 14px;
  }

  .spread-page.right {
    background:
      radial-gradient(circle at 30% 40%, #e8a87c 0 18%, transparent 18%),
      linear-gradient(180deg, transparent 70%, #ddd 70%, #ddd 72%, transparent 72%) 0 0 / 100% 12px repeat-y,
      #fafafa;
  }

  /* Mock 3 — stacked reports */
  .mock-stack {
    position: absolute;
    width: 32%;
    height: 60%;
    border-radius: 3px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }

  .stack-back {
    background: linear-gradient(180deg, #6b1a1a 0%, #4a0f0f 100%);
    transform: rotate(-12deg) translate(-30%, -8%);
  }

  .stack-front {
    background: linear-gradient(180deg, #8a2424 0%, #5e1414 100%);
    transform: rotate(8deg) translate(20%, 5%);
    display: flex;
    align-items: flex-end;
    padding: 16px;
  }

  .mock-stack-label {
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.1;
  }

  /* Card text */
  .work-title {
    font-size: 28px;
    font-weight: 700;
    color: #111;
    margin-bottom: 12px;
    letter-spacing: -0.5px;
  }

  .work-meta {
    font-size: 16px;
    color: #444;
  }

  .work-link {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    color: #111;
    font-size: 16px;
    font-weight: 500;
  }

  .work-link-line {
    display: inline-block;
    width: 50px;
    height: 1.5px;
    background: #111;
    transition: width 0.25s ease;
  }

  .work-link:hover .work-link-line {
    width: 80px;
  }

  /* ---------- RESPONSIVE ---------- */
  @media (max-width: 1024px) {
    .works { padding: 80px 30px 100px; }
    .works-grid { grid-template-columns: repeat(2, 1fr); }
    .section-heading { font-size: 44px; }
  }

  @media (max-width: 768px) {
    .works { padding: 60px 20px 80px; }
    .works-grid { grid-template-columns: 1fr; gap: 36px; }
    .section-heading { font-size: 36px; }
    .works-header { flex-direction: column; align-items: flex-start; }
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
    .work-card-image { aspect-ratio: 16 / 11; }
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


  /* ======================================================
     OUR SERVICES SECTION
     ====================================================== */
  .services-section {
    background: #f5f5f5;
    padding: 100px 60px 120px;
  }
  .services-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 50px;
    flex-wrap: wrap;
    gap: 24px;
  }
  .services-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    border-top: 1px dashed #c8c8c8;
    border-left: 1px dashed #c8c8c8;
  }
  .service-card {
    background: transparent;
    border-right: 1px dashed #c8c8c8;
    border-bottom: 1px dashed #c8c8c8;
    display: flex;
    flex-direction: column;
    transition: background 0.25s ease;
  }
  .service-card:hover {
    background: rgba(255, 255, 255, 0.6);
  }
  .service-card-head {
    padding: 36px 30px 30px;
    border-bottom: 1px dashed #c8c8c8;
  }
  .service-title {
    font-size: 26px;
    font-weight: 700;
    color: #111;
    letter-spacing: -0.4px;
    line-height: 1.2;
  }
  .service-card-body {
    padding: 32px 30px 36px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .service-desc {
    font-size: 16px;
    line-height: 1.55;
    color: #1a1a1a;
    margin-bottom: 26px;
  }
  .service-list {
    list-style: none;
    padding: 0;
    margin: 0 0 28px;
    flex: 1;
  }
  .service-list li {
    position: relative;
    padding-left: 18px;
    font-size: 15px;
    line-height: 1.55;
    color: #1a1a1a;
    margin-bottom: 12px;
  }
  .service-list li::before {
    content: "";
    position: absolute;
    left: 0; top: 9px;
    width: 5px; height: 5px;
    background: #111;
    border-radius: 50%;
  }
  .service-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: var(--accent);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1.5px;
    margin-top: auto;
    transition: gap 0.25s ease;
  }
  .service-link .arrow {
    display: inline-block;
    transition: transform 0.25s ease;
  }
  .service-link:hover { gap: 14px; }
  .service-link:hover .arrow { transform: translateX(4px); }

  .view-all-btn .arrow {
    display: inline-block;
    margin-left: 8px;
    transition: transform 0.25s ease;
  }
  .view-all-btn:hover .arrow { transform: translateX(4px); }

  /* RESPONSIVE */
  @media (max-width: 1100px) {
    .services-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 900px) {
    .services-section { padding: 70px 24px 90px; }
    .services-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 18px;
      margin-bottom: 36px;
    }
    .service-card-head { padding: 30px 24px 24px; }
    .service-card-body { padding: 26px 24px 32px; }
    .service-title { font-size: 22px; }
  }
  @media (max-width: 600px) {
    .services-section { padding: 50px 18px 70px; }
    .services-grid { grid-template-columns: 1fr; }
    .service-card-head { padding: 26px 22px 22px; }
    .service-card-body { padding: 24px 22px 30px; }
    .service-title { font-size: 20px; }
    .service-desc { font-size: 15px; margin-bottom: 22px; }
    .service-list li { font-size: 14px; }
  }


  /* ======================================================
     HOME — OUR CLIENTS
     ====================================================== */
  .home-clients {
    background: #fff;
    padding: 100px 60px 80px;
  }
  .home-clients-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 50px;
    flex-wrap: wrap;
    gap: 24px;
  }
  .home-clients-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 8px 30px;
    align-items: center;
  }
  .hc-logo {
    aspect-ratio: 5 / 2;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 18px;
    filter: grayscale(1);
    opacity: 0.55;
    transition: filter 0.25s ease, opacity 0.25s ease, transform 0.25s ease;
  }
  .hc-logo:hover { filter: none; opacity: 1; transform: translateY(-2px); }
  .hc-logo span {
    font-size: 22px;
    font-weight: 800;
    color: #777;
    letter-spacing: 0.5px;
    text-align: center;
    white-space: nowrap;
  }

  /* ======================================================
     HOME — CASE STUDIES
     ====================================================== */
  .case-studies {
    background: #f5f5f5;
    padding: 100px 60px;
  }
  .case-studies-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 50px;
    flex-wrap: wrap;
    gap: 24px;
  }
  .case-studies-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }
  .case-card { display: flex; flex-direction: column; }
  .case-card-image {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: 18px;
    overflow: hidden;
    position: relative;
    margin-bottom: 24px;
    text-decoration: none;
    transition: transform 0.4s ease;
  }
  .case-card-image:hover { transform: translateY(-4px); }
  .case-logo-mark {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .case-logo-mark span {
    font-size: 32px;
    font-weight: 800;
    color: #1a1a1a;
    letter-spacing: -0.5px;
  }
  .case-bar {
    position: absolute;
    left: 0; right: 0; bottom: 0;
    height: 14%;
  }
  .case-title {
    font-size: 24px;
    font-weight: 700;
    color: #111;
    letter-spacing: -0.4px;
    line-height: 1.25;
    margin-bottom: 12px;
  }
  .case-meta { font-size: 16px; color: #444; }
  .case-link {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    color: #111;
    font-size: 16px;
    font-weight: 500;
  }
  .case-link-line {
    display: inline-block;
    width: 50px;
    height: 1.5px;
    background: #111;
    transition: width 0.25s ease;
  }
  .case-link:hover .case-link-line { width: 80px; }

  /* ======================================================
     HOME — TESTIMONIALS
     ====================================================== */
  .home-testimonials {
    background: #f5f5f5;
    padding: 80px 60px 100px;
  }
  .ht-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 60px;
    align-items: center;
  }
  .ht-left .section-heading {
    max-width: 360px;
  }
  .ht-right {
    position: relative;
    padding: 0 50px;
  }
  .ht-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 36px;
    color: #111;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s ease, transform 0.2s ease;
    z-index: 2;
  }
  .ht-arrow:hover { color: var(--accent); }
  .ht-arrow.ht-prev { left: 0; }
  .ht-arrow.ht-prev:hover { transform: translateY(-50%) translateX(-3px); }
  .ht-arrow.ht-next { right: 0; }
  .ht-arrow.ht-next:hover { transform: translateY(-50%) translateX(3px); }

  .ht-content {
    overflow: hidden;
  }
  .ht-slide {
    display: none;
    grid-template-columns: 220px 1fr;
    gap: 40px;
    align-items: center;
    animation: fadeIn 0.4s ease;
  }
  .ht-slide.active { display: grid; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

  .ht-photo {
    width: 220px;
    height: 240px;
    border-radius: 14px;
    background: linear-gradient(135deg, #6a4c93 0%, #2980b9 100%);
    position: relative;
    overflow: hidden;
    box-shadow: 0 12px 30px rgba(0,0,0,0.12);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ht-photo::before {
    content: attr(data-initial);
    color: rgba(255,255,255,0.85);
    font-size: 88px;
    font-weight: 800;
    letter-spacing: -2px;
  }
  .ht-quote {
    font-size: 17px;
    font-style: italic;
    line-height: 1.65;
    color: #1a1a1a;
    margin-bottom: 24px;
  }
  .ht-stars {
    color: #f5b800;
    font-size: 22px;
    letter-spacing: 2px;
    margin-bottom: 12px;
  }
  .ht-author {
    font-size: 18px;
    font-weight: 700;
    color: #111;
    margin-bottom: 4px;
    font-style: italic;
  }
  .ht-author-meta {
    font-size: 15px;
    color: #555;
    font-style: italic;
  }
  .ht-dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 40px;
  }
  .ht-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ccc;
    cursor: pointer;
    transition: background 0.2s ease, transform 0.2s ease;
  }
  .ht-dot.active { background: #111; transform: scale(1.3); }

  /* ======================================================
     HOME — BLOGS
     ====================================================== */
  .home-blogs {
    background: #fff;
    padding: 100px 60px;
  }
  .home-blogs-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 50px;
    flex-wrap: wrap;
    gap: 24px;
  }
  .home-blogs-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }
  .blog-card {
    display: flex;
    flex-direction: column;
    border-radius: 18px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 4px 18px rgba(0,0,0,0.04);
    border: 1px solid #f0f0f0;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .blog-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 30px rgba(0,0,0,0.08);
  }
  .blog-image {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    position: relative;
    text-decoration: none;
    overflow: hidden;
  }
  .blog-body { padding: 28px 26px 32px; }
  .blog-meta {
    font-size: 14px;
    color: #555;
    margin-bottom: 14px;
  }
  .blog-title {
    font-size: 20px;
    font-weight: 700;
    color: #111;
    line-height: 1.3;
    letter-spacing: -0.3px;
    margin-bottom: 18px;
  }
  .blog-tag {
    display: inline-block;
    background: #f5f5f5;
    color: #111;
    padding: 5px 14px;
    border-radius: 4px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  /* Blog mock illustrations (CSS-built placeholders) */
  .blog-mock-1 {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 30px;
  }
  .blog-bubble {
    width: 26%;
    aspect-ratio: 3 / 4;
    border-radius: 50% 50% 12px 12px / 30% 30% 12px 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 800;
    box-shadow: 0 6px 18px rgba(0,0,0,0.18);
  }

  .blog-mock-2 {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 30px;
  }
  .vs-bubble {
    width: 32%;
    aspect-ratio: 1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    font-weight: 800;
    color: #fff;
    box-shadow: 0 8px 22px rgba(0,0,0,0.18);
  }
  .vs-bubble.vs-1 { background: linear-gradient(135deg, #d4793c, #b85a1f); }
  .vs-bubble.vs-2 { background: linear-gradient(135deg, #2dba8a, #128a64); }
  .vs-divider {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--accent);
    color: #fff;
    font-weight: 800;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .blog-mock-3 {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bm-circle {
    width: 38%;
    aspect-ratio: 1;
    border-radius: 50%;
    background: linear-gradient(135deg, #d6b3ff, #a874ff);
    box-shadow: 0 8px 22px rgba(0,0,0,0.15);
  }
  .bm-line {
    position: absolute;
    height: 2px;
    background: rgba(0,0,0,0.4);
    border-top: 2px dashed rgba(0,0,0,0.4);
    background: none;
  }
  .bm-line-1 {
    width: 30%; top: 30%; left: 10%;
    transform: rotate(-15deg);
  }
  .bm-line-2 {
    width: 25%; top: 50%; right: 10%;
    transform: rotate(20deg);
  }
  .bm-line-3 {
    width: 20%; bottom: 25%; left: 20%;
    transform: rotate(-30deg);
  }
  .bm-icon {
    position: absolute;
    width: 40px; height: 40px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.12);
  }
  .bm-icon-1 { top: 22%; left: 12%; }
  .bm-icon-2 { top: 18%; right: 14%; }
  .bm-icon-3 { bottom: 18%; right: 18%; }

  /* ======================================================
     HOME — LET'S HAVE A TALK FORM
     ====================================================== */
  .home-talk {
    background: #fff;
    padding: 100px 60px;
    border-top: 1px solid #f0f0f0;
  }
  .home-talk .section-eyebrow {
    margin-bottom: 18px;
  }
  .talk-heading {
    font-size: 56px;
    font-weight: 700;
    color: var(--accent);
    letter-spacing: -1px;
    line-height: 1.05;
    margin-bottom: 60px;
  }
  .talk-form .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
    margin-bottom: 28px;
  }
  .talk-form .form-field { display: flex; flex-direction: column; }
  .talk-form .form-field label {
    font-size: 16px; font-weight: 700; color: #111;
    margin-bottom: 10px;
  }
  .talk-form .form-field label .req,
  .talk-form .req { color: var(--accent); }
  .talk-form .form-field input,
  .talk-form .form-field textarea {
    background: #f3f3f3;
    border: 1px solid transparent;
    border-radius: 6px;
    padding: 16px 18px;
    font-size: 16px;
    font-family: inherit;
    color: #111;
    width: 100%;
    transition: border-color 0.2s ease, background 0.2s ease;
  }
  .talk-form .form-field input::placeholder,
  .talk-form .form-field textarea::placeholder { color: #888; }
  .talk-form .form-field input:focus,
  .talk-form .form-field textarea:focus {
    outline: none; border-color: #111; background: #fff;
  }
  .talk-form .form-field textarea {
    resize: vertical; min-height: 140px;
  }
  .talk-form .name-row {
    display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
  }
  .talk-form .name-row input {
    background: #f3f3f3; border: 1px solid transparent;
    border-radius: 6px; padding: 16px 18px;
    font-size: 16px; font-family: inherit; color: #111;
  }
  .talk-form .name-row input:focus { outline: none; border-color: #111; background: #fff; }

  .talk-form .checkbox-group { margin-top: 20px; margin-bottom: 36px; }
  .talk-form .checkbox-group .group-label {
    font-size: 16px; font-weight: 700; color: #111;
    margin-bottom: 18px;
  }
  .talk-form .checkbox-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px 32px;
  }
  .talk-form .check-item {
    display: flex; align-items: center; gap: 10px;
    cursor: pointer; font-size: 16px; color: #1a1a1a;
    user-select: none;
  }
  .talk-form .check-item input { display: none; }
  .talk-form .check-item .box {
    width: 20px; height: 20px;
    border: 1.5px solid #888;
    border-radius: 4px;
    display: inline-flex; align-items: center; justify-content: center;
    transition: background 0.2s ease, border-color 0.2s ease;
    flex-shrink: 0;
  }
  .talk-form .check-item input:checked + .box {
    background: #111; border-color: #111;
  }
  .talk-form .check-item input:checked + .box::after {
    content: ""; width: 5px; height: 9px;
    border: solid #fff; border-width: 0 2px 2px 0;
    transform: rotate(45deg) translate(-1px, -1px);
  }
  .talk-form .submit-btn {
    background: #0d0d0d; color: #fff; border: none;
    padding: 16px 36px; font-size: 16px; font-weight: 600;
    border-radius: 6px; cursor: pointer; font-family: inherit;
    transition: background 0.2s ease, transform 0.2s ease;
  }
  .talk-form .submit-btn:hover { background: #000; transform: translateY(-2px); }

  /* ======================================================
     HOME — CAREERS
     ====================================================== */
  .home-careers {
    background: #f5f5f5;
    padding: 80px 60px;
  }
  .careers-grid {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 60px;
    align-items: center;
  }
  .careers-text .section-eyebrow { margin-bottom: 14px; }
  .careers-text .section-heading { margin-bottom: 24px; }
  .careers-desc {
    font-size: 17px;
    line-height: 1.7;
    color: #1a1a1a;
    max-width: 720px;
  }
  .join-btn {
    display: inline-block;
    background: #0d0d0d;
    color: #fff;
    padding: 18px 40px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    transition: background 0.2s ease, transform 0.2s ease;
    align-self: center;
  }
  .join-btn:hover { background: #000; transform: translateY(-2px); }

  /* ======================================================
     RESPONSIVE — NEW HOME SECTIONS
     ====================================================== */
  @media (max-width: 1100px) {
    .home-clients-grid { grid-template-columns: repeat(4, 1fr); }
    .case-studies-grid { grid-template-columns: repeat(2, 1fr); }
    .home-blogs-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 900px) {
    .home-clients,
    .case-studies,
    .home-testimonials,
    .home-blogs,
    .home-talk,
    .home-careers { padding: 70px 24px; }
    .home-clients-header,
    .case-studies-header,
    .home-blogs-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 18px;
      margin-bottom: 36px;
    }
    .home-clients-grid { grid-template-columns: repeat(3, 1fr); }
    .hc-logo span { font-size: 18px; }

    .ht-grid { grid-template-columns: 1fr; gap: 36px; }
    .ht-right { padding: 0 36px; }
    .ht-slide { grid-template-columns: 1fr; gap: 24px; text-align: center; }
    .ht-photo { width: 180px; height: 200px; margin: 0 auto; }
    .ht-arrow { font-size: 30px; }

    .talk-heading { font-size: 38px !important; }
    .talk-form .form-row { grid-template-columns: 1fr; gap: 22px; margin-bottom: 22px; }
    .talk-form .checkbox-grid { grid-template-columns: repeat(2, 1fr); gap: 12px 18px; }

    .careers-grid { grid-template-columns: 1fr; gap: 32px; }
    .careers-text .section-heading { font-size: 38px !important; }
  }
  @media (max-width: 600px) {
    .home-clients,
    .case-studies,
    .home-testimonials,
    .home-blogs,
    .home-talk,
    .home-careers { padding: 50px 18px; }
    .home-clients-grid { grid-template-columns: repeat(2, 1fr); gap: 6px 16px; }
    .hc-logo { padding: 14px; }
    .hc-logo span { font-size: 15px; }

    .case-studies-grid { grid-template-columns: 1fr; gap: 32px; }
    .case-title { font-size: 22px; }

    .home-blogs-grid { grid-template-columns: 1fr; gap: 24px; }
    .blog-body { padding: 24px 22px 28px; }
    .blog-title { font-size: 18px; }

    .ht-photo { width: 140px; height: 160px; }
    .ht-photo::before { font-size: 60px; }
    .ht-quote { font-size: 15px; }
    .ht-right { padding: 0 30px; }
    .ht-arrow { font-size: 26px; width: 28px; height: 28px; }

    .talk-heading { font-size: 30px !important; }
    .talk-form .name-row { grid-template-columns: 1fr; gap: 12px; }
    .talk-form .checkbox-grid { grid-template-columns: 1fr; }
    .talk-form .submit-btn { width: 100%; padding: 18px 32px; }

    .careers-text .section-heading { font-size: 30px !important; }
    .join-btn { width: 100%; text-align: center; }
  }


      `}} />

{/* NAVBAR */}


{/* HERO VIDEO SECTION */}
<section className="hero">
  <video autoPlay muted loop playsInline poster="">
    {/* Replace this src with your actual video file */}
    <source src="/hero.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</section>

{/* OUR WORKS / PORTFOLIO SECTION */}
<section className="works">
  <div className="works-header">
    <div className="works-title-block">
      <p className="section-eyebrow">PORTFOLIO</p>
      <h2 className="section-heading">Our Works</h2>
    </div>
    <a href="/works" className="view-all-btn">View All Our Works</a>
  </div>

  <div className="works-grid">
    {/* Card 1 */}
    <article className="work-card">
      <a href="/projects/sample-project" className="work-card-image card-bg-1">
        <div className="work-mock work-mock-1">
          <div className="mock-cover">
            <div className="mock-label">Project<br/>One</div>
            <div className="mock-year">2025</div>
          </div>
        </div>
      </a>
      <h3 className="work-title">Project One</h3>
      <p className="work-meta">Brand Identity, Campaign</p>
    </article>

    {/* Card 2 */}
    <article className="work-card">
      <a href="/projects/sample-project" className="work-card-image card-bg-2">
        <div className="work-mock work-mock-2">
          <div className="mock-spread">
            <div className="spread-page left"></div>
            <div className="spread-page right"></div>
          </div>
        </div>
      </a>
      <h3 className="work-title">Project Two</h3>
      <a href="/projects/sample-project" className="work-link">
        Show project <span className="work-link-line"></span>
      </a>
    </article>

    {/* Card 3 */}
    <article className="work-card">
      <a href="/projects/sample-project" className="work-card-image card-bg-3">
        <div className="work-mock work-mock-3">
          <div className="mock-stack stack-back"></div>
          <div className="mock-stack stack-front">
            <div className="mock-stack-label">Project<br/>Three</div>
          </div>
        </div>
      </a>
      <h3 className="work-title">Project Three</h3>
      <p className="work-meta">Digital Report, Strategy</p>
    </article>
  </div>
</section>

{/* ==== FOOTER START ==== */}

{/* OUR SERVICES SECTION */}
<section className="services-section">
  <div className="services-header">
    <div className="services-title-block">
      <p className="section-eyebrow">CAPABILITIES</p>
      <h2 className="section-heading">Our Services</h2>
    </div>
    <a href="/services" className="view-all-btn">View All Services <span className="arrow">→</span></a>
  </div>

  <div className="services-grid">
    {/* Service 1 */}
    <article className="service-card">
      <div className="service-card-head">
        <h3 className="service-title">Digital Marketing</h3>
      </div>
      <div className="service-card-body">
        <p className="service-desc">Stay on top of the web with a robust digital marketing strategy.</p>
        <ul className="service-list">
          <li>Google Ads</li>
          <li>Social Media Marketing</li>
          <li>Search Engine Optimization (SEO)</li>
          <li>Email Marketing Service</li>
          <li>Content Marketing</li>
          <li>WhatsApp Marketing</li>
          <li>Google Local Services</li>
        </ul>
        <a href="/services/digital-marketing" className="service-link">KNOW MORE <span className="arrow">→</span></a>
      </div>
    </article>

    {/* Service 2 */}
    <article className="service-card">
      <div className="service-card-head">
        <h3 className="service-title">Website Development</h3>
      </div>
      <div className="service-card-body">
        <p className="service-desc">Create a unique virtual home for your business with a website that matters.</p>
        <ul className="service-list">
          <li>Shopify Website Development</li>
          <li>Magento Website Development</li>
          <li>WordPress Development</li>
          <li>PHP Website Development</li>
          <li>Custom Website Development</li>
          <li>Website AMC</li>
          <li>UI/UX Design</li>
          <li>Landing Pages Design</li>
        </ul>
        <a href="/services/website-development" className="service-link">KNOW MORE <span className="arrow">→</span></a>
      </div>
    </article>

    {/* Service 3 */}
    <article className="service-card">
      <div className="service-card-head">
        <h3 className="service-title">Video Production</h3>
      </div>
      <div className="service-card-body">
        <p className="service-desc">Set your ideas and campaigns to motion with an impactful video.</p>
        <ul className="service-list">
          <li>Video Content Strategy</li>
          <li>TV Ads Commercials</li>
          <li>Corporate Videos</li>
          <li>2D &amp; 3D Animations</li>
          <li>Promotional Videos</li>
          <li>Whiteboard Animation</li>
        </ul>
        <a href="/services/video-production" className="service-link">KNOW MORE <span className="arrow">→</span></a>
      </div>
    </article>

    {/* Service 4 */}
    <article className="service-card">
      <div className="service-card-head">
        <h3 className="service-title">Presentation Design</h3>
      </div>
      <div className="service-card-body">
        <p className="service-desc">We create clear &amp; effective presentations as per your requirement.</p>
        <ul className="service-list">
          <li>Investor Pitch Deck</li>
          <li>Corporate Presentation Design</li>
          <li>Sales Presentation</li>
          <li>Financial Presentation Design</li>
          <li>Slide Deck Design</li>
          <li>Custom PowerPoint Design</li>
        </ul>
        <a href="/services/presentation-design" className="service-link">KNOW MORE <span className="arrow">→</span></a>
      </div>
    </article>
  </div>
</section>



{/* OUR CLIENTS SECTION */}
<section className="home-clients">
  <div className="home-clients-header">
    <div>
      <p className="section-eyebrow">TRUSTED BY THE WORLD'S LEADING BRANDS</p>
      <h2 className="section-heading">Our Clients</h2>
    </div>
    <a href="#all-clients" className="view-all-btn">View All Clients</a>
  </div>
  <div className="home-clients-grid">
    <div className="hc-logo"><span>BrandOne</span></div>
    <div className="hc-logo"><span>NovaCo</span></div>
    <div className="hc-logo"><span>Apex</span></div>
    <div className="hc-logo"><span>Stellar</span></div>
    <div className="hc-logo"><span>Vertex</span></div>
    <div className="hc-logo"><span>Orbit</span></div>
    <div className="hc-logo"><span>Lumen</span></div>
    <div className="hc-logo"><span>Pulse</span></div>
    <div className="hc-logo"><span>Forge</span></div>
    <div className="hc-logo"><span>Helix</span></div>
    <div className="hc-logo"><span>Atlas</span></div>
    <div className="hc-logo"><span>Beacon</span></div>
    <div className="hc-logo"><span>Quanta</span></div>
    <div className="hc-logo"><span>Zenith</span></div>
    <div className="hc-logo"><span>Nimbus</span></div>
    <div className="hc-logo"><span>Echo</span></div>
    <div className="hc-logo"><span>Crest</span></div>
    <div className="hc-logo"><span>Flint</span></div>
  </div>
</section>

{/* CASE STUDIES SECTION */}
<section className="case-studies">
  <div className="case-studies-header">
    <div>
      <p className="section-eyebrow">SHOWCASING CLIENT SUCCESS STORIES</p>
      <h2 className="section-heading">Case Studies</h2>
    </div>
    <a href="/works" className="view-all-btn">View All Projects</a>
  </div>
  <div className="case-studies-grid">
    <article className="case-card">
      <a href="/case-studies/sample-case" className="case-card-image" style={{background: '#fde6f0'}}>
        <div className="case-logo-mark"><span>HopCharge</span></div>
        <div className="case-bar" style={{background: '#f7c4d6'}}></div>
      </a>
      <h3 className="case-title">HopCharge — A Digital Marketing Success Story</h3>
      <p className="case-meta">Case Studies</p>
    </article>
    <article className="case-card">
      <a href="/case-studies/sample-case" className="case-card-image" style={{background: '#e6f5d4'}}>
        <div className="case-logo-mark"><span>Wisdom</span></div>
        <div className="case-bar" style={{background: '#cce8a8'}}></div>
      </a>
      <h3 className="case-title">Wisdom Global School — A Proven Google Ads Case Study</h3>
      <a href="/case-studies/sample-case" className="case-link">Show project <span className="case-link-line"></span></a>
    </article>
    <article className="case-card">
      <a href="/case-studies/sample-case" className="case-card-image" style={{background: '#ededed'}}>
        <div className="case-logo-mark"><span>Hoopr</span></div>
        <div className="case-bar" style={{background: '#d0d0d0'}}></div>
      </a>
      <h3 className="case-title">Hoopr — Case Study | Google Analytics GA4</h3>
      <p className="case-meta">Case Studies</p>
    </article>
  </div>
</section>

{/* TESTIMONIALS SECTION */}
<section className="home-testimonials">
  <div className="ht-grid">
    <div className="ht-left">
      <p className="section-eyebrow">TESTIMONIALS</p>
      <h2 className="section-heading">What our clients say</h2>
    </div>
    <div className="ht-right">
      <button className="ht-arrow ht-prev" aria-label="Previous">‹</button>
      <div className="ht-content">
        <div className="ht-slide active">
          <div className="ht-photo" data-initial="A"></div>
          <div className="ht-body">
            <p className="ht-quote">"Working with TheSocialVerse has been a transformative experience. Their team brought ingenuity, creativity, and execution under one roof — combining sharp strategy with a friendly, collaborative approach. From campaign planning to lead generation, every initiative was handled with care and delivered remarkable results. Truly grateful for their partnership."</p>
            <div className="ht-stars">★ ★ ★ ★ ★</div>
            <div className="ht-author">Sample Client A</div>
            <div className="ht-author-meta">Founder, Sample Company</div>
          </div>
        </div>
        <div className="ht-slide">
          <div className="ht-photo" data-initial="B"></div>
          <div className="ht-body">
            <p className="ht-quote">"From kickoff to launch, every step was handled with precision and care. Our brand was reborn with a sharper voice, smarter visuals, and campaigns that genuinely resonated with our audience. The team's attention to detail and commitment to outcomes is something we deeply value."</p>
            <div className="ht-stars">★ ★ ★ ★ ★</div>
            <div className="ht-author">Sample Client B</div>
            <div className="ht-author-meta">Marketing Lead, Sample Brand</div>
          </div>
        </div>
        <div className="ht-slide">
          <div className="ht-photo" data-initial="C"></div>
          <div className="ht-body">
            <p className="ht-quote">"The strategic clarity TheSocialVerse brought to our brand was exactly what we needed. They listen, iterate fast, and ship work that moves the needle. Our engagement metrics doubled in the first quarter alone. Looking forward to many more projects together."</p>
            <div className="ht-stars">★ ★ ★ ★ ★</div>
            <div className="ht-author">Sample Client C</div>
            <div className="ht-author-meta">CEO, Sample Startup</div>
          </div>
        </div>
      </div>
      <button className="ht-arrow ht-next" aria-label="Next">›</button>
    </div>
  </div>
  <div className="ht-dots">
    <span className="ht-dot active" data-i="0"></span>
    <span className="ht-dot" data-i="1"></span>
    <span className="ht-dot" data-i="2"></span>
  </div>
</section>

{/* OUR BLOGS SECTION */}
<section className="home-blogs">
  <div className="home-blogs-header">
    <div>
      <p className="section-eyebrow">EXPERT INSIGHTS</p>
      <h2 className="section-heading">Our Blogs</h2>
    </div>
    <a href="#all-blogs" className="view-all-btn">View All Our Blogs</a>
  </div>
  <div className="home-blogs-grid">
    <article className="blog-card">
      <a href="/blog/sample-post" className="blog-image" style={{background: '#fde0c8'}}>
        <div className="blog-mock-1">
          <div className="blog-bubble" style={{background: '#3498db', color: '#fff'}}>SEO</div>
          <div className="blog-bubble" style={{background: '#9b59b6', color: '#fff'}}>AEO</div>
          <div className="blog-bubble" style={{background: '#e67e22', color: '#fff'}}>GEO</div>
        </div>
      </a>
      <div className="blog-body">
        <p className="blog-meta">15 min read</p>
        <h3 className="blog-title">SEO vs AEO vs GEO: The Complete 2026 Guide to Winning Visibility</h3>
        <span className="blog-tag">SEO</span>
      </div>
    </article>
    <article className="blog-card">
      <a href="/blog/sample-post" className="blog-image" style={{background: '#fde6cc'}}>
        <div className="blog-mock-2">
          <div className="vs-bubble vs-1"><span>C</span></div>
          <div className="vs-divider">VS</div>
          <div className="vs-bubble vs-2"><span>G</span></div>
        </div>
      </a>
      <div className="blog-body">
        <p className="blog-meta">29 min read</p>
        <h3 className="blog-title">Claude vs ChatGPT 2026: Which AI Tool Is Actually Better for Your Business?</h3>
        <span className="blog-tag">AI</span>
      </div>
    </article>
    <article className="blog-card">
      <a href="/blog/sample-post" className="blog-image" style={{background: '#fbe9b8'}}>
        <div className="blog-mock-3">
          <div className="bm-circle"></div>
          <div className="bm-line bm-line-1"></div>
          <div className="bm-line bm-line-2"></div>
          <div className="bm-line bm-line-3"></div>
          <div className="bm-icon bm-icon-1">📊</div>
          <div className="bm-icon bm-icon-2">🤖</div>
          <div className="bm-icon bm-icon-3">⚙️</div>
        </div>
      </a>
      <div className="blog-body">
        <p className="blog-meta">7 min read</p>
        <h3 className="blog-title">How AI is Revolutionizing SEO Tools and Techniques for 2026</h3>
        <span className="blog-tag">SEO</span>
      </div>
    </article>
  </div>
</section>

{/* LET'S HAVE A TALK */}
<section className="home-talk">
  <p className="section-eyebrow">SAY HELLO</p>
  <h2 className="talk-heading">Let's have a talk!</h2>

  <form className="talk-form" onSubmit={(e) => { e.preDefault(); alert('Thanks! We will get back to you shortly.'); }}>
    <div className="form-row">
      <div className="form-field">
        <label>Name <span className="req">*</span></label>
        <div className="name-row">
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Last name" />
        </div>
      </div>
      <div className="form-field"></div>
    </div>
    <div className="form-row">
      <div className="form-field">
        <label>Email <span className="req">*</span></label>
        <input type="email" placeholder="Enter your email id" required />
      </div>
      <div className="form-field">
        <label>Phone <span className="req">*</span></label>
        <input type="tel" placeholder="Enter your contact number" required />
      </div>
    </div>
    <div className="form-row">
      <div className="form-field">
        <label>Company <span className="req">*</span></label>
        <input type="text" placeholder="Please enter your business name" required />
      </div>
      <div className="form-field">
        <label>Website</label>
        <input type="url" placeholder="https://www.example.com" />
      </div>
    </div>
    <div className="checkbox-group">
      <div className="group-label">What services can we provide you? <span className="req">*</span></div>
      <div className="checkbox-grid">
        <label className="check-item"><input type="checkbox" name="svc" /><span className="box"></span>Search Engine Optimization (SEO)</label>
        <label className="check-item"><input type="checkbox" name="svc" /><span className="box"></span>Google Ads</label>
        <label className="check-item"><input type="checkbox" name="svc" /><span className="box"></span>Email Marketing</label>
        <label className="check-item"><input type="checkbox" name="svc" /><span className="box"></span>SMS Marketing</label>
        <label className="check-item"><input type="checkbox" name="svc" /><span className="box"></span>WhatsApp Marketing</label>
        <label className="check-item"><input type="checkbox" name="svc" /><span className="box"></span>Social Media Marketing (SMM)</label>
        <label className="check-item"><input type="checkbox" name="svc" /><span className="box"></span>Content Marketing</label>
        <label className="check-item"><input type="checkbox" name="svc" /><span className="box"></span>Google Local Services</label>
        <label className="check-item"><input type="checkbox" name="svc" /><span className="box"></span>Print &amp; Packaging Design</label>
        <label className="check-item"><input type="checkbox" name="svc" /><span className="box"></span>UI &amp; UX Design</label>
        <label className="check-item"><input type="checkbox" name="svc" /><span className="box"></span>Branding &amp; Rebranding</label>
        <label className="check-item"><input type="checkbox" name="svc" /><span className="box"></span>Website Design &amp; Development</label>
        <label className="check-item"><input type="checkbox" name="svc" /><span className="box"></span>Video Production</label>
        <label className="check-item"><input type="checkbox" name="svc" /><span className="box"></span>2D &amp; 3D Animation</label>
        <label className="check-item"><input type="checkbox" name="svc" /><span className="box"></span>TV Ads Commercials</label>
        <label className="check-item"><input type="checkbox" name="svc" /><span className="box"></span>Photography</label>
        <label className="check-item"><input type="checkbox" name="svc" /><span className="box"></span>PowerPoint Presentation</label>
        <label className="check-item"><input type="checkbox" name="svc" /><span className="box"></span>Social Media Design</label>
        <label className="check-item"><input type="checkbox" name="svc" /><span className="box"></span>Logo Designing</label>
      </div>
    </div>
    <div className="form-field" style={{marginBottom: '32px'}}>
      <label>Message</label>
      <textarea placeholder="Enter your message"></textarea>
    </div>
    <button type="submit" className="submit-btn">Submit</button>
  </form>
</section>

{/* CAREERS SECTION */}
<section className="home-careers">
  <div className="careers-grid">
    <div className="careers-text">
      <p className="section-eyebrow">JOIN OUR CREW</p>
      <h2 className="section-heading">Careers</h2>
      <p className="careers-desc">
        TheSocialVerse is a fast-growing creative and digital marketing studio with offices
        across India. We're always on the lookout for ambitious, curious people who want to
        build great work with great teams. If that sounds like you — find a role and apply.
      </p>
    </div>
    <a href="#careers" className="join-btn">Join Us</a>
  </div>
</section>



{/* ==== FOOTER END ==== */}


{/* WHATSAPP FLOATING BUTTON */}
    </>
  );
}