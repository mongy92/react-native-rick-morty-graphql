import { gql } from '@apollo/client';

export const FETCH_CHARACTERS = gql`
  query fetchCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
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

export const FETCH_CHARACTER_DETAILS = gql`
  query fetchCharacterDetails($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
      episode {
        id
        name
        air_date
        episode
      }
    }
  }
`;
