document.addEventListener('DOMContentLoaded', () => {
  // Mobile Burger Menu Toggle
  const burgerBtn = document.getElementById('burger-btn');
  const navMenu = document.getElementById('nav-menu');

  if (burgerBtn && navMenu) {
    burgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('nav--open');
      burgerBtn.classList.toggle('burger--active');
    });

    // Close menu when clicking outside or on a link
    document.addEventListener('click', (event) => {
      if (!navMenu.contains(event.target) && !burgerBtn.contains(event.target)) {
        navMenu.classList.remove('nav--open');
      }
    });

    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('nav--open');
      });
    });
  }

  // Filter Tabs Interaction
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('tab-btn--active'));
      button.classList.add('tab-btn--active');
    });
  });
});
