// 434565811503-q8014aondqou38fk9nfq4a6q4r1vsur0.apps.googleusercontent.com

const googleAuthConfig = {
  issuer: 'https://accounts.google.com',
  clientId:
    '434565811503-q8014aondqou38fk9nfq4a6q4r1vsur0.apps.googleusercontent.com',
  redirectUrl:
    'com.googleusercontent.apps.434565811503-q8014aondqou38fk9nfq4a6q4r1vsur0:/oauth2redirect/google',
  scopes: ['openid', 'profile'],
};

//TO DO:
//authenticate with rails database, need to add rails redirect to info.plist

const deviseAuthConfig = {
  clientId: '',
  redirectUrl: '',
  scopes: [],
  serviceConfiguration: {
    authorizationEndpoint: '', //localhost/oauth/authorize
    tokenEndpoint: '', //localhost/oauth/token
  },
  additionalParameters: {
    prompt: 'login',
  },
};

export default () => googleAuthConfig;
