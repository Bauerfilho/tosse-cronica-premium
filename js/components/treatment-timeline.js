/* treatment-timeline.js — enriquece treatment-timeline com ARIA dinâmico e legendas auto */

const VARIANT_CAPTIONS = {
  'padrao': 'Esquema RIPE padrão · 6 meses',
  'prolongado-12m': 'Esquema prolongado · 12 meses (meníngea, osteoarticular)',
  'pediatrico-4m': 'Esquema pediátrico encurtado · 4 meses (HPMZ, SHINE 2022)',
  'sequencial-rhp': 'Reintrodução pós-hepatotoxicidade · R → H → P',
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
