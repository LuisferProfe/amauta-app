# MVP_DEFINITION.md

> Definición precisa del MVP: qué construimos primero, qué NO, las primeras 3 simulaciones, criterios de aprobación.
> Este documento es el **filtro contra scope creep**. Si algo no está aquí, no entra al MVP.

---

## 1. Definición operativa de MVP

> **MVP = la versión más pequeña donde un estudiante real puede entrar, hacer un experimento, autoevaluarse, y querer volver.**

**NO es MVP**:
- Un sitio bonito sin labs funcionales.
- Un lab a medias.
- Una colección de labs mediocres.
- Un sistema de docentes sin labs sólidos.
- Cualquier feature que no llegue al estudiante.

**SÍ es MVP**:
- Sitio funcional con catálogo navegable.
- 3 labs completos, cada uno cumpliendo todos los criterios de calidad de PEDAGOGICAL_FRAMEWORK.md sección 8.
- Cada lab con preguntas tipo ICFES integradas.
- Cada lab con guía docente PDF descargable.
- Funciona en celular Android gama media (probado en uno real).
- PWA básica (manifest + cache de shell).
- Diseño cuidado y profesional.
- Acceso público sin login.
- Páginas institucionales mínimas.

---

## 2. La línea entre MVP y NO-MVP

### IN — Lo que SÍ va en MVP

| Categoría | Feature | Por qué SÍ |
|-----------|---------|-----------|
| **Portal** | Home con propuesta de valor + 3 labs destacados | Punto de entrada |
| **Catálogo** | Lista de 3 labs con filtros por área, nivel, competencia | Permite descubrir |
| **Ficha de lab** | Descripción, modos, preguntas, guía descargable | Contexto antes de usar |
| **Motor de lab** | 3 labs funcionales con modelo correcto | El producto en sí |
| **Modos** | Free, 5E, Eval (los 3 más críticos) | Versatilidad sin sobreingeniería |
| **Preguntas** | 3-5 preguntas tipo ICFES por lab | Autoevaluación formativa |
| **Guía PDF** | Generada estática, 1-2 páginas | Adopción docente |
| **PWA** | Manifest + service worker básico | Instalable, cache de shell |
| **A11y** | WCAG 2.1 AA verificado | No negociable |
| **Mobile** | Diseñado mobile-first 360px | Llega al estudiante real |
| **Privacidad** | Sin login, sin cookies, Plausible analytics | Cumple Ley 1581 |
| **Páginas institucionales** | About, marco pedagógico (resumen), privacidad, código abierto | Credibilidad |
| **CI/CD** | GitHub Actions + Cloudflare Pages | Calidad sostenida |

### OUT — Lo que NO va en MVP (postponemos sin culpa)

| Categoría | Feature | Cuándo |
|-----------|---------|--------|
| **Auth docente** | Login con email/Google | Fase 3 (mes 7+) |
| **Aulas** | Códigos de aula para docentes | Fase 3 |
| **Tracking respuestas** | Guardar resultados de estudiantes | Fase 3 |
| **Reportes docente** | Dashboard con estadísticas | Fase 3 |
| **Cuenta de estudiante** | Perfil personal | NUNCA en MVP, considerar Fase 4+ |
| **Modo PBL completo** | Casos elaborados, área de notas | Fase 2+ |
| **Modo Guided complejo** | Tareas paso a paso con check-off | Fase 2+ |
| **Más de 5 labs** | Crecer catálogo | Fase 2 (después de validar patrón) |
| **Búsqueda avanzada** | Algolia, full-text con relevancia | Cuando justifique |
| **Internacionalización** | Otros idiomas/países | Fase 4+ |
| **App móvil nativa** | iOS/Android | Probablemente nunca |
| **IA tutor** | Asistente generativo | Solo si hay evidencia de necesidad |
| **Foro / comunidad** | Espacio de docentes | Fase 4+ |
| **Servicios pagos** | Capacitación, consultoría | Cuando producto esté validado |
| **Modo oscuro** | Tema dark | Nice-to-have, posible MVP+ |
| **Transparencia financiera** | Página de quién financia | Cuando haya financiación |

---

## 3. Las 3 simulaciones del MVP

### Por qué 3 (no 5, no 1)

- **3 es suficiente para validar el patrón** Model/View/Controls. Si funciona para 3 labs distintos, funciona para 30.
- **3 es suficiente para mostrar variedad** (química + física, niveles distintos).
- **3 es alcanzable en 8-10 semanas** de trabajo en tiempos parciales.
- **Más de 3 alarga el MVP innecesariamente.** Mejor 3 sólidas que 5 mediocres.

### Lab 1 — Estados de la materia

**Por qué este primero**:
- Concepto fundamental de química (también de física).
- Visualización clara y motivadora (partículas en movimiento).
- DBA explícito y bien definido.
- Motor relativamente simple (no requiere Matter.js).
- Sirve como **patrón canónico** para los demás labs.
- Aplicable a varios niveles (middle y high).

**Datos de identidad**:
```yaml
slug: states-of-matter
title: Estados de la materia
area: chemistry
level: [middle, high]
competencies: [modeling, concept-application]
difficulty: easy
estimatedDurationMin: 20
availableModes: [free, 5E, eval]
co_dba: ["DBA-Ciencias-Naturales-6-01"]  # validar con PDF MEN
co_icfes: [uso-comprensivo, explicacion-fenomenos]
co_componente: [entorno-fisico]
co_grado: [6, 7]
```

**Mecánica del lab**:
- Caja contenedora con N partículas (50-200, según gama).
- Slider de temperatura (0-1000 K).
- Selector de sustancia: agua, neón, oxígeno (3 sustancias con propiedades distintas).
- Las partículas se mueven según T y propiedades de la sustancia.
- Color de partícula varía con velocidad (azul lento → rojo rápido).
- Etiqueta de estado actual (sólido / líquido / gas).

**Tecnología**:
- Canvas API directo (no requiere p5.js para esto).
- Sin Matter.js (las partículas tienen colisiones simples).
- Recharts para gráfica opcional de T vs tiempo.

### Lab 2 — Péndulo simple

**Por qué este segundo**:
- Validar que el patrón funciona con física más compleja.
- Concepto central de Saber 11 (MAS).
- Permite preguntas tipo ICFES de alta calidad.
- Mecánica visual icónica (todos saben qué es un péndulo).

**Datos de identidad**:
```yaml
slug: pendulum
title: Péndulo simple
area: physics
level: [high]
competencies: [inquiry, modeling, data-analysis, quantitative-reasoning]
difficulty: medium
estimatedDurationMin: 25
availableModes: [free, 5E, eval]
co_icfes: [uso-comprensivo, explicacion-fenomenos]
co_componente: [entorno-fisico]
co_grado: [10, 11]
```

**Mecánica del lab**:
- Péndulo con cuerda y masa.
- Sliders: longitud (0.1-3 m), masa (0.1-5 kg), gravedad (1-25 m/s²), amplitud inicial.
- Toggle: con/sin fricción del aire.
- Vista lateral del péndulo oscilando.
- Display: período actual, frecuencia, energía cinética/potencial.
- Gráfica opcional: ángulo vs tiempo.

**Tecnología**:
- Canvas API o p5.js (a decidir según pruebas).
- Sin Matter.js (la física del péndulo se integra mejor con ecuaciones directas).
- Recharts para gráfica.

### Lab 3 — Densidad y flotación

**Por qué este tercero**:
- Cubre el área "tangible" (los estudiantes tienen intuición previa).
- Permite trabajar con misconceptions famosas ("lo pesado se hunde").
- Introduce concepto de Matter.js de forma simple (objetos con masa y volumen).
- Conecta física con química (densidad de líquidos distintos).

**Datos de identidad**:
```yaml
slug: density-buoyancy
title: Densidad y flotación
area: physics
level: [middle, high]
competencies: [inquiry, concept-application, critical-thinking]
difficulty: medium
estimatedDurationMin: 25
availableModes: [free, 5E, eval]
co_icfes: [uso-comprensivo, explicacion-fenomenos]
co_componente: [entorno-fisico]
co_grado: [8, 9, 10]
```

**Mecánica del lab**:
- Recipiente con líquido (agua, aceite, mercurio, alcohol, miel).
- Objetos: cubo, esfera, cilindro (cada uno con masa y volumen ajustables).
- El estudiante "suelta" el objeto en el líquido.
- El objeto flota a profundidad determinada por densidades.
- Display: densidad de objeto vs líquido.

**Tecnología**:
- Matter.js para la física de flotación.
- Canvas API para render.
- Aquí es donde validamos que Matter.js funciona bien en gama media.

---

## 4. Estructura de carpetas del MVP

```
virtual-labs-platform/
├── .github/
│   └── workflows/
│       └── ci.yml
├── docs/
│   ├── IDENTITY.md
│   ├── MANIFESTO.md
│   ├── DIFFERENTIATION.md
│   ├── PEDAGOGICAL_FRAMEWORK.md
│   ├── TECHNICAL_PRINCIPLES.md
│   ├── PRODUCT_ARCHITECTURE.md
│   ├── MVP_DEFINITION.md
│   ├── DEPLOYMENT_STRATEGY.md       (← Bloque 3)
│   ├── FUNDING_STRATEGY.md          (← Bloque 3)
│   ├── ROADMAP.md                    (← Bloque 3)
│   ├── OPERATING_INSTRUCTIONS.md    (← Bloque 3)
│   ├── CLAUDE.md                     (← actualizado en Bloque 3)
│   └── decisions/
│       ├── 0001-choose-astro.md
│       ├── 0002-mvc-pattern-for-labs.md
│       ├── 0003-strict-typescript.md
│       ├── 0004-tailwind-shadcn.md
│       ├── 0005-code-english-ui-spanish.md
│       ├── 0006-no-3d-in-roadmap.md
│       ├── 0007-pluralism-pedagogical.md
│       ├── 0008-public-good-not-vc.md
│       ├── 0009-no-login-mvp.md
│       └── 0010-mobile-first-absolute.md
│
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   ├── manifest.webmanifest
│   └── icons/
│       ├── icon-192.png
│       └── icon-512.png
│
├── src/
│   ├── components/
│   │   ├── ui/                       # shadcn/ui
│   │   ├── platform/                 # Header, Footer, LabCard, Hero...
│   │   └── lab/                      # LabContainer, Slider, ResetButton...
│   │
│   ├── labs/
│   │   ├── states-of-matter/
│   │   │   ├── index.tsx
│   │   │   ├── Model.ts
│   │   │   ├── Model.test.ts
│   │   │   ├── View.tsx
│   │   │   ├── Controls.tsx
│   │   │   ├── meta.ts
│   │   │   ├── questions.ts
│   │   │   ├── modes/
│   │   │   │   ├── inquiry5E.ts
│   │   │   │   └── guided.ts
│   │   │   ├── README.md
│   │   │   └── assets/
│   │   ├── pendulum/
│   │   │   └── (misma estructura)
│   │   └── density-buoyancy/
│   │       └── (misma estructura)
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── LabLayout.astro
│   │   └── DocsLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro              # Home
│   │   ├── about.astro              # Sobre
│   │   ├── marco-pedagogico.astro
│   │   ├── privacidad.astro
│   │   ├── codigo-abierto.astro
│   │   └── labs/
│   │       ├── index.astro          # Catálogo
│   │       └── [slug].astro         # Ficha de lab
│   │
│   ├── content/
│   │   └── config.ts
│   │
│   ├── lib/
│   │   ├── physics/
│   │   │   ├── vector.ts
│   │   │   └── integrators.ts
│   │   ├── pedagogy/
│   │   │   ├── competencies.ts
│   │   │   └── curriculumTags.ts
│   │   ├── catalog/
│   │   │   ├── loadLabs.ts
│   │   │   └── filters.ts
│   │   ├── pdf/
│   │   │   └── generateGuide.ts
│   │   └── utils.ts
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── types/
│   │   ├── lab.ts
│   │   ├── question.ts
│   │   ├── pedagogy.ts
│   │   └── index.ts
│   │
│   └── env.d.ts
│
├── tests/
│   ├── e2e/
│   │   ├── catalog.spec.ts
│   │   └── lab-states-of-matter.spec.ts
│   └── setup.ts
│
├── scripts/
│   ├── generate-pdfs.ts
│   └── validate-labs.ts
│
├── astro.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── pnpm-lock.yaml
├── .eslintrc.cjs
├── .prettierrc
├── .gitignore
├── README.md
├── LICENSE                           # MIT
└── .env.example
```

---

## 5. Criterios de aprobación de cada lab

Antes de marcar `published: true` en el `meta.ts`, un lab DEBE cumplir TODOS estos criterios:

### Pedagógicos (de PEDAGOGICAL_FRAMEWORK.md sección 8)
- [ ] Declara al menos 1 competencia universal.
- [ ] Tiene ≥3 preguntas tipo ICFES con clave + explicación que enseña.
- [ ] Las preguntas evalúan competencias declaradas, no memorización.
- [ ] Cada distractor está basado en una misconception documentada.
- [ ] Modelo físico/químico revisado por al menos un experto del área.

### Técnicos
- [ ] Funciona en celular Android gama media (probado en uno real, no solo emulador).
- [ ] Es usable solo con teclado.
- [ ] WCAG 2.1 AA verificado con axe.
- [ ] Lighthouse > 90 en página del lab.
- [ ] Tiempo a interactivo < 3s en 4G simulado, < 6s en 3G.
- [ ] Bundle del lab < 500 KB inicial.
- [ ] FPS > 55 estable en celular gama media.
- [ ] Cobertura de tests del modelo ≥ 80%.

### Modos pedagógicos
- [ ] Modo Free funciona y es genuinamente útil.
- [ ] Modo 5E tiene secuencia de prompts en cada fase.
- [ ] Modo Eval muestra preguntas con explicación constructiva.

### Validación con usuarios
- [ ] Probado con ≥10 estudiantes reales (think-aloud) en al menos 3 ciclos.
- [ ] Probado con ≥2 docentes que NO sean el responsable.
- [ ] Iteraciones documentadas (qué se cambió y por qué).

### Documentación
- [ ] `README.md` interno con notas para mantenedores.
- [ ] Guía docente PDF generada y revisada.
- [ ] Misconceptions documentadas en el código (comentarios en `questions.ts`).

**Si un lab no cumple los 17 criterios, no se publica.** Se queda en `published: false` hasta cumplir.

---

## 6. Ruta para probar con estudiantes reales

### 6.1 Tipos de pruebas

**Think-aloud (clave para iteración)**:
- Estudiante usa el lab pensando en voz alta.
- Investigador observa, no interfiere.
- Se documentan: dónde se atascan, qué confunden, qué les sorprende.
- Mínimo 5 estudiantes por iteración.

**Pre/post-test (medición de aprendizaje)**:
- Antes del lab: pregunta inicial sobre el concepto.
- Después del lab: pregunta similar.
- Cálculo de ganancia normalizada (fórmula Hake).
- Mínimo 30 estudiantes por cohorte para significancia.

**Encuesta corta de UX**:
- 5-7 preguntas Likert + 1-2 abiertas.
- "¿Lo recomendarías a un amigo?" (NPS sencillo).
- "¿Qué fue lo más confuso?" (cualitativo).

### 6.2 Dónde probar

**Fase 1 (mes 2-3)**: tu propio salón de clase. Acceso fácil, retroalimentación inmediata, sin trámites.

**Fase 2 (mes 4-5)**: 1-2 colegas docentes. Otra mirada, otro contexto.

**Fase 3 (mes 6+)**: piloto formal en 1 colegio (idealmente el tuyo o aliado), con consentimiento informado y aval institucional.

### 6.3 Cómo recoger feedback sin invadir privacidad

- Sin grabar identidad de estudiantes.
- Notas anónimas del observador.
- Encuestas sin email (solo curso/grado).
- Datos agregados, nunca individuales.

### 6.4 Cuántas iteraciones por lab

Recomendación: **3 iteraciones mínimas** antes de publicar:

1. **Iteración 1**: prototipo funcional, 5 estudiantes. Detectar bugs gordos y confusiones obvias.
2. **Iteración 2**: refinado, 5-10 estudiantes. Pulir UX, verificar comprensión.
3. **Iteración 3**: pre-publicación, 10+ estudiantes. Validar criterios y medir aprendizaje.

---

## 7. Criterios de salida del MVP

El MVP está completo cuando:

- [ ] Las 3 simulaciones publicadas cumplen los 17 criterios.
- [ ] Catálogo navegable con filtros funcionales.
- [ ] Cada lab tiene guía PDF descargable.
- [ ] PWA instalable y con cache de shell.
- [ ] Páginas institucionales escritas y publicadas.
- [ ] Sitio desplegado en Cloudflare Pages con dominio propio (al menos `vlabs.pages.dev`, idealmente `.co`).
- [ ] CI/CD funcionando (typecheck + lint + tests + build automáticos).
- [ ] Lighthouse > 90 en homepage, catálogo y al menos 1 lab.
- [ ] WCAG 2.1 AA verificado en todas las páginas.
- [ ] Probado en al menos 30 estudiantes reales en total.
- [ ] Documentación completa y commiteada.
- [ ] Repo público en GitHub con README claro.

---

## 8. Métricas de éxito del MVP

Al final del MVP (estimado mes 4-5), evaluamos:

| Métrica | Objetivo MVP |
|---------|-------------|
| Labs publicados | 3 |
| Estudiantes que han usado la plataforma | ≥ 30 |
| Docentes que la han usado (sin contar al responsable) | ≥ 2 |
| Tiempo promedio en lab | > 5 min |
| Lighthouse promedio | > 90 |
| Tiempo de carga 4G simulado | < 3s |
| Bugs críticos abiertos | 0 |
| Ganancia normalizada (Hake) en muestra piloto | > 0.3 |

**Si las métricas se cumplen**: graduamos del MVP. Pasamos a Fase 2 (más labs + auth opcional).
**Si no**: revisamos qué falló, ajustamos antes de seguir. **No agregamos features hasta que las existentes funcionen.**

---

## 9. Lo que sigue después del MVP

### Fase 2 (meses 5-9): Reutilización y crecimiento
- 4 labs más (total 7).
- Filtros más sofisticados (búsqueda Pagefind).
- Modo Guided y PBL completos.
- Iteración basada en feedback del MVP.
- Primera convocatoria de financiamiento aplicada.

### Fase 3 (meses 9-12): Plataforma docente
- Backend con Supabase.
- Auth docente.
- Aulas con código.
- Tracking agregado de respuestas.
- Reportes simples para docentes.
- Pilotaje en colegio aliado.

### Fase 4 (año 2+): Escalamiento
- Más labs (15-20).
- Posible expansión a primaria o universidad introductoria.
- Workflow de creación de contenido para autores externos.
- Decisiones estratégicas sobre modelo de sostenibilidad.

---

## 10. Anti-patrones explícitos del MVP

Errores comunes en MVPs que vamos a evitar:

| Anti-patrón | Por qué evitarlo |
|-------------|------------------|
| "Hagamos solo 1 lab perfecto y luego vemos" | No valida el patrón Model/View/Controls. Necesitamos 3 mínimo. |
| "Hagamos 10 labs rápidos" | Calidad antes que cantidad. Cada lab cuesta semanas hacer bien. |
| "Agreguemos auth desde el inicio" | Postergar hasta que haya razón real. Sin login es feature, no carencia. |
| "Modo oscuro / animaciones / estética premium" | Nice-to-have. MVP es funcional + accesible primero. |
| "Optimicemos cuando crezca" | NO. Optimizar desde el inicio. Performance es justicia educativa. |
| "Hagamos el dashboard docente" | NO en MVP. El estudiante es primario. |
| "Agreguemos IA generativa" | NO. Sin evidencia de necesidad pedagógica. |
| "Vamos a hacer también el modo 3D" | NO está en roadmap. 2D bien diseñado es suficiente. |
| "Esto puede ser solo desktop primero" | Anti-misión. Mobile-first absoluto desde día 1. |

---

## 11. Cómo usar este documento

- **Cuando alguien proponga una feature**, validar contra la lista IN/OUT (sección 2).
- **Cuando un lab esté casi listo**, validar contra los 17 criterios (sección 5).
- **Cuando aparezca scope creep**, este documento es la defensa.
- **Cuando se pregunte "¿podemos sacar el MVP antes?"**, revisar criterios de salida (sección 7).

---

> Documento mantenido por el responsable del proyecto.
> Última revisión: abril 2026.
