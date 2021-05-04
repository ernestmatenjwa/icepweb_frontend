import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ApplicantService } from './services/applicant.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AuthGuard } from './auth.guard'
import { AuthInterceptor } from './auth.interceptor';
import { AdminComponent } from './components/admin/admin.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { AdlogComponent } from './components/adlog/adlog.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { ApplyComponent } from './components/apply/apply.component';
import { PostvComponent } from './components/postv/postv.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    VacanciesComponent,
    NavbarComponent,
    AdminComponent,
    ApplicationsComponent,
    AdlogComponent,
    MessagesComponent,
    ProfilesComponent,
    ApplyComponent,
    PostvComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true}, AuthGuard, ApplicantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
