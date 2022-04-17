import React from 'react';

import useAuthenticator from '../useAuthenticator';
import UnauthenticatedNavigation from '../unauthenticatedNavigation/';
import AuthenticatedNavigation from '../authenticatedNavigation/AuthenticatedNavigation';

const MainNavigation = () => {
  const authenticator = useAuthenticator();
  if (!authenticator.authenticated)
    return <UnauthenticatedNavigation authenticator={authenticator} />;

  return <AuthenticatedNavigation authenticator={authenticator} />;
};

export default MainNavigation;
