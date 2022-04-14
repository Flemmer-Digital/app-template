import React from 'react';

import UnauthenticatedNavigation from '../unauthenticatedNavigation/';

const MainNavigation = () => {
  const authenticated = false;
  if (!authenticated) return <UnauthenticatedNavigation />;
};

export default MainNavigation;
