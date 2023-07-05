export type MediaType = 'movie' | 'series' | 'episode';

export type BaseMovieCard = {
  Title: string;
  Year: number;
  imdbID: string;
  Type: MediaType;
  Poster: string;
};

export interface APIResponse<T> {
  Search: T[];
  totalResults: string;
}

export enum QueryParam {
  MOVIEID = 'movieId',
}

export interface Movie {
  Title: string;
  Year: number;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: MediaType;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
