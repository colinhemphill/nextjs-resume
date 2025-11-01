import { describe, expect, test } from 'bun:test';
import { deployURL, development, protocol } from './environment';

describe('environment helpers', () => {
  test('deployURL is a string or undefined', () => {
    expect(deployURL === undefined || typeof deployURL === 'string').toBe(true);
  });

  test('development is a boolean', () => {
    expect(typeof development).toBe('boolean');
  });

  test('development matches NODE_ENV', () => {
    const isDevelopment = process.env.NODE_ENV === 'development';
    expect(development).toBe(isDevelopment);
  });

  test('protocol is either http or https', () => {
    expect(['http', 'https']).toContain(protocol);
  });

  test('protocol is http when in development mode', () => {
    if (development) {
      expect(protocol).toBe('http');
    }
  });

  test('protocol is https when not in development mode', () => {
    if (!development) {
      expect(protocol).toBe('https');
    }
  });
});
