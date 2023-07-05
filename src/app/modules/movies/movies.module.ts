import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesIndexScreen } from './screens/index/index.screen';
import { MovieDetailScreen } from './screens/detailed/detail.screen';
import { MovieService } from './services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from './components/movie-card.component';

@NgModule({
  declarations: [MoviesIndexScreen, MovieDetailScreen, MovieCardComponent],
  imports: [CommonModule, MoviesRoutingModule, HttpClientModule],
  exports: [],
  providers: [MovieService],
})
export class MoviesModule {}
