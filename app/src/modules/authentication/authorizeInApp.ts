import {AuthConfiguration} from './nativeOauthConfig';
import {RequestAccessTokenResult} from './authenticate';
import buildApiUrl from '../utils/buildApiUrl';
import makeApiRequest from '../utils/makeApiRequest';
import {Buffer} from 'buffer';

export type credentials = {
  username: string; //can be email or phone
  password: string;
};

export const authenticateInApp = async (
  config: AuthConfiguration,
  credentials: credentials,
): Promise<RequestAccessTokenResult> => {
  const params = {
    grant_type: 'password',
    username: credentials.username,
    password: credentials.password,
    // client_id: config.clientId,
    // client_secret: config.secret as string,
  };
  const auth = Buffer.from(`${config.clientId}:${config.secret}`).toString(
    'base64',
  );
  const headers = {
    Authorization: `Basic ${auth}`,
  };
  const tokenUrl = buildApiUrl('/o/token/');
  const result = await makeApiRequest(tokenUrl, params, headers, 'POST');
  return {
    accessToken: result['access_token'],
    refreshToken: result['refresh_token'],
  };
};

export const forgotPasswordInApp = async () => {
  // send to forgot password view
};
