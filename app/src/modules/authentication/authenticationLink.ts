import {from} from '@apollo/client';
import * as Sentry from '@sentry/react-native';

import {RetryLink} from '@apollo/client/link/retry';
import {setContext} from '@apollo/client/link/context';

import {getAccessToken, refreshAccessToken} from './authenticate';

const AddAuthHeaderLink = setContext(async (operation, context) => {
  const authorization = `Bearer ${await getAccessToken()}`;

  return {...context, headers: {...context.headers, authorization}};
});

const RefreshRetryLink = new RetryLink({
  attempts: {
    max: 2,
    retryIf: async err => {
      if (err.statusCode !== 401) {
        return false;
      }

      try {
        await refreshAccessToken();
      } catch (ex: any) {
        // eslint-disable-next-line no-param-reassign
        err.message = ex.message;

        Sentry.addBreadcrumb({
          category: 'Oauth Tokens',
          message: ex.message,
          level: 'error' as Sentry.Severity,
        });

        return false;
      }

      return true;
    },
  },
});

const AuthenticationLink = from([RefreshRetryLink, AddAuthHeaderLink]);

export default AuthenticationLink;
