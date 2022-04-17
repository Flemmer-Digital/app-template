import React from 'react';

import useAuthenticator from '../useAuthenticator';
import UnauthenticatedNavigation from '../unauthenticatedNavigation/';

const MainNavigation = () => {
  const authenticator = useAuthenticator();
  if (!authenticator.authenticated)
    return <UnauthenticatedNavigation authenticator={authenticator} />;

  return <UnauthenticatedNavigation authenticator={authenticator} />;
};

export default MainNavigation;
