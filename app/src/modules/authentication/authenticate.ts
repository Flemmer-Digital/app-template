import {
  authorize,
  AuthConfiguration as RNAppAuthConfiguration,
} from 'react-native-app-auth';

import RWLock from '../synchronisation/RWLock';

import {retrieveOauthToken, storeOauthToken} from './tokenStore';

import NativeOauthToken from './nativeOauthToken';
import nativeOauthConfig, {AuthConfiguration} from './nativeOauthConfig';
import {signOut} from './signOut';
import apiConfiguration from 'app/src/config/api';
import { authenticateInApp, credentials } from './authorizeInApp'

let refreshing = false;
const tokenLock = new RWLock();

export class ExpiredAccessTokenException extends Error {}

export type RequestAccessTokenResult = {
  accessToken: string,
  refreshToken: string
}

const requestAccessToken = async (config: AuthConfiguration, loginCredentials?: credentials) => {
  let result: RequestAccessTokenResult
  const authType = apiConfiguration.authenticationLocation
  if (authType === 'web') 
    result = await authorize(config as RNAppAuthConfiguration);
  else if (authType === 'app' && loginCredentials)
    result = await authenticateInApp(config, loginCredentials); //change this
  else throw("Invalid Authentication Config")

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
  } catch (ex: any) {
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

export const withAccessToken = async <T>(
  // eslint-disable-next-line
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
  loginCredentials?: credentials
}

export const authenticate = async ({
  storedTokenOnly,
  loginCredentials
}: AuthenticateArgs): Promise<boolean> => {
  const hasToken = await hasAccessToken();

  if (hasToken) return true;
  if (storedTokenOnly) return false;

  await requestAccessToken(nativeOauthConfig(), loginCredentials && loginCredentials);

  return true;
};
