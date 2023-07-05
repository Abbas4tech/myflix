import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Movie } from '../../model/movies.model';

@Component({
  selector: 'movie-detailed-screen',
  templateUrl: './detail.screen.html',
  styleUrls: ['./detail.screen.scss'],
})
export class MovieDetailScreen {
  movie!: Movie;
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  constructor() {
    this._ActivatedRoute.data
      .pipe(map(({ data }) => data as Movie))
      .subscribe((movie) => {
        this.movie = movie;
      });
  }
}
