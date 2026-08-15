import React from 'react';
import { DCLogic, useDC } from '../lib/dc.js';
import { cssText } from '../lib/cssText.js';

class Component extends DCLogic {
  renderVals() {
    const SOL = {"n":"02","title":"Social Solutions","k":"Stop the scroll","c":"Always-on content engines and communities run with editorial discipline — thirty posts a week that never feel like thirty posts a week.","tags":["Content engines","Community","Creators","Listening"],"dels":[{"t":"Always-on content systems","m":"Calendars to posts"},{"t":"Community management","m":"Clubs, not comment sections"},{"t":"Creator & influencer","m":"Casting to contracts"},{"t":"Social listening","m":"Trends before they trend"}],"steps":[{"n":"01","t":"Tune in","d":"Channel audits, listening and community mapping before any content ships."},{"n":"02","t":"Build the engine","d":"Formats, calendar and voice — a system, not a scramble."},{"n":"03","t":"Run the room","d":"Publish, moderate and iterate weekly with real-time data."}],"stat":"1.4B","statL":"Earned views","prevT":"Brand Solutions","prevHref":"Brandsolutions.html","nextT":"Media Solutions","nextHref":"Mediasolutions.html"};
    return {
      ...SOL,
      megaLinks: [
        { t: 'Brand Solutions', d: 'Positioning & identity', href: 'Brandsolutions.html', sq: 'width:10px; height:10px; flex:none; background:#ab905c;' },
        { t: 'Social Solutions', d: 'Content & community', href: 'Socialsolutions.html', sq: 'width:10px; height:10px; flex:none; background:#ff8fab;' },
        { t: 'Media Solutions', d: 'Planning & buying', href: 'Mediasolutions.html', sq: 'width:10px; height:10px; flex:none; background:#2ec4b6;' },
        { t: 'Tech Solutions', d: 'Web, apps, commerce', href: 'Techsolutions.html', sq: 'width:10px; height:10px; flex:none; background:#1d1a14;' },
        { t: 'Film Solutions', d: 'Direction to post', href: 'Filmsolutions.html', sq: 'width:10px; height:10px; flex:none; background:#ff6b35;' }
      ]
    };
  }
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
        e.preventDefault();
        try { sessionStorage.setItem('tsv_wipe', '1'); } catch (err) { }
        wipe.style.transition = 'transform .55s cubic-bezier(.76,0,.24,1)';
        wipe.style.transform = 'translateX(0)';
        setTimeout(() => { location.href = href; }, 560);
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
    const clocks = [...document.querySelectorAll('[data-clock]')];
    const setClocks = () => clocks.forEach(el => {
      try { el.textContent = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', timeZone: el.getAttribute('data-clock') }).format(new Date()); } catch (e) { }
    });
    setClocks();
    const ci = setInterval(setClocks, 30000);
    this._c.push(() => clearInterval(ci));
    const nav = $('nav'), mega = $('mega'), megaBtn = $('megaBtn'), caret = $('megaCaret');
    let megaOpen = false, megaT = 0;
    const setMega = open => {
      megaOpen = open;
      if (!mega) return;
      mega.style.opacity = open ? '1' : '0';
      mega.style.transform = open ? 'none' : 'translateY(-10px)';
      mega.style.pointerEvents = open ? 'auto' : 'none';
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
          setTimeout(() => { location.href = 'solutions.html'; }, 560);
        } else location.href = 'solutions.html';
      });
      this.on(nav, 'pointerleave', () => { megaT = setTimeout(() => setMega(false), 300); });
      this.on(mega, 'pointerenter', () => clearTimeout(megaT));
      this.on(window, 'scroll', () => { if (megaOpen && Math.abs(scrollY - openY) > 48) setMega(false); }, { passive: true });
    }
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
    if (!calm && matchMedia('(pointer: fine)').matches) {
      document.querySelectorAll('[data-mag]').forEach(el => {
        const mv = e => { const b = el.getBoundingClientRect(); el.style.transform = `translate(${(e.clientX - b.left - b.width / 2) * .2}px, ${(e.clientY - b.top - b.height / 2) * .2}px)`; };
        const lv = () => { el.style.transition = 'transform .4s cubic-bezier(.34,1.56,.64,1), background .25s'; el.style.transform = 'none'; setTimeout(() => { el.style.transition = 'background .25s'; }, 400); };
        this.on(el, 'pointermove', mv); this.on(el, 'pointerleave', lv);
      });
    }
  }
}

export default function SocialSolutionsPage() {
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
  <div style={{"display": "flex", "alignItems": "center", "gap": "clamp(16px,2.6vw,36px)", "padding": "18px clamp(24px,6vw,96px)"}}>
    <a href="index.html" style={{"display": "flex", "alignItems": "center", "gap": "11px", "textDecoration": "none", "marginRight": "auto"}}>
      
      <img src="logo-ink.png" alt="The Social Verse" width="351" height="236" style={{"display": "block", "height": "clamp(28px,3vw,36px)", "width": "auto"}} />
    </a>
    <div style={{"display": "flex", "alignItems": "center", "gap": "clamp(16px,2.6vw,36px)", "marginRight": "auto"}}>
      <a href="work.html" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(var(--color-accent-600),var(--color-accent-600))", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hv-1">Work</a>
      <div id="megaWrap" style={{"position": "static"}}>
        <button id="megaBtn" type="button" style={{"border": "0", "background": "none", "font": "inherit", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-accent-700)", "borderBottom": "2px solid var(--color-accent)", "padding": "0 0 2px", "display": "inline-flex", "alignItems": "center", "gap": "6px"}}>Solutions <span id="megaCaret" style={{"fontSize": "10px", "transition": "transform .3s"}}>▾</span></button>
      </div>
      <a href="studio.html" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(var(--color-accent-600),var(--color-accent-600))", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hv-1">Studio</a>
      <a href="journal.html" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(var(--color-accent-600),var(--color-accent-600))", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hv-1">Journal</a>
      <a href="contact.html" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(var(--color-accent-600),var(--color-accent-600))", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hv-1">Contact</a>
    </div>
    <a data-mag href="contact.html" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "letterSpacing": ".04em", "color": "var(--color-bg)", "background": "#1d1a14", "padding": "11px 20px", "borderRadius": "999px", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "background .3s"}} className="hv-3">Contact us →</a>
  </div>
  <div id="mega" style={{"position": "absolute", "left": "0", "right": "0", "top": "100%", "background": "var(--color-bg)", "borderBottom": "2px solid var(--color-divider)", "boxShadow": "0 24px 48px rgba(43,40,32,.18)", "opacity": "0", "transform": "translateY(-10px)", "pointerEvents": "none", "transition": "opacity .35s, transform .35s"}}>
    <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(280px,1fr))", "gap": "clamp(24px,4vw,64px)", "padding": "clamp(24px,3vw,44px) clamp(24px,6vw,96px)"}}>
      <div style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
        {vals.megaLinks.map((ml, $index) => (<React.Fragment key={$index}>
          <a href={ml.href} style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "14px", "textDecoration": "none", "padding": "12px 8px", "borderBottom": "2px solid var(--color-divider)", "transition": "background .25s, padding-left .25s"}} className="hv-4">
            <span style={{"display": "flex", "alignItems": "center", "gap": "12px"}}><span style={cssText(ml.sq)}></span><span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(17px,1.6vw,22px)", "letterSpacing": "-.01em", "color": "var(--color-text)"}}>{ml.t}</span></span>
            <span style={{"fontSize": "11px", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "color-mix(in srgb, var(--color-text) 50%, transparent)"}}>{ml.d}</span>
          </a>
        </React.Fragment>))}
      </div>
      <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "18px", "alignContent": "start"}}>
        <a href="work.html" style={{"textDecoration": "none"}}>
          <span style={{"display": "block", "overflow": "hidden", "border": "2px solid var(--color-divider)"}}><span style={{"display": "block", "aspectRatio": "16/10", "background": "var(--color-neutral-200)"}}><image-slot id="case-halka" shape="rect" placeholder="Featured — Halka" src="work/creatives/social-grid.jpg"></image-slot></span></span>
          <span style={{"display": "block", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "14px", "marginTop": "10px", "color": "var(--color-text)"}}>Halka — The Monday Drop</span>
          <span style={{"display": "block", "fontSize": "11px", "letterSpacing": ".12em", "textTransform": "uppercase", "marginTop": "4px", "color": "color-mix(in srgb, var(--color-text) 50%, transparent)"}}>Sold out in 41 min</span>
        </a>
        <a href="work.html" style={{"textDecoration": "none"}}>
          <span style={{"display": "block", "overflow": "hidden", "border": "2px solid var(--color-divider)"}}><span style={{"display": "block", "aspectRatio": "16/10", "background": "var(--color-neutral-200)"}}><image-slot id="case-juno" shape="rect" placeholder="Featured — Juno" src="work/case/ahvi-storefront.jpg"></image-slot></span></span>
          <span style={{"display": "block", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "14px", "marginTop": "10px", "color": "var(--color-text)"}}>Juno Bank — Speaks plainly</span>
          <span style={{"display": "block", "fontSize": "11px", "letterSpacing": ".12em", "textTransform": "uppercase", "marginTop": "4px", "color": "color-mix(in srgb, var(--color-text) 50%, transparent)"}}>2.1M downloads</span>
        </a>
      </div>
    </div>
  </div>
</nav>

<header data-screen-label="Solution hero" style={{"position": "relative", "overflow": "hidden", "background": "var(--sol)", "color": "var(--sol-ink)", "padding": "clamp(80px,10vw,150px) clamp(24px,6vw,96px)"}}>
  <div aria-hidden="true" style={{"position": "absolute", "right": "-14px", "bottom": "-40px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(180px,26vw,400px)", "lineHeight": ".8", "color": "transparent", "WebkitTextStroke": "2px color-mix(in srgb, var(--sol-ink) 25%, transparent)", "pointerEvents": "none"}}>{vals.n}</div>
  <div style={{"position": "relative"}}>
    <h1 style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "textTransform": "uppercase", "fontSize": "clamp(44px,6.6vw,104px)", "lineHeight": ".98", "letterSpacing": "-.025em", "margin": "0", "color": "inherit"}}>
      <span style={{"display": "block", "overflow": "hidden", "paddingBottom": ".12em", "marginBottom": "-.12em"}}><span data-ml data-mld="0" style={{"display": "block"}}>{vals.title}</span></span>
    </h1>
    <p data-rv data-rvd="2" style={{"fontSize": "clamp(15px,1.3vw,18px)", "lineHeight": "1.65", "margin": "clamp(24px,3.5vh,40px) 0 0", "maxWidth": "46ch", "opacity": ".85"}}>{vals.c}</p>
    <div data-rv data-rvd="3" style={{"display": "flex", "gap": "8px", "flexWrap": "wrap", "marginTop": "22px"}}>
      {vals.tags.map((tg, $index) => (<React.Fragment key={$index}><span style={{"fontSize": "10px", "letterSpacing": ".12em", "textTransform": "uppercase", "fontWeight": "600", "border": "2px solid currentColor", "padding": "4px 10px", "opacity": ".85"}}>{tg}</span></React.Fragment>))}
    </div>
  </div>
</header>

<section data-screen-label="Deliverables" style={{"padding": "clamp(70px,9vw,130px) clamp(24px,6vw,96px)"}}>
  <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(300px,1fr))", "gap": "clamp(36px,6vw,96px)", "alignItems": "start"}}>
    <div>
      <div data-rv data-rvd="1" style={{"borderTop": "2px solid var(--color-divider)"}}>
        {vals.dels.map((d, $index) => (<React.Fragment key={$index}>
          <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "baseline", "gap": "14px", "padding": "16px 4px", "borderBottom": "2px solid var(--color-divider)"}}>
            <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(16px,1.6vw,20px)"}}>{d.t}</span>
            <span style={{"fontSize": "11px", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "color-mix(in srgb, var(--color-text) 55%, transparent)"}}>{d.m}</span>
          </div>
        </React.Fragment>))}
      </div>
    </div>
    <div>
      <div style={{"display": "flex", "flexDirection": "column", "gap": "14px"}}>
        {vals.steps.map((st, $index) => (<React.Fragment key={$index}>
          <div data-rv style={{"border": "2px solid var(--color-divider)", "padding": "18px 20px", "display": "flex", "gap": "16px", "alignItems": "baseline"}}>
            <span style={{"fontSize": "12px", "fontVariantNumeric": "tabular-nums", "fontWeight": "800", "color": "var(--color-accent-700)", "flex": "none"}}>{st.n}</span>
            <span><span style={{"display": "block", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "16px"}}>{st.t}</span><span style={{"display": "block", "fontSize": "13.5px", "lineHeight": "1.55", "marginTop": "4px", "color": "color-mix(in srgb, var(--color-text) 62%, transparent)"}}>{st.d}</span></span>
          </div>
        </React.Fragment>))}
      </div>
      <div data-rv data-rvd="1" style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "14px", "marginTop": "26px", "borderTop": "2px solid var(--color-divider)", "paddingTop": "18px", "flexWrap": "wrap"}}>
        <div><span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(28px,2.8vw,40px)", "fontVariantNumeric": "tabular-nums", "color": "var(--color-accent-700)"}}>{vals.stat}</span><span style={{"display": "block", "fontSize": "10px", "letterSpacing": ".16em", "textTransform": "uppercase", "color": "color-mix(in srgb, var(--color-text) 55%, transparent)", "marginTop": "4px"}}>{vals.statL}</span></div>
        <a href="work.html" style={{"textDecoration": "none"}} className="btn btn-primary">See the proof</a>
      </div>
    </div>
  </div>
</section>

<section data-screen-label="Pager" style={{"borderTop": "2px solid var(--color-divider)", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(280px,1fr))", "gap": "2px", "background": "var(--color-divider)"}}>
  <a href={vals.prevHref} style={{"background": "var(--color-bg)", "textDecoration": "none", "padding": "clamp(28px,4vw,48px) clamp(24px,6vw,96px)", "transition": "background .3s"}} className="hv-14">
    <span style={{"display": "block", "fontSize": "11px", "letterSpacing": ".18em", "textTransform": "uppercase", "color": "color-mix(in srgb, var(--color-text) 50%, transparent)"}}>← Previous</span>
    <span style={{"display": "block", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(20px,2.2vw,30px)", "letterSpacing": "-.015em", "marginTop": "8px", "color": "var(--color-text)"}}>{vals.prevT}</span>
  </a>
  <a href={vals.nextHref} style={{"background": "var(--color-bg)", "textDecoration": "none", "padding": "clamp(28px,4vw,48px) clamp(24px,6vw,96px)", "textAlign": "right", "transition": "background .3s"}} className="hv-14">
    <span style={{"display": "block", "fontSize": "11px", "letterSpacing": ".18em", "textTransform": "uppercase", "color": "color-mix(in srgb, var(--color-text) 50%, transparent)"}}>Next →</span>
    <span style={{"display": "block", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(20px,2.2vw,30px)", "letterSpacing": "-.015em", "marginTop": "8px", "color": "var(--color-text)"}}>{vals.nextT}</span>
  </a>
</section>

<section data-screen-label="Brief CTA" style={{"borderTop": "2px solid var(--color-divider)", "padding": "clamp(56px,7vw,96px) clamp(24px,6vw,96px)", "display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "24px", "flexWrap": "wrap"}}>
  <div style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(26px,3vw,42px)", "letterSpacing": "-.02em", "maxWidth": "22ch"}}>Sounds like your brief?</div>
  <a data-mag href="contact.html" style={{"textDecoration": "none"}} className="btn btn-primary">Start a project</a>
</section>

</div>

<div id="footSpace" aria-hidden="true" style={{"height": "480px"}}></div>

<footer id="bigFoot" data-screen-label="Footer" style={{"position": "fixed", "left": "0", "right": "0", "bottom": "0", "zIndex": "1", "background": "#0f0d0a", "color": "#f1ece1", "padding": "clamp(36px,5vw,64px) clamp(24px,6vw,96px) 24px", "overflow": "hidden"}}>
  <div style={{"display": "flex", "justifyContent": "center", "gap": "clamp(12px,2vw,24px)", "flexWrap": "wrap", "marginBottom": "clamp(28px,4vw,48px)"}}>
    <span style={{"border": "2px solid rgba(241,236,225,.3)", "borderRadius": "999px", "padding": "9px 18px", "fontSize": "12px", "display": "inline-flex", "gap": "8px", "alignItems": "center"}}><strong style={{"fontFamily": "var(--font-heading)"}}>Mumbai:</strong> <span data-clock="Asia/Kolkata">—</span></span>
    <span style={{"border": "2px solid rgba(241,236,225,.3)", "borderRadius": "999px", "padding": "9px 18px", "fontSize": "12px", "display": "inline-flex", "gap": "8px", "alignItems": "center"}}><strong style={{"fontFamily": "var(--font-heading)"}}>Bengaluru:</strong> <span data-clock="Asia/Kolkata">—</span></span>
    <span style={{"border": "2px solid rgba(241,236,225,.3)", "borderRadius": "999px", "padding": "9px 18px", "fontSize": "12px", "display": "inline-flex", "gap": "8px", "alignItems": "center"}}><strong style={{"fontFamily": "var(--font-heading)"}}>New York:</strong> <span data-clock="America/New_York">—</span></span>
  </div>
  <div aria-label="The Social Verse" style={{"display": "flex", "justifyContent": "center", "alignItems": "baseline", "gap": "clamp(8px,1vw,18px)", "whiteSpace": "nowrap"}}>
    
    <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(40px,10.4vw,178px)", "lineHeight": ".95", "letterSpacing": "-.03em", "color": "#f1ece1"}}>Social Verse</span>
    <span style={{"fontSize": "clamp(12px,1.5vw,24px)", "fontWeight": "800", "alignSelf": "flex-start", "color": "var(--color-accent-300)"}}>®</span>
  </div>
  <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "18px 36px", "flexWrap": "wrap", "borderTop": "2px solid rgba(241,236,225,.22)", "marginTop": "clamp(24px,3vw,40px)", "paddingTop": "18px"}}>
    <div style={{"display": "flex", "gap": "16px", "flexWrap": "wrap"}}>
      <a href="https://instagram.com" target="_blank" rel="noopener" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "color": "#f1ece1"}} className="hv-11">Instagram</a>
      <a href="https://linkedin.com" target="_blank" rel="noopener" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "color": "#f1ece1"}} className="hv-11">LinkedIn</a>
      <a href="https://youtube.com" target="_blank" rel="noopener" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "color": "#f1ece1"}} className="hv-11">YouTube</a>
      <a href="https://x.com" target="_blank" rel="noopener" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "color": "#f1ece1"}} className="hv-11">X</a>
    </div>
    <div style={{"display": "flex", "gap": "16px", "flexWrap": "wrap"}}>
      <a href="index.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hv-11">Home</a>
      <a href="work.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hv-11">Work</a>
      <a href="solutions.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hv-11">Solutions</a>
      <a href="studio.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hv-11">Studio</a>
      <a href="journal.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hv-11">Journal</a>
      <a href="contact.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hv-11">Contact</a>
    </div>
    <div style={{"textAlign": "right", "fontSize": "11px", "color": "rgba(241,236,225,.55)"}}>Proudly independent since 2016. All noise, no static. © 2026</div>
  </div>
</footer>

    </>
  );
}
