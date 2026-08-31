import React from 'react';
import { DCLogic, useDC } from '../lib/dc.js';
import { cssText } from '../lib/cssText.js';

class Component extends DCLogic {
  renderVals() { return { megaLinks: [
        { t: 'Social Media Marketing', href: 'services.html#s-smm', sq: 'width:10px; height:10px; flex:none; background:#ffd23f;' },
        { t: 'Performance Marketing', href: 'services.html#s-perf', sq: 'width:10px; height:10px; flex:none; background:#ff6b35;' },
        { t: 'Content Production', href: 'services.html#s-content', sq: 'width:10px; height:10px; flex:none; background:#2ec4b6;' },
        { t: 'Branding and Creative Strategy', href: 'services.html#s-brand', sq: 'width:10px; height:10px; flex:none; background:#ff8fab;' },
        { t: 'SEO', href: 'services.html#s-seo', sq: 'width:10px; height:10px; flex:none; background:#ab905c;' },
        { t: 'Website Development', href: 'services.html#s-web', sq: 'width:10px; height:10px; flex:none; background:#1d1a14;' },
        { t: 'App Development', href: 'services.html#s-app', sq: 'width:10px; height:10px; flex:none; background:#ffd23f;' },
        { t: 'Influencer Marketing', href: 'services.html#s-influencer', sq: 'width:10px; height:10px; flex:none; background:#ff6b35;' },
        { t: 'Outdoor Marketing', href: 'services.html#s-outdoor', sq: 'width:10px; height:10px; flex:none; background:#2ec4b6;' }
      ] }; }
  componentDidMount() { this._c = []; this.boot(); }
  componentWillUnmount() { (this._c || []).forEach(f => { try { f() } catch (e) { } }); }
  on(t, ev, fn, o) { t.addEventListener(ev, fn, o); this._c.push(() => t.removeEventListener(ev, fn, o)); }
  boot() {
    const P = this.props || {};
    const calm = (P.motion ?? 'full') === 'calm' || matchMedia('(prefers-reduced-motion: reduce)').matches;
    const $ = id => document.getElementById(id);
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
        const w = $('wipe');
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
    const kick = () => document.querySelectorAll('video[data-auto]').forEach(v => { v.muted = true; if (v.paused) { const p = v.play(); if (p) p.catch(() => { }); } });
    kick();
    let vAlive = true;
    const vPoll = () => {
      if (!vAlive) return;
      document.querySelectorAll('video[data-auto]').forEach(v => {
        const r = v.getBoundingClientRect();
        const vis = r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth;
        if (vis && v.paused) { const p = v.play(); if (p) p.catch(() => { v.muted = true; }); }
        else if (!vis && !v.paused) v.pause();
      });
      setTimeout(() => requestAnimationFrame(vPoll), 400);
    };
    requestAnimationFrame(vPoll);
    this._c.push(() => { vAlive = false; });
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
    document.querySelectorAll('[data-case]').forEach(cs => {
      const z = cs.querySelector('[data-zoom]');
      this.on(cs, 'pointerenter', () => { if (z && !calm) z.style.transform = 'scale(1.04)'; if (!calm && cs.style.borderWidth) { if (cs.__b === undefined) cs.__b = cs.style.borderColor; cs.style.borderColor = ['#ff6b35','#2ec4b6','#ffd23f','#ff8fab'][Math.floor(Math.random()*4)]; } });
      this.on(cs, 'pointerleave', () => { if (z) z.style.transform = 'scale(1)'; if (cs.__b !== undefined) cs.style.borderColor = cs.__b; });
    });
    if (!calm && matchMedia('(pointer: fine)').matches) {
      document.querySelectorAll('[data-mag]').forEach(el => {
        const mv = e => { const b = el.getBoundingClientRect(); el.style.transform = `translate(${(e.clientX - b.left - b.width / 2) * .2}px, ${(e.clientY - b.top - b.height / 2) * .2}px)`; };
        const lv = () => { el.style.transition = 'transform .4s cubic-bezier(.34,1.56,.64,1), background .25s'; el.style.transform = 'none'; setTimeout(() => { el.style.transition = 'background .25s'; }, 400); };
        this.on(el, 'pointermove', mv); this.on(el, 'pointerleave', lv);
      });
    }
  }
}

export default function ServicesPage() {
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

<div id="sheet" style={{"position": "relative", "zIndex": "2", "minHeight": "100vh", "background": "var(--color-bg)", "borderRadius": "0 0 28px 28px", "boxShadow": "0 30px 60px rgba(0,0,0,.35)", "overflow": "clip"}}>

<nav id="nav" data-screen-label="Nav" style={{"position": "sticky", "top": "0", "zIndex": "90", "background": "rgba(246,243,236,.92)", "backdropFilter": "blur(14px)", "borderBottom": "2px solid var(--color-divider)"}}>
  <div style={{"display": "flex", "alignItems": "center", "gap": "clamp(14px,2.2vw,32px)", "padding": "16px clamp(24px,6vw,96px)"}}>
    <a href="index.html" style={{"display": "flex", "alignItems": "center", "textDecoration": "none", "marginRight": "auto"}}>
      <img src="logo-ink.png" alt="The Social Verse" width="351" height="236" style={{"display": "block", "height": "clamp(30px,3.2vw,40px)", "width": "auto"}} />
    </a>
    <div style={{"display": "flex", "alignItems": "center", "gap": "clamp(14px,2.2vw,32px)", "marginRight": "auto", "flexWrap": "wrap"}}>
      <a href="index.html" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(var(--color-accent-600),var(--color-accent-600))", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hv-1">Home</a>
      <a href="portfolio.html" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(#ff6b35,#ff6b35)", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hv-1">Portfolio</a>
      <a href="case-studies.html" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(#2ec4b6,#2ec4b6)", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hv-1">Case Studies</a>
      <div id="megaWrap" style={{"position": "static"}}>
        <button id="megaBtn" type="button" style={{"border": "0", "background": "none", "font": "inherit", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "padding": "0 0 2px", "display": "inline-flex", "alignItems": "center", "gap": "6px"}} className="hv-2">Services <span id="megaCaret" style={{"fontSize": "10px", "transition": "transform .3s"}}>▾</span></button>
      </div>
      <a href="about.html" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(#ff8fab,#ff8fab)", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hv-1">About us</a>
      <a href="contact.html" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(#2ec4b6,#2ec4b6)", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hv-1">Contact us</a>
    </div>
    <a data-mag href="contact.html" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "letterSpacing": ".04em", "color": "var(--color-bg)", "background": "#1d1a14", "padding": "11px 20px", "borderRadius": "999px", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "background .3s"}} className="hv-3">Let's talk →</a>
  </div>
  <div id="mega" style={{"position": "absolute", "left": "0", "right": "0", "top": "100%", "background": "var(--color-bg)", "borderBottom": "2px solid var(--color-divider)", "boxShadow": "0 24px 48px rgba(43,40,32,.18)", "opacity": "0", "transform": "translateY(-10px)", "pointerEvents": "none", "transition": "opacity .35s, transform .35s"}}>
    <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(280px,1fr))", "gap": "clamp(24px,4vw,64px)", "padding": "clamp(24px,3vw,44px) clamp(24px,6vw,96px)"}}>
      <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "2px clamp(16px,2vw,32px)"}}>
        {vals.megaLinks.map((ml, $index) => (<React.Fragment key={$index}>
          <a href={ml.href} style={{"display": "flex", "alignItems": "center", "gap": "12px", "textDecoration": "none", "padding": "11px 8px", "borderBottom": "2px solid var(--color-divider)", "transition": "background .25s, padding-left .25s"}} className="hv-4">
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

<header data-screen-label="Hero" style={{"position": "relative", "overflow": "hidden", "background": "var(--color-bg)", "color": "var(--color-text)", "padding": "clamp(70px,9vw,140px) clamp(24px,6vw,96px)"}}>
  <div data-rv style={{"fontSize": "11px", "letterSpacing": ".22em", "textTransform": "uppercase", "fontWeight": "600", "color": "var(--color-accent-700)", "marginBottom": "clamp(18px,3vh,30px)"}}>Our Services</div>
  <h1 style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(34px,5vw,84px)", "lineHeight": "1.02", "letterSpacing": "-.025em", "margin": "0", "maxWidth": "20ch", "color": "inherit"}}>
    <span style={{"display": "block", "overflow": "hidden", "paddingBottom": ".12em", "marginBottom": "-.12em"}}><span data-ml data-mld="0" style={{"display": "block"}}>So, What Do We Actually Do?</span></span>
  </h1>
  <p data-rv data-rvd="2" style={{"fontSize": "clamp(15px,1.3vw,17px)", "lineHeight": "1.65", "margin": "clamp(20px,3vh,32px) 0 0", "maxWidth": "56ch", "opacity": ".85"}}>Quite a bit. But we're not going to throw 25 buzzwords at you and call it a “360° ecosystem.” Here's the simple version.</p>
<div data-rv data-rvd="3" style={{"display": "flex", "gap": "8px", "flexWrap": "wrap", "marginTop": "24px"}}><a href="#s-smm" style={{"textDecoration": "none", "fontSize": "11px", "letterSpacing": ".1em", "textTransform": "uppercase", "fontWeight": "600", "color": "#14110c", "border": "2px solid rgba(20,17,12,.45)", "padding": "7px 12px", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "transform .25s", "background": "var(--color-bg)"}} className="hv-19"><span style={{"width": "9px", "height": "9px", "background": "#ffd23f", "flex": "none"}}></span>Social Media Marketing</a><a href="#s-perf" style={{"textDecoration": "none", "fontSize": "11px", "letterSpacing": ".1em", "textTransform": "uppercase", "fontWeight": "600", "color": "#14110c", "border": "2px solid rgba(20,17,12,.45)", "padding": "7px 12px", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "transform .25s", "background": "var(--color-bg)"}} className="hv-19"><span style={{"width": "9px", "height": "9px", "background": "#ff6b35", "flex": "none"}}></span>Performance Marketing</a><a href="#s-content" style={{"textDecoration": "none", "fontSize": "11px", "letterSpacing": ".1em", "textTransform": "uppercase", "fontWeight": "600", "color": "#14110c", "border": "2px solid rgba(20,17,12,.45)", "padding": "7px 12px", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "transform .25s", "background": "var(--color-bg)"}} className="hv-19"><span style={{"width": "9px", "height": "9px", "background": "#2ec4b6", "flex": "none"}}></span>Content Production</a><a href="#s-brand" style={{"textDecoration": "none", "fontSize": "11px", "letterSpacing": ".1em", "textTransform": "uppercase", "fontWeight": "600", "color": "#14110c", "border": "2px solid rgba(20,17,12,.45)", "padding": "7px 12px", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "transform .25s", "background": "var(--color-bg)"}} className="hv-19"><span style={{"width": "9px", "height": "9px", "background": "#ff8fab", "flex": "none"}}></span>Branding and Creative Strategy</a><a href="#s-seo" style={{"textDecoration": "none", "fontSize": "11px", "letterSpacing": ".1em", "textTransform": "uppercase", "fontWeight": "600", "color": "#14110c", "border": "2px solid rgba(20,17,12,.45)", "padding": "7px 12px", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "transform .25s", "background": "var(--color-bg)"}} className="hv-19"><span style={{"width": "9px", "height": "9px", "background": "#ab905c", "flex": "none"}}></span>Search Engine Optimization (SEO)</a><a href="#s-web" style={{"textDecoration": "none", "fontSize": "11px", "letterSpacing": ".1em", "textTransform": "uppercase", "fontWeight": "600", "color": "#14110c", "border": "2px solid rgba(20,17,12,.45)", "padding": "7px 12px", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "transform .25s", "background": "var(--color-bg)"}} className="hv-19"><span style={{"width": "9px", "height": "9px", "background": "#1d1a14", "flex": "none"}}></span>Website Development</a><a href="#s-app" style={{"textDecoration": "none", "fontSize": "11px", "letterSpacing": ".1em", "textTransform": "uppercase", "fontWeight": "600", "color": "#14110c", "border": "2px solid rgba(20,17,12,.45)", "padding": "7px 12px", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "transform .25s", "background": "var(--color-bg)"}} className="hv-19"><span style={{"width": "9px", "height": "9px", "background": "#ffd23f", "flex": "none"}}></span>App Development</a><a href="#s-influencer" style={{"textDecoration": "none", "fontSize": "11px", "letterSpacing": ".1em", "textTransform": "uppercase", "fontWeight": "600", "color": "#14110c", "border": "2px solid rgba(20,17,12,.45)", "padding": "7px 12px", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "transform .25s", "background": "var(--color-bg)"}} className="hv-19"><span style={{"width": "9px", "height": "9px", "background": "#ff6b35", "flex": "none"}}></span>Influencer Marketing</a><a href="#s-outdoor" style={{"textDecoration": "none", "fontSize": "11px", "letterSpacing": ".1em", "textTransform": "uppercase", "fontWeight": "600", "color": "#14110c", "border": "2px solid rgba(20,17,12,.45)", "padding": "7px 12px", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "transform .25s", "background": "var(--color-bg)"}} className="hv-19"><span style={{"width": "9px", "height": "9px", "background": "#2ec4b6", "flex": "none"}}></span>Outdoor Marketing</a></div>
</header><section id="s-smm" data-screen-label="Social Media Marketing" style={{"position": "relative", "overflow": "hidden", "background": "var(--color-bg)", "color": "var(--color-text)", "padding": "clamp(60px,8vw,120px) clamp(24px,6vw,96px)", "borderTop": "2px solid var(--color-divider)"}}>
  <div aria-hidden="true" style={{"position": "absolute", "right": "-10px", "bottom": "-30px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(150px,20vw,320px)", "lineHeight": ".8", "color": "transparent", "WebkitTextStroke": "2px rgba(20,17,12,.2)", "pointerEvents": "none"}}>01</div>
  <div style={{"position": "relative", "maxWidth": "900px"}}>
    <div data-rv style={{"fontSize": "11px", "letterSpacing": ".22em", "textTransform": "uppercase", "fontWeight": "600", "color": "var(--color-accent-700)", "marginBottom": "16px"}}>01 / 09</div>
    <h2 data-rv data-rvd="1" style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "textTransform": "uppercase", "fontSize": "clamp(28px,3.8vw,58px)", "lineHeight": ".98", "letterSpacing": "-.02em", "margin": "0"}}>Social Media Marketing</h2>
    <p data-rv data-rvd="2" style={{"fontSize": "15.5px", "lineHeight": "1.7", "margin": "20px 0 0", "maxWidth": "64ch", "opacity": ".85"}}>We'll take care of your social media from planning to posting. Content ideas, creatives, reels, captions, calendars, posting and keeping an eye on what's actually working. The aim isn't to make your page busy. It's to make it worth following.</p>
    <div data-case data-rv data-rvd="3" style={{"border": "2px solid var(--color-divider)", "overflow": "hidden", "maxWidth": "400px", "marginTop": "clamp(28px,3.5vw,44px)"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="sv-smm" shape="rect" placeholder="Social feed grid" src="work/creatives/social-grid.jpg"></image-slot></div></div></div>
    <a data-rv data-rvd="4" href="contact.html" style={{"display": "inline-flex", "marginTop": "24px", "textDecoration": "none", "color": "inherit", "border": "2px solid currentColor", "padding": "11px 20px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "13px", "transition": "opacity .25s"}} className="hv-20">Start a project →</a>
  </div>
</section>
<section id="s-perf" data-screen-label="Performance Marketing" style={{"position": "relative", "overflow": "hidden", "background": "var(--color-surface)", "color": "var(--color-text)", "padding": "clamp(60px,8vw,120px) clamp(24px,6vw,96px)", "borderTop": "2px solid var(--color-divider)"}}>
  <div aria-hidden="true" style={{"position": "absolute", "right": "-10px", "bottom": "-30px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(150px,20vw,320px)", "lineHeight": ".8", "color": "transparent", "WebkitTextStroke": "2px rgba(20,17,12,.2)", "pointerEvents": "none"}}>02</div>
  <div style={{"position": "relative", "maxWidth": "900px"}}>
    <div data-rv style={{"fontSize": "11px", "letterSpacing": ".22em", "textTransform": "uppercase", "fontWeight": "600", "color": "var(--color-accent-700)", "marginBottom": "16px"}}>02 / 09</div>
    <h2 data-rv data-rvd="1" style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "textTransform": "uppercase", "fontSize": "clamp(28px,3.8vw,58px)", "lineHeight": ".98", "letterSpacing": "-.02em", "margin": "0"}}>Performance Marketing</h2>
    <p data-rv data-rvd="2" style={{"fontSize": "15.5px", "lineHeight": "1.7", "margin": "20px 0 0", "maxWidth": "64ch", "opacity": ".85"}}>You give us a goal. Leads? Sales? Bookings? Enquiries? Traffic? We'll build the campaigns around it. We work across Meta, Google, YouTube and other platforms, constantly testing, tweaking and cutting what isn't working. Because “the ad is running” isn't the same thing as “the ad is working.”</p>
    <a data-rv data-rvd="3" href="contact.html" style={{"display": "inline-flex", "marginTop": "24px", "textDecoration": "none", "color": "inherit", "border": "2px solid currentColor", "padding": "11px 20px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "13px", "transition": "opacity .25s"}} className="hv-21">Start a project →</a>
  </div>
</section>
<section id="s-content" data-screen-label="Content Production" style={{"position": "relative", "overflow": "hidden", "background": "var(--color-bg)", "color": "var(--color-text)", "padding": "clamp(60px,8vw,120px) clamp(24px,6vw,96px)", "borderTop": "2px solid var(--color-divider)"}}>
  <div aria-hidden="true" style={{"position": "absolute", "right": "-10px", "bottom": "-30px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(150px,20vw,320px)", "lineHeight": ".8", "color": "transparent", "WebkitTextStroke": "2px rgba(20,17,12,.2)", "pointerEvents": "none"}}>03</div>
  <div style={{"position": "relative", "maxWidth": "900px"}}>
    <div data-rv style={{"fontSize": "11px", "letterSpacing": ".22em", "textTransform": "uppercase", "fontWeight": "600", "color": "var(--color-accent-700)", "marginBottom": "16px"}}>03 / 09</div>
    <h2 data-rv data-rvd="1" style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "textTransform": "uppercase", "fontSize": "clamp(28px,3.8vw,58px)", "lineHeight": ".98", "letterSpacing": "-.02em", "margin": "0"}}>Content Production</h2>
    <p data-rv data-rvd="2" style={{"fontSize": "15.5px", "lineHeight": "1.7", "margin": "20px 0 0", "maxWidth": "64ch", "opacity": ".85"}}>Got something worth showing? Let's shoot it properly. Reels, product shoots, photography, promotional videos, brand films, ad creatives: whatever makes sense for your brand. No unnecessary production jargon. Just good content that gives people a reason to stop scrolling.</p>
    <div data-case data-rv data-rvd="3" style={{"border": "2px solid var(--color-divider)", "overflow": "hidden", "maxWidth": "400px", "marginTop": "clamp(28px,3.5vw,44px)"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "2/3", "background": "var(--color-neutral-200)"}}><image-slot id="sv-content" shape="rect" placeholder="Content shoot flatlay" src="creative-content.jpg"></image-slot></div></div></div>
    <a data-rv data-rvd="4" href="contact.html" style={{"display": "inline-flex", "marginTop": "24px", "textDecoration": "none", "color": "inherit", "border": "2px solid currentColor", "padding": "11px 20px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "13px", "transition": "opacity .25s"}} className="hv-22">Start a project →</a>
  </div>
</section>
<section id="s-brand" data-screen-label="Branding and Creative Strategy" style={{"position": "relative", "overflow": "hidden", "background": "var(--color-surface)", "color": "var(--color-text)", "padding": "clamp(60px,8vw,120px) clamp(24px,6vw,96px)", "borderTop": "2px solid var(--color-divider)"}}>
  <div aria-hidden="true" style={{"position": "absolute", "right": "-10px", "bottom": "-30px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(150px,20vw,320px)", "lineHeight": ".8", "color": "transparent", "WebkitTextStroke": "2px rgba(20,17,12,.2)", "pointerEvents": "none"}}>04</div>
  <div style={{"position": "relative", "maxWidth": "900px"}}>
    <div data-rv style={{"fontSize": "11px", "letterSpacing": ".22em", "textTransform": "uppercase", "fontWeight": "600", "color": "var(--color-accent-700)", "marginBottom": "16px"}}>04 / 09</div>
    <h2 data-rv data-rvd="1" style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "textTransform": "uppercase", "fontSize": "clamp(28px,3.8vw,58px)", "lineHeight": ".98", "letterSpacing": "-.02em", "margin": "0"}}>Branding and Creative Strategy</h2>
    <p data-rv data-rvd="2" style={{"fontSize": "15.5px", "lineHeight": "1.7", "margin": "20px 0 0", "maxWidth": "64ch", "opacity": ".85"}}>Your logo is not your whole brand. It's the colours, type, visuals, tone, packaging, campaigns, posts and all the little things people associate with you. We help put all of that together so your brand feels like one brand, wherever people see it.</p>
    <a data-rv data-rvd="3" href="contact.html" style={{"display": "inline-flex", "marginTop": "24px", "textDecoration": "none", "color": "inherit", "border": "2px solid currentColor", "padding": "11px 20px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "13px", "transition": "opacity .25s"}} className="hv-23">Start a project →</a>
  </div>
</section>
<section id="s-seo" data-screen-label="Search Engine Optimization (SEO)" style={{"position": "relative", "overflow": "hidden", "background": "var(--color-bg)", "color": "var(--color-text)", "padding": "clamp(60px,8vw,120px) clamp(24px,6vw,96px)", "borderTop": "2px solid var(--color-divider)"}}>
  <div aria-hidden="true" style={{"position": "absolute", "right": "-10px", "bottom": "-30px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(150px,20vw,320px)", "lineHeight": ".8", "color": "transparent", "WebkitTextStroke": "2px rgba(20,17,12,.2)", "pointerEvents": "none"}}>05</div>
  <div style={{"position": "relative", "maxWidth": "900px"}}>
    <div data-rv style={{"fontSize": "11px", "letterSpacing": ".22em", "textTransform": "uppercase", "fontWeight": "600", "color": "var(--color-accent-700)", "marginBottom": "16px"}}>05 / 09</div>
    <h2 data-rv data-rvd="1" style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "textTransform": "uppercase", "fontSize": "clamp(28px,3.8vw,58px)", "lineHeight": ".98", "letterSpacing": "-.02em", "margin": "0"}}>Search Engine Optimization (SEO)</h2>
    <p data-rv data-rvd="2" style={{"fontSize": "15.5px", "lineHeight": "1.7", "margin": "20px 0 0", "maxWidth": "64ch", "opacity": ".85"}}>Google isn't going away. If people are searching for what you sell, we'd like your brand to show up. We work on keywords, content, technical SEO and local search to help improve your visibility organically.</p>
    <div data-case data-rv data-rvd="3" style={{"border": "2px solid var(--color-divider)", "overflow": "hidden", "maxWidth": "620px", "marginTop": "clamp(28px,3.5vw,44px)"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><video data-auto src="seo-loop.mp4" poster="seo-loop-poster.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="Search engine optimization search results" style={{"display": "block", "width": "100%", "aspectRatio": "16/9", "objectFit": "cover", "background": "var(--color-neutral-200)"}}></video></div></div>
    <a data-rv data-rvd="4" href="contact.html" style={{"display": "inline-flex", "marginTop": "24px", "textDecoration": "none", "color": "inherit", "border": "2px solid currentColor", "padding": "11px 20px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "13px", "transition": "opacity .25s"}} className="hv-20">Start a project →</a>
  </div>
</section>
<section id="s-web" data-screen-label="Website Development" style={{"position": "relative", "overflow": "hidden", "background": "var(--color-surface)", "color": "var(--color-text)", "padding": "clamp(60px,8vw,120px) clamp(24px,6vw,96px)", "borderTop": "2px solid var(--color-divider)"}}>
  <div aria-hidden="true" style={{"position": "absolute", "right": "-10px", "bottom": "-30px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(150px,20vw,320px)", "lineHeight": ".8", "color": "transparent", "WebkitTextStroke": "2px rgba(20,17,12,.2)", "pointerEvents": "none"}}>06</div>
  <div style={{"position": "relative", "maxWidth": "900px"}}>
    <div data-rv style={{"fontSize": "11px", "letterSpacing": ".22em", "textTransform": "uppercase", "fontWeight": "600", "color": "var(--color-accent-700)", "marginBottom": "16px"}}>06 / 09</div>
    <h2 data-rv data-rvd="1" style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "textTransform": "uppercase", "fontSize": "clamp(28px,3.8vw,58px)", "lineHeight": ".98", "letterSpacing": "-.02em", "margin": "0"}}>Website Development</h2>
    <p data-rv data-rvd="2" style={{"fontSize": "15.5px", "lineHeight": "1.7", "margin": "20px 0 0", "maxWidth": "64ch", "opacity": ".85"}}>Your website doesn't need to be complicated. It needs to work. We build websites that look good, load properly, work on mobile and, most importantly, make it easy for people to understand your business and take the next step.</p>
    <a data-rv data-rvd="3" href="contact.html" style={{"display": "inline-flex", "marginTop": "24px", "textDecoration": "none", "color": "inherit", "border": "2px solid currentColor", "padding": "11px 20px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "13px", "transition": "opacity .25s"}} className="hv-21">Start a project →</a>
  </div>
</section>
<section id="s-app" data-screen-label="App Development" style={{"position": "relative", "overflow": "hidden", "background": "var(--color-bg)", "color": "var(--color-text)", "padding": "clamp(60px,8vw,120px) clamp(24px,6vw,96px)", "borderTop": "2px solid var(--color-divider)"}}>
  <div aria-hidden="true" style={{"position": "absolute", "right": "-10px", "bottom": "-30px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(150px,20vw,320px)", "lineHeight": ".8", "color": "transparent", "WebkitTextStroke": "2px rgba(20,17,12,.2)", "pointerEvents": "none"}}>07</div>
  <div style={{"position": "relative", "maxWidth": "900px"}}>
    <div data-rv style={{"fontSize": "11px", "letterSpacing": ".22em", "textTransform": "uppercase", "fontWeight": "600", "color": "var(--color-accent-700)", "marginBottom": "16px"}}>07 / 09</div>
    <h2 data-rv data-rvd="1" style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "textTransform": "uppercase", "fontSize": "clamp(28px,3.8vw,58px)", "lineHeight": ".98", "letterSpacing": "-.02em", "margin": "0"}}>App Development</h2>
    <p data-rv data-rvd="2" style={{"fontSize": "15.5px", "lineHeight": "1.7", "margin": "20px 0 0", "maxWidth": "64ch", "opacity": ".85"}}>Have an app idea? Let's see what we can do with it. From UI and UX to development, we build mobile applications around how your business and customers actually use them.</p>
    <a data-rv data-rvd="3" href="contact.html" style={{"display": "inline-flex", "marginTop": "24px", "textDecoration": "none", "color": "inherit", "border": "2px solid currentColor", "padding": "11px 20px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "13px", "transition": "opacity .25s"}} className="hv-22">Start a project →</a>
  </div>
</section>
<section id="s-influencer" data-screen-label="Influencer Marketing" style={{"position": "relative", "overflow": "hidden", "background": "var(--color-surface)", "color": "var(--color-text)", "padding": "clamp(60px,8vw,120px) clamp(24px,6vw,96px)", "borderTop": "2px solid var(--color-divider)"}}>
  <div aria-hidden="true" style={{"position": "absolute", "right": "-10px", "bottom": "-30px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(150px,20vw,320px)", "lineHeight": ".8", "color": "transparent", "WebkitTextStroke": "2px rgba(20,17,12,.2)", "pointerEvents": "none"}}>08</div>
  <div style={{"position": "relative", "maxWidth": "900px"}}>
    <div data-rv style={{"fontSize": "11px", "letterSpacing": ".22em", "textTransform": "uppercase", "fontWeight": "600", "color": "var(--color-accent-700)", "marginBottom": "16px"}}>08 / 09</div>
    <h2 data-rv data-rvd="1" style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "textTransform": "uppercase", "fontSize": "clamp(28px,3.8vw,58px)", "lineHeight": ".98", "letterSpacing": "-.02em", "margin": "0"}}>Influencer Marketing</h2>
    <p data-rv data-rvd="2" style={{"fontSize": "15.5px", "lineHeight": "1.7", "margin": "20px 0 0", "maxWidth": "64ch", "opacity": ".85"}}>Not every influencer is right for every brand. We help you find creators who actually make sense for your audience, plan the collaboration and manage the campaign from start to finish. Right creator &gt; biggest follower count.</p>
    <div data-case data-rv data-rvd="3" style={{"border": "2px solid var(--color-divider)", "overflow": "hidden", "maxWidth": "620px", "marginTop": "clamp(28px,3.5vw,44px)"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "3/2", "background": "var(--color-neutral-200)"}}><image-slot id="sv-influencer" shape="rect" placeholder="Creator stopping the scroll" src="stop-the-scroll.jpg"></image-slot></div></div></div>
    <a data-rv data-rvd="4" href="contact.html" style={{"display": "inline-flex", "marginTop": "24px", "textDecoration": "none", "color": "inherit", "border": "2px solid currentColor", "padding": "11px 20px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "13px", "transition": "opacity .25s"}} className="hv-23">Start a project →</a>
  </div>
</section>
<section id="s-outdoor" data-screen-label="Outdoor Marketing" style={{"position": "relative", "overflow": "hidden", "background": "var(--color-bg)", "color": "var(--color-text)", "padding": "clamp(60px,8vw,120px) clamp(24px,6vw,96px)", "borderTop": "2px solid var(--color-divider)"}}>
  <div aria-hidden="true" style={{"position": "absolute", "right": "-10px", "bottom": "-30px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(150px,20vw,320px)", "lineHeight": ".8", "color": "transparent", "WebkitTextStroke": "2px rgba(20,17,12,.2)", "pointerEvents": "none"}}>09</div>
  <div style={{"position": "relative", "maxWidth": "900px"}}>
    <div data-rv style={{"fontSize": "11px", "letterSpacing": ".22em", "textTransform": "uppercase", "fontWeight": "600", "color": "var(--color-accent-700)", "marginBottom": "16px"}}>09 / 09</div>
    <h2 data-rv data-rvd="1" style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "textTransform": "uppercase", "fontSize": "clamp(28px,3.8vw,58px)", "lineHeight": ".98", "letterSpacing": "-.02em", "margin": "0"}}>Outdoor Marketing</h2>
    <p data-rv data-rvd="2" style={{"fontSize": "15.5px", "lineHeight": "1.7", "margin": "20px 0 0", "maxWidth": "64ch", "opacity": ".85"}}>The internet is great. But people still go outside. Hoardings, billboards, transit branding, storefronts, event branding and other outdoor campaigns: we help your brand get noticed offline too.</p>
    <div data-case data-rv data-rvd="3" style={{"border": "2px solid var(--color-divider)", "overflow": "hidden", "maxWidth": "620px", "marginTop": "clamp(28px,3.5vw,44px)"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/3", "background": "var(--color-neutral-200)"}}><image-slot id="sv-outdoor" shape="rect" placeholder="Night city billboards" src="hoarding-design.jpg"></image-slot></div></div></div>
    <a data-rv data-rvd="4" href="contact.html" style={{"display": "inline-flex", "marginTop": "24px", "textDecoration": "none", "color": "inherit", "border": "2px solid currentColor", "padding": "11px 20px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "13px", "transition": "opacity .25s"}} className="hv-20">Start a project →</a>
  </div>
</section>

</div>

<div id="footSpace" aria-hidden="true" style={{"height": "480px"}}></div>

<footer id="bigFoot" data-screen-label="Footer" style={{"position": "fixed", "left": "0", "right": "0", "bottom": "0", "zIndex": "1", "background": "#0f0d0a", "color": "#f1ece1", "padding": "clamp(36px,5vw,64px) clamp(24px,6vw,96px) 24px", "overflow": "hidden"}}>
  <div style={{"display": "flex", "justifyContent": "center", "gap": "clamp(12px,2vw,24px)", "flexWrap": "wrap", "marginBottom": "clamp(24px,3.5vw,40px)"}}>
    <a href="tel:6000955672" style={{"textDecoration": "none", "color": "#f1ece1", "border": "2px solid rgba(241,236,225,.3)", "borderRadius": "999px", "padding": "9px 18px", "fontSize": "12px", "display": "inline-flex", "gap": "8px", "alignItems": "center", "transition": "border-color .3s"}} className="hv-11"><strong style={{"fontFamily": "var(--font-heading)"}}>Call:</strong> 6000955672</a>
    <a href="tel:8099531944" style={{"textDecoration": "none", "color": "#f1ece1", "border": "2px solid rgba(241,236,225,.3)", "borderRadius": "999px", "padding": "9px 18px", "fontSize": "12px", "display": "inline-flex", "gap": "8px", "alignItems": "center", "transition": "border-color .3s"}} className="hv-12"><strong style={{"fontFamily": "var(--font-heading)"}}>Call:</strong> 8099531944</a>
    <a href="mailto:info@thesocialverse.co.in" style={{"textDecoration": "none", "color": "#f1ece1", "border": "2px solid rgba(241,236,225,.3)", "borderRadius": "999px", "padding": "9px 18px", "fontSize": "12px", "display": "inline-flex", "gap": "8px", "alignItems": "center", "transition": "border-color .3s"}} className="hv-13"><strong style={{"fontFamily": "var(--font-heading)"}}>Email:</strong> info@thesocialverse.co.in</a>
  </div>
  <p style={{"textAlign": "center", "fontSize": "13.5px", "lineHeight": "1.7", "maxWidth": "64ch", "margin": "0 auto clamp(24px,3.5vw,40px)", "color": "rgba(241,236,225,.7)"}}>Strategy, content, ads, branding, websites and everything in between.</p>
  <div aria-label="The Social Verse" style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "10px"}}>
    <span style={{"display": "flex", "alignItems": "baseline", "gap": "clamp(8px,1vw,18px)", "whiteSpace": "nowrap"}}><span aria-hidden="true" style={{"width": "clamp(14px,1.8vw,28px)", "height": "clamp(14px,1.8vw,28px)", "background": "var(--color-accent)", "flex": "none", "alignSelf": "center"}}></span><span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(38px,9.6vw,164px)", "lineHeight": ".95", "letterSpacing": "-.03em", "color": "#f1ece1"}}>The Social Verse</span></span>
    <span style={{"fontSize": "clamp(10px,1.2vw,14px)", "letterSpacing": ".34em", "textTransform": "uppercase", "fontWeight": "600", "color": "#dcc89d"}}>All eyes on your brand</span>
  </div>
  <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "18px 36px", "flexWrap": "wrap", "borderTop": "2px solid rgba(241,236,225,.22)", "marginTop": "clamp(24px,3vw,40px)", "paddingTop": "18px"}}>
    <div style={{"display": "flex", "gap": "16px", "flexWrap": "wrap"}}>
      <a href="index.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hv-14">Home</a>
      <a href="portfolio.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hv-15">Portfolio</a>
      <a href="case-studies.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hv-16">Case Studies</a>
      <a href="services.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hv-17">Services</a>
      <a href="about.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hv-14">About us</a>
      <a href="contact.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hv-15">Contact us</a>
      <a href="clients.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hv-16">Clients</a>
      <a href="blog.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hv-17">Blog</a>
    </div>
    <div style={{"display": "flex", "gap": "16px", "flexWrap": "wrap"}}>
      <a href="https://instagram.com" target="_blank" rel="noopener" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "color": "#f1ece1"}} className="hv-14">Instagram</a>
      <a href="https://facebook.com" target="_blank" rel="noopener" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "color": "#f1ece1"}} className="hv-15">Facebook</a>
      <a href="https://linkedin.com" target="_blank" rel="noopener" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "color": "#f1ece1"}} className="hv-16">LinkedIn</a>
      <a href="https://youtube.com" target="_blank" rel="noopener" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "color": "#f1ece1"}} className="hv-17">YouTube</a>
    </div>
    <div style={{"textAlign": "right", "fontSize": "11px", "color": "rgba(241,236,225,.55)"}}>© The Social Verse</div>
  </div>
</footer>

    </>
  );
}
