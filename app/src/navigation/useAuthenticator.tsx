import React from 'react';

export interface Authenticator {
  authenticated: boolean;
  authenticating: boolean;
  error: string | null;
  authenticate: () => void;
}

const defaultState = {
  authenticated: false,
  authenticating: false,
  error: null,
};

const useAuthenticator = (): Authenticator => {
  const [state, setState] = React.useState(defaultState);

  const authenticatedWithState = React.useCallback(
    (storedTokenOnly: boolean) => {},
    [],
  );

  return {
    authenticate: () => authenticatedWithState(false),
    authenticated: state.authenticated,
    authenticating: state.authenticating,
    error: state.error,
  };
};
