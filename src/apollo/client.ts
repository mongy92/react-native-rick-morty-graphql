/** Apollo client  */
import { ApolloClient } from '@apollo/client';
import { cache } from './cache';

const BASE_URL = 'https://rickandmortyapi.com/graphql';

const client = new ApolloClient({
  uri: BASE_URL,
  cache,
});

export default client;
