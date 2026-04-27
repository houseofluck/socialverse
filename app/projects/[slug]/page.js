"use client";

import { useEffect } from "react";

export default function ProjectsSlugPage() {
  useEffect(() => {
    // ---------- TESTIMONIALS CAROUSEL ----------
      const slides = document.querySelectorAll('.testimonial-slide');
      const dots   = document.querySelectorAll('.testimonial-dots .dot');
      let activeSlide = 0;

      function showSlide(idx) {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        slides[idx].classList.add('active');
        dots[idx].classList.add('active');
        activeSlide = idx;
      }
      dots.forEach(dot => {
        dot.addEventListener('click', () => showSlide(parseInt(dot.dataset.idx, 10)));
      });

      // Auto-advance testimonials
      setInterval(() => {
        showSlide((activeSlide + 1) % slides.length);
      }, 6000);

      // ---------- LAPTOP CAROUSEL (placeholder for now) ----------
      document.querySelectorAll('.laptop-arrow').forEach(arrow => {
        arrow.addEventListener('click', () => {
          const laptop = document.querySelector('.laptop');
          laptop.style.transition = 'transform 0.4s ease, opacity 0.3s ease';
          laptop.style.opacity = '0.5';
          setTimeout(() => { laptop.style.opacity = '1'; }, 300);
        });
      });

      // ---------- HIDE FLOATING NEXT PROJECT WHEN FOOTER VISIBLE ----------
      const float = document.getElementById('nextProjectFloat');
      window.addEventListener('scroll', () => {
        const footer = document.querySelector('.site-footer');
        if (!footer) return;
        const rect = footer.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          float.style.transform = 'translateY(150%)';
        } else {
          float.style.transform = 'translateY(0)';
        }
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



  /* ---------- PROJECT HERO ---------- */
  .project-hero {
    margin-top: 90px;
    width: 100%;
    min-height: 520px;
    background: transparent;
    position: relative;
    padding: 60px 60px 80px;
    color: #fff;
    overflow: hidden;
  }
  

  .back-btn {
    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    margin-bottom: 60px;
    padding: 8px;
    transition: transform 0.2s ease;
  }
  .back-btn:hover { transform: translateX(-4px); }

  .project-category {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 24px;
    position: relative;
    z-index: 2;
  }

  .project-title {
    font-size: 64px;
    font-weight: 700;
    color: #fff;
    line-height: 1.05;
    letter-spacing: -1.5px;
    max-width: 1100px;
    position: relative;
    z-index: 2;
  }


  /* ---------- PROJECT BODY ---------- */
  .project-body {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 80px;
    padding: 80px 60px;
    align-items: start;
  }

  .project-description {
    font-size: 17px;
    line-height: 1.75;
    color: #1a1a1a;
  }

  .project-meta {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px 40px;
    align-items: start;
  }
  .meta-item { border-top: 1px solid #d8d8d8; padding-top: 16px; }
  .meta-item.full { grid-column: 1 / -1; border-top: none; padding-top: 0; }
  .meta-label {
    font-size: 17px; font-weight: 700; color: #111; margin-bottom: 8px;
  }
  .meta-value { font-size: 16px; color: #333; }

  .visit-btn {
    display: inline-block;
    background: #111;
    color: #fff;
    padding: 16px 36px;
    border-radius: 8px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    transition: background 0.2s ease, transform 0.2s ease;
    margin-top: 8px;
  }
  .visit-btn:hover { background: #000; transform: translateY(-2px); }

  /* ---------- OUR TASK ---------- */
  .our-task {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 80px;
    padding: 60px 60px 100px;
    align-items: start;
  }
  .task-heading {
    font-size: 56px;
    font-weight: 700;
    color: #111;
    letter-spacing: -1px;
    line-height: 1.05;
  }
  .task-text {
    font-size: 17px;
    line-height: 1.75;
    color: #1a1a1a;
  }

  /* ---------- IMAGE SHOWCASE ---------- */
  .showcase-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 0;
    padding: 0;
    background: #f3f3f3;
  }
  .showcase-tile {
    aspect-ratio: 4 / 3;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }
  .showcase-tile.logo-tile { background: #e8e8e8; padding: 40px; }
  .showcase-tile.monitor-tile { background: #fff; padding: 60px; }

  /* CSS placeholder logo */
  .placeholder-logo {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .placeholder-logo .logo-mark {
    width: 60px; height: 60px;
    background: #f5b800;
    border-radius: 6px;
    display: flex; align-items: center; justify-content: center;
    font-weight: 800; font-size: 36px; color: #111;
    font-family: 'Georgia', serif;
  }
  .placeholder-logo .logo-text {
    font-size: 32px; font-weight: 800; color: #111;
    line-height: 1;
  }
  .placeholder-logo .logo-text small {
    display: block; font-size: 32px; font-weight: 800; margin-top: 2px;
  }

  /* CSS placeholder monitor mockup */
  .monitor-mockup {
    width: 90%;
    max-width: 540px;
    background: #1a1a1a;
    border-radius: 8px 8px 0 0;
    padding: 14px 14px 0;
    position: relative;
  }
  .monitor-screen {
    background: #fff;
    aspect-ratio: 16 / 10;
    border-radius: 2px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .monitor-nav {
    height: 22px;
    background: #fff;
    border-bottom: 1px solid #eee;
    display: flex; align-items: center; justify-content: flex-end;
    padding: 0 12px; gap: 10px;
  }
  .monitor-nav span {
    font-size: 6px; color: #555;
  }
  .monitor-banner {
    background: #ffb627;
    flex: 1;
    display: flex;
    align-items: center;
    padding: 16px;
    position: relative;
  }
  .monitor-banner-text {
    font-size: 9px;
    font-weight: 700;
    color: #111;
    line-height: 1.2;
    width: 50%;
  }
  .monitor-banner-shape {
    position: absolute;
    right: 16px; top: 50%;
    transform: translateY(-50%);
    width: 45%;
    height: 70%;
    background:
      linear-gradient(45deg, transparent 40%, #1a1a1a 40%, #1a1a1a 60%, transparent 60%),
      #ffb627;
    border-radius: 4px;
  }
  .monitor-content {
    background: #fff;
    padding: 8px 16px;
    display: flex;
    gap: 6px;
  }
  .monitor-content .col {
    flex: 1; height: 24px;
    background: #f5f5f5; border-radius: 2px;
    display: flex; align-items: flex-end;
    padding: 3px;
    font-size: 4px; color: #333;
  }
  .monitor-stand {
    width: 70%;
    height: 22px;
    background: #ccc;
    margin: -2px auto 0;
    border-radius: 0 0 4px 4px;
  }
  .monitor-base {
    width: 30%;
    height: 6px;
    background: #aaa;
    margin: 0 auto;
    border-radius: 0 0 8px 8px;
  }

  /* ---------- LAPTOP CAROUSEL ---------- */
  .laptop-section {
    background: #f3f3f3;
    padding: 80px 60px 100px;
    position: relative;
  }
  .laptop-frame {
    max-width: 900px;
    margin: 0 auto;
    perspective: 1200px;
  }
  .laptop {
    position: relative;
    transform: rotateY(-12deg) rotateX(8deg);
    transform-style: preserve-3d;
    margin: 0 auto;
    width: 100%;
    max-width: 760px;
  }
  .laptop-screen {
    background: #1a1a1a;
    border-radius: 12px 12px 4px 4px;
    padding: 16px;
    box-shadow: 0 40px 80px rgba(0,0,0,0.25);
  }
  .laptop-display {
    background: #fff;
    aspect-ratio: 16 / 10;
    border-radius: 2px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .laptop-nav {
    height: 30px;
    background: #fff;
    border-bottom: 1px solid #eee;
    display: flex; align-items: center; justify-content: flex-end;
    padding: 0 16px; gap: 16px;
    font-size: 9px; color: #555;
  }
  .laptop-banner {
    background:
      linear-gradient(0deg, rgba(255,255,255,0.85), rgba(255,255,255,0.85)),
      url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><rect width="100" height="60" fill="%23999"/></svg>');
    background-size: cover;
    flex: 1;
    display: flex;
    align-items: center;
    padding: 30px;
    position: relative;
  }
  .laptop-banner-content {
    flex: 1;
  }
  .laptop-banner-content h4 {
    font-size: 14px; font-weight: 700; color: #111;
    line-height: 1.2; margin-bottom: 6px;
  }
  .laptop-banner-content .lp-text {
    font-size: 7px; color: #555; line-height: 1.5;
    margin-bottom: 10px; max-width: 60%;
  }
  .laptop-banner-content .lp-btn {
    display: inline-block;
    background: #f5b800;
    padding: 5px 12px;
    border-radius: 2px;
    font-size: 7px;
    font-weight: 700;
    color: #111;
  }
  .laptop-banner-img {
    width: 35%;
    aspect-ratio: 1;
    background: linear-gradient(135deg, #6b6b6b, #2c2c2c);
    border-radius: 4px;
    border: 6px solid #fff;
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
    margin-left: auto;
  }

  .laptop-keyboard {
    background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);
    height: 14px;
    border-radius: 0 0 12px 12px;
    margin: -2px 0 0;
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.05),
      0 4px 8px rgba(0,0,0,0.2);
    position: relative;
  }
  .laptop-keyboard::after {
    content: "";
    position: absolute;
    top: 0; left: 50%;
    transform: translateX(-50%);
    width: 80px; height: 4px;
    background: #444;
    border-radius: 0 0 4px 4px;
  }
  .laptop-base {
    background: #d4d4d4;
    height: 8px;
    width: 92%;
    margin: 0 auto;
    border-radius: 0 0 50% 50% / 0 0 100% 100%;
    box-shadow: 0 30px 50px rgba(0,0,0,0.15);
  }

  .laptop-arrows {
    display: flex; justify-content: space-between;
    max-width: 1200px; margin: 0 auto;
    padding: 0;
    margin-top: -350px;
    position: relative;
    pointer-events: none;
  }
  .laptop-arrow {
    background: none;
    border: none;
    font-size: 28px;
    cursor: pointer;
    color: #111;
    padding: 12px;
    pointer-events: auto;
    transition: transform 0.2s ease;
  }
  .laptop-arrow:hover { transform: scale(1.2); }

  /* ---------- RELATED PROJECTS ---------- */
  .related-section {
    padding: 100px 60px 80px;
    background: #fff;
  }
  .related-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
  }
  .related-heading {
    font-size: 56px;
    font-weight: 700;
    color: #111;
    letter-spacing: -1px;
  }
  .more-projects-link {
    text-decoration: none;
    color: #111;
    font-size: 14px;
    letter-spacing: 2px;
    font-weight: 600;
    transition: color 0.2s ease;
  }
  .more-projects-link:hover { color: var(--accent); }

  .related-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }
  .related-card { display: flex; flex-direction: column; }
  .related-card-image {
    display: block; width: 100%; aspect-ratio: 4 / 3;
    border-radius: 18px; overflow: hidden;
    margin-bottom: 24px; text-decoration: none;
    transition: transform 0.4s ease;
    position: relative;
  }
  .related-card-image:hover { transform: translateY(-4px); }
  .related-card-title {
    font-size: 28px; font-weight: 700; color: #111;
    margin-bottom: 10px; letter-spacing: -0.5px;
  }
  .related-card-meta { font-size: 16px; color: #444; }
  .related-card-link {
    display: inline-flex; align-items: center; gap: 12px;
    text-decoration: none; color: #111; font-size: 16px; font-weight: 500;
  }
  .related-card-link span.line {
    display: inline-block; width: 50px; height: 1.5px;
    background: #111; transition: width 0.25s ease;
  }
  .related-card-link:hover span.line { width: 80px; }

  /* card mock styles (reuse) */
  .work-mock { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
  .mock-cover {
    width: 38%; height: 70%;
    background: linear-gradient(180deg, #2a2f3a 0%, #1a1f28 100%);
    border-radius: 4px; box-shadow: 0 30px 50px rgba(0,0,0,0.35);
    transform: rotate(-4deg); display: flex; flex-direction: column;
    justify-content: space-between; padding: 18px 14px; color: #fff;
  }
  .mock-cover .mock-label { font-family: 'Georgia', serif; font-style: italic; font-size: 16px; line-height: 1.1; }
  .mock-cover .mock-year { font-size: 13px; text-align: right; opacity: 0.85; }
  .mock-spread { width: 70%; height: 55%; display: flex; transform: rotate(-3deg); box-shadow: 0 30px 50px rgba(0,0,0,0.3); }
  .spread-page { flex: 1; background: #fafafa; position: relative; }
  .spread-page.left { border-right: 1px solid #ddd; background: linear-gradient(180deg, transparent 8%, #ddd 8%, #ddd 9%, transparent 9%) 0 6px / 100% 14px repeat-y, #fafafa; }
  .spread-page.right { background: radial-gradient(circle at 30% 40%, #e8a87c 0 18%, transparent 18%), linear-gradient(180deg, transparent 70%, #ddd 70%, #ddd 72%, transparent 72%) 0 0 / 100% 12px repeat-y, #fafafa; }
  .mock-stack { position: absolute; width: 32%; height: 60%; border-radius: 3px; box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
  .stack-back { background: linear-gradient(180deg, #6b1a1a 0%, #4a0f0f 100%); transform: rotate(-12deg) translate(-30%, -8%); }
  .stack-front { background: linear-gradient(180deg, #8a2424 0%, #5e1414 100%); transform: rotate(8deg) translate(20%, 5%); display: flex; align-items: flex-end; padding: 14px; }
  .mock-stack-label { color: #fff; font-size: 13px; font-weight: 700; line-height: 1.1; }

  /* ---------- TESTIMONIALS ---------- */
  .testimonials {
    background: #f3f3f3;
    padding: 100px 60px;
  }
  .testimonials-inner {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 80px;
    align-items: center;
  }
  .testimonials-eyebrow {
    font-size: 13px; font-weight: 600; letter-spacing: 2px;
    color: #111; margin-bottom: 18px;
  }
  .testimonials-heading {
    font-size: 56px; font-weight: 700; color: #111;
    letter-spacing: -1px; line-height: 1.1;
  }
  .testimonial-slide {
    display: none;
  }
  .testimonial-slide.active { display: block; animation: fadeIn 0.5s ease; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

  .testimonial-quote {
    font-size: 19px;
    line-height: 1.6;
    color: #1a1a1a;
    margin-bottom: 28px;
  }
  .testimonial-stars {
    color: #f5b800;
    font-size: 22px;
    letter-spacing: 2px;
    margin-bottom: 14px;
  }
  .testimonial-author {
    font-size: 18px; font-weight: 700; color: #111;
  }
  .testimonial-dots {
    display: flex; gap: 10px; margin-top: 36px;
  }
  .testimonial-dots .dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: #ccc; cursor: pointer;
    transition: background 0.2s ease, transform 0.2s ease;
  }
  .testimonial-dots .dot.active { background: #111; transform: scale(1.3); }

  /* ---------- START CTA ---------- */
  .start-cta {
    background: var(--accent);
    padding: 80px 60px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 60px;
    flex-wrap: wrap;
  }
  .start-cta-text { max-width: 700px; }
  .start-cta h2 {
    font-size: 56px; font-weight: 700; color: #fff;
    letter-spacing: -1px; line-height: 1.05; margin-bottom: 24px;
  }
  .start-cta p {
    font-size: 17px; line-height: 1.7;
  }
  .start-cta .meeting-btn {
    background: #111; color: #fff;
    padding: 18px 40px; border-radius: 8px;
    text-decoration: none; font-weight: 600; font-size: 16px;
    transition: background 0.2s ease, transform 0.2s ease;
  }
  .start-cta .meeting-btn:hover { background: #000; transform: translateY(-2px); }

  /* ---------- FLOATING NEXT PROJECT CARD ---------- */
  .next-project-float {
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    box-shadow: 0 -4px 24px rgba(0,0,0,0.08);
    padding: 22px 32px;
    border-radius: 0 12px 0 0;
    z-index: 50;
    min-width: 320px;
    transition: transform 0.3s ease;
  }
  .next-project-float .np-label {
    font-size: 14px;
    font-weight: 600;
    color: #111;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
  }
  .next-project-float .np-arrows {
    display: flex; gap: 12px;
  }
  .next-project-float .np-arrows button {
    background: none; border: none; cursor: pointer;
    font-size: 20px; color: #111;
    transition: transform 0.2s ease;
  }
  .next-project-float .np-arrows button:hover { transform: translateX(2px); }
  .next-project-float .np-arrows button.prev:hover { transform: translateX(-2px); }
  .next-project-float .np-title {
    font-size: 16px; font-weight: 700; color: #111;
    line-height: 1.3;
  }
  .next-project-float .np-title a {
    color: inherit; text-decoration: none;
  }

  /* ---------- WHATSAPP FLOAT ---------- */

  /* ---------- RESPONSIVE ---------- */
  @media (max-width: 1024px) {
    .project-hero { padding: 40px 30px 60px; }
    .project-title { font-size: 44px; }
    .project-body { grid-template-columns: 1fr; gap: 50px; padding: 60px 30px; }
    .our-task { grid-template-columns: 1fr; gap: 30px; padding: 40px 30px 80px; }
    .task-heading, .related-heading, .testimonials-heading, .start-cta h2 { font-size: 40px; }
    .showcase-grid { grid-template-columns: 1fr; }
    .laptop-section, .related-section, .testimonials, .start-cta { padding: 60px 30px; }
    .testimonials-inner { grid-template-columns: 1fr; gap: 40px; }
    .related-grid { grid-template-columns: repeat(2, 1fr); }
    .laptop-arrows { margin-top: -250px; }
  }
  @media (max-width: 768px) {
    .project-title { font-size: 32px; }
    .project-meta { grid-template-columns: 1fr; }
    .related-grid { grid-template-columns: 1fr; }
    .next-project-float { min-width: auto; padding: 16px 20px; }
    .next-project-float .np-title { font-size: 13px; }
    .start-cta { flex-direction: column; align-items: flex-start; }
    .laptop-arrows { margin-top: -180px; }
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
     LAPTOP SECTION — FIXED
     ====================================================== */
  .laptop-section {
    background: #f3f3f3;
    padding: 100px 80px 120px;
    position: relative;
    overflow: hidden;
  }
  .laptop-frame {
    max-width: 760px;
    width: 100%;
    margin: 0 auto;
    perspective: 1400px;
  }
  .laptop {
    position: relative;
    transform: rotateY(-6deg) rotateX(4deg);
    transform-style: preserve-3d;
    margin: 0 auto;
    width: 100%;
    max-width: 760px;
  }
  .laptop-arrows {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    margin: 0;
    pointer-events: none;
    z-index: 5;
  }
  .laptop-arrow {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid #e0e0e0;
    color: #111;
    font-size: 22px;
    line-height: 1;
    cursor: pointer;
    pointer-events: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
    transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
    padding: 0;
  }
  .laptop-arrow:hover {
    background: #111;
    color: #fff;
    transform: scale(1.08);
  }
  .laptop-arrow.prev:hover { transform: scale(1.08) translateX(-2px); }
  .laptop-arrow.next:hover { transform: scale(1.08) translateX(2px); }

  @media (max-width: 900px) {
    .laptop-section { padding: 70px 24px 90px; }
    .laptop { transform: rotateY(-4deg) rotateX(2deg); }
    .laptop-arrows { padding: 0 8px; }
    .laptop-arrow { width: 44px; height: 44px; font-size: 20px; }
  }
  @media (max-width: 600px) {
    .laptop-section { padding: 50px 18px 70px; }
    .laptop { transform: none; }
    .laptop-arrows { padding: 0 4px; }
    .laptop-arrow { width: 38px; height: 38px; font-size: 18px; }
  }


  /* ======================================================
     CHALLENGES SECTION
     ====================================================== */
  .challenges-section {
    background: #fff;
    padding: 100px 60px;
  }
  .challenges-inner {
    display: grid;
    grid-template-columns: 1fr 2.2fr;
    gap: 80px;
    align-items: start;
  }
  .challenges-heading {
    font-size: 56px;
    font-weight: 700;
    color: #111;
    letter-spacing: -1px;
    line-height: 1.05;
  }
  .challenges-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  .challenge-card {
    background: #f0f0f0;
    border-radius: 14px;
    padding: 32px 28px;
    transition: transform 0.25s ease, background 0.25s ease;
  }
  .challenge-card:hover {
    transform: translateY(-4px);
    background: #e8e8e8;
  }
  .challenge-card h3 {
    font-size: 20px;
    font-weight: 700;
    color: #111;
    line-height: 1.3;
    letter-spacing: -0.3px;
    margin-bottom: 16px;
  }
  .challenge-card p {
    font-size: 15px;
    line-height: 1.6;
    color: #444;
  }
  .challenge-card.challenge-cta {
    background: #0d0d0d;
    color: #fff;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100%;
  }
  .challenge-card.challenge-cta:hover {
    background: #000;
    transform: translateY(-4px);
  }
  .challenge-card.challenge-cta h3 {
    color: #fff;
    font-size: 26px;
    margin-bottom: 24px;
    letter-spacing: -0.5px;
  }
  .challenge-cta-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
  }
  .challenge-cta-link .arrow {
    display: inline-block;
    transition: transform 0.25s ease;
  }
  .challenge-card.challenge-cta:hover .arrow {
    transform: translateX(4px);
  }

  /* ======================================================
     RESULTS / METRICS SECTION
     ====================================================== */
  .results-section {
    background: #f3f3f3;
    padding: 100px 60px;
  }
  .results-inner {
    max-width: 1300px;
    margin: 0 auto;
  }
  .results-heading {
    font-size: 56px;
    font-weight: 700;
    color: #111;
    letter-spacing: -1px;
    line-height: 1.05;
    margin-bottom: 60px;
  }
  .results-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 28px;
  }
  .result-card {
    background: #fff;
    border-radius: 16px;
    padding: 40px 32px;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .result-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 30px rgba(0,0,0,0.08);
  }
  .result-number {
    font-size: 56px;
    font-weight: 800;
    color: var(--accent);
    line-height: 1;
    letter-spacing: -2px;
    margin-bottom: 14px;
  }
  .result-number .suffix {
    font-size: 36px;
    font-weight: 700;
    margin-left: 2px;
  }
  .result-label {
    font-size: 16px;
    color: #333;
    font-weight: 500;
  }

  /* RESPONSIVE */
  @media (max-width: 1100px) {
    .challenges-grid { grid-template-columns: repeat(2, 1fr); }
    .results-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 900px) {
    .challenges-section { padding: 70px 24px; }
    .challenges-inner { grid-template-columns: 1fr; gap: 32px; }
    .challenges-heading { font-size: 38px !important; }
    .challenge-card { padding: 26px 22px; }
    .challenge-card h3 { font-size: 18px; }
    .challenge-card.challenge-cta h3 { font-size: 22px; }

    .results-section { padding: 70px 24px; }
    .results-heading { font-size: 38px !important; margin-bottom: 40px; }
    .result-card { padding: 32px 26px; }
    .result-number { font-size: 44px; }
    .result-number .suffix { font-size: 28px; }
  }
  @media (max-width: 600px) {
    .challenges-section { padding: 50px 18px; }
    .challenges-inner { gap: 24px; }
    .challenges-heading { font-size: 30px !important; }
    .challenges-grid { grid-template-columns: 1fr; gap: 16px; }
    .challenge-card { padding: 24px 20px; border-radius: 12px; }

    .results-section { padding: 50px 18px; }
    .results-heading { font-size: 30px !important; margin-bottom: 32px; }
    .results-grid { grid-template-columns: 1fr 1fr; gap: 14px; }
    .result-card { padding: 26px 20px; border-radius: 12px; }
    .result-number { font-size: 36px; letter-spacing: -1px; }
    .result-number .suffix { font-size: 22px; }
    .result-label { font-size: 14px; }
  }


      `}} />

{/* NAVBAR */}


{/* PROJECT HERO */}
<section className="project-hero hero-gradient theme-blue">
  <button className="back-btn" onClick={() => { history.back() }}>←</button>
  <p className="project-category">Website</p>
  <h1 className="project-title">Sample Project — Website Redevelopment</h1>
</section>

{/* BREADCRUMB */}
<div className="breadcrumb">
  <a href="/">Home</a>
  <span className="sep">›</span>
  <a href="/works">Portfolio</a>
  <span className="sep">›</span>
  <span className="current">Sample Project — Website Redevelopment</span>
</div>

{/* PROJECT BODY */}
<section className="project-body">
  <div className="project-description">
    <p>
      This is placeholder copy describing the project. Use this section to introduce the
      client, their industry, the challenge they came to you with, and the broad context
      of the engagement. Keep it focused on what matters: who they are, what they do,
      and why this work mattered to their business. Two or three paragraphs is usually
      the right length for a project intro.
    </p>
    <br/>
    <p>
      A second paragraph can dive deeper — past milestones, the audience the brand is
      built for, or the key constraints that shaped the direction. Replace this entire
      block with your real project description per case study.
    </p>
  </div>

  <div className="project-meta">
    <div className="meta-item">
      <div className="meta-label">Platform</div>
      <div className="meta-value">HTML / CSS / JavaScript</div>
    </div>
    <div className="meta-item">
      <div className="meta-label">Client</div>
      <div className="meta-value">Sample Client Pvt. Ltd.</div>
    </div>
    <div className="meta-item">
      <div className="meta-label">Strategy</div>
      <div className="meta-value">UI/UX, Web Development</div>
    </div>
    <div className="meta-item">
      <a href="#" className="visit-btn">Visit Website</a>
    </div>
  </div>
</section>

{/* OUR TASK */}
<section className="our-task">
  <h2 className="task-heading">Our Task</h2>
  <div className="task-text">
    <p>
      Describe the brief here — what the client asked for, the problem statement, and
      the outcome they were aiming for. This is also the right place to explain the
      direction your team took, the design or technical approach, and any tradeoffs
      you navigated along the way.
    </p>
    <br/>
    <p>
      Replace this block with your real "Our Task" content. Keep the language clear
      and concrete: what was the goal, what did you build, and what was the impact.
    </p>
  </div>
</section>

{/* IMAGE SHOWCASE */}
<section className="showcase-grid">
  <div className="showcase-tile logo-tile">
    <div className="placeholder-logo">
      <div className="logo-mark">L</div>
      <div className="logo-text">
        Sample
        <small>Logo</small>
      </div>
    </div>
  </div>
  <div className="showcase-tile monitor-tile">
    <div className="monitor-mockup">
      <div className="monitor-screen">
        <div className="monitor-nav">
          <span>Home</span><span>About</span><span>Services</span><span>Contact</span>
        </div>
        <div className="monitor-banner">
          <div className="monitor-banner-text">Headline goes<br/>right here</div>
          <div className="monitor-banner-shape"></div>
        </div>
        <div className="monitor-content">
          <div className="col">Card</div>
          <div className="col">Card</div>
          <div className="col">Card</div>
        </div>
      </div>
      <div className="monitor-stand"></div>
      <div className="monitor-base"></div>
    </div>
  </div>
</section>

{/* LAPTOP CAROUSEL */}
<section className="laptop-section">
  <div className="laptop-frame">
    <div className="laptop">
      <div className="laptop-screen">
        <div className="laptop-display">
          <div className="laptop-nav">
            <span>About</span><span>Services</span><span>Solutions</span><span>Contact</span>
            <span style={{background: '#f5b800', padding: '2px 8px', borderRadius: '2px', color: '#111', fontWeight: '700'}}>Login</span>
          </div>
          <div className="laptop-banner">
            <div className="laptop-banner-content">
              <h4>Sample Headline<br/>Hero Section</h4>
              <p className="lp-text">Supporting copy for the hero section of the project mockup goes right here.</p>
              <span className="lp-btn">Know More</span>
            </div>
            <div className="laptop-banner-img"></div>
          </div>
        </div>
      </div>
      <div className="laptop-keyboard"></div>
      <div className="laptop-base"></div>
    </div>
  </div>
  <div className="laptop-arrows">
    <button className="laptop-arrow prev" aria-label="Previous">←</button>
    <button className="laptop-arrow next" aria-label="Next">→</button>
  </div>
</section>


{/* CHALLENGES SECTION */}
<section className="challenges-section">
  <div className="challenges-inner">
    <h2 className="challenges-heading">Challenges</h2>
    <div className="challenges-grid">
      <div className="challenge-card">
        <h3>Sample challenge title one</h3>
        <p>Brief description of the first challenge encountered during the project. Replace with your real content.</p>
      </div>
      <div className="challenge-card">
        <h3>Sample challenge title two</h3>
        <p>Brief description of the second challenge encountered during the project. Keep it concise and concrete.</p>
      </div>
      <div className="challenge-card">
        <h3>Sample challenge title three</h3>
        <p>Brief description of the third challenge. Two to three lines per card works best for visual balance.</p>
      </div>
      <div className="challenge-card">
        <h3>Sample challenge title four</h3>
        <p>Brief description of the fourth challenge. Replace each card with project-specific content.</p>
      </div>
      <div className="challenge-card">
        <h3>Sample challenge title five</h3>
        <p>Brief description of the fifth challenge. You can add or remove cards as the project requires.</p>
      </div>
      <a href="#" className="challenge-card challenge-cta">
        <h3>Let's Design<br/>Your Next Report</h3>
        <span className="challenge-cta-link">Get A Quote <span className="arrow">→</span></span>
      </a>
    </div>
  </div>
</section>

{/* RESULTS / METRICS SECTION (optional — great for marketing projects) */}
<section className="results-section">
  <div className="results-inner">
    <h2 className="results-heading">Results</h2>
    <div className="results-grid">
      <div className="result-card">
        <div className="result-number">+250<span className="suffix">%</span></div>
        <div className="result-label">Engagement growth</div>
      </div>
      <div className="result-card">
        <div className="result-number">12<span className="suffix">M</span></div>
        <div className="result-label">Total impressions</div>
      </div>
      <div className="result-card">
        <div className="result-number">+45<span className="suffix">K</span></div>
        <div className="result-label">New followers</div>
      </div>
      <div className="result-card">
        <div className="result-number">8<span className="suffix">x</span></div>
        <div className="result-label">ROI on ad spend</div>
      </div>
    </div>
  </div>
</section>


{/* RELATED PROJECTS */}
<section className="related-section">
  <div className="related-header">
    <h2 className="related-heading">Related Projects</h2>
    <a href="/works" className="more-projects-link">MORE PROJECTS</a>
  </div>
  <div className="related-grid">
    <article className="related-card">
      <a href="/projects/sample-project" className="related-card-image" style={{background: 'linear-gradient(135deg, #d9756c 0%, #c44a3f 100%)'}}>
        <div className="work-mock"><div className="mock-cover">
          <div className="mock-label">Brand<br/>Story</div>
          <div className="mock-year">2025</div>
        </div></div>
      </a>
      <h3 className="related-card-title">Project One</h3>
      <p className="related-card-meta">Brand Identity, Campaign</p>
    </article>
    <article className="related-card">
      <a href="/projects/sample-project" className="related-card-image" style={{background: '#d6443a'}}>
        <div className="work-mock"><div className="mock-spread">
          <div className="spread-page left"></div>
          <div className="spread-page right"></div>
        </div></div>
      </a>
      <h3 className="related-card-title">Project Two</h3>
      <a href="/projects/sample-project" className="related-card-link">Show project <span className="line"></span></a>
    </article>
    <article className="related-card">
      <a href="/projects/sample-project" className="related-card-image" style={{background: 'linear-gradient(135deg, #1a1410 0%, #c97a3c 100%)'}}>
        <div className="work-mock">
          <div className="mock-stack stack-back"></div>
          <div className="mock-stack stack-front"><div className="mock-stack-label">Annual<br/>Report</div></div>
        </div>
      </a>
      <h3 className="related-card-title">Project Three</h3>
      <p className="related-card-meta">Digital Report, Strategy</p>
    </article>
  </div>
</section>

{/* TESTIMONIALS */}
<section className="testimonials">
  <div className="testimonials-inner">
    <div>
      <p className="testimonials-eyebrow">TESTIMONIALS</p>
      <h2 className="testimonials-heading">What our clients say about us.</h2>
    </div>
    <div className="testimonials-content">
      <div className="testimonial-slide active">
        <p className="testimonial-quote">
          TheSocialVerse delivered above expectations. Their team understood our brief
          quickly, brought sharp creative thinking to the table, and shipped work that
          our audience genuinely connected with. Easy to work with and a pleasure to
          collaborate with end-to-end.
        </p>
        <div className="testimonial-stars">★ ★ ★ ★ ★</div>
        <div className="testimonial-author">Sample Client Name</div>
      </div>
      <div className="testimonial-slide">
        <p className="testimonial-quote">
          From strategy to execution, the team handled every detail with care. Our
          launch landed exactly the way we hoped — on time, on brand, and on impact.
          Highly recommend if you want a partner that actually thinks alongside you.
        </p>
        <div className="testimonial-stars">★ ★ ★ ★ ★</div>
        <div className="testimonial-author">Another Sample Client</div>
      </div>
      <div className="testimonial-dots">
        <span className="dot active" data-idx="0"></span>
        <span className="dot" data-idx="1"></span>
      </div>
    </div>
  </div>
</section>

{/* START YOUR PROJECT CTA */}
<section className="start-cta">
  <div className="start-cta-text">
    <h2>Start Your Project</h2>
    <p>If your website isn't performing well or just doesn't properly represent your business, talk to us.</p>
  </div>
  <a href="#" className="meeting-btn">Set a Meeting</a>
</section>

{/* FLOATING NEXT PROJECT */}
<div className="next-project-float" id="nextProjectFloat">
  <div className="np-label">
    <span>Next Project</span>
    <div className="np-arrows">
      <button className="prev" aria-label="Previous">←</button>
      <button className="next" aria-label="Next">→</button>
    </div>
  </div>
  <div className="np-title">
    <a href="/projects/sample-project">Sample Next Project — Website Redevelopment</a>
  </div>
</div>

{/* ==== FOOTER START ==== */}

{/* ==== FOOTER END ==== */}


{/* WHATSAPP FLOAT */}
    </>
  );
}