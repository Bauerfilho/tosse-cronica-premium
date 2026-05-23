/* interactive-question.js — botão revelar/ocultar resposta + persistência */

import * as stateMod from '../state.js';

function initOne(article) {
  const qid = article.dataset.qid;
  const toggle = article.querySelector('.iq-toggle');
  const answer = article.querySelector('.iq-answer');
  if (!toggle || !answer || !qid) return;

  // Restaura estado se já revelado
  if (stateMod.isRevealed(qid)) {
    show();
  }

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) hide();
    else show();
  });

  function show() {
    toggle.setAttribute('aria-expanded', 'true');
    answer.hidden = false;
    article.dataset.revealed = 'true';
    toggle.textContent = 'Ocultar resposta';
    stateMod.markRevealed(qid);
  }

  function hide() {
    toggle.setAttribute('aria-expanded', 'false');
    answer.hidden = true;
    article.dataset.revealed = 'false';
    toggle.textContent = 'Mostrar resposta';
  }
}

export function initInteractiveQuestions(scope) {
  if (!scope) return;
  scope.querySelectorAll('.interactive-question').forEach(initOne);
}
