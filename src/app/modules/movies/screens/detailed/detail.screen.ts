import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { Movie } from '../../model/movies.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'movie-detailed-screen',
  templateUrl: './detail.screen.html',
  styleUrls: ['./detail.screen.scss'],
})
export class MovieDetailScreen implements OnInit, OnDestroy {
  movie!: Movie;
  subscriptions: Subscription[] = [];
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  constructor(private _title: Title) {
    this.subscriptions.push(
      this._ActivatedRoute.data
        .pipe(map(({ data }) => data as Movie))
        .subscribe((movie) => {
          this.movie = movie;
        })
    );
  }
  ngOnInit(): void {
    this._title.setTitle(`${this.movie.Title} | NetflixJr`);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
