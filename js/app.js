/* ===== THEME TOGGLE ===== */
(function () {
  const btn = document.getElementById('themeBtn');
  const root = document.documentElement;
  let dark = root.getAttribute('data-theme') !== 'light';

  function apply(d) {
    root.setAttribute('data-theme', d ? 'dark' : 'light');
    btn.setAttribute('aria-label', 'Switch to ' + (d ? 'light' : 'dark') + ' mode');
    btn.innerHTML = d
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
  }

  apply(dark);
  btn.addEventListener('click', function () { dark = !dark; apply(dark); });
})();

/* ===== IN-MEMORY USER STORE ===== */
// Uses a single global object so data persists across pages within the same tab session.
var __authUsers = window.__authUsers || {};
var __authSession = window.__authSession || null;
window.__authUsers = __authUsers;
window.__authSession = __authSession;

function getUsers()   { return window.__authUsers; }
function saveUsers(u) { window.__authUsers = u; }
function getSession() { return window.__authSession; }
function setSession(u){ window.__authSession = u; }
function clearSession(){ window.__authSession = null; }

/* ===== VALIDATION HELPERS ===== */
function validEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function setErr(groupId, errId, msg) {
  var g = document.getElementById(groupId);
  if (g) { var iw = g.querySelector('.iw'); if (iw) iw.classList.add('err'); }
  var el = document.getElementById(errId);
  if (el) { el.querySelector('span').textContent = msg; el.classList.add('show'); }
}

function clearErr(groupId, errId) {
  var g = document.getElementById(groupId);
  if (g) { var iw = g.querySelector('.iw'); if (iw) iw.classList.remove('err'); }
  var el = document.getElementById(errId);
  if (el) el.classList.remove('show');
}

/* ===== BUTTON LOADING STATE ===== */
function btnLoad(btn) {
  btn.classList.add('loading');
  btn.disabled = true;
  return new Promise(function (resolve) {
    setTimeout(function () {
      btn.classList.remove('loading');
      btn.disabled = false;
      resolve();
    }, 1200);
  });
}

/* ===== PASSWORD SHOW/HIDE ===== */
function toggleEye(inputId, btn) {
  var inp = document.getElementById(inputId);
  var ico = btn.querySelector('i');
  var hidden = inp.type === 'password';
  inp.type = hidden ? 'text' : 'password';
  ico.className = hidden ? 'bx bx-hide' : 'bx bx-show';
  btn.setAttribute('aria-label', hidden ? 'Hide password' : 'Show password');
}

/* ===== PASSWORD STRENGTH ===== */
function strengthMeter(pw) {
  var fill = document.getElementById('sfill');
  var lbl  = document.getElementById('slbl');
  if (!fill || !lbl) return;
  if (!pw) { fill.style.width = '0'; lbl.textContent = 'Enter a password'; lbl.style.color = ''; return; }
  var s = 0;
  if (pw.length >= 8) s++;
  if (/[A-Z]/.test(pw)) s++;
  if (/[0-9]/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  var cfg = [
    { w:'25%', bg:'var(--error)',   t:'Weak' },
    { w:'25%', bg:'var(--error)',   t:'Weak' },
    { w:'50%', bg:'#d97706',        t:'Fair' },
    { w:'75%', bg:'#ca8a04',        t:'Good' },
    { w:'100%',bg:'var(--success)', t:'Strong ✓' }
  ];
  var c = cfg[s] || cfg[0];
  fill.style.width = c.w; fill.style.background = c.bg;
  lbl.textContent = c.t; lbl.style.color = c.bg;
}

/* ===== TOAST ===== */
var toastTimer;
function showToast(msg, type) {
  type = type || 'info';
  var el  = document.getElementById('toastEl');
  var ico = document.getElementById('toastIco');
  var txt = document.getElementById('toastMsg');
  if (!el) return;
  txt.textContent = msg;
  ico.className = type === 'success' ? 'bx bx-check-circle'
                : type === 'error'   ? 'bx bx-error-circle'
                : 'bx bx-info-circle';
  el.className = 'toast ' + type + ' show';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { el.classList.remove('show'); }, 3500);
}
