import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import AuthenticatedIndex from 'app/src/screens/AuthenticatedIndex';
import setCurrentPerson from 'app/src/components/utils/setCurrentPerson';
import LoadingSpinner from 'app/src/components/LoadingSpinner';

const Stack = createStackNavigator();

const AuthenticatedNavigation = () => {
  const { data, loading } = setCurrentPerson();
  console.log(data);

  if (loading) return <LoadingSpinner fullscreen />;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AuthenticatedIndex" component={AuthenticatedIndex} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthenticatedNavigation;
