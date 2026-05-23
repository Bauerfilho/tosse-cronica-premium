/* pwa-install.js — botão de instalação PWA */

let deferredPrompt = null;

export function initPWAInstall(btn) {
  if (!btn) return;

  // Esconde se já está instalado
  if (window.matchMedia('(display-mode: standalone)').matches) {
    btn.hidden = true;
    return;
  }

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    btn.classList.add('is-visible');
  });

  btn.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    try {
      await deferredPrompt.userChoice;
    } finally {
      deferredPrompt = null;
      btn.classList.remove('is-visible');
    }
  });

  window.addEventListener('appinstalled', () => {
    btn.classList.remove('is-visible');
    btn.hidden = true;
    deferredPrompt = null;
  });
}
