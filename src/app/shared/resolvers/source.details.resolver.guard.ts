import { SourcesService } from './../services/sources.service';
import { Observable } from 'rxjs/Rx';
import { Source } from './../model/source.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class SourceDetailsResolverGuard implements Resolve<Source> {

  constructor(
    private router: Router,
    private sourcesService: SourcesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Source> {
    return this.sourcesService
      .get(route.params['id'])
      .catch(error => {
        this.router.navigate(['/sources']);
        return Observable.of(error);
      });
  }
}
