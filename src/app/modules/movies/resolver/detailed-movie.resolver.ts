import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ResolveFn,
} from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Movie, QueryParam } from '../model/movies.model';

export const DetailedMovieResolver: ResolveFn<Movie> = async (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  movieservice: MovieService = inject(MovieService)
): Promise<Movie> =>
  await movieservice.getMovieById(route.queryParams[QueryParam.MOVIEID]);
