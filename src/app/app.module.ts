import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { EasyapplyComponent } from './easyapply/easyapply.component';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationService } from './application.service';
// import { Admin } from './admin.service/admin.service.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingPageComponent,
    UserSigninComponent,
    UserSignupComponent,
    EasyapplyComponent
    // Admin.ServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
