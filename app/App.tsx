/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import MainNavigation from './src/navigation/mainNavigation';

const App = () => {
  const client = new ApolloClient({
    //change this once done buildApiUrl task
    uri: __DEV__ ? 'http://localhost:3000/graphql' : 'productionUrl',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <MainNavigation />
      </SafeAreaProvider>
    </ApolloProvider>
  );
};

export default App;
