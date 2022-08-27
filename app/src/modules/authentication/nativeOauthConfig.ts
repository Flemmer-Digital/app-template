import {Platform} from 'react-native';
import buildApiUrl from '../utils/buildApiUrl';

type ServiceConfiguration = {
  authorizationEndpoint: string;
  tokenEndpoint: string;
};

export interface AuthConfiguration {
  clientId: string;
  redirectUrl: string;
  scopes: string[];
  issuer?: string;
  dangerouslyAllowInsecureHttpRequests?: boolean;
  serviceConfiguration?: ServiceConfiguration;
  additionalParameters?: {prompt: string};
  secret?: string;
}

const googleIOSConfig = {
  issuer: 'https://accounts.google.com',
  clientId:
    '434565811503-q8014aondqou38fk9nfq4a6q4r1vsur0.apps.googleusercontent.com',
  redirectUrl:
    // eslint-disable-next-line
    'com.googleusercontent.apps.434565811503-q8014aondqou38fk9nfq4a6q4r1vsur0:/oauth2redirect/google',
  scopes: ['openid', 'profile'],
};
// iosapp://oauth-redirect
const deviseIOSConfig = {
  clientId: 'id',
  redirectUrl: 'http://localhost:8000',
  scopes: ['read', 'write'],
  serviceConfiguration: {
    authorizationEndpoint: buildApiUrl('/o/authorize'),
    tokenEndpoint: buildApiUrl('/o/token'),
  },
  // additionalParameters: {
  //   prompt: 'login',
  // },
  secret: 'secret',
};

const deviseAndroidConfig = {
  clientId: '4de6cabc-99e4-44d4-a410-4cbcce728956',
  redirectUrl: 'androidapp://oauth-redirect',
  dangerouslyAllowInsecureHttpRequests: __DEV__,
  scopes: [],
  serviceConfiguration: {
    authorizationEndpoint: buildApiUrl('/oauth/authorize'),
    tokenEndpoint: buildApiUrl('/oauth/token'),
  },
  additionalParameters: {
    prompt: 'login',
  },
  secret: 'fZDPcUTf1jFcTk25QrZDMda0tuIivvleEovnw389hy4',
};

const iosAuthMethod = {
  rails: deviseIOSConfig,
  google: googleIOSConfig,
};

const androidAuthMethods = {
  rails: deviseAndroidConfig,
  google: null,
};

type AuthenticationMethod = 'rails' | 'google';

const authenticationConfig = (method: AuthenticationMethod) => {
  let authConfig: AuthConfiguration | null;
  switch (Platform.OS) {
    case 'ios':
      authConfig = iosAuthMethod[method];
      break;
    case 'android':
      authConfig = androidAuthMethods[method];
      break;
    default:
      authConfig = null;
  }
  if (!authConfig) throw 'Invalid Authentication Configuration';
  return authConfig;
};

export default (method: AuthenticationMethod = 'rails'): AuthConfiguration =>
  authenticationConfig(method);
