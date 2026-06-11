"use client";

import Link from "next/link";

// First number listed in the footer (WhatsApp-enabled).
const WHATSAPP_NUMBER = "916000955672";

function buildWhatsAppMessage(form) {
  const fd = new FormData(form);
  const get = (n) => (fd.get(n) || "").toString().trim();
  const name = [get("firstName"), get("lastName")].filter(Boolean).join(" ");
  const website = get("website");
  const message = get("message");
  const services = fd.getAll("svc").filter(Boolean).join(", ");

  const lines = [
    "*New Inquiry — The Social Verse*",
    "",
    `*Name:* ${name || "—"}`,
    `*Email:* ${get("email") || "—"}`,
    `*Phone:* ${get("phone") || "—"}`,
    `*Company:* ${get("company") || "—"}`,
  ];
  if (website) lines.push(`*Website:* ${website}`);
  lines.push(`*Services Needed:* ${services || "—"}`);
  if (message) lines.push("", `*Message:* ${message}`);

  return lines.join("\n");
}

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = encodeURIComponent(buildWhatsAppMessage(form));
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
    form.reset();
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `

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
    max-width: 900px; margin: 0 auto;
  }
  .page-header p {
    font-size: 17px; color: #333; max-width: 720px;
    margin: 22px auto 0; line-height: 1.6;
  }

  /* ---------- CONTACT METHODS ---------- */
  .contact-methods {
    background: #fff;
    padding: 100px 60px 60px;
  }
  .contact-methods-inner {
    max-width: 1300px; margin: 0 auto;
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
  }
  .contact-method {
    background: #f5f5f5;
    border-radius: 18px;
    padding: 40px 36px;
    display: flex; flex-direction: column; gap: 14px;
    color: #111;
    transition: background 0.25s ease, transform 0.25s ease;
  }
  .contact-method:hover {
    background: #fff5d6;
    transform: translateY(-4px);
  }
  .contact-method-icon {
    width: 52px; height: 52px;
    border-radius: 12px;
    background: var(--accent); color: #fff;
    display: flex; align-items: center; justify-content: center;
    font-size: 24px; font-weight: 700;
    margin-bottom: 6px;
  }
  .contact-method-label {
    font-size: 12px; font-weight: 700;
    letter-spacing: 1.5px; text-transform: uppercase;
    color: #555;
  }
  .contact-method-primary {
    font-size: 22px; font-weight: 700;
    color: #111; letter-spacing: -0.3px;
    line-height: 1.25; word-break: break-word;
    text-decoration: none;
    transition: color 0.2s ease;
  }
  .contact-method-primary:hover { color: var(--accent); }
  .contact-method-secondary {
    font-size: 15px; color: #555;
    line-height: 1.5;
  }
  .contact-method-secondary a {
    color: #555; text-decoration: none;
    transition: color 0.2s ease;
  }
  .contact-method-secondary a:hover { color: var(--accent); }

  /* ---------- FORM SECTION ---------- */
  .contact-form-section {
    background: #fff;
    padding: 60px 60px 110px;
  }
  .contact-form-inner {
    max-width: 1300px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 1.7fr;
    gap: 70px; align-items: start;
  }
  .contact-form-side {
    position: sticky; top: 110px;
  }
  .contact-form-side .section-eyebrow {
    font-size: 13px; font-weight: 600; letter-spacing: 2px;
    color: #111; margin-bottom: 18px;
  }
  .contact-form-side h2 {
    font-size: 56px; font-weight: 700; color: var(--accent);
    letter-spacing: -1px; line-height: 1.05;
    margin-bottom: 22px;
  }
  .contact-form-side p {
    font-size: 17px; line-height: 1.7;
    color: #1a1a1a; margin-bottom: 18px;
  }
  .contact-form-checklist {
    list-style: none; padding: 0; margin-top: 26px;
  }
  .contact-form-checklist li {
    display: flex; align-items: flex-start; gap: 12px;
    font-size: 15px; line-height: 1.55;
    color: #1a1a1a; padding: 8px 0;
  }
  .contact-form-checklist li::before {
    content: "✓";
    flex-shrink: 0; width: 22px; height: 22px;
    border-radius: 50%; background: var(--accent);
    color: #fff; font-weight: 800; font-size: 12px;
    display: inline-flex; align-items: center; justify-content: center;
    margin-top: 2px;
  }

  .contact-form {
    background: #f3f3f3;
    border-radius: 18px;
    padding: 48px 44px;
  }
  .form-row {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 28px; margin-bottom: 28px;
  }
  .form-field { display: flex; flex-direction: column; }
  .form-field label {
    font-size: 16px; font-weight: 700; color: #111;
    margin-bottom: 10px;
  }
  .form-field label .req { color: var(--accent); }
  .form-field input,
  .form-field textarea {
    background: #fff;
    border: 1px solid transparent;
    border-radius: 6px;
    padding: 16px 18px;
    font-size: 16px; font-family: inherit;
    color: #111;
    transition: border-color 0.2s ease, background 0.2s ease;
    width: 100%;
  }
  .form-field input::placeholder,
  .form-field textarea::placeholder { color: #888; }
  .form-field input:focus,
  .form-field textarea:focus {
    outline: none; border-color: var(--accent);
    background: #fff;
  }
  .form-field textarea { resize: vertical; min-height: 140px; }

  .name-row {
    display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
  }
  .name-row input {
    background: #fff; border: 1px solid transparent;
    border-radius: 6px; padding: 16px 18px;
    font-size: 16px; font-family: inherit; color: #111;
  }
  .name-row input:focus { outline: none; border-color: var(--accent); }

  .checkbox-group { margin-top: 20px; margin-bottom: 36px; }
  .checkbox-group .group-label {
    font-size: 16px; font-weight: 700; color: #111;
    margin-bottom: 18px;
  }
  .checkbox-grid {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 12px 24px;
  }
  .check-item {
    display: flex; align-items: center; gap: 10px;
    cursor: pointer; font-size: 15px; color: #1a1a1a;
    user-select: none;
  }
  .check-item input { display: none; }
  .check-item .box {
    width: 20px; height: 20px;
    border: 1.5px solid #888; border-radius: 4px;
    display: inline-flex; align-items: center; justify-content: center;
    transition: background 0.2s ease, border-color 0.2s ease;
    flex-shrink: 0;
  }
  .check-item input:checked + .box {
    background: var(--accent); border-color: var(--accent);
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

  /* RESPONSIVE */
  @media (max-width: 1024px) {
    .contact-methods-inner { grid-template-columns: 1fr; gap: 18px; }
    .contact-form-inner { grid-template-columns: 1fr; gap: 30px; }
    .contact-form-side { position: static; }
    .page-header h1 { font-size: 48px; }
    .contact-form-side h2 { font-size: 42px; }
  }
  @media (max-width: 900px) {
    .page-header { margin-top: 80px; padding: 60px 24px 70px; }
    .page-header h1 { font-size: 40px; }
    .contact-methods { padding: 70px 24px 40px; }
    .contact-method { padding: 32px 28px; }
    .contact-form-section { padding: 40px 24px 80px; }
    .contact-form { padding: 36px 28px; }
    .form-row { grid-template-columns: 1fr; gap: 18px; margin-bottom: 18px; }
    .checkbox-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 600px) {
    .page-header { margin-top: 72px; padding: 50px 18px 60px; }
    .page-header h1 { font-size: 32px; letter-spacing: -0.5px; }
    .page-header p { font-size: 15px; }
    .contact-methods { padding: 50px 18px 30px; }
    .contact-form-section { padding: 30px 18px 60px; }
    .contact-form { padding: 28px 22px; }
    .contact-form-side h2 { font-size: 32px; }
    .name-row { grid-template-columns: 1fr; gap: 12px; }
    .submit-btn { width: 100%; }
  }
      `}} />

      <header className="page-header">
        <p className="section-eyebrow">CONTACT US</p>
        <h1>Let&apos;s have a talk!</h1>
        <p>
          Tell us about your brand, your goals, and what success looks like for
          you — we&apos;ll come back with a tailored plan within one business day.
        </p>
      </header>

      <section className="contact-methods">
        <div className="contact-methods-inner">
          <div className="contact-method">
            <div className="contact-method-icon">☎</div>
            <span className="contact-method-label">Phone</span>
            <a href="tel:+916000955672" className="contact-method-primary">+91 60009 55672</a>
            <span className="contact-method-secondary">
              Also <a href="tel:+918099531944">+91 80995 31944</a>
            </span>
          </div>
          <div className="contact-method">
            <div className="contact-method-icon">@</div>
            <span className="contact-method-label">Email</span>
            <a href="mailto:info@thesocialverse.co.in" className="contact-method-primary">info@thesocialverse.co.in</a>
            <span className="contact-method-secondary">We reply within one business day.</span>
          </div>
          <div className="contact-method">
            <div className="contact-method-icon">✦</div>
            <span className="contact-method-label">WhatsApp</span>
            <a
              href="https://wa.me/916000955672?text=Hi%20Social%20Verse%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method-primary"
            >
              Chat with us
            </a>
            <span className="contact-method-secondary">Mon – Sat, 10am – 7pm IST</span>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-inner">
          <div className="contact-form-side">
            <p className="section-eyebrow">SAY HELLO</p>
            <h2>Start a conversation</h2>
            <p>
              Share a few details about your brand and goals — we&apos;ll put together
              a tailored proposal for your business.
            </p>
            <ul className="contact-form-checklist">
              <li>Free initial discovery call</li>
              <li>Custom proposal within 48 hours</li>
              <li>Tailored to your goals &amp; budget</li>
              <li>No-pressure conversation</li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label>Name <span className="req">*</span></label>
                <div className="name-row">
                  <input type="text" name="firstName" placeholder="First name" required />
                  <input type="text" name="lastName" placeholder="Last name" />
                </div>
              </div>
              <div className="form-field"></div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>Email <span className="req">*</span></label>
                <input type="email" name="email" placeholder="Enter your email id" required />
              </div>
              <div className="form-field">
                <label>Phone <span className="req">*</span></label>
                <input type="tel" name="phone" placeholder="Enter your contact number" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>Company <span className="req">*</span></label>
                <input type="text" name="company" placeholder="Please enter your business name" required />
              </div>
              <div className="form-field">
                <label>Website</label>
                <input type="url" name="website" placeholder="https://www.example.com" />
              </div>
            </div>

            <div className="checkbox-group">
              <div className="group-label">
                What services can we provide you? <span className="req">*</span>
              </div>
              <div className="checkbox-grid">
                <label className="check-item"><input type="checkbox" name="svc" value="Social Media Marketing" /><span className="box"></span>Social Media Marketing</label>
                <label className="check-item"><input type="checkbox" name="svc" value="Performance Marketing" /><span className="box"></span>Performance Marketing</label>
                <label className="check-item"><input type="checkbox" name="svc" value="Content Production" /><span className="box"></span>Content Production</label>
                <label className="check-item"><input type="checkbox" name="svc" value="Branding & Creative Strategy" /><span className="box"></span>Branding &amp; Creative Strategy</label>
                <label className="check-item"><input type="checkbox" name="svc" value="Search Engine Optimization (SEO)" /><span className="box"></span>Search Engine Optimization (SEO)</label>
                <label className="check-item"><input type="checkbox" name="svc" value="Website Development" /><span className="box"></span>Website Development</label>
                <label className="check-item"><input type="checkbox" name="svc" value="App Development" /><span className="box"></span>App Development</label>
                <label className="check-item"><input type="checkbox" name="svc" value="Influencer Marketing" /><span className="box"></span>Influencer Marketing</label>
                <label className="check-item"><input type="checkbox" name="svc" value="Outdoor Marketing" /><span className="box"></span>Outdoor Marketing</label>
              </div>
            </div>

            <div className="form-field" style={{ marginBottom: 32 }}>
              <label>Message</label>
              <textarea name="message" placeholder="Tell us about your project, goals, or timeline."></textarea>
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}
