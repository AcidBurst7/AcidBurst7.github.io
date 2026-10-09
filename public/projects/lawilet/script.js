/**
 * Lawliet Landing Page Interactions
 * Pure Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const burgerBtn = document.getElementById('burger-btn');
  const mainNav = document.getElementById('main-nav');

  if (burgerBtn && mainNav) {
    burgerBtn.addEventListener('click', () => {
      mainNav.classList.toggle('is-open');
      burgerBtn.classList.toggle('is-active');
    });

    const navLinks = mainNav.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        burgerBtn.classList.remove('is-active');
      });
    });
  }

  // 2. Search Form Toggle & Outside Click Handler
  const searchBtn = document.getElementById('search-btn');
  const searchForm = document.getElementById('search-form');
  const searchClose = document.getElementById('search-close');
  const searchInput = searchForm ? searchForm.querySelector('.search-form__input') : null;

  if (searchBtn && searchForm) {
    const toggleSearch = (e) => {
      e.stopPropagation();
      const isActive = searchForm.classList.toggle('is-active');
      searchBtn.classList.toggle('is-active', isActive);

      if (isActive && searchInput) {
        searchInput.focus();
      }
    };

    const closeSearch = () => {
      searchForm.classList.remove('is-active');
      searchBtn.classList.remove('is-active');
    };

    searchBtn.addEventListener('click', toggleSearch);

    if (searchClose) {
      searchClose.addEventListener('click', (e) => {
        e.stopPropagation();
        closeSearch();
      });
    }

    // Prevents closing when clicking inside form
    searchForm.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    // Close on outside click
    document.addEventListener('click', () => {
      closeSearch();
    });

    // Close on 'Escape' key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeSearch();
      }
    });
  }

  // 3. Smooth Scroll for Anchor Links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();

        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
