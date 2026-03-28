# Motion Portfolio

Personal portfolio website for a Motion Designer & Developer.

## Stack

- **Vite** — build tool & dev server
- **Vanilla JS** — no framework overhead
- **GSAP** — animations & scroll interactions
- **Lenis** — smooth scrolling
- **Netlify** — hosting & CI/CD

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/
├── index.html
├── vite.config.js
├── package.json
├── .gitignore
│
├── public/
│   ├── videos/          ← project video previews (.mp4 / .webm)
│   └── images/          ← project thumbnails, og-image
│
└── src/
    ├── components/      ← section HTML templates (hero, projects, contact)
    ├── styles/
    │   ├── main.css     ← global styles, CSS variables
    │   ├── hero.css
    │   ├── projects.css
    │   └── contact.css
    ├── scripts/
    │   ├── main.js      ← entry point, GSAP init, Lenis
    │   ├── hero.js
    │   ├── projects.js
    │   └── contact.js
    └── assets/
        ├── fonts/
        └── icons/
```

## Deployment (Netlify)

1. Push to GitHub
2. Connect repo on [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Every `git push` → auto deploy ✅

## Performance Goals

- Lighthouse score: **90+**
- LCP: **< 2.5s**
- Videos: lazy-loaded, WebM format preferred
- Images: WebP format, proper `width`/`height` attributes
