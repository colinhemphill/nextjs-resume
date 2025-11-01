import { describe, expect, test } from 'bun:test';
import { cn, fullName, getFormattedDate, initials } from './utilities';

describe('utilities helpers', () => {
  describe('fullName', () => {
    test('is a non-empty string', () => {
      expect(typeof fullName).toBe('string');
      expect(fullName.length).toBeGreaterThan(0);
    });

    test('contains a space (first and last name)', () => {
      expect(fullName).toContain(' ');
    });
  });

  describe('initials', () => {
    test('is a string with exactly 2 characters', () => {
      expect(typeof initials).toBe('string');
      expect(initials.length).toBe(2);
    });

    test('is uppercase', () => {
      expect(initials).toBe(initials.toUpperCase());
    });
  });

  describe('getFormattedDate', () => {
    test('formats ISO date string to short month and year', () => {
      const result = getFormattedDate('2023-06-15');
      expect(result).toMatch(/[A-Za-z]{3} \d{4}/);
    });

    test('returns correct format for different dates', () => {
      const date1 = getFormattedDate('2020-01-01');
      const date2 = getFormattedDate('2021-12-31');

      expect(date1).toContain('2020');
      expect(date2).toContain('2021');
    });

    test('handles dates with timestamps', () => {
      const result = getFormattedDate('2023-06-15T10:30:00Z');
      expect(result).toMatch(/[A-Za-z]{3} \d{4}/);
    });
  });

  describe('cn', () => {
    test('merges class names', () => {
      const result = cn('class1', 'class2');
      expect(result).toContain('class1');
      expect(result).toContain('class2');
    });

    test('handles conditional classes', () => {
      const result = cn('base', false && 'conditional', 'always');
      expect(result).toContain('base');
      expect(result).toContain('always');
      expect(result).not.toContain('conditional');
    });

    test('handles Tailwind class conflicts', () => {
      const result = cn('px-2', 'px-4');
      expect(result).toBe('px-4');
    });

    test('handles objects', () => {
      const result = cn({ 'text-red': true, 'text-blue': false });
      expect(result).toContain('text-red');
      expect(result).not.toContain('text-blue');
    });

    test('handles arrays', () => {
      const result = cn(['class1', 'class2']);
      expect(result).toContain('class1');
      expect(result).toContain('class2');
    });

    test('returns empty string for no arguments', () => {
      const result = cn();
      expect(result).toBe('');
    });

    test('filters out falsy values', () => {
      const result = cn('class1', undefined, undefined, false, 'class2');
      expect(result).toContain('class1');
      expect(result).toContain('class2');
      expect(result.length).toBeLessThan(20);
    });
  });
});
