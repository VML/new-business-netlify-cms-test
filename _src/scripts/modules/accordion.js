document.addEventListener('DOMContentLoaded', () => {
  const debounce = require('../utils/debounce');
  const body = document.getElementsByTagName('body')[0];
  const accordions = document.querySelectorAll('[data-faq-dt]');
  const header = document.querySelector('[data-header]');

  if (accordions) {
    const headerHeight = () => {
      const height = header.clientHeight;
      return height;
    };

    accordions.forEach(dt => {
      dt.addEventListener(
        'click',
        () => {
          dt.classList.toggle('is-expanded');
          window.nbApp.utils.scrollToSelector(dt, headerHeight());
        },
        false
      );
    });
  }
});
