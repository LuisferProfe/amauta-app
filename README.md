# Amauta

> **Laboratorios virtuales 2D para enseñanza de ciencias en Colombia.**
>
> Plataforma gratuita, mobile-first, open source y sin login, diseñada para estudiantes de secundaria en colegios oficiales colombianos.

---

## Quick Start

**Requisitos:** Node.js ≥ 22.12.0

```bash
git clone https://github.com/usuario/amauta.git
cd amauta-app
npm install
npm run dev
# http://localhost:4321
```

## Comandos

```bash
npm run dev              # Servidor de desarrollo (localhost:4321)
npm run build            # Build producción + genera índice de búsqueda
npm run preview          # Preview del build
npm run lint             # Verificar errores de linting
npm run lint:fix         # Aplicar fixes automáticos
npm run format           # Formatear código
npm run format:check     # Verificar formato sin cambios
npm run test             # Ejecutar tests
npm run test:ui          # Tests con UI interactiva (Vitest UI)
npm run test:coverage    # Cobertura de tests
```

## Estructura del proyecto

```
amauta-app/
├── src/
│   ├── components/
│   │   ├── labs/            # Contenedor, canvas, controles, preguntas, modos
│   │   └── ui/              # Button, Card, Badge, Modal, Select, Layout
│   ├── lib/
│   │   ├── models/          # Lógica de simulación en TypeScript puro (testeable)
│   │   │   └── states-of-matter/
│   │   ├── physics/         # Partículas, contenedor, fuerzas
│   │   ├── hooks/           # useLabModel, useAnimation, usePersistence
│   │   └── utils/           # math, validation, analytics
│   ├── content/
│   │   └── labs/            # Metadata YAML, preguntas JSON, guías docentes MD
│   ├── pages/               # Rutas Astro (/, /labs, /labs/[slug], /labs/[slug]/run)
│   ├── layouts/             # Layouts compartidos
│   └── styles/
│       └── global.css       # @import "tailwindcss" + tokens globales
├── docs/                    # Especificaciones técnicas de cada lab
├── docPlan/                 # Documentos de identidad, arquitectura, pedagogía
├── tests/                   # Tests unitarios e integración
├── public/                  # Assets estáticos
├── astro.config.mjs
├── eslint.config.js
├── .prettierrc.mjs
└── tsconfig.json            # TypeScript strict
```

## Stack

### Presentación
| Paquete | Rol |
|---|---|
| Astro 6 | SSG + React islands |
| React 19 | UI interactiva (islands) |
| TypeScript (strict) | Type safety sin `any` |
| Tailwind CSS 4 | Estilos utility-first |
| lucide-react | Iconografía open source |
| @fontsource/inter | Fuente Inter auto-hospedada |
| clsx + tailwind-merge | Clases condicionales en componentes |

### Motor de simulación
| Paquete | Rol |
|---|---|
| p5.js | Rendering 2D en Canvas |
| Matter.js | Motor de física 2D (cuando aplica) |
| mathjs | Cálculos científicos con unidades (PV=NkT, Boltzmann, etc.) |
| chroma-js | Interpolación de color por estado (sólido→líquido→gas) |

### Contenido y datos
| Paquete | Rol |
|---|---|
| zod | Validación de schemas en Content Collections |
| pagefind | Búsqueda estática del catálogo (generada en build) |

### Testing y calidad
| Paquete | Rol |
|---|---|
| Vitest | Unit tests + cobertura |
| @testing-library/react | Tests de componentes |
| ESLint + Prettier | Linting y formato |
| @astrojs/check | Verificación de tipos en `.astro` |

### PWA y despliegue
| Paquete | Rol |
|---|---|
| vite-pwa-plugin | Service Worker + cache offline-first |
| @astrojs/sitemap | Sitemap automático para SEO |
| Cloudflare Pages | Hosting (edge, gratuito) |

## Principios técnicos

| Principio | Regla |
|---|---|
| Mobile-first | Diseño desde 360×640 px. Touch targets ≥44×44 px |
| Performance | Bundle inicial <500 KB. Sim individual <1 MB. TTI <3s en 3G |
| Modelo desacoplado | Lógica = TypeScript puro (testeable sin DOM). Render = p5.js |
| Privacidad | Sin login. Sin trackers de terceros. Cumplimiento Ley 1581 |
| TypeScript strict | `"strict": true`. Sin `any` |
| Tests | 100% cobertura en modelos de simulación |

## Documentación

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — Arquitectura técnica detallada
- [`docs/LAB_1_SPECIFICATION.md`](docs/LAB_1_SPECIFICATION.md) — Especificación del Lab 1: Estados de la materia
- [`docPlan/IDENTITY.md`](docPlan/IDENTITY.md) — Identidad, misión y principios del proyecto
- [`docPlan/PRODUCT_ARCHITECTURE.md`](docPlan/PRODUCT_ARCHITECTURE.md) — Superficies del producto y decisiones de diseño
- [`docPlan/PEDAGOGICAL_FRAMEWORK.md`](docPlan/PEDAGOGICAL_FRAMEWORK.md) — Marco pedagógico y evidencia académica

## Licencia

- **Código**: MIT
- **Contenido educativo**: CC BY-SA 4.0

---

Hecho en Colombia, para Colombia.
