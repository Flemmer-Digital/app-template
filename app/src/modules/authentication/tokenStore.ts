import {
  setGenericPassword,
  getGenericPassword,
  resetGenericPassword,
} from 'react-native-keychain';
import NativeOauthToken from './nativeOauthToken';

let token: NativeOauthToken | null = null;

export const storeOauthToken = async (newToken: NativeOauthToken) => {
  await setGenericPassword(
    'oauth',
    JSON.stringify({
      accessToken: newToken.accessToken,
      refreshToken: newToken.refreshToken,
    }),
    // { service: '' }
  );
  token = newToken;
};

export const retrieveOauthToken = async () => {
  if (token) return token;

  //params: {service: ''}
  const credentials = await getGenericPassword();
  if (!credentials) return null;
  const {accessToken, refreshToken} = JSON.parse(credentials.password);
  token = new NativeOauthToken(accessToken, refreshToken);
  return token;
};

export const clearOauthToken = async () => {
  token = null;
  // params: {service: ''}
  await resetGenericPassword();
};
