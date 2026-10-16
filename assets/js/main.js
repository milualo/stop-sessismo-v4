(() => {
  const button = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#menu');
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
  if (!button || !menu) return;
  const close = () => { button.setAttribute('aria-expanded','false'); menu.classList.remove('is-open'); };
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
    menu.classList.toggle('is-open', !open);
  });
  menu.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { close(); button.focus(); } });
  window.addEventListener('resize', () => { if (window.innerWidth > 900) close(); });
})();
