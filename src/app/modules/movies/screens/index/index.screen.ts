import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { BaseMovieCard } from '../../model/movies.model';

@Component({
  selector: 'movies-screen',
  styleUrls: ['./index.screen.scss'],
  templateUrl: './index.screen.html',
})
export class MoviesIndexScreen {
  movies!: BaseMovieCard[];
  constructor(private movie: MovieService) {
    this.movie.getMovies().subscribe({
      next: ({ Search }) => {
        this.movies = Search;
      },
      error: (err) => console.error(err),
    });
  }
}
