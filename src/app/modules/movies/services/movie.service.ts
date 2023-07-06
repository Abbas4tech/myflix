import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  APIResponse,
  BaseMovieCard,
  Movie,
  basicSearchKeywords,
} from '../model/movies.model';
import { BehaviorSubject, lastValueFrom, map, tap } from 'rxjs';
@Injectable({
  providedIn: 'platform',
})
export class MovieService {
  constructor(private _http: HttpClient) {}
  ApiKey = '8c6211cc';
  moviesData: BehaviorSubject<BaseMovieCard[]> = new BehaviorSubject<
    BaseMovieCard[]
  >([]);

  shuffleMoviesKeywords = () =>
    basicSearchKeywords
      .map((e) => ({ e, _sortKey: Math.random() }))
      .sort((a, b) => a._sortKey - b._sortKey)
      .map(({ e }) => e)[0];

  getMovies(): Promise<BaseMovieCard[]> {
    if (this.moviesData.getValue().length > 0) {
      return new Promise((res, rej) => res(this.moviesData.getValue()));
    } else {
      try {
        return lastValueFrom(
          this._http
            .get<APIResponse<BaseMovieCard>>(
              `https://www.omdbapi.com/?apikey=${
                this.ApiKey
              }&s=${this.shuffleMoviesKeywords()}&page=1&type=movie`
            )
            .pipe(
              map(({ Search }) => Search),
              tap((data) => this.moviesData.next(data))
            )
        );
      } catch (err) {
        throw new Error('Error in Fetching Movies!!');
      }
    }
  }

  async getMovieById(id: string): Promise<Movie> {
    try {
      return await lastValueFrom(
        this._http.get<Movie>(
          `https://www.omdbapi.com/?apikey=${this.ApiKey}&i=${id}`
        )
      );
    } catch (err) {
      throw new Error('Error in fetching movie details!!');
    }
  }
}
