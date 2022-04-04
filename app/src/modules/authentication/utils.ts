import {authorize, AuthConfiguration} from 'react-native-app-auth';

const requestAccessToken = async (config: AuthConfiguration) => {
  const result = authorize(config);
};
