"use client";

import { useEffect } from "react";

export default function CareersPage() {
  useEffect(() => {
    document.querySelectorAll('.opening-tab').forEach(tab => {
        tab.addEventListener('click', () => {
          document.querySelectorAll('.opening-tab').forEach(t => t.classList.remove('active'));
          document.querySelectorAll('.opening-pane').forEach(p => p.classList.remove('active'));
          tab.classList.add('active');
          const target = document.getElementById(tab.dataset.target);
          if (target) target.classList.add('active');
        });
      });

      document.querySelectorAll('.cfaq-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
          btn.parentElement.classList.toggle('open');
        });
      });

      document.querySelectorAll('.accordion-toggle').forEach(toggle => {
        toggle.addEventListener('click', () => {
          const expanded = toggle.getAttribute('aria-expanded') === 'true';
          toggle.setAttribute('aria-expanded', !expanded);
          const panel = toggle.nextElementSibling;
          panel.classList.toggle('open');
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
  .career-hero {
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
  .career-title {
    font-size: 72px; font-weight: 700; color: #fff;
    line-height: 1.05; letter-spacing: -2px;
    position: relative; z-index: 2; margin-bottom: 28px;
  }
  .career-tagline {
    font-size: 22px; color: #fff; opacity: 0.95;
    font-weight: 400; position: relative; z-index: 2;
  }

  /* ---------- BREADCRUMB ---------- */

  /* ---------- WHY US ---------- */
  .why-us {
    padding: 100px 60px;
    background: #fff;
  }
  .why-us-grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 80px;
    align-items: center;
    max-width: 1500px;
    margin: 0 auto;
  }
  .why-us-grid h2 {
    font-size: 56px; font-weight: 700; color: #111;
    letter-spacing: -1px; line-height: 1.05;
    margin-bottom: 32px;
  }
  .why-us-grid p {
    font-size: 17px; line-height: 1.75; color: #1a1a1a;
    margin-bottom: 18px;
  }
  .why-us-image {
    aspect-ratio: 4 / 3.5;
    border-radius: 18px;
    background:
      linear-gradient(135deg, rgba(0,0,0,0.05), rgba(0,0,0,0.2)),
      linear-gradient(120deg, #fff3d6 0%, #f5d4d4 50%, #ebc1c1 100%);
    position: relative;
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(0,0,0,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .why-us-illustration {
    width: 75%;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .why-us-illustration svg { width: 100%; height: 100%; }

  /* ---------- CURRENT OPENINGS ---------- */
  .openings {
    background: #fff;
    padding: 60px 60px 100px;
  }
  .openings h2 {
    font-size: 56px; font-weight: 700; color: #111;
    letter-spacing: -1px; line-height: 1.05;
    margin-bottom: 50px;
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
  }
  .openings-layout {
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 60px;
    max-width: 1500px;
    margin: 0 auto;
    align-items: start;
  }
  .openings-tabs {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .opening-tab {
    background: #f3f3f3;
    border: none;
    color: #111;
    font-family: inherit;
    font-size: 17px;
    font-weight: 500;
    padding: 22px 26px;
    border-radius: 6px;
    cursor: pointer;
    text-align: center;
    transition: background 0.2s ease, color 0.2s ease;
    position: relative;
  }
  .opening-tab:hover { background: #e8e8e8; }
  .opening-tab.active {
    background: var(--accent);
    color: #fff;
    font-weight: 600;
  }
  .opening-tab.active::after {
    content: "";
    position: absolute;
    right: -18px;
    top: 50%;
    transform: translateY(-50%);
    width: 0; height: 0;
    border-top: 18px solid transparent;
    border-bottom: 18px solid transparent;
    border-left: 18px solid var(--accent);
  }

  .opening-content { min-height: 600px; }
  .opening-pane { display: none; }
  .opening-pane.active { display: block; animation: fadeIn 0.3s ease; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

  .opening-pane > p {
    font-size: 17px;
    line-height: 1.7;
    color: #1a1a1a;
    margin-bottom: 24px;
  }
  .opening-pane strong { font-weight: 700; }
  .opening-meta-row {
    font-size: 17px;
    line-height: 1.7;
    color: #1a1a1a;
    margin-bottom: 14px;
  }
  .opening-pane h3 {
    font-size: 19px;
    font-weight: 700;
    color: #111;
    margin-top: 30px;
    margin-bottom: 14px;
  }
  .opening-pane ul {
    list-style: none;
    margin: 0 0 22px 0;
    padding: 0;
  }
  .opening-pane ul li {
    position: relative;
    padding-left: 22px;
    margin-bottom: 12px;
    font-size: 16px;
    line-height: 1.6;
    color: #1a1a1a;
  }
  .opening-pane ul li::before {
    content: "";
    position: absolute;
    left: 0; top: 9px;
    width: 7px; height: 7px;
    border-radius: 50%;
    background: #1a1a1a;
  }

  /* ---------- APPLICATION FORM ---------- */
  .apply-section {
    background: #f5f5f5;
    padding: 100px 60px;
    text-align: center;
  }
  .apply-eyebrow {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 2px;
    color: var(--accent);
    margin-bottom: 16px;
    text-transform: uppercase;
  }
  .apply-heading {
    font-size: 44px;
    font-weight: 700;
    color: #111;
    letter-spacing: -0.8px;
    line-height: 1.15;
    margin-bottom: 60px;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
  }
  .apply-form {
    max-width: 1300px;
    margin: 0 auto;
    text-align: left;
  }
  .apply-form .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px 60px;
    margin-bottom: 28px;
  }
  .apply-form .form-field { display: flex; flex-direction: column; }
  .apply-form label {
    font-size: 16px;
    font-weight: 700;
    color: #111;
    margin-bottom: 12px;
  }
  .apply-form label .req { color: var(--accent); }

  .apply-form .name-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .apply-form input[type="text"],
  .apply-form input[type="email"],
  .apply-form input[type="tel"],
  .apply-form input[type="url"],
  .apply-form input[type="date"],
  .apply-form select,
  .apply-form textarea {
    background: #e8e8e8;
    border: 1px solid transparent;
    border-radius: 6px;
    padding: 16px 18px;
    font-size: 16px;
    font-family: inherit;
    color: #111;
    width: 100%;
    transition: border-color 0.2s ease, background 0.2s ease;
  }
  .apply-form input::placeholder,
  .apply-form textarea::placeholder { color: #888; }
  .apply-form input:focus,
  .apply-form select:focus,
  .apply-form textarea:focus {
    outline: none;
    border-color: #111;
    background: #fff;
  }
  .apply-form select {
    appearance: none;
    -webkit-appearance: none;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none' stroke='%23111' stroke-width='2'><path d='M3 5 L7 9 L11 5'/></svg>");
    background-repeat: no-repeat;
    background-position: right 18px center;
    padding-right: 44px;
  }

  .address-group { grid-column: 1 / -1; }
  .address-rows {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .address-row-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .address-sub-label {
    font-size: 14px;
    font-weight: 500;
    color: #555;
    margin-top: 6px;
  }

  .file-upload-row {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }
  .file-upload-btn {
    background: #fff;
    border: 1.5px solid #999;
    color: #111;
    font-family: inherit;
    font-size: 15px;
    padding: 10px 18px;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease;
  }
  .file-upload-btn:hover {
    background: #f3f3f3;
    border-color: #111;
  }
  .file-name {
    font-size: 15px;
    color: #555;
  }
  .file-help {
    font-size: 14px;
    color: #777;
    margin-top: 8px;
  }

  .apply-form textarea {
    min-height: 200px;
    resize: vertical;
  }

  .apply-submit {
    background: #0d0d0d;
    color: #fff;
    border: none;
    padding: 16px 36px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    font-family: inherit;
    margin-top: 12px;
    transition: background 0.2s ease, transform 0.2s ease;
  }
  .apply-submit:hover {
    background: #000;
    transform: translateY(-2px);
  }

  /* ---------- FAQ ---------- */
  .career-faq {
    background: #f5f5f5;
    padding: 60px 60px 120px;
  }
  .career-faq-list {
    max-width: 1500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  .cfaq-item {
    border-bottom: 1px solid #d8d8d8;
    overflow: hidden;
  }
  .cfaq-toggle {
    width: 100%;
    background: none;
    border: none;
    padding: 28px 0;
    cursor: pointer;
    font-family: inherit;
    font-size: 22px;
    font-weight: 700;
    color: #111;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 20px;
    letter-spacing: -0.3px;
  }
  .cfaq-icon {
    width: 26px; height: 26px;
    display: inline-flex;
    align-items: center; justify-content: center;
    flex-shrink: 0;
    font-size: 28px; line-height: 1;
    font-weight: 300;
    transition: transform 0.3s ease;
  }
  .cfaq-icon::after { content: "+"; display: block; }
  .cfaq-item.open .cfaq-icon::after { content: "−"; }
  .cfaq-question { flex: 1; }
  .cfaq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease;
  }
  .cfaq-answer-inner {
    padding: 0 0 28px 46px;
    font-size: 17px;
    line-height: 1.75;
    color: #1a1a1a;
  }
  .cfaq-answer-inner p { margin-bottom: 16px; }
  .cfaq-answer-inner p:last-child { margin-bottom: 0; }
  .cfaq-item.open .cfaq-answer { max-height: 800px; }

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



  body { -webkit-text-size-adjust: 100%; overflow-x: hidden; position: relative; }
  html { scroll-behavior: smooth; }
  ::selection { background: var(--accent); color: #fff; }
  a:focus-visible, button:focus-visible {
    outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px;
  }
  img, video, svg { max-width: 100%; height: auto; }

  @media (max-width: 1200px) {
    .career-title { font-size: 60px; }
    .why-us-grid h2,
    .openings h2,
    .career-faq-list h2 { font-size: 44px; }
    .apply-heading { font-size: 36px; }
    .openings-layout { grid-template-columns: 280px 1fr; gap: 40px; }
  }

  @media (max-width: 1000px) {
    .openings-layout { grid-template-columns: 1fr; gap: 36px; }
    .opening-tab.active::after { display: none; }
    .openings-tabs {
      flex-direction: row;
      flex-wrap: nowrap;
      overflow-x: auto;
      gap: 10px;
      padding-bottom: 6px;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }
    .openings-tabs::-webkit-scrollbar { display: none; }
    .opening-tab {
      flex-shrink: 0;
      padding: 14px 22px;
      font-size: 15px;
    }
  }

  @media (max-width: 900px) {

    .career-hero { margin-top: 80px; padding: 40px 24px 60px; min-height: 380px; }
    .back-btn { margin-bottom: 50px; }
    .career-title { font-size: 48px; }
    .career-tagline { font-size: 18px; }


    .why-us { padding: 70px 24px; }
    .why-us-grid { grid-template-columns: 1fr; gap: 40px; }
    .why-us-grid h2 { font-size: 38px; margin-bottom: 24px; }

    .openings { padding: 50px 24px 80px; }
    .openings h2 { font-size: 38px; margin-bottom: 36px; }

    .apply-section { padding: 70px 24px; }
    .apply-heading { font-size: 28px; margin-bottom: 40px; }
    .apply-form .form-row { grid-template-columns: 1fr; gap: 24px; margin-bottom: 24px; }

    .career-faq { padding: 50px 24px 80px; }
    .cfaq-toggle { font-size: 18px; padding: 22px 0; }
    .cfaq-answer-inner { padding: 0 0 22px 38px; font-size: 16px; }

  }

  @media (max-width: 600px) {

    .career-hero { margin-top: 72px; padding: 24px 18px 40px; min-height: 320px; }
    .back-btn { margin-bottom: 36px; font-size: 22px; }
    .career-title { font-size: 38px; letter-spacing: -1px; }
    .career-tagline { font-size: 16px; }


    .why-us { padding: 50px 18px; }
    .why-us-grid h2 { font-size: 28px; }
    .why-us-grid p { font-size: 15px; }

    .openings { padding: 40px 18px 60px; }
    .openings h2 { font-size: 28px; }
    .opening-pane > p,
    .opening-meta-row { font-size: 16px; }
    .opening-pane h3 { font-size: 17px; }
    .opening-pane ul li { font-size: 15px; }

    .apply-section { padding: 50px 18px; }
    .apply-heading { font-size: 22px; }
    .apply-form .name-row { grid-template-columns: 1fr; gap: 12px; }
    .apply-form .address-row-2 { grid-template-columns: 1fr; }
    .apply-submit { width: 100%; padding: 18px 32px; }

    .career-faq { padding: 40px 18px 60px; }
    .cfaq-toggle { font-size: 16px; padding: 20px 0; gap: 14px; }
    .cfaq-icon { width: 22px; height: 22px; font-size: 24px; }
    .cfaq-answer-inner { padding: 0 0 20px 36px; font-size: 15px; }


  }

  @media (max-width: 380px) {
    .career-title { font-size: 30px; }
    .why-us-grid h2,
    .openings h2 { font-size: 24px; }
    .apply-heading { font-size: 20px; }
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
<section className="career-hero hero-gradient theme-orange">
  <button className="back-btn" onClick={() => { history.back() }}>←</button>
  <h1 className="career-title">Career</h1>
  <p className="career-tagline">Leave us a little info, and we'll be in touch.</p>
</section>

{/* BREADCRUMB */}
<div className="breadcrumb">
  <a href="/">Home</a>
  <span>›</span>
  <span className="current">Career</span>
</div>

{/* WHY US */}
<section className="why-us">
  <div className="why-us-grid">
    <div>
      <h2>Why TheSocialVerse?</h2>
      <p>
        We believe every person has limitless potential to achieve their dreams — and so do we.
        That's why we've built an inclusive company where everyone feels welcomed, valued, heard,
        and treated with dignity and respect.
      </p>
      <p>
        Our team is our greatest asset, and we work hard to create a fun, family-like
        atmosphere that keeps people genuinely engaged and energised. We invest in growth,
        celebrate wins together, and back each other through every challenge.
      </p>
      <p>
        If you're ambitious, curious, and want to do work you're proud of with people who care,
        we'd love to hear from you.
      </p>
    </div>
    <div className="why-us-image">
      <div className="why-us-illustration">
        <svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
          <g>
            <circle cx="100" cy="140" r="26" fill="#fff" stroke="#1a1a1a" stroke-width="3"/>
            <path d="M78 135 Q78 115 100 115 Q122 115 122 138 Q112 128 100 130 Q90 130 78 135 Z" fill="#1a1a1a"/>
            <path d="M78 168 Q78 195 100 195 Q122 195 122 168 L130 230 L70 230 Z" fill="var(--accent)"/>
            <ellipse cx="160" cy="100" rx="22" ry="16" fill="var(--accent)"/>
            <path d="M148 113 L150 122 L162 113 Z" fill="var(--accent)"/>
          </g>
          <g>
            <circle cx="180" cy="155" r="26" fill="#fff" stroke="#1a1a1a" stroke-width="3"/>
            <path d="M158 150 Q158 130 180 130 Q202 130 202 153 Q193 142 180 144 Q170 144 158 150 Z" fill="#1a1a1a"/>
            <path d="M158 180 Q158 200 180 200 L195 215 Q200 220 200 240 L150 240 L155 215 Q150 200 158 180 Z" fill="var(--accent)"/>
            <path d="M165 195 Q140 200 130 220" stroke="#1a1a1a" stroke-width="5" fill="none" stroke-linecap="round"/>
          </g>
          <rect x="105" y="218" width="70" height="44" rx="3" fill="#1a1a1a"/>
          <rect x="110" y="223" width="60" height="34" rx="2" fill="#fff"/>
          <rect x="100" y="260" width="80" height="4" rx="2" fill="#333"/>
        </svg>
      </div>
    </div>
  </div>
</section>

{/* CURRENT OPENINGS */}
<section className="openings">
  <h2>Current Openings</h2>
  <div className="openings-layout">
    <div className="openings-tabs" id="openingsTabs">
      <button className="opening-tab active" data-target="role-junior">Junior Graphic Designer</button>
      <button className="opening-tab" data-target="role-mid">Mid-Level Graphic Designer</button>
      <button className="opening-tab" data-target="role-senior">Senior Graphic Designer</button>
      <button className="opening-tab" data-target="role-content">Content Writer</button>
      <button className="opening-tab" data-target="role-seo">SEO Specialist</button>
      <button className="opening-tab" data-target="role-video">Video Editor</button>
    </div>

    <div className="opening-content">

      <div className="opening-pane active" id="role-junior">
        <p>
          TheSocialVerse is hiring a <strong>Junior Graphic Designer</strong> to join our
          Bangalore team. If you're fresh out of design school (or have up to 1 year of experience),
          have a sharp eye for design, and want to work hands-on with reputed brands — we'd love
          to hear from you.
        </p>
        <p className="opening-meta-row"><strong>Role:</strong> Junior Graphic Designer</p>
        <p className="opening-meta-row"><strong>Location:</strong> Bangalore (On-site only)</p>
        <p className="opening-meta-row"><strong>Salary:</strong> &#8377;3 LPA (CTC)</p>
        <p className="opening-meta-row"><strong>Type:</strong> Full-time</p>
        <p className="opening-meta-row"><strong>Perks:</strong> Paid leaves, performance-based bonuses, flexible hours, and tons of learning opportunities</p>

        <h3>What You'll Do</h3>
        <ul>
          <li>Assist in designing digital and print collaterals for brand campaigns</li>
          <li>Work on social media creatives across Instagram, LinkedIn, and Meta</li>
          <li>Collaborate with senior designers and managers to meet project goals</li>
          <li>Participate in brainstorming sessions and bring fresh ideas to the table</li>
        </ul>

        <h3>What We're Looking For</h3>
        <ul>
          <li>0&#8211;1 year of design experience (internships count!)</li>
          <li>Proficiency in Adobe Illustrator, Photoshop, and basic layout design</li>
          <li>A strong portfolio that showcases your range and attention to detail</li>
          <li>Eagerness to learn, take feedback, and grow fast</li>
        </ul>
      </div>

      <div className="opening-pane" id="role-mid">
        <p>
          We're hiring a <strong>Mid-Level Graphic Designer</strong> to join our growing creative
          team. If you have 2&#8211;4 years of experience and are looking for a place where your craft
          will be challenged and your ideas will be heard, read on.
        </p>
        <p className="opening-meta-row"><strong>Role:</strong> Mid-Level Graphic Designer</p>
        <p className="opening-meta-row"><strong>Location:</strong> Bangalore / Mumbai (Hybrid)</p>
        <p className="opening-meta-row"><strong>Salary:</strong> &#8377;6&#8211;9 LPA (CTC)</p>
        <p className="opening-meta-row"><strong>Type:</strong> Full-time</p>
        <p className="opening-meta-row"><strong>Perks:</strong> Health insurance, hybrid work, annual learning budget, and team offsites</p>

        <h3>What You'll Do</h3>
        <ul>
          <li>Lead design execution on mid-to-large scale brand and campaign projects</li>
          <li>Translate briefs into compelling design concepts across digital and print</li>
          <li>Mentor junior designers and review their work</li>
          <li>Collaborate closely with strategy and content teams</li>
        </ul>

        <h3>What We're Looking For</h3>
        <ul>
          <li>2&#8211;4 years of design experience at an agency or in-house studio</li>
          <li>Strong skills in Figma, Adobe CC, and motion-design tools (a plus)</li>
          <li>A portfolio with cross-discipline work — branding, social, web, print</li>
          <li>Ability to manage multiple projects under tight timelines</li>
        </ul>
      </div>

      <div className="opening-pane" id="role-senior">
        <p>
          We're looking for a <strong>Senior Graphic Designer</strong> to lead key projects, shape
          design culture, and mentor the next generation of designers at TheSocialVerse.
        </p>
        <p className="opening-meta-row"><strong>Role:</strong> Senior Graphic Designer</p>
        <p className="opening-meta-row"><strong>Location:</strong> Bangalore / Mumbai (Hybrid)</p>
        <p className="opening-meta-row"><strong>Salary:</strong> &#8377;12&#8211;18 LPA (CTC)</p>
        <p className="opening-meta-row"><strong>Type:</strong> Full-time</p>
        <p className="opening-meta-row"><strong>Perks:</strong> ESOPs, premium health cover, conference budget, fully flexible hours</p>

        <h3>What You'll Do</h3>
        <ul>
          <li>Own end-to-end design direction on flagship client accounts</li>
          <li>Define and uphold design quality bar across the studio</li>
          <li>Lead pitches and present concepts to senior client stakeholders</li>
          <li>Coach mid and junior designers through hands-on reviews and feedback</li>
        </ul>

        <h3>What We're Looking For</h3>
        <ul>
          <li>5+ years of design experience with at least 2 years in a senior role</li>
          <li>Strong systems thinking — you build design systems, not just screens</li>
          <li>Excellent communication skills, especially in client-facing settings</li>
          <li>A portfolio that shows breadth and depth across formats</li>
        </ul>
      </div>

      <div className="opening-pane" id="role-content">
        <p>
          We're hiring a <strong>Content Writer</strong> who can turn complex briefs into clear,
          punchy copy across web, social, and long-form. If you love writing and obsess over
          every word, keep reading.
        </p>
        <p className="opening-meta-row"><strong>Role:</strong> Content Writer</p>
        <p className="opening-meta-row"><strong>Location:</strong> Remote (India)</p>
        <p className="opening-meta-row"><strong>Salary:</strong> &#8377;5&#8211;8 LPA (CTC)</p>
        <p className="opening-meta-row"><strong>Type:</strong> Full-time</p>
        <p className="opening-meta-row"><strong>Perks:</strong> Fully remote, flexible hours, learning budget, annual team meetups</p>

        <h3>What You'll Do</h3>
        <ul>
          <li>Write blog posts, landing pages, ad copy, and social captions for clients</li>
          <li>Collaborate with strategists and SEO specialists on briefs and outlines</li>
          <li>Edit and proofread work from junior writers</li>
          <li>Keep up with trends across content formats and AI writing tools</li>
        </ul>

        <h3>What We're Looking For</h3>
        <ul>
          <li>2+ years of professional writing experience (agency or in-house)</li>
          <li>A portfolio of published work across at least two formats</li>
          <li>Strong understanding of SEO best practices</li>
          <li>Native-level English fluency, with sharp editing instincts</li>
        </ul>
      </div>

      <div className="opening-pane" id="role-seo">
        <p>
          We're hiring an <strong>SEO Specialist</strong> to lead organic-growth strategy across
          our client portfolio. You'll work closely with content, dev, and design teams to ship
          work that ranks and converts.
        </p>
        <p className="opening-meta-row"><strong>Role:</strong> SEO Specialist</p>
        <p className="opening-meta-row"><strong>Location:</strong> Bangalore (Hybrid)</p>
        <p className="opening-meta-row"><strong>Salary:</strong> &#8377;7&#8211;11 LPA (CTC)</p>
        <p className="opening-meta-row"><strong>Type:</strong> Full-time</p>
        <p className="opening-meta-row"><strong>Perks:</strong> Health cover, hybrid work, paid certifications, performance bonuses</p>

        <h3>What You'll Do</h3>
        <ul>
          <li>Run technical SEO audits and lead site optimisation projects</li>
          <li>Drive keyword research, content strategy, and on-page optimisation</li>
          <li>Build link-building strategies and manage outreach campaigns</li>
          <li>Track performance and report on rankings, traffic, and conversions</li>
        </ul>

        <h3>What We're Looking For</h3>
        <ul>
          <li>3+ years of SEO experience with a track record of organic growth wins</li>
          <li>Proficiency in Ahrefs, SEMrush, GA4, Search Console, and Screaming Frog</li>
          <li>Strong understanding of technical SEO, schema, and Core Web Vitals</li>
          <li>Excellent reporting and stakeholder communication skills</li>
        </ul>
      </div>

      <div className="opening-pane" id="role-video">
        <p>
          We're looking for a <strong>Video Editor</strong> to bring stories to life across short-form
          social, brand films, and long-form content. If you cut fast, think in beats, and obsess
          over pacing, we want to see your reel.
        </p>
        <p className="opening-meta-row"><strong>Role:</strong> Video Editor</p>
        <p className="opening-meta-row"><strong>Location:</strong> Mumbai (On-site)</p>
        <p className="opening-meta-row"><strong>Salary:</strong> &#8377;6&#8211;10 LPA (CTC)</p>
        <p className="opening-meta-row"><strong>Type:</strong> Full-time</p>
        <p className="opening-meta-row"><strong>Perks:</strong> Premium edit suite, project bonuses, festival pass budget, team trips</p>

        <h3>What You'll Do</h3>
        <ul>
          <li>Edit short-form social content, brand films, and ad creatives</li>
          <li>Work closely with directors, designers, and motion artists on cut decisions</li>
          <li>Sound-design and colour-grade where appropriate</li>
          <li>Maintain organised project files and asset libraries</li>
        </ul>

        <h3>What We're Looking For</h3>
        <ul>
          <li>2+ years of video editing experience with a strong showreel</li>
          <li>Proficiency in Premiere Pro and DaVinci Resolve; After Effects a plus</li>
          <li>A clear eye for pacing, rhythm, and storytelling</li>
          <li>Comfort working across formats and aspect ratios</li>
        </ul>
      </div>

    </div>
  </div>
</section>

{/* APPLY FORM */}
<section className="apply-section">
  <p className="apply-eyebrow">READY TO JOIN THE CREATIVE LEAGUE!</p>
  <h2 className="apply-heading">Please complete the form below to apply for a position with us.</h2>

  <form className="apply-form" onSubmit={(e) => { e.preDefault(); alert('Thanks for applying! We will review and get back to you shortly.'); }}>
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
        <label>Date of Birth <span className="req">*</span></label>
        <input type="date" required />
      </div>
      <div className="form-field">
        <label>Position Applied <span className="req">*</span></label>
        <select required>
          <option value="">Select a position</option>
          <option>Junior Graphic Designer</option>
          <option>Mid-Level Graphic Designer</option>
          <option>Senior Graphic Designer</option>
          <option>Content Writer</option>
          <option>SEO Specialist</option>
          <option>Video Editor</option>
          <option>Other</option>
        </select>
      </div>
    </div>

    <div className="form-row">
      <div className="form-field">
        <label>Available Start Date <span className="req">*</span></label>
        <input type="date" required />
      </div>
      <div className="form-field">
        <label>LinkedIn Profile <span className="req">*</span></label>
        <input type="url" placeholder="https://" required />
      </div>
    </div>

    <div className="form-row">
      <div className="form-field" style={{gridColumn: '1 / -1'}}>
        <label>How did you hear about us? <span className="req">*</span></label>
        <select required>
          <option value="">Select an option</option>
          <option>LinkedIn</option>
          <option>Instagram</option>
          <option>Job board (Naukri, Indeed, etc.)</option>
          <option>Referred by a friend or colleague</option>
          <option>Google search</option>
          <option>Our website</option>
          <option>Other</option>
        </select>
      </div>
    </div>

    <div className="form-row">
      <div className="form-field address-group">
        <label>Address <span className="req">*</span></label>
        <div className="address-rows">
          <div>
            <input type="text" required />
            <div className="address-sub-label">Street Address</div>
          </div>
          <div>
            <input type="text" />
            <div className="address-sub-label">Address Line 2</div>
          </div>
          <div className="address-row-2">
            <div>
              <input type="text" required />
              <div className="address-sub-label">City</div>
            </div>
            <div>
              <input type="text" required />
              <div className="address-sub-label">State / Province / Region</div>
            </div>
          </div>
          <div className="address-row-2">
            <div>
              <input type="text" required />
              <div className="address-sub-label">ZIP / Postal Code</div>
            </div>
            <div>
              <select required>
                <option value="">Select country</option>
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Singapore</option>
                <option>UAE</option>
                <option>Other</option>
              </select>
              <div className="address-sub-label">Country</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="form-row">
      <div className="form-field" style={{gridColumn: '1 / -1'}}>
        <label>Upload Your Resume <span className="req">*</span></label>
        <div className="file-upload-row">
          <label className="file-upload-btn" htmlFor="resume-upload">Choose File</label>
          <input id="resume-upload" type="file" accept=".pdf,.doc,.docx" style={{display: 'none'}} onChange={() => { document.getElementById('resume-name').textContent = this.files[0] ? this.files[0].name : 'No file chosen'; }} required />
          <span className="file-name" id="resume-name">No file chosen</span>
        </div>
        <p className="file-help">Max. file size: 20 MB. Accepted: PDF, DOC, DOCX.</p>
      </div>
    </div>

    <div className="form-row">
      <div className="form-field" style={{gridColumn: '1 / -1'}}>
        <label>Cover Letter <span className="req">*</span></label>
        <textarea placeholder="Tell us why you'd be a great fit for this role..." required></textarea>
      </div>
    </div>

    <button type="submit" className="apply-submit">Submit</button>
  </form>
</section>

{/* FAQ */}
<section className="career-faq">
  <div className="career-faq-list">
    <div className="cfaq-item">
      <button type="button" className="cfaq-toggle">
        <span className="cfaq-icon"></span>
        <span className="cfaq-question">Who do we look for at TheSocialVerse?</span>
      </button>
      <div className="cfaq-answer">
        <div className="cfaq-answer-inner">
          <p>
            We look for ambitious, curious people who genuinely care about their craft. Whether
            you're a designer, strategist, writer, or developer, what matters most is that you
            ship great work, communicate clearly, and bring positive energy to the team.
          </p>
          <p>
            Specific skills are easy to teach. What's hard to teach is taste, drive, and the
            instinct to take ownership. If those describe you, we'd love to talk regardless of
            where you are in your career.
          </p>
        </div>
      </div>
    </div>

    <div className="cfaq-item open">
      <button type="button" className="cfaq-toggle">
        <span className="cfaq-icon"></span>
        <span className="cfaq-question">How will you grow at TheSocialVerse?</span>
      </button>
      <div className="cfaq-answer">
        <div className="cfaq-answer-inner">
          <p>
            TheSocialVerse believes in helping every team member reach their full potential and
            deliver meaningful impact. We continuously coach and mentor — our goal is for you to
            learn from our best people and become one of them. We care about developing
            exceptional people, and learning, mentorship, and growth are an inherent part of
            our culture and work.
          </p>
          <p>
            Our culture is inclusive and supportive. You'll have opportunities to learn from
            and collaborate with peers across disciplines. We pride ourselves not just on
            delivering great work, but on helping the people behind it grow.
          </p>
        </div>
      </div>
    </div>

    <div className="cfaq-item">
      <button type="button" className="cfaq-toggle">
        <span className="cfaq-icon"></span>
        <span className="cfaq-question">Who will you work with at TheSocialVerse?</span>
      </button>
      <div className="cfaq-answer">
        <div className="cfaq-answer-inner">
          <p>
            Through our commitment to diversity and inclusion, we support the next generation of
            business leaders — building a place where people can feel welcomed, respected, and
            valued for their unique perspectives and contributions.
          </p>
          <p>
            Our networks support our people, providing an environment where mentorship and
            community create an unparalleled sense of belonging and growth.
          </p>
        </div>
      </div>
    </div>

    <div className="cfaq-item">
      <button type="button" className="cfaq-toggle">
        <span className="cfaq-icon"></span>
        <span className="cfaq-question">What is the interview process like?</span>
      </button>
      <div className="cfaq-answer">
        <div className="cfaq-answer-inner">
          <p>
            Our process is typically 3 stages: an initial screening call with our People team,
            a craft interview with the relevant function lead — usually with a small take-home
            or live exercise, and a culture conversation with senior leadership.
          </p>
          <p>
            Most candidates hear back within 7&#8211;10 working days at each stage. We'll always be
            transparent about timing and next steps.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ==== FOOTER START ==== */}

{/* ==== FOOTER END ==== */}


{/* WHATSAPP */}
    </>
  );
}