/* interactive-question.js — duas variantes:
 *  (1) padrão: botão revelar/ocultar resposta + persistência por qid
 *  (2) --exam-breakdown: 4 alternativas A/B/C/D clicáveis com revelação por alternativa + botão revelar todas
 */

import * as stateMod from '../state.js';

/* ------------------------------------------------------------------ */
/* Variante PADRÃO                                                     */
/* ------------------------------------------------------------------ */

function initClassic(article) {
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

/* ------------------------------------------------------------------ */
/* Variante --exam-breakdown                                          */
/* ------------------------------------------------------------------ */

function initExamBreakdown(article) {
  const qid = article.dataset.questionId || article.dataset.qid;
  const altButtons = Array.from(article.querySelectorAll('.iq-alt'));
  const revealAllBtn = article.querySelector('.iq-reveal-all');
  if (!altButtons.length) return;

  altButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const wasPressed = btn.getAttribute('aria-pressed') === 'true';
      const newPressed = !wasPressed;
      btn.setAttribute('aria-pressed', String(newPressed));
      btn.setAttribute('aria-expanded', String(newPressed));
      const comentario = btn.parentElement.querySelector('.iq-comentario');
      if (comentario) comentario.hidden = !newPressed;
    });
  });

  if (revealAllBtn) {
    revealAllBtn.addEventListener('click', () => {
      const expanded = revealAllBtn.getAttribute('aria-expanded') === 'true';
      const newExpanded = !expanded;
      revealAllBtn.setAttribute('aria-expanded', String(newExpanded));
      revealAllBtn.textContent = newExpanded
        ? 'Ocultar gabarito completo'
        : 'Ver gabarito e desmontagem completa';

      altButtons.forEach(btn => {
        btn.setAttribute('aria-pressed', String(newExpanded));
        btn.setAttribute('aria-expanded', String(newExpanded));
        const comentario = btn.parentElement.querySelector('.iq-comentario');
        if (comentario) comentario.hidden = !newExpanded;
      });

      if (qid && newExpanded) stateMod.markRevealed(qid);
    });

    if (qid && stateMod.isRevealed(qid)) {
      revealAllBtn.click();
    }
  }
}

/* ------------------------------------------------------------------ */
/* Dispatcher                                                          */
/* ------------------------------------------------------------------ */

export function initInteractiveQuestions(scope) {
  if (!scope) return;
  scope.querySelectorAll('.interactive-question').forEach(article => {
    if (article.classList.contains('interactive-question--exam-breakdown')) {
      initExamBreakdown(article);
    } else {
      initClassic(article);
    }
  });
}
