const CACHE_NAME = 'tb-bauer-v3';
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
  './css/components/comparison-table.css',
  './css/components/score-diagram.css',
  './css/components/cross-link-card.css',
  './css/components/treatment-timeline.css',
  './css/pages/a1.css',
  './css/pages/a2.css',
  './css/pages/a3.css',
  './js/app.js',
  './js/router.js',
  './js/state.js',
  './js/storage.js',
  './js/interactions.js',
  './js/components/case-timeline.js',
  './js/components/interactive-question.js',
  './js/components/pwa-install.js',
  './js/components/update-toast.js',
  './js/components/score-diagram.js',
  './js/components/treatment-timeline.js',
  './data/pages.js',
  './data/cases/mariana.js',
  './assets/illustrations/mascara-bico-de-pato.svg',
  './assets/illustrations/dinamica-infeccao-tb.svg',
  './assets/illustrations/radiografia-adenopatia-unilateral.svg',
  './assets/illustrations/radiografia-adenopatia-bilateral.svg',
  './assets/illustrations/radiografia-cavitacao-apical.svg',
  './assets/illustrations/radiografia-aspergiloma.svg',
  './assets/illustrations/esquema-cavitacao-pulmonar.svg',
  './assets/illustrations/liquido-pleural-tb.svg',
  './assets/illustrations/icone-rifampicina.svg',
  './assets/illustrations/icone-isoniazida.svg',
  './assets/illustrations/icone-pirazinamida.svg',
  './assets/illustrations/icone-etambutol.svg',
  './assets/illustrations/icone-piridoxina.svg',
  './assets/illustrations/icone-gestante.svg',
  './assets/illustrations/icone-diabetico.svg',
  './assets/illustrations/icone-hiv-positivo.svg',
  './assets/illustrations/coloracao-alaranjada-urina.svg',
  './assets/illustrations/fluxograma-reintroducao-rhp.svg',
  './assets/illustrations/olho-neurite-etambutol.svg',
  './pages/a1/porta-clinica.html',
  './pages/a1/classificacao-duracao.html',
  './pages/a1/tres-causas-mais-tb.html',
  './pages/a1/caso-mariana-parte1.html',
  './pages/a1/caso-mariana-parte2.html',
  './pages/a1/roadmap-tb.html',
  './pages/a2/dinamica-introducao.html',
  './pages/a2/tb-primaria-crianca.html',
  './pages/a2/tb-pos-primaria-adulto.html',
  './pages/a2/comparativo-primaria-pos-primaria.html',
  './pages/a2/metodos-pcr-genexpert.html',
  './pages/a2/metodos-baciloscopia-cultura.html',
  './pages/a2/metodos-lflam-lavado-gastrico.html',
  './pages/a2/comparativo-metodos-diagnosticos.html',
  './pages/a2/escore-child-pediatrico.html',
  './pages/a2/cavitacao-sequelas.html',
  './pages/a2/extrapulmonar-panorama.html',
  './pages/a2/tb-pleural.html',
  './pages/a2/tb-meningea.html',
  './pages/a2/tb-miliar-bcg-sintese.html',
  './pages/a3/introducao-tratar-tb.html',
  './pages/a3/ripe-4-farmacos.html',
  './pages/a3/fases-intensiva-manutencao.html',
  './pages/a3/mariana-inicia-ripe.html',
  './pages/a3/encurtar-manter-prolongar.html',
  './pages/a3/tb-meningea-osteoarticular-12m.html',
  './pages/a3/efeitos-adversos-tabela.html',
  './pages/a3/etambutol-estou-vendo-mal.html',
  './pages/a3/hepatotoxicidade-rhp.html',
  './pages/a3/piridoxina-3-grupos.html',
  './pages/a3/monitoramento-pcr-vs-baciloscopia.html',
  './pages/a3/criterios-falencia-terapeutica.html',
  './pages/a3/mariana-alta-transicao-a4.html',
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
