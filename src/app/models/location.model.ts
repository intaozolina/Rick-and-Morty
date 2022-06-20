export interface Location {
  info: LocationInfo;
  results: LocationResult[];
}

interface LocationInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface LocationResult {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string [];
  url: string;
  created: string;
}

export interface SearchLocation {
  searchName: string;
  searchDimension: string;
}
