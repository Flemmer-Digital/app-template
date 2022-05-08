import { AuthConfiguration } from "./nativeOauthConfig"
import { RequestAccessTokenResult } from "./authenticate"
import buildApiUrl from "../utils/buildApiUrl"
import makeApiRequest from '../utils/makeApiRequest'

export type credentials = {
  username: string, //can be email or phone
  password: string,
}

export const authenticateInApp = async (
  config: AuthConfiguration,
  credentials: credentials
): Promise<RequestAccessTokenResult> => {
  const params = {
      grant_type: 'password',
      username: credentials.username,
      password: credentials.password,
      client_id: config.clientId,
      client_secret: config.secret
  }
  const tokenUrl = buildApiUrl('/oauth/token', params)
  const result = await makeApiRequest(tokenUrl, 'POST')
  return {
    accessToken: result['access_token'],
    refreshToken: result['refresh_token']
  }
}

export const registerInApp = async (
  config: AuthConfiguration,
  credentials: credentials
) => {

}

export const forgotPasswordInApp = async (

) => {
  // send to forgot password view

}
