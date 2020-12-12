export interface Character {
  id: string;
  name: string;
  image: string;
}

interface Info {
  next: number;
  count: number;
  pages: number;
}

export interface CharactersQueryType {
  characters: Characters;
}

export interface Characters {
  results: Character[];
  info: Info;
}
