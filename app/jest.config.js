const {jsWithTs: tsjPreset} = require('ts-jest/presets');

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'react-native',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transformIgnorePatterns: ['node_modules/(?!react-router-native)/'],
  transform: {
    '^.+\\.jsx?$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    ...tsjPreset.transform,
  },
  setupFilesAfterEnv: [
    require.resolve('regenerator-runtime/runtime'),
    '<rootDir>/test/setup.js',
    // './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  // snapshotSerializers: ['enzyme-to-json/serializer', 'jest-serializer-gql'],
  testRegex: '/(\\w+)\\.test\\.tsx?$',
  testMatch: null,
  moduleDirectories: [
    '<rootDir>/node_modules',
    '<rootDir>../node_modules',
    '<rootDir>/src',
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'native.ts',
    'native.tsx',
    'js',
    'native.js',
    'json',
    'd.ts',
  ],
  resetMocks: true,
  restoreMocks: true,
  reporters: ['default', 'jest-junit'],
  coverageDirectory: 'test-report/native',
  coverageReporters: ['text', 'cobertura'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],

  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};
