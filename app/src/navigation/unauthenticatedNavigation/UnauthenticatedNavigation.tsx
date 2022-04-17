import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import SignIn from '../../screens/Authentication/SignIn';

const Stack = createStackNavigator();

const UnauthenticatedNavigation = ({authenticator}) => {
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
