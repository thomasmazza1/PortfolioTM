# Portfolio — Thomas Mazza

Portfolio personal de Full Stack Developer, construido con React + Vite y Tailwind CSS.

## Stack

- **Framework:** React 19 + Vite
- **Estilos:** Tailwind CSS v4 (design tokens en `src/index.css`)
- **Íconos:** lucide-react, react-icons

## Estructura

```
src/
├── components/   # Navbar, Hero, About, Skills, Projects, Contact, Footer
├── data/         # content.js — todo el contenido editable del sitio
└── assets/       # foto de perfil e imágenes de proyectos
public/
└── cv.pdf        # CV descargable
```

Todo el contenido (bio, experiencia, skills, proyectos, contacto) vive en [`src/data/content.js`](src/data/content.js); los componentes solo se encargan de renderizarlo.

## Desarrollo

```bash
npm install
npm run dev      # levanta el servidor de desarrollo
npm run build    # build de producción
npm run lint     # oxlint
```

## Secciones

1. **Navbar** — logo + navegación a Proyectos, Sobre mí y Contacto
2. **Hero** — presentación, foto, CTAs (ver proyectos / descargar CV) y stack principal
3. **Sobre mí** — bio extendida y experiencia (timeline)
4. **Skills** — tecnologías agrupadas por categoría
5. **Proyectos** — grid de proyectos destacados con imagen, stack y descripción
6. **Contacto** — email, GitHub y redes
