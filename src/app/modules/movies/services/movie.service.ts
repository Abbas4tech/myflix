import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResponse, BaseMovieCard } from '../model/movies.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'platform',
})
export class MovieService {
  constructor(private _http: HttpClient) {}

  getMovies(): Observable<APIResponse<BaseMovieCard>> {
    return this._http.get<APIResponse<BaseMovieCard>>(
      'http://www.omdbapi.com/?apikey=8c6211cc&s=dragon&page=1'
    );
  }
}
