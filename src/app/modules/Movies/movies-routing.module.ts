import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesIndexScreen } from './screens/index/index.screen';
import { MovieDetailScreen } from './screens/detailed/detail.screen';

const routes: Routes = [
  {
    path: '',
    component: MoviesIndexScreen,
  },
  {
    path: 'details',
    component: MovieDetailScreen,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class MoviesRoutingModule {}
