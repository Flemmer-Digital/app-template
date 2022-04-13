import {authorize} from 'react-native-app-auth';
import config from './nativeOauthConfig';

const authenticate = async () => {
  console.log(authorize);
  const authState = await authorize(config);

  return authState;
};

export default authenticate
