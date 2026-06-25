export type Localized = { es: string; en: string };

export type ProjectTag = string | Localized;

export interface Project {
  num: string;
  title: string;
  priority?: boolean;
  images: { src: string; alt: string }[];
  tags: ProjectTag[];
  link?: string;
}

export const projects: Project[] = [
  {
    num: '01',
    title: 'Vallparc Voice Agent',
    priority: true,
    images: [{ src: '/Vapi.png', alt: 'Vallparc Voice Agent — Vapi AI dashboard' }],
    tags: ['Vapi AI', 'N8N', 'Twilio', 'Zoho CRM'],
  },
  {
    num: '02',
    title: 'ChatBot Vallparc',
    priority: true,
    images: [
      { src: '/botpress.jpg', alt: 'ChatBot Vallparc — Botpress builder' },
      { src: '/Botpress2.png', alt: 'ChatBot Vallparc — flujo de conversación' },
    ],
    tags: ['Botpress', 'WhatsApp', 'Zoho Flow'],
  },
  {
    num: '03',
    title: 'Scheurer Propiedades',
    images: [
      { src: '/scheurer1.jpg', alt: 'Scheurer Propiedades — home' },
      { src: '/scheurer2.jpg', alt: 'Scheurer Propiedades — listings' },
    ],
    tags: ['React 19', 'ExpressJS', 'Tokko API'],
    link: 'https://scheurerpropiedades.com/',
  },
  {
    num: '04',
    title: 'LeadHunter',
    images: [{ src: '/leadhunter.jpg', alt: 'LeadHunter — prospección CRM' }],
    tags: [
      { es: 'Prospección', en: 'Prospecting' },
      'CRM',
      { es: 'Automatización', en: 'Automation' },
    ],
    link: 'https://leadhunter.daia.com.ar/',
  },
];