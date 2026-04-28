# Guía de Contribución

¡Gracias por interesarte en contribuir a Amauta! 🙌

## Primeros Pasos

1. **Fork el repositorio** en GitHub
2. **Clona tu fork** localmente:
   ```bash
   git clone https://github.com/tu-usuario/amauta.git
   cd amauta
   ```
3. **Crea una rama** para tu feature/fix:
   ```bash
   git checkout -b feat/nombre-descriptivo
   # o
   git checkout -b fix/descripcion-del-bug
   ```

## Setup local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Antes de commitear

1. **Linting**: `npm run lint:fix`
2. **Formatting**: `npm run format`
3. **Tests**: `npm run test`

## Estándares de código

### TypeScript
- **Strict mode activo** - no hay `any` type
- Tipos explícitos para funciones públicas
- Interfaces bien definidas

### Componentes React
- Functional components
- Hooks para state
- Props tipadas con interfaces/types
- Destructuring en parámetros

### Naming
- camelCase para variables y funciones
- PascalCase para componentes
- CONSTANT_CASE para constantes

### Commits
Usa conventional commits:
```
feat: agregar nuevo lab de equilibrio químico
fix: corregir cálculo de presión en modelo
docs: actualizar README
test: agregar tests para calculatePressure
```

## Enviar PR

1. **Push** a tu rama:
   ```bash
   git push origin feat/nombre-descriptivo
   ```

2. **Abre PR** en GitHub con descripción clara:
   - Qué cambios hace
   - Por qué son necesarios
   - Issues relacionadas (#123)

3. **Espera revisión** - mantén la rama actualizada con main

## Tipos de contribución

### Código
- New features
- Bug fixes
- Performance improvements

### Documentación
- README improvements
- Architecture docs
- Inline code comments

### Tests
- Unit tests para nuevas funciones
- Bug reproduction tests

### Laboratorios
- Nuevos labs (después del MVP)
- Preguntas ICFES
- Guías docentes

## Preguntas?

- Abre un Issue con tag `question`
- Consulta [ARCHITECTURE.md](./ARCHITECTURE.md)
- Revisa [TECHNICAL_PRINCIPLES.md](../../Amauta/TECHNICAL_PRINCIPLES.md)

---

**¡Esperamos tu contribución!** ❤️
