import React from 'react';

import SignInView from './SignInView';

const SignInContainer = ({navigation, authenticator}) => {
  console.log(navigation)
  return <SignInView authenticator={authenticator} navigation={navigation} />;
};

export default SignInContainer;
