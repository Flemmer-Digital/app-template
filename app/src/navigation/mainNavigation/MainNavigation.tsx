import React from 'react';

import useAuthenticator from '../useAuthenticator';
import UnauthenticatedNavigation from '../unauthenticatedNavigation/';

const MainNavigation = () => {
  const authenticator = useAuthenticator();
  console.log(authenticator.authenticated);
  if (!authenticator.authenticated) return <UnauthenticatedNavigation />;
};

export default MainNavigation;
