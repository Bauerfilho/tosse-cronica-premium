/* case-timeline.js — componente caso clínico evolutivo */

import { mariana, beatsByPagina } from '../../data/cases/mariana.js';

const AVATARS = {
  mariana: `
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="ctgrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#34D399"/>
          <stop offset="100%" stop-color="#FBBF24"/>
        </linearGradient>
      </defs>
      <circle cx="32" cy="24" r="10" fill="none" stroke="url(#ctgrad)" stroke-width="2"/>
      <path d="M14 56 C16 42, 26 38, 32 38 C38 38, 48 42, 50 56" fill="none" stroke="url(#ctgrad)" stroke-width="2" stroke-linecap="round"/>
      <line x1="20" y1="44" x2="22" y2="56" stroke="#34D399" stroke-width="1.5" opacity=".7"/>
      <line x1="44" y1="44" x2="42" y2="56" stroke="#FBBF24" stroke-width="1.5" opacity=".7"/>
      <circle cx="40" cy="46" r="1.5" fill="#34D399" opacity=".6"/>
    </svg>
  `,
};

function escapeAttr(s) {
  return String(s).replace(/"/g, '&quot;');
}

function renderBeat(beat, idx) {
  const num = String(beat.ordem).padStart(2, '0');
  const anchors = (beat.ancoragens || []).map(a =>
    `<span class="ct-anchor">${a}</span>`
  ).join('');

  return `
    <li class="ct-beat" data-beat-id="${escapeAttr(beat.id)}">
      <span class="ct-beat-num">Beat ${num}</span>
      <h4 class="ct-beat-title">${beat.titulo}</h4>
      ${beat.quote ? `<blockquote class="ct-beat-quote">${beat.quote}</blockquote>` : ''}
      ${beat.texto ? `<p class="ct-beat-text">${beat.texto}</p>` : ''}
      ${beat.nota ? `<p class="ct-beat-text" style="color:var(--c-text-muted);font-size:.88rem;"><em>${beat.nota}</em></p>` : ''}
      ${anchors ? `<div class="ct-beat-anchors">${anchors}</div>` : ''}
    </li>
  `;
}

export function renderCaseTimeline(host, paginaSlug) {
  const beats = beatsByPagina(paginaSlug);
  if (!beats.length) {
    host.innerHTML = '';
    return;
  }

  const avatarSvg = AVATARS[mariana.avatarSlug] || AVATARS.mariana;

  host.innerHTML = `
    <section class="case-timeline" aria-label="Caso clínico: ${mariana.nome}">
      <header class="ct-header">
        <div class="ct-avatar">${avatarSvg}</div>
        <div class="ct-identity">
          <h3>${mariana.nome}, ${mariana.idade} anos</h3>
          <p class="ct-meta">${mariana.profissao}</p>
        </div>
      </header>
      <ol class="ct-beats">
        ${beats.map(renderBeat).join('')}
      </ol>
    </section>
  `;
}
