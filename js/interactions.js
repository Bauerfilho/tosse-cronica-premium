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
