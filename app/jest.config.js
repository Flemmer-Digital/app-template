const { jsWithTs: tsjPreset } = require('ts-jest/presets');

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'react-native',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transformIgnorePatterns: ['node_modules/(?!react-router-native)/'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  setupFilesAfterEnv: [require.resolve('regenerator-runtime/runtime'), '<rootDir>/test/setup.js'],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>../node_modules', '.'],
  moduleFileExtensions: ['ts', 'tsx', 'native.ts', 'native.tsx', 'js', 'native.js', 'json', 'd.ts'],
  resetMocks: true,
  restoreMocks: true,
  coverageDirectory: 'test-report/native',
  coverageReporters: ['text', 'cobertura'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],

  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};
