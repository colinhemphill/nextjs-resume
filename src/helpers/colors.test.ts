import { ColorMode } from '@strum/colors';
import { describe, expect, test } from 'bun:test';
import { getAccentColor, getNeutralColor } from './colors';

describe('colors helpers', () => {
  describe('getAccentColor', () => {
    test('returns a color string for a valid shade', () => {
      const color = getAccentColor(5);
      expect(typeof color).toBe('string');
      expect(color).toMatch(/^#[0-9a-fA-F]{6}$/);
    });

    test('returns different colors for different shades', () => {
      const color1 = getAccentColor(1);
      const color5 = getAccentColor(5);
      const color12 = getAccentColor(12);

      expect(color1).not.toBe(color5);
      expect(color5).not.toBe(color12);
    });

    test('accepts theme parameter', () => {
      const lightColor = getAccentColor(5, ColorMode.Light);
      const darkColor = getAccentColor(5, ColorMode.Dark);

      expect(typeof lightColor).toBe('string');
      expect(typeof darkColor).toBe('string');
      expect(lightColor).toMatch(/^#[0-9a-fA-F]{6}$/);
      expect(darkColor).toMatch(/^#[0-9a-fA-F]{6}$/);
    });

    test('returns consistent color for the same shade and theme', () => {
      const color1 = getAccentColor(8);
      const color2 = getAccentColor(8);

      expect(color1).toBe(color2);
    });
  });

  describe('getNeutralColor', () => {
    test('returns a color string for a valid shade', () => {
      const color = getNeutralColor(5);
      expect(typeof color).toBe('string');
      expect(color).toMatch(/^#[0-9a-fA-F]{6}$/);
    });

    test('returns different colors for different shades', () => {
      const color1 = getNeutralColor(1);
      const color5 = getNeutralColor(5);
      const color12 = getNeutralColor(12);

      expect(color1).not.toBe(color5);
      expect(color5).not.toBe(color12);
    });

    test('accepts theme parameter', () => {
      const lightColor = getNeutralColor(5, ColorMode.Light);
      const darkColor = getNeutralColor(5, ColorMode.Dark);

      expect(typeof lightColor).toBe('string');
      expect(typeof darkColor).toBe('string');
      expect(lightColor).toMatch(/^#[0-9a-fA-F]{6}$/);
      expect(darkColor).toMatch(/^#[0-9a-fA-F]{6}$/);
    });

    test('returns consistent color for the same shade and theme', () => {
      const color1 = getNeutralColor(8);
      const color2 = getNeutralColor(8);

      expect(color1).toBe(color2);
    });
  });
});
