import authConfiguration from './nativeOauthConfig';
import {Platform} from 'react-native';

Platform.OS = 'ios';

it('returns a rails config for ios', () => {
  const railsConfig = authConfiguration('rails');
  expect(railsConfig.clientId).toBeTruthy();
  expect(railsConfig.redirectUrl).toEqual('iosapp://oauth-redirect');
});

it('returns a google config for ios', () => {
  const googleConfig = authConfiguration('google');
  expect(googleConfig.issuer).toEqual('https://accounts.google.com');
  expect(googleConfig.clientId).toBeTruthy();
  expect(googleConfig.redirectUrl).toBeTruthy();
});

it('returns a rails config for android', () => {
  Platform.OS = 'android';
  const railsConfig = authConfiguration('rails');
  expect(railsConfig.clientId).toBeTruthy();
  expect(railsConfig.redirectUrl).toEqual('androidapp://oauth-redirect');
});

it('throws an error if no config is available', () => {
  Platform.OS = 'macos';
  try {
    authConfiguration('rails');
  } catch (ex: any) {
    expect(ex).toEqual('Invalid Authentication Configuration');
  }
});
