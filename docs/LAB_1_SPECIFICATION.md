# Lab 1: Estados de la Materia - Especificación Técnica

## 1. Identidad del Lab

```yaml
slug: states-of-matter
title: Estados de la materia
description: Experimenta cómo cambian los estados de la materia según la temperatura
area: chemistry
level: [middle, high]
grade_icfes: [6, 7, 8, 9, 10, 11]
duration_minutes: 15
competencies:
  - modeling
  - concept-application
  - systems-thinking
```

## 2. Alineación Curricular

### DBA (Derechos Básicos de Aprendizaje) - MEN Colombia

- **DBA 6 (Grados 6-7)**: "Explica los cambios de estado de la materia basándose en la teoría cinética"
- **DBA 5 (Grados 8-9)**: "Relaciona la estructura microscópica con el comportamiento macroscópico"

### Tags Universales (NGSS)

- **Science Practice**: 2 (Develop and Use Models)
- **Crosscutting Concept**: Systems and System Models; Scale, Proportion, and Quantity
- **Disciplinary Core Idea**: PS1.A (Structure and Properties of Matter)

### ICFES

- Competencia: **Usar el conocimiento científico**
- Componente: **Explicación de fenómenos**
- Nivel: **Intermedio**

## 3. Modelo Conceptual

### Contenido

1. **Sólido**: Partículas muy juntas, movimiento vibratorio limitado
2. **Líquido**: Partículas unidos pero libres de moverse, forma del recipiente
3. **Gas**: Partículas distantes, movimiento rápido y caótico

### Mecanismo de Transición

- **Fusión**: Aumentar temperatura → sólido ⟶ líquido
- **Vaporización**: Aumentar temperatura → líquido ⟶ gas
- **Sublimación**: Aumentar temperatura → sólido ⟶ gas (opcional)
- **Condensación**: Disminuir temperatura → gas ⟶ líquido
- **Solidificación**: Disminuir temperatura → líquido ⟶ sólido

## 4. Especificación del Modelo (TypeScript)

### Archivo: `src/lib/models/states-of-matter/model.ts`

```typescript
// Estado termodynamic del container
interface ThermodynamicState {
  temperature: number;     // Kelvin (273-473)
  volume: number;          // Arbitrary units (0.5 - 2.0)
  currentState: 'solid' | 'liquid' | 'gas';
  transitionProgress: number; // 0-1, para animación suave
}

// Partícula individual
interface Particle {
  id: string;
  x: number;           // Posición X (0-containerWidth)
  y: number;           // Posición Y (0-containerHeight)
  vx: number;          // Velocidad X
  vy: number;          // Velocidad Y
  mass: number;        // Masa (1.0 arbitrary)
  radius: number;      // Radio visual
  temperature: number; // Temperatura local (simplificación)
}

// Container
interface Container {
  width: number;
  height: number;
  particles: Particle[];
}

// Lógica pura, testeable
export class StatesOfMatterModel {
  private state: ThermodynamicState;
  private container: Container;
  private particles: Particle[] = [];

  constructor(initialTemp: number = 300, initialVolume: number = 1.0) {
    this.state = {
      temperature: initialTemp,
      volume: initialVolume,
      currentState: this.determineState(initialTemp),
      transitionProgress: 0,
    };
    this.container = {
      width: 400,
      height: 300,
      particles: [],
    };
    this.generateParticles();
  }

  // Determinar estado según temperatura
  private determineState(temp: number): 'solid' | 'liquid' | 'gas' {
    if (temp < 320) return 'solid';      // < 47°C
    if (temp < 373) return 'liquid';     // < 100°C
    return 'gas';
  }

  // Generar N partículas
  private generateParticles(n: number = 100): void {
    this.particles = [];
    for (let i = 0; i < n; i++) {
      this.particles.push({
        id: `particle-${i}`,
        x: Math.random() * this.container.width,
        y: Math.random() * this.container.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        mass: 1.0,
        radius: 3,
        temperature: this.state.temperature,
      });
    }
  }

  // Update state (llamado cada frame)
  update(deltaTime: number): void {
    const dt = deltaTime / 1000; // Convertir a segundos

    // Actualizar velocidades según temperatura (teoría cinética)
    this.updateVelocitiesFromTemperature();

    // Actualizar posiciones
    this.particles.forEach((p) => {
      p.x += p.vx * dt;
      p.y += p.vy * dt;

      // Bounce en bordes
      if (p.x < 0 || p.x > this.container.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.container.height) p.vy *= -1;

      // Clamp posición
      p.x = Math.max(0, Math.min(this.container.width, p.x));
      p.y = Math.max(0, Math.min(this.container.height, p.y));
    });

    // Detectar transiciones
    const newState = this.determineState(this.state.temperature);
    if (newState !== this.state.currentState) {
      this.state.currentState = newState;
      this.state.transitionProgress = 0;
    }
  }

  // Aplicar temperatura
  private updateVelocitiesFromTemperature(): void {
    // Equipartición de energía: KE ∝ T
    const targetSpeed = Math.sqrt(this.state.temperature / 273); // Normalizar a 0°C
    this.particles.forEach((p) => {
      const currentSpeed = Math.sqrt(p.vx ** 2 + p.vy ** 2);
      if (currentSpeed > 0) {
        const factor = targetSpeed / currentSpeed;
        p.vx *= factor;
        p.vy *= factor;
      } else {
        p.vx = (Math.random() - 0.5) * targetSpeed * 2;
        p.vy = (Math.random() - 0.5) * targetSpeed * 2;
      }
    });
  }

  // Setters controlables
  setTemperature(temp: number): void {
    this.state.temperature = Math.max(273, Math.min(473, temp)); // 0-200°C
  }

  setVolume(vol: number): void {
    this.state.volume = Math.max(0.5, Math.min(2.0, vol));
    this.container.width = 400 * this.state.volume;
    this.container.height = 300 * this.state.volume;
  }

  // Getters
  getParticles(): Particle[] {
    return this.particles;
  }

  getState(): ThermodynamicState {
    return { ...this.state };
  }

  getPressure(): number {
    // Aproximación: presión ∝ (N * T) / V
    return (this.particles.length * this.state.temperature) / (this.state.volume * 273);
  }

  getDensity(): number {
    return this.particles.length / (this.state.volume * 100);
  }
}
```

## 5. Especificación de la Vista (React)

### Archivo: `src/components/labs/SimulationCanvas.tsx`

```typescript
interface SimulationCanvasProps {
  particles: Particle[];
  state: ThermodynamicState;
  width: number;
  height: number;
}

// Renderizar con Canvas API o p5.js
// Mostrar:
// 1. Partículas como círculos
// 2. Color según estado: rojo (sólido), azul (líquido), verde (gas)
// 3. Velocidades relativas: tamaño de círculo o trailing effect
// 4. Información superpuesta: temp, presión, densidad
```

## 6. Preguntas ICFES Integradas

### Pregunta 1 (Conceptual)

```json
{
  "id": "q1-state-identification",
  "type": "multiple_choice",
  "competency": "concept-application",
  "stimulus": "En la simulación, ¿qué puedes observar cuando la temperatura aumenta progresivamente?",
  "options": [
    {
      "letter": "A",
      "text": "Las partículas se mueven más lentamente",
      "is_correct": false,
      "explanation": "Es lo opuesto: mayor temperatura implica mayor movimiento"
    },
    {
      "letter": "B",
      "text": "Las partículas se mueven más rápido y la sustancia cambia de estado",
      "is_correct": true,
      "explanation": "La teoría cinética explica que aumentar temperatura aumenta la energía cinética"
    },
    {
      "letter": "C",
      "text": "El volumen del container disminuye",
      "is_correct": false,
      "explanation": "En esta simulación, el volumen se controla independientemente"
    }
  ]
}
```

### Pregunta 2 (Análisis)

```json
{
  "id": "q2-kinetic-theory",
  "type": "multiple_choice",
  "competency": "systems-thinking",
  "stimulus": "Si comprimes el gas (disminuyes el volumen) manteniendo la temperatura constante, ¿qué sucede con la presión?",
  "options": [
    {
      "letter": "A",
      "text": "Aumenta",
      "is_correct": true,
      "explanation": "Ley de Boyle: P ∝ 1/V a temperatura constante"
    },
    {
      "letter": "B",
      "text": "Disminuye",
      "is_correct": false,
      "explanation": "Cuando el volumen disminuye, las partículas chocan más frecuentemente contra las paredes"
    },
    {
      "letter": "C",
      "text": "Se mantiene igual",
      "is_correct": false,
      "explanation": "La presión depende de la densidad de partículas"
    }
  ]
}
```

### Pregunta 3 (Aplicación)

```json
{
  "id": "q3-phase-transition",
  "type": "multiple_choice",
  "competency": "modeling",
  "stimulus": "Un líquido se convierte en gas a una temperatura específica llamada 'punto de ebullición'. ¿Cuál es el mecanismo microscópico detrás de esto?",
  "options": [
    {
      "letter": "A",
      "text": "Las partículas absorben tanta energía que superan las fuerzas de atracción entre ellas",
      "is_correct": true,
      "explanation": "A mayor temperatura, la energía cinética supera la energía potencial de atracción"
    },
    {
      "letter": "B",
      "text": "El contenedor se hace más grande",
      "is_correct": false,
      "explanation": "El cambio de estado no depende del contenedor sino de la energía de las partículas"
    },
    {
      "letter": "C",
      "text": "Las partículas desaparecen",
      "is_correct": false,
      "explanation": "La materia se conserva; solo cambia su estado"
    }
  ]
}
```

## 7. Modos Pedagógicos

### Free Mode
- Usuario manipula temperatura y volumen libremente
- Observa cambios en tiempo real
- Sin preguntas

### Guided Mode
- Instrucciones paso a paso:
  - "Aumenta la temperatura a 100°C"
  - "Observa cómo cambian las partículas"
  - "¿Qué estado es ahora?"

### Probe Mode
- Preguntas tipo ICFES después de experimentos dirigidos
- Feedback inmediato

### Inquiry Mode
- Preguntas abiertas: "¿Qué sucede si...?"
- Estudiante diseña experimento
- Feedback guiado

## 8. Design System / UI

### Controles

```
┌─────────────────────────────┐
│ Temperatura: [████████░░]   │  273 K
│ Volumen:    [██████░░░░░]   │  1.0
│                             │
│ [ Reset ] [ Play ] [ Pause] │
└─────────────────────────────┘
```

### Información

```
Estado actual: LÍQUIDO
Temperatura: 300 K (27°C)
Presión: 0.85 atm
Densidad: 0.7 g/cm³
```

### Pregunta

```
┌─────────────────────────────────────┐
│ ¿Qué observas en las partículas     │
│ cuando aumentas la temperatura?      │
│                                     │
│ ○ Se mueven más lentamente          │
│ ● Se mueven más rápido              │
│ ○ Desaparecen                       │
│                                     │
│ [ Enviar respuesta ]                │
└─────────────────────────────────────┘
```

## 9. Checklist de Implementación

- [ ] Modelo TypeScript puro (sin DOM)
- [ ] 100% test coverage para Model
- [ ] Vista con Canvas/p5.js
- [ ] 3 preguntas ICFES con explicaciones
- [ ] Modos (Free, Guided, Probe, Eval)
- [ ] Guía PDF descargable para docentes
- [ ] Responsivo en celular 360×640px
- [ ] Performance <1MB gzipped
- [ ] Accesibilidad WCAG 2.1 AA
- [ ] Offline funcional

## 10. Cronograma

- **Semana 1**: Modelo + tests
- **Semana 2**: Vista (Canvas)
- **Semana 3**: Preguntas + feedback
- **Semana 4**: Modos pedagógicos
- **Semana 5**: Polish + a11y

---

**Documento vivo**: Actualizar según hallazgos en classroom testing
