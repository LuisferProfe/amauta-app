# TASKS.md — Amauta

Referencia: [`docs/LAB_1_SPECIFICATION.md`](docs/LAB_1_SPECIFICATION.md) · [`docPlan/PRODUCT_ARCHITECTURE.md`](docPlan/PRODUCT_ARCHITECTURE.md)

---

## Fase 0 — Infraestructura base ✅

- [x] Astro 6 + React 19 + Tailwind CSS 4 configurados
- [x] TypeScript strict (`tsconfig.json`)
- [x] ESLint + Prettier configurados (`.prettierrc.mjs`, `eslint.config.js`)
- [x] Vitest + Testing Library instalados
- [x] Todas las dependencias instaladas (`p5`, `matter-js`, `mathjs`, `chroma-js`, `zod`, `lucide-react`, etc.)
- [x] `.gitignore` actualizado
- [x] `README.md` actualizado
- [x] `CLAUDE.md` creado
- [x] `TASKS.md` creado (este archivo)

---

## Fase 1 — Lab 1: Estados de la Materia

### 1.1 Modelo (TypeScript puro)

- [ ] Crear `src/lib/models/states-of-matter/constants.ts` — temperaturas de transición, constante de Boltzmann, valores por defecto
- [ ] Crear `src/lib/models/states-of-matter/model.ts` — clase `StatesOfMatterModel` con:
  - [ ] `determineState(temp)` — sólido / líquido / gas según temperatura
  - [ ] `generateParticles(n)` — inicializar N partículas con posición y velocidad
  - [ ] `update(deltaTime)` — mover partículas, rebotar en bordes, detectar transiciones
  - [ ] `updateVelocitiesFromTemperature()` — teoría cinética (KE ∝ T)
  - [ ] `setTemperature(temp)` / `setVolume(vol)` — setters con clamp
  - [ ] `getParticles()` / `getState()` / `getPressure()` / `getDensity()` — getters
- [ ] Crear `src/lib/models/states-of-matter/model.test.ts` — cobertura ≥ 80%:
  - [ ] Test: estado correcto según temperatura (sólido < 320K, líquido < 373K, gas ≥ 373K)
  - [ ] Test: `getPressure()` aumenta con temperatura a volumen constante (Ley de Gay-Lussac)
  - [ ] Test: `getPressure()` aumenta al reducir volumen a temperatura constante (Ley de Boyle)
  - [ ] Test: velocidades aumentan con temperatura
  - [ ] Test: partículas no salen del contenedor tras `update()`
  - [ ] Test: `setTemperature` respeta límites (273K–473K)

### 1.2 Vista (Canvas con p5.js)

- [ ] Crear `src/components/labs/states-of-matter/SimulationCanvas.tsx` — renderizar partículas con p5:
  - [ ] Color por estado: azul frío (sólido) → cyan (líquido) → naranja/rojo (gas) con `chroma-js`
  - [ ] Tamaño de círculo o trailing effect según velocidad
  - [ ] Overlay con estado actual, temperatura, presión, densidad
  - [ ] Responsive: ocupa 100% del contenedor padre
- [ ] Crear `src/lib/hooks/useAnimation.ts` — loop `requestAnimationFrame` + `deltaTime`
- [ ] Crear `src/lib/hooks/useLabModel.ts` — conecta modelo con estado React

### 1.3 Controles

- [ ] Crear `src/components/labs/states-of-matter/ControlPanel.tsx`:
  - [ ] Slider temperatura (273K–473K) con label en K y °C
  - [ ] Slider volumen (0.5–2.0)
  - [ ] Botones: Play / Pausa / Reset
  - [ ] Touch targets ≥ 44×44 px

### 1.4 Preguntas ICFES

- [ ] Crear `src/content/labs/states-of-matter/questions.json` — 3 preguntas con:
  - [ ] Pregunta 1: identificación de estado por observación
  - [ ] Pregunta 2: presión al comprimir gas (Ley de Boyle)
  - [ ] Pregunta 3: mecanismo microscópico de ebullición
  - [ ] Cada opción con `is_correct` + `explanation`
- [ ] Crear `src/components/labs/QuestionDisplay.tsx` — mostrar pregunta + opciones
- [ ] Crear `src/components/labs/FeedbackDisplay.tsx` — feedback constructivo post-respuesta (por qué correcta + por qué incorrectas)

### 1.5 Modos pedagógicos

- [ ] Crear `src/components/labs/Modes/FreeMode.tsx` — sandbox sin instrucciones
- [ ] Crear `src/components/labs/Modes/GuidedMode.tsx` — instrucciones paso a paso
- [ ] Crear `src/components/labs/Modes/EvaluationMode.tsx` — solo preguntas ICFES

### 1.6 Contenedor principal

- [ ] Crear `src/components/labs/LabContainer.tsx` — wrapper genérico con:
  - [ ] Layout: vista arriba (60%), controles abajo (mobile-first)
  - [ ] Top bar: título + selector de modo
  - [ ] Panel de preguntas según modo activo
  - [ ] Keyboard shortcuts: Space (pausa), R (reset)
  - [ ] `aria-live` para anunciar cambios de estado

### 1.7 Metadata y content collection

- [ ] Crear `src/content/labs/states-of-matter.yaml` — slug, título, área, nivel, competencias, tags DBA/ICFES, modos disponibles
- [ ] Definir schema Zod en `src/content/config.ts`

### 1.8 Página del lab

- [ ] Crear `src/pages/labs/[slug].astro` — ficha del lab: descripción, CTA "Abrir laboratorio", competencias, alineación curricular, sección docentes
- [ ] Crear `src/pages/labs/[slug]/run.astro` — motor del lab (isla React)

### 1.9 Checklist de calidad (antes de publicar)

- [ ] Tests del modelo pasan con cobertura ≥ 80%
- [ ] Funciona en 360×640 px sin scroll horizontal
- [ ] FPS estable en simulación (target: > 55 fps)
- [ ] Bundle del lab < 1 MB
- [ ] Accesibilidad: sliders con `aria-label`, estado anunciado con `aria-live`, navegable con teclado
- [ ] Modo daltónico: información no depende solo del color
- [ ] `npm run lint` sin errores
- [ ] `npm run build` exitoso

---

## Fase 2 — Portal y Catálogo

- [ ] Crear `src/layouts/BaseLayout.astro` — head, fuente Inter, global.css, meta tags
- [ ] Crear `src/pages/index.astro` — Home: hero, 3 labs destacados, por qué existimos, para docentes, footer
- [ ] Crear `src/pages/labs/index.astro` — Catálogo con filtros (área, nivel, competencia) y búsqueda
- [ ] Crear componentes UI base: `Button.tsx`, `Card.tsx`, `Badge.tsx`, `Modal.tsx`
- [ ] Integrar `@astrojs/sitemap` en `astro.config.mjs`
- [ ] Configurar `pagefind` (ya en `npm run build`)

---

## Fase 3 — Páginas institucionales

- [ ] `src/pages/about.astro` — quiénes somos, manifiesto
- [ ] `src/pages/privacidad.astro` — política Ley 1581
- [ ] `src/pages/marco-pedagogico.astro` — resumen público del framework pedagógico
- [ ] `src/pages/codigo-abierto.astro` — cómo contribuir, licencia

---

## Fase 4 — PWA

- [ ] Configurar `vite-pwa-plugin` en `astro.config.mjs` — manifest, iconos, service worker
- [ ] Estrategia cache: shell cache-first, labs cache-first, catálogo network-first
- [ ] Probar modo offline: lab cargado debe funcionar sin internet
- [ ] Banner "Modo offline" cuando no hay conexión

---

## Fase 5 — CI/CD

- [ ] Crear `.github/workflows/ci.yml`:
  - [ ] `npm run lint`
  - [ ] `npm run test:coverage`
  - [ ] `npx astro check`
  - [ ] `npm run build`
- [ ] Configurar Cloudflare Pages — deploy automático en push a `main`
- [ ] Lighthouse CI en cada deploy

---

## Backlog (Fase 3+, no MVP)

- [ ] Modo docente con login (Supabase Auth)
- [ ] Aulas con código corto
- [ ] Respuestas agregadas por aula (anónimas)
- [ ] Lab 2 (a definir — pendiente priorización)
- [ ] Internacionalización
- [ ] Playwright E2E

---

> Actualizar este archivo al completar cada tarea.
> Las tareas marcadas `[ ]` son el trabajo pendiente. Las `[x]` están listas.
