const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // path to load next.config.js and .env files in your test environment
  dir: './',
});

// add any custom config to be passed to Jest
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFiles: ['<rootDir>/src/test/setupTests.ts'],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
