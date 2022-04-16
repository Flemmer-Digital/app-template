import {authorize, AuthConfiguration} from 'react-native-app-auth';

import RWLock from '../synchronisation/RWLock';

import {retrieveOauthToken, storeOauthToken} from './tokenStore';

import NativeOauthToken from './nativeOauthToken';
import nativeOauthConfig from './nativeOauthConfig';
import {signOut} from './signOut';

let refreshing = false;
const tokenLock = new RWLock();

export class ExpiredAccessTokenException extends Error {}

const requestAccessToken = async (config: AuthConfiguration) => {
  const result = await authorize(config);

  const token = new NativeOauthToken(result.accessToken, result.refreshToken);

  await storeOauthToken(token);
};

const hasAccessToken = async (): Promise<boolean> =>
  !!(await retrieveOauthToken());

const refreshToken = async () => {
  const token = await retrieveOauthToken();

  if (!token) {
    throw new Error('attempting to refresh but no token?');
  }

  try {
    await token.refresh();
  } catch (ex) {
    if (ex.message && ex.message.includes('invalid_grant')) {
      await signOut();
    }

    throw ex;
  }
};

export const getAccessToken = async (): Promise<string> => {
  await tokenLock.checkRead();

  const token = await retrieveOauthToken();

  if (!token) {
    throw new Error('No access token');
  }

  return token.accessToken;
};

export const refreshAccessToken = async (): Promise<void> => {
  if (!refreshing) {
    refreshing = true;
    await tokenLock.withWriteLock(async () => {
      await refreshToken();
    });
    refreshing = false;
  }
};

/**
 * Calls the provided function with an access token.
 * If the function raises an ExpiredAccessTokenException it will be retried once with a refreshed access token
 */
export const withAccessToken = async <T>(
  callback: (accessToken: string) => Promise<T>,
): Promise<T> => {
  try {
    return await callback(await getAccessToken());
  } catch (ex) {
    if (ex instanceof ExpiredAccessTokenException) {
      await refreshAccessToken();
      return callback(await getAccessToken());
    }

    throw ex;
  }
};

interface AuthenticateArgs {
  storedTokenOnly: boolean;
}

export const authenticate = async ({
  storedTokenOnly,
}: AuthenticateArgs): Promise<boolean> => {
  const hasToken = await hasAccessToken();

  if (hasToken) return true;
  if (storedTokenOnly) return false;

  await requestAccessToken(await nativeOauthConfig());

  return true;
};
