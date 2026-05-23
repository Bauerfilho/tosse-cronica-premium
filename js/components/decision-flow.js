/* decision-flow.js — fluxograma decisional bifurcado responsivo

   Lê elementos com `data-decision-flow` e enriquece com:
   - role/aria-label semânticos no container
   - role nos nós internos pra acessibilidade
   - identificação de bifurcações pra estilização espacial em desktop
*/

function ariaLabelFromNode(el) {
  if (el.hasAttribute('aria-label')) return;
  // Extrai texto visível ignorando small interno; serve como aria-label
  const clone = el.cloneNode(true);
  clone.querySelectorAll('.df-edge-label').forEach(n => n.remove());
  const text = (clone.textContent || '').replace(/\s+/g, ' ').trim();
  if (text) el.setAttribute('aria-label', text);
}

function ensureContainerSemantics(container) {
  if (!container.hasAttribute('role')) {
    container.setAttribute('role', 'note');
  }
  if (!container.hasAttribute('aria-label')) {
    container.setAttribute('aria-label',
      'Algoritmo de decisão para contactante de tuberculose');
  }
}

function ensureNodeSemantics(node) {
  const isQuestion = node.classList.contains('df-node--question');
  if (!node.hasAttribute('role')) {
    node.setAttribute('role', isQuestion ? 'group' : 'note');
  }
  ariaLabelFromNode(node);
}

export function initDecisionFlows(root = document) {
  const flows = root.querySelectorAll('[data-decision-flow], .decision-flow');
  flows.forEach(container => {
    ensureContainerSemantics(container);
    container.querySelectorAll('.df-node').forEach(ensureNodeSemantics);
  });
}
