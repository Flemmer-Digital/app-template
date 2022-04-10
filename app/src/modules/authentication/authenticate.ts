import {authorize} from 'react-native-app-auth';
import config from './nativeOauthConfig';

export const authenticate = async () => {
  console.log(authorize)
  const authState = await authorize(config);

  return authState
};
