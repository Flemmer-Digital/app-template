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

import MainNavigation from './src/navigation/mainNavigation';

const App = () => {
  const [isDevelopment, setIsDevelopment] = React.useState(true);

  const client = new ApolloClient({
    uri: isDevelopment ? 'localhost:3000/graphql' : 'productionUrl',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <MainNavigation />
    </ApolloProvider>
  );
};

export default App;
