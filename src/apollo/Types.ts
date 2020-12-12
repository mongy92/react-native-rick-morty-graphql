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

export interface Characters {
  characters: {
    results: Character[];
  };
  info: Info;
}
