"use client";

import { useEffect } from "react";

export default function ServicesPage() {
  useEffect(() => {
    // ---------- TESTIMONIALS ----------
      const testiSlides = document.querySelectorAll('.testi-slide');
      const testiCurrent = document.getElementById('testiCurrent');
      const testiTotal = document.getElementById('testiTotal');
      let testiIdx = 0;
      if (testiTotal) testiTotal.textContent = testiSlides.length;

      function showTesti(idx) {
        testiSlides.forEach(s => s.classList.remove('active'));
        testiSlides[idx].classList.add('active');
        if (testiCurrent) testiCurrent.textContent = idx + 1;
        testiIdx = idx;
      }
      document.getElementById('testiPrev')?.addEventListener('click', () => {
        showTesti((testiIdx - 1 + testiSlides.length) % testiSlides.length);
      });
      document.getElementById('testiNext')?.addEventListener('click', () => {
        showTesti((testiIdx + 1) % testiSlides.length);
      });

      document.querySelectorAll('.testi-tab').forEach(tab => {
        tab.addEventListener('click', () => {
          document.querySelectorAll('.testi-tab').forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          showTesti(0);
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
  .services-hero {
    margin-top: 90px;
    width: 100%;
    min-height: 460px;
    background: transparent;
    position: relative;
    padding: 60px 60px 80px;
    color: #fff;
    overflow: hidden;
  }
  
  .back-btn {
    background: none; border: none; color: #fff;
    font-size: 24px; cursor: pointer; margin-bottom: 80px;
    padding: 8px; transition: transform 0.2s ease;
  }
  .back-btn:hover { transform: translateX(-4px); }
  .hero-title {
    font-size: 80px; font-weight: 700; color: #fff;
    line-height: 1.05; letter-spacing: -2px;
    position: relative; z-index: 2; margin-bottom: 28px;
  }
  .hero-tagline {
    font-size: 22px; color: #fff; opacity: 0.95;
    font-weight: 400; position: relative; z-index: 2;
  }


  /* ---------- CAPABILITIES INTRO ---------- */
  .capabilities-intro {
    background: #f5f5f5;
    padding: 100px 60px 70px;
  }
  .capabilities-inner {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 80px;
    align-items: start;
  }
  .capabilities-eyebrow {
    font-size: 13px; font-weight: 600; letter-spacing: 2px;
    color: #111; margin-bottom: 18px;
  }
  .capabilities-heading {
    font-size: 64px; font-weight: 700; color: #111;
    letter-spacing: -1.5px; line-height: 1.05;
  }
  .capabilities-desc {
    font-size: 19px; line-height: 1.7; color: #1a1a1a;
  }
  .capabilities-desc strong { font-weight: 700; }

  /* ---------- SERVICES GRID ---------- */
  .services-listing {
    background: #f5f5f5;
    padding: 0 60px 100px;
  }
  .services-grid-large {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
  .service-block {
    background: #fff;
    border-radius: 16px;
    border: 1px dashed #d0d0d0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .service-block:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 30px rgba(0,0,0,0.06);
  }
  .service-block-head {
    padding: 36px 28px 30px;
    text-align: center;
    border-bottom: 1px dashed #d0d0d0;
  }
  .service-icon {
    width: 90px; height: 90px;
    border-radius: 50%;
    background: #fff3d6;
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 24px;
  }
  .service-icon svg { width: 50px; height: 50px; }
  .service-icon-name {
    font-size: 24px; font-weight: 700; color: #111;
    letter-spacing: -0.4px; line-height: 1.2;
  }
  .service-block-body {
    padding: 30px 28px 32px;
    display: flex; flex-direction: column; flex: 1;
  }
  .service-block-desc {
    font-size: 16px; line-height: 1.55; color: #1a1a1a;
    margin-bottom: 26px;
  }
  .service-block-list {
    list-style: none; padding: 0; margin: 0; flex: 1;
  }
  .service-block-list li {
    position: relative; padding-left: 18px;
    font-size: 15px; line-height: 1.6; color: #1a1a1a;
    margin-bottom: 12px;
  }
  .service-block-list li::before {
    content: ""; position: absolute;
    left: 0; top: 9px;
    width: 5px; height: 5px;
    background: #111; border-radius: 50%;
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
  .clients-title-block .section-eyebrow {
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
    display: grid;
    grid-template-columns: repeat(6, 1fr);
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
  }
  .client-logo:hover {
    transform: translateY(-3px);
    border-color: #d0d0d0;
  }
  .client-logo span {
    font-size: 22px; font-weight: 700;
    color: #6a6a6a; letter-spacing: 0.5px;
    text-align: center;
  }

  /* ---------- TESTIMONIALS ---------- */
  .testimonials {
    background: #f5f5f5;
    padding: 100px 60px;
    text-align: center;
  }
  .testimonials-heading {
    font-size: 56px; font-weight: 700; color: #111;
    letter-spacing: -1px; line-height: 1.1;
    margin-bottom: 36px;
  }
  .testi-tabs {
    display: flex; justify-content: center; gap: 32px;
    flex-wrap: wrap; margin-bottom: 48px;
    border-bottom: 1px solid #d8d8d8;
  }
  .testi-tab {
    background: none; border: none; cursor: pointer;
    font-family: inherit; font-size: 18px; font-weight: 500;
    color: #555; padding: 12px 4px;
    border-bottom: 3px solid transparent;
    transition: color 0.2s ease, border-color 0.2s ease;
    margin-bottom: -1px;
  }
  .testi-tab:hover { color: #111; }
  .testi-tab.active { color: #111; font-weight: 700; border-bottom-color: #111; }

  .testi-carousel {
    position: relative;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 60px;
  }
  .testi-arrow {
    position: absolute;
    top: 50%; transform: translateY(-50%);
    background: none; border: none; cursor: pointer;
    font-size: 28px; color: #111;
    transition: color 0.2s ease;
  }
  .testi-arrow:hover { color: var(--accent); }
  .testi-arrow.prev { left: 0; }
  .testi-arrow.next { right: 0; }

  .testi-slide { display: none; animation: fadeIn 0.4s ease; }
  .testi-slide.active { display: block; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

  .testi-author-pill {
    display: inline-block;
    background: #e6e6e6;
    padding: 8px 18px;
    border-radius: 6px;
    font-size: 15px;
    font-weight: 500;
    color: #111;
    margin-bottom: 24px;
  }
  .testi-quote {
    font-size: 19px; line-height: 1.7; color: #1a1a1a;
    max-width: 900px; margin: 0 auto;
  }

  .testi-pagination {
    display: flex; justify-content: center; align-items: center;
    gap: 16px; margin-top: 40px;
    color: #555; font-size: 16px; font-weight: 500;
  }
  .testi-pagination .testi-line {
    width: 40px; height: 1.5px; background: #555;
  }
  .testi-pagination .num.active { color: #111; font-weight: 700; }

  /* ---------- QUOTE FORM ---------- */
  .quote-form-section {
    background: #fff;
    padding: 100px 60px;
  }
  .quote-eyebrow {
    font-size: 13px; font-weight: 600; letter-spacing: 2px;
    color: #111; margin-bottom: 18px;
  }
  .quote-heading {
    font-size: 56px; font-weight: 700; color: var(--accent);
    letter-spacing: -1px; line-height: 1.05;
    margin-bottom: 60px;
  }
  .quote-form { max-width: 100%; }
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
    margin-bottom: 28px;
  }
  .form-field { display: flex; flex-direction: column; }
  .form-field label {
    font-size: 16px; font-weight: 700; color: #111;
    margin-bottom: 10px;
  }
  .form-field label .req { color: var(--accent); }
  .form-field input,
  .form-field textarea {
    background: #f3f3f3;
    border: 1px solid transparent;
    border-radius: 6px;
    padding: 16px 18px;
    font-size: 16px;
    font-family: inherit;
    color: #111;
    transition: border-color 0.2s ease, background 0.2s ease;
    width: 100%;
  }
  .form-field input::placeholder,
  .form-field textarea::placeholder { color: #888; }
  .form-field input:focus,
  .form-field textarea:focus {
    outline: none;
    border-color: #111;
    background: #fff;
  }
  .form-field textarea { resize: vertical; min-height: 140px; }

  .name-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .name-row input {
    background: #f3f3f3; border: 1px solid transparent;
    border-radius: 6px; padding: 16px 18px;
    font-size: 16px; font-family: inherit; color: #111;
  }
  .name-row input:focus { outline: none; border-color: #111; background: #fff; }

  .checkbox-group { margin-top: 20px; margin-bottom: 36px; }
  .checkbox-group .group-label {
    font-size: 16px; font-weight: 700; color: #111;
    margin-bottom: 18px;
  }
  .checkbox-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px 32px;
  }
  .check-item {
    display: flex; align-items: center; gap: 10px;
    cursor: pointer; font-size: 16px; color: #1a1a1a;
    user-select: none;
  }
  .check-item input { display: none; }
  .check-item .box {
    width: 20px; height: 20px;
    border: 1.5px solid #888;
    border-radius: 4px;
    display: inline-flex; align-items: center; justify-content: center;
    transition: background 0.2s ease, border-color 0.2s ease;
    flex-shrink: 0;
  }
  .check-item input:checked + .box {
    background: #111; border-color: #111;
  }
  .check-item input:checked + .box::after {
    content: ""; width: 5px; height: 9px;
    border: solid #fff; border-width: 0 2px 2px 0;
    transform: rotate(45deg) translate(-1px, -1px);
  }

  .submit-btn {
    background: #0d0d0d; color: #fff; border: none;
    padding: 16px 36px; font-size: 16px; font-weight: 600;
    border-radius: 6px; cursor: pointer; font-family: inherit;
    transition: background 0.2s ease, transform 0.2s ease;
  }
  .submit-btn:hover { background: #000; transform: translateY(-2px); }

  /* ---------- WHATSAPP FLOAT ---------- */
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
    .hero-title { font-size: 64px; }
    .capabilities-heading,
    .clients-title-block h2,
    .testimonials-heading,
    .quote-heading { font-size: 48px !important; }
    .services-grid-large { grid-template-columns: repeat(3, 1fr); }
    .clients-grid { grid-template-columns: repeat(5, 1fr); }
  }

  @media (max-width: 900px) {


    .services-hero { margin-top: 80px; padding: 40px 24px 60px; min-height: 380px; }
    .back-btn { margin-bottom: 50px; }
    .hero-title { font-size: 48px; }
    .hero-tagline { font-size: 18px; }


    .capabilities-intro { padding: 70px 24px 50px; }
    .capabilities-inner { grid-template-columns: 1fr; gap: 24px; }
    .capabilities-heading,
    .clients-title-block h2,
    .testimonials-heading,
    .quote-heading { font-size: 38px !important; }

    .services-listing { padding: 0 24px 70px; }
    .services-grid-large { grid-template-columns: repeat(2, 1fr); }
    .service-block-head { padding: 30px 22px 24px; }
    .service-block-body { padding: 24px 22px 28px; }
    .service-icon { width: 76px; height: 76px; }
    .service-icon svg { width: 42px; height: 42px; }
    .service-icon-name { font-size: 20px; }

    .clients-section { padding: 70px 24px; }
    .clients-header { flex-direction: column; align-items: flex-start; gap: 18px; margin-bottom: 36px; }
    .clients-grid { grid-template-columns: repeat(4, 1fr); gap: 16px; }
    .client-logo span { font-size: 18px; }

    .testimonials { padding: 70px 24px; }
    .testi-tabs { gap: 18px; margin-bottom: 36px; }
    .testi-tab { font-size: 15px; }
    .testi-carousel { padding: 0 36px; }
    .testi-arrow { font-size: 24px; }
    .testi-quote { font-size: 17px; }

    .quote-form-section { padding: 70px 24px; }
    .form-row { grid-template-columns: 1fr; gap: 22px; margin-bottom: 22px; }
    .checkbox-grid { grid-template-columns: repeat(2, 1fr); gap: 12px 18px; }

  }

  @media (max-width: 600px) {

    .services-hero { margin-top: 72px; padding: 24px 18px 40px; min-height: 320px; }
    .back-btn { margin-bottom: 36px; font-size: 22px; }
    .hero-title { font-size: 38px; letter-spacing: -1px; }
    .hero-tagline { font-size: 16px; }


    .capabilities-intro { padding: 50px 18px 40px; }
    .capabilities-heading,
    .clients-title-block h2,
    .testimonials-heading,
    .quote-heading { font-size: 30px !important; letter-spacing: -0.5px; }
    .capabilities-desc { font-size: 16px; }

    .services-listing { padding: 0 18px 60px; }
    .services-grid-large { grid-template-columns: 1fr; gap: 18px; }

    .clients-section { padding: 50px 18px; }
    .clients-grid { grid-template-columns: repeat(3, 1fr); gap: 12px; }
    .client-logo { padding: 14px; }
    .client-logo span { font-size: 15px; }

    .testimonials { padding: 50px 18px; }
    .testi-tabs {
      flex-wrap: nowrap; overflow-x: auto;
      justify-content: flex-start;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }
    .testi-tabs::-webkit-scrollbar { display: none; }
    .testi-tab { flex-shrink: 0; font-size: 14px; padding: 10px 4px; }
    .testi-carousel { padding: 0 30px; }
    .testi-arrow { font-size: 20px; }
    .testi-quote { font-size: 15px; }

    .quote-form-section { padding: 50px 18px; }
    .name-row { grid-template-columns: 1fr; gap: 12px; }
    .checkbox-grid { grid-template-columns: 1fr; }
    .submit-btn { width: 100%; padding: 18px 32px; }


  }

  @media (max-width: 380px) {
    .hero-title { font-size: 32px; }
    .capabilities-heading,
    .clients-title-block h2,
    .testimonials-heading,
    .quote-heading { font-size: 26px !important; }
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
<section className="services-hero hero-gradient theme-purple">
  <button className="back-btn" onClick={() => { history.back() }}>←</button>
  <h1 className="hero-title">Services</h1>
  <p className="hero-tagline">Customer Satisfaction is our motto.</p>
</section>

{/* BREADCRUMB */}
<div className="breadcrumb">
  <a href="/">Home</a>
  <span>›</span>
  <span className="current">Services</span>
</div>

{/* CAPABILITIES INTRO */}
<section className="capabilities-intro">
  <div className="capabilities-inner">
    <div>
      <p className="capabilities-eyebrow">CAPABILITIES</p>
      <h2 className="capabilities-heading">Our Services</h2>
    </div>
    <p className="capabilities-desc">
      <strong>TheSocialVerse's</strong> digital services help brands grow through creative
      storytelling, performance media, and full-funnel campaigns. Our strategy and
      results-driven approach combines social, paid media, and content design — engineered
      to build audiences and deliver measurable business outcomes.
    </p>
  </div>
</section>

{/* SERVICES GRID */}
<section className="services-listing">
  <div className="services-grid-large">

    {/* 1: Digital Marketing */}
    <article className="service-block" onClick={() => { window.location='/services/digital-marketing' }} style={{cursor: 'pointer'}}>
      <div className="service-block-head">
        <div className="service-icon">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="14" width="44" height="28" rx="2" fill="none" stroke="#1a1a1a" stroke-width="2"/>
            <rect x="2" y="42" width="52" height="3" rx="1.5" fill="#1a1a1a"/>
            <path d="M36 22 L46 17 L46 33 L36 28 Z" fill="var(--accent)"/>
            <circle cx="22" cy="26" r="6" fill="var(--accent)" opacity="0.3"/>
            <path d="M16 30 Q22 32 28 30" stroke="var(--accent)" stroke-width="2" fill="none"/>
          </svg>
        </div>
        <h3 className="service-icon-name">Digital Marketing</h3>
      </div>
      <div className="service-block-body">
        <p className="service-block-desc">Stay on top of the web with a robust digital marketing strategy.</p>
        <ul className="service-block-list">
          <li>Google Ads</li>
          <li>Social Media Marketing</li>
          <li>Search Engine Optimization (SEO)</li>
          <li>Email Marketing Service</li>
          <li>Content Marketing</li>
          <li>WhatsApp Marketing</li>
          <li>Google Local Services</li>
        </ul>
      </div>
    </article>

    {/* 2: Website Development */}
    <article className="service-block" onClick={() => { window.location='/services/website-development' }} style={{cursor: 'pointer'}}>
      <div className="service-block-head">
        <div className="service-icon">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="14" width="44" height="28" rx="2" fill="none" stroke="#1a1a1a" stroke-width="2"/>
            <rect x="2" y="42" width="52" height="3" rx="1.5" fill="#1a1a1a"/>
            <line x1="6" y1="22" x2="50" y2="22" stroke="#1a1a1a" stroke-width="1.5"/>
            <circle cx="11" cy="18" r="1" fill="var(--accent)"/>
            <circle cx="15" cy="18" r="1" fill="var(--accent)"/>
            <rect x="12" y="26" width="20" height="2" fill="var(--accent)"/>
            <rect x="12" y="30" width="14" height="2" fill="var(--accent)" opacity="0.5"/>
            <path d="M44 30 l-3 3 3 3" stroke="var(--accent)" stroke-width="2" fill="none" stroke-linecap="round"/>
          </svg>
        </div>
        <h3 className="service-icon-name">Website Development</h3>
      </div>
      <div className="service-block-body">
        <p className="service-block-desc">Create a unique virtual home for your business with a website that matters.</p>
        <ul className="service-block-list">
          <li>Shopify Website Development</li>
          <li>Magento Website Development</li>
          <li>WordPress Development</li>
          <li>PHP Website Development</li>
          <li>Custom Website Development</li>
          <li>Website AMC</li>
          <li>UI/UX Design</li>
          <li>Landing Pages Design</li>
        </ul>
      </div>
    </article>

    {/* 3: Video Production */}
    <article className="service-block" onClick={() => { window.location='/services/video-production' }} style={{cursor: 'pointer'}}>
      <div className="service-block-head">
        <div className="service-icon">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="14" width="44" height="28" rx="2" fill="none" stroke="#1a1a1a" stroke-width="2"/>
            <rect x="2" y="42" width="52" height="3" rx="1.5" fill="#1a1a1a"/>
            <circle cx="28" cy="28" r="9" fill="#fff3d6"/>
            <path d="M25 23 L25 33 L34 28 Z" fill="var(--accent)"/>
          </svg>
        </div>
        <h3 className="service-icon-name">Video Production</h3>
      </div>
      <div className="service-block-body">
        <p className="service-block-desc">Set your ideas and campaigns to motion with an impactful video.</p>
        <ul className="service-block-list">
          <li>Video Content Strategy</li>
          <li>TV Ads Commercials</li>
          <li>Corporate Videos</li>
          <li>2D &amp; 3D Animations</li>
          <li>Promotional Videos</li>
          <li>Whiteboard Animation</li>
        </ul>
      </div>
    </article>

    {/* 4: Presentation Design */}
    <article className="service-block" onClick={() => { window.location='/services/presentation-design' }} style={{cursor: 'pointer'}}>
      <div className="service-block-head">
        <div className="service-icon">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="14" width="44" height="28" rx="2" fill="none" stroke="#1a1a1a" stroke-width="2"/>
            <rect x="2" y="42" width="52" height="3" rx="1.5" fill="#1a1a1a"/>
            <rect x="11" y="20" width="20" height="3" fill="var(--accent)"/>
            <rect x="11" y="26" width="28" height="2" fill="#1a1a1a" opacity="0.4"/>
            <rect x="11" y="30" width="22" height="2" fill="#1a1a1a" opacity="0.4"/>
            <rect x="11" y="34" width="16" height="2" fill="#1a1a1a" opacity="0.4"/>
            <rect x="38" y="26" width="8" height="10" fill="#fff3d6"/>
          </svg>
        </div>
        <h3 className="service-icon-name">Presentation Design</h3>
      </div>
      <div className="service-block-body">
        <p className="service-block-desc">We create clear &amp; effective presentations as per your requirement.</p>
        <ul className="service-block-list">
          <li>Investor Pitch Deck</li>
          <li>Corporate Presentation Design</li>
          <li>Sales Presentation</li>
          <li>Financial Presentation Design</li>
          <li>Slide Deck Design</li>
          <li>Custom PowerPoint Design</li>
        </ul>
      </div>
    </article>

    {/* 5: Branding & Strategy */}
    <article className="service-block" onClick={() => { window.location='/services/branding-strategy' }} style={{cursor: 'pointer'}}>
      <div className="service-block-head">
        <div className="service-icon">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <rect x="14" y="12" width="22" height="30" rx="2" fill="#fff3d6" stroke="#1a1a1a" stroke-width="2"/>
            <circle cx="20" cy="20" r="3" fill="var(--accent)"/>
            <circle cx="30" cy="20" r="3" fill="#1a1a1a"/>
            <rect x="18" y="28" width="14" height="2" fill="#1a1a1a"/>
            <rect x="18" y="32" width="10" height="2" fill="#1a1a1a" opacity="0.5"/>
            <path d="M40 18 L52 18 L52 34 L46 38 L40 34 Z" fill="#fff3d6" stroke="#1a1a1a" stroke-width="2"/>
            <path d="M44 24 L46 28 L48 24" stroke="var(--accent)" stroke-width="2" fill="none"/>
          </svg>
        </div>
        <h3 className="service-icon-name">Branding &amp; Strategy</h3>
      </div>
      <div className="service-block-body">
        <p className="service-block-desc">Our wide range of Branding Services is tailor-made for your brand to successfully scale up.</p>
        <ul className="service-block-list">
          <li>Brand Strategy</li>
          <li>Logo &amp; Identity</li>
          <li>Brand Style Guide</li>
          <li>Naming &amp; Taglines</li>
          <li>Messaging &amp; Positioning</li>
          <li>Voice &amp; Tone</li>
          <li>Corporate Identity</li>
        </ul>
      </div>
    </article>

    {/* 6: Print & Package Design */}
    <article className="service-block" onClick={() => { window.location='/services/print-package-design' }} style={{cursor: 'pointer'}}>
      <div className="service-block-head">
        <div className="service-icon">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22 L32 12 L52 22 L52 44 L32 54 L12 44 Z" fill="#fff3d6" stroke="#1a1a1a" stroke-width="2"/>
            <path d="M12 22 L32 32 L52 22" fill="none" stroke="#1a1a1a" stroke-width="2"/>
            <line x1="32" y1="32" x2="32" y2="54" stroke="#1a1a1a" stroke-width="2"/>
            <path d="M22 17 L42 27" stroke="var(--accent)" stroke-width="2"/>
          </svg>
        </div>
        <h3 className="service-icon-name">Print &amp; Package Design</h3>
      </div>
      <div className="service-block-body">
        <p className="service-block-desc">We offer excellent Print &amp; Packaging Design Services with attractive packaging to our valuable clients.</p>
        <ul className="service-block-list">
          <li>Food Packaging Design</li>
          <li>Box Packaging Design</li>
          <li>Electronics Packaging Design</li>
          <li>Brochure Design</li>
          <li>Annual Report Design</li>
          <li>Corporate Stationery Design</li>
        </ul>
      </div>
    </article>

    {/* 7: Social Media Marketing */}
    <article className="service-block" onClick={() => { window.location='/services/social-media-marketing' }} style={{cursor: 'pointer'}}>
      <div className="service-block-head">
        <div className="service-icon">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="14" width="22" height="22" rx="3" fill="#fff3d6" stroke="#1a1a1a" stroke-width="2"/>
            <circle cx="21" cy="25" r="4" fill="none" stroke="var(--accent)" stroke-width="2"/>
            <circle cx="27" cy="19" r="1.5" fill="var(--accent)"/>
            <circle cx="42" cy="20" r="6" fill="#fff3d6" stroke="#1a1a1a" stroke-width="2"/>
            <text x="42" y="24" text-anchor="middle" font-family="Arial" font-size="9" font-weight="bold" fill="var(--accent)">!</text>
            <path d="M34 38 L42 32 L52 38 L52 48 L42 54 L34 48 Z" fill="#fff3d6" stroke="#1a1a1a" stroke-width="2"/>
            <path d="M37 41 L42 38 L47 41 L47 47 L42 50 L37 47 Z" fill="var(--accent)" opacity="0.3"/>
          </svg>
        </div>
        <h3 className="service-icon-name">Social Media Marketing</h3>
      </div>
      <div className="service-block-body">
        <p className="service-block-desc">We design engaging content for your Social Media to enhance your business presence.</p>
        <ul className="service-block-list">
          <li>Facebook, Instagram &amp; LinkedIn</li>
          <li>Social Media Management</li>
          <li>Social Media Advertising</li>
          <li>Social Media Brand Management</li>
          <li>Reputation Management</li>
        </ul>
      </div>
    </article>

    {/* 8: UI/UX Design */}
    <article className="service-block" onClick={() => { window.location='/services/ui-ux-design' }} style={{cursor: 'pointer'}}>
      <div className="service-block-head">
        <div className="service-icon">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="10" width="22" height="40" rx="3" fill="#fff3d6" stroke="#1a1a1a" stroke-width="2"/>
            <line x1="20" y1="16" x2="42" y2="16" stroke="#1a1a1a" stroke-width="1.5"/>
            <line x1="20" y1="44" x2="42" y2="44" stroke="#1a1a1a" stroke-width="1.5"/>
            <rect x="24" y="20" width="14" height="2" fill="#1a1a1a"/>
            <rect x="24" y="24" width="10" height="2" fill="#1a1a1a" opacity="0.5"/>
            <rect x="24" y="30" width="6" height="6" fill="var(--accent)"/>
            <text x="27" y="35" text-anchor="middle" font-family="Arial" font-size="6" fill="#fff">×</text>
            <path d="M44 32 L52 24" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>
            <circle cx="52" cy="24" r="2" fill="var(--accent)"/>
          </svg>
        </div>
        <h3 className="service-icon-name">UI / UX Design</h3>
      </div>
      <div className="service-block-body">
        <p className="service-block-desc">Our user-centered design approach ensures the final product meets your users' needs and expectations.</p>
        <ul className="service-block-list">
          <li>User Flow</li>
          <li>Prototype Design</li>
          <li>Dashboard UI Design</li>
          <li>Mobile App UI/UX</li>
          <li>User Research &amp; Testing</li>
          <li>Concept Ideate</li>
        </ul>
      </div>
    </article>

  </div>
</section>

{/* CLIENTS */}
<section className="clients-section">
  <div className="clients-header">
    <div className="clients-title-block">
      <p className="section-eyebrow">TRUSTED BY THE WORLD'S LEADING BRANDS</p>
      <h2>Our Clients</h2>
    </div>
    <a href="#" className="view-all-btn">View All Our Clients</a>
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
    <div className="client-logo"><span>Quanta</span></div>
    <div className="client-logo"><span>Zenith</span></div>
    <div className="client-logo"><span>Nimbus</span></div>
    <div className="client-logo"><span>Echo</span></div>
    <div className="client-logo"><span>Crest</span></div>
    <div className="client-logo"><span>Flint</span></div>
    <div className="client-logo"><span>Mosaic</span></div>
    <div className="client-logo"><span>Kindred</span></div>
    <div className="client-logo"><span>Summit</span></div>
    <div className="client-logo"><span>Aria</span></div>
    <div className="client-logo"><span>Forge+</span></div>
    <div className="client-logo"><span>Vista</span></div>
  </div>
</section>

{/* TESTIMONIALS */}
<section className="testimonials">
  <h2 className="testimonials-heading">Clients Testimonials</h2>

  <div className="testi-tabs">
    <button className="testi-tab active" data-cat="dm">Digital Marketing</button>
    <button className="testi-tab" data-cat="web">Website Development</button>
    <button className="testi-tab" data-cat="seo">SEO</button>
    <button className="testi-tab" data-cat="video">Video Production</button>
    <button className="testi-tab" data-cat="package">Package Design</button>
  </div>

  <div className="testi-carousel">
    <button className="testi-arrow prev" id="testiPrev" aria-label="Previous">←</button>

    <div className="testi-slide active">
      <div className="testi-author-pill">Sample Client A</div>
      <p className="testi-quote">
        Working with TheSocialVerse has been a seamless experience from start to finish.
        Their team understood our brief immediately, brought sharp creative thinking, and delivered work
        that genuinely connected with our audience. Highly recommended for any growing brand.
      </p>
    </div>
    <div className="testi-slide">
      <div className="testi-author-pill">Sample Client B</div>
      <p className="testi-quote">
        From kickoff to launch, every step was handled with care and precision. Our campaign hit every
        target we set — and then some. A real partner, not just a vendor.
      </p>
    </div>
    <div className="testi-slide">
      <div className="testi-author-pill">Sample Client C</div>
      <p className="testi-quote">
        The strategic clarity they brought to our brand was exactly what we needed. The team listens,
        iterates fast, and ships work that moves the needle. Looking forward to the next project.
      </p>
    </div>

    <button className="testi-arrow next" id="testiNext" aria-label="Next">→</button>
  </div>

  <div className="testi-pagination">
    <span className="num active" id="testiCurrent">1</span>
    <span className="testi-line"></span>
    <span className="num" id="testiTotal">3</span>
  </div>
</section>

{/* REQUEST QUOTE FORM */}
<section className="quote-form-section">
  <p className="quote-eyebrow">SAY HELLO</p>
  <h2 className="quote-heading">Request a Free Quote</h2>

  <form className="quote-form" onSubmit={(e) => { e.preDefault(); alert('Thanks! We will get back to you shortly.'); }}>
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

{/* ==== FOOTER START ==== */}

{/* ==== FOOTER END ==== */}


{/* WHATSAPP */}
    </>
  );
}