import React from 'react';

import SignInView from './SignInView';
import {Authenticator} from 'app/src/navigation/useAuthenticator';

const SignInContainer = ({authenticator}: {authenticator: Authenticator}) => {
  return <SignInView authenticator={authenticator} />;
};

export default SignInContainer;
