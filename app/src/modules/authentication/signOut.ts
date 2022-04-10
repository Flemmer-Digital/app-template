import {clearOauthToken} from './tokenStore';
import RNRestart from 'react-native-restart';

export const signOut = async (): Promise<void> => {
  // doesn't reset graphql client - may need to add in
  await clearOauthToken();

  RNRestart.Restart();
};
