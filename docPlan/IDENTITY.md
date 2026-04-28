# IDENTITY.md

> Documento maestro de identidad del proyecto.
> Si CLAUDE.md responde "¿cómo trabajamos?", este documento responde **"¿quiénes somos, para quién, y por qué existimos?"**.
> Cualquier decisión —de producto, técnica, pedagógica o de despliegue— debe poder defenderse contra este documento.

---

## 1. Qué somos

Una **plataforma colombiana de laboratorios virtuales 2D** para enseñanza de ciencias en secundaria y media (12–17 años), gratuita, mobile-first, open source, y diseñada para funcionar en el celular de un estudiante real de un colegio oficial colombiano.

No somos un LMS. No somos un reemplazo del docente. No somos una startup en busca de salida. No somos un sustituto del laboratorio físico.

Somos **infraestructura pedagógica pública digital**: una herramienta cuya razón de ser es reducir la brecha de acceso a prácticas científicas en Colombia, anclada en evidencia académica y respeto por la autonomía profesional del docente.

---

## 2. Para quién existimos (orden de prioridad real)

### Usuario primario en producto: el estudiante colombiano de secundaria
Específicamente: **adolescentes de 12 a 17 años de colegios oficiales**, con acceso predominante vía celular Android de gama media o baja, conexión variable, y que en muchos casos nunca han pisado un laboratorio físico funcional.

Si una decisión beneficia al docente pero perjudica al estudiante, perdemos al estudiante. Sin estudiantes activos, no hay producto.

### Usuario primario en adopción: el docente de ciencias
Específicamente: **docentes de Ciencias Naturales, Química, Física y Biología de colegios oficiales colombianos**, que conocen su contexto, sus DBA, sus estudiantes, y que son el nodo del sistema: si ellos no abren la plataforma en clase, nada llega al estudiante.

El docente decide cómo, cuándo y por qué usar la plataforma. La plataforma respeta su autonomía profesional. No le impone modelo pedagógico, no le exige login, no le pide reportes que no quiere.

### Usuarios secundarios (en este orden)
1. **Autodidactas y estudiantes en hogares** que buscan entender ciencias por su cuenta.
2. **Coordinadores académicos y rectores** que buscan recursos para fortalecer su PEI.
3. **Padres y cuidadores** que quieren apoyar el aprendizaje de sus hijos.
4. **Aliados institucionales**: MEN, MinTIC, MinCiencias, secretarías de educación, fundaciones, universidades.

### Quiénes NO son nuestro usuario
- Colegios privados de élite con laboratorios completos y suscripción a Labster (pueden usarnos, pero no diseñamos para ellos).
- Universidades (otro nivel cognitivo, otro contexto, otro alcance).
- El mercado anglosajón (puede usarnos cuando lleguemos a ello, pero Colombia primero).

---

## 3. Misión

> **Garantizar que ningún estudiante colombiano pierda la oportunidad de hacer ciencia experimental por no tener un laboratorio cerca.**

Esta es la oración que cabe en una camiseta. Es la prueba contra la que se valida cada decisión.

### Versión expandida (3 oraciones)
Existimos para cerrar la brecha de acceso a prácticas científicas que separa a estudiantes colombianos de colegios públicos rurales y urbanos vulnerables del aprendizaje experimental al que sí tienen acceso sus pares de colegios privados de élite. Lo hacemos ofreciendo laboratorios virtuales 2D pedagógicamente sólidos, gratuitos, en español colombiano, alineados con MEN/DBA/ICFES, accesibles desde el celular y sin login obligatorio. Acompañamos al docente sin reemplazarlo, y nos sostenemos como bien público digital, no como negocio.

---

## 4. Visión

### A 3 años
Ser **la herramienta digital de prácticas de ciencias más usada en colegios oficiales colombianos**, con presencia documentada en al menos 5 departamentos prioritarios (incluyendo zonas rurales), 30+ laboratorios publicados, evidencia empírica de impacto en aprendizaje, y reconocimiento del MEN o secretarías como recurso oficial recomendado.

### A 5 años
Ser **infraestructura pedagógica pública digital sostenible**, replicable, exportable a otros países latinoamericanos por arquitectura (no por dilución), y modelo de cómo se construye tecnología educativa pública desde el Sur Global.

### A 10 años
Que el proyecto **siga existiendo** —blindado políticamente, mantenido por una alianza institucional plural— y haya formado parte del crecimiento académico de una generación entera de estudiantes colombianos que hoy no tienen acceso a un laboratorio físico.

---

## 5. Problema que resolvemos

### El problema en datos (ICFES, DANE, MEN, BID, OECD)

- **70% de estudiantes** de Saber 11 está en niveles 1–2 en Ciencias Naturales (Fundación ExE, 2025).
- **97% no demuestran capacidad de plantear preguntas de investigación.**
- Brecha NSE 1 vs NSE 4 en Saber 11: **78 puntos**.
- Brecha rural-urbana: **25 puntos**.
- **29% de colegios públicos sin internet**; ~80% de sedes rurales sin laboratorio funcional.
- Colombia en PISA 2022 ciencias: **411 puntos** (vs 485 OCDE), el 56% por debajo de nivel 2.
- 5,3 millones de adolescentes 12–17 años en Colombia.
- 87,1% de hogares con smartphone; ~9 de cada 10 personas acceden a internet vía celular (DANE 2024).

### El problema en una frase

**El acceso a prácticas científicas en Colombia es un privilegio de código postal.**

### Por qué nadie lo ha resuelto

Las plataformas existentes resuelven partes del problema, ninguna resuelve el conjunto:

- **PhET** tiene rigor pedagógico y simulaciones excelentes, pero traducción literal sin alineación al MEN, sin preguntas integradas, UX datada de 2010s.
- **Khan Academy** tiene UX moderna y escala, pero pocas simulaciones de ciencias experimentales y sesgo mexicano en español.
- **Labster** es premium ($79–109/estudiante/año), inaccesible para colegios públicos colombianos.
- **CK-12** es lo más cercano (PLIX con preguntas integradas), pero sin localización Colombia y UX desigual.
- **Tinkercad** tiene la UX que aspiramos, pero no cubre ciencias puras y requiere cuenta y conexión.
- **Algodoo** es 2D y accesible pero solo física, sin guía pedagógica, requiere descarga.

**Nadie ocupa el cuadrante**: rigor pedagógico + UX moderna + preguntas integradas tipo ICFES + español colombiano + alineación MEN/DBA + gratuidad real + 2D liviano + mobile-first + sin login + open source. Ese cuadrante vacío es nuestra trinchera.

---

## 6. Principios fundacionales (los inviolables)

Estos principios son **decisiones tomadas**. No están abiertos a renegociación frecuente. Cualquier propuesta que los contradiga debe defenderse contra ellos primero.

### Principio 1 — Justicia educativa antes que escala
**Definición**: priorizamos al estudiante con menos acceso, no al que ya tiene todo. Si una feature beneficia al colegio privado pero ignora al rural, no se hace primero.

**Implicación operativa**: el primer celular en el que validamos cada simulación es uno de gama media-baja, no un iPhone. Las primeras pruebas de pilotaje son en colegios oficiales, no privados.

### Principio 2 — Evidencia antes que opinión
**Definición**: nuestras decisiones pedagógicas y de producto se anclan en investigación replicable (Freeman 2014, Hake 1998, Lazonder & Harmsen 2016, Smetana & Bell 2012, Wieman 2008, etc.), no en intuición ni hype.

**Implicación operativa**: si alguien propone una feature porque "está de moda" o "todos lo hacen", la respuesta es: ¿qué evidencia hay de que mejora el aprendizaje?

### Principio 3 — Autonomía docente, no imposición
**Definición**: el docente decide cómo, cuándo y por qué usar la plataforma. No imponemos un modelo pedagógico (ni CREO, ni 5E, ni ABP). La plataforma ofrece modos pedagógicos seleccionables, y el docente elige.

**Implicación operativa**: cada laboratorio puede operar en cinco modos: exploración libre, indagación estructurada (5E), indagación guiada, basado en problema (PBL), o solo evaluación. El docente elige al compartir el enlace.

### Principio 4 — Bien público digital, no producto privado
**Definición**: código abierto bajo licencia MIT, contenido bajo CC BY-SA. Sin VC, sin publicidad, sin tracking, sin venta de datos. Sostenibilidad por cooperación institucional, filantropía y posibles convenios MEN/secretarías.

**Implicación operativa**: cada decisión técnica evita lock-in con un proveedor. Cada feature de "engagement" es revisada para no convertirse en dark pattern.

### Principio 5 — Mobile-first absoluto
**Definición**: el celular Android de gama media-baja con conexión variable es el dispositivo de referencia. Desktop es secundario.

**Implicación operativa**: 360×640 px es el primer mockup. 44×44 px es el área tocable mínima. Bundle inicial < 500 KB. PWA con offline cuando haya 3 sims listas.

### Principio 6 — Complemento, no reemplazo
**Definición**: somos complemento del docente y del laboratorio físico donde existe; somos alternativa donde no hay laboratorio. Nunca somos sustituto del docente.

**Implicación operativa**: el discurso público nunca es "ya no necesitas laboratorio"; es "donde no hay laboratorio, esto te acerca a la ciencia experimental".

### Principio 7 — Privacidad de menores como derecho
**Definición**: Ley 1581 + Decreto 1377 + PL 247/2025. Los datos de estudiantes son sagrados. Minimización extrema. Sin perfilamiento. Sin publicidad. Sin trackers de terceros.

**Implicación operativa**: ningún estudiante necesita login para usar la plataforma. Si docente crea aula, los estudiantes son anónimos por código. Analytics agregado con Plausible (sin cookies, sin PII).

### Principio 8 — Calidad antes que cantidad
**Definición**: 5 simulaciones excelentes valen más que 30 mediocres. Ningún laboratorio se publica si no cumple criterios de calidad.

**Implicación operativa**: backlog visible y aceptado. Cuando alguien pregunte "¿cuándo viene la sim de X?", la respuesta es "cuando esté lista para no avergonzarnos".

### Principio 9 — Localización profunda, exportabilidad por arquitectura
**Definición**: Colombia-first en contenido, ejemplos, tono y currículo. Pero la arquitectura permite agregar tags de otros países sin reescribir nada.

**Implicación operativa**: ejemplos de Cartagena, Magdalena, café, biodiversidad amazónica, no de "una ciudad genérica". Pero el sistema de tags permite agregar `mx_planys`, `pe_curric` el día que llegue ese momento.

### Principio 10 — Construir para que sobreviva
**Definición**: el éxito a largo plazo no es la próxima feature; es que el proyecto siga existiendo en 10 años. Eso requiere blindaje legal, institucionalidad, alianzas plurales, código que no dependa de una sola persona.

**Implicación operativa**: documentación obsesiva. Decisiones registradas como ADRs. No bus factor de 1. Buscar desde el inicio alianzas con universidades públicas (Uniandes, Unal, UPN, Univalle, UdeA), fundaciones (ExE, Compartir, Carvajal) y entidades estatales.

---

## 7. Lo que NO somos (anti-identidad explícita)

Esta lista es tan importante como la identidad positiva. Son tentaciones que vamos a sentir y debemos resistir.

| No somos | Por qué no |
|----------|-----------|
| Un LMS | Otros lo hacen mejor; meternos ahí diluye la misión |
| Una colección de simulaciones traducidas de PhET | Sería robar y ser mediocres a la vez |
| Una startup EdTech con captable | Ese modelo destruye la misión (ver Byju's) |
| Un competidor de Labster | Modelo premium incompatible con nuestra misión |
| Un proyecto académico sin usuarios reales | Si no llega a aulas reales, no existe |
| Una plataforma "innovadora con IA" como diferenciador | IA es herramienta, no identidad |
| Una app móvil nativa | Web responsive + PWA es suficiente y más equitativo |
| Una plataforma para estudiantes brillantes | Diseñamos para el percentil 30 de habilidad y conectividad |
| Un sustituto del laboratorio físico | Somos complemento o alternativa, no reemplazo |
| Una plataforma "neutra" sin posición pedagógica | Tenemos posición clara: aprendizaje activo + andamiaje |

---

## 8. Diferenciador en una frase

**Somos la única plataforma que combina rigor pedagógico tipo PhET, UX moderna tipo Tinkercad, preguntas integradas tipo CK-12, alineación curricular MEN/DBA/ICFES, gratuidad real, mobile-first absoluto y diseño explícito para el estudiante colombiano de colegio oficial.**

(El detalle uno-a-uno está en `DIFFERENTIATION.md`.)

---

## 9. Identidad de marca (preliminar)

> El nombre del proyecto se decide después de tener prototipo. Aquí dejamos el espacio reservado.

**Nombre interno temporal**: *Virtual Labs Platform* (técnico, sin marca).

**Criterios para nombre definitivo**:
- Pronunciable en español sin esfuerzo.
- Memorable para un adolescente de 14 años.
- Sin connotaciones de élite académica ("Academy", "Institute", "Pro").
- Sin anglicismos innecesarios.
- Dominio `.co` o `.edu.co` disponible.
- No debe parecer "extranjero" ni "made in USA".
- Ojalá evoque: experimentar, descubrir, hacer ciencia.

**Candidatos a explorar más adelante**:
- *Laboratorio* (genérico pero claro)
- *Experimenta*
- *Indaga*
- *Tinka* (en quechua: experimentar)
- *Banco de prueba*

(No urgente. El producto es lo primero.)

---

## 10. Voz y tono institucional

### Cuando hablamos a estudiantes
- Tuteo, no usted.
- Frases cortas.
- Vocabulario científico correcto, sin infantilizar.
- Cero marketing exagerado, cero emojis decorativos.
- Ejemplos cotidianos colombianos.

### Cuando hablamos a docentes
- Respeto profesional sin servilismo.
- Asumimos que sabe el tema y conoce su contexto.
- Directos y prácticos.
- Cuando damos sugerencias, decimos por qué.
- Sin moralizar ni condescender.

### Cuando hablamos a aliados institucionales
- Formal pero claro, sin lenguaje burocrático ni academicismo.
- Datos concretos, no promesas vagas.
- Posición pedagógica explícita y defendible con evidencia.
- Sin caer en el discurso de "transformación digital" hueco.

### Cuando hablamos públicamente
- Anclados en evidencia, no en hype.
- Reconocemos lo que no sabemos y lo que aún no funciona.
- Sin slogans tipo Silicon Valley.
- Críticos cuando corresponde con la EdTech mainstream.

---

## 11. Cómo tomar decisiones cuando hay duda

Cuando una decisión sea ambigua, aplicar este orden:

1. **¿Qué dice este documento (IDENTITY.md)?** Si responde, fin del debate.
2. **¿Qué dice la evidencia académica disponible?** (Ver `PEDAGOGICAL_FRAMEWORK.md`).
3. **¿Qué dice el principio de justicia educativa?** ¿Esto acerca o aleja al estudiante de colegio oficial vulnerable?
4. **¿Qué dice el principio de autonomía docente?** ¿Esto respeta su criterio profesional?
5. **¿Qué dice el principio de bien público digital?** ¿Esto preserva o erosiona el carácter público del proyecto?

Si después de esos cinco filtros sigue habiendo duda, **decisión postergada hasta tener más información**. Es preferible no decidir que decidir mal.

---

## 12. Cómo usar este documento

- **Antes de cualquier decisión grande**, revisar este documento.
- **Cuando aparezca una idea seductora**, pasarla por los principios de la sección 6 y la lista de la sección 7.
- **Cuando haya conflicto** entre dos prioridades, aplicar el orden de la sección 11.
- **Cuando alguien externo nos pregunte qué somos**, las respuestas vienen de aquí.
- **Cuando se reescriba**, cualquier cambio sustancial debe ir acompañado de un ADR (Architecture Decision Record) que explique qué cambió y por qué.

---

> Documento mantenido por el responsable del proyecto.
> Última revisión: abril 2026.
> Próxima revisión obligatoria: cada 6 meses, o cuando un hito mayor lo requiera.
