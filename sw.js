const CACHE_NAME = 'tb-bauer-v1';
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/base.css',
  './css/theme.css',
  './css/layout.css',
  './css/responsive.css',
  './css/components/cards.css',
  './css/components/case-timeline.css',
  './css/components/duration-table.css',
  './css/components/interactive-question.css',
  './css/components/roadmap-card.css',
  './css/components/glass.css',
  './css/components/pwa-install.css',
  './css/pages/a1.css',
  './js/app.js',
  './js/router.js',
  './js/state.js',
  './js/storage.js',
  './js/interactions.js',
  './js/components/case-timeline.js',
  './js/components/interactive-question.js',
  './js/components/pwa-install.js',
  './js/components/update-toast.js',
  './data/pages.js',
  './data/cases/mariana.js',
  './pages/a1/porta-clinica.html',
  './pages/a1/classificacao-duracao.html',
  './pages/a1/tres-causas-mais-tb.html',
  './pages/a1/caso-mariana-parte1.html',
  './pages/a1/caso-mariana-parte2.html',
  './pages/a1/roadmap-tb.html',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_ASSETS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(res => {
        if (!res || res.status !== 200 || res.type !== 'basic') return res;
        const copy = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
        return res;
      }).catch(() => {
        if (req.mode === 'navigate') return caches.match('./index.html');
        return new Response('', { status: 504 });
      });
    })
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
