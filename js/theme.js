(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') root.setAttribute('data-theme', 'dark');

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    function update() {
      const dark = root.getAttribute('data-theme') === 'dark';
      btn.textContent = dark ? '☀' : '☾';
      btn.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
    }

    update();

    btn.addEventListener('click', function () {
      const dark = root.getAttribute('data-theme') === 'dark';
      if (dark) {
        root.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      } else {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
      update();
    });
  });
})();
