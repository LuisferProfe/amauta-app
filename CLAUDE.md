# CLAUDE.md — Amauta

Laboratorios virtuales 2D de ciencias para estudiantes colombianos de secundaria.
Gratuito · mobile-first · sin login · open source · offline-first.

Lee `docPlan/IDENTITY.md` si necesitas más contexto sobre la misión. Lee `docPlan/TECHNICAL_PRINCIPLES.md` para el razonamiento detrás de cada decisión de stack.

---

## Restricciones no negociables

Estas reglas no se debaten. Si una tarea las viola, pregunta antes de proceder.

- **Sin login obligatorio** para estudiantes. Jamás.
- **Sin `any` en TypeScript.** `strict: true` en todo el proyecto.
- **`model.ts` no toca el DOM.** El DOM es bienvenido en `View.tsx`, `Controls.tsx`, hooks y cualquier componente React. La restricción aplica únicamente al modelo: si `model.ts` llama `document`, `canvas.getContext` o cualquier API del browser, ya no se puede testear en Node.js puro. El modelo solo hace matemática y devuelve datos; la vista los dibuja.
- **Sin trackers de terceros.** Sin Google Analytics, sin Hotjar, sin Meta Pixel.
- **Todo el copy de UI va en español colombiano.** Variables y código en inglés; mensajes visibles al usuario en español.
- **Mobile-first siempre.** El primer breakpoint es 360×640 px. Touch targets ≥ 44×44 px.
- **Performance budget:** bundle inicial < 500 KB, simulación individual < 1 MB, TTI < 3s en 3G.
- **Sin Shadcn/ui.** Usamos `lucide-react` para iconos y componentes propios.

---

## Stack (lo que usamos y para qué)

### Producción

| Paquete | Cuándo usarlo |
|---|---|
| `astro` | Páginas estáticas (Home, catálogo, fichas, institucionales) |
| `react` / `react-dom` | Islands interactivos — únicamente dentro de labs y componentes con estado |
| `tailwindcss` + `@tailwindcss/vite` | Todo el styling |
| `clsx` + `tailwind-merge` | Clases condicionales en componentes React |
| `lucide-react` | Iconografía |
| `@fontsource/inter` | Fuente — importar en `global.css`, nunca desde Google Fonts |
| `p5` | Rendering del canvas de simulaciones |
| `matter-js` | Motor de física 2D (cuerpos rígidos, colisiones) — solo cuando la física analítica no alcanza |
| `mathjs` | Cálculos científicos con unidades (constante de Boltzmann, PV=NkT, conversiones K↔°C) |
| `chroma-js` | Interpolación de color por estado termodinámico y visualizaciones |
| `zod` | Validación de schemas en Content Collections y datos de entrada |

### Dev / build

| Paquete | Cuándo usarlo |
|---|---|
| `vitest` | Unit tests — siempre en modelos de simulación |
| `@testing-library/react` | Tests de componentes React |
| `pagefind` | Se ejecuta automáticamente en `npm run build` — indexa `dist/` |
| `@astrojs/check` | Verificación de tipos en `.astro` — corre en CI |
| `@astrojs/sitemap` | Sitemap automático — ya configurado en `astro.config.mjs` |
| `prettier-plugin-astro` + `prettier-plugin-tailwindcss` | Ya en `.prettierrc.mjs` — no modificar sin razón |

---

## Estructura de archivos

```
src/
├── components/
│   ├── labs/           # LabContainer, SimulationCanvas, ControlPanel,
│   │                   # QuestionDisplay, FeedbackDisplay, Modes/
│   └── ui/             # Button, Card, Badge, Modal, Select, Layout
├── lib/
│   ├── models/         # Lógica pura por lab (sin DOM)
│   │   └── states-of-matter/
│   │       ├── model.ts
│   │       ├── model.test.ts
│   │       └── constants.ts
│   ├── physics/        # Partícula, contenedor, fuerzas — reutilizables entre labs
│   ├── hooks/          # useLabModel, useAnimation, usePersistence
│   └── utils/          # math.ts, validation.ts, analytics.ts
├── content/
│   └── labs/           # YAML metadata + questions.json + guide.md por lab
├── pages/              # index.astro, labs/index.astro, labs/[slug].astro,
│                       # labs/[slug]/run.astro, about.astro, privacidad.astro
├── layouts/
└── styles/
    └── global.css      # @import "tailwindcss" + @import "@fontsource/inter/..."
```

### Patrón de un laboratorio

Cada lab vive en `src/lib/models/<slug>/` (lógica) y `src/components/labs/<slug>/` (UI).

```typescript
// model.ts — TypeScript puro, sin DOM, 100% testeable
export class StatesOfMatterModel {
  // toda la lógica aquí
}

// View.tsx — solo renderiza, sin lógica de dominio
// Controls.tsx — solo UI, llama setters del modelo
// index.tsx — orquesta todo con useLabModel + useAnimation
```

El `LabContainer` genérico ya existe para envolver cualquier lab con layout, controles y preguntas consistentes.

### Patrón metadata de lab

```typescript
// src/content/labs/states-of-matter.yaml  (o meta.ts)
export const meta: LabMeta = {
  slug: 'states-of-matter',
  title: 'Estados de la materia',
  area: 'chemistry',
  level: ['middle', 'high'],
  competencies: ['modeling', 'concept-application'],
  curriculumTags: { co_dba: ['DBA-Ciencias-6-01'], co_icfes: ['uso-comprensivo'] },
  estimatedDurationMin: 20,
  availableModes: ['free', '5E', 'guided', 'eval'],
  published: true,
};
```

Agregar un lab nuevo = crear carpeta + modelo + metadata. El catálogo se genera solo.

---

## Convenciones de código

- **TypeScript strict en todo.** Sin `any`, sin `as unknown`, sin `!` innecesario.
- **Sin comentarios obvios.** Solo comentar el *porqué* cuando no es evidente (restricción física, workaround, invariante sutil).
- **Nombres en inglés** para variables, funciones, tipos, archivos. **Copy visible al usuario en español colombiano.**
- **Sin `console.log` en producción.** `no-console: warn` está activo en ESLint.
- **Imports absolutos** desde `src/` usando el alias `@/` cuando esté configurado.
- **Componentes React** — arrow functions, no `function` declarations para componentes.
- **Modelos de simulación** — clases ES6 con métodos puros y getters explícitos.

---

## Tests

- **Cobertura ≥ 80%** en todos los archivos `model.ts`. Es la integridad científica del proyecto.
- Los tests del modelo deben correr **sin DOM** — si un test necesita `jsdom`, algo está mal en el modelo.
- Usar `@testing-library/react` para componentes — solo smoke tests en UI, no testar estilos.
- `npm run test:coverage` para ver reporte. El CI bloquea si baja de umbral.

---

## Lo que NO hacer

- **No agregar login** ni autenticación para estudiantes. Es un principio fundacional, no una feature pendiente.
- **No poner lógica de dominio en `model.ts` que dependa del DOM.** `View.tsx`, `Controls.tsx` y los hooks pueden usar `canvas`, `document`, `localStorage` con total libertad — eso es normal. La restricción es solo que `model.ts` no dependa del browser para poder testearse en Node.js puro.
- **No usar Redux, Zustand ni estado global** para la simulación — el modelo es la fuente de verdad.
- **No importar D3 completo** — si necesitas algo de D3 usa el subpaquete específico (`d3-scale`, etc.) o usa `mathjs` + `chroma-js`.
- **No usar Three.js ni WebGL** — el proyecto es 2D. No está en roadmap.
- **No agregar Google Fonts** en HTML — usar `@fontsource/inter` importado en CSS.
- **No hardcodear strings de UI** en componentes — van en archivos de contenido o constantes centralizadas.
- **No publicar un lab** sin tests en el modelo y sin haberlo probado en 360 px.
- **No usar `npm run build` para probar en desarrollo** — usar `npm run dev`.

---

## Modos pedagógicos disponibles

Cada lab puede operar en estos modos (el docente elige al compartir el enlace):

| Modo | Descripción |
|---|---|
| `free` | Sandbox libre, sin instrucciones |
| `5E` | Secuencia Engage→Explore→Explain→Elaborate→Evaluate |
| `guided` | Lista de tareas paso a paso con check-off |
| `pbl` | Caso o problema inicial + área de notas |
| `eval` | Solo preguntas ICFES, lab en modo lectura |

---

## MCPs configurados

Definidos en `.claude/settings.json`. Se activan automáticamente en cada sesión.

| MCP | Cuándo usarlo |
|---|---|
| **fetch** | Leer docs de Astro, MDN, Cloudflare Pages, p5.js sin salir de la sesión |
| **memory** | Persistir decisiones de arquitectura, convenciones y contexto entre sesiones |
| **sequential-thinking** | Planificar labs complejos, debugging de TypeScript strict, decisiones de diseño |
| **git** | `git log`, diffs, blame, changelogs del proyecto |
| **context7** | Docs actualizadas en contexto de Astro 6, React 19, Tailwind 4, Vitest, zod, mathjs |
| **playwright** | Screenshots de labs en distintos viewports, tests E2E, auditorías axe-core (`--headless`) |
| **github** | Issues, PRs, releases — requiere `GITHUB_PERSONAL_ACCESS_TOKEN` en `.env.local` |
| **cloudflare** | Deploys, build logs, Pages config — requiere `CLOUDFLARE_API_TOKEN` en `.env.local` |

Para activar GitHub y Cloudflare: copia `.env.example` → `.env.local` y completa las keys.

**MCPs de Nivel 2 disponibles cuando se necesiten** (ver investigación completa en historial de sesión):
- `brave-search` — búsquedas web (requiere Brave API key, 2,000 req/mes gratis)
- `firecrawl` — crawl completo de documentación
- `figma` — leer diseños Figma y exportar assets (requiere Dev Mode)

---

## Documentación de referencia

| Documento | Cuándo leerlo |
|---|---|
| [`docPlan/IDENTITY.md`](docPlan/IDENTITY.md) | Antes de cualquier decisión de producto o feature nueva |
| [`docPlan/TECHNICAL_PRINCIPLES.md`](docPlan/TECHNICAL_PRINCIPLES.md) | Antes de agregar una librería o cambiar el stack |
| [`docPlan/PRODUCT_ARCHITECTURE.md`](docPlan/PRODUCT_ARCHITECTURE.md) | Para diseñar nuevas pantallas o rutas |
| [`docPlan/PEDAGOGICAL_FRAMEWORK.md`](docPlan/PEDAGOGICAL_FRAMEWORK.md) | Antes de diseñar preguntas, modos o feedback |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | Referencia técnica de componentes y flujos |
| [`docs/LAB_1_SPECIFICATION.md`](docs/LAB_1_SPECIFICATION.md) | Especificación completa del Lab 1 (estados de la materia) |
