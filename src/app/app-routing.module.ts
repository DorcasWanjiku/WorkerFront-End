import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

const routes: Routes = [
  {path: 'nav-bar', component:NavBarComponent},
  {path: 'landing-page', component:LandingPageComponent},
  {path: 'user-signup', component:UserSignupComponent},
  {path: 'user-signin', component:UserSigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
