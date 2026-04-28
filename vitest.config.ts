import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Los modelos de simulación deben correr en Node puro (sin DOM).
    // Si un test necesita jsdom, el modelo está mal diseñado.
    environment: 'node',
    include: ['src/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      include: ['src/lib/models/**/*.ts'],
      exclude: ['src/lib/models/**/*.test.ts', 'src/lib/models/**/*.d.ts'],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
  },
});
