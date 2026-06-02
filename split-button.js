function notify(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2000);
}

function toggleDrop(id, btn) {
  const drop = document.getElementById(id);
  const isOpen = drop.classList.contains('open');
  // Close all dropdowns first
  document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
  document.querySelectorAll('.split-btn__arrow').forEach(b => b.classList.remove('open'));
  // Open the clicked one if it was closed
  if (!isOpen) {
    drop.classList.add('open');
    btn.classList.add('open');
  }
}

function closeDrop(id) {
  document.getElementById(id).classList.remove('open');
  document.querySelectorAll('.split-btn__arrow').forEach(b => b.classList.remove('open'));
}

// Close dropdowns when clicking outside
document.addEventListener('click', e => {
  if (!e.target.closest('.split-btn')) {
    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
    document.querySelectorAll('.split-btn__arrow').forEach(b => b.classList.remove('open'));
  }
});