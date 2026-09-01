# WarpMetal Marketing

Sitio de marketing alternativo para WarpMetal. Comparte la paleta de colores y assets de marca con [`warpmetal_frontend`](../warpmetal_frontend/), pero con diseño y contenido independientes.

**Estado actual:** la homepage implementa un clon de referencia de [linear.app](https://linear.app/) con textos e imágenes originales de Linear (para adaptación futura a WarpMetal).

## Comandos

```bash
npm run dev            # http://localhost:3002
npm run build
npm run start          # http://localhost:3002
npm run lint
npm run extract:linear # re-extrae assets/screenshots de linear.app con Playwright
npm run crop:linear    # recorta secciones desde reference/linear-full.png
```

## Estructura del clon Linear

```
src/
├── app/                 layout, page, globals (tema oscuro Linear)
├── components/
│   ├── linear/          Container, Section, MotionSection, LinearScreenshot
│   └── landing/         Navbar, Hero, LogoMarquee, FeatureIntro,
│                        Intake, Planning, AI, Build,
│                        ChangelogTestimonials, FinalCta, Footer
└── lib/
    ├── linear-content.ts   copy original de Linear
    ├── linear-assets.ts    mapa de screenshots por sección
    ├── linear-tokens.ts    colores, tipografía y layout
    └── landing-motion.ts   animaciones framer-motion

public/linear/           assets extraídos de linear.app
reference/               screenshots y metadata de extracción
```

## Paleta WarpMetal (reservada para rebranding futuro)

| Token   | Valor     | Uso              |
|---------|-----------|------------------|
| `bone`  | `#eee9dd` | Fondo principal  |
| `paper` | `#f8f4ea` | Superficies      |
| `ink`   | `#141411` | Texto principal  |
| `muted` | `#68645c` | Texto secundario |
| `accent`| `#f4511e` | Acento / CTAs    |
| `surface` | `#fffdf7` | Blanco cálido  |

Los tokens WarpMetal siguen en variables CSS legacy; la homepage activa usa tokens `linear-*` (tema oscuro).
