import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Movie } from '../../model/movies.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'movie-detailed-screen',
  templateUrl: './detail.screen.html',
  styleUrls: ['./detail.screen.scss'],
})
export class MovieDetailScreen implements OnInit {
  movie!: Movie;
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  constructor(private _title: Title) {
    this._ActivatedRoute.data
      .pipe(map(({ data }) => data as Movie))
      .subscribe((movie) => {
        this.movie = movie;
      });
  }
  ngOnInit(): void {
    this._title.setTitle(`${this.movie.Title} | NetflixJr`);
  }
}
