const googleIOSConfig = {
  issuer: 'https://accounts.google.com',
  clientId:
    '434565811503-q8014aondqou38fk9nfq4a6q4r1vsur0.apps.googleusercontent.com',
  redirectUrl:
    'com.googleusercontent.apps.434565811503-q8014aondqou38fk9nfq4a6q4r1vsur0:/oauth2redirect/google',
  scopes: ['openid', 'profile'],
};

const deviseIOSConfig = {
  clientId: 'dbb86dc2-aa17-45b1-bc49-63fdb2acbf22',
  redirectUrl: 'iosapp://oauth-redirect',
  scopes: [],
  serviceConfiguration: {
    authorizationEndpoint: 'http://localhost:3000/oauth/authorize',
    tokenEndpoint: 'http://localhost:3000/oauth/token',
  },
  additionalParameters: {
    prompt: 'login',
  },
};

const deviseAndroidConfig = {
  clientId: '4de6cabc-99e4-44d4-a410-4cbcce728956',
  redirectUrl: 'androidapp://oauth-redirect',
  scopes: [],
  serviceConfiguration: {
    authorizationEndpoint: 'http://localhost:3000/oauth/authorize',
    tokenEndpoint: 'http://localhost:3000/oauth/token',
  },
  additionalParameters: {
    prompt: 'login',
  },
};

export default () => deviseAndroidConfig;
