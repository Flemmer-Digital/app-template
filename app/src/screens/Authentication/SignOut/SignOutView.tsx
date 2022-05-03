import React from 'react';
import {View, Text, Pressable} from 'react-native';

import style from './SignOutViewStyles';
import {signOut} from 'app/src/modules/authentication/signOut';

const SignOutView = (): JSX.Element => {
  return (
    <View style={style.outerContainer}>
      <Pressable onPress={signOut}>
        <Text style={style.text}>Sign Out</Text>
      </Pressable>
    </View>
  );
};

export default SignOutView;
