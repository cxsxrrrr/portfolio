# César Morán — Portfolio

Portfolio personal construido con **Astro 5** y desplegado en **Firebase Hosting**.

🔗 **Live:** [cesaramoranb.web.app](https://cesaramoranb.web.app)

---

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | [Astro 5](https://astro.build) (static output) |
| Estilos | Vanilla CSS (diseño constructivista retro) |
| Formulario de contacto | [Web3Forms](https://web3forms.com) |
| Sitemap | `@astrojs/sitemap` |
| Deploy | Firebase Hosting |

---

## Estructura

```
src/
├── components/     # ProjectCard, BlogCard, etc.
├── data/           # projects.ts, blog.ts
├── layouts/        # Layout.astro (SEO base)
├── pages/          # index, proyectos, blog, blog/[slug]
├── scripts/        # main.ts (animaciones, lang toggle)
└── styles/         # global.css
public/             # Imágenes, favicon, robots.txt
```

---

## Desarrollo local

```bash
# 1. Clona el repo
git clone https://github.com/cesaramoranb/portfolio.git
cd portfolio

# 2. Instala dependencias
npm install

# 3. Crea tu .env (ver .env.example)
cp .env.example .env
# Edita .env y añade tu clave de Web3Forms

# 4. Arranca el servidor de desarrollo
npm run dev
```

## Variables de entorno

Copia `.env.example` como `.env` y rellena:

```env
PUBLIC_WEB3FORMS_KEY=tu_clave_de_web3forms
```

Obtén una clave gratis en [web3forms.com](https://web3forms.com).

---

## Deploy

```bash
npm run build
firebase deploy --only hosting
```

---

## SEO implementado

- ✅ `robots.txt` con Sitemap pointer
- ✅ Sitemap automático (`@astrojs/sitemap`)
- ✅ Canonical URLs por página
- ✅ Open Graph completo + Twitter Cards
- ✅ `hreflang` es/en (sitio bilingüe)
- ✅ JSON-LD: `Person`, `WebSite`, `BlogPosting`, `BreadcrumbList`, `ItemList`
- ✅ Google Search Console verificado

---

## Licencia

MIT — Siéntete libre de usarlo como base para tu propio portfolio.
