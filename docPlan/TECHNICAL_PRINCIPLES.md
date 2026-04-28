# TECHNICAL_PRINCIPLES.md

> Decisiones técnicas detalladas, stack, librerías y patrones canónicos.
> Si CLAUDE.md dice "qué stack usamos", este documento explica **por qué**, **qué se descartó**, y **cómo cada decisión técnica está conectada con la misión pedagógica**.

---

## 1. Los 10 principios técnicos del proyecto

Estos principios derivan directamente de los principios fundacionales en `IDENTITY.md`. Cada decisión técnica debe poder defenderse contra ellos.

### Principio T1 — Mobile-first absoluto, no responsive
Conectado al **Principio 5** de IDENTITY. Diseñamos para celular Android gama media-baja primero. Desktop es secundario. El primer mockup es 360×640 px. Áreas tocables ≥44×44 px. Sin "vamos a adaptarlo después".

### Principio T2 — Performance budget como contrato moral
Conectado al **Principio 1** (justicia educativa). En conexión 3G simulada: bundle inicial <500 KB, sim individual <1 MB, tiempo a interacción <3s. Si una feature rompe el budget, no entra. Esto es lo que separa al estudiante rural del estudiante urbano: el rendimiento.

### Principio T3 — Open source verificable, sin lock-in
Conectado al **Principio 4** (bien público digital). Código MIT, contenido CC BY-SA. Cada dependencia evaluada por riesgo de captura. Sin SDKs propietarios opacos. Cualquier docente debe poder verificar que no hay tracking.

### Principio T4 — Privacidad por diseño, no por política
Conectado al **Principio 7** (privacidad de menores). No analytics con cookies. No trackers de terceros. Cero PII de estudiantes. Los datos solo existen si el estudiante o docente los crean explícitamente. Cumplimiento Ley 1581 + PL 247/2025.

### Principio T5 — Offline real desde temprano
Conectado al **Principio 1** y **Principio 5**. PWA con service worker. Una vez cargado, un lab funciona sin internet. Esto es no-negociable para zonas rurales con conectividad intermitente.

### Principio T6 — Modelo desacoplado del render
Conectado al **Principio 2** (evidencia antes que opinión). La lógica física/química es TypeScript puro, testeable con Vitest sin navegador. La capa de render (Canvas, p5.js, SVG) es intercambiable. Esto permite verificar científicamente cada modelo, no solo "que se vea bien".

### Principio T7 — Datos en archivos, no en código
Conectado al **Principio 3** (autonomía docente) y **Principio 9** (localización profunda). Los metadatos de cada lab, las preguntas, los tags, las traducciones, viven en archivos versionados (no hardcoded). Esto permite que mañana un docente o autor externo pueda contribuir sin tocar código.

### Principio T8 — Costo de operación ≈ $0 en MVP
Conectado al **Principio 4** (bien público) y al hecho de que aún no tenemos financiación. El stack debe correr en planes gratis o de bajísimo costo. Cloudflare Pages + Astro estático = $0/mes para tráfico inicial.

### Principio T9 — TypeScript estricto en todo
Conectado al **Principio 8** (calidad antes que cantidad). En un proyecto con motor físico, datos curriculares, accesibilidad y múltiples modos pedagógicos, los errores son inevitables sin tipado estricto. `strict: true`, `noUncheckedIndexedAccess: true`.

### Principio T10 — Documentación como código de primera clase
Conectado al **Principio 10** (construir para que sobreviva). Cada decisión de stack se documenta como ADR. Cada lab tiene README interno. La documentación es parte del producto, no afterthought.

---

## 2. Stack técnico (decisiones tomadas)

### 2.1 Vista general

```
┌──────────────────────────────────────────────────────────┐
│                    PLATFORM LAYER                        │
│                                                          │
│   Astro 5+   ──>  Static pages, catalog, lab pages       │
│                   SEO, fast loading, zero-JS by default  │
│                                                          │
│   Tailwind 4 ──>  Styling system                         │
│   shadcn/ui  ──>  Accessible components (Radix UI)       │
│                                                          │
│   Content Collections (Astro) ──> Lab metadata           │
└─────────────────────────┬────────────────────────────────┘
                          │ React islands
┌─────────────────────────▼────────────────────────────────┐
│                       LAB LAYER                          │
│                                                          │
│   React 19 + TypeScript  ──>  Controls UI, state         │
│                                                          │
│   ┌─ Model.ts (pure TS, testable, no DOM)                │
│   ├─ View.tsx (Canvas API or p5.js)                      │
│   ├─ Physics 2D (Matter.js when needed)                  │
│   └─ Charts (Recharts when needed)                       │
│                                                          │
└─────────────────────────┬────────────────────────────────┘
                          │ PWA
┌─────────────────────────▼────────────────────────────────┐
│                      PWA LAYER                           │
│                                                          │
│   Workbox / Vite PWA ──> Service worker                  │
│   Cache: shell, labs, assets                             │
│   Offline-first strategy                                 │
└──────────────────────────────────────────────────────────┘
                          │ Future (Phase 3+)
┌─────────────────────────▼────────────────────────────────┐
│                    BACKEND LAYER                         │
│                                                          │
│   Hono on Cloudflare Workers ──> Lightweight API         │
│   Postgres (Supabase or Neon)  ──> Data                  │
│   Drizzle ORM ──> Typesafe queries                       │
│   Supabase Auth or Clerk ──> Authentication              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### 2.2 Decisiones con justificación una a una

#### Astro 5+ como framework principal

**Por qué Astro y no Next.js, Remix, SvelteKit**:

| Criterio | Astro | Next.js | SvelteKit |
|----------|-------|---------|-----------|
| Cero JS por defecto | ✅ | ❌ | Parcial |
| Islas multi-framework | ✅ | Solo React | Solo Svelte |
| Content Collections nativas | ✅ | Plugin | Plugin |
| Despliegue estático barato | ✅ | Híbrido | Híbrido |
| Curva de aprendizaje | Suave | Media | Suave |
| Adquisición Cloudflare 2026 | ✅ | N/A | N/A |

**Conexión con la misión**: el catálogo, fichas de labs, descripciones y guías son **contenido estático**. Astro envía cero JS por defecto en esas páginas → carga instantánea en internet de colegio rural. Eso es justicia educativa medida en milisegundos.

**Cuándo Astro NO funcionará**:
- Si el dashboard del docente futuro requiere mucho estado compartido cliente.
- Si necesitamos SSR pesado para personalización por usuario.

**Plan B**: agregar Next.js solo para `/dashboard/*` dentro del monorepo. **Decisión NO es para hoy**.

#### React 19+ para las islas interactivas

**Por qué React y no Vue/Svelte/Solid**:
- Ecosistema de visualización (Recharts, Konva, react-three-fiber) nativo React.
- shadcn/ui está sobre React.
- Mayor disponibilidad de talento para colaboradores futuros.
- El responsable ya está aprendiendo React.

**Tradeoff aceptado**: Svelte/Solid serían más rápidos en runtime, pero el ecosistema de visualización es menos maduro. La diferencia de performance no se nota en labs bien hechos.

#### TypeScript estricto

**No negociable.** Razones técnicas:
- El motor físico maneja vectores, fuerzas, integradores numéricos: typing previene bugs físicos catastróficos.
- Los metadatos pedagógicos (DBA, competencias, niveles) deben ser tipados.
- Refactoring seguro a medida que el proyecto crece.

**Configuración**:
```jsonc
{
  "strict": true,
  "noUncheckedIndexedAccess": true,
  "exactOptionalPropertyTypes": true,
  "noImplicitOverride": true,
  "noPropertyAccessFromIndexSignature": true
}
```

#### Tailwind CSS 4 + shadcn/ui

**Por qué Tailwind**:
- Sin CSS suelto = sin inconsistencias visuales.
- Design tokens nativos para sistema coherente.
- Purga automática = bundles pequeños.
- Compatible con accesibilidad si se usan los tokens correctamente.

**Por qué shadcn/ui (y no MUI, Mantine, Chakra)**:
- No es paquete: es código que copias y posees → no lock-in.
- Accesible por defecto (Radix UI debajo).
- Estética neutra que se puede personalizar.
- Bundle pequeño (solo lo que importas).

**Componentes a usar primero**: Button, Card, Dialog, Tabs, Slider, Select, Sheet, Tooltip, Toast, RadioGroup (preguntas), Progress (modos guiados).

**Conexión con la misión**: una UI consistente y accesible respeta al estudiante. Una mezcla de estilos lo desorienta.

---

## 3. El motor de laboratorio (la decisión más crítica)

### 3.1 Patrón canónico: Model / View / Controls

**No negociable.** Cada lab sigue exactamente esta estructura:

```typescript
// 1. Model — pure TypeScript, no DOM, testable
// labs/pendulum/Model.ts
export class PendulumModel {
  length: number;
  mass: number;
  angle: number;
  angularVelocity: number;

  step(dt: number): void { /* physics integration */ }
  getState(): PendulumState { /* ... */ }
  reset(): void { /* ... */ }
}

// 2. View — React + Canvas/p5, subscribed to model
// labs/pendulum/View.tsx
export function PendulumView({ model }: { model: PendulumModel }) {
  // Renders current model state, no logic
}

// 3. Controls — pure React, modifies model
// labs/pendulum/Controls.tsx
export function PendulumControls({ model, onChange }: Props) {
  // Sliders, buttons; on change, calls model setters
}

// 4. Container — orchestrates everything
// labs/pendulum/index.tsx
export function PendulumLab() {
  const [model] = useState(() => new PendulumModel());
  return (
    <LabContainer
      controls={<PendulumControls model={model} />}
      view={<PendulumView model={model} />}
    />
  );
}
```

### 3.2 Beneficios del desacople

| Beneficio | Por qué importa |
|-----------|-----------------|
| **Modelo testeable sin navegador** | Vitest corre el modelo en milisegundos. Verificamos física en CI antes de cada deploy. |
| **Vista intercambiable** | Si Canvas no rinde en gama baja, cambiamos a SVG sin tocar la física. |
| **Controles reutilizables** | Un `<LabeledSlider/>` sirve a 30 labs distintos. |
| **Defendibilidad ante revisor** | Un investigador puede revisar `Model.ts` y verificar la física. |

**Conexión con la misión**: la integridad científica es defendible cuando la lógica está aislada. Los financiadores pueden auditar el modelo. Los docentes confían en la simulación porque el código es revisable.

### 3.3 Librerías de simulación evaluadas

| Library | Para qué | Cuándo usarla | Cuándo NO |
|---------|----------|---------------|-----------|
| **Canvas API directo** | Render simple (formas, partículas) | Cuando p5.js es overkill | Cuando se necesitan utilidades de p5 |
| **p5.js** | Render creativo, formas, animaciones | Sims ilustrativas (estados materia, ondas) | Cuando Canvas API basta |
| **Matter.js** | Física 2D (cuerpos rígidos, colisiones) | Péndulos, planos inclinados, choques | Física analítica simple (MRU, MRUA) |
| **Konva.js** | Canvas 2D estructurado | Circuitos, diagramas interactivos | Cuando hay física compleja |
| **Recharts** | Gráficas estándar React | Tiempo vs posición, datos del lab | Cuando se necesita interactividad pesada |
| **D3.js** | Visualización avanzada | Casos específicos | Para gráficas estándar (usar Recharts) |
| **react-three-fiber** | 3D web | **NO está en roadmap.** | Siempre, por ahora |
| **TensorFlow.js** | ML en navegador | **NO está en roadmap.** | Siempre |

**Stack mínimo para los primeros 5 labs**:
- Canvas API directo (render genérico).
- Matter.js (1-2 labs con física de cuerpos rígidos).
- Recharts (gráficas de datos).
- p5.js solo si Canvas API se queda corto.

**Conexión con la misión**: librerías estables, mantenidas, open source, sin lock-in con un proveedor. Si Matter.js muriera (improbable), reescribir esa capa toma semanas, no años.

---

## 4. PWA y offline (no negociable)

### 4.1 Arquitectura PWA

```
Service Worker estrategias:
  - App shell (HTML, CSS, JS base): cache-first
  - Lab assets (Canvas, sims): cache-first con expiry
  - Imágenes: cache-first con LRU
  - API (futuro): network-first con fallback
```

### 4.2 Niveles de soporte offline

**Nivel 1 (MVP, mes 2)**: PWA básica con manifest. Instalable en pantalla de inicio.

**Nivel 2 (mes 3, cuando haya 3 labs)**: service worker que cachea shell. Sitio carga instantáneo en visita posterior.

**Nivel 3 (mes 4-5)**: cache de labs específicos. Si el estudiante visitó un lab, funciona offline.

**Nivel 4 (mes 6+, opcional)**: descarga manual de "paquete offline" (5 labs + guías PDF). Para pilotaje en zonas sin internet.

### 4.3 Conexión con la misión

29% de colegios públicos colombianos sin internet (MinTIC 2024). PWA con offline real es **la diferencia entre ser usado o no en zonas rurales**. No es feature, es justicia educativa.

---

## 5. Datos y backend (no en MVP)

### 5.1 MVP sin backend (meses 1-3)
- Todo es estático.
- Labs corren 100% en cliente.
- Metadatos en `meta.ts` por lab + Astro Content Collections.
- Preguntas en `questions.ts` por lab.
- Sin login, sin servidor, sin base de datos.

### 5.2 Cuándo aparece backend (fase 3+, mes 7+)

**Triggers para agregar backend**:
- Docente pide guardar resultados de preguntas.
- Pilotaje requiere recolectar datos para evaluación de impacto.
- Aliado institucional pide reportes.

**Stack cuando llegue ese momento**:
- **Hono** sobre Cloudflare Workers. Razón: edge nativo, TypeScript-first, más rápido y simple que Express.
- **PostgreSQL** vía **Supabase** o **Neon**. Razón: serverless, branches como Git, free tier generoso, datos exportables (no lock-in).
- **Drizzle ORM**. Razón: typesafe sin la lentitud de Prisma.
- **Auth**: **Supabase Auth** (parte de Supabase si lo elegimos como BaaS) o **Clerk** (más completo).

### 5.3 Tradeoff Supabase vs Neon+Clerk

| | Supabase | Neon + Clerk |
|---|----------|--------------|
| Setup | Más rápido (todo en uno) | Más componentes |
| Lock-in | Medio (pero datos exportables) | Bajo |
| Costo gratis | Generoso | Generoso |
| Auth integrado | Sí | Vía Clerk separado |
| Realtime | Sí | No nativo |

**Recomendación**: empezar con Supabase cuando aparezca el momento. Migrar piezas si crece.

### 5.4 Política de datos de estudiantes (no negociable)

**Principio de minimización absoluta**:
- ID anónimo por sesión (sin email, sin nombre).
- Si docente crea aula: estudiante entra con código, sin datos personales.
- Solo guardamos: respuestas a preguntas, tiempo en sim (agregado), descubrimientos genuinos.
- **Nunca**: ubicación precisa, edad exacta, dispositivo, IP, comportamiento granular.

Cumplimiento: Ley 1581/2012, Decreto 1377/2013, PL 247/2025.

---

## 6. Despliegue y hosting

### 6.1 Stack de despliegue

**Frontend Astro**:
- **Cloudflare Pages** (preferido). Razones:
  - Adquisición Astro por Cloudflare en enero 2026 → soporte de primera clase.
  - Plan gratis muy generoso (builds + bandwidth ilimitado).
  - Red de edge superior en LATAM.
  - Sin egress fees.
- Alternativa: Vercel.

**Backend (futuro)**:
- **Cloudflare Workers**. Razones: edge, rápido, barato, integración natural con Pages.

**Archivos pesados (futuro, si hay PDFs grandes)**:
- **Cloudflare R2** (más barato que S3, sin egress fees).

**Costo estimado MVP**: USD 0/mes para tráfico hasta 100K usuarios mensuales.

### 6.2 Por qué no Vercel

Vercel es excelente, pero:
- Costos suben rápido si el tráfico crece.
- Sin presencia tan fuerte en LATAM como Cloudflare.
- Cloudflare es ahora dueño de Astro.

**Si en 2 años hay razón fuerte para migrar a Vercel, Astro es portable** (es el principio T3: sin lock-in).

---

## 7. Observabilidad y métricas

### 7.1 Analytics

**Plausible Analytics** (no Google Analytics).

Razones:
- Sin cookies, sin PII.
- Cumple GDPR/Ley 1581 sin banner de consentimiento.
- Open source, autohospedable si es necesario.
- Plan pago razonable cuando crezcamos.

**Qué medimos**:
- Visitas a páginas (sin identificar usuarios).
- Eventos clave: "lab abierto", "pregunta respondida", "guía descargada".
- Métricas Lighthouse en CI.

**Qué NO medimos**:
- Comportamiento individual.
- Ubicación precisa.
- Dispositivo único (fingerprinting).

### 7.2 Errores en producción

**Sentry** con configuración mínima:
- Errores de runtime (sin PII).
- Performance issues.
- Sin replays de usuario.

**Plan gratis de Sentry** alcanza para tráfico inicial.

### 7.3 Métricas de impacto (las importantes)

Estas son las que reportamos a financiadores y aliados:

1. **Cobertura por NSE/zona**: cruce con datos DANE (aproximado por departamento de IP).
2. **Ganancia normalizada Hake** en muestra piloto (pre-test/post-test).
3. **Adopción docente espontánea**: docentes registrados que NO contactamos directamente.
4. **Engagement real**: % de estudiantes que pasan >5 min en un lab.
5. **Repetición**: % que vuelven al menos una vez.

**Métricas vanity que monitoreamos pero NO reportamos como éxito**:
- Total de visitas, sesiones, tiempo total.

---

## 8. Calidad y CI/CD

### 8.1 Pipeline

```yaml
# .github/workflows/ci.yml (esquema)
on: [pull_request, push to main]

jobs:
  - install (pnpm)
  - typecheck (tsc --noEmit)
  - lint (eslint)
  - test:unit (vitest)
  - test:e2e (playwright, only on main)
  - build (astro)
  - lighthouse-ci (only on main)
```

### 8.2 Pre-commit (Husky + lint-staged)

```
- ESLint en archivos modificados
- Prettier en archivos modificados
- TypeScript check rápido
```

### 8.3 Cobertura de tests

- **Modelos físicos**: cobertura ≥80% (no negociable, son la integridad científica).
- **Componentes UI**: tests de smoke (renderiza sin error).
- **E2E**: catálogo + 1 lab funcional + descarga de guía.

---

## 9. Accesibilidad (WCAG 2.1 AA mínimo)

### 9.1 Herramientas obligatorias en CI

- **eslint-plugin-jsx-a11y** (errores en build).
- **@axe-core/playwright** en tests E2E.
- **Lighthouse CI** en cada deploy a main.

### 9.2 Reglas no negociables

- Todo lab usable solo con teclado (al menos pause/play y reset).
- Todo lab tiene `aria-label` y descripción textual del estado actual.
- Contraste mínimo 4.5:1 para texto, 3:1 para gráficos.
- Foco visible siempre.
- Modo daltónico (no depender solo del color para transmitir información).

### 9.3 Auditoría manual cada release

- Lector de pantalla (NVDA en Windows, VoiceOver en Mac, TalkBack en Android).
- Solo teclado.
- Zoom 200%.

---

## 10. Patrones canónicos del proyecto

### 10.1 Patrón Lab

Cada laboratorio en `src/labs/<slug>/`:

```
src/labs/states-of-matter/
├── index.tsx          ← entry point
├── Model.ts           ← pure physics
├── Model.test.ts      ← Vitest tests
├── View.tsx           ← rendering
├── Controls.tsx       ← UI controls
├── meta.ts            ← metadata
├── questions.ts       ← ICFES-style questions
├── modes/             ← pedagogical modes (5E, guided, PBL prompts)
│   ├── inquiry5E.ts
│   ├── guided.ts
│   └── pbl.ts
├── README.md          ← maintainer notes
└── assets/
    ├── icon.svg
    └── thumbnail.webp
```

### 10.2 Patrón LabContainer

Wrapper genérico que envuelve TODO laboratorio:

```tsx
<LabContainer
  meta={meta}
  mode={selectedMode}            // 'free' | '5E' | 'guided' | 'pbl' | 'eval'
  controls={<Controls />}
  view={<View />}
  questions={questions}          // se muestran según modo
  onModeChange={setSelectedMode}
/>
```

**Beneficios**:
- Layout consistente entre todos los labs.
- Accesibilidad uniforme.
- Botones estándar (pause, reset, ayuda, modo).
- Panel de preguntas opcional según modo.
- Responsive sin que cada lab lo resuelva.

### 10.3 Patrón Metadata-driven catalog

El catálogo NO se programa. Se genera de los `meta.ts` de cada lab:

```typescript
// src/labs/states-of-matter/meta.ts
export const meta: LabMeta = {
  slug: "states-of-matter",
  title: "Estados de la materia",
  description: "Explora cómo cambian las partículas...",
  area: "chemistry",
  level: ["middle", "high"],
  competencies: ["modeling", "concept-application"],
  curriculumTags: {
    co_dba: ["DBA-Ciencias-6-01"],
    co_icfes: ["uso-comprensivo"],
  },
  estimatedDurationMin: 20,
  difficulty: "easy",
  availableModes: ["free", "5E", "guided", "eval"],
  published: true,
  thumbnail: "./assets/thumbnail.webp",
};
```

**Agregar lab nuevo = crear carpeta + meta.ts + componente. Sin tocar el catálogo.**

### 10.4 Patrón Questions

```typescript
// src/labs/states-of-matter/questions.ts
export const questions: Question[] = [
  {
    id: "som-q1",
    competency: "modeling",
    context: "Una estudiante coloca un vaso con agua...",
    question: "¿Cuál de las siguientes hipótesis...?",
    options: [
      { id: "a", text: "..." },
      { id: "b", text: "..." },
      { id: "c", text: "..." },
      { id: "d", text: "..." },
    ],
    correctOptionId: "b",
    explanation: "Las partículas con suficiente energía cinética...",
    misconception: "El estudiante que escoge A confunde cambio de estado con reacción química.",
  },
  // ...
];
```

---

## 11. Lo que NO usaremos (y por qué)

| Tecnología | Por qué no |
|------------|-----------|
| Redux | Innecesariamente complejo para nuestro tamaño. |
| GraphQL | REST/RPC simple es suficiente. |
| Microservicios | No hay carga que los justifique. |
| Kubernetes | Edge functions son suficientes. |
| MongoDB | Datos relacionales → Postgres. |
| Webpack directo | Vite (Astro) es más rápido. |
| Material UI | Pesado, opinionado en estilo. |
| Bootstrap | Inconsistente con Tailwind. |
| jQuery | No. |
| Three.js / r3f | No está en roadmap. |
| Server Components antes de tiempo | Astro Islands resuelve sin esa complejidad. |
| Google Analytics | Cookies, PII, no compatible con privacidad de menores. |
| Firebase | Lock-in profundo con Google. |
| Auth0 | Caro al escalar; hay alternativas open. |

---

## 12. Stack alternativo (plan B si Astro fallara)

Si por alguna razón Astro no funcionara:

- **Next.js 15+** con App Router.
- Mismo TypeScript, Tailwind, shadcn.
- Catálogo como Server Components.
- Labs como Client Components.

**Costo de cambio**: moderado. Los labs (lo más complejo) son agnósticos al framework gracias al patrón Model/View/Controls.

---

## 13. Versiones recomendadas (abril 2026)

```
node >= 20 LTS
pnpm >= 9 (no npm, no yarn)
astro >= 5
react >= 19
typescript >= 5.4
tailwindcss >= 4
vitest >= 2
playwright >= 1.45
```

---

## 14. Performance budgets (no negociables)

- **Página de catálogo**: < 100 KB JS, Lighthouse > 95.
- **Página de lab**: < 300 KB JS (incluyendo Matter.js si aplica), Lighthouse > 90.
- **Tiempo a interactivo en 4G simulado**: < 3 segundos.
- **Tiempo a interactivo en 3G simulado**: < 6 segundos.
- **Memoria pico durante lab**: < 100 MB.
- **FPS durante lab**: > 55 estable en celular gama media.

**Si un lab supera el budget: se optimiza antes de publicar. Sin excepción.**

---

## 15. Decisiones diferidas (no tomar todavía)

- ¿Qué CMS visual para autores externos? (Sanity, Contentful, Payload, Decap). Decisión: cuando lleguen autores externos.
- ¿Pagos? Decisión: cuando haya servicios profesionales pagables.
- ¿Internacionalización completa? Decisión: cuando aparezca primer cliente fuera de Colombia.
- ¿App móvil nativa? Decisión: PWA primero. Nativa solo si hay demanda real medida.
- ¿IA generativa? Decisión: solo si resuelve un problema pedagógico medible. No "porque está de moda".
- ¿3D? Decisión: solo si un concepto crítico no puede explicarse en 2D.
- ¿Realtime collaboration? Decisión: cuando llegue piloto institucional.

---

## 16. Cómo defender estas decisiones ante un evaluador técnico

### Si pregunta: "¿Por qué Astro y no Next.js?"
Respuesta: "El 80% del sitio es contenido estático (catálogo, fichas, guías). Astro envía cero JS por defecto en esas páginas, lo que reduce tiempo de carga en 4G/3G en colegios rurales. Next.js sería excesivo para ese contenido. Las simulaciones interactivas son islas React, donde sí enviamos JS."

### Si pregunta: "¿Por qué no Three.js para sims más impresionantes?"
Respuesta: "2D bien diseñado cubre los conceptos de física/química/biología en secundaria. 3D pesa más, requiere WebGL (problema en gama baja), y la evidencia (Wieman 2008) muestra que la efectividad no aumenta con realismo gráfico, sino con andamiaje implícito y manipulación productiva."

### Si pregunta: "¿Cómo aseguran integridad científica?"
Respuesta: "Modelo desacoplado del render. Lógica física en TypeScript puro, testeable con Vitest. Cobertura de tests ≥80% en motores. Cada modelo revisado por experto del área antes de publicar. Código abierto MIT — cualquiera puede auditar."

### Si pregunta: "¿Privacidad de estudiantes?"
Respuesta: "Privacidad por diseño. Sin login obligatorio. Sin cookies. Plausible Analytics (sin PII). Cumplimiento Ley 1581/2012 + Decreto 1377/2013 + PL 247/2025. Datos mínimos cuando existan. Sin trackers de terceros."

### Si pregunta: "¿Costo de operación?"
Respuesta: "Cloudflare Pages plan gratis para tráfico inicial. ~USD 0/mes hasta 100K usuarios mensuales. Cuando crezca, USD 5-20/mes. Sostenibilidad financiera: convocatorias, filantropía, servicios profesionales (capacitación)."

### Si pregunta: "¿Y si crece a 1M usuarios?"
Respuesta: "Cloudflare Pages escala automáticamente. Bandwidth ilimitado en plan gratis. CDN global. Backend (cuando exista) en Cloudflare Workers escala a millones de requests sin reservar capacidad. Postgres serverless en Neon escala con uso. Diseño edge-native."

---

## 17. Conexión técnica ↔ misión pedagógica (resumen)

Cada decisión técnica grande tiene un porqué pedagógico:

| Decisión técnica | Conexión con misión |
|------------------|---------------------|
| Astro estático | Carga rápida en internet rural |
| Mobile-first 360px | Llegamos al celular del estudiante real |
| PWA + offline | Funciona donde no hay internet |
| Modelo desacoplado | Integridad científica defendible |
| TypeScript estricto | Calidad antes que cantidad |
| Open source MIT | Bien público auditable |
| Plausible (no GA) | Privacidad de menores |
| Sin VC, costo $0 | Sostenibilidad como bien público |
| Datos en archivos | Autores externos pueden contribuir |
| 5 modos pedagógicos | Autonomía docente |

**Si una decisión técnica no se puede conectar con la misión, hay que justificarla mejor o no tomarla.**

---

## 18. Cómo usar este documento

- **Antes de agregar una librería**: validar contra los 10 principios.
- **Antes de tomar una decisión técnica**: validar contra la conexión con la misión (sección 17).
- **Cuando aparezca una nueva tecnología seductora**: validar contra "Lo que NO usaremos" (sección 11).
- **Cuando aplicar a una convocatoria técnica**: usar respuestas de la sección 16.
- **Actualizar al menos cada 6 meses**, o cuando aparezca cambio relevante en el ecosistema.

---

> Documento mantenido por el responsable del proyecto.
> Última revisión: abril 2026.
