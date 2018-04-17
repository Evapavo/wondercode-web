import { CanLeaveSourceCreateGuard } from './shared/guards/can-leave-source-create.guard';
import { SourceBaseComponent } from './components/source-base/source-base.component';
import { SourceCreateComponent } from './components/source-create/source-create.component';
import { SourceDetailsResolverGuard } from './shared/resolvers/source.details.resolver.guard';
import { IsAuthenticatedGuard } from './shared/guards/is-authenticated.guard';
import { SignupComponent } from './components/misc/signup/signup.component';
import { LoginComponent } from './components/misc/login/login.component';
import { SourceItemComponent } from './components/source-item/source-item.component';
import { SourcesComponent } from './components/sources/sources.component';
import { HomeComponent } from './components/misc/home/home.component';
import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'sources', canActivate: [IsAuthenticatedGuard], component: SourcesComponent },
    { path: 'info', canActivate: [IsAuthenticatedGuard], component: SourceItemComponent },

    //create sourcecreatecomponent
     {
      path: 'sources',
      canActivate: [IsAuthenticatedGuard],
      component: SourceBaseComponent,
      children: [
          {
              path: 'new',
              canActivate: [IsAuthenticatedGuard],
               canDeactivate: [CanLeaveSourceCreateGuard],
              component: SourceCreateComponent
           },
            {
               path: ':id',
             canActivate: [IsAuthenticatedGuard],
               resolve: {
                  source: SourceDetailsResolverGuard
              },
                 component: SourceItemComponent
            }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
];
