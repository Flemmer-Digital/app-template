import {AuthConfiguration, refresh} from 'react-native-app-auth';
import {differenceInSeconds} from 'date-fns';
import {storeOauthToken} from './tokenStore';
import {signOut} from './signOut';
import nativeOauthConfig from './nativeOauthConfig';

export default class NativeOauthToken {
  public accessToken: string;
  public refreshToken: string | null;

  private lastRefreshedAt: Date;

  public constructor(accessToken: string, refreshToken: string) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.lastRefreshedAt = new Date(0);
  }

  public async refresh() {
    if (differenceInSeconds(new Date(), this.lastRefreshedAt) < 60) return;

    try {
      if (!this.refreshToken) throw new Error('No refresh token');

      const {accessToken, refreshToken} = await refresh(
        nativeOauthConfig() as AuthConfiguration,
        {refreshToken: this.refreshToken},
      );

      this.accessToken = accessToken;
      this.refreshToken = refreshToken;
      this.lastRefreshedAt = new Date();

      await storeOauthToken(this);
    } catch (e) {
      // save error somwhere
      signOut();
    }
  }
}
