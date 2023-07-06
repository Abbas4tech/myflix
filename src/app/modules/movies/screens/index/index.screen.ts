import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { BaseMovieCard } from '../../model/movies.model';
import {
  NavigationEnd,
  NavigationStart,
  ResolveEnd,
  ResolveStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'movies-screen',
  styleUrls: ['./index.screen.scss'],
  templateUrl: './index.screen.html',
})
export class MoviesIndexScreen {
  movies!: BaseMovieCard[];
  loading = true;
  constructor(private movie: MovieService, private _router: Router) {
    this.movie.getMovies().subscribe({
      next: (Search) => {
        this.movies = Search;
        this.loading = false;
      },
      error: (err) => console.error(err),
    });
    this._router.events.subscribe((e) => {
      if (e instanceof NavigationStart || e instanceof ResolveStart) {
        this.loading = true;
      }
      if (e instanceof NavigationEnd || e instanceof ResolveEnd) {
        this.loading = false;
      }
    });
  }
}
