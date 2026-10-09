document.addEventListener('DOMContentLoaded', () => {
  // Mobile Burger Menu Toggle
  const burgerBtn = document.getElementById('burgerBtn');
  const mainNav = document.getElementById('mainNav');

  if (burgerBtn && mainNav) {
    burgerBtn.addEventListener('click', () => {
      mainNav.classList.toggle('nav--open');
      burgerBtn.classList.toggle('header__burger--active');
    });

    // Close menu when clicking on any link
    const navLinks = mainNav.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('nav--open');
        burgerBtn.classList.remove('header__burger--active');
      });
    });
  }

  // Smooth Scroll offset adjustment (optional header offset handling)
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});