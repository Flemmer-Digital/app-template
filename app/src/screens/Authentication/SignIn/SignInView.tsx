import React from 'react';
import {View, Text} from 'react-native';

import style from './SignInViewStyles';

const SignInView = ({authenticator, navigation}): JSX.Element => {
  return (
    <View style={style.outerContainer}>
      <Text style={style.text}>Sign In</Text>
    </View>
  );
};

export default SignInView;
