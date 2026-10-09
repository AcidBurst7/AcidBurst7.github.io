<script setup lang="ts">
import Projects from './components/ProjectsList.vue'
</script>

<template>
  <div>
    <aside class="hidden lg:flex fixed left-8 top-0 flex-col items-center gap-4 z-40">
      <div class="w-[1px] h-32 bg-grayText"></div>
      <a
        href="https://github.com/AcidBurst7"
        target="_blank"
        rel="noopener noreferrer"
        class="text-grayText hover:text-primary transition-colors p-1"
        title="GitHub"
      >
        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path
            d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
          />
        </svg>
      </a>
      <a
        href="https://hh.ru/resume/36bac50cff1126d3cf0039ed1f4739764f4a72"
        target="_blank"
        rel="noopener noreferrer"
        class="text-grayText hover:text-primary transition-colors p-1"
        title="GitHub"
      >
        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0ZM5 6.5a.5.5 0 0 1 .5-.5h1.2a.5.5 0 0 1 .5.5v3.8h2.6V6.5a.5.5 0 0 1 .5-.5h1.2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-1.2a.5.5 0 0 1-.5-.5v-4.5H7.2v4.5a.5.5 0 0 1-.5.5H5.5a.5.5 0 0 1-.5-.5v-11Zm8 0a.5.5 0 0 1 .5-.5h1.2a.5.5 0 0 1 .5.5v3.8h2.6V6.5a.5.5 0 0 1 .5-.5h1.2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-1.2a.5.5 0 0 1-.5-.5v-4.5h-2.6v4.5a.5.5 0 0 1-.5.5h-1.2a.5.5 0 0 1-.5-.5v-11Z"
          />
        </svg>
      </a>
    </aside>

    <!-- Header Navigation -->
    <header
      class="sticky top-0 bg-background/95 backdrop-blur z-50 transition-all duration-300 border-b border-transparent max-w-6xl mx-auto px-6 py-5 flex items-center justify-between"
    >
      <!-- Logo -->
      <a
        href="#home"
        class="flex items-center gap-2 font-bold text-whiteText hover:text-primary transition-colors text-lg"
      >
        <svg class="w-4 h-4 fill-primary" viewBox="0 0 16 16">
          <rect width="16" height="16" fill="#C778DD" />
        </svg>
        <span></span>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-8 text-sm">
        <a href="#home" class="hover:text-white-text transition-colors"
          ><span class="text-primary">#</span>главная</a
        >
        <a href="#works" class="hover:text-white-text transition-colors"
          ><span class="text-primary">#</span>мои проекты</a
        >
        <a href="#about-me" class="hover:text-white-text transition-colors"
          ><span class="text-primary">#</span>обо мне</a
        >
        <a href="#contacts" class="hover:text-white-text transition-colors"
          ><span class="text-primary">#</span>на связи</a
        >
      </nav>

      <!-- Mobile Menu Hamburger Button -->
      <button
        id="mobileMenuBtn"
        class="md:hidden text-grayText hover:text-whiteText focus:outline-none p-2"
        aria-label="Toggle Menu"
      >
        <svg
          id="hamburgerIcon"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          id="closeIcon"
          class="w-6 h-6 hidden"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </header>

    <!-- Mobile Drawer Overlay -->
    <div
      id="mobileDrawer"
      class="fixed inset-0 bg-background z-40 hidden flex-col justify-between p-8 pt-24 md:hidden"
    >
      <nav class="flex flex-col gap-8 text-2xl font-medium">
        <a href="#home" class="mobile-nav-link text-whiteText hover:text-primary"
          ><span class="text-primary">#</span>главная</a
        >
        <a href="#works" class="mobile-nav-link text-whiteText hover:text-primary"
          ><span class="text-primary">#</span>мои проекты</a
        >
        <a href="#about-me" class="mobile-nav-link text-whiteText hover:text-primary"
          ><span class="text-primary">#</span>обо мне</a
        >
        <a href="#contacts" class="mobile-nav-link text-whiteText hover:text-primary"
          ><span class="text-primary">#</span>контакты</a
        >
      </nav>
      <div class="flex gap-6 justify-center pt-8">
        <a href="https://github.com" target="_blank" class="text-grayText hover:text-primary"
          >GitHub</a
        >
      </div>
    </div>

    <!-- Main Container -->
    <main class="max-w-6xl mx-auto px-6 space-y-28 pt-8 pb-16">
      <!-- 1. Hero Section -->
      <section
        id="home"
        class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[calc(100vh-120px)] md:min-h-0 pt-4"
      >
        <!-- Left Info -->
        <div class="md:col-span-7 space-y-8">
          <h1
            id="heroTitle"
            class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-whiteText leading-tight"
          >
            Привет! Меня зовут Алла. Я занимаюсь
            <span class="text-primary">разработкой веб-интерфейсов и срм-систем</span>
          </h1>
          <p id="heroSubtitle" class="text-grayText text-base max-w-lg leading-relaxed">
            Разрабатываю адаптивные лендинги по дизайну из фигмы. Также занимаюсь поддержой и
            развитием CRM-систем.
          </p>
          <div>
            <a
              href="#contacts"
              id="contactBtn"
              class="inline-block border border-primary px-5 py-2.5 text-whiteText hover:bg-primary/10 transition-colors font-medium"
            >
              Связаться со мной
            </a>
          </div>
        </div>

        <div class="md:col-span-5 relative flex flex-col items-center">
          <div class="absolute top-12 left-2 w-20 h-20 text-primary opacity-80">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10,30 L30,10 L90,10 L90,70 L70,90 L10,90 Z" />
            </svg>
          </div>
          <div class="absolute bottom-16 right-4 w-16 h-16 dots-pattern opacity-60"></div>

          <div
            class="relative z-10 w-full max-w-[320px] aspect-[4/5] flex items-center justify-center"
          >
            <svg
              class="w-full h-full"
              viewBox="0 0 300 350"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 80 Q 150 40 200 80 L 210 130 L 90 130 Z"
                fill="#282C33"
                stroke="#ABB2BF"
                stroke-width="2"
              />
              <path
                d="M110 70 C 130 50 170 50 190 70"
                stroke="#C778DD"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M70 320 L 90 140 L 210 140 L 230 320 Z"
                fill="#282C33"
                stroke="#ABB2BF"
                stroke-width="2"
              />
              <!-- Inner detail lines -->
              <path
                d="M150 140 L 150 320"
                stroke="#C778DD"
                stroke-width="2"
                stroke-dasharray="4 4"
              />
              <path d="M100 180 L 130 220 L 100 320" stroke="#4C566A" stroke-width="2" />
              <path d="M200 180 L 170 220 L 200 320" stroke="#4C566A" stroke-width="2" />
              <!-- Geometric decorative frame behind head -->
              <rect
                x="50"
                y="40"
                width="200"
                height="260"
                stroke="#ABB2BF"
                stroke-width="1"
                stroke-dasharray="2 2"
                opacity="0.4"
              />
            </svg>
          </div>

          <!-- Current Status Box -->
          <div
            class="relative z-20 -mt-4 w-full max-w-[340px] border border-grayText bg-background px-4 py-2.5 flex items-center gap-3"
          >
            <span class="w-4 h-4 bg-primary inline-block flex-shrink-0"></span>
            <span id="statusText" class="text-sm text-grayText">
              В данный момент работаю над <span class="text-whiteText font-medium">портфолио</span>
            </span>
          </div>
        </div>
      </section>

      <!-- 2. Quote Section -->
      <section class="max-w-3xl mx-auto my-12">
        <div class="relative border border-grayText p-6 sm:p-8 text-center sm:text-left">
          <!-- Quote Marks Decoration -->
          <span class="absolute -top-4 left-4 bg-background px-2 text-2xl text-grayText font-serif"
            >“</span
          >
          <p id="quoteText" class="text-whiteText text-base sm:text-xl font-medium">
            С великой силой приходит и огромный счет за электричество.
          </p>
          <span
            class="absolute -bottom-4 right-16 bg-background px-2 text-2xl text-grayText font-serif"
            >”</span
          >

          <!-- Quote Author Box -->
          <div
            class="absolute -bottom-5 right-0 border border-grayText bg-background px-4 py-2 border-t-0 sm:border-t"
          >
            <span id="quoteAuthor" class="text-sm sm:text-base text-whiteText font-normal"
              >- Доктор Кто</span
            >
          </div>
        </div>
      </section>

      <!-- 3. Projects Section -->
      <Projects />

      <!-- 4. Skills Section -->
      <section id="skills" class="space-y-12">
        <!-- Header -->
        <div class="flex items-center gap-4 w-full max-w-md">
          <h2 class="text-2xl sm:text-3xl font-medium text-whiteText whitespace-nowrap">
            <span class="text-primary">#</span>навыки
          </h2>
          <div class="h-[1px] bg-primary w-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <!-- Left Decorative Graphic -->
          <div
            class="md:col-span-5 relative min-h-[220px] hidden sm:flex items-center justify-center"
          >
            <!-- Geometric Accent Overlay -->
            <div class="absolute top-4 left-6 w-20 h-20 border border-grayText opacity-60"></div>
            <div class="absolute bottom-2 right-8 w-16 h-16 dots-pattern"></div>
            <div class="w-32 h-32 border border-primary relative flex items-center justify-center">
              <div class="w-16 h-16 border border-grayText"></div>
            </div>
          </div>

          <!-- Right Tech Stack Boxes -->
          <div class="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <!-- Languages -->
            <div class="border border-grayText bg-cardBg">
              <div class="border-b border-grayText px-3 py-2 text-sm font-semibold text-whiteText">
                Языки программирования
              </div>
              <div class="p-3 text-xs text-grayText leading-relaxed space-y-1">
                <p>TypeScript JavaScript</p>
                <p>Python PHP</p>
              </div>
            </div>

            <!-- Databases -->
            <div class="border border-grayText bg-cardBg">
              <div class="border-b border-grayText px-3 py-2 text-sm font-semibold text-whiteText">
                Базы данных
              </div>
              <div class="p-3 text-xs text-grayText leading-relaxed space-y-1">
                <p>SQLite PostgreSQL</p>
                <p>MySQL Redis</p>
              </div>
            </div>

            <!-- Frameworks -->
            <div class="border border-grayText bg-cardBg">
              <div class="border-b border-grayText px-3 py-2 text-sm font-semibold text-whiteText">
                Фреймворки
              </div>
              <div class="p-3 text-xs text-grayText leading-relaxed space-y-1">
                <p>Vue TailwindCSS Bootstrap</p>
                <p>CSS Variables PostCSS BEM</p>
                <p>Django Laravel</p>
              </div>
            </div>

            <!-- Tools -->
            <div class="border border-grayText bg-cardBg">
              <div class="border-b border-grayText px-3 py-2 text-sm font-semibold text-whiteText">
                Инструменты
              </div>
              <div class="p-3 text-xs text-grayText leading-relaxed space-y-1">
                <p>VSCode PHPStorm</p>
                <p>Linux Docker Docker Compose Figma</p>
                <p>Git</p>
              </div>
            </div>

            <!-- Other -->
            <div class="border border-grayText bg-cardBg">
              <div class="border-b border-grayText px-3 py-2 text-sm font-semibold text-whiteText">
                Другое
              </div>
              <div class="p-3 text-xs text-grayText leading-relaxed space-y-1">
                <p>HTML CSS Pinia Vitest Vuex Vite</p>
                <p>Vite SCSS REST Jinja</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. About Me Section -->
      <section id="about-me" class="space-y-12">
        <!-- Header -->
        <div class="flex items-center gap-4 w-full max-w-md">
          <h2 class="text-2xl sm:text-3xl font-medium text-whiteText whitespace-nowrap">
            <span class="text-primary">#</span>обо-мне
          </h2>
          <div class="h-[1px] bg-primary w-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <!-- Text Content -->
          <div class="md:col-span-7 space-y-6">
            <p class="text-grayText text-base leading-relaxed">Привет, меня зовут Алла!</p>
            <p class="text-grayText text-base leading-relaxed">
              Я веб-разработчик с опытом более 10 лет. Создаю проекты с нуля, а также поддерживаю и
              развиваю существующие системы. Сейчас фокусируюсь на разработке интерфейсов и их
              интеграции с внешними API. Умею «оживлять» макеты из Figma, делая их удобными,
              доступными и адаптивными.
            </p>
            <div>
              <a
                href="#contacts"
                class="inline-block border border-primary px-5 py-2.5 text-whiteText hover:bg-primary/10 transition-colors font-medium text-sm"
              >
                Узнать больше -&gt;
              </a>
            </div>
          </div>

          <!-- Graphic Visual for About Me -->
          <div class="md:col-span-5 relative flex justify-center">
            <div class="relative w-full max-w-[280px]">
              <!-- Background Accents -->
              <div class="absolute -top-4 -left-4 w-16 h-16 dots-pattern"></div>
              <div
                class="absolute bottom-4 -right-4 w-20 h-20 border border-primary opacity-60"
              ></div>

              <!-- Illustration Character Outline -->
              <div class="border-b-2 border-primary relative z-10 pt-4 px-4 bg-background">
                <svg
                  class="w-full h-auto"
                  viewBox="0 0 200 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50 260 L 60 120 L 140 120 L 150 260 Z"
                    fill="#282C33"
                    stroke="#ABB2BF"
                    stroke-width="2"
                  />
                  <circle
                    cx="100"
                    cy="70"
                    r="35"
                    fill="#282C33"
                    stroke="#ABB2BF"
                    stroke-width="2"
                  />
                  <path d="M80 60 C 90 45 110 45 120 60" stroke="#C778DD" stroke-width="3" />
                  <path
                    d="M100 120 L 100 260"
                    stroke="#4C566A"
                    stroke-width="1.5"
                    stroke-dasharray="3 3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. Contacts Section -->
      <section id="contacts" class="space-y-12">
        <!-- Header -->
        <div class="flex items-center gap-4 w-full max-w-md">
          <h2 class="text-2xl sm:text-3xl font-medium text-whiteText whitespace-nowrap">
            <span class="text-primary">#</span>контакты
          </h2>
          <div class="h-[1px] bg-primary w-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <!-- Text Callout -->
          <div class="md:col-span-7 space-y-4">
            <p class="text-grayText text-base leading-relaxed max-w-lg">
              Рассматриваю предложения по фрилансу. Если у вас возникли другие вопросы или
              предложения о сотрудничестве, напишите мне.
            </p>
          </div>

          <!-- Contact Info Box -->
          <div class="md:col-span-5 border border-grayText p-4 bg-cardBg space-y-3">
            <h3 class="text-whiteText font-semibold text-sm mb-2">Можете мне написать</h3>

            <div
              class="flex items-center gap-3 text-sm text-grayText hover:text-white-text transition-colors"
            >
              <svg class="w-5 h-5 fill-current text-primary" viewBox="0 0 24 24">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.98-1.73 6.64-2.87 7.97-3.43 3.8-1.58 4.59-1.86 5.1-1.87.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.21-.04.38z"
                />
              </svg>
              <span><a href="tg://resolve?domain=acidburst">@acidburst</a></span>
            </div>

            <div
              class="flex items-center gap-3 text-sm text-grayText hover:text-white-text transition-colors"
            >
              <svg class="w-5 h-5 fill-current text-primary" viewBox="0 0 24 24">
                <path
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                />
              </svg>
              <span> <a href="mailto:afce1a9469c3@mail.ru">afce1a9469c3@mail.ru</a></span>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- 7. Footer -->
    <footer class="border-t border-grayText/30 pt-4 pb-8 mt-16">
      <div class="max-w-6xl mx-auto">
        <div
          class="flex flex-col sm:flex-row justify-between gap-6 items-start sm:items-center"
        ></div>

        <!-- Copyright Line -->
        <div class="text-center text-xs text-grayText pt-4">
          © Copyright 2026. Дизайн от <a href="https://www.figma.com/@elias_dev">Elias</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
