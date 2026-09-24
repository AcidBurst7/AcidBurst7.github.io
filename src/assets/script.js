// JavaScript for Mobile Menu & EN/RU Language Switching
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Elements
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const hamburgerIcon = document.getElementById('hamburgerIcon');
  const closeIcon = document.getElementById('closeIcon');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Language Data Dictionary
  const translations = {
    EN: {
      heroTitle: 'Elias is a <span class="text-primary">web designer</span> and <span class="text-primary">front-end developer</span>',
      heroSubtitle: 'He crafts responsive websites where technology meets creativity with seamless design and clean code.',
      contactBtn: 'Contact me !!',
      statusText: 'Currently working on <span class="text-whiteText font-medium">Portfolio</span>',
      quoteText: 'With great power comes great electricity bill',
      quoteAuthor: '- Dr. Who'
    },
    RU: {
      heroTitle: 'Элиас — <span class="text-primary">веб-дизайнер</span> и <span class="text-primary">front-end разработчик</span>',
      heroSubtitle: 'Он создает адаптивные веб-сайты, где технологии встречаются с креативностью и чистым кодом.',
      contactBtn: 'Связаться со мной !!',
      statusText: 'Сейчас работает над <span class="text-whiteText font-medium">Портфолио</span>',
      quoteText: 'С большой силой приходит большой счет за электричество',
      quoteAuthor: '- Доктор Кто'
    }
  };

  let currentLang = 'EN';

  // Function to toggle Mobile Navigation Drawer
  function toggleMenu() {
    const isOpen = !mobileDrawer.classList.contains('hidden');
    if (isOpen) {
      mobileDrawer.classList.add('hidden');
      mobileDrawer.classList.remove('flex');
      hamburgerIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      document.body.style.overflow = 'auto';
    } else {
      mobileDrawer.classList.remove('hidden');
      mobileDrawer.classList.add('flex');
      hamburgerIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  mobileMenuBtn?.addEventListener('click', toggleMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (!mobileDrawer.classList.contains('hidden')) {
        toggleMenu();
      }
    });
  });

  // Language Switching Logic
  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    document.getElementById('heroTitle').innerHTML = translations[lang].heroTitle;
    document.getElementById('heroSubtitle').textContent = translations[lang].heroSubtitle;
    document.getElementById('contactBtn').textContent = translations[lang].contactBtn;
    document.getElementById('statusText').innerHTML = translations[lang].statusText;
    document.getElementById('quoteText').textContent = translations[lang].quoteText;
    document.getElementById('quoteAuthor').textContent = translations[lang].quoteAuthor;

    // Update select dropdowns and buttons
    const langSwitcher = document.getElementById('langSwitcher');
    if (langSwitcher) langSwitcher.value = lang;

    document.querySelectorAll('.lang-option').forEach(btn => {
      if (btn.dataset.lang === lang) {
        btn.classList.add('text-whiteText', 'font-bold');
        btn.classList.remove('text-grayText');
      } else {
        btn.classList.remove('text-whiteText', 'font-bold');
        btn.classList.add('text-grayText');
      }
    });
  }

  document.getElementById('langSwitcher')?.addEventListener('change', (e) => {
    setLanguage(e.target.value);
  });

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });
});
