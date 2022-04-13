import React from 'react';

import SignInView from './SignInView';

const SignInContainer = ({navigation, authenticator}) => {
  return <SignInView authenticator={authenticator} navigation={navigation} />;
};

export default SignInContainer;
