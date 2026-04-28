import { beforeEach, describe, expect, it } from 'vitest';
import { TEMPERATURE, VOLUME } from './constants';
import { StatesOfMatterModel } from './model';

describe('StatesOfMatterModel', () => {
  let model: StatesOfMatterModel;

  beforeEach(() => {
    model = new StatesOfMatterModel();
  });

  // ─── Estado según temperatura ───────────────────────────────────────────────

  describe('determineState', () => {
    it('returns solid below TEMPERATURE.SOLID_LIQUID', () => {
      const m = new StatesOfMatterModel(300);
      expect(m.getState().currentState).toBe('solid');
    });

    it('returns liquid between SOLID_LIQUID and LIQUID_GAS', () => {
      const m = new StatesOfMatterModel(340);
      expect(m.getState().currentState).toBe('liquid');
    });

    it('returns gas at LIQUID_GAS and above', () => {
      const m = new StatesOfMatterModel(400);
      expect(m.getState().currentState).toBe('gas');
    });

    it('returns solid exactly at TEMPERATURE.MIN', () => {
      const m = new StatesOfMatterModel(TEMPERATURE.MIN);
      expect(m.getState().currentState).toBe('solid');
    });

    it('returns gas exactly at TEMPERATURE.MAX', () => {
      const m = new StatesOfMatterModel(TEMPERATURE.MAX);
      expect(m.getState().currentState).toBe('gas');
    });
  });

  // ─── setTemperature ─────────────────────────────────────────────────────────

  describe('setTemperature', () => {
    it('clamps below TEMPERATURE.MIN', () => {
      model.setTemperature(100);
      expect(model.getState().temperature).toBe(TEMPERATURE.MIN);
    });

    it('clamps above TEMPERATURE.MAX', () => {
      model.setTemperature(9999);
      expect(model.getState().temperature).toBe(TEMPERATURE.MAX);
    });

    it('sets valid temperature exactly', () => {
      model.setTemperature(350);
      expect(model.getState().temperature).toBe(350);
    });

    it('triggers state transition on next update', () => {
      const m = new StatesOfMatterModel(300); // solid
      expect(m.getState().currentState).toBe('solid');
      m.setTemperature(400); // gas after update
      m.update(16);
      expect(m.getState().currentState).toBe('gas');
    });
  });

  // ─── setVolume ──────────────────────────────────────────────────────────────

  describe('setVolume', () => {
    it('clamps below VOLUME.MIN', () => {
      model.setVolume(0.1);
      expect(model.getState().volume).toBe(VOLUME.MIN);
    });

    it('clamps above VOLUME.MAX', () => {
      model.setVolume(99);
      expect(model.getState().volume).toBe(VOLUME.MAX);
    });

    it('sets valid volume exactly', () => {
      model.setVolume(1.5);
      expect(model.getState().volume).toBe(1.5);
    });

    it('updates container dimensions when volume changes', () => {
      model.setVolume(2.0);
      const { width, height } = model.getContainerSize();
      expect(width).toBe(800);
      expect(height).toBe(600);
    });
  });

  // ─── getPressure (Ley de Gay-Lussac + Ley de Boyle) ─────────────────────────

  describe('getPressure', () => {
    it('increases with temperature at constant volume (Gay-Lussac)', () => {
      const mLow = new StatesOfMatterModel(273);
      const mHigh = new StatesOfMatterModel(373);
      expect(mHigh.getPressure()).toBeGreaterThan(mLow.getPressure());
    });

    it('increases when volume decreases at constant temperature (Boyle)', () => {
      const mLarge = new StatesOfMatterModel(300);
      const mSmall = new StatesOfMatterModel(300);
      mLarge.setVolume(VOLUME.MAX);
      mSmall.setVolume(VOLUME.MIN);
      expect(mSmall.getPressure()).toBeGreaterThan(mLarge.getPressure());
    });

    it('is always positive', () => {
      expect(model.getPressure()).toBeGreaterThan(0);
    });
  });

  // ─── getDensity ─────────────────────────────────────────────────────────────

  describe('getDensity', () => {
    it('decreases as volume increases', () => {
      const mDense = new StatesOfMatterModel(300);
      const mSparse = new StatesOfMatterModel(300);
      mDense.setVolume(VOLUME.MIN);
      mSparse.setVolume(VOLUME.MAX);
      expect(mDense.getDensity()).toBeGreaterThan(mSparse.getDensity());
    });
  });

  // ─── update ─────────────────────────────────────────────────────────────────

  describe('update', () => {
    it('keeps all particles within container bounds after many frames', () => {
      for (let i = 0; i < 120; i++) model.update(16);

      const { width, height } = model.getContainerSize();
      for (const p of model.getParticles()) {
        expect(p.x).toBeGreaterThanOrEqual(0);
        expect(p.x).toBeLessThanOrEqual(width);
        expect(p.y).toBeGreaterThanOrEqual(0);
        expect(p.y).toBeLessThanOrEqual(height);
      }
    });

    it('particles at higher temperature have greater average speed', () => {
      const mLow = new StatesOfMatterModel(273);
      const mHigh = new StatesOfMatterModel(473);

      mLow.update(16);
      mHigh.update(16);

      const avgSpeed = (m: StatesOfMatterModel) =>
        m.getParticles().reduce((sum, p) => sum + Math.sqrt(p.vx ** 2 + p.vy ** 2), 0) /
        m.getParticles().length;

      expect(avgSpeed(mHigh)).toBeGreaterThan(avgSpeed(mLow));
    });
  });

  // ─── getParticles ────────────────────────────────────────────────────────────

  describe('getParticles', () => {
    it('returns 100 particles by default', () => {
      expect(model.getParticles().length).toBe(100);
    });

    it('particles start inside container bounds', () => {
      const { width, height } = model.getContainerSize();
      for (const p of model.getParticles()) {
        expect(p.x).toBeGreaterThanOrEqual(0);
        expect(p.x).toBeLessThanOrEqual(width);
        expect(p.y).toBeGreaterThanOrEqual(0);
        expect(p.y).toBeLessThanOrEqual(height);
      }
    });
  });

  // ─── reset ───────────────────────────────────────────────────────────────────

  describe('reset', () => {
    it('regenerates particles without changing state', () => {
      model.setTemperature(400);
      model.update(16);
      const stateBefore = model.getState();

      model.reset();

      expect(model.getParticles().length).toBe(100);
      expect(model.getState().temperature).toBe(stateBefore.temperature);
      expect(model.getState().currentState).toBe(stateBefore.currentState);
    });
  });
});
