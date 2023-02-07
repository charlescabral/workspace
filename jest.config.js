module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/.stories.tsx',
    '!src/components/SvgIcons/**',
    '!src/**/*.d.ts',
    '!src/styles/**',
    '!src/pages/**',
    '!<rootDir>/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/coverage/**',
    '!**/.storybook/**',
    '!**/storybook-static/**',
    '!**/*stories.*',
    '!<rootDir>/public/mockServiceWorker.js'
  ],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1'
  }
}
