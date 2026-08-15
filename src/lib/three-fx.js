// three-fx.js — quiet WebGL fields for The Social Verse (three.js via CDN)
let _p; const getTHREE = () => (_p ||= import('three'));
const INK = 0x6f6555, RED = 0xab905c;
const clamp01 = v => v < 0 ? 0 : v > 1 ? 1 : v;
const smooth = t => t * t * (3 - 2 * t);

function makeRenderer(THREE, canvas) {
  const r = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
  r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  return r;
}
function raf(fn) {
  let live = true, on = true, id = 0;
  const tick = t => { if (!live) return; if (on) fn(t / 1000); id = requestAnimationFrame(tick); };
  id = requestAnimationFrame(tick);
  return { pause() { on = false; }, resume() { on = true; }, kill() { live = false; cancelAnimationFrame(id); } };
}
function autoPause(el, l) {
  let vis = true, tab = true;
  const apply = () => (vis && tab) ? l.resume() : l.pause();
  const io = new IntersectionObserver(es => { vis = es[es.length - 1].isIntersecting; apply(); }, { threshold: 0.01 });
  io.observe(el);
  const dv = () => { tab = !document.hidden; apply(); };
  document.addEventListener('visibilitychange', dv);
  return () => { io.disconnect(); document.removeEventListener('visibilitychange', dv); };
}

// ————— 1. dotField — a fine grid of ink dots, breathing slowly; cursor displaces gently —————
export async function dotField(canvas, opts = {}) {
  const THREE = await getTHREE();
  const { calm = false, gap = 26, amp = 4, mouseR = 150 } = opts;
  const renderer = makeRenderer(THREE, canvas);
  const scene = new THREE.Scene();
  const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, -10, 10);
  let geo = null, mat = null, pts = null, base = null, N = 0, vw = 2, vh = 2;
  const build = () => {
    vw = canvas.clientWidth || 800; vh = canvas.clientHeight || 600;
    renderer.setSize(vw, vh, false);
    cam.left = -vw / 2; cam.right = vw / 2; cam.top = vh / 2; cam.bottom = -vh / 2;
    cam.updateProjectionMatrix();
    const cols = Math.ceil(vw / gap) + 1, rows = Math.ceil(vh / gap) + 1;
    N = cols * rows;
    base = new Float32Array(N * 2);
    const pos = new Float32Array(N * 3), col = new Float32Array(N * 3);
    const ink = new THREE.Color(INK), red = new THREE.Color(RED);
    const pops = [new THREE.Color(0xab905c), new THREE.Color(0xff6b35), new THREE.Color(0x2ec4b6), new THREE.Color(0xff8fab), new THREE.Color(0xffd23f)];
    let i = 0;
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const x = -vw / 2 + c * gap, y = vh / 2 - r * gap;
      base[i * 2] = x; base[i * 2 + 1] = y;
      pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = 0;
      const cc = Math.random() < 0.035 ? pops[Math.floor(Math.random() * pops.length)] : ink;
      col[i * 3] = cc.r; col[i * 3 + 1] = cc.g; col[i * 3 + 2] = cc.b;
      i++;
    }
    if (pts) { scene.remove(pts); geo.dispose(); mat.dispose(); }
    geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    mat = new THREE.PointsMaterial({ vertexColors: true, size: 2.1 * renderer.getPixelRatio(), sizeAttenuation: false, transparent: true, opacity: 0.5 });
    pts = new THREE.Points(geo, mat); pts.frustumCulled = false;
    scene.add(pts);
  };
  build();
  const ro = new ResizeObserver(build); ro.observe(canvas);
  let px = 1e5, py = 1e5, sx = 1e5, sy = 1e5;
  const loop = raf(t => {
    sx += (px - sx) * .08; sy += (py - sy) * .08;
    const a = geo.attributes.position.array;
    const T = t * (calm ? 0.3 : 0.6);
    for (let i = 0; i < N; i++) {
      const bx = base[i * 2], by = base[i * 2 + 1];
      let x = bx + Math.sin(by * 0.012 + T) * amp * 0.6;
      let y = by + Math.sin(bx * 0.011 + T * 0.9) * amp + Math.cos((bx + by) * 0.006 - T * 0.7) * amp * 0.5;
      if (!calm) {
        const dx = bx - sx, dy = by - sy, d2 = dx * dx + dy * dy, R = mouseR;
        if (d2 < R * R && d2 > 0.01) {
          const d = Math.sqrt(d2), f = smooth(1 - d / R);
          x += dx / d * f * 16; y += dy / d * f * 16;
        }
      }
      a[i * 3] = x; a[i * 3 + 1] = y;
    }
    geo.attributes.position.needsUpdate = true;
    renderer.render(scene, cam);
  });
  const unhook = autoPause(canvas, loop);
  return {
    setPointer(cx, cy) { const r = canvas.getBoundingClientRect(); px = cx - r.left - r.width / 2; py = r.height / 2 - (cy - r.top); },
    clearPointer() { px = 1e5; py = 1e5; },
    pause: () => loop.pause(), resume: () => loop.resume(),
    dispose() { loop.kill(); unhook(); ro.disconnect(); try { geo.dispose(); mat.dispose(); } catch (e) { } renderer.dispose(); }
  };
}

// ————— 2. quietMorph — a small ink point-cloud easing between three forms on scroll —————
export async function quietMorph(canvas, opts = {}) {
  const THREE = await getTHREE();
  const { calm = false, n = 1600 } = opts;
  const A = new Float32Array(n * 3), B = new Float32Array(n * 3), C = new Float32Array(n * 3);
  const GA = (1 + Math.sqrt(5)) / 2;
  for (let i = 0; i < n; i++) {
    const th = 2 * Math.PI * i / GA, ph = Math.acos(1 - 2 * (i + 0.5) / n);
    A[i * 3] = Math.cos(th) * Math.sin(ph); A[i * 3 + 1] = Math.sin(th) * Math.sin(ph); A[i * 3 + 2] = Math.cos(ph);
  }
  for (let i = 0; i < n; i++) {
    const t = i / n * Math.PI * 2, p = 2, q = 3;
    const r = Math.cos(q * t) + 2;
    const cx = r * Math.cos(p * t) * 0.4, cy = r * Math.sin(p * t) * 0.4, cz = -Math.sin(q * t) * 0.4;
    const a = Math.random() * Math.PI * 2, tr = 0.13 * Math.sqrt(Math.random());
    B[i * 3] = cx + Math.cos(a) * tr; B[i * 3 + 1] = cy + Math.sin(a) * tr; B[i * 3 + 2] = cz + Math.sin(a * 2) * tr;
  }
  const cols = Math.ceil(Math.sqrt(n * 1.6)), rows = Math.ceil(n / cols);
  for (let i = 0; i < n; i++) {
    const gx = (i % cols) / (cols - 1), gz = Math.floor(i / cols) / (rows - 1);
    C[i * 3] = (gx - 0.5) * 2.8; C[i * 3 + 1] = 0; C[i * 3 + 2] = (gz - 0.5) * 1.8;
  }
  const pos = new Float32Array(n * 3), col = new Float32Array(n * 3);
  const ink = new THREE.Color(INK), red = new THREE.Color(RED);
  for (let i = 0; i < n; i++) {
    const c = Math.random() < 0.06 ? red : ink;
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const mat = new THREE.PointsMaterial({ vertexColors: true, size: 0.022, transparent: true, opacity: 0.55 });
  const pts = new THREE.Points(geo, mat); pts.frustumCulled = false;
  const group = new THREE.Group(); group.add(pts);
  const scene = new THREE.Scene(); scene.add(group);
  const cam = new THREE.PerspectiveCamera(36, 1, 0.1, 50);
  const renderer = makeRenderer(THREE, canvas);
  const layout = () => {
    const w = canvas.clientWidth || 600, h = canvas.clientHeight || 600;
    renderer.setSize(w, h, false);
    cam.aspect = w / h; cam.updateProjectionMatrix();
    cam.position.z = cam.aspect >= 1 ? 3.4 : 3.4 / cam.aspect;
  };
  layout();
  const ro = new ResizeObserver(layout); ro.observe(canvas);
  let P = 0;
  const loop = raf(t => {
    const seg = P * 2;
    const k1 = smooth(clamp01(seg)), k2 = smooth(clamp01(seg - 1));
    for (let i = 0; i < n; i++) {
      let x = A[i * 3] + (B[i * 3] - A[i * 3]) * k1, y = A[i * 3 + 1] + (B[i * 3 + 1] - A[i * 3 + 1]) * k1, z = A[i * 3 + 2] + (B[i * 3 + 2] - A[i * 3 + 2]) * k1;
      x += (C[i * 3] - x) * k2; y += (C[i * 3 + 1] - y) * k2; z += (C[i * 3 + 2] - z) * k2;
      if (k2 > 0) y += Math.sin(x * 3 + t * (calm ? 0.3 : 0.9)) * 0.16 * k2;
      pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z;
    }
    geo.attributes.position.needsUpdate = true;
    group.rotation.y = (calm ? 0.04 : 0.08) * t + P * 1.2;
    group.rotation.x = 0.14 + P * 0.4 - k2 * 0.3;
    renderer.render(scene, cam);
  });
  const unhook = autoPause(canvas, loop);
  return {
    setProgress(p) { P = clamp01(p); },
    pause: () => loop.pause(), resume: () => loop.resume(),
    dispose() { loop.kill(); unhook(); ro.disconnect(); geo.dispose(); mat.dispose(); renderer.dispose(); }
  };
}

// ————— 3. lineWave — horizontal hairlines drifting like slow water; one red thread —————
export async function lineWave(canvas, opts = {}) {
  const THREE = await getTHREE();
  const { calm = false, lines = 24, seg = 150 } = opts;
  const renderer = makeRenderer(THREE, canvas);
  const scene = new THREE.Scene();
  const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, -10, 10);
  const ink = new THREE.Color(INK), red = new THREE.Color(RED);
  let vw = 2, vh = 2; const objs = [];
  const build = () => {
    vw = canvas.clientWidth || 800; vh = canvas.clientHeight || 600;
    renderer.setSize(vw, vh, false);
    cam.left = -vw / 2; cam.right = vw / 2; cam.top = vh / 2; cam.bottom = -vh / 2;
    cam.updateProjectionMatrix();
    objs.forEach(o => { scene.remove(o.line); o.geo.dispose(); o.mat.dispose(); });
    objs.length = 0;
    const band = vh * 0.7, y0 = -band / 2;
    for (let li = 0; li < lines; li++) {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array((seg + 1) * 3), 3));
      const isRed = li === Math.floor(lines * 0.62);
      const mat = new THREE.LineBasicMaterial({ color: isRed ? red : ink, transparent: true, opacity: isRed ? 0.9 : 0.2 + 0.12 * Math.pow(Math.sin(li * 1.7), 2) });
      const line = new THREE.Line(geo, mat); line.frustumCulled = false;
      scene.add(line);
      objs.push({ geo, mat, line, yBase: y0 + band * (li / (lines - 1)) });
    }
  };
  build();
  const ro = new ResizeObserver(build); ro.observe(canvas);
  let px = 1e5, py = 0, sx = 1e5, sy = 0;
  const loop = raf(t => {
    sx += (px - sx) * .07; sy += (py - sy) * .07;
    const T = t * (calm ? 0.25 : 0.55);
    for (let li = 0; li < objs.length; li++) {
      const o = objs[li], a = o.geo.attributes.position.array;
      for (let i = 0; i <= seg; i++) {
        const x = -vw / 2 + vw * (i / seg);
        let y = o.yBase + Math.sin(x * 0.004 + T + li * 0.32) * 12 + Math.sin(x * 0.0018 - T * 0.7 + li * 0.5) * 18;
        if (!calm) {
          const dx = x - sx, dy = o.yBase - sy, d2 = dx * dx + dy * dy, R = 190;
          if (d2 < R * R) { const f = smooth(1 - Math.sqrt(d2) / R); y += (dy >= 0 ? 1 : -1) * f * 24; }
        }
        a[i * 3] = x; a[i * 3 + 1] = y; a[i * 3 + 2] = 0;
      }
      o.geo.attributes.position.needsUpdate = true;
    }
    renderer.render(scene, cam);
  });
  const unhook = autoPause(canvas, loop);
  return {
    setPointer(cx, cy) { const r = canvas.getBoundingClientRect(); px = cx - r.left - r.width / 2; py = r.height / 2 - (cy - r.top); },
    clearPointer() { px = 1e5; },
    pause: () => loop.pause(), resume: () => loop.resume(),
    dispose() { loop.kill(); unhook(); ro.disconnect(); objs.forEach(o => { try { o.geo.dispose(); o.mat.dispose(); } catch (e) { } }); renderer.dispose(); }
  };
}
