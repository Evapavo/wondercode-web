import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import './rxjs.operators';

import { IsAuthenticatedGuard } from './shared/guards/is-authenticated.guard';

import { SessionService } from './shared/services/session.service';
import { UsersService } from './shared/services/users.service';
import { SourcesService } from './shared/services/sources.service';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { NavbarComponent } from './components/misc/navbar/navbar.component';
import { HomeComponent } from './components/misc/home/home.component';
import { FooterComponent } from './components/misc/footer/footer.component';
import { LoginComponent } from './components/misc/login/login.component';
import { SignupComponent } from './components/misc/signup/signup.component';
import { SourcesComponent } from './components/sources/sources.component';
import { SourcesListComponent } from './components/sources-list/sources-list.component';
import { SourceItemComponent } from './components/source-item/source-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    SourcesComponent,
    SourcesListComponent,
    SourceItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    SessionService,
    IsAuthenticatedGuard,
    UsersService,
    SourcesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
