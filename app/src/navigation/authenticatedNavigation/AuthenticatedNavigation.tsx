import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import AuthenticatedIndex from 'app/src/screens/AuthenticatedIndex';

const Stack = createStackNavigator();

const AuthenticatedNavigation = ({authenticator}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AuthenticatedIndex"
          component={AuthenticatedIndex}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthenticatedNavigation;
