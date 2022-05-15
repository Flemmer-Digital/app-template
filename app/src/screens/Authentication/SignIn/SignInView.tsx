import React from 'react';
import {View, Text, Pressable} from 'react-native';
import style from './SignInViewStyles';
import {Authenticator} from 'app/src/navigation/useAuthenticator';
import Flex from 'app/src/components/flex';

const SignInView = ({
  authenticate,
}: {
  authenticate: Authenticator['authenticate'];
}): JSX.Element => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      direction='column'
      style={style.outerContainer}
    >
    <Pressable onPress={() => authenticate()}>
      <View>
        <Text style={style.text}>Sign In/Register Via Web</Text>
      </View>
    </Pressable>
    <Pressable onPress={
      () => authenticate({username: 'flemmerwill@gmail.com', password: 'password'})
      }>
      <View>
        <Text style={style.text}>In App Login</Text>
      </View>
    </Pressable>
    </Flex>
  );
};

export default SignInView;
