export interface MovieInfo {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  Rated?: string;
  Genre?: string;
  Director?: string;
  Actors?: string;
  Plot?: Plot;
  Awards?: string;
  Writer?: string;
  imdbRating?: string;
}

export enum Plot {
  short = "short",
  full = "full",
}
