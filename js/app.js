/* ============================================================
   app.js — shared auth utilities
   ============================================================ */

// ── Theme toggle ──────────────────────────────────────────────
(function () {
  const html = document.documentElement;
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');
  html.setAttribute('data-theme', theme);

  function applyIcon(btn, t) {
    btn.textContent = t === 'dark' ? '☀️' : '🌙';
    btn.setAttribute('aria-label', 'Switch to ' + (t === 'dark' ? 'light' : 'dark') + ' mode');
  }

  document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('[data-theme-toggle]');
    toggles.forEach(function (btn) {
      applyIcon(btn, html.getAttribute('data-theme'));
      btn.addEventListener('click', function () {
        const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        toggles.forEach(function (b) { applyIcon(b, next); });
      });
    });
  });
})();

// ── Password visibility toggle ────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.eye-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const input = document.getElementById(btn.dataset.target);
      if (!input) return;
      input.type = input.type === 'password' ? 'text' : 'password';
      btn.textContent = input.type === 'password' ? '👁' : '🙈';
    });
  });
});

// ── Toast ─────────────────────────────────────────────────────
var _toastTimer = null;
function showToast(msg, type) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.className = 'toast show ' + (type || '');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(function () {
    el.className = 'toast';
  }, 3200);
}

// ── Loading state ─────────────────────────────────────────────
function setLoading(btn, on) {
  if (on) {
    btn.dataset.origText = btn.textContent;
    btn.textContent = 'Please wait…';
    btn.disabled = true;
  } else {
    btn.textContent = btn.dataset.origText || 'Submit';
    btn.disabled = false;
  }
}

// ── Validation helpers ────────────────────────────────────────
function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(id, msg) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = msg;
  const input = el.previousElementSibling || el.closest('.field')?.querySelector('input');
  if (input) input.classList.add('error');
}

function clearErrors() {
  document.querySelectorAll('.field-error').forEach(function (el) { el.textContent = ''; });
  document.querySelectorAll('input.error').forEach(function (el) { el.classList.remove('error'); });
}

// ── User store (localStorage) ─────────────────────────────────
function getUsers() {
  try { return JSON.parse(localStorage.getItem('auth_users') || '[]'); } catch (e) { return []; }
}

function saveUsers(users) {
  localStorage.setItem('auth_users', JSON.stringify(users));
}