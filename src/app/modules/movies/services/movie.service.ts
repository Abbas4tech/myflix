import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResponse, BaseMovieCard, Movie } from '../model/movies.model';
import { Observable, lastValueFrom, map } from 'rxjs';
@Injectable({
  providedIn: 'platform',
})
export class MovieService {
  constructor(private _http: HttpClient) {}
  ApiKey = '8c6211cc';

  shuffleMoviesKeywords = () => {
    return [
      'breaking',
      'bad',
      'good',
      'slow',
      'love',
      'sex',
      'drug',
      'hate',
      'hotel',
      'kiss',
      'money',
    ]
      .map((e) => ({ e, _sortKey: Math.random() }))
      .sort((a, b) => a._sortKey - b._sortKey)
      .map(({ e }) => e)[0];
  };
  randomNumberGenerator = () => {
    return Math.round(Math.random() * 100);
  };
  getMovies(): Observable<BaseMovieCard[]> {
    return this._http
      .get<APIResponse<BaseMovieCard>>(
        `https://www.omdbapi.com/?apikey=${this.ApiKey}&s=dawn&page=1`
      )
      .pipe(map(({ Search }) => Search));
  }

  async getMovieById(id: string) {
    return await lastValueFrom(
      this._http.get<Movie>(
        `https://www.omdbapi.com/?apikey=${this.ApiKey}&i=${id}`
      )
    );
  }
}
