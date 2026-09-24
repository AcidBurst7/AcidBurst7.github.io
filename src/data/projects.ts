import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    title: 'Редизайн',
    description: 'Концепт главной страницы внутренней CRM-системы.',
    image: './src/dist/images/crm-main-page.jpg',
    tags: ['UI/UX', 'CRM'],
    is_nda: false,
  },
  {
    title: 'Разработка',
    description: 'Daily Hub - веб-приложение для управления задачами и личной продуктивностью.',
    image: './src/dist/images/daily-hub-kanban.jpg',
    tags: ['JavaScript', 'Django'],
    is_nda: false,
    repository_link: 'https://github.com/AcidBurst7/daily-hub',
    link: 'https://github.com/AcidBurst7/daily-hub',
  },
  {
    title: 'Разработка',
    description:
      'Веб-секретарь - веб-приложение для управления задачами и производственными процессами по изготовлению корпусной мебели.',
    image: './src/dist/images/crm-webs-main-page.jpg',
    tags: ['Vue.js', 'JavaScript', 'Yii'],
    is_nda: true,
    repository_link: '',
    link: 'https://webs.ladyagroup.ru/crm/web/index.php/auth/login',
  },
  {
    title: 'Разработка',
    description:
      'Агрегатор мессенджеров - веб-приложение для управления сообщениями из Telegram и Whatsapp.',
    image: './src/dist/images/messenger-agregator.png',
    tags: ['Vue.js', 'JavaScript', 'Laravel'],
    is_nda: true,
    repository_link: '',
    link: '',
  },
]
