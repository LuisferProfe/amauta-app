import { BOLTZMANN, CONTAINER, PARTICLE, TEMPERATURE, VOLUME } from './constants';

export type MatterState = 'solid' | 'liquid' | 'gas';

export interface Particle {
  readonly id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  readonly mass: number;
  readonly radius: number;
}

export interface ThermodynamicState {
  readonly temperature: number;
  readonly volume: number;
  readonly currentState: MatterState;
  readonly transitionProgress: number;
}

export class StatesOfMatterModel {
  private state: ThermodynamicState;
  private containerWidth: number;
  private containerHeight: number;
  private particles: Particle[];

  constructor(
    initialTemp: number = TEMPERATURE.DEFAULT,
    initialVolume: number = VOLUME.DEFAULT
  ) {
    const clampedTemp = Math.max(TEMPERATURE.MIN, Math.min(TEMPERATURE.MAX, initialTemp));
    const clampedVol = Math.max(VOLUME.MIN, Math.min(VOLUME.MAX, initialVolume));

    this.state = {
      temperature: clampedTemp,
      volume: clampedVol,
      currentState: this.determineState(clampedTemp),
      transitionProgress: 0,
    };
    this.containerWidth = CONTAINER.WIDTH * clampedVol;
    this.containerHeight = CONTAINER.HEIGHT * clampedVol;
    this.particles = this.generateParticles();
  }

  private determineState(temp: number): MatterState {
    if (temp < TEMPERATURE.SOLID_LIQUID) return 'solid';
    if (temp < TEMPERATURE.LIQUID_GAS) return 'liquid';
    return 'gas';
  }

  private generateParticles(n: number = PARTICLE.COUNT): Particle[] {
    return Array.from({ length: n }, (_, i) => ({
      id: `particle-${i}`,
      x: PARTICLE.RADIUS + Math.random() * (this.containerWidth - PARTICLE.RADIUS * 2),
      y: PARTICLE.RADIUS + Math.random() * (this.containerHeight - PARTICLE.RADIUS * 2),
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      mass: PARTICLE.MASS,
      radius: PARTICLE.RADIUS,
    }));
  }

  update(deltaTime: number): void {
    this.updateVelocitiesFromTemperature();

    // Normalizar a 60fps para consistencia independiente del framerate
    const dt = (deltaTime / 1000) * 60;

    for (const p of this.particles) {
      p.x += p.vx * dt;
      p.y += p.vy * dt;

      // Rebote en bordes con corrección de posición
      if (p.x <= p.radius) {
        p.x = p.radius;
        p.vx = Math.abs(p.vx);
      } else if (p.x >= this.containerWidth - p.radius) {
        p.x = this.containerWidth - p.radius;
        p.vx = -Math.abs(p.vx);
      }

      if (p.y <= p.radius) {
        p.y = p.radius;
        p.vy = Math.abs(p.vy);
      } else if (p.y >= this.containerHeight - p.radius) {
        p.y = this.containerHeight - p.radius;
        p.vy = -Math.abs(p.vy);
      }
    }

    const newState = this.determineState(this.state.temperature);
    if (newState !== this.state.currentState) {
      this.state = { ...this.state, currentState: newState, transitionProgress: 0 };
    }
  }

  private updateVelocitiesFromTemperature(): void {
    // Teoría cinética: velocidad cuadrática media ∝ sqrt(T)
    const targetSpeed = Math.sqrt(this.state.temperature / TEMPERATURE.MIN);

    for (const p of this.particles) {
      const currentSpeed = Math.sqrt(p.vx ** 2 + p.vy ** 2);
      if (currentSpeed > 0) {
        const factor = targetSpeed / currentSpeed;
        p.vx *= factor;
        p.vy *= factor;
      } else {
        const angle = Math.random() * Math.PI * 2;
        p.vx = Math.cos(angle) * targetSpeed;
        p.vy = Math.sin(angle) * targetSpeed;
      }
    }
  }

  setTemperature(temp: number): void {
    const clamped = Math.max(TEMPERATURE.MIN, Math.min(TEMPERATURE.MAX, temp));
    this.state = { ...this.state, temperature: clamped };
  }

  setVolume(vol: number): void {
    const clamped = Math.max(VOLUME.MIN, Math.min(VOLUME.MAX, vol));
    this.state = { ...this.state, volume: clamped };
    this.containerWidth = CONTAINER.WIDTH * clamped;
    this.containerHeight = CONTAINER.HEIGHT * clamped;
  }

  getParticles(): readonly Particle[] {
    return this.particles;
  }

  getState(): ThermodynamicState {
    return { ...this.state };
  }

  getContainerSize(): { width: number; height: number } {
    return { width: this.containerWidth, height: this.containerHeight };
  }

  // P ∝ (N × k × T) / V — aproximación macroscópica
  getPressure(): number {
    const N = this.particles.length;
    const T = this.state.temperature;
    const V = this.state.volume;
    return (N * BOLTZMANN * T) / V;
  }

  getDensity(): number {
    return this.particles.length / (this.state.volume * 100);
  }

  reset(): void {
    this.particles = this.generateParticles();
  }
}
