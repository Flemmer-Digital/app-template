import React from 'react';
import {View, Text, Pressable} from 'react-native';

import style from './SignInViewStyles';
import {Authenticator} from 'app/src/navigation/useAuthenticator';

const SignInView = ({
  authenticate,
}: {
  authenticate: Authenticator['authenticate'];
}): JSX.Element => {
  return (
    <Pressable onPress={authenticate}>
      <View style={style.outerContainer}>
        <Text style={style.text}>Sign In/Register</Text>
      </View>
    </Pressable>
  );
};

export default SignInView;
