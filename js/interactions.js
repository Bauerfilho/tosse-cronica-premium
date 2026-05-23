/* interactions.js — interações de UI (menu mobile, etc.) */

export function initMobileMenu() {
  const nav = document.querySelector('.aula-nav');
  const toggleBtn = document.querySelector('[data-menu-toggle]');
  if (!nav || !toggleBtn) return;

  const mq = window.matchMedia('(max-width: 880px)');

  function applyMobileBehavior(active) {
    if (!active) {
      nav.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  }
  applyMobileBehavior(mq.matches);
  mq.addEventListener('change', e => applyMobileBehavior(e.matches));

  toggleBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Handle drag/click on bottom sheet handle
  const handle = nav.querySelector('.aula-nav-handle');
  if (handle) {
    handle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Fecha menu mobile ao navegar
  nav.addEventListener('click', e => {
    if (mq.matches && e.target.closest('a')) {
      nav.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* Auto-hide do header: some ao rolar pra baixo, reaparece ao rolar pra cima.
   Sempre visível perto do topo. Não esconde quando o drawer mobile está aberto
   (usuário precisa do hamburger pra fechar). Respeita prefers-reduced-motion. */
export function initHeaderAutoHide() {
  const header = document.querySelector('.app-header');
  if (!header) return;

  const nav = document.querySelector('.aula-nav');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  const TOP_GUARD = 80;   // px: abaixo disso, header sempre visível
  const DELTA_MIN = 4;    // px: ignora micro-scrolls (inércia de trackpad)

  let lastY = window.scrollY;
  let ticking = false;

  function update() {
    const currentY = window.scrollY;
    const delta = currentY - lastY;
    ticking = false;

    if (Math.abs(delta) < DELTA_MIN) return;

    // Drawer mobile aberto → mantém header visível pro usuário fechar
    if (nav && nav.classList.contains('is-open')) {
      header.classList.remove('is-hidden');
      lastY = currentY;
      return;
    }

    if (currentY < TOP_GUARD) {
      header.classList.remove('is-hidden');
    } else if (delta > 0) {
      header.classList.add('is-hidden');     // rolando pra baixo → esconde
    } else {
      header.classList.remove('is-hidden');  // rolando pra cima → mostra
    }

    lastY = currentY;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
}
