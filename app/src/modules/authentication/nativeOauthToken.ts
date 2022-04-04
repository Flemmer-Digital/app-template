import {refresh} from 'react-native-app-auth';
import { differenceInSeconds } from 'date-fns'
import { storeOauthToken } from './tokenStore'

class NativeOauthToken {
  public accessToken: string;
  public refreshToken: string | null;

  private lastRefreshedAt: Date;

  public constructor(accessToken: string, refreshToken: string) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.lastRefreshedAt = new Date(0);
  }

  public refresh async(){
    if (differenceInSeconds(new Date(), this.lastRefreshedAt) < 60) return;

    try {
    if (!this.refreshToken) throw new Error('No refresh token')

    const { accessToken, refreshToken } = await refresh(await nativeOauthConfig(), {refreshToken: this.refreshToken})

    this.accessToken = accessToken
    this.refreshToken = refreshToken
    this.lastRefreshedAt = new Date()

    await storeOauthToken(this)
    } catch(e) {
      // save error somwhere
      softSignout()
    }
  }
}
