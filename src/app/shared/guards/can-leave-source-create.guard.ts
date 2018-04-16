import { SourceCreateComponent } from './../../components/source-create/source-create.component';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CanLeaveSourceCreateGuard implements CanDeactivate<SourceCreateComponent> {

  canDeactivate(component: SourceCreateComponent): Observable<boolean> |
  Promise<boolean> | boolean {
    return component.canLeaveTheComponent();
  }
}
