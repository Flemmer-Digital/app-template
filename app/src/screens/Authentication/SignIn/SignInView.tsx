import React from 'react';
import {View, Text, Pressable} from 'react-native';
import style from './SignInViewStyles';
import {Authenticator} from 'app/src/navigation/useAuthenticator';
import Flex from 'app/src/components/Flex';

const SignInView = ({
  authenticate,
}: {
  authenticate: Authenticator['authenticate'];
}): JSX.Element => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      direction="column"
      style={style.outerContainer}>
      <Pressable onPress={() => authenticate()}>
        <View>
          <Text style={style.text}>Sign In/Register Via Web</Text>
        </View>
      </Pressable>
    </Flex>
  );
};

export default SignInView;
