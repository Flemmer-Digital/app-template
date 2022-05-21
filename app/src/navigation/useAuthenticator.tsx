import React from 'react';

// import {useApolloClient} from '@apollo/client';
import * as Sentry from '@sentry/react-native';

import {authenticate} from 'app/src/modules/authentication/authenticate';
import {credentials} from '../modules/authentication/authorizeInApp';
// import registerDevice from 'src/modules/firebase/notifications/register';
// import sentrySetCurrentUser from 'app/src/components/utils/setCurrentUser';

export interface Authenticator {
  authenticated: boolean;
  authenticating: boolean;
  error: string | null;
  // eslint-disable-next-line
  authenticate: (loginCredentials?: credentials) => Promise<void>;
}

const defaultState = {
  authenticated: false,
  authenticating: false,
  error: null,
};

const useAuthenticator = (): Authenticator => {
  const [state, setState] = React.useState(defaultState);
  // const apolloClient = useApolloClient();

  const authenticateWithState = React.useCallback(
    async (storedTokenOnly: boolean, loginCredentials?: credentials) => {
      setState(prevState => ({...prevState, authenticating: true}));

      try {
        const result = await authenticate({storedTokenOnly, loginCredentials});
        setState(prevState => ({
          ...prevState,
          authenticating: false,
          authenticated: !!result,
        }));

        if (!result) return;

        // await sentrySetCurrentUser(apolloClient);
        // await registerDevice(apolloClient);
      } catch (err: any) {
        const errorString = err.toString();

        // Ignore user cancellations,
        // waiting on a better way to do this:
        // https://github.com/FormidableLabs/react-native-app-auth/issues/565
        if (
          errorString === 'Error: User cancelled flow' ||
          errorString ===
            'Error: The operation couldnt be completed. (org.openid.appauth.general error -3.)'
        ) {
          setState(prevState => ({
            ...prevState,
            authenticated: false,
            authenticating: false,
          }));
          return;
        }

        setState(prevState => ({
          ...prevState,
          error: err.toString(),
          authenticating: false,
        }));
        Sentry.captureException(err);
      }
    },
    [],
    // [apolloClient],
  );

  React.useEffect(() => {
    authenticateWithState(true);
  }, [authenticateWithState]);

  return {
    authenticate: (loginCredentials?: credentials) =>
      authenticateWithState(false, loginCredentials),
    authenticated: state.authenticated,
    authenticating: state.authenticating,
    error: state.error,
  };
};

export default useAuthenticator;
