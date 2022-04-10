import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import SignIn from '../../screens/Authentication/SignIn';

const Stack = createStackNavigator();

const UnauthenticatedNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UnauthenticatedNavigation;
