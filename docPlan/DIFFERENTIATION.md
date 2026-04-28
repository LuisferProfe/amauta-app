# DIFFERENTIATION.md

> Mapeo riguroso uno a uno de cómo nos diferenciamos de PhET, Khan Academy, Labster, CK-12, Tinkercad, Algodoo y otras plataformas relevantes.
> Este documento existe para responder la pregunta: *"¿Por qué construir esto si ya existe X?"*.
> Cada comparación incluye **qué hace bien (y aprendemos), qué hace mal (y evitamos), y dónde nos diferenciamos**.

---

## 1. La tesis en una imagen

```
                                  RIGOR PEDAGÓGICO
                                         |
                                         |
                                   ⭐ PhET
                                         |
                                         |
                                         |
                              ⭐ NOSOTROS (cuadrante deseado)
                                         |
                                         |
   Tinkercad ⭐                          |                 ⭐ CK-12
   (UX moderna)                          |                 (preguntas integradas)
                                         |
                                         |
   Khan ⭐                               |                          ⭐ Labster
   (escala)                              |                          (premium)
                                         |
   Algodoo ⭐                            |
   (2D + accesible)                      |
                                         |
═════════════════════════════════════════╪══════════════════════════════════
   GRATIS / OFFLINE / MOBILE-FIRST       |       PREMIUM / DESKTOP / ONLINE
                                         |
```

**Ningún competidor ocupa simultáneamente el cuadrante**: rigor pedagógico + UX moderna + preguntas integradas + español colombiano + alineación MEN/DBA/ICFES + gratuidad real + 2D liviano + mobile-first + sin login + open source.

Ese cuadrante vacío es nuestra trinchera. Las secciones siguientes lo demuestran competidor por competidor.

---

## 2. Tabla maestra de comparación

| Criterio | PhET | Khan | Labster | CK-12 | Tinkercad | Algodoo | **Nosotros** |
|----------|------|------|---------|-------|-----------|---------|---------|
| **Precio para estudiante** | Gratis | Gratis (Khanmigo USD 4/mes) | USD 79–109/año | Gratis | Gratis | Gratis (desktop) | **Gratis siempre** |
| **Acceso sin login** | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| **Mobile-first** | ⚠️ Responsive | ✅ | ⚠️ 3D pesado | ⚠️ | ⚠️ | ❌ Desktop | ✅ Absoluto |
| **Funciona en gama media-baja** | ⚠️ | ✅ | ❌ | ⚠️ | ❌ | ❌ | ✅ |
| **Offline real** | ⚠️ Vía Kolibri | ⚠️ Limitado | ❌ | ❌ | ❌ | ✅ Desktop | ✅ PWA |
| **UX 2026** | ❌ Datada (2010s) | ✅ | ✅ (3D) | ⚠️ Desigual | ✅ ⭐ | ❌ | ✅ Moderna 2D |
| **Rigor pedagógico** | ✅ ⭐ (PER 20+ años) | ⚠️ | ⚠️ | ✅ | ⚠️ | ⚠️ | ✅ Anclado en evidencia |
| **Preguntas integradas** | ❌ | ✅ | ✅ | ✅ ⭐ | ❌ | ❌ | ✅ Tipo ICFES |
| **Andamiaje implícito** | ✅ ⭐ | ⚠️ | ⚠️ | ⚠️ | ✅ | ⚠️ | ✅ |
| **Modos pedagógicos múltiples** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ ⭐ (5 modos) |
| **Español colombiano** | ❌ Traducción literal | ⚠️ Sesgo MX | ⚠️ Parcial | ⚠️ Parcial | ✅ Genérico | ⚠️ | ✅ ⭐ Nativo |
| **Alineación MEN/DBA** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ ⭐ |
| **Tags ICFES** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ ⭐ |
| **Tags universales** (NGSS, etc.) | ❌ | ❌ | ⚠️ | ✅ | ❌ | ❌ | ✅ Por arquitectura |
| **Cobertura: ciencias completas** | ✅ Física/Química/Bio/Mat | ⚠️ Limitada | ✅ | ✅ | ❌ Solo maker | ❌ Solo física | ✅ |
| **Open source código** | ✅ ⭐ | ❌ | ❌ | ⚠️ Parcial | ❌ | ❌ | ✅ MIT |
| **Open source contenido** | ✅ CC BY | ❌ | ❌ | ✅ CC BY-NC | ❌ | ❌ | ✅ CC BY-SA |
| **Sin trackers terceros** | ⚠️ | ❌ | ❌ | ⚠️ | ❌ | ✅ | ✅ ⭐ |
| **Privacidad menores LATAM** | ⚠️ | ❌ | ❌ | ⚠️ | ❌ | N/A | ✅ Ley 1581 |
| **Modelo financiero compatible con misión** | ✅ NSF/Yidan | ⚠️ Filantropía + IA pago | ❌ VC | ✅ Khosla | ⚠️ Funnel Autodesk | ⚠️ Comercial | ✅ Bien público |
| **Sostenibilidad institucional LATAM** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ ⭐ |

---

## 3. Comparación detallada uno a uno

### 3.1 vs PhET Interactive Simulations

**Lo que PhET hace excepcionalmente bien (y aprendemos)**:
- Décadas de Physics Education Research (Carl Wieman, Nobel 2001) respaldan cada decisión de diseño.
- Andamiaje implícito en lugar de tutoriales escritos: el aprendizaje ocurre al manipular.
- Múltiples representaciones acopladas (visual + numérica + gráfica).
- Open source completo (GitHub `phetsims`).
- Hace visible lo invisible (campos eléctricos, moléculas, ondas).
- Licencia abierta CC BY que permite reutilización ética.

**Lo que PhET hace mal (y evitamos)**:
- **UX datada**: estética 2010s, navegación "clunky" (Common Sense Education).
- **Sin preguntas integradas**: el estudiante explora, pero no autoevalúa dentro de la sim.
- **Sin progresión guiada**: no hay rutas de aprendizaje, no hay orden sugerido.
- **Traducción literal al español**: sin adaptación cultural ni curricular a Colombia.
- **Sin panel docente**: nada de analítica, nada de seguimiento.
- **Sin alineación MEN/DBA/ICFES**: el docente colombiano debe traducir mentalmente.
- **Mobile responsive pero no mobile-first**: muchas sims se sienten pesadas en celular gama media.

**Cómo nos diferenciamos**:
- Mantenemos el rigor pedagógico de PhET pero con UX 2026.
- Agregamos preguntas tipo ICFES integradas en la sim.
- Tags MEN/DBA/ICFES nativos.
- Diseño explícito mobile-first (no responsive).
- Modos pedagógicos seleccionables (PhET es siempre exploración libre).
- Localización profunda Colombia (no traducción).
- Andamiaje implícito heredado de PhET + andamiaje explícito opcional para modos guiados.

**Veredicto**: PhET es nuestra base intelectual y pedagógica. **Aspiramos a ser "PhET hecho en Colombia con UX 2026 y preguntas integradas"**.

---

### 3.2 vs Khan Academy

**Lo que Khan hace bien (y aprendemos)**:
- UX moderna, rápida, accesible.
- Progresión gamificada sutil (sin caer en gamificación tóxica).
- Preguntas integradas con feedback inmediato.
- Khan Academy en Español vía Fundación Carlos Slim: 14M+ hispanohablantes.
- Modelo de bien común filantrópico.

**Lo que Khan hace mal (y evitamos)**:
- **Pocas simulaciones de ciencias experimentales**: el modelo es "video + multiple choice".
- **Sesgo mexicano** en español: ejemplos, modismos, contextos.
- **Khanmigo (tutor IA) bloqueado en Colombia** (billing US, +18 años).
- **Sin RCT publicado** que demuestre efectividad de Khanmigo (K12 Dive 2025).
- **Login obligatorio** para personalización.
- **Personalización algorítmica opaca** (modelo de "recomendación" tipo Netflix).

**Cómo nos diferenciamos**:
- Foco en simulaciones interactivas (no en videos).
- Español colombiano nativo, no traducción mexicana.
- Sin login obligatorio.
- Sin tutor IA opaco; cuando integremos IA, será transparente y explícito.
- Foco en colegios oficiales colombianos, no escala global vacía.

**Veredicto**: Khan tiene UX y escala, pero no tiene el corazón experimental ni la localización profunda. **Nosotros llenamos el hueco que Khan no llena**.

---

### 3.3 vs Labster

**Lo que Labster hace bien (y aprendemos)**:
- Producción visual premium (3D realista).
- Cobertura amplia (300+ sims en ciencias y biotecnología).
- Validación institucional (MIT, Harvard, Stanford).
- Preguntas integradas con feedback contextual.

**Lo que Labster hace mal (y NO copiamos bajo ninguna circunstancia)**:
- **Modelo de negocio premium** USD 79–109/estudiante/año: matemáticamente inalcanzable para colegios públicos colombianos (que invierten total USD 50–200/estudiante/año).
- **Capital de riesgo** (USD 147M de a16z, Owl Ventures, GGV): valuación USD 523M genera presión por monetizar que erosiona la misión educativa.
- **3D pesado con WebGL**: descarta zonas rurales y dispositivos gama media-baja.
- **Cinematografía sci-fi** que prioriza el "wow" sobre el rigor (crítica académica recurrente).
- **Login institucional obligatorio**: barrera de entrada absoluta.

**Cómo nos diferenciamos**:
- Gratis para siempre. Sin asterisco.
- 2D liviano que funciona en celular gama media.
- Sin login obligatorio para estudiantes.
- Bien público digital, no startup VC.
- Estética profesional pero sobria, sin teatralidad.

**Veredicto**: **Labster es exactamente lo que NO queremos ser**. Es nuestro anti-modelo. Útil para entender qué evitar.

---

### 3.4 vs CK-12 Foundation

**Lo que CK-12 hace bien (y aprendemos)**:
- **PLIX (Play-Learn-Interact-eXplore)**: micro-interactivos con preguntas integradas. **Es el referente más cercano a nuestra propuesta.**
- OER puro bajo licencia abierta.
- Cobertura amplia.
- Modelo de fundación filantrópica (Khosla).

**Lo que CK-12 hace mal (y mejoramos)**:
- **UX desigual**: algunos PLIX son excelentes, otros se sienten incompletos.
- **Localización español parcial**: sin alianzas LATAM documentadas profundas.
- **Sin alineación MEN/DBA**: como PhET y Khan, no aterriza al currículo colombiano.
- **Login requerido para mucha funcionalidad**.
- **Estética visual desigual** entre PLIX (no hay un sistema de diseño coherente).

**Cómo nos diferenciamos**:
- Sistema de diseño coherente (Tailwind + shadcn) en TODOS los labs.
- Alineación MEN/DBA/ICFES desde el día 1.
- Sin login obligatorio.
- Localización profunda colombiana, no traducción genérica.
- Foco específico en física/química/biología (CK-12 abarca demasiado).

**Veredicto**: **CK-12 PLIX es nuestro modelo más cercano**. Tomamos su idea de "sim + preguntas integradas" y la elevamos en UX, coherencia y localización.

---

### 3.5 vs Tinkercad (Autodesk)

**Lo que Tinkercad hace excepcionalmente bien (y aprendemos)**:
- **UX educativa de referencia mundial**: "low floor, high ceiling" radical.
- 100% gratuito (funnel comercial de Autodesk).
- Tres workspaces (3D, circuits, codeblocks).
- Onboarding sin fricciones.
- Estética limpia, moderna, profesional.

**Lo que Tinkercad hace mal (para nuestro caso)**:
- **No cubre ciencias puras** (química, biología, física conceptual).
- Foco maker/CAD/electrónica.
- Requiere cuenta y conexión.
- Datos manejados por Autodesk.
- Funnel de marketing hacia productos pagos de Autodesk.

**Cómo nos diferenciamos**:
- Cubrimos ciencias puras, no maker.
- Sin login.
- Sin funnel comercial.
- Datos en Colombia (cuando haya backend), no en Autodesk.

**Veredicto**: **Tinkercad es nuestro modelo de UX, no de contenido**. Aspiramos a la calidad de su onboarding y su sensación de herramienta moderna.

---

### 3.6 vs Algodoo

**Lo que Algodoo hace bien (y aprendemos)**:
- **2D bien diseñado** que demuestra que no se necesita 3D para enseñar física.
- Sandbox de física accesible.
- Free desktop.
- Funciona offline.

**Lo que Algodoo hace mal (y mejoramos)**:
- **Solo física**: ni química, ni biología, ni matemáticas.
- **Requiere descarga**: barrera enorme para celulares de estudiantes.
- **Sin guía pedagógica**: es solo sandbox, no aprendizaje guiado.
- **Sin preguntas, sin progresión, sin evaluación**.
- **Estética muy datada**.
- **Sin localización ni alineación curricular**.

**Cómo nos diferenciamos**:
- Cobertura amplia (no solo física).
- Web nativo, sin descarga.
- Mobile-first.
- Guía pedagógica integrada (preguntas, modos).
- Estética 2026.
- Alineación MEN/DBA.

**Veredicto**: **Algodoo es nuestro pariente filosófico** (apuesta por 2D bien diseñado). Aprendemos su tesis de fondo y agregamos lo que le falta.

---

## 4. Otras plataformas relevantes (resumen)

| Plataforma | Qué hace | Por qué no nos amenaza |
|------------|----------|------------------------|
| **Concord Consortium** (CODAP, Molecular Workbench) | Modeling científico riguroso, open source | UX académica/austera, sin español, sin presencia LATAM |
| **GeoGebra** | Matemáticas, geometría dinámica | Foco matemático puro, no ciencias experimentales |
| **NetLogo** | Agent-based modeling | Profundidad única pero UX 90s, audiencia universitaria |
| **PraxiLabs** (Egipto) | Sims 3D, USD 45–75/año | Premium, 3D pesado, foco MENA |
| **Gizmos** (ExploreLearning) | Sim + worksheet + assessment | USD 674/clase/año, modelo escolar tradicional |
| **CircuitVerse** | Circuitos lógicos digitales | Foco estrecho, solo desktop |
| **Eduteka** (Univ. Icesi) | Recursos educativos colombianos | No es plataforma de simulaciones, es repositorio |

---

## 5. Posicionamiento competitivo final

### Frase de posicionamiento (para presentaciones)

> **Para el estudiante colombiano de colegio oficial que no tiene laboratorio cerca**, somos la plataforma de laboratorios virtuales 2D que combina el rigor pedagógico de PhET, la UX moderna de Tinkercad y las preguntas integradas de CK-12, en español colombiano, alineada con MEN/DBA/ICFES, gratis, sin login, sin publicidad, y diseñada explícitamente para funcionar en su celular.
>
> A diferencia de PhET (UX datada, sin preguntas, sin alineación curricular), Khan (pocas sims experimentales, sesgo mexicano, login), Labster (premium inalcanzable, 3D pesado), CK-12 (sin foco LATAM, UX desigual), Tinkercad (no cubre ciencias puras, requiere cuenta) o Algodoo (solo física, requiere descarga, sin pedagogía), construimos infraestructura pedagógica pública digital colombiana, sostenible como bien común y blindada contra el modelo VC que ha destruido tantas EdTech.

### El cuadrante vacío que ocupamos

```
Ningún actor cubre simultáneamente estas 10 dimensiones:

  1. Rigor pedagógico (basado en evidencia académica replicable)
  2. UX moderna 2026 (no estética de 2010s)
  3. Preguntas integradas tipo ICFES (no solo exploración libre)
  4. Modos pedagógicos seleccionables (5 modos, no uno único)
  5. Español colombiano nativo (no traducción literal)
  6. Alineación MEN / DBA / ICFES (no solo "alineación al currículo")
  7. Gratuidad real (no freemium)
  8. Mobile-first absoluto (no responsive después)
  9. Sin login obligatorio (acceso por enlace)
 10. Open source código + contenido (MIT + CC BY-SA)

PhET cubre 1, 9, 10 (pero traducido).
Khan cubre 2, 3, 7.
Labster cubre 1, 2, 3, 4 parcial (pero PREMIUM).
CK-12 cubre 1, 3, 7, 10.
Tinkercad cubre 2, 7, 8, 9 parcial (pero solo maker).
Algodoo cubre 7, 9 parcial (pero solo física).

Nosotros cubrimos las 10. Ese es el diferencial.
```

---

## 6. Riesgo competitivo y respuesta

### "¿Y si PhET decide modernizar su UX?"
Probabilidad: media. Tiempo: años. Aun así, **no van a localizarse para Colombia** (no es su misión). Y sin preguntas integradas + alineación MEN, no llegarían al docente colombiano como nosotros.

### "¿Y si Khan agrega más simulaciones de ciencias?"
Probabilidad: baja-media. **No es su modelo principal.** Su sweet spot es video + practice. Si lo hicieran, seguirían sin español colombiano, sin alineación MEN, con login obligatorio y con Khanmigo como freemium pago.

### "¿Y si aparece un competidor colombiano gratis?"
**Lo celebramos.** El problema es enorme; no es zero-sum. Si alguien construye algo complementario o mejor en algún aspecto, mejor para los estudiantes colombianos. Open source significa que pueden usar nuestro código.

### "¿Y si el MEN decide hacer su propia plataforma?"
**Lo celebramos también.** Idealmente nos integramos. Open source + bien público digital + arquitectura abierta nos hace candidatos naturales para ser adoptados o referenciados.

### "¿Y si una EdTech con plata copia el modelo?"
Es el riesgo más real. **Nuestra defensa es triple**:
1. **Imposibilidad estructural de mantener el modelo gratuito sin VC**: ellos van a tener que monetizar.
2. **Localización profunda colombiana** que requiere conocimiento del aula real, no solo plata.
3. **Marca de bien público digital** que nos da capital reputacional con docentes y aliados que ninguna corp puede comprar rápido.

---

## 7. Cómo usar este documento

- **En presentaciones a aliados**: usar la sección 5 (posicionamiento final).
- **Cuando aparezca un competidor nuevo**: aplicar el mismo template (qué hace bien, qué hace mal, cómo nos diferenciamos).
- **Cuando una decisión técnica corra el riesgo de difuminar el diferencial**: revisar si lo que estamos proponiendo nos saca del cuadrante de las 10 dimensiones de la sección 5.
- **Actualizar al menos una vez al año**, o cuando aparezca un cambio competitivo relevante.

---

> Documento mantenido por el responsable del proyecto.
> Última revisión: abril 2026.
