import { InMemoryCache } from '@apollo/client';
import { Character, Characters } from './Types';

/**
 * cahce module is used here to concat the
 * old data with new data during pagination
 */
export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        characters: {
          keyArgs: ['filter'],
          merge(existing: Characters, incoming: Characters) {
            let results: Character[] = [];
            if (existing && existing.results.length > 0) {
              results = results.concat(existing.results);
            }
            if (incoming && incoming.results.length > 0) {
              results = results.concat(incoming.results);
            }
            return {
              ...incoming,
              results,
            };
          },
        },
      },
    },
  },
});
