import { Component, Input } from '@angular/core';
import { BaseMovieCard, QueryParam } from '../../model/movies.model';
import { Params, Router } from '@angular/router';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() movie!: BaseMovieCard;

  constructor(private _router: Router) {}

  moveToDetails(id: string) {
    this._router.navigate(['movies/details/'], {
      queryParams: {
        [QueryParam.MOVIEID]: id,
      } as Params,
    });
  }
}
