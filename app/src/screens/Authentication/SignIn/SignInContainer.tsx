import React from 'react';

import SignInView from './SignInView';

const SignInContainer = ({authenticator}) => {
  return <SignInView authenticator={authenticator} />;
};

export default SignInContainer;
