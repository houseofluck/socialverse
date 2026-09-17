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

export default function PortfolioPage() {
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
      <a href="portfolio.html" aria-current="page" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-accent-700)", "borderBottom": "2px solid var(--color-accent)", "paddingBottom": "2px"}}>Portfolio</a>
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
  <div data-rv style={{"fontSize": "11px", "letterSpacing": ".22em", "textTransform": "uppercase", "fontWeight": "600", "color": "var(--color-accent-700)", "marginBottom": "clamp(18px,3vh,30px)"}}>Portfolio</div>
  <h1 style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(34px,5vw,84px)", "lineHeight": "1.02", "letterSpacing": "-.025em", "margin": "0", "maxWidth": "20ch", "color": "inherit"}}>
    <span style={{"display": "block", "overflow": "hidden", "paddingBottom": ".12em", "marginBottom": "-.12em"}}><span data-ml data-mld="0" style={{"display": "block"}}>Some Things We've Made.</span></span>
  </h1>
  <p data-rv data-rvd="2" style={{"fontSize": "clamp(15px,1.3vw,17px)", "lineHeight": "1.65", "margin": "clamp(20px,3vh,32px) 0 0", "maxWidth": "56ch", "opacity": ".85"}}>No long explanation needed. Here's the work. Scroll through and see what we've been creating for brands across hospitality, gold, technology and more.</p>
</header><div id="creativity" style={{"background": "var(--color-surface)", "color": "var(--color-text)", "padding": "16px clamp(24px,6vw,96px)", "display": "flex", "justifyContent": "space-between", "alignItems": "baseline", "gap": "16px", "flexWrap": "wrap", "borderTop": "2px solid var(--color-divider)"}}>
  <h2 style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(20px,2.4vw,32px)", "letterSpacing": "-.015em", "margin": "0"}}>Creative Designs</h2>
  <span style={{"fontSize": "11px", "letterSpacing": ".02em", "fontWeight": "600", "color": "var(--color-accent-700)"}}>The posts, campaigns and ideas that made it from our heads to the screen.</span>
</div><div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(clamp(140px,18vw,240px),1fr))", "gap": "clamp(16px,2.4vw,32px)", "padding": "clamp(56px,7vw,110px) clamp(24px,6vw,96px)"}}><div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-cre-1" shape="rect" placeholder="Creative design 1" src="work/creatives/olive-heights-tropical-twist.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-cre-2" shape="rect" placeholder="Creative design 2" src="work/creatives/awesome-palace-view.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-cre-3" shape="rect" placeholder="Creative design 3" src="work/creatives/olive-garden-chat-drink.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-cre-4" shape="rect" placeholder="Creative design 4" src="work/creatives/fix24-data-deserves-better.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-cre-5" shape="rect" placeholder="Creative design 5" src="work/creatives/ahvi-gold-instant-funds.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-cre-6" shape="rect" placeholder="Creative design 6" src="work/creatives/olive-garden-bold-rich.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-cre-7" shape="rect" placeholder="Creative design 7" src="work/creatives/awesome-palace-business-stays.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-cre-8" shape="rect" placeholder="Creative design 8" src="work/creatives/olive-heights-framed-cooler.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-cre-9" shape="rect" placeholder="Creative design 9" src="work/creatives/olive-garden-creators-meetup.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-cre-10" shape="rect" placeholder="Creative design 10" src="work/creatives/fix24-after-setup.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-cre-11" shape="rect" placeholder="Creative design 11" src="work/creatives/olive-garden-bowl.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-cre-12" shape="rect" placeholder="Creative design 12" src="work/creatives/fix24-office-anywhere.jpg"></image-slot></div></div></div></div><div id="hoardings" style={{"background": "var(--color-surface)", "color": "var(--color-text)", "padding": "16px clamp(24px,6vw,96px)", "display": "flex", "justifyContent": "space-between", "alignItems": "baseline", "gap": "16px", "flexWrap": "wrap", "borderTop": "2px solid var(--color-divider)"}}>
  <h2 style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(20px,2.4vw,32px)", "letterSpacing": "-.015em", "margin": "0"}}>Hoardings</h2>
  <span style={{"fontSize": "11px", "letterSpacing": ".02em", "fontWeight": "600", "color": "var(--color-accent-700)"}}>Because sometimes the screen isn't enough.</span>
</div><div style={{"display": "flex", "flexWrap": "wrap", "gap": "clamp(16px,2.4vw,32px)", "padding": "clamp(56px,7vw,110px) clamp(24px,6vw,96px)"}}><div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden", "flex": "15 1 270px"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "3/2", "background": "var(--color-neutral-200)"}}><image-slot id="pf-hoard-1" shape="rect" placeholder="Awesome Palace hoarding" src="work/hoardings/awesome-palace-under-one-roof.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden", "flex": "8 1 144px"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-hoard-2" shape="rect" placeholder="Jewellery Hub billboard" src="work/hoarding.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden", "flex": "10 1 180px"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "1/1", "background": "var(--color-neutral-200)"}}><image-slot id="pf-hoard-3" shape="rect" placeholder="Olive Heights hoarding" src="work/hoardings/olive-heights-dine-in-elegance.jpg"></image-slot></div></div></div></div><div id="tickets" style={{"background": "var(--color-surface)", "color": "var(--color-text)", "padding": "16px clamp(24px,6vw,96px)", "display": "flex", "justifyContent": "space-between", "alignItems": "baseline", "gap": "16px", "flexWrap": "wrap", "borderTop": "2px solid var(--color-divider)"}}>
  <h2 style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(20px,2.4vw,32px)", "letterSpacing": "-.015em", "margin": "0"}}>Tickets</h2>
  <span style={{"fontSize": "11px", "letterSpacing": ".02em", "fontWeight": "600", "color": "var(--color-accent-700)"}}>Small piece of the campaign. Still part of the brand.</span>
</div><div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(260px,1fr))", "gap": "clamp(16px,2.4vw,32px)", "padding": "clamp(56px,7vw,110px) clamp(24px,6vw,96px)"}}><div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/3", "background": "var(--color-neutral-200)"}}><image-slot id="pf-ticket-1" shape="rect" placeholder="Ticket design 1" src="work/tickets/ticket-1.jpg" fit="contain"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/3", "background": "var(--color-neutral-200)"}}><image-slot id="pf-ticket-2" shape="rect" placeholder="Ticket design 2" src="work/tickets/ticket-2.jpg" fit="contain"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/3", "background": "var(--color-neutral-200)"}}><image-slot id="pf-ticket-3" shape="rect" placeholder="Ticket design 3" src="work/tickets/ticket-3.jpg" fit="contain"></image-slot></div></div></div></div><div id="menus" style={{"background": "var(--color-surface)", "color": "var(--color-text)", "padding": "16px clamp(24px,6vw,96px)", "display": "flex", "justifyContent": "space-between", "alignItems": "baseline", "gap": "16px", "flexWrap": "wrap", "borderTop": "2px solid var(--color-divider)"}}>
  <h2 style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(20px,2.4vw,32px)", "letterSpacing": "-.015em", "margin": "0"}}>Menus</h2>
  <span style={{"fontSize": "11px", "letterSpacing": ".02em", "fontWeight": "600", "color": "var(--color-accent-700)"}}>The first thing people read at the table.</span>
</div><div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(clamp(140px,18vw,240px),1fr))", "gap": "clamp(16px,2.4vw,32px)", "padding": "clamp(56px,7vw,110px) clamp(24px,6vw,96px)"}}><div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-menu-1" shape="rect" placeholder="Menu design 1" src="work/menus/olive-heights-mango-festival-1.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-menu-2" shape="rect" placeholder="Menu design 2" src="work/menus/olive-heights-mango-festival-6.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-menu-3" shape="rect" placeholder="Menu design 3" src="work/menus/olive-heights-mango-festival-7.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-menu-4" shape="rect" placeholder="Menu design 4" src="work/menus/olive-heights-summer-cocktails.jpg"></image-slot></div></div></div></div><div id="videos" style={{"background": "var(--color-surface)", "color": "var(--color-text)", "padding": "16px clamp(24px,6vw,96px)", "display": "flex", "justifyContent": "space-between", "alignItems": "baseline", "gap": "16px", "flexWrap": "wrap", "borderTop": "2px solid var(--color-divider)"}}>
  <h2 style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(20px,2.4vw,32px)", "letterSpacing": "-.015em", "margin": "0"}}>Videos</h2>
  <span style={{"fontSize": "11px", "letterSpacing": ".02em", "fontWeight": "600", "color": "var(--color-accent-700)"}}>Reels, promos, campaigns and everything that moves.</span>
</div><div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(320px,1fr))", "gap": "clamp(16px,2.4vw,32px)", "padding": "clamp(56px,7vw,110px) clamp(24px,6vw,96px)"}}>
  <div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><video data-auto src="work/showreel/social-verse-showreel.mp4" poster="work/showreel/social-verse-showreel-poster.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="The Social Verse showreel" style={{"display": "block", "width": "100%", "aspectRatio": "16/9", "objectFit": "cover", "background": "var(--color-neutral-200)"}}></video></div></div>
</div><div id="reels" style={{"background": "var(--color-surface)", "color": "var(--color-text)", "padding": "16px clamp(24px,6vw,96px)", "display": "flex", "justifyContent": "space-between", "alignItems": "baseline", "gap": "16px", "flexWrap": "wrap", "borderTop": "2px solid var(--color-divider)"}}>
  <h2 style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(20px,2.4vw,32px)", "letterSpacing": "-.015em", "margin": "0"}}>Reels</h2>
  <span style={{"fontSize": "11px", "letterSpacing": ".02em", "fontWeight": "600", "color": "var(--color-accent-700)"}}>Short form content that does the work.</span>
</div><div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(clamp(140px,14vw,200px),1fr))", "gap": "clamp(16px,2.4vw,32px)", "padding": "clamp(56px,7vw,110px) clamp(24px,6vw,96px)"}}>
  <div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><video data-auto src="work/reels/reel-olive-heights-1.mp4" poster="work/reels/posters/reel-olive-heights-1.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="Olive Heights reel" style={{"display": "block", "width": "100%", "aspectRatio": "9/16", "objectFit": "cover", "background": "var(--color-neutral-200)"}}></video></div></div>
  <div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><video data-auto src="work/reels/reel-olive-garden-2.mp4" poster="work/reels/posters/reel-olive-garden-2.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="Olive Garden reel" style={{"display": "block", "width": "100%", "aspectRatio": "9/16", "objectFit": "cover", "background": "var(--color-neutral-200)"}}></video></div></div>
  <div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><video data-auto src="work/reels/reel-awesome-palace-rooms.mp4" poster="work/reels/posters/reel-awesome-palace-rooms.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="Awesome Palace reel" style={{"display": "block", "width": "100%", "aspectRatio": "9/16", "objectFit": "cover", "background": "var(--color-neutral-200)"}}></video></div></div>
  <div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><video data-auto src="work/reels/reel-ahvi-gold.mp4" poster="work/reels/posters/reel-ahvi-gold.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="Ahvi Gold reel" style={{"display": "block", "width": "100%", "aspectRatio": "9/16", "objectFit": "cover", "background": "var(--color-neutral-200)"}}></video></div></div>
  <div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><video data-auto src="work/reels/reel-coriander.mp4" poster="work/reels/posters/reel-coriander.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="Coriander reel" style={{"display": "block", "width": "100%", "aspectRatio": "9/16", "objectFit": "cover", "background": "var(--color-neutral-200)"}}></video></div></div>
  <div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><video data-auto src="work/reels/reel-fix24.mp4" poster="work/reels/posters/reel-fix24.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="Fix24 reel" style={{"display": "block", "width": "100%", "aspectRatio": "9/16", "objectFit": "cover", "background": "var(--color-neutral-200)"}}></video></div></div>
  <div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><video data-auto src="work/reels/reel-olive-heights-2.mp4" poster="work/reels/posters/reel-olive-heights-2.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="Olive Heights reel" style={{"display": "block", "width": "100%", "aspectRatio": "9/16", "objectFit": "cover", "background": "var(--color-neutral-200)"}}></video></div></div>
  <div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><video data-auto src="work/reels/reel-olive-garden.mp4" poster="work/reels/posters/reel-olive-garden.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="Olive Garden reel" style={{"display": "block", "width": "100%", "aspectRatio": "9/16", "objectFit": "cover", "background": "var(--color-neutral-200)"}}></video></div></div>
  <div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><video data-auto src="work/reels/reel-awesome-palace.mp4" poster="work/reels/posters/reel-awesome-palace.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="Awesome Palace reel" style={{"display": "block", "width": "100%", "aspectRatio": "9/16", "objectFit": "cover", "background": "var(--color-neutral-200)"}}></video></div></div>
  <div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><video data-auto src="work/reels/reel-olive-heights-3.mp4" poster="work/reels/posters/reel-olive-heights-3.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="Olive Heights reel" style={{"display": "block", "width": "100%", "aspectRatio": "9/16", "objectFit": "cover", "background": "var(--color-neutral-200)"}}></video></div></div>
</div><div id="social" style={{"background": "var(--color-surface)", "color": "var(--color-text)", "padding": "16px clamp(24px,6vw,96px)", "display": "flex", "justifyContent": "space-between", "alignItems": "baseline", "gap": "16px", "flexWrap": "wrap", "borderTop": "2px solid var(--color-divider)"}}>
  <h2 style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(20px,2.4vw,32px)", "letterSpacing": "-.015em", "margin": "0"}}>Social Media</h2>
  <span style={{"fontSize": "11px", "letterSpacing": ".02em", "fontWeight": "600", "color": "var(--color-accent-700)"}}>What happens when the whole feed starts making sense together.</span>
</div><div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(260px,1fr))", "gap": "clamp(16px,2.4vw,32px)", "padding": "clamp(56px,7vw,110px) clamp(24px,6vw,96px)"}}><div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-social-1" shape="rect" placeholder="Olive Heights feed" src="work/grids/olive-heights-grid.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-social-2" shape="rect" placeholder="Olive Garden feed" src="work/grids/olive-garden-grid.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-social-3" shape="rect" placeholder="Fix24 feed" src="work/grids/fix24-grid.jpg"></image-slot></div></div></div></div><div id="showcase" style={{"background": "var(--color-surface)", "color": "var(--color-text)", "padding": "16px clamp(24px,6vw,96px)", "display": "flex", "justifyContent": "space-between", "alignItems": "baseline", "gap": "16px", "flexWrap": "wrap", "borderTop": "2px solid var(--color-divider)"}}>
  <h2 style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(20px,2.4vw,32px)", "letterSpacing": "-.015em", "margin": "0"}}>Showcase of Brands</h2>
  <span style={{"fontSize": "11px", "letterSpacing": ".02em", "fontWeight": "600", "color": "var(--color-accent-700)"}}>Posts built for the brands we look after.</span>
</div><div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(clamp(140px,18vw,240px),1fr))", "gap": "clamp(16px,2.4vw,32px)", "padding": "clamp(56px,7vw,110px) clamp(24px,6vw,96px)"}}><div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-show-1" shape="rect" placeholder="Brand post 1" src="work/creatives/showcase-03.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-show-2" shape="rect" placeholder="Brand post 2" src="work/creatives/showcase-01.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-show-3" shape="rect" placeholder="Brand post 3" src="work/creatives/creative-06.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-show-4" shape="rect" placeholder="Brand post 4" src="work/creatives/creative-02.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-show-5" shape="rect" placeholder="Brand post 5" src="work/creatives/creative-05.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-show-6" shape="rect" placeholder="Brand post 6" src="work/creatives/showcase-02.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-show-7" shape="rect" placeholder="Brand post 7" src="work/creatives/creative-01.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-show-8" shape="rect" placeholder="Brand post 8" src="work/creatives/showcase-05.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-show-9" shape="rect" placeholder="Brand post 9" src="work/creatives/creative-09.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-show-10" shape="rect" placeholder="Brand post 10" src="work/creatives/showcase-04.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-show-11" shape="rect" placeholder="Brand post 11" src="work/creatives/creative-07.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-show-12" shape="rect" placeholder="Brand post 12" src="work/creatives/creative-04.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-show-13" shape="rect" placeholder="Brand post 13" src="work/creatives/showcase-06.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-show-14" shape="rect" placeholder="Brand post 14" src="work/creatives/showcase-07.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-show-15" shape="rect" placeholder="Brand post 15" src="work/creatives/creative-03.jpg"></image-slot></div></div></div>
<div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}><div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}><div style={{"aspectRatio": "4/5", "background": "var(--color-neutral-200)"}}><image-slot id="pf-show-16" shape="rect" placeholder="Brand post 16" src="work/creatives/creative-08.jpg"></image-slot></div></div></div></div><section style={{"borderTop": "2px solid var(--color-divider)", "padding": "clamp(28px,4vw,48px) clamp(24px,6vw,96px)", "display": "flex", "gap": "14px clamp(20px,3vw,44px)", "flexWrap": "wrap", "alignItems": "baseline"}}>
  <span style={{"fontSize": "11px", "letterSpacing": ".18em", "textTransform": "uppercase", "fontWeight": "600", "color": "var(--color-accent-700)"}}>Our Clientele</span>
  <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(14px,1.4vw,19px)", "textTransform": "uppercase", "letterSpacing": ".04em", "color": "var(--color-neutral-500)"}}><img src="clients/olive-heights.png" alt="" style={{"height": "clamp(22px,2.4vw,32px)", "width": "auto", "objectFit": "contain", "verticalAlign": "middle", "marginRight": "10px"}} />Olive Heights</span>
  <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(14px,1.4vw,19px)", "textTransform": "uppercase", "letterSpacing": ".04em", "color": "var(--color-neutral-500)"}}><img src="clients/olive-garden.png" alt="" style={{"height": "clamp(22px,2.4vw,32px)", "width": "auto", "objectFit": "contain", "verticalAlign": "middle", "marginRight": "10px"}} />Olive Garden</span>
  <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(14px,1.4vw,19px)", "textTransform": "uppercase", "letterSpacing": ".04em", "color": "var(--color-neutral-500)"}}><img src="clients/awesome-palace.png" alt="" style={{"height": "clamp(22px,2.4vw,32px)", "width": "auto", "objectFit": "contain", "verticalAlign": "middle", "marginRight": "10px"}} />Awesome Palace</span>
  <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(14px,1.4vw,19px)", "textTransform": "uppercase", "letterSpacing": ".04em", "color": "var(--color-neutral-500)"}}><img src="clients/fix24.png" alt="" style={{"height": "clamp(22px,2.4vw,32px)", "width": "auto", "objectFit": "contain", "verticalAlign": "middle", "marginRight": "10px"}} />Fix24</span>
  <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(14px,1.4vw,19px)", "textTransform": "uppercase", "letterSpacing": ".04em", "color": "var(--color-neutral-500)"}}><img src="clients/ahvi-gold.png" alt="" style={{"height": "clamp(22px,2.4vw,32px)", "width": "auto", "objectFit": "contain", "verticalAlign": "middle", "marginRight": "10px"}} />Ahvi Gold</span>
  <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(14px,1.4vw,19px)", "textTransform": "uppercase", "letterSpacing": ".04em", "color": "var(--color-neutral-500)"}}><img src="clients/jewellery-hub.png" alt="" style={{"height": "clamp(22px,2.4vw,32px)", "width": "auto", "objectFit": "contain", "verticalAlign": "middle", "marginRight": "10px"}} />Jewellery Hub</span>
  <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(14px,1.4vw,19px)", "textTransform": "uppercase", "letterSpacing": ".04em", "color": "var(--color-neutral-500)"}}><img src="clients/paxmeet.png" alt="" style={{"height": "clamp(22px,2.4vw,32px)", "width": "auto", "objectFit": "contain", "verticalAlign": "middle", "marginRight": "10px"}} />Paxmeet</span>
  <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(14px,1.4vw,19px)", "textTransform": "uppercase", "letterSpacing": ".04em", "color": "var(--color-neutral-500)"}}><img src="clients/coriander.png" alt="" style={{"height": "clamp(22px,2.4vw,32px)", "width": "auto", "objectFit": "contain", "verticalAlign": "middle", "marginRight": "10px"}} />Coriander</span>
</section><section data-screen-label="CTA" style={{"position": "relative", "overflow": "hidden", "borderTop": "2px solid var(--color-divider)"}}>
  <div style={{"position": "relative", "aspectRatio": "21/8", "minHeight": "340px", "background": "var(--color-neutral-200)"}}><image-slot id="cta-team" shape="rect" placeholder="Wall of client work" src="work/teasers/wall-portfolio.jpg"></image-slot></div>
  <div style={{"position": "absolute", "inset": "0", "background": "linear-gradient(90deg, rgba(14,13,11,.9) 0%, rgba(14,13,11,.62) 45%, rgba(14,13,11,.22) 82%), linear-gradient(180deg, rgba(14,13,11,.15), rgba(14,13,11,.7))", "pointerEvents": "none"}}></div>
  <div style={{"position": "absolute", "left": "clamp(24px,6vw,96px)", "right": "clamp(24px,6vw,96px)", "bottom": "clamp(24px,4vw,48px)", "pointerEvents": "none"}}>
    <div style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(24px,3.4vw,52px)", "lineHeight": "1.08", "letterSpacing": "-.02em", "color": "#f6f3ec", "maxWidth": "24ch"}}>Your brand deserves more than just a post.<br /><span style={{"color": "#dcc89d"}}>Let's build something worth looking at.</span></div>
    <a data-mag href="contact.html" style={{"pointerEvents": "auto", "display": "inline-flex", "marginTop": "18px", "textDecoration": "none", "color": "#14110c", "background": "var(--color-accent)", "padding": "13px 24px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "14px", "transition": "background .25s"}} className="hv-18">Let's Talk →</a>
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
