export interface Character {
  id: string;
  name: string;
  image: string;
  species?: string;
  gender?: string;
  episode: Episode[];
}

export interface Characters {
  results: Character[];
  info: Info;
}

export interface CharactersQueryType {
  characters: Characters;
}

export interface CharacterQueryType {
  character: Character;
}
interface Episode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
}
interface Info {
  next: number;
  count: number;
  pages: number;
}
