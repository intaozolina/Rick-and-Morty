export interface Characters {
  info: CharactersInfo;
  results: CharactersResult[];
}

export interface CharactersInfo {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}

export interface CharactersResult {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharactersResultOrigin;
  location: CharactersResultLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface CharactersResultOrigin {
  name: string;
  url: string;
}

interface CharactersResultLocation {
  name: string;
  url: string;
}

export interface SearchParams {
  searchName: string;
  searchGender: string;
}
