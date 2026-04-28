export const TEMPERATURE = {
  MIN: 273,         // 0°C — límite inferior del slider
  MAX: 473,         // 200°C — límite superior del slider
  DEFAULT: 300,     // 27°C — temperatura inicial
  SOLID_LIQUID: 320, // 47°C — punto de fusión (simplificado)
  LIQUID_GAS: 373,  // 100°C — punto de ebullición (agua)
} as const;

export const VOLUME = {
  MIN: 0.5,
  MAX: 2.0,
  DEFAULT: 1.0,
} as const;

export const CONTAINER = {
  WIDTH: 400,
  HEIGHT: 300,
} as const;

export const PARTICLE = {
  COUNT: 100,
  RADIUS: 3,
  MASS: 1.0,
} as const;

// Constante de Boltzmann (J/K) — usada para cálculo de presión real
export const BOLTZMANN = 1.380649e-23;
