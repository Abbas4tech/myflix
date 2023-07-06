import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { BaseMovieCard } from '../../model/movies.model';
import {
  NavigationEnd,
  NavigationStart,
  ResolveStart,
  Router,
} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'movies-screen',
  styleUrls: ['./index.screen.scss'],
  templateUrl: './index.screen.html',
})
export class MoviesIndexScreen implements OnInit, OnDestroy {
  movies!: BaseMovieCard[];
  subscriptions: Subscription[] = [];
  loading = true;
  constructor(private movie: MovieService, private _router: Router) {
    this.subscriptions.push(
      this._router.events.subscribe((e) => {
        if (e instanceof NavigationStart || e instanceof ResolveStart) {
          this.loading = true;
        }
        if (e instanceof NavigationEnd) {
          this.loading = false;
        }
      })
    );
  }
  async ngOnInit(): Promise<void> {
    this.loading = true;
    try {
      this.movies = await this.movie.getMovies();
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
