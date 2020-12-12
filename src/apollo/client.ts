import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const BASE_URL = 'https://rickandmortyapi.com/graphql';

const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query {
        characters(page: 2, filter: { name: "rick" }) {
          info {
            count
          }
          results {
            name
          }
        }
        location(id: 1) {
          id
        }
        episodesByIds(ids: [1, 2]) {
          id
        }
      }
    `,
  })
  .then((result) => console.log('RESULT:', result));
