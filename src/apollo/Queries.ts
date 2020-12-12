import { gql } from '@apollo/client';

export const FETCH_CHARACTERS = gql`
  query fetchCharacters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
      }
      info {
        next
        count
        pages
      }
    }
  }
`;
