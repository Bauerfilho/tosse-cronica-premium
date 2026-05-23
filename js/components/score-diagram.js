/* score-diagram.js — diagrama interativo de escore pontuável (CHILD em A2; reusável) */

const SCORE_CONFIGS = {
  child: {
    title: 'Escore CHILD — diagnóstico empírico de TB pulmonar em criança',
    components: [
      {
        letter: 'C',
        name: 'Clínica',
        desc: 'Quadro clínico sugestivo (febre + tosse + sudorese + emagrecimento + expectoração) persistente ≥ 2 semanas, sem resposta a antibioticoterapia comum.',
        options: [
          { label: 'Sintomático ≥ 2 semanas, sem resposta a ATB comum', points: 15 },
          { label: 'Assintomático ou < 2 semanas', points: 0 },
        ],
      },
      {
        letter: 'H',
        name: 'História de contato',
        desc: 'Contato próximo com adulto com TB ativa nos últimos 2 anos (intradomiciliar, escolar, ocupacional).',
        options: [
          { label: 'Contato próximo nos últimos 2 anos', points: 10 },
          { label: 'Sem contato declarado', points: 0 },
        ],
      },
      {
        letter: 'I',
        name: 'Imagem radiológica',
        desc: 'Achado radiológico compatível persistente por > 2 semanas (padrão miliar, adenopatia hilar, infiltrado, cavitação, atelectasia).',
        options: [
          { label: 'Compatível persistente > 2 semanas', points: 15 },
          { label: 'Imagem inespecífica ou normal', points: 5 },
          { label: 'Melhora com ATB comum', points: -10 },
        ],
      },
      {
        letter: 'L',
        name: 'Latente (TST/PPD)',
        desc: 'Prova tuberculínica (Mantoux), leitura em 48-72h. Versão didática simplificada.',
        options: [
          { label: 'TST ≥ 10 mm', points: 10 },
          { label: 'TST ≥ 5 mm (e < 10 mm)', points: 5 },
          { label: 'TST não reator (< 5 mm)', points: 0 },
        ],
      },
      {
        letter: 'D',
        name: 'Desnutrição',
        desc: 'Estado nutricional avaliado por peso/altura comparado às curvas de referência da OMS.',
        options: [
          { label: 'Peso/altura < percentil 10', points: 5 },
          { label: 'Peso/altura ≥ percentil 10', points: 0 },
        ],
      },
    ],
    zones: [
      { id: 'low', label: 'Buscar microbiologia', min: 0, max: 29 },
      { id: 'mid', label: 'Considerar tratar', min: 30, max: 39 },
      { id: 'high', label: 'Tratar obrigatoriamente', min: 40, max: 60 },
    ],
    verdicts: {
      low: 'Pontuação < 30: tuberculose pouco provável apenas pelo escore. Diante de suspeita clínica forte, buscar diagnóstico microbiológico adicional (lavado gástrico em 3 amostras seriadas pela manhã para cultura/PCR) e reavaliar em 2-4 semanas.',
      mid: 'Pontuação 30-39: tuberculose possível. Considerar iniciar tratamento empírico, especialmente se a suspeita clínica for forte e a investigação microbiológica adicional for difícil ou demorada.',
      high: 'Pontuação ≥ 40: tuberculose muito provável. Tratar empiricamente com esquema RIPE pediátrico, sem necessidade de aguardar confirmação microbiológica. Microbiologia (lavado gástrico → cultura/PCR) segue em paralelo.',
    },
    range: { min: 0, max: 60 },
  },
};

function clampScore(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function resolveZone(zones, total) {
  for (const z of zones) {
    if (total >= z.min && total <= z.max) return z;
  }
  return zones[0];
}

function renderComponent(component, index) {
  const id = `sd-c-${component.letter.toLowerCase()}-${index}`;
  const optionsHtml = component.options.map((opt, i) => `
    <button
      type="button"
      class="sd-chip"
      data-component="${index}"
      data-points="${opt.points}"
      data-option="${i}"
      aria-pressed="false">
      <span>${opt.label}</span>
      <span class="sd-chip-points">${opt.points > 0 ? '+' : ''}${opt.points}</span>
    </button>
  `).join('');

  return `
    <li class="sd-component" id="${id}" role="group" aria-labelledby="${id}-name">
      <header class="sd-component-header">
        <span class="sd-component-letter" aria-hidden="true">${component.letter}</span>
        <h4 class="sd-component-name" id="${id}-name">${component.name}</h4>
        <span class="sd-component-points" data-component-points="${index}" aria-label="Pontos deste componente">0</span>
      </header>
      <p class="sd-component-desc">${component.desc}</p>
      <div class="sd-options" role="radiogroup" aria-label="Opções de pontuação para ${component.name}">
        ${optionsHtml}
      </div>
    </li>
  `;
}

function renderZones(zones) {
  return zones.map(z => `
    <span class="sd-zone sd-zone--${z.id}" data-zone="${z.id}">${z.label}</span>
  `).join('');
}

function renderScale(range) {
  return `
    <span>${range.min}</span>
    <span>${Math.round(range.max * 0.5)}</span>
    <span>${range.max}+</span>
  `;
}

function renderDiagram(host, config) {
  const componentsHtml = config.components.map(renderComponent).join('');
  const zonesHtml = renderZones(config.zones);
  const scaleHtml = renderScale(config.range);

  host.innerHTML = `
    <section class="score-diagram" role="group" aria-labelledby="sd-title">
      <header class="sd-header">
        <h3 class="sd-title" id="sd-title">${config.title}</h3>
        <div class="sd-total" role="status">
          <span class="sd-total-label">Total</span>
          <output class="sd-total-value" data-score-total aria-live="polite">0</output>
          <span class="sd-total-unit">pts</span>
        </div>
      </header>
      <ol class="sd-components">${componentsHtml}</ol>
      <section class="sd-interpretation" aria-label="Interpretação do escore">
        <div class="sd-bar-wrap">
          <div class="sd-bar" role="presentation">
            ${zonesHtml}
            <span class="sd-marker" data-score-marker aria-hidden="true"></span>
          </div>
          <div class="sd-scale" aria-hidden="true">${scaleHtml}</div>
        </div>
        <div class="sd-verdict sd-verdict--low" data-score-verdict>
          <p class="sd-verdict-label">Interpretação</p>
          <p class="sd-verdict-text">${config.verdicts.low}</p>
        </div>
      </section>
      <button type="button" class="sd-reset" data-score-reset>Resetar pontuação</button>
    </section>
  `;
}

function attachInteractivity(host, config) {
  const state = config.components.map(() => ({ option: null, points: 0 }));

  const totalEl = host.querySelector('[data-score-total]');
  const markerEl = host.querySelector('[data-score-marker]');
  const verdictEl = host.querySelector('[data-score-verdict]');
  const verdictTextEl = verdictEl.querySelector('.sd-verdict-text');
  const resetBtn = host.querySelector('[data-score-reset]');
  const zonesEls = host.querySelectorAll('.sd-zone');
  const componentPointsEls = host.querySelectorAll('[data-component-points]');

  function recompute() {
    const total = state.reduce((acc, s) => acc + s.points, 0);
    totalEl.textContent = String(total);

    state.forEach((s, idx) => {
      componentPointsEls[idx].textContent = (s.points > 0 ? '+' : '') + s.points;
    });

    const zone = resolveZone(config.zones, clampScore(total, config.range.min, config.range.max));
    const ratio = clampScore(total, 0, config.range.max) / config.range.max;
    markerEl.style.left = `${ratio * 100}%`;

    zonesEls.forEach(el => {
      el.classList.toggle('is-active', el.dataset.zone === zone.id);
    });

    verdictEl.classList.remove('sd-verdict--low', 'sd-verdict--mid', 'sd-verdict--high');
    verdictEl.classList.add(`sd-verdict--${zone.id}`);
    verdictTextEl.textContent = config.verdicts[zone.id];
  }

  host.querySelectorAll('.sd-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const compIdx = Number(chip.dataset.component);
      const optIdx = Number(chip.dataset.option);
      const pts = Number(chip.dataset.points);

      const current = state[compIdx];
      const isToggleOff = current.option === optIdx;

      // Limpa todos os chips do mesmo componente
      const siblingChips = host.querySelectorAll(`.sd-chip[data-component="${compIdx}"]`);
      siblingChips.forEach(c => c.setAttribute('aria-pressed', 'false'));

      if (isToggleOff) {
        state[compIdx] = { option: null, points: 0 };
      } else {
        chip.setAttribute('aria-pressed', 'true');
        state[compIdx] = { option: optIdx, points: pts };
      }
      recompute();
    });
  });

  resetBtn.addEventListener('click', () => {
    state.forEach((_, idx) => { state[idx] = { option: null, points: 0 }; });
    host.querySelectorAll('.sd-chip').forEach(c => c.setAttribute('aria-pressed', 'false'));
    recompute();
  });

  recompute();
}

export function initScoreDiagrams(scope) {
  if (!scope) return;
  scope.querySelectorAll('[data-score-diagram]').forEach(host => {
    const configKey = host.dataset.scoreDiagram || 'child';
    const config = SCORE_CONFIGS[configKey];
    if (!config) {
      host.innerHTML = `<p class="text-muted">Configuração de escore desconhecida: ${configKey}</p>`;
      return;
    }
    renderDiagram(host, config);
    attachInteractivity(host, config);
  });
}
