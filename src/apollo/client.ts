/** Apollo client  */
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { FETCH_CHARACTERS } from './Queries';

const BASE_URL = 'https://rickandmortyapi.com/graphql';

const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});

export default client;

/** Example to test the graphql api */
client
  .query({
    query: FETCH_CHARACTERS,
    variables: {
      page: 1,
    },
  })
  .then((result) => console.log('RESULT:', result));
