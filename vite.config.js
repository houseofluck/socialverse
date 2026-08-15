import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
const r = p => fileURLToPath(new URL(p, import.meta.url));
export default defineConfig({
  plugins: [react()],
  build: { rollupOptions: { input: {
    'home': r('index.html'),
    'portfolio': r('portfolio.html'),
    'services': r('services.html'),
    'case-studies': r('case-studies.html'),
    'case-olive-heights': r('case-olive-heights.html'),
    'case-awesome-palace': r('case-awesome-palace.html'),
    'case-ahvi-gold': r('case-ahvi-gold.html'),
    'about': r('about.html'),
    'clients': r('clients.html'),
    'contact': r('contact.html'),
    'blog': r('blog.html'),
    'blog-reels': r('blog-reels.html'),
    'blog-meta-ads': r('blog-meta-ads.html'),
    'blog-trust': r('blog-trust.html'),
    'blog-hoardings': r('blog-hoardings.html'),
    'blog-local-seo': r('blog-local-seo.html'),
    'blog-grid': r('blog-grid.html')
  } } }
});
