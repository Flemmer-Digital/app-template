import {Platform} from 'react-native';
// import buildApiUrl from 'src/modules/utils/buildApiUrl';
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

const deviseIOSConfig = {
  clientId: 'dbb86dc2-aa17-45b1-bc49-63fdb2acbf22',
  redirectUrl: 'iosapp://oauth-redirect',
  scopes: [],
  serviceConfiguration: {
    authorizationEndpoint: buildApiUrl('/oauth/authorize'),
    tokenEndpoint: buildApiUrl('/oauth/token'),
  },
  additionalParameters: {
    prompt: 'login',
  },
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
