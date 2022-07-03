import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {Authenticator} from '../useAuthenticator';
import SignIn from 'app/src/screens/Authentication/SignIn';

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
