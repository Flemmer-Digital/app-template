import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  DefaultOptions,
} from '@apollo/client';
import buildApiUrl from '../utils/buildApiUrl';
import AuthenticationLink from '../authentication/authenticationLink';

import cache from './cache';

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all',
  },
  query: {
    fetchPolicy: 'cache-first',
    errorPolicy: 'all',
  },
  mutate: {
    errorPolicy: 'all',
  },
};

const buildGraphqlClient = async (): Promise<ApolloClient<any>> => {
  const httpLink = createHttpLink({uri: await buildApiUrl('/graphql')});

  const links = [AuthenticationLink, httpLink];

  return new ApolloClient<any>({
    link: ApolloLink.from(links),
    cache,
    defaultOptions,
  });
};

export default buildGraphqlClient;
