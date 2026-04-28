# Arquitectura Técnica de Amauta

## 1. Visión General

```
┌─────────────────────────────────────────────────────┐
│               EDGE (Cloudflare Pages)               │
├─────────────────────────────────────────────────────┤
│
│  ┌────────────────────────────────────────────────┐
│  │  PRESENTACIÓN LAYER (Astro 6)                  │
│  │  - Pages estáticas (SSG)                       │
│  │  - React islands (interactividad)              │
│  │  - Tailwind CSS                                │
│  └────────────────────────────────────────────────┘
│           ↓
│  ┌────────────────────────────────────────────────┐
│  │  CONTENT LAYER (Astro Collections)             │
│  │  - Labs metadata (YAML)                        │
│  │  - Preguntas ICFES                             │
│  │  - Guías docentes                              │
│  └────────────────────────────────────────────────┘
│           ↓
│  ┌────────────────────────────────────────────────┐
│  │  SIMULATION LAYER (React + TS)                 │
│  │  - Model.ts (lógica, TypeScript puro)          │
│  │  - View.tsx (Canvas/p5.js)                     │
│  │  - Physics engine (Matter.js opcional)         │
│  └────────────────────────────────────────────────┘
│           ↓
│  ┌────────────────────────────────────────────────┐
│  │  PWA LAYER (Service Workers)                   │
│  │  - Offline-first strategy                      │
│  │  - Cache shell                                 │
│  │  - Background sync                             │
│  └────────────────────────────────────────────────┘
│
└─────────────────────────────────────────────────────┘
```

## 2. Flujo de una Página

### Renderizado de Home

1. **Astro SSG** → Genera HTML estático en build time
2. **Tailwind** → CSS optimizado (tree-shaking)
3. **React Islands** → Rehidratación solo en componentes interactivos
4. **Service Worker** → Precarga shell en background

### Acceso a un Laboratorio

1. Usuario navega a `/labs/states-of-matter`
2. Astro resuelve desde Content Collection
3. React component (`LabContainer.tsx`) rehidrata
4. Model.ts (TypeScript puro) carga en memory
5. Canvas (View.tsx) renderiza primera frame
6. PWA cache sirve assets offline

## 3. Estructura de Carpetas Detallada

### `src/components/`

```
components/
├── labs/
│   ├── LabContainer.tsx         # Contenedor principal del lab
│   ├── LabHeader.tsx            # Título, competencias, nivel
│   ├── SimulationCanvas.tsx      # Canvas container (p5.js o Canvas API)
│   ├── ControlPanel.tsx          # Sliders, botones, inputs
│   ├── QuestionDisplay.tsx       # Pregunta ICFES actual
│   ├── FeedbackDisplay.tsx       # Retroalimentación formativa
│   └── Modes/
│       ├── FreeMode.tsx          # Sandbox puro
│       ├── GuidedMode.tsx        # Con instrucciones paso a paso
│       ├── ProbeMode.tsx         # Solo con preguntas
│       ├── EvaluationMode.tsx    # Evaluación
│       └── InquiryMode.tsx       # Indagación con andamiaje
│
└── ui/
    ├── Card.tsx
    ├── Button.tsx
    ├── Badge.tsx
    ├── Modal.tsx
    ├── Select.tsx
    └── Layout.tsx
```

### `src/lib/`

```
lib/
├── models/
│   ├── types.ts                 # Tipos globales
│   ├── states-of-matter/
│   │   ├── model.ts            # Lógica de estados (sin DOM)
│   │   ├── model.test.ts       # Tests con Vitest
│   │   └── constants.ts        # Temperaturas, presiones, etc.
│   └── [lab-name]/
│       ├── model.ts
│       ├── model.test.ts
│       └── constants.ts
│
├── physics/
│   ├── particle.ts             # Clase Particle
│   ├── container.ts            # Clase Container (volumen)
│   └── forces.ts               # Cálculos de fuerza
│
├── utils/
│   ├── math.ts                 # Funciones matemáticas
│   ├── validation.ts           # Validación de respuestas
│   └── analytics.ts            # Tracking anónimo (Plausible)
│
└── hooks/
    ├── useLabModel.ts          # Hook para modelo
    ├── useAnimation.ts         # Loop de animación
    └── usePersistence.ts       # LocalStorage para offline
```

### `src/content/`

```
content/
└── labs/
    ├── states-of-matter.yaml           # Metadata
    ├── _states-of-matter/
    │   ├── guide.md                    # Guía docente
    │   ├── questions.json              # 3-5 preguntas ICFES
    │   ├── schema.ts                   # Validación Zod
    │   └── README.md                   # Notas internas
    │
    └── [lab-name].yaml
        ├── guide.md
        ├── questions.json
        ├── schema.ts
        └── README.md
```

## 4. Flujo de Datos: Laboratorio

```
Content Collection (YAML)
  ↓
{
  slug: "states-of-matter"
  title: "Estados de la materia"
  competencies: ["modeling", "concept-application"]
  dba: "Explica los cambios de estado..."
  icfes_tags: ["structure-matter", "kinetic-theory"]
  questions: [...]
}
  ↓
LabContainer.tsx
  ↓
useLabModel()
  ├─→ Model.ts (TypeScript puro)
  │   ├─→ initParticles(temp, volume)
  │   ├─→ updateState(delta_time)
  │   ├─→ getVisualization()
  │   └─→ checkAnswer(question_id, answer)
  ├─→ useState(particles)
  ├─→ useEffect(() → requestAnimationFrame)
  └─→ callbacks para controles
  ↓
SimulationCanvas.tsx (p5.js o Canvas API)
  ├─→ draw() loop
  ├─→ Renderiza particles
  └─→ Overlay de UI (controles, pregunta)
```

## 5. TypeScript Strict en Model

```typescript
// src/lib/models/states-of-matter/model.ts

interface Particle {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  mass: number;
  radius: number;
}

interface ContainerState {
  particles: Particle[];
  temperature: number;  // Kelvin
  volume: number;       // arbitrary units
  pressure: number;     // atm (calculated)
}

// Función testeable sin DOM
export function calculatePressure(state: ContainerState): number {
  // PV = NkT → P = NkT/V
  const N = state.particles.length;
  const k = 1.380649e-23; // Boltzmann
  const T = state.temperature;
  const V = state.volume;
  return (N * k * T) / V;
}

// Tests con Vitest
import { describe, it, expect } from 'vitest';

describe('calculatePressure', () => {
  it('should increase with temperature', () => {
    const state1 = { particles: Array(100).fill(null), temperature: 273, volume: 1 };
    const state2 = { ...state1, temperature: 373 };
    expect(calculatePressure(state2)).toBeGreaterThan(calculatePressure(state1));
  });
});
```

## 6. PWA Strategy

### Service Worker Precache

```
PRECACHE:
  - index.html
  - /styles/global.css
  - /js/main.js (core app shell)

CACHE ON FIRST USE:
  - /labs/{slug}/index.js
  - /assets/images/*
  - Google Fonts

NETWORK FIRST (with cache fallback):
  - /api/* (if we add API in future)

CACHE ONLY:
  - /assets/backgrounds/*
```

## 7. Performance Budget

```
Initial Bundle:     < 500 KB (gzipped: <150 KB)
  - Astro output:   ~80 KB
  - React + libs:   ~60 KB
  - Tailwind CSS:   ~30 KB
  - App code:       ~40 KB

Lab Simulation:     < 1 MB (gzipped: <300 KB)
  - Model.ts:       ~50 KB
  - p5.js:          ~350 KB
  - Assets:         ~200 KB

Interactive Time:   < 3s (3G, mid-range Android)
```

## 8. Testing Strategy

```
Unit Tests (Vitest)
  ├─ Model.ts logic (TypeScript puro)
  │  ├─ Particle physics
  │  ├─ State transitions
  │  └─ Question validation
  └─ Utils (math, validation)

Component Tests (@testing-library/react)
  ├─ ControlPanel rendering
  ├─ QuestionDisplay feedback
  └─ LabContainer integration

E2E (Playwright - future)
  ├─ Full lab flow
  ├─ Question answering
  └─ PWA offline mode
```

## 9. Deployment

### Build Process

```
npm run build
  ↓
Astro SSG (src/pages/ → HTML)
  ↓
Tailwind PurgeCSS (unused styles removed)
  ↓
TypeScript check (tsc)
  ↓
Minify + compress (Vite)
  ↓
dist/ ready for Cloudflare Pages
```

### Git + CI/CD

```
GitHub Actions (.github/workflows/build.yml)
  ├─ npm install
  ├─ npm run lint
  ├─ npm run test
  ├─ npm run build
  └─ Deploy to Cloudflare Pages on main branch
```

---

**Referencias**:
- [TECHNICAL_PRINCIPLES.md](../../Amauta/TECHNICAL_PRINCIPLES.md)
- [Astro Docs](https://docs.astro.build)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
