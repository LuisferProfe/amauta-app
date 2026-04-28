# PRODUCT_ARCHITECTURE.md

> Arquitectura del producto: cómo se ven todas las superficies (portal, biblioteca, ficha, lab, modos, descargables).
> Este documento traduce la identidad y los principios en una experiencia concreta que un desarrollador puede empezar a construir.

---

## 1. Mapa del producto en una imagen

```
┌────────────────────────────────────────────────────────────────────┐
│                          PRODUCTO COMPLETO                         │
└────────────────────────────────────────────────────────────────────┘
                                  │
       ┌──────────────────────────┼──────────────────────────┐
       │                          │                          │
       ▼                          ▼                          ▼
  ┌─────────┐              ┌─────────────┐           ┌──────────────┐
  │ PORTAL  │              │ BIBLIOTECA  │           │ MODO DOCENTE │
  │ (Home)  │              │ DE LABS     │           │ (Fase 3+)    │
  └─────────┘              └─────────────┘           └──────────────┘
       │                          │
       │                          │
       │                          ▼
       │                   ┌──────────────┐
       │                   │ FICHA DE LAB │
       │                   └──────────────┘
       │                          │
       │            ┌─────────────┼──────────────┐
       │            │             │              │
       │            ▼             ▼              ▼
       │      ┌──────────┐  ┌──────────┐   ┌──────────────┐
       │      │ MOTOR    │  │PREGUNTAS │   │ DESCARGABLES │
       │      │ DEL LAB  │  │ ICFES    │   │ (PDF guía)   │
       │      └──────────┘  └──────────┘   └──────────────┘
       │
       ▼
  ┌──────────────────────────────────────────────────┐
  │ PÁGINAS INSTITUCIONALES                          │
  │ Sobre, Marco pedagógico, Aliados, Privacidad     │
  └──────────────────────────────────────────────────┘
```

---

## 2. Las 7 superficies del producto

### Superficie 1 — Portal (Home)

**URL**: `/`

**Audiencia**: visitante nuevo (estudiante, docente, autodidacta, aliado).

**Misión de la página**: en 10 segundos, comunicar (a) qué somos, (b) para quién, y (c) cómo empezar.

**Estructura**:

```
┌──────────────────────────────────────────────────┐
│  [Logo]  Catálogo  Sobre  Aliados        [Modo▾] │ ← Header sticky
├──────────────────────────────────────────────────┤
│                                                  │
│   HACE CIENCIA SIN LABORATORIO                   │
│   ─────────────────────────────                  │
│                                                  │
│   Laboratorios virtuales gratuitos para          │
│   estudiantes colombianos. Diseñados para        │
│   tu celular. Sin login. Sin pagar.              │
│                                                  │
│   [Ver laboratorios →]                           │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│   3 laboratorios destacados                      │
│   (Cards con thumbnail, título, área, nivel)     │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│   ¿POR QUÉ EXISTIMOS?                            │
│   El 70% de estudiantes colombianos no demuestra │
│   competencias básicas en ciencias. El 80% de    │
│   sedes rurales no tiene laboratorio físico.     │
│   Construimos para cerrar esa brecha.            │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│   PARA DOCENTES                                  │
│   Úsalo a tu manera. Cinco modos pedagógicos.    │
│   Sin imponer ningún modelo. [Ver más →]         │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│   APOYAN ESTE PROYECTO                           │
│   [Logos de aliados institucionales]             │
│                                                  │
├──────────────────────────────────────────────────┤
│   Footer: Manifiesto, Privacidad, Código fuente  │
└──────────────────────────────────────────────────┘
```

**Decisiones de diseño**:
- Sin carrusel de banners (cliché EdTech).
- Sin formulario de "regístrate gratis" (sin login).
- Sin testimonios falsos.
- CTA principal: "Ver laboratorios". Punto.
- Manifiesto enlazado, no incrustado completo.

**Mobile**: el hero ocupa toda la primera pantalla. Los 3 labs destacados se muestran en stack vertical.

---

### Superficie 2 — Biblioteca de laboratorios (Catálogo)

**URL**: `/labs` o `/laboratorios`

**Audiencia**: estudiante o docente buscando un lab.

**Misión**: encontrar el lab adecuado en menos de 30 segundos.

**Estructura**:

```
┌──────────────────────────────────────────────────┐
│  Header                                          │
├──────────────────────────────────────────────────┤
│                                                  │
│   Laboratorios virtuales                         │
│   N laboratorios disponibles                     │
│                                                  │
│   ┌──────────────────────────────────────────┐   │
│   │ 🔍 Buscar...                             │   │
│   └──────────────────────────────────────────┘   │
│                                                  │
│   FILTROS                                        │
│   ┌─────────────────────────────────────────┐    │
│   │ Área: [Todas] [Física] [Química] [Bio]  │    │
│   │ Nivel: [Todos] [6-9°] [10-11°]          │    │
│   │ Competencia: [Todas] ▾                   │    │
│   │ Currículo: [Todos] [DBA] [ICFES] ▾       │    │
│   └─────────────────────────────────────────┘    │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│   │ THUMB    │ │ THUMB    │ │ THUMB    │         │
│   │          │ │          │ │          │         │
│   │ Estados  │ │ Péndulo  │ │ Densidad │         │
│   │ materia  │ │ simple   │ │          │         │
│   │ Química  │ │ Física   │ │ Física   │         │
│   │ 6-9°     │ │ 10-11°   │ │ 8-9°     │         │
│   └──────────┘ └──────────┘ └──────────┘         │
│                                                  │
│   ... más cards ...                              │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Decisiones de diseño**:
- **Filtros visibles, no ocultos en hamburguesa.** El estudiante de 13 años no busca cómo filtrar.
- **Búsqueda por texto libre** + filtros por etiqueta.
- **Los filtros no requieren login** (cookie local recuerda preferencias del docente).
- **Si no hay resultados**, mostrar sugerencias relacionadas, no pantalla vacía.

**Sistema de tags por lab**:
```
Tags universales (siempre):
  - Área: physics | chemistry | biology
  - Nivel: middle | high
  - Competencia: inquiry | data-analysis | modeling | concept-application | critical-thinking | quantitative-reasoning
  - Dificultad: easy | medium | hard
  - Duración: 15min | 30min | 45min | 60min+

Tags curriculares (opcional, por país):
  - co_dba: lista de DBA Colombia
  - co_icfes: competencias ICFES
  - co_componente: entorno-fisico | entorno-vivo | cts
  - co_grado: 6 | 7 | 8 | 9 | 10 | 11
  - us_ngss: estándares NGSS (cuando aplique)
  - es_loe: España (cuando aplique)
```

**Mobile**: cards de 1 columna, filtros colapsables en sheet superior.

---

### Superficie 3 — Ficha de un laboratorio

**URL**: `/labs/<slug>` (ej: `/labs/states-of-matter`)

**Audiencia**: alguien que quiere usar este lab específico.

**Misión**: dar contexto suficiente para usar el lab y abrirlo en 1 tap/click.

**Estructura**:

```
┌──────────────────────────────────────────────────┐
│  Header                                          │
├──────────────────────────────────────────────────┤
│                                                  │
│   ESTADOS DE LA MATERIA                          │
│   Química · 6° a 9° · ~20 minutos                │
│                                                  │
│   Explora cómo cambian las partículas de una     │
│   sustancia al variar la temperatura. Observa    │
│   la transición entre sólido, líquido y gas.     │
│                                                  │
│   [▶ Abrir laboratorio]    [📄 Descargar guía]   │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│   ┌──────────────────────────────────────────┐   │
│   │     [PREVIEW DE LA SIM - thumbnail]      │   │
│   └──────────────────────────────────────────┘   │
│                                                  │
├──────────────────────────────────────────────────┤
│   QUÉ APRENDERÁS                                 │
│   • Modelo de partículas de la materia           │
│   • Relación entre temperatura y energía cinética│
│   • Cambios de estado: fusión, vaporización...   │
│                                                  │
│   COMPETENCIAS QUE DESARROLLA                    │
│   [Modelización] [Aplicación de conceptos]       │
│                                                  │
│   ALINEACIÓN CURRICULAR                          │
│   • DBA Ciencias Naturales 6° #1                 │
│   • ICFES: Uso comprensivo del conocimiento      │
│                                                  │
├──────────────────────────────────────────────────┤
│   PARA DOCENTES                                  │
│                                                  │
│   Modo de uso sugerido:                          │
│   ○ Exploración libre (15 min)                   │
│   ● Indagación 5E (45-60 min)                    │
│   ○ Indagación guiada (30 min)                   │
│   ○ Basado en problema (90 min)                  │
│   ○ Solo evaluación (15 min)                     │
│                                                  │
│   [Compartir enlace personalizado]               │
│                                                  │
├──────────────────────────────────────────────────┤
│   PREGUNTAS DE PRÁCTICA                          │
│   5 preguntas tipo ICFES disponibles al final    │
│   del laboratorio.                               │
│                                                  │
├──────────────────────────────────────────────────┤
│   CONEXIÓN CON EXPERIMENTO FÍSICO (opcional)     │
│   Esta práctica se puede complementar con...     │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Decisiones de diseño**:
- **El CTA principal "Abrir laboratorio" es lo primero que ve.** Sin scroll necesario en mobile.
- **Descarga de guía PDF disponible desde la ficha.** No requiere login.
- **Sección "Para docentes" colapsable o anclada abajo.** El estudiante no la necesita ver primero.
- **Modos pedagógicos visibles** con explicación corta. Docente elige y comparte enlace personalizado.

---

### Superficie 4 — El laboratorio en sí (motor)

**URL**: `/labs/<slug>/run` o sub-vista de la ficha

**Audiencia**: estudiante o docente usando el lab.

**Misión**: experimentar productivamente con el menor número de fricciones.

**Estructura general**:

```
┌──────────────────────────────────────────────────┐
│  ← Volver  Estados de la materia      [⚙ Modo]   │ ← Top bar
├──────────────────────────────────────────────────┤
│                                                  │
│   ┌──────────────────────────────────────────┐   │
│   │                                          │   │
│   │       [VISTA DEL LAB - Canvas]           │   │
│   │       (partículas en movimiento)         │   │
│   │                                          │   │
│   │       Estado actual: Líquido             │   │
│   │                                          │   │
│   └──────────────────────────────────────────┘   │
│                                                  │
├──────────────────────────────────────────────────┤
│   CONTROLES                                      │
│                                                  │
│   Sustancia:  [Agua ▾]                           │
│                                                  │
│   Temperatura:                                   │
│   ─────────────●──────────────  280 K            │
│   0K                          1000K              │
│                                                  │
│   [⏸ Pausar]  [↻ Reiniciar]                      │
│                                                  │
├──────────────────────────────────────────────────┤
│   (Según modo seleccionado, panel adicional)     │
│                                                  │
│   Modo Indagación 5E - Fase: EXPLORE             │
│   ─────────────────────────────────              │
│   Mueve la temperatura entre 200K y 400K.        │
│   ¿Qué observas en las partículas? Tómate        │
│   tu tiempo.                                     │
│                                                  │
│   [Siguiente fase: EXPLAIN →]                    │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Decisiones de diseño**:
- **La vista del lab ocupa el espacio principal.** Los controles son periféricos.
- **El texto pedagógico (modos) está colapsable o lateral**, no superpuesto al lab. Esto respeta el principio de Chamberlain (2014): guía pesada DENTRO de la sim reduce diversidad de exploración.
- **En mobile**: vista arriba (50% pantalla), controles abajo. Si modo guiado activo: prompts en sheet superior colapsable.
- **Sin distracciones**: sin chat, sin notificaciones, sin pop-ups.

**Comportamiento por modo**:

| Modo | UI adicional | Preguntas |
|------|--------------|-----------|
| Free | Solo lab + controles | Botón "Probar tus conocimientos" al final (opcional) |
| 5E | Panel con fase actual + prompt | Aparece en fase EVALUATE |
| Guided | Lista de tareas + check-off | Distribuidas entre tareas |
| PBL | Caso/escenario inicial + área de notas | Aparecen al final como reflexión |
| Eval | Solo preguntas, lab en modo "lectura" para consulta | Inmediato |

---

### Superficie 5 — Preguntas tipo ICFES integradas

**Comportamiento**:

Las preguntas aparecen dentro de un panel/modal según el modo. **Nunca interrumpen el lab; el estudiante decide cuándo abrirlas.**

**Estructura de una pregunta**:

```
┌──────────────────────────────────────────────────┐
│  Pregunta 1 de 5                          [✕]    │
├──────────────────────────────────────────────────┤
│                                                  │
│  CONTEXTO                                        │
│  Una estudiante coloca un vaso con agua en una   │
│  mesa al sol. Después de varias horas, observa   │
│  que la cantidad de agua ha disminuido sin que   │
│  nadie la haya tomado.                           │
│                                                  │
│  ¿Cuál de las siguientes hipótesis explica       │
│  mejor lo observado?                             │
│                                                  │
│  ○ A. El agua se transformó en otra sustancia.   │
│  ○ B. Las partículas adquirieron suficiente      │
│       energía para escapar al aire en forma      │
│       de gas.                                    │
│  ○ C. El agua se filtró por los poros del vaso.  │
│  ○ D. El calor del sol destruyó las partículas.  │
│                                                  │
│  [Confirmar respuesta]                           │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Después de responder**:

```
┌──────────────────────────────────────────────────┐
│  Respuesta: B ✓                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  Las partículas con suficiente energía cinética  │
│  escapan del líquido (evaporación). La sustancia │
│  sigue siendo agua, pero en estado gaseoso.      │
│                                                  │
│  ¿Por qué las otras opciones son incorrectas?    │
│  • A: confunde cambio de estado con reacción     │
│    química.                                      │
│  • C: improbable en vidrio.                      │
│  • D: el calor no destruye partículas, solo      │
│    aumenta su energía.                           │
│                                                  │
│  Competencia evaluada: Modelización              │
│                                                  │
│  [Siguiente pregunta →]                          │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Decisiones de diseño**:
- **Feedback inmediato y constructivo.** Nunca "incorrecto, intenta de nuevo" sin explicación.
- **La explicación enseña**, no juzga. Por qué es correcta + por qué cada distractor es incorrecto.
- **Competencia evaluada visible.** Conexión explícita con la pedagogía.
- **Sin contador de tiempo** (ansiedad innecesaria).
- **Sin puntaje gamificado.** Posible "logro" desbloqueado solo al completar las 5.

---

### Superficie 6 — Guía docente descargable

**Formato**: PDF de 1-2 páginas, generado en build (estático).

**Estructura del PDF**:

```
═══════════════════════════════════════════════════
   GUÍA DOCENTE — ESTADOS DE LA MATERIA
   [Logo del proyecto]
═══════════════════════════════════════════════════

DATOS GENERALES
• Área: Química
• Nivel: 6° a 9°
• Duración: 45-60 min (modo 5E sugerido)
• Modalidad: individual o parejas

ALINEACIÓN CURRICULAR
• DBA Ciencias Naturales 6° #1: [cita textual]
• ICFES: Uso comprensivo del conocimiento, Modelización
• NGSS: HS-PS1 (cuando aplique)

OBJETIVO DE APRENDIZAJE
Al finalizar la actividad, el estudiante puede explicar,
usando el modelo de partículas, por qué una sustancia
cambia de estado al modificar su temperatura.

CONCEPTOS CLAVE
• Partícula
• Estados de la materia
• Energía cinética (relación con temperatura)
• Fuerzas intermoleculares
• Cambios de estado

MISCONCEPTIONS TÍPICAS Y CÓMO ABORDARLAS
• "En el sólido las partículas están quietas." → Mostrar
  que vibran en posiciones fijas.
• "Al calentar, las partículas se hacen más grandes." →
  Mostrar que se mueven más rápido y se separan.
• "El gas no tiene partículas." → Aumentar temperatura
  hasta gas; las partículas siguen ahí, solo más separadas.

SECUENCIA SUGERIDA (modo 5E, 45-60 min)
1. Engage (5 min): pregunta inicial cotidiana.
2. Explore (15 min): estudiantes exploran libremente.
3. Explain (10 min): docente sintetiza observaciones.
4. Elaborate (15 min): aplicar a sustancias diferentes.
5. Evaluate (10 min): preguntas tipo ICFES.

PREGUNTAS TIPO ICFES (resumen, sin claves)
[Las 5 preguntas con opciones, sin respuestas
 — para usar en clase y discutir]

CLAVES Y JUSTIFICACIONES (página 2)
[Las 5 respuestas con explicación completa]

CONEXIÓN CON EXPERIMENTO FÍSICO
• Calentar agua en recipiente y observar evaporación.
• Comparar velocidad de evaporación entre agua y alcohol.

═══════════════════════════════════════════════════
   [URL del lab] · [Logo proyecto] · CC BY-SA
═══════════════════════════════════════════════════
```

**Decisiones de diseño**:
- **PDF imprimible en blanco y negro** (no todos los colegios tienen impresora a color).
- **Generado en build**, no on-demand (más rápido, sin servidor).
- **Licencia CC BY-SA visible**: el docente puede modificarlo y compartirlo.
- **URL corta del lab**: por si el docente proyecta el PDF y quiere que estudiantes accedan.

---

### Superficie 7 — Páginas institucionales

**`/about` o `/sobre`** — Quiénes somos, manifiesto, equipo, aliados.

**`/marco-pedagogico`** — Versión pública resumida de PEDAGOGICAL_FRAMEWORK.md. Para docentes interesados.

**`/aliados`** — Listado de universidades, fundaciones, secretarías que apoyan. Convocatoria a aliarse.

**`/privacidad`** — Política de privacidad (Ley 1581 + PL 247/2025). Lenguaje claro.

**`/codigo-abierto`** — Cómo contribuir, link al repo, licencia.

**`/transparencia`** — Quién nos financia, cuánto, con qué condiciones. Bien público auditable.

---

## 3. Modo estudiante (default)

**Características**:
- Sin login.
- Sin perfil.
- Sin historial entre sesiones (a menos que se guarde como código de aula).
- Privacidad absoluta.

**Flujo típico**:
1. Abre URL del lab (o llega por catálogo).
2. Ve la ficha → tap "Abrir laboratorio".
3. Lab carga (idealmente ya cacheado por PWA).
4. Experimenta.
5. Opcionalmente abre preguntas al final.
6. Cierra. Nada se guarda.

**Si docente compartió enlace con modo específico**:
- URL incluye query: `/labs/states-of-matter/run?mode=5E&class=ABC123`
- Lab abre directamente en ese modo.
- Si hay código de aula (`class=ABC123`), respuestas se guardan asociadas a ese código (anónimo).

---

## 4. Modo docente (Fase 3+, mes 7+)

**Características futuras** (NO en MVP):
- Login docente (Supabase Auth).
- Crear "aulas" con código corto (4-6 letras).
- Compartir labs con modo predefinido.
- Ver respuestas agregadas a preguntas (sin identificar estudiantes).
- Descargar reportes en PDF.

**Lo que NO incluiremos jamás**:
- Identificar estudiantes individualmente (solo aulas).
- Tracking de comportamiento granular.
- Exigir que estudiantes hagan login.

**Flujo previsto**:
1. Docente entra a `/docentes` y crea cuenta (email + contraseña, o Google SSO).
2. Crea aula "Química 9-A" → código `QM9A26`.
3. Selecciona lab "Estados de la materia" + modo "5E".
4. Comparte enlace: `vlabs.co/q/QM9A26`.
5. Estudiantes entran sin login. Sus respuestas se asocian al aula (anónimas).
6. Docente ve estadísticas agregadas: "12 de 30 confundieron evaporación con reacción química".
7. Usa esa info para retroalimentación en clase.

---

## 5. Sistema de tags y filtros (la columna vertebral del catálogo)

### 5.1 Estructura de tags

```typescript
interface LabMeta {
  // Identidad
  slug: string;
  title: string;
  description: string;

  // Pedagogía universal (obligatorio)
  area: "physics" | "chemistry" | "biology" | "math";
  level: ("elementary" | "middle" | "high" | "intro-college")[];
  competencies: Competency[];
  difficulty: "easy" | "medium" | "hard";
  estimatedDurationMin: number;

  // Modos disponibles
  availableModes: ("free" | "5E" | "guided" | "pbl" | "eval")[];

  // Tags curriculares (opcional, por país)
  curriculumTags?: {
    co_dba?: string[];
    co_icfes?: ("uso-comprensivo" | "explicacion-fenomenos" | "indagacion")[];
    co_componente?: ("entorno-fisico" | "entorno-vivo" | "cts")[];
    co_grado?: (6 | 7 | 8 | 9 | 10 | 11)[];
    us_ngss?: string[];
    es_loe?: string[];
  };

  // Estado
  published: boolean;
  thumbnail: string;
}
```

### 5.2 Filtros visibles en catálogo

**Siempre visibles**:
- Área
- Nivel (middle/high)
- Competencia

**Colapsables (avanzados)**:
- Currículo Colombia (DBA, ICFES, componente, grado específico)
- Dificultad
- Duración

**Búsqueda libre**: por título, descripción, palabras clave.

### 5.3 Búsqueda y descubrimiento

**MVP**: búsqueda en cliente (sin servidor). Index pre-generado en build.

**Cuando crezca**: búsqueda con Pagefind (estática, rápida) o Algolia (cuando justifique costo).

---

## 6. Internacionalización (preparada por arquitectura)

### 6.1 MVP: solo español colombiano
- Todo el copy de UI en español natural colombiano.
- Sin sistema i18n complejo.
- Strings centralizados en archivos JSON simples.

### 6.2 Cuando llegue el momento (no MVP)
- Astro tiene i18n routing nativo.
- Tags curriculares por país ya están preparados (sección 5.1).
- Migración: agregar archivo de strings + adaptar tags.

**Costo de cambio futuro**: bajo, porque la arquitectura ya está preparada.

---

## 7. Performance y carga

### 7.1 Estrategia de carga progresiva

```
Página de catálogo (estática Astro):
  1. HTML + CSS crítico ........... < 50 KB
  2. Thumbnails de labs (lazy) ..... < 30 KB c/u
  3. JS de filtros (defer) ......... < 50 KB

Ficha de lab (estática):
  1. HTML + CSS .................... < 30 KB
  2. Preview thumbnail ............. < 50 KB
  3. JS solo si abre el lab ......... cargado on-demand

Lab (isla React):
  1. React + framework ............. < 150 KB
  2. Modelo + Vista + Controles .... < 100 KB
  3. Matter.js (si aplica) ......... < 150 KB
  4. p5.js (si aplica) ............. < 100 KB

Total para lab típico: < 500 KB iniciales
```

### 7.2 Cache strategy (PWA)

```
Cache-first:
  - Shell (HTML, CSS, JS base)
  - Thumbnails de labs visitados
  - Labs visitados completos
  - PDFs de guías descargadas

Network-first (con fallback a cache):
  - Catálogo (puede tener labs nuevos)
  - Páginas institucionales

Network-only:
  - API futura (cuando exista)
```

---

## 8. Accesibilidad transversal

### 8.1 Reglas de catálogo
- Filtros operables con teclado.
- Cards con semántica correcta (article, h3).
- Foco visible en cada card.
- Anuncio de cambios en filtros (aria-live).

### 8.2 Reglas de lab
- Sliders con `aria-label` claro y unidad.
- Estado actual de la sim anunciado por `aria-live`.
- Teclas de teclado para pausa/reinicio (Space, R).
- Modo daltónico (sin depender solo de color).

### 8.3 Reglas de preguntas
- Radio buttons accesibles.
- Feedback de respuesta anunciado.
- Navegación entre preguntas con teclado.

---

## 9. Estados del producto (estados de la app)

### 9.1 Estados que el usuario puede encontrar

| Estado | Cuándo | Cómo lo manejamos |
|--------|--------|-------------------|
| Sin internet, primera visita | Estudiante rural sin caché | Mensaje claro + sugerencia de descargar paquete (futuro) |
| Sin internet, después de visita | Lab cacheado disponible | Funciona normal, banner "Modo offline" |
| Internet lento | 3G en zona rural | Carga progresiva, indicador de progreso real |
| Lab no encontrado | URL rota o lab despublicado | Mensaje útil + sugerir labs similares |
| Pregunta sin respuesta | Estudiante salió sin terminar | Sin penalización, puede volver |
| Error en sim | Bug catastrófico | Botón "Reiniciar lab" + reporte automático a Sentry |

### 9.2 Estado de carga

**Lab cargando**:
```
┌──────────────────────────────────────────────────┐
│                                                  │
│         [Skeleton del lab]                       │
│                                                  │
│         Cargando laboratorio...                  │
│         ████████░░░░░░░ 60%                      │
│                                                  │
└──────────────────────────────────────────────────┘
```

Sin spinner indefinido. Siempre indicador de progreso real.

---

## 10. Sistema de diseño (preliminar)

### 10.1 Paleta de colores
- Tokens vía Tailwind 4.
- Modo claro y modo oscuro (importante para uso nocturno en casa).
- Contraste WCAG AA mínimo en todos los textos.
- Colores semánticos: éxito (verde), error (rojo), advertencia (amarillo), info (azul).
- **Sin colores "infantiles"** (no rosa pastel ni amarillo pollito).

### 10.2 Tipografía
- Sans-serif moderna, legible en pantalla pequeña.
- Candidata: Inter (gratis, web-optimizada) o Geist.
- Tamaño base 16px en mobile (no 14px, que cuesta leer).
- Escala tipográfica clara y limitada (4-5 tamaños).

### 10.3 Espaciado
- Ritmo de 8px (grid de 8).
- Padding generoso en touch targets (44px mínimo).

### 10.4 Iconografía
- Lucide-react (open source, consistente).
- Iconos descriptivos, no decorativos.

---

## 11. Resumen: qué construimos en MVP

Las superficies que SÍ construimos en MVP (Fase 0-2):

✅ Portal (Home)
✅ Biblioteca de labs (Catálogo) con filtros
✅ Ficha de lab
✅ Motor del lab (modos free + 5E + eval)
✅ Preguntas tipo ICFES integradas
✅ Guía docente descargable (PDF)
✅ Páginas institucionales básicas (about, privacidad, código abierto)
✅ PWA mínima (manifest)

Las superficies que NO construimos en MVP:

❌ Modo docente con login (Fase 3+)
❌ Aulas y códigos de aula (Fase 3+)
❌ Reportes de respuestas agregadas (Fase 3+)
❌ Página de transparencia financiera (cuando haya financiación)
❌ Internacionalización a otros países (Fase 4+)
❌ Búsqueda con Algolia (cuando crezca)

---

## 12. Cómo usar este documento

- **Antes de diseñar una pantalla nueva**, revisar si encaja en alguna de las 7 superficies.
- **Antes de agregar una superficie nueva**, justificar contra los principios de IDENTITY.md.
- **Cuando diseñes**, validar que mobile-first se respete (360×640 antes que 1920×1080).
- **Cuando un lab requiera estructura distinta**, documentarlo como excepción con razón.

---

> Documento mantenido por el responsable del proyecto.
> Última revisión: abril 2026.
