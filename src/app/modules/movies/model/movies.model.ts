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
