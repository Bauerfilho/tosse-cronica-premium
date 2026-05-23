/* update-toast.js — toast de notificação de nova versão do SW */

export function showUpdateToast(onConfirm) {
  const existing = document.getElementById('updateToast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'updateToast';
  toast.className = 'update-toast';
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'polite');
  toast.innerHTML = `
    <div class="update-toast-msg">Nova versão disponível</div>
    <div class="update-toast-actions">
      <button type="button" class="update-toast-btn update-toast-btn--secondary" data-action="later">Depois</button>
      <button type="button" class="update-toast-btn update-toast-btn--primary" data-action="now">Atualizar agora</button>
    </div>
  `;
  document.body.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => toast.classList.add('is-visible'));

  toast.querySelector('[data-action="now"]').addEventListener('click', () => {
    onConfirm?.();
    dismiss();
  });

  toast.querySelector('[data-action="later"]').addEventListener('click', () => {
    dismiss();
    markUpdateBadge();
  });

  function dismiss() {
    toast.classList.remove('is-visible');
    setTimeout(() => toast.remove(), 280);
  }
}

function markUpdateBadge() {
  const btn = document.querySelector('[data-pwa-install]');
  if (btn) btn.classList.add('has-update');
}
