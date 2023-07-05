import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesIndexScreen } from './screens/index/index.screen';
import { MovieDetailScreen } from './screens/detailed/detail.screen';
import { DetailedMovieResolver } from './resolver/detailed-movie.resolver';
import { canActivateDetailedMovie } from './guards/detailed-movie.guard';

const routes: Routes = [
  {
    path: '',
    component: MoviesIndexScreen,
  },
  {
    path: 'details',
    component: MovieDetailScreen,
    resolve: {
      data: DetailedMovieResolver,
    },
    canActivate: [canActivateDetailedMovie],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class MoviesRoutingModule {}
