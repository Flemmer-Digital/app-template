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
import {ApolloClient, ApolloProvider} from '@apollo/client';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import buildGraphqlClient from './src/modules/graphqlClient/buildGraphqlClient';
import MainNavigation from './src/navigation/mainNavigation';
import {LoadingSpinner} from '@flemmer-digital/mobile-app-components';

const App = () => {
  const [apolloClient, setApolloClient] =
    React.useState<ApolloClient<any> | null>(null);

  const getApolloClient = async () => {
    const client = await buildGraphqlClient();
    setApolloClient(client);
  };

  React.useEffect(() => {
    getApolloClient();
  }, []);

  if (!apolloClient) return <LoadingSpinner fullscreen />;

  return (
    <ApolloProvider client={apolloClient}>
      <SafeAreaProvider>
        <MainNavigation />
      </SafeAreaProvider>
    </ApolloProvider>
  );
};

export default App;
