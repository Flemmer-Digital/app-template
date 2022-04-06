// Need to use require syntax here because this file as accessed outside the transform.
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */

import 'react-native-gesture-handler/jestSetup';
import '@testing-library/jest-native/extend-expect';
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';
import {metricDisplayUnit} from '@playerdata/playerdata-core/lib/conversion';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';
import './mocks/react-native-tab-view';

const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
const Enzyme = require('enzyme');
const fetchMock = require('fetch-mock');
const tk = require('timekeeper');

Enzyme.configue({adapter: new Adapter()});

beforeEach(() => {
  global.fetch = fetchMock.sandbox();
});

afterEach(() => {
  tk.reset();
  fetchMock.reset();
});

require('react-native-reanimated/lib/reanimated2/jestUtils').setUpTests();
// Mock out reanimated globally using their mock to allow tests to work
jest.mock('react-native-reanimated', () => ({
  ...jest.requireActual('react-native-reanimated/mock'),
  interpolate: f => f,
}));

// See https://github.com/oblador/react-native-keychain/issues/192
jest.mock('react-native-keychain', () => ({
  getGenericPassword: jest.fn(),
  resetGenericPassword: jest.fn(),
  setGenericPassword: jest.fn(),
}));

// Mock out the icons library in the test environment
jest.mock('react-native-vector-icons/Ionicons');

// Ignore React Web errors when using React Native. Required to use enzyme's `mount`
// Yes. This is horribe. I really wish there was a better way.
const suppressedErrors = /(React does not recognize the.*prop on a DOM element|Unknown event handler property|is using uppercase HTML|The tag.*is unrecognized in this browser|is using incorrect casing|If you want to write it to the DOM)/;
const realConsoleError = console.error;
console.error = message => {
  if (message.match(suppressedErrors)) {
    return;
  }
  realConsoleError(message);
};

// Mock Native Modules

jest.mock('react-native-share', () => ({
  default: jest.fn(),
}));

jest.mock('rn-fetch-blob', () => ({
  default: jest.fn(),
}));

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);

jest.mock('react-native-ble-mesh/src', () => ({}));

jest.mock('react-native-ble-plx', () => ({
  ...jest.requireActual('react-native-ble-plx'),
  BleManager: jest.fn(() => ({
    cancelDeviceConnection: jest.fn(),
    connectToDevice: jest.fn(),
    onStateChange: jest.fn(),
    startDeviceScan: jest.fn(),
    state: jest.fn(),
    stopDeviceScan: jest.fn(),
  })),
}));

jest.mock('react-native-unimodules', () => ({
  FileSystem: {
    deleteAsync: jest.fn(),
    documentDirectory: '/tmp',
    makeDirectoryAsync: jest.fn(),
    writeAsStringAsync: jest.fn(),
    uploadAsync: jest.fn(),
  },
}));

const sentryTypes = jest.requireActual('@sentry/types');
jest.mock('@sentry/react-native', () => ({
  addBreadcrumb: jest.fn(),
  captureException: jest.fn(),
  flush: jest.fn(),
  Severity: sentryTypes.Severity,
}));

jest.mock('@react-native-clipboard/clipboard', () => ({
  useClipboard: () => [undefined, jest.fn()],
}));

jest.mock('react-native-safe-area-context', () => ({
  ...mockSafeAreaContext,
  useSafeAreaInsets: () => ({bottom: 0}),
}));

jest.mock('react-native-maps', () => {
  const {View} = require('react-native');

  return {
    __esModule: true,
    default: View,
  };
});

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useIsFocused: jest.fn(),
  useNavigation: jest.fn(),
  useRoute: () => ({params: {}}),
}));

const noOp = x => x;
const useUnitConversionMock = () => ({
  convertValue: noOp,
  convertValueBack: noOp,
  displayUnit: metricDisplayUnit,
  isImperial: false,
});

jest.mock('@playerdata/playerdata-core/lib/conversion', () => ({
  ...jest.requireActual('@playerdata/playerdata-core/lib/conversion'),
  useUnitConversion: useUnitConversionMock,
}));
jest.mock(
  '@playerdata/playerdata-core/lib/conversion/useUnitConversion',
  () => useUnitConversionMock,
);

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('@playerdata/react-native-mcu-manager', () => ({}));
jest.mock('@react-native-firebase/analytics', () => ({}));
jest.mock('@react-native-firebase/app', () => ({}));
jest.mock('@react-native-firebase/messaging', () => ({}));
jest.mock('react-native-code-push', () => ({}));
jest.mock('react-native-document-picker', () => ({}));
jest.mock('react-native-image-picker', () => ({}));
jest.mock('react-native-screens', () => ({}));
jest.mock('scandit-react-native-datacapture-core', () => ({}));
r;
