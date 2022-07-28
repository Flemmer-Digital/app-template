import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {Authenticator} from '../useAuthenticator';
import {Flex, Container, Input} from '@flemmer-digital/mobile-app-components';
import SignIn from 'app/src/screens/Authentication/SignIn';

const Stack = createStackNavigator();

interface IUnauthenticatedNavigation {
  authenticator: Authenticator;
}

const UnauthenticatedNavigation = ({
  authenticator,
}: IUnauthenticatedNavigation) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [description, setDescription] = React.useState('');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn">
          {() => <SignIn authenticator={authenticator} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UnauthenticatedNavigation;
