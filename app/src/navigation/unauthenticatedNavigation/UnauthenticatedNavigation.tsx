import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import SignIn from '../../screens/Authentication/SignIn';
import {Authenticator} from '../useAuthenticator';

const Stack = createStackNavigator();

interface IUnauthenticatedNavigation {
  authenticator: Authenticator;
}

const UnauthenticatedNavigation = ({
  authenticator,
}: IUnauthenticatedNavigation) => {
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
