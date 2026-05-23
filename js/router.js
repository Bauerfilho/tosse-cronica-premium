/* router.js — hash routing simples + nav dinâmico multi-aula */

import { PAGES, AULAS, getPageBySlug, getPagesByAula, getNeighbors } from '../data/pages.js';
import * as stateMod from './state.js';
import { renderCaseTimeline } from './components/case-timeline.js';
import { initInteractiveQuestions } from './components/interactive-question.js';
import { initScoreDiagrams } from './components/score-diagram.js';

const HOME_SLUG = 'porta-clinica';

function parseHash() {
  const h = (location.hash || '').replace(/^#\//, '').replace(/^#/, '').trim();
  if (!h) return HOME_SLUG;
  return h.split('/').pop();
}

async function loadPage(slug) {
  const page = getPageBySlug(slug);
  const target = document.querySelector('[data-app-root]');
  if (!target) return;

  if (!page) {
    target.innerHTML = renderNotFound(slug);
    document.title = 'Página não encontrada — TB Bauer';
    updateNav(null);
    return;
  }

  try {
    const res = await fetch(page.arquivo, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    target.innerHTML = wrapPage(page, html);

    document.title = `${page.titulo} — TB Bauer`;
    stateMod.setCurrent(slug, page.aula);
    renderAulaNav(document.querySelector('[data-aula-nav]'), page.aula);
    updateNav(slug);
    enhancePage(slug);
    window.scrollTo({ top: 0, behavior: 'instant' });
  } catch (err) {
    target.innerHTML = renderError(slug, err);
  }
}

function wrapPage(page, contentHtml) {
  const neighbors = getNeighbors(page.slug);
  const total = getPagesByAula(page.aula).length;
  return `
    <article class="page" id="page-${page.slug}">
      <header class="page-header">
        <span class="page-eyebrow">${page.aula} · Página ${page.ordem} de ${total}</span>
        ${contentHtml.includes('<h1') ? '' : `<h1>${page.titulo}</h1>`}
      </header>
      ${contentHtml}
      <nav class="page-pagination" aria-label="Navegação entre páginas">
        ${renderPagBtn(neighbors.prev, 'prev')}
        ${renderPagBtn(neighbors.next, 'next')}
      </nav>
    </article>
  `;
}

function renderPagBtn(page, dir) {
  if (!page) {
    return `<button class="pag-btn" data-dir="${dir}" disabled aria-disabled="true">
      <span><span class="pag-label">${dir === 'prev' ? '← Anterior' : 'Próxima →'}</span>
      <span class="pag-title">${dir === 'prev' ? 'Início da aula' : 'Fim da aula'}</span></span>
    </button>`;
  }
  return `<a class="pag-btn" data-dir="${dir}" href="#/${page.slug}">
    <span><span class="pag-label">${dir === 'prev' ? '← Anterior' : 'Próxima →'}</span>
    <span class="pag-title">${page.titulo}</span></span>
  </a>`;
}

function renderNotFound(slug) {
  return `
    <article class="page">
      <h1>Página não encontrada</h1>
      <p>A página <code>${escapeHtml(slug)}</code> ainda não existe nesta plataforma.</p>
      <p>Se você chegou aqui por um link cruzado vindo de outra aula, esta seção pode estar em construção. Volte ao início e siga pelas aulas disponíveis no menu.</p>
      <p><a href="#/${HOME_SLUG}">Voltar ao início</a></p>
    </article>
  `;
}

function renderError(slug, err) {
  return `
    <article class="page">
      <h1>Falha ao carregar a página</h1>
      <p>Não foi possível carregar <code>${escapeHtml(slug)}</code>.</p>
      <p class="text-muted">${escapeHtml(String(err.message || err))}</p>
      <p><a href="#/${HOME_SLUG}">Voltar ao início</a></p>
    </article>
  `;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

function updateNav(slug) {
  document.querySelectorAll('.aula-nav a').forEach(a => {
    const isActive = slug && a.dataset.slug === slug;
    a.classList.toggle('is-active', isActive);
    if (isActive) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
}

function enhancePage(slug) {
  document.querySelectorAll('[data-case-timeline]').forEach(el => {
    const paginaSlug = el.dataset.caseTimeline;
    renderCaseTimeline(el, paginaSlug || slug);
  });
  initInteractiveQuestions(document.querySelector('[data-app-root]'));
  initScoreDiagrams(document.querySelector('[data-app-root]'));
}

export function start() {
  loadPage(parseHash());
  window.addEventListener('hashchange', () => loadPage(parseHash()));
}

export function renderAulaNav(target, currentAulaId = 'A1') {
  if (!target) return;
  const sections = AULAS.map(aula => {
    const pages = getPagesByAula(aula.id);
    if (!pages.length) return '';
    const isCurrent = aula.id === currentAulaId;
    const items = pages.map(p => `
      <li>
        <a href="#/${p.slug}" data-slug="${p.slug}">
          <span class="nav-num">${p.ordem}</span>
          <span>${p.titulo}</span>
        </a>
      </li>
    `).join('');
    return `
      <section class="aula-nav-section${isCurrent ? ' is-current' : ''}">
        <h4 class="aula-nav-section-title">
          <span class="aula-nav-section-id">${aula.id}</span>
          <span>${aula.titulo}</span>
        </h4>
        <ol>${items}</ol>
      </section>
    `;
  }).join('');

  target.innerHTML = `
    <div class="aula-nav-handle" aria-hidden="true"></div>
    <h3>
      <span>Plataforma · Tuberculose</span>
      <button type="button" class="aula-nav-close" aria-label="Fechar menu" hidden>×</button>
    </h3>
    ${sections}
  `;
}
