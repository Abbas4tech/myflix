import { inject } from '@angular/core';
import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { MovieService } from '../services/movie.service';
import { QueryParam } from '../model/movies.model';

export const canActivateDetailedMovie: CanActivateFn = async (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  movieService: MovieService = inject(MovieService),
  router: Router = inject(Router)
) => {
  const id = route.queryParams[QueryParam.MOVIEID] as string;
  if (id.length !== 9) {
    router.navigate(['movies']);
    return false;
  }
  try {
    const movie = await movieService.getMovieById(id);
    if (movie) {
      return true;
    } else return false;
  } catch (err) {
    return false;
  }
};
