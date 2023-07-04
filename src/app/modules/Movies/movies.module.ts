import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesIndexScreen } from './screens/index/index.screen';
import { MovieDetailScreen } from './screens/detailed/detail.screen';

@NgModule({
  declarations: [MoviesIndexScreen, MovieDetailScreen],
  imports: [CommonModule, MoviesRoutingModule],
  exports: [],
})
export class MoviesModule {}
