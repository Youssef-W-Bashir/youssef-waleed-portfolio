import freshCart from "../assets/freshCart_Project.png";
import photography from "../assets/photography_Project.png";
import todoApp from "../assets/todoApp_Project.png";
import cyporg from "../assets/cyporg_Project.png";

export const profile = {
  name: 'Youssef Waleed Beshir',
  firstName: 'Youssef',
  middleName: 'Waleed',
  lastName: 'Beshir',
  role: 'Frontend Developer',
  education: 'Faculty of Science — Benha University',
  year: 'Second-year student',
  intro:
    'I build modern web interfaces and practical frontend applications with React.js. I care about readable code, forms that validate clearly, and layouts that hold together on a phone as well as a laptop.',
  status: 'Open to junior front-end roles and internships',
  email: 'youssef31200w@gmail.com',
  github: 'https://github.com/Youssef-W-Bashir',
  linkedin: 'https://www.linkedin.com/in/youssef-waleed-beshir',
  whatsapp: 'https://wa.me/201129041022?text=Hello%20Developer%20%3F%21',
  facebook: 'https://www.facebook.com/joe.waleed.779381',
} as const;

export interface Project {
  number: string;
  title: string;
  image?: string;
  summary: string;
  stack: string[];
  highlights: string[];
  live?: string;
  source?: string;
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'Karim Gamal Photography',
    image: photography,
    summary:
      'A responsive photography portfolio built from reusable React components and a clean layout. Cloudinary hosts and optimizes the images, which reduced asset size and helped pages load faster.',
    stack: ['React.js', 'Tailwind CSS', 'Cloudinary'],
    highlights: [
      'Reusable React components',
      'Responsive photography portfolio',
      'Images hosted and optimized with Cloudinary',
    ],
    live: 'https://karim-gamal-photography-x14l.vercel.app/',
    source: 'https://github.com/Youssef-W-Bashir/karim-gamal-photography',
  },
  {
    number: '02',
    title: 'FreshCart',
    image: freshCart,
    summary:
      'An e-commerce application with product listing, categories, search, product pages, login, and protected pages. TanStack React Query fetches and caches API data so pages stay in sync without repeated requests.',
    stack: ['React.js', 'Tailwind CSS', 'TanStack React Query', 'Vite', 'Formik', 'Yup'],
    highlights: [
      'Product listing and categories',
      'Search and product detail pages',
      'Login and protected pages',
      'Cached API data with TanStack React Query',
      'Validated forms with Formik and Yup',
    ],
    live: 'https://fresh-cart-rho-five.vercel.app',
    source: 'https://github.com/Youssef-W-Bashir/fresh-cart',
  },
  {
    number: '03',
    title: 'Todo App',
    image: todoApp,
    summary:
      'A task manager where users can add, edit, delete, and complete tasks, and filter them by priority, day, and status. Tasks are saved in Local Storage so they stay after a refresh.',
    stack: ['React.js', 'Tailwind CSS', 'JavaScript'],
    highlights: [
      'Add, edit, delete, and complete tasks',
      'Filter by priority, day, and status',
      'Tasks persist across page refreshes',
      'Custom 404 page',
    ],
    live: 'https://todo-app-react-liard-alpha.vercel.app',
    source: 'https://github.com/Youssef-W-Bashir/todo-app-react',
  },
  {
    number: '04',
    title: 'CYBORG',
    image: cyporg,
    summary:
      'A responsive, multi-section gaming website built with plain JavaScript and no libraries. DOM manipulation and event handling power the interactive parts, designed mobile-first.',
    stack: ['HTML5', 'CSS3', 'Vanilla JavaScript'],
    highlights: [
      'Multi-section gaming website',
      'DOM manipulation and event handling',
      'Mobile-first responsive layout',
      'No external libraries',
    ],
    live: 'https://youssef-w-bashir.github.io/CYBORG-Project/',
    source: 'https://github.com/Youssef-W-Bashir/CYBORG-Project',
  },
];

export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  { title: 'Languages', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'PHP', 'C++'] },
  { title: 'Frameworks & Styling', items: ['Vue.js', 'React', 'Next.js (Learning)', 'Tailwind CSS', 'Bootstrap'] },
  { title: 'Data & State Mangement', items: ['TanStack React Query', 'Context API', 'REST APIs', 'Axios'] },
  { title: 'Backend & Databases', items: ['PHP', 'Node.js (Learning)', 'MySQL', 'MongoDB (Learning)', 'Firebase', 'Mongoose (Learning)']},
  { title: 'Tools & Platforms', items: ['Git', 'GitHub', 'VS Code', 'Vite', 'Cloudinery', 'XAMPP'] },
];

export interface CommunityEntry {
  period: string;
  organization: string;
  role: string;
}

export const community: CommunityEntry[] = [
  {
    period: 'Training $ Work',
    organization: 'Creativo Academy',
    role: 'Web Developer using PHP & worked as a Mentor',
  },
  {
    period: 'Season 2026',
    organization: 'Science in Code Community (SIC)',
    role: 'Front-End Technical Team',
  },
  {
    period: 'Season 2026',
    organization: 'Google Developer Groups Benha /(GDGoC BNU)',
    role: 'Front-End Technical Team',
  },
  {
    period: 'Season 2027',
    organization: 'Google Developer Groups Benha /(GDGoC BNU)',
    role: 'Back-End Technical Team',
  },
  {
    period: 'Season 2027',
    organization: 'Google Developer Groups BUSB /(GDGoC BUSB)',
    role: 'Front-End Technical Team',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Activities', href: '#community' },
] as const;
