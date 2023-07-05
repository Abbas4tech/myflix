import { Component, Input } from '@angular/core';
import { BaseMovieCard } from '../model/movies.model';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() movie!: BaseMovieCard;
}
