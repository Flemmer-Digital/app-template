import {
  setGenericPassword,
  getGenericPassword,
  resetGenericPassword,
} from 'react-native-keychain';

let token = null;

export const storeOauthToken = async newToken => {
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
