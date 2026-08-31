import React from 'react';
import { DCLogic, useDC } from '../lib/dc.js';
import { cssText } from '../lib/cssText.js';

class Component extends DCLogic {
  state = { sent: false };
  renderVals() {
    return {
      megaLinks: [
        { t: 'Social Media Marketing', href: 'services.html#s-smm', sq: 'width:10px; height:10px; flex:none; background:#ffd23f;' },
        { t: 'Performance Marketing', href: 'services.html#s-perf', sq: 'width:10px; height:10px; flex:none; background:#ff6b35;' },
        { t: 'Content Production', href: 'services.html#s-content', sq: 'width:10px; height:10px; flex:none; background:#2ec4b6;' },
        { t: 'Branding and Creative Strategy', href: 'services.html#s-brand', sq: 'width:10px; height:10px; flex:none; background:#ff8fab;' },
        { t: 'SEO', href: 'services.html#s-seo', sq: 'width:10px; height:10px; flex:none; background:#ab905c;' },
        { t: 'Website Development', href: 'services.html#s-web', sq: 'width:10px; height:10px; flex:none; background:#1d1a14;' },
        { t: 'App Development', href: 'services.html#s-app', sq: 'width:10px; height:10px; flex:none; background:#ffd23f;' },
        { t: 'Influencer Marketing', href: 'services.html#s-influencer', sq: 'width:10px; height:10px; flex:none; background:#ff6b35;' },
        { t: 'Outdoor Marketing', href: 'services.html#s-outdoor', sq: 'width:10px; height:10px; flex:none; background:#2ec4b6;' }
      ],
      sent: this.state.sent,
      notSent: !this.state.sent,
      reset: () => this.setState({ sent: false }),
      submit: (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const subject = encodeURIComponent(`New business: ${fd.get('name') || 'inquiry'}${fd.get('brand') ? ', ' + fd.get('brand') : ''}`);
        const body = encodeURIComponent(
          `Name: ${fd.get('name') || 'Not provided'}\nBrand: ${fd.get('brand') || 'Not provided'}\nEmail: ${fd.get('email') || 'Not provided'}\nServices: ${(fd.getAll('services') || []).join(', ') || 'Not provided'}\n\n${fd.get('msg') || ''}`
        );
        window.location.href = `mailto:info@thesocialverse.co.in?subject=${subject}&body=${body}`;
        this.setState({ sent: true });
      }
    };
  }
  componentDidMount() { this._c = []; this.boot(); }
  componentWillUnmount() {
    (this._c || []).forEach(f => { try { f() } catch (e) { } });
    try { this.dots && this.dots.dispose() } catch (e) { }
  }
  on(t, ev, fn, o) { t.addEventListener(ev, fn, o); this._c.push(() => t.removeEventListener(ev, fn, o)); }
  boot() {
    const P = this.props || {};
    const calm = (P.motion ?? 'full') === 'calm' || matchMedia('(prefers-reduced-motion: reduce)').matches;
    const $ = id => document.getElementById(id);
    // page wipe
    const wipe = $('wipe');
    if (wipe) {
      if (sessionStorage.getItem('tsv_wipe') === '1') {
        sessionStorage.removeItem('tsv_wipe');
        wipe.style.transform = 'translateX(0)';
        requestAnimationFrame(() => requestAnimationFrame(() => {
          wipe.style.transition = 'transform .6s cubic-bezier(.76,0,.24,1)';
          wipe.style.transform = 'translateX(-108%)';
        }));
      }
      this.on(document, 'click', e => {
        const a = e.target.closest && e.target.closest('a[href$=".html"]');
        if (!a || calm || e.metaKey || e.ctrlKey || a.target === '_blank') return;
        const href = a.getAttribute('href');
        if (!href || href.startsWith('#')) return;
        if (a.__wiped) { a.__wiped = false; return; }
        e.preventDefault();
        try { sessionStorage.setItem('tsv_wipe', '1'); } catch (err) { }
        wipe.style.transition = 'transform .55s cubic-bezier(.76,0,.24,1)';
        wipe.style.transform = 'translateX(0)';
        a.__wiped = true;
        setTimeout(() => { a.click(); }, 560);
      });
    }
    // footer reveal + clocks
    const sheet = $('sheet'), foot = $('bigFoot'), space = $('footSpace');
    const fitFoot = () => {
      if (!foot) return;
      foot.style.position = 'fixed';
      const tooTall = innerWidth < 720 || foot.offsetHeight > innerHeight * 0.92;
      foot.style.position = tooTall ? 'static' : 'fixed';
      if (space) space.style.height = tooTall ? '0px' : foot.offsetHeight + 'px';
      if (sheet) sheet.style.marginBottom = '0px';
    };
    fitFoot(); this.on(window, 'resize', fitFoot); setTimeout(fitFoot, 600); setTimeout(fitFoot, 1600);
    const clocks = [...document.querySelectorAll('[data-clock]')];
    const setClocks = () => clocks.forEach(el => {
      try { el.textContent = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', timeZone: el.getAttribute('data-clock') }).format(new Date()); } catch (e) { }
    });
    setClocks();
    const ci = setInterval(setClocks, 30000);
    this._c.push(() => clearInterval(ci));
    // mega menu
    const nav = $('nav'), mega = $('mega'), megaBtn = $('megaBtn'), caret = $('megaCaret');
    let megaOpen = false, megaT = 0;
    const setMega = open => {
      megaOpen = open;
      if (!mega) return;
      mega.style.opacity = open ? '1' : '0';
      mega.style.transform = open ? 'none' : 'translateY(-10px)';
      mega.style.pointerEvents = open ? 'auto' : 'none';
      const shEl = document.getElementById('sheet'); if (shEl) shEl.style.overflow = open ? 'visible' : 'clip';
      if (caret) caret.style.transform = open ? 'rotate(180deg)' : 'none';
    };
    if (megaBtn && mega && nav) {
      let openY = 0;
      const openMega = () => { clearTimeout(megaT); openY = scrollY; setMega(true); };
      this.on(megaBtn, 'pointerenter', openMega);
      this.on(megaBtn, 'click', () => {
        if (!megaOpen) { openMega(); return; }
        setMega(false);
        try { sessionStorage.setItem('tsv_wipe', '1'); } catch (err) { }
        const w = document.getElementById('wipe');
        if (w) {
          w.style.transition = 'transform .55s cubic-bezier(.76,0,.24,1)';
          w.style.transform = 'translateX(0)';
          setTimeout(() => { const t = document.createElement('a'); t.href = 'services.html'; t.__wiped = true; document.body.appendChild(t); t.click(); t.remove(); }, 560);
        } else { const t = document.createElement('a'); t.href = 'services.html'; t.__wiped = true; document.body.appendChild(t); t.click(); t.remove(); }
      });
      this.on(nav, 'pointerleave', () => { megaT = setTimeout(() => setMega(false), 300); });
      this.on(mega, 'pointerenter', () => clearTimeout(megaT));
      this.on(window, 'scroll', () => { if (megaOpen && Math.abs(scrollY - openY) > 48) setMega(false); }, { passive: true });
    }
    // reveals
    const mls = [...document.querySelectorAll('[data-ml]')];
    mls.forEach(el => { el.style.transform = 'translateY(115%)'; });
    const mrev = el => {
      const d = (+el.getAttribute('data-mld') || 0) * 110;
      el.style.transition = `transform 1.05s cubic-bezier(.19,1,.22,1) ${d}ms`;
      requestAnimationFrame(() => requestAnimationFrame(() => { el.style.transform = 'none'; }));
    };
    const mio = new IntersectionObserver(es => es.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.querySelectorAll('[data-ml]').forEach(mrev);
      mio.unobserve(en.target);
    }), { threshold: .15 });
    const mhosts = new Set();
    mls.forEach(el => { const h = el.closest('h1,h2') || el.parentElement; if (h) mhosts.add(h); });
    mhosts.forEach(h => mio.observe(h));
    this._c.push(() => mio.disconnect());
    const rvs = [...document.querySelectorAll('[data-rv]')];
    rvs.forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(16px)'; });
    const io = new IntersectionObserver(es => es.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target, d = (+el.getAttribute('data-rvd') || 0) * 110;
      el.style.transition = `opacity .9s cubic-bezier(.22,1,.36,1) ${d}ms, transform .9s cubic-bezier(.22,1,.36,1) ${d}ms`;
      el.style.opacity = '1'; el.style.transform = 'none';
      io.unobserve(el);
    }), { threshold: .12 });
    rvs.forEach(el => io.observe(el));
    this._c.push(() => io.disconnect());
    // magnetic CTAs
    if (!calm && matchMedia('(pointer: fine)').matches) {
      document.querySelectorAll('[data-mag]').forEach(el => {
        const mv = e => { const b = el.getBoundingClientRect(); el.style.transform = `translate(${(e.clientX - b.left - b.width / 2) * .2}px, ${(e.clientY - b.top - b.height / 2) * .2}px)`; };
        const lv = () => { el.style.transition = 'transform .4s cubic-bezier(.34,1.56,.64,1), background .25s'; el.style.transform = 'none'; setTimeout(() => { el.style.transition = 'background .25s'; }, 400); };
        this.on(el, 'pointermove', mv); this.on(el, 'pointerleave', lv);
      });
    }
    // gold dot field
    import('../lib/three-fx.js').then(async fx => {
      const dc = $('dotCanvas');
      if (dc) {
        this.dots = await fx.dotField(dc, { calm });
        const hd = $('chero');
        this.on(hd, 'pointermove', e => this.dots.setPointer(e.clientX, e.clientY));
        this.on(hd, 'pointerleave', () => this.dots.clearPointer());
      }
    }).catch(err => console.warn('3D disabled:', err));
  }
}

export default function ContactPage() {
  const vals = useDC(Component);
  return (
    <>



<div id="wipe" aria-hidden="true" style={{"position": "fixed", "inset": "0", "zIndex": "600", "pointerEvents": "none", "transform": "translateX(108%)", "display": "flex"}}>
  <div style={{"width": "34%", "height": "100%", "background": "#0f0d0a"}}></div>
  <div style={{"flex": "1", "height": "100%", "display": "flex", "flexDirection": "column"}}>
    <div style={{"flex": "1", "background": "repeating-linear-gradient(45deg, #ffd23f 0 38px, #ff6b35 38px 76px, #ff8fab 76px 114px, #2ec4b6 114px 152px, #0f0d0a 152px 190px)"}}></div>
    <div style={{"flex": "1", "background": "repeating-linear-gradient(-45deg, #ffd23f 0 38px, #ff6b35 38px 76px, #ff8fab 76px 114px, #2ec4b6 114px 152px, #0f0d0a 152px 190px)"}}></div>
  </div>
</div>

<div id="sheet" style={{"position": "relative", "zIndex": "2", "minHeight": "100vh", "background": "var(--color-bg)", "borderRadius": "0 0 28px 28px", "boxShadow": "0 30px 60px rgba(0,0,0,.35)"}}>

<nav id="nav" data-screen-label="Nav" style={{"position": "sticky", "top": "0", "zIndex": "90", "background": "rgba(246,243,236,.92)", "backdropFilter": "blur(14px)", "borderBottom": "2px solid var(--color-divider)"}}>
  <div style={{"display": "flex", "alignItems": "center", "gap": "clamp(14px,2.2vw,32px)", "padding": "16px clamp(24px,6vw,96px)"}}>
    <a href="index.html" style={{"display": "flex", "alignItems": "center", "textDecoration": "none", "marginRight": "auto"}}>
      <img src="logo-ink.png" alt="The Social Verse" width="351" height="236" style={{"display": "block", "height": "clamp(30px,3.2vw,40px)", "width": "auto"}} />
    </a>
    <div style={{"display": "flex", "alignItems": "center", "gap": "clamp(14px,2.2vw,32px)", "marginRight": "auto", "flexWrap": "wrap"}}>
      <a href="index.html" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(var(--color-accent-600),var(--color-accent-600))", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hvc-1">Home</a>
      <a href="portfolio.html" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(#ff6b35,#ff6b35)", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hvc-1">Portfolio</a>
      <a href="case-studies.html" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(#2ec4b6,#2ec4b6)", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hvc-1">Case Studies</a>
      <div id="megaWrap" style={{"position": "static"}}>
        <button id="megaBtn" type="button" style={{"border": "0", "background": "none", "font": "inherit", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "padding": "0 0 2px", "display": "inline-flex", "alignItems": "center", "gap": "6px"}} className="hvc-2">Services <span id="megaCaret" style={{"fontSize": "10px", "transition": "transform .3s"}}>▾</span></button>
      </div>
      <a href="about.html" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(#ff8fab,#ff8fab)", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hvc-1">About us</a>
      <a href="contact.html" aria-current="page" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-accent-700)", "borderBottom": "2px solid var(--color-accent)", "paddingBottom": "2px"}}>Contact us</a>
    </div>
    <a data-mag href="contact.html" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "letterSpacing": ".04em", "color": "var(--color-bg)", "background": "#1d1a14", "padding": "11px 20px", "borderRadius": "999px", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "background .3s"}} className="hvc-3">Let's talk →</a>
  </div>
  <div id="mega" style={{"position": "absolute", "left": "0", "right": "0", "top": "100%", "background": "var(--color-bg)", "borderBottom": "2px solid var(--color-divider)", "boxShadow": "0 24px 48px rgba(43,40,32,.18)", "opacity": "0", "transform": "translateY(-10px)", "pointerEvents": "none", "transition": "opacity .35s, transform .35s"}}>
    <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(280px,1fr))", "gap": "clamp(24px,4vw,64px)", "padding": "clamp(24px,3vw,44px) clamp(24px,6vw,96px)"}}>
      <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "2px clamp(16px,2vw,32px)"}}>
        {vals.megaLinks.map((ml, $index) => (<React.Fragment key={$index}>
          <a href={ml.href} style={{"display": "flex", "alignItems": "center", "gap": "12px", "textDecoration": "none", "padding": "11px 8px", "borderBottom": "2px solid var(--color-divider)", "transition": "background .25s, padding-left .25s"}} className="hvc-4">
            <span style={cssText(ml.sq)}></span><span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(14px,1.3vw,17px)", "letterSpacing": "-.01em", "color": "var(--color-text)"}}>{ml.t}</span>
          </a>
        </React.Fragment>))}
      </div>
      <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "18px", "alignContent": "start"}}>
        <a href="portfolio.html" style={{"textDecoration": "none"}}>
          <span style={{"display": "block", "overflow": "hidden", "border": "2px solid var(--color-divider)"}}><span style={{"display": "block", "aspectRatio": "16/10", "background": "var(--color-neutral-200)"}}><image-slot id="mega-feat-1" shape="rect" placeholder="Featured creative" src="work/creatives/social-grid.jpg"></image-slot></span></span>
          <span style={{"display": "block", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "14px", "marginTop": "10px", "color": "var(--color-text)"}}>Our creativity</span>
        </a>
        <a href="case-studies.html" style={{"textDecoration": "none"}}>
          <span style={{"display": "block", "overflow": "hidden", "border": "2px solid var(--color-divider)"}}><span style={{"display": "block", "aspectRatio": "16/10", "background": "var(--color-neutral-200)"}}><image-slot id="mega-feat-2" shape="rect" placeholder="Featured case" src="work/case/ahvi-storefront.jpg"></image-slot></span></span>
          <span style={{"display": "block", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "14px", "marginTop": "10px", "color": "var(--color-text)"}}>Case studies</span>
        </a>
      </div>
    </div>
  </div>
</nav>

<header id="chero" data-screen-label="Contact header" style={{"position": "relative", "overflow": "hidden", "padding": "clamp(70px,9vw,130px) clamp(24px,6vw,96px) clamp(36px,4.5vw,56px)"}}>
  <canvas id="dotCanvas" style={{"position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block", "pointerEvents": "none"}}></canvas>
  <h1 style={{"position": "relative", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(46px,6.8vw,110px)", "lineHeight": "1.03", "letterSpacing": "-.028em", "margin": "0"}}>
    <span style={{"display": "block", "overflow": "hidden", "paddingBottom": ".12em", "marginBottom": "-.12em"}}><span data-ml data-mld="0" style={{"display": "block"}}>Have Something In Mind?</span></span>
  </h1>
  <p data-rv data-rvd="2" style={{"position": "relative", "fontSize": "clamp(15px,1.3vw,17px)", "lineHeight": "1.65", "margin": "clamp(24px,3.5vh,40px) 0 0", "maxWidth": "46ch", "color": "color-mix(in srgb, var(--color-text) 72%, transparent)"}}>Maybe you're starting a brand. Maybe your current marketing isn't doing much. Maybe you just know your brand could be doing better. Whatever it is, tell us. We'll take it from there.</p>
  <p data-rv data-rvd="3" style={{"position": "relative", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(20px,2.2vw,30px)", "lineHeight": "1.2", "letterSpacing": "-.02em", "margin": "clamp(16px,2vh,24px) 0 0", "color": "var(--color-text)"}}>Let's talk.</p>
</header>

<section data-screen-label="Contact form" style={{"borderTop": "2px solid var(--color-divider)", "padding": "clamp(48px,6vw,90px) clamp(24px,6vw,96px) clamp(90px,11vw,160px)", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(320px,1fr))", "gap": "clamp(36px,6vw,110px)", "alignItems": "start"}}>
  <div>
    {vals.notSent ? (<>
      <form onSubmit={vals.submit} style={{"display": "flex", "flexDirection": "column", "gap": "24px", "maxWidth": "560px"}}>
        <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(220px,1fr))", "gap": "18px"}}>
          <div className="field">
            <label htmlFor="cf-name">Your name</label>
            <input id="cf-name" name="name" type="text" required className="input" />
          </div>
          <div className="field">
            <label htmlFor="cf-brand">Brand / company</label>
            <input id="cf-brand" name="brand" type="text" className="input" />
          </div>
        </div>
        <div className="field">
          <label htmlFor="cf-email">Email</label>
          <input id="cf-email" name="email" type="email" required className="input" />
        </div>
        <div className="field">
          <label>What services can we provide you?</label>
          <div style={{"flexWrap": "wrap"}} className="seg">
            <label className="seg-opt"><input type="checkbox" name="services" value="Social Media Marketing" /><span>Social Media Marketing</span></label>
            <label className="seg-opt"><input type="checkbox" name="services" value="Performance Marketing" /><span>Performance Marketing</span></label>
            <label className="seg-opt"><input type="checkbox" name="services" value="Content Production" /><span>Content Production</span></label>
            <label className="seg-opt"><input type="checkbox" name="services" value="Branding and Creative Strategy" /><span>Branding and Creative Strategy</span></label>
            <label className="seg-opt"><input type="checkbox" name="services" value="SEO" /><span>SEO</span></label>
            <label className="seg-opt"><input type="checkbox" name="services" value="Website Development" /><span>Website Development</span></label>
            <label className="seg-opt"><input type="checkbox" name="services" value="App Development" /><span>App Development</span></label>
            <label className="seg-opt"><input type="checkbox" name="services" value="Influencer Marketing" /><span>Influencer Marketing</span></label>
            <label className="seg-opt"><input type="checkbox" name="services" value="Outdoor Marketing" /><span>Outdoor Marketing</span></label>
          </div>
        </div>
        <div className="field">
          <label htmlFor="cf-msg">The brief, briefly</label>
          <textarea id="cf-msg" name="msg" required placeholder="A launch, a rebrand, a platform…" className="input"></textarea>
        </div>
        <div style={{"display": "flex", "alignItems": "center", "gap": "16px", "flexWrap": "wrap"}}>
          <button data-mag type="submit" className="btn btn-primary">Start A Conversation</button>
          <span style={{"fontSize": "12px", "color": "color-mix(in srgb, var(--color-text) 55%, transparent)"}}>Opens your mail app, pre-filled.</span>
        </div>
      </form>
    </>) : null}
    {vals.sent ? (<>
      <div style={{"border": "2px solid var(--color-divider)", "padding": "clamp(28px,4vw,48px)", "maxWidth": "560px"}}>
        <div style={{"fontSize": "11px", "letterSpacing": ".18em", "textTransform": "uppercase", "fontWeight": "600", "color": "var(--color-accent-700)", "marginBottom": "16px"}}>Message drafted</div>
        <div style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(26px,3.2vw,40px)", "lineHeight": "1.05", "letterSpacing": "-.02em", "marginBottom": "14px"}}>Loud and clear.</div>
        <p style={{"fontSize": "15px", "lineHeight": "1.65", "margin": "0 0 22px", "maxWidth": "44ch", "color": "color-mix(in srgb, var(--color-text) 72%, transparent)"}}>Your mail app opened with everything filled in. Send it there and we're on it. If it didn't, write to <a href="mailto:info@thesocialverse.co.in" style={{"color": "var(--color-accent-700)", "fontWeight": "600"}}>info@thesocialverse.co.in</a> directly.</p>
        <button type="button" onClick={vals.reset} className="btn btn-secondary">Write another</button>
      </div>
    </>) : null}
  </div>
  <div style={{"display": "flex", "flexDirection": "column", "gap": "clamp(28px,4vw,44px)", "maxWidth": "440px"}}>
    <div>
      <div style={{"fontSize": "11px", "letterSpacing": ".16em", "textTransform": "uppercase", "color": "color-mix(in srgb, var(--color-text) 50%, transparent)", "marginBottom": "14px"}}>Skip the form</div>
      <div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
        <a href="tel:6000955672" style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(17px,1.8vw,23px)", "letterSpacing": "-.01em", "textDecoration": "none"}}>6000955672</a>
        <a href="tel:8099531944" style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(17px,1.8vw,23px)", "letterSpacing": "-.01em", "textDecoration": "none"}}>8099531944</a>
        <a href="mailto:info@thesocialverse.co.in" style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(17px,1.8vw,23px)", "letterSpacing": "-.01em", "textDecoration": "none"}}>info@thesocialverse.co.in</a>
      </div>
    </div>
    <div style={{"borderTop": "2px solid var(--color-divider)", "paddingTop": "24px"}}>
      <div style={{"fontSize": "11px", "letterSpacing": ".16em", "textTransform": "uppercase", "color": "color-mix(in srgb, var(--color-text) 50%, transparent)", "marginBottom": "14px"}}>Lurk first</div>
      <div style={{"display": "flex", "gap": "10px", "flexWrap": "wrap"}}>
        <a href="https://instagram.com" target="_blank" rel="noopener" style={{"textDecoration": "none"}} className="btn btn-secondary">Instagram</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener" style={{"textDecoration": "none"}} className="btn btn-secondary">LinkedIn</a>
        <a href="https://youtube.com" target="_blank" rel="noopener" style={{"textDecoration": "none"}} className="btn btn-secondary">YouTube</a>
        <a href="https://x.com" target="_blank" rel="noopener" style={{"textDecoration": "none"}} className="btn btn-secondary">X</a>
      </div>
    </div>
  </div>
</section>

</div>

<div id="footSpace" aria-hidden="true" style={{"height": "480px"}}></div>

<footer id="bigFoot" data-screen-label="Footer" style={{"position": "fixed", "left": "0", "right": "0", "bottom": "0", "zIndex": "1", "background": "#0f0d0a", "color": "#f1ece1", "padding": "clamp(36px,5vw,64px) clamp(24px,6vw,96px) 24px", "overflow": "hidden"}}>
  <div style={{"display": "flex", "justifyContent": "center", "gap": "clamp(12px,2vw,24px)", "flexWrap": "wrap", "marginBottom": "clamp(24px,3.5vw,40px)"}}>
    <a href="tel:6000955672" style={{"textDecoration": "none", "color": "#f1ece1", "border": "2px solid rgba(241,236,225,.3)", "borderRadius": "999px", "padding": "9px 18px", "fontSize": "12px", "display": "inline-flex", "gap": "8px", "alignItems": "center", "transition": "border-color .3s"}} className="hvc-5"><strong style={{"fontFamily": "var(--font-heading)"}}>Call:</strong> 6000955672</a>
    <a href="tel:8099531944" style={{"textDecoration": "none", "color": "#f1ece1", "border": "2px solid rgba(241,236,225,.3)", "borderRadius": "999px", "padding": "9px 18px", "fontSize": "12px", "display": "inline-flex", "gap": "8px", "alignItems": "center", "transition": "border-color .3s"}} className="hvc-6"><strong style={{"fontFamily": "var(--font-heading)"}}>Call:</strong> 8099531944</a>
    <a href="mailto:info@thesocialverse.co.in" style={{"textDecoration": "none", "color": "#f1ece1", "border": "2px solid rgba(241,236,225,.3)", "borderRadius": "999px", "padding": "9px 18px", "fontSize": "12px", "display": "inline-flex", "gap": "8px", "alignItems": "center", "transition": "border-color .3s"}} className="hvc-7"><strong style={{"fontFamily": "var(--font-heading)"}}>Email:</strong> info@thesocialverse.co.in</a>
  </div>
  <p style={{"textAlign": "center", "fontSize": "13.5px", "lineHeight": "1.7", "maxWidth": "64ch", "margin": "0 auto clamp(24px,3.5vw,40px)", "color": "rgba(241,236,225,.7)"}}>Strategy, content, ads, branding, websites and everything in between.</p>
  <div aria-label="The Social Verse" style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "10px"}}>
    <span style={{"display": "flex", "alignItems": "baseline", "gap": "clamp(8px,1vw,18px)", "whiteSpace": "nowrap"}}><span aria-hidden="true" style={{"width": "clamp(14px,1.8vw,28px)", "height": "clamp(14px,1.8vw,28px)", "background": "var(--color-accent)", "flex": "none", "alignSelf": "center"}}></span><span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(38px,9.6vw,164px)", "lineHeight": ".95", "letterSpacing": "-.03em", "color": "#f1ece1"}}>The Social Verse</span></span>
    <span style={{"fontSize": "clamp(10px,1.2vw,14px)", "letterSpacing": ".34em", "textTransform": "uppercase", "fontWeight": "600", "color": "#dcc89d"}}>All eyes on your brand</span>
  </div>
  <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "18px 36px", "flexWrap": "wrap", "borderTop": "2px solid rgba(241,236,225,.22)", "marginTop": "clamp(24px,3vw,40px)", "paddingTop": "18px"}}>
    <div style={{"display": "flex", "gap": "16px", "flexWrap": "wrap"}}>
      <a href="index.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hvc-8">Home</a>
      <a href="portfolio.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hvc-9">Portfolio</a>
      <a href="case-studies.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hvc-10">Case Studies</a>
      <a href="services.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hvc-11">Services</a>
      <a href="about.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hvc-8">About us</a>
      <a href="contact.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hvc-9">Contact us</a>
      <a href="clients.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hvc-10">Clients</a>
      <a href="blog.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hvc-11">Blog</a>
    </div>
    <div style={{"display": "flex", "gap": "16px", "flexWrap": "wrap"}}>
      <a href="https://instagram.com" target="_blank" rel="noopener" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "color": "#f1ece1"}} className="hvc-8">Instagram</a>
      <a href="https://facebook.com" target="_blank" rel="noopener" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "color": "#f1ece1"}} className="hvc-9">Facebook</a>
      <a href="https://linkedin.com" target="_blank" rel="noopener" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "color": "#f1ece1"}} className="hvc-10">LinkedIn</a>
      <a href="https://youtube.com" target="_blank" rel="noopener" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "color": "#f1ece1"}} className="hvc-11">YouTube</a>
    </div>
    <div style={{"textAlign": "right", "fontSize": "11px", "color": "rgba(241,236,225,.55)"}}>© The Social Verse</div>
  </div>
</footer>

    </>
  );
}
