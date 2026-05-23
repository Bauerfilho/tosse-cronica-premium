const CACHE_NAME = 'tb-bauer-v7';
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
  './css/components/decision-flow.css',
  './css/components/risk-comparison.css',
  './css/pages/a1.css',
  './css/pages/a2.css',
  './css/pages/a3.css',
  './css/pages/a4.css',
  './css/pages/a5.css',
  './css/pages/a7.css',
  './css/pages/a6.css',
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
  './js/components/decision-flow.js',
  './data/pages.js',
  './data/cases/mariana.js',
  './data/cases/lucita.js',
  './data/cases/index.js',
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
  './assets/illustrations/avatar-lucita.svg',
  './assets/illustrations/icone-ppd-aplicacao.svg',
  './assets/illustrations/icone-igra-tubo-sangue.svg',
  './assets/illustrations/icone-janela-imunologica.svg',
  './assets/illustrations/icone-rifapentina.svg',
  './assets/illustrations/esquema-rn-quimioprofilaxia.svg',
  './assets/illustrations/bcg-tecnica-intradermica.svg',
  './assets/illustrations/bcg-cicatriz-evolucao.svg',
  './assets/illustrations/icone-hiv-tb-coinfeccao.svg',
  './assets/illustrations/icone-tdo-supervisao.svg',
  './assets/illustrations/aspergilose-3-formas-comparativo.svg',
  './assets/illustrations/bronquiectasias-centrais-abpa.svg',
  './assets/illustrations/sinal-lua-crescente-aspergiloma.svg',
  './assets/illustrations/infiltrado-bilateral-invasiva.svg',
  './assets/illustrations/triade-invasiva-diagrama.svg',
  './assets/illustrations/esquema-galactomanana-diagnostico.svg',
  './assets/illustrations/icone-voriconazol.svg',
  './assets/illustrations/icone-isavuconazol.svg',
  './assets/illustrations/icone-caspofungina.svg',
  './assets/illustrations/icone-itraconazol.svg',
  './assets/illustrations/roda-de-leme-microscopia.svg',
  './assets/illustrations/asa-de-morcego-radiografia.svg',
  './assets/illustrations/estomatite-moriforme-oral.svg',
  './assets/illustrations/triade-mnemonica-pcm.svg',
  './assets/illustrations/esquema-termodimorfico-pcm.svg',
  './assets/illustrations/adrenais-tropismo-pcm.svg',
  './assets/illustrations/icone-anfo-b-iv.svg',
  './assets/illustrations/icone-bactrim.svg',
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
  './pages/a4/intro-contactantes-vigilancia.html',
  './pages/a4/lucita-chega-ubs.html',
  './pages/a4/triagem-sintomatico-assintomatico.html',
  './pages/a4/ppd-igra-janela-imunologica.html',
  './pages/a4/grupos-vulneraveis-riscos-relativos.html',
  './pages/a4/principio-tratar-so-alto-risco.html',
  './pages/a4/lucita-resultado-decisao.html',
  './pages/a4/quatro-esquemas-latente-comparados.html',
  './pages/a4/lucita-3hp-inicia.html',
  './pages/a4/rn-contactante-quimioprofilaxia-primaria.html',
  './pages/a4/hiv-tb-co-infeccao.html',
  './pages/a4/bcg-operacional.html',
  './pages/a4/sintese-transicao-modulo-micoses.html',
  './pages/a5/aspergilose-introducao.html',
  './pages/a5/abpa-hipersensibilidade-asma.html',
  './pages/a5/abpa-criterios-isham-tratamento.html',
  './pages/a5/aspergilose-cronica-aspergiloma-introducao.html',
  './pages/a5/aspergilose-cronica-sinal-menisco-manejo.html',
  './pages/a5/aspergilose-invasiva-imunossuprimido-triade.html',
  './pages/a5/aspergilose-invasiva-diagnostico-tratamento.html',
  './pages/a5/hemoptise-grave-manejo-transversal.html',
  './pages/a5/aspergilose-matriz-comparativa-3-formas.html',
  './pages/a5/aspergilose-erros-comuns-recuperacao-ativa.html',
  './pages/a5/aspergilose-sintese-transicao-paracoco.html',
  './pages/a7/paracoco-introducao.html',
  './pages/a7/agente-ciclo-termodimorfico.html',
  './pages/a7/duas-formas-comparativo.html',
  './pages/a7/forma-aguda-juvenil-crianca5a.html',
  './pages/a7/forma-cronica-adulto-moriforme.html',
  './pages/a7/patognomonico-roda-de-leme.html',
  './pages/a7/patognomonico-asa-de-morcego.html',
  './pages/a7/acometimento-adrenal-caso-addison.html',
  './pages/a7/diagnostico-laboratorial-sorologico.html',
  './pages/a7/ddx-denso-tabela-comparativa.html',
  './pages/a7/tratamento-escalonado-gravidade.html',
  './pages/a7/sintese-cura-recidiva-transicao-a6.html',
  './pages/a6/histoplasmose-introducao.html',
  './pages/a6/forma-aguda-autolimitada.html',
  './pages/a6/manifestacoes-inflamatorias-reativas-ufrj.html',
  './pages/a6/forma-cronica-mimetiza-tb.html',
  './pages/a6/forma-disseminada-imunossuprimido.html',
  './pages/a6/diagnostico-4-metodos.html',
  './pages/a6/tratamento-escalonado-gravidade-histo.html',
  './pages/a6/mediastinite-fibrosante-hierarquia-br.html',
  './pages/a6/caso-prova-1-caverna-morcego.html',
  './pages/a6/caso-prova-2-centro-oeste-desmontagem.html',
  './pages/a6/sintese-a6-transicao-modulo-4.html',
  './pages/a6/sintese-modulo-4-comparativa.html',
  './assets/illustrations/caverna-morcego-cenario.svg',
  './assets/illustrations/radiografia-histoplasmose-aguda.svg',
  './assets/illustrations/lesoes-molusco-umbilicacao.svg',
  './assets/illustrations/triade-cenarios-exposicao.svg',
  './assets/illustrations/quatro-doencas-modulo4.svg',
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
