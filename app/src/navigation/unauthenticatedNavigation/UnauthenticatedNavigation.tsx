import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {Authenticator} from '../useAuthenticator';
import Container from '../../components/Container/index';
import Flex from '../../components/Flex/index';
import Input from '../../components/Input/index';

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
          {() => (
            <Container backgroundColor="#fff" hasKeyboardAvoidingView>
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center">
                <Input
                  label="Email"
                  onChangeText={setEmail}
                  value={email}
                  placeholder="Enter your email"
                />
                <Input
                  label="Password"
                  onChangeText={setPassword}
                  value={password}
                  placeholder="Enter your password"
                  secureTextEntry
                />
                <Input
                  label="Description"
                  onChangeText={setDescription}
                  value={description}
                  placeholder="Enter your description"
                />
              </Flex>
            </Container>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UnauthenticatedNavigation;
