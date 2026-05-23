/* treatment-timeline.js — enriquece treatment-timeline com ARIA dinâmico e legendas auto */

const VARIANT_CAPTIONS = {
  'padrao': 'Esquema RIPE padrão · 6 meses',
  'prolongado-12m': 'Esquema prolongado · 12 meses (meníngea, osteoarticular)',
  'pediatrico-4m': 'Esquema pediátrico encurtado · 4 meses (HPMZ, SHINE 2022)',
  'sequencial-rhp': 'Reintrodução pós-hepatotoxicidade · R → H → P',
  'semanal-12doses': 'Esquema 3HP · semanal · 3 meses · 12 doses totais',
  'diaria-9m': 'Esquema 9H · isoniazida diária · 9 meses · 270 doses',
  'diaria-4m': 'Esquema 4R · rifampicina diária · 4 meses · 120 doses',
  'diaria-3m-combinada': 'Esquema 3HR · isoniazida + rifampicina diárias · 3 meses · 90 doses',
  'rn-qpp-bcg': 'Quimioprofilaxia RN · rifampicina 4 meses → BCG ao final',
  'antifungico-longo': 'Esquema antifúngico longo · itraconazol VO · 9-18 meses (PCM leve-moderado)',
  'antifungico-grave': 'Esquema antifúngico grave · anfo B IV 2-4 sem → itraconazol VO ≥ 24 meses (PCM grave)',
};

const VARIANT_ARIA = {
  'padrao':
    'Esquema RIPE padrão de 6 meses: 2 meses de fase intensiva com 4 fármacos (rifampicina, isoniazida, pirazinamida, etambutol) seguidos de 4 meses de manutenção com rifampicina e isoniazida.',
  'prolongado-12m':
    'Esquema prolongado de 12 meses para tuberculose meníngea ou osteoarticular: 2 meses de fase intensiva com 4 fármacos seguidos de 10 meses de manutenção com rifampicina e isoniazida.',
  'pediatrico-4m':
    'Esquema pediátrico encurtado de 4 meses (esquema HPMZ, validado pelo ensaio SHINE 2022): 2 meses de intensiva com rifampicina, isoniazida e pirazinamida, seguidos de 2 meses de manutenção com rifampicina e isoniazida.',
  'sequencial-rhp':
    'Sequência de reintrodução dos fármacos após hepatotoxicidade: rifampicina primeiro, depois isoniazida, depois pirazinamida, com pausa de 3 a 7 dias entre cada introdução para reavaliar transaminases.',
  'semanal-12doses':
    'Esquema 3HP de tratamento da tuberculose latente: rifapentina mais isoniazida administradas uma vez por semana durante três meses, totalizando doze doses. Esquema preferido por adesão alta.',
  'diaria-9m':
    'Esquema 9H de tratamento da tuberculose latente: isoniazida diária durante nove meses, totalizando duzentas e setenta doses. Alternativa histórica, adesão baixa.',
  'diaria-4m':
    'Esquema 4R de tratamento da tuberculose latente: rifampicina diária durante quatro meses, totalizando cento e vinte doses. Alternativa intermediária.',
  'diaria-3m-combinada':
    'Esquema 3HR de tratamento da tuberculose latente: isoniazida mais rifampicina diárias durante três meses, totalizando noventa doses.',
  'rn-qpp-bcg':
    'Quimioprofilaxia primária no recém-nascido contactante de bacilífera: rifampicina diária durante quatro meses, seguida da vacinação com BCG ao final dos quatro meses. Inversão da ordem padrão (BCG normalmente nas primeiras horas de vida).',
  'antifungico-longo':
    'Esquema antifúngico longo para paracoccidioidomicose leve a moderada: itraconazol via oral, dose padrão de 200 miligramas por dia, durante nove a dezoito meses, em regime ambulatorial.',
  'antifungico-grave':
    'Esquema antifúngico para paracoccidioidomicose grave: anfotericina B intravenosa por duas a quatro semanas em ambiente hospitalar até melhora clínica, seguida de switch para itraconazol via oral em regime ambulatorial por pelo menos vinte e quatro meses no total.',
};

function ensureCaption(el, variant) {
  if (el.querySelector('.tt-caption')) return;
  const caption = VARIANT_CAPTIONS[variant];
  if (!caption) return;
  const captionEl = document.createElement('span');
  captionEl.className = 'tt-caption';
  captionEl.textContent = caption;
  el.insertBefore(captionEl, el.firstChild);
}

function ensureAria(el, variant) {
  if (el.hasAttribute('aria-label')) return;
  const aria = VARIANT_ARIA[variant];
  if (!aria) return;
  el.setAttribute('role', 'img');
  el.setAttribute('aria-label', aria);
}

export function initTreatmentTimelines(root = document) {
  const timelines = root.querySelectorAll('.treatment-timeline');
  timelines.forEach(el => {
    const variant = el.dataset.variant || 'padrao';
    ensureCaption(el, variant);
    ensureAria(el, variant);
  });
}
