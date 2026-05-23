/* app.js — entrypoint da plataforma */

import { start, renderAulaNav } from './router.js';
import { initMobileMenu } from './interactions.js';
import { initPWAInstall } from './components/pwa-install.js';
import { showUpdateToast } from './components/update-toast.js';

function bootSW() {
  if (!('serviceWorker' in navigator)) return;

  navigator.serviceWorker.register('./sw.js').then(registration => {
    // Verifica atualização a cada 1h
    setInterval(() => registration.update(), 60 * 60 * 1000);

    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;
      if (!newWorker) return;
      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
          showUpdateToast(() => {
            newWorker.postMessage({ type: 'SKIP_WAITING' });
          });
        }
      });
    });

    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (refreshing) return;
      refreshing = true;
      window.location.reload();
    });
  }).catch(() => { /* SW falhou — silencioso */ });
}

function bootUI() {
  // Renderiza nav lateral (router re-renderiza com aula atual após cada loadPage)
  const navTarget = document.querySelector('[data-aula-nav]');
  if (navTarget) renderAulaNav(navTarget);

  // Inicializa interações de menu mobile
  initMobileMenu();

  // PWA install button
  initPWAInstall(document.querySelector('[data-pwa-install]'));

  // Inicia router (hash routing)
  start();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    bootUI();
    bootSW();
  });
} else {
  bootUI();
  bootSW();
}
