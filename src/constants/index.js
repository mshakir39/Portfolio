import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  medi,
  crm,
  landi,
  player,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'E-Commerce Websites',
    icon: ux,
  },
  {
    title: 'Business Websites',
    icon: ux,
  },
  {
    title: 'Portfolio Websites',
    icon: ux,
  },
  {
    title: 'Landing Page Websites',
    icon: ux,
  },
  {
    title: 'CRM WEB APP',
    icon: ux,
  },
  {
    title: 'Event Websites',
    icon: ux,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'React js Developer',
    company_name: 'BellMedex',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Apr 2020 - Sep 2021',
  },
  {
    title: 'Software Engineer',
    company_name: 'Paxico Technology California',
    icon: microverse,
    iconBg: '#333333',
    date: 'Sep 2021 - May 2022',
  },
  {
    title: 'Software Engineer',
    company_name: 'Paxico Islamabad',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Dec 2022',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Medifusion',
    description: 'MediFusion is a fully integrated suite of software designed to offer innovative EHR and medical billing solutions to healthcare practices and enhance clinical, administrative, and financial operations.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'sql',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: medi,
    repo: 'https://github.com/mshakir39',
    demo: 'https://medifusion.com',
  },
  {
    id: 'project-2',
    name: 'CRM',
    description:
      'A CRM for CoWorking space Company to Manage their leads, Client, Contract, Invoices, Scheduling etc',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'pink-text-gradient',
      },
    ],
    image: crm,
    repo: 'https://github.com/jitcoder/paxico-crm',
    demo: 'http://crm.paxico.pk',
  },
  {
    id: 'project-3',
    name: 'Landing Page',
    description: 'This is a Landing page made it from Figma design',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: landi,
    repo: 'https://github.com/mshakir39/Svelte',
    demo: 'https://landingpage-unum.netlify.app',
  },
  {
    id: 'project-4',
    name: 'Audio Player',
    description: `A PodCast Player including all player features.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'websurfer.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: player,
    repo: 'https://github.com/meera/frontend',
    demo: '',
  },
];

export { services, technologies, experiences, projects };
