(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') root.setAttribute('data-theme', 'dark');

  document.addEventListener('DOMContentLoaded', function () {

    // Theme toggle
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      function updateTheme() {
        const dark = root.getAttribute('data-theme') === 'dark';
        btn.textContent = dark ? '☀' : '☾';
        btn.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
      }
      updateTheme();
      btn.addEventListener('click', function () {
        const dark = root.getAttribute('data-theme') === 'dark';
        if (dark) {
          root.removeAttribute('data-theme');
          localStorage.setItem('theme', 'light');
        } else {
          root.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
        }
        updateTheme();
      });
    }

    // Hamburger menu
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.querySelector('nav');
    if (navToggle && nav) {
      navToggle.addEventListener('click', function () {
        nav.classList.toggle('open');
        navToggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
      });
      // Close menu when a nav link is clicked
      nav.querySelectorAll('ul a').forEach(function (link) {
        link.addEventListener('click', function () {
          nav.classList.remove('open');
          navToggle.textContent = '☰';
        });
      });
    }

  });
})();
