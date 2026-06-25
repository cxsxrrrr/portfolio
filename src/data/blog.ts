export interface Post {
  slug: string;
  title: { es: string; en: string };
  date: string;
  excerpt: { es: string; en: string };
  content: { es: string; en: string };
}

export const posts: Post[] = [
  {
    slug: 'bienvenida',
    title: {
      es: 'Bienvenido a mi rincón digital',
      en: 'Welcome to My Digital Corner',
    },
    date: '2026-06-25',
    excerpt: {
      es: 'Un primer post para contar de qué va este blog, quién soy y qué puedes esperar encontrar aquí.',
      en: 'A first post to share what this blog is about, who I am, and what you can expect to find here.',
    },
    content: {
      es: `Bienvenido.

Soy César Morán, Ingeniero de Sistemas y Arquitecto de Agentes de IA. Construyo pipelines, automatizaciones y plataformas que resuelven problemas reales, desde la línea de comandos hasta el deploy en producción.

Este blog es mi archivo público de batalla. Aquí voy a publicar:

— Casos de estudio de agentes IA que puse en producción (Vapi, N8N, Botpress)
— Arquitectura de sistemas: decisiones técnicas, trade-offs, lecciones aprendidas
— Tutoriales cortos sobre herramientas que uso: Python, Django, React, Rust, Docker
— Notas de campo sobre automatización, CRM integration y procesos

El estilo va a ser directo, sin rodeos. Cada post busca ser útil en sí mismo, como una entrada de documentación bien escrita.

Si construyes cosas, si debuggeas a las 2 AM, si te apasiona hacer que los sistemas funcionen — este lugar es para ti.

Hasta la próxima.`,
      en: `Welcome.

I'm César Morán, Systems Engineer and AI Agent Architect. I build pipelines, automations, and platforms that solve real problems — from the command line to production deploy.

This blog is my public field journal. Here I'll publish:

— Case studies of AI agents I've put into production (Vapi, N8N, Botpress)
— Systems architecture: technical decisions, trade-offs, lessons learned
— Short tutorials on tools I use: Python, Django, React, Rust, Docker
— Field notes on automation, CRM integration, and processes

The style will be direct, no fluff. Each post aims to be useful on its own, like a well-written documentation entry.

If you build things, if you debug at 2 AM, if you're passionate about making systems work — this place is for you.

See you around.`,
    },
  },
];
