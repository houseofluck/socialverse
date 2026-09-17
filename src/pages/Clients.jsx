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

export default function ClientsPage() {
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
          <span style={{"display": "block", "overflow": "hidden", "border": "2px solid var(--color-divider)"}}><span style={{"display": "block", "aspectRatio": "16/10", "background": "var(--color-neutral-200)"}}><image-slot id="mega-feat-1" shape="rect" placeholder="Featured creative" src="work/grids/olive-heights-grid.jpg"></image-slot></span></span>
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
  <div data-rv style={{"fontSize": "11px", "letterSpacing": ".22em", "textTransform": "uppercase", "fontWeight": "600", "color": "var(--color-accent-700)", "marginBottom": "clamp(18px,3vh,30px)"}}>Our Clientele</div>
  <h1 style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(34px,5vw,84px)", "lineHeight": "1.02", "letterSpacing": "-.025em", "margin": "0", "maxWidth": "20ch", "color": "inherit"}}>
    <span style={{"display": "block", "overflow": "hidden", "paddingBottom": ".12em", "marginBottom": "-.12em"}}><span data-ml data-mld="0" style={{"display": "block"}}>Brands We've Worked With</span></span>
  </h1>
  <p data-rv data-rvd="2" style={{"fontSize": "clamp(15px,1.3vw,17px)", "lineHeight": "1.65", "margin": "clamp(20px,3vh,32px) 0 0", "maxWidth": "56ch", "opacity": ".85"}}>A small list. We'd rather go deep with a few brands than spread thin across a hundred.</p>
</header><div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(220px,1fr))", "gap": "clamp(14px,2vw,24px)", "padding": "clamp(56px,7vw,110px) clamp(24px,6vw,96px)"}}>
  <div data-case data-rv style={{"background": "var(--color-bg)", "border": "2px solid var(--color-divider)", "color": "var(--color-text)", "minHeight": "190px", "padding": "clamp(18px,2.2vw,28px)", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "gap": "16px", "position": "relative", "overflow": "hidden", "transition": "transform .35s"}} className="hv-25">
    <span aria-hidden="true" style={{"position": "absolute", "right": "4px", "bottom": "-12px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "76px", "lineHeight": ".8", "opacity": ".16"}}>01</span>
    <span style={{"fontSize": "11px", "letterSpacing": ".18em", "textTransform": "uppercase", "fontWeight": "600", "color": "var(--color-accent-700)"}}>Rooftop dining</span>
    <span style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start"}}>
      <img src="clients/olive-heights.png" alt="" style={{"display": "block", "height": "clamp(30px,3.4vw,46px)", "width": "auto", "maxWidth": "84%", "objectFit": "contain", "marginBottom": "6px"}} />
      <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(20px,2vw,28px)", "lineHeight": "1.05", "letterSpacing": "-.015em"}}>Olive Heights</span>
    </span>
  </div>
  <div data-case data-rv style={{"background": "var(--color-bg)", "border": "2px solid var(--color-divider)", "color": "var(--color-text)", "minHeight": "190px", "padding": "clamp(18px,2.2vw,28px)", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "gap": "16px", "position": "relative", "overflow": "hidden", "transition": "transform .35s"}} className="hv-26">
    <span aria-hidden="true" style={{"position": "absolute", "right": "4px", "bottom": "-12px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "76px", "lineHeight": ".8", "opacity": ".16"}}>02</span>
    <span style={{"fontSize": "11px", "letterSpacing": ".18em", "textTransform": "uppercase", "fontWeight": "600", "color": "var(--color-accent-700)"}}>Restaurant</span>
    <span style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start"}}>
      <img src="clients/olive-garden.png" alt="" style={{"display": "block", "height": "clamp(30px,3.4vw,46px)", "width": "auto", "maxWidth": "84%", "objectFit": "contain", "marginBottom": "6px"}} />
      <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(20px,2vw,28px)", "lineHeight": "1.05", "letterSpacing": "-.015em"}}>Olive Garden</span>
    </span>
  </div>
  <div data-case data-rv style={{"background": "var(--color-bg)", "border": "2px solid var(--color-divider)", "color": "var(--color-text)", "minHeight": "190px", "padding": "clamp(18px,2.2vw,28px)", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "gap": "16px", "position": "relative", "overflow": "hidden", "transition": "transform .35s"}} className="hv-25">
    <span aria-hidden="true" style={{"position": "absolute", "right": "4px", "bottom": "-12px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "76px", "lineHeight": ".8", "opacity": ".16"}}>03</span>
    <span style={{"fontSize": "11px", "letterSpacing": ".18em", "textTransform": "uppercase", "fontWeight": "600", "color": "var(--color-accent-700)"}}>Luxury hotel</span>
    <span style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start"}}>
      <img src="clients/awesome-palace.png" alt="" style={{"display": "block", "height": "clamp(30px,3.4vw,46px)", "width": "auto", "maxWidth": "84%", "objectFit": "contain", "marginBottom": "6px"}} />
      <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(20px,2vw,28px)", "lineHeight": "1.05", "letterSpacing": "-.015em"}}>Awesome Palace</span>
    </span>
  </div>
  <div data-case data-rv style={{"background": "var(--color-bg)", "border": "2px solid var(--color-divider)", "color": "var(--color-text)", "minHeight": "190px", "padding": "clamp(18px,2.2vw,28px)", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "gap": "16px", "position": "relative", "overflow": "hidden", "transition": "transform .35s"}} className="hv-26">
    <span aria-hidden="true" style={{"position": "absolute", "right": "4px", "bottom": "-12px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "76px", "lineHeight": ".8", "opacity": ".16"}}>04</span>
    <span style={{"fontSize": "11px", "letterSpacing": ".18em", "textTransform": "uppercase", "fontWeight": "600", "color": "var(--color-accent-700)"}}>Cloud infrastructure</span>
    <span style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start"}}>
      <img src="clients/fix24.png" alt="" style={{"display": "block", "height": "clamp(30px,3.4vw,46px)", "width": "auto", "maxWidth": "84%", "objectFit": "contain", "marginBottom": "6px"}} />
      <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(20px,2vw,28px)", "lineHeight": "1.05", "letterSpacing": "-.015em"}}>Fix24</span>
    </span>
  </div>
  <div data-case data-rv style={{"background": "var(--color-bg)", "border": "2px solid var(--color-divider)", "color": "var(--color-text)", "minHeight": "190px", "padding": "clamp(18px,2.2vw,28px)", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "gap": "16px", "position": "relative", "overflow": "hidden", "transition": "transform .35s"}} className="hv-25">
    <span aria-hidden="true" style={{"position": "absolute", "right": "4px", "bottom": "-12px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "76px", "lineHeight": ".8", "opacity": ".16"}}>05</span>
    <span style={{"fontSize": "11px", "letterSpacing": ".18em", "textTransform": "uppercase", "fontWeight": "600", "color": "var(--color-accent-700)"}}>Gold buying</span>
    <span style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start"}}>
      <img src="clients/ahvi-gold.png" alt="" style={{"display": "block", "height": "clamp(30px,3.4vw,46px)", "width": "auto", "maxWidth": "84%", "objectFit": "contain", "marginBottom": "6px"}} />
      <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(20px,2vw,28px)", "lineHeight": "1.05", "letterSpacing": "-.015em"}}>Ahvi Gold</span>
    </span>
  </div>
  <div data-case data-rv style={{"background": "var(--color-bg)", "border": "2px solid var(--color-divider)", "color": "var(--color-text)", "minHeight": "190px", "padding": "clamp(18px,2.2vw,28px)", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "gap": "16px", "position": "relative", "overflow": "hidden", "transition": "transform .35s"}} className="hv-26">
    <span aria-hidden="true" style={{"position": "absolute", "right": "4px", "bottom": "-12px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "76px", "lineHeight": ".8", "opacity": ".16"}}>06</span>
    <span style={{"fontSize": "11px", "letterSpacing": ".18em", "textTransform": "uppercase", "fontWeight": "600", "color": "var(--color-accent-700)"}}>Jewellery</span>
    <span style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start"}}>
      <img src="clients/jewellery-hub.png" alt="" style={{"display": "block", "height": "clamp(30px,3.4vw,46px)", "width": "auto", "maxWidth": "84%", "objectFit": "contain", "marginBottom": "6px"}} />
      <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(20px,2vw,28px)", "lineHeight": "1.05", "letterSpacing": "-.015em"}}>Jewellery Hub</span>
    </span>
  </div>
  <div data-case data-rv style={{"background": "var(--color-bg)", "border": "2px solid var(--color-divider)", "color": "var(--color-text)", "minHeight": "190px", "padding": "clamp(18px,2.2vw,28px)", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "gap": "16px", "position": "relative", "overflow": "hidden", "transition": "transform .35s"}} className="hv-25">
    <span aria-hidden="true" style={{"position": "absolute", "right": "4px", "bottom": "-12px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "76px", "lineHeight": ".8", "opacity": ".16"}}>07</span>
    <span style={{"fontSize": "11px", "letterSpacing": ".18em", "textTransform": "uppercase", "fontWeight": "600", "color": "var(--color-accent-700)"}}>Digital platform</span>
    <span style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start"}}>
      <img src="clients/paxmeet.png" alt="" style={{"display": "block", "height": "clamp(30px,3.4vw,46px)", "width": "auto", "maxWidth": "84%", "objectFit": "contain", "marginBottom": "6px"}} />
      <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(20px,2vw,28px)", "lineHeight": "1.05", "letterSpacing": "-.015em"}}>Paxmeet</span>
    </span>
  </div>
  <div data-case data-rv style={{"background": "var(--color-bg)", "border": "2px solid var(--color-divider)", "color": "var(--color-text)", "minHeight": "190px", "padding": "clamp(18px,2.2vw,28px)", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "gap": "16px", "position": "relative", "overflow": "hidden", "transition": "transform .35s"}} className="hv-26">
    <span aria-hidden="true" style={{"position": "absolute", "right": "4px", "bottom": "-12px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "76px", "lineHeight": ".8", "opacity": ".16"}}>08</span>
    <span style={{"fontSize": "11px", "letterSpacing": ".18em", "textTransform": "uppercase", "fontWeight": "600", "color": "var(--color-accent-700)"}}>Café & bar</span>
    <span style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start"}}>
      <img src="clients/coriander.png" alt="" style={{"display": "block", "height": "clamp(30px,3.4vw,46px)", "width": "auto", "maxWidth": "84%", "objectFit": "contain", "marginBottom": "6px"}} />
      <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(20px,2vw,28px)", "lineHeight": "1.05", "letterSpacing": "-.015em"}}>Coriander</span>
    </span>
  </div>
  <a href="contact.html" data-rv style={{"background": "var(--color-bg)", "border": "2px dashed var(--color-divider)", "color": "var(--color-text)", "textDecoration": "none", "minHeight": "190px", "padding": "clamp(18px,2.2vw,28px)", "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "gap": "8px", "textAlign": "center", "transition": "border-color .3s, transform .3s"}} className="hv-27">
    <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(18px,1.8vw,24px)"}}>Your brand here</span>
    <span style={{"fontSize": "11px", "letterSpacing": ".16em", "textTransform": "uppercase", "fontWeight": "600", "color": "var(--color-accent-700)"}}>Let's talk →</span>
  </a>
</div><section data-screen-label="CTA" style={{"position": "relative", "overflow": "hidden", "borderTop": "2px solid var(--color-divider)"}}>
  <div style={{"position": "relative", "aspectRatio": "21/8", "minHeight": "340px", "background": "var(--color-neutral-200)"}}><image-slot id="cta-team-cl" shape="rect" placeholder="Wall of client work" src="work/teasers/wall-clients.jpg"></image-slot></div>
  <div style={{"position": "absolute", "inset": "0", "background": "linear-gradient(90deg, rgba(14,13,11,.9) 0%, rgba(14,13,11,.62) 45%, rgba(14,13,11,.22) 82%), linear-gradient(180deg, rgba(14,13,11,.15), rgba(14,13,11,.7))", "pointerEvents": "none"}}></div>
  <div style={{"position": "absolute", "left": "clamp(24px,6vw,96px)", "right": "clamp(24px,6vw,96px)", "bottom": "clamp(24px,4vw,48px)", "pointerEvents": "none"}}>
    <div style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(24px,3.4vw,52px)", "lineHeight": "1.08", "letterSpacing": "-.02em", "color": "#f6f3ec", "maxWidth": "24ch"}}>Your brand deserves more than ordinary marketing.<br /><span style={{"color": "#dcc89d"}}>Let's build something that stands out.</span></div>
    <a data-mag href="contact.html" style={{"pointerEvents": "auto", "display": "inline-flex", "marginTop": "18px", "textDecoration": "none", "color": "#14110c", "background": "var(--color-accent)", "padding": "13px 24px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "14px", "transition": "background .25s"}} className="hv-18">Let's Work Together →</a>
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
