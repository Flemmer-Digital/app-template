import {authorize} from 'react-native-app-auth';
import config from './nativeOauthConfig';

export const authenticate = () => {
  const authState = authorize(config);
  console.log(authState);
};
