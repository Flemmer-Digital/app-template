import React from 'react';
import {View, Text, Pressable} from 'react-native';

import style from './SignInViewStyles';
import {Authenticator} from 'app/src/navigation/useAuthenticator';

const SignInView = ({
  authenticator,
}: {
  authenticator: Authenticator;
}): JSX.Element => {
  console.log(authenticator);
  return (
    <Pressable onPress={authenticator.authenticate}>
      <View style={style.outerContainer}>
        <Text style={style.text}>Sign In</Text>
      </View>
    </Pressable>
  );
};

export default SignInView;
