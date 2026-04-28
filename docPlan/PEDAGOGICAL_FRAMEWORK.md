# PEDAGOGICAL_FRAMEWORK.md

> Marco pedagógico del proyecto, anclado en evidencia académica replicable.
> Este documento existe para **defender cada decisión pedagógica del proyecto** frente a un evaluador de convocatoria, un docente crítico, un investigador o un aliado institucional.
> Todas las afirmaciones aquí están respaldadas por estudios citados con autor y año.

---

## 1. Posición pedagógica en una frase

**Pluralismo pedagógico empíricamente informado**: la plataforma se ancla en lo que la investigación educativa internacional considera consenso (aprendizaje activo + andamiaje + carga cognitiva manejable + tridimensionalidad NRC + evaluación formativa) y deja al docente las decisiones que el campo aún no ha resuelto (cuánta guía, qué secuencia, qué ritmo).

No imponemos un modelo único (ni 5E, ni ABP, ni indagación abierta). Respetamos la autonomía profesional del docente. Pero **no somos pedagógicamente neutros**: estamos firmemente del lado de hacer ciencia, no de leer sobre ciencia.

---

## 2. El consenso macro que respetamos

### 2.1 El aprendizaje activo supera la instrucción pasiva (consenso fuerte)

**Evidencia**:
- **Freeman et al. (2014)** en *PNAS*. Meta-análisis de 225 estudios en STEM. **Mejora de 0.47 SD** en aprendizaje con métodos activos vs. clase magistral. La probabilidad de fracasar es **1.95 veces mayor en clase tradicional**.
- **Hake (1998)** en *American Journal of Physics*. 6.542 estudiantes, Force Concept Inventory: ganancia normalizada pasó de 0.23 (tradicional) a 0.48 (interactiva).
- **Theobald et al. (2020)** en *PNAS*. Aprendizaje activo de alta intensidad **reduce las brechas de rendimiento** entre minorías y mayoría. Argumento de equidad.

**Implicación para nosotros**: cada lab debe poder usarse para hacer ciencia, no solo verla. El estudiante manipula, predice, observa, ajusta. Si un lab termina siendo "una animación bonita", está mal diseñado.

### 2.2 La indagación funciona CON andamiaje (consenso emergente)

**El debate**:
- **Kirschner, Sweller & Clark (2006)** *Why Minimal Guidance Doesn't Work*: la indagación abierta sobrecarga la memoria de trabajo y fracasa.
- **Hmelo-Silver, Duncan & Chinn (2007)**: replicaron que PBL e IL bien diseñados están **altamente andamiados**.

**La síntesis empírica**:
- **Lazonder & Harmsen (2016)** en *Review of Educational Research*. Meta-análisis de 72 estudios, n=5.867. Resultados:
  - Indagación con andamiaje: d = 0.66 en actividades, **d = 0.71 en éxito**, d = 0.50 en aprendizaje.
  - **Las explicaciones específicas y los scaffolds heurísticos producen los mayores efectos.**
  - La indagación abierta sin scaffolding, en cambio, no mejora resultados.

**Implicación para nosotros**: nuestros labs no son sandboxes vacíos. Tienen **andamiaje implícito** (PhET style) en su diseño visual, restricciones del simulador, feedback inmediato. Cuando el docente lo necesita, ofrecemos **andamiaje explícito** vía modos (5E, guiada, PBL).

### 2.3 La carga cognitiva debe gestionarse activamente (consenso fuerte)

**Evidencia**:
- **Sweller (1988, 2011)** en *Learning and Instruction*. Cognitive Load Theory.
- **Mayer (2001, 2009, 2020)** en *Multimedia Learning*. Doce principios que reducen carga cognitiva extraneous: coherencia, señalización, redundancia, contigüidad espacial/temporal, segmentación, pre-entrenamiento, modalidad.

**Implicación para nosotros**: UI radicalmente limpia. Sin elementos decorativos. Sin música de fondo. Sin animaciones gratuitas. **Una variable destacada por vez.** Tres representaciones acopladas máximo (visual + numérica + gráfica). Si algo no aporta al aprendizaje, se quita.

### 2.4 La evaluación formativa es uno de los mayores impulsores de aprendizaje (consenso fuerte)

**Evidencia**:
- **Black & Wiliam (1998)** *Inside the Black Box*. Tamaños de efecto entre **0.4 y 0.7 SD** para evaluación formativa bien diseñada.
- **Hattie (2008, 2023)** *Visible Learning*. Feedback formativo con d ≈ 0.7. Uno de los predictores más fuertes de aprendizaje.

**Implicación para nosotros**: las preguntas tipo ICFES integradas no son "evaluación final"; son **autoevaluación formativa**. Feedback inmediato y constructivo. La explicación dice por qué la respuesta correcta es correcta Y por qué cada distractor es incorrecto. El estudiante aprende del error, no del castigo.

### 2.5 Los conocimientos previos determinan el aprendizaje nuevo (consenso fuerte)

**Evidencia**:
- **Ausubel (1968)** *Educational Psychology: A Cognitive View*. "El factor más importante que influye en el aprendizaje es lo que el aprendiz ya sabe".
- **Bransford et al. (2000)** *How People Learn* (NRC). Ratifica que activar conocimientos previos y trabajar con misconceptions es central.

**Implicación para nosotros**: cada lab puede comenzar con una pregunta de pre-test (opcional, modo guiado). Las preguntas tipo ICFES están diseñadas con distractores que reflejan **misconceptions reales documentadas** (ver sección 4.3).

### 2.6 La tridimensionalidad NRC organiza el aprendizaje científico (consenso emergente)

**Evidencia**:
- **NRC (2012)** *A Framework for K-12 Science Education*. Aprendizaje tridimensional:
  1. **Prácticas científicas y de ingeniería** (8): plantear preguntas, desarrollar modelos, planificar investigaciones, analizar datos, usar matemáticas, construir explicaciones, argumentar con evidencia, comunicar información.
  2. **Conceptos transversales** (7): patrones, causa-efecto, escala/proporción/cantidad, sistemas, energía/materia, estructura/función, estabilidad/cambio.
  3. **Ideas centrales disciplinares** (DCIs).
- Adoptado por NGSS (2013) y por marcos curriculares modernos en muchos países.

**Implicación para nosotros**: cada lab declara explícitamente qué prácticas, conceptos transversales y DCIs aborda. Esto es **lenguaje internacional** que los financiadores (BID, NGSS, OCDE) reconocen, y que se puede mapear a DBA del MEN colombiano.

---

## 3. El disenso vivo y nuestra posición

### 3.1 ¿Cuánta guía es óptima?
**El campo no ha resuelto el debate Kirschner-Sweller-Clark vs. Hmelo-Silver-Duncan-Chinn definitivamente.** Lo que sí sabemos (Lazonder-Harmsen 2016): la indagación con andamiaje funciona; sin andamiaje, no.

**Nuestra posición**: ofrecemos cinco modos de uso al docente. Él decide cuánto andamiaje según su contexto, sus estudiantes, su momento del año. No imponemos un nivel óptimo único.

### 3.2 ¿Lab virtual reemplaza, complementa o nada?
**El campo sí tiene respuesta** (de Jong, Linn & Zacharia 2013, *Science*; Brinson 2015 en *Computers & Education*; Smetana & Bell 2012 en *International Journal of Science Education*):
- Virtuales **superan** a físicos en conceptos abstractos, fenómenos invisibles, repetibilidad, escala.
- Físicos **superan** en destreza manipulativa, autenticidad afectiva, manejo del error real.
- **Blended supera a ambos por separado.**

**Nuestra posición**: somos **complemento donde hay laboratorio físico, alternativa donde no lo hay**. Nunca sustitutos del laboratorio físico cuando existe. Esto está documentado en `IDENTITY.md` Principio 6.

### 3.3 ¿Gamificación funciona?
**Evidencia mixta** (Kurnaz 2025): gamificación mejora más motivación extrínseca (g=0.71) que intrínseca (g=0.64). Riesgo de erosionar interés genuino. **Deci & Ryan** (Self-Determination Theory): autonomía + competencia + relación produce motivación intrínseca duradera.

**Nuestra posición**: **NO leaderboards públicos** (competitivos). NO puntos arbitrarios. SÍ logros por **descubrimientos genuinos** ("descubriste que el período del péndulo no depende de la masa"). SÍ progresión visible que celebra dominio, no rivalidad.

---

## 4. Marco competencial

### 4.1 Competencias universales (anclaje internacional)

Cada lab declara qué competencias desarrolla. Usamos un marco **compatible con NGSS, OECD Learning Compass 2030, PISA 2025 y competencias del ICFES**:

| ID | Competencia | Definición operativa |
|----|-------------|----------------------|
| `inquiry` | Indagación científica | Plantear preguntas, formular hipótesis, diseñar experimentos. |
| `data-analysis` | Análisis de datos | Interpretar gráficas, identificar patrones, sacar conclusiones. |
| `modeling` | Modelización | Usar y construir modelos para explicar fenómenos. |
| `concept-application` | Aplicación de conceptos | Transferir conceptos a contextos nuevos. |
| `critical-thinking` | Pensamiento crítico | Evaluar evidencia, identificar errores, reconocer limitaciones. |
| `quantitative-reasoning` | Razonamiento cuantitativo | Usar matemáticas para describir fenómenos. |

### 4.2 Mapeo a marcos institucionales

Cada competencia mapea explícitamente a marcos reconocidos:

| Universal | OECD PISA 2025 | ICFES Colombia | NGSS Practices |
|-----------|----------------|----------------|----------------|
| `inquiry` | Construir y evaluar diseños de indagación | Indagación | Asking Questions, Planning Investigations |
| `data-analysis` | Interpretar datos y evidencias | Uso comprensivo del conocimiento | Analyzing and Interpreting Data |
| `modeling` | Explicar fenómenos científicamente | Explicación de fenómenos | Developing and Using Models |
| `concept-application` | Explicar fenómenos científicamente | Uso comprensivo del conocimiento | Constructing Explanations |
| `critical-thinking` | Investigar, evaluar y usar información | Indagación | Engaging in Argument from Evidence |
| `quantitative-reasoning` | Interpretar datos | Uso comprensivo del conocimiento | Using Mathematics |

**Por qué esto importa**: cuando aplicamos a una convocatoria del BID, hablamos OECD/PISA. Cuando hablamos al MEN, hablamos ICFES. Cuando exportamos a EE.UU. en el futuro, hablamos NGSS. **Mismo lab, múltiples lenguajes institucionales**.

### 4.3 Misconceptions documentadas (para distractores)

Cada lab debe identificar y trabajar con misconceptions reales documentadas en la literatura. Ejemplos para los primeros 3 labs:

**Estados de la materia** (referencias: Driver et al. 1985, Tytler 2000):
- *"En el sólido las partículas están quietas."*
- *"Al calentar, las partículas se hacen más grandes."*
- *"El gas no tiene partículas, es solo aire vacío."*

**Péndulo simple** (referencias: Czudková & Musilová 2000):
- *"Pesa más → oscila más rápido."*
- *"Amplitud grande → período cambia."*
- *"En vacío oscilaría más rápido."*

**Densidad y flotación** (referencias: Hardy et al. 2006, Yin et al. 2008):
- *"Lo pesado se hunde, lo ligero flota."*
- *"El tamaño determina si flota."*
- *"El agua es más densa que el hielo."*

Los distractores en preguntas tipo ICFES vienen de aquí. **No son opciones inventadas, son errores reales que cometen estudiantes reales.**

---

## 5. Los cinco modos pedagógicos seleccionables

Cada lab puede operar en uno de cinco modos. **El docente elige al compartir el enlace.**

### Modo 1 — Exploración libre (Sandbox)
**Quién lo elige**: docente que prefiere descubrimiento abierto, o estudiante autodidacta.
**Qué muestra**: el lab + controles + visualización. Sin preguntas, sin guía, sin objetivos.
**Cuándo es bueno**: motivación inicial, exploración previa a la lección formal, "calentamiento".
**Riesgo**: sin scaffolding explícito, estudiantes con bajo conocimiento previo pueden no aprender (Kirschner-Sweller-Clark 2006).
**Mitigación**: andamiaje implícito (PhET style) está siempre activo.

### Modo 2 — Indagación estructurada (5E)
**Quién lo elige**: docente que sigue ciclo Bybee (Engage, Explore, Explain, Elaborate, Evaluate).
**Qué muestra**: el lab + secuencia guiada con prompts en cada fase 5E + preguntas al final.
**Cuándo es bueno**: clase formal con tiempo definido (45-90 min).
**Soporte académico**: BSCS, Bybee et al. 2006.

### Modo 3 — Indagación guiada
**Quién lo elige**: docente que quiere dirigir la exploración con preguntas específicas.
**Qué muestra**: el lab + tareas explícitas ("varía X y observa Y", "encuentra cuándo Z") + preguntas distribuidas.
**Cuándo es bueno**: estudiantes con poco conocimiento previo del tema.
**Soporte académico**: Banchi & Bell (2008), niveles de indagación 2 y 3.

### Modo 4 — Basado en problema (PBL)
**Quién lo elige**: docente que enseña por proyectos.
**Qué muestra**: un escenario realista (caso) que requiere usar el lab para resolverlo. Pregunta abierta inicial. Documentación del proceso al final.
**Cuándo es bueno**: trabajo grupal, sesiones largas, evaluación auténtica.
**Soporte académico**: Hmelo-Silver (2004), Larmer-Mergendoller "Gold Standard PBL".

### Modo 5 — Solo evaluación
**Quién lo elige**: docente que ya enseñó el tema y quiere evaluación rápida.
**Qué muestra**: las preguntas tipo ICFES con explicación al responder. El lab queda disponible como referencia.
**Cuándo es bueno**: simulacros Saber, repaso, autoevaluación de estudiantes.

### Tabla resumen

| Modo | Tiempo típico | Andamiaje | Cuándo usar |
|------|---------------|-----------|-------------|
| Exploración libre | 10-30 min | Implícito | Motivación, autodidacta |
| 5E estructurada | 45-90 min | Implícito + secuencial | Clase formal completa |
| Guiada | 30-60 min | Explícito por tareas | Estudiantes principiantes |
| PBL | 90+ min | Caso + colaborativo | Evaluación auténtica |
| Solo evaluación | 15-30 min | Mínimo | Repaso, simulacro |

**Implicación arquitectónica**: el lab es el mismo en los cinco modos. El **wrapper pedagógico cambia** según el modo. Esto es lo que permite que un solo lab sirva múltiples enfoques sin reescribirlo cinco veces.

---

## 6. Diseño de simulaciones efectivas (20 principios accionables)

Estos 20 principios están anclados en investigación de Wieman, Adams, Podolefsky & Perkins (PhET) y en Mayer (multimedia learning). Cada lab debe cumplir todos.

### Andamiaje y descubribilidad
1. **Andamiaje implícito antes que tutorial.** El estudiante debería poder entender qué hace el lab solo manipulando.
2. **Una acción → un cambio visual en <100 ms.** Feedback inmediato.
3. **Tres representaciones acopladas** (animación + número + gráfico). Cuando una cambia, las otras también.
4. **Hacer visible lo invisible.** Lo que no se puede ver en el mundo real (campos, partículas, fuerzas) es lo que la simulación aporta.
5. **Low floor de 60 segundos.** En 60 segundos, un estudiante novato debería estar interactuando productivamente.
6. **Wide walls** (≥3 fenómenos por sim). El lab permite explorar múltiples cosas, no solo una.
7. **High ceiling oculto.** Modo avanzado disponible pero no obstaculiza al principiante.

### Carga cognitiva (Mayer + Sweller)
8. **Coherencia radical.** Sin música, sin personajes irrelevantes, sin animaciones gratuitas.
9. **Microcopy en español colombiano conversacional.** Frases cortas, verbos de acción.
10. **Pre-entrenamiento de 30 segundos.** Una pantalla simple antes del lab que muestra qué representan los elementos visuales.
11. **El error es información, no juicio.** Feedback constructivo. Nunca "incorrecto, intenta de nuevo" sin explicación.

### Motivación (Self-Determination Theory + Flow)
12. **Autonomía vía elección significativa.** El estudiante decide qué probar, no la app.
13. **Competencia escalonada.** Detectar cuándo el estudiante se atasca y ofrecer pistas opcionales.
14. **Relación.** Docente y pares como first-class citizens. Botón "compartir descubrimiento con docente" disponible.
15. **Andamiaje explícito EXTERNO** (no en la sim). Las guías, preguntas y prompts están alrededor del lab, no encima del lab. Chamberlain et al. (2014) demostró que guía pesada DENTRO de la sim reduce diversidad de exploración.
16. **Gamificación sutil**: logros por descubrimientos genuinos, sin leaderboards ni puntos arbitrarios.

### Equidad técnica (no negociable)
17. **Mobile-first absoluto.** 360×640 px primero. Áreas tocables ≥44×44 px. Android gama media a 30 fps mínimo.
18. **Performance budget**: bundle inicial <500 KB. Sim individual <1 MB. Tiempo a interacción <3s en 3G simulado.
19. **Accesibilidad WCAG 2.1 AA**: contraste 4.5:1, navegación por teclado completa, descripción textual del estado actual, modo daltónico.
20. **Iteración con think-aloud.** Antes de publicar, ≥10 estudiantes colombianos reales han usado la sim mientras un investigador los observa. Mínimo 3 ciclos de iteración.

---

## 7. Estructura de un lab pedagógicamente completo

Cada lab debe tener estos siete componentes. El primero es obligatorio; los demás son altamente recomendados.

### 1. El motor del lab (obligatorio)
- Modelo físico/químico correcto.
- Vista (render).
- Controles (sliders, botones).
- Funciona en celular gama media.
- Pasa los 20 principios de la sección 6.

### 2. Metadatos (obligatorio)
- Área, nivel, duración estimada, dificultad.
- Competencias declaradas.
- Tags curriculares opcionales (DBA, ICFES, NGSS).
- Misconceptions documentadas.

### 3. Preguntas tipo ICFES (3-5 obligatorias)
- Cada una mapeada a una competencia.
- Contexto realista, preferiblemente colombiano.
- 4 opciones, distractores basados en misconceptions reales.
- Explicación que enseña por qué la correcta es correcta y por qué cada distractor es incorrecto.

### 4. Pre-test opcional (1-3 preguntas)
- Activa conocimientos previos (Ausubel).
- El docente decide si lo activa según modo.

### 5. Prompts pedagógicos por modo
- Para modo 5E: secuencia de prompts en cada fase.
- Para modo guiada: tareas específicas.
- Para modo PBL: caso/escenario + pregunta abierta.

### 6. Recursos para el docente (no obligatorios pero altamente recomendados)
- Plan de clase descargable en PDF (1-2 páginas).
- Misconceptions típicas y cómo abordarlas.
- Conexión sugerida con experimento físico cuando aplique.
- Sugerencias de extensión.

### 7. Hoja de registro descargable (opcional)
- Plantilla en PDF que el estudiante puede llenar mientras experimenta.
- Útil para evaluación auténtica y para colegios sin pantallas para todos.

---

## 8. Criterios de calidad pedagógica (para aprobar publicación)

Un lab está listo para publicarse cuando cumple **todos** estos criterios:

- [ ] Declara al menos 1 competencia universal.
- [ ] Tiene ≥3 preguntas tipo ICFES con clave + explicación que enseña.
- [ ] Las preguntas evalúan competencias declaradas, no memorización.
- [ ] Cada distractor está basado en una misconception documentada.
- [ ] Funciona en celular Android gama media (probado en uno real, no emulador).
- [ ] Es usable solo con teclado.
- [ ] WCAG 2.1 AA verificado con axe.
- [ ] Lighthouse > 90 en página del lab.
- [ ] Tiene al menos 3 modos pedagógicos funcionales.
- [ ] Probado con ≥10 estudiantes reales en al menos 3 ciclos.
- [ ] Probado con ≥2 docentes que NO sean el responsable.
- [ ] Tiene plan de clase descargable.
- [ ] Modelo físico/químico revisado por al menos un experto del área.
- [ ] Cumple el performance budget (sección 6, principio 18).

**Lo que descalifica un lab**:
- Físicamente incorrecto (aunque visualmente atractivo).
- Distractores absurdos en lugar de misconceptions reales.
- Requiere ser docente experto para entender qué hace.
- Copia traducida de PhET o similar.
- "Bonito" sin profundidad científica.

---

## 9. Niveles educativos

Cada lab declara su nivel objetivo:

| ID | Nivel | Edades | Notas |
|----|-------|--------|-------|
| `elementary` | Primaria | 6-11 años | Fuera del MVP. Vocabulario simple, conceptos visuales. |
| `middle` | Secundaria básica (6°-9°) | 12-14 años | Conceptos cualitativos, intro a cuantitativo. |
| `high` | Media (10°-11°) | 15-17 años | Cuantitativo, ecuaciones, gráficas. Foco Saber 11. |
| `intro-college` | Universidad introductoria | 18+ | Fuera del MVP. Profundidad mayor. |

**MVP**: focus exclusivo en `middle` y `high`.

---

## 10. Áreas

Cada lab pertenece a un área:

| ID | Área | Estado |
|----|------|--------|
| `physics` | Física | MVP |
| `chemistry` | Química | MVP |
| `biology` | Biología | Fase 2 |
| `math` | Matemáticas | Fase 3+ |
| `earth-science` | Ciencias de la Tierra | Fase 3+ |

---

## 11. Voz y tono pedagógico

### Para el estudiante (UI del lab)
- Tuteo, español colombiano natural.
- Frases cortas con verbos de acción ("Mueve", "Observa", "Compara").
- Vocabulario científico correcto, no infantilizar.
- Sin marketing exagerado, sin emojis decorativos.
- Ejemplos cotidianos cuando ayuden.

✅ *"Mueve el deslizador para cambiar la temperatura. ¿Qué crees que va a pasar?"*
❌ *"¡Hola amiguito! ¡Vamos a divertirnos con las moléculas mágicas!"*

### En descripciones del catálogo
- Una oración que diga qué se aprende.
- Verbos de acción ("Explora", "Investiga", "Descubre").
- Sin marketing exagerado.

### En preguntas tipo ICFES
- Contexto realista, preferiblemente colombiano cuando ayude (sin forzarlo).
- Lenguaje formal pero claro.
- Sin trampas lingüísticas.
- Sin "todas las anteriores" / "ninguna de las anteriores".

### En explicaciones
- Enseñar, no juzgar.
- Decir por qué la correcta es correcta.
- Decir por qué cada distractor es incorrecto y qué error de pensamiento representa.
- Conectar con la competencia evaluada.

---

## 12. Inclusividad

- Imágenes y ejemplos diversos (cuando aplique).
- Ejemplos de varios contextos colombianos (Pacífico, Andina, Amazonía, Caribe, Llanos), no solo Bogotá.
- Lenguaje inclusivo razonable: "estudiantes" en lugar de "alumnos" cuando sea natural.
- Personajes que aparezcan (en escenarios PBL) reflejen diversidad colombiana.
- Accesibilidad cognitiva: opción de descripción simple del lab.
- Modo daltónico (sin depender solo del color para transmitir información).

---

## 13. Cómo defendemos esta posición ante un evaluador

### Si el evaluador pregunta: "¿Qué modelo pedagógico usan?"
Respuesta: "Pluralismo pedagógico empíricamente informado. Anclado en consenso (aprendizaje activo, andamiaje, carga cognitiva, evaluación formativa, tridimensionalidad NRC). Cinco modos seleccionables por el docente. Respeta autonomía profesional."

### Si el evaluador pregunta: "¿Cómo es diferente de PhET?"
Respuesta: "PhET tiene rigor pedagógico pero sin preguntas integradas, sin alineación curricular MEN, sin español colombiano, UX datada, y diseño no-mobile-first. Nuestro proyecto integra preguntas tipo ICFES, mapea explícitamente a DBA, usa español colombiano nativo, UX 2026, y mobile-first absoluto."

### Si el evaluador pregunta: "¿Qué evidencia los respalda?"
Citar: Freeman et al. (2014) PNAS para aprendizaje activo. Hake (1998) AJP para enseñanza interactiva en física. Lazonder & Harmsen (2016) RER para indagación con andamiaje. Smetana & Bell (2012) IJSE para efectividad de simulaciones. Wieman et al. (2008) Science para diseño efectivo. Mayer (2009) para multimedia learning. Black & Wiliam (1998) para evaluación formativa. NRC (2012) para tridimensionalidad.

### Si el evaluador pregunta: "¿Y si la indagación abierta no funciona?"
Respuesta: "El campo ya respondió eso. Lazonder & Harmsen (2016) demostró que la indagación CON andamiaje sí funciona (d=0.71 en éxito). Por eso ofrecemos cinco modos: el docente elige el grado de andamiaje según su contexto."

### Si el evaluador pregunta: "¿Es lab virtual sustituto del físico?"
Respuesta: "No. de Jong, Linn & Zacharia (2013) en *Science* mostró que blended supera a virtual o físico solos. Somos complemento donde hay laboratorio, alternativa donde no lo hay. En Colombia, ~80% de sedes rurales no tienen laboratorio físico — ahí somos la única opción de prácticas."

### Si el evaluador pregunta: "¿Cómo miden impacto?"
Respuesta: "Tres métricas norte: (1) cobertura por NSE/zona, (2) ganancia normalizada pre/post tipo Hake en una muestra, (3) adopción docente espontánea. Métricas vanity (visitas, tiempo total) se monitorean pero no se reportan como éxito."

---

## 14. Referencias bibliográficas (versión corta)

**Aprendizaje activo y eficacia**:
- Freeman, S., et al. (2014). Active learning increases student performance in science, engineering, and mathematics. *PNAS*, 111(23).
- Hake, R. R. (1998). Interactive-engagement vs. traditional methods. *American Journal of Physics*, 66(1).
- Theobald, E. J., et al. (2020). Active learning narrows achievement gaps for underrepresented students. *PNAS*, 117(12).

**Indagación y andamiaje**:
- Kirschner, P. A., Sweller, J., & Clark, R. E. (2006). Why minimal guidance during instruction does not work. *Educational Psychologist*, 41(2).
- Hmelo-Silver, C. E., Duncan, R. G., & Chinn, C. A. (2007). Scaffolding and achievement in problem-based and inquiry learning. *Educational Psychologist*, 42(2).
- Lazonder, A. W., & Harmsen, R. (2016). Meta-Analysis of Inquiry-Based Learning. *Review of Educational Research*, 86(3).

**Carga cognitiva y multimedia**:
- Sweller, J. (1988, 2011). Cognitive load theory.
- Mayer, R. E. (2009, 2020). *Multimedia Learning*.

**Evaluación formativa**:
- Black, P., & Wiliam, D. (1998). Inside the black box. *Phi Delta Kappan*.
- Hattie, J. (2008, 2023). *Visible Learning*.

**Conocimientos previos y misconceptions**:
- Ausubel, D. P. (1968). *Educational Psychology: A Cognitive View*.
- Bransford, J. D., et al. (2000). *How People Learn*. NRC.

**Simulaciones interactivas**:
- Wieman, C. E., Adams, W. K., & Perkins, K. K. (2008). PhET: Simulations that enhance learning. *Science*, 322.
- Smetana, L. K., & Bell, R. L. (2012). Computer simulations to support science instruction. *International Journal of Science Education*, 34(9).
- de Jong, T., Linn, M. C., & Zacharia, Z. C. (2013). Physical and virtual laboratories. *Science*, 340.
- Brinson, J. R. (2015). Learning outcome achievement in non-traditional vs. traditional laboratories. *Computers & Education*, 87.
- Adams, W. K., et al. (2008). A study of educational simulations Part I & II. *Journal of Interactive Learning Research*, 19.
- Paul, A., Podolefsky, N., & Perkins, K. (2012). Implicit scaffolding in interactive simulations.
- Chamberlain, J. M., et al. (2014). How guidance affects student engagement with simulations. *Chemistry Education Research and Practice*, 15.

**Marcos curriculares**:
- NRC (2012). *A Framework for K-12 Science Education*. National Academies Press.
- NGSS Lead States (2013). *Next Generation Science Standards*.
- OECD (2024). *PISA 2025 Science Framework*.
- ICFES Colombia. *Marco de referencia de la prueba Saber 11 Ciencias Naturales*.
- MEN Colombia. *Estándares Básicos de Competencias en Ciencias* (2006). *Derechos Básicos de Aprendizaje*.

---

## 15. Cómo usar este documento

- **Antes de publicar un lab**: validar contra los criterios de la sección 8.
- **Antes de aplicar a una convocatoria**: usar las respuestas de la sección 13.
- **Cuando un docente pregunte por nuestra postura pedagógica**: enviar este documento o una versión resumida.
- **Cuando aparezca una idea pedagógica nueva**: validar contra el consenso de la sección 2 y el disenso de la sección 3.
- **Actualizar al menos cada 12 meses**, o cuando aparezca evidencia que altere el consenso.

---

> Documento mantenido por el responsable del proyecto.
> Última revisión: abril 2026.
