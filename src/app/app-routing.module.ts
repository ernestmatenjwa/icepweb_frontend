import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdlogComponent } from './components/adlog/adlog.component';
import { AdminComponent } from './components/admin/admin.component';
import { PostvComponent } from './components/postv/postv.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { ApplyComponent } from './components/apply/apply.component';
import { AuthGuard } from './auth.guard'

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'signup' , component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'postv', component: PostvComponent},
  {path: 'adlog', component: AdlogComponent},
  {path: 'vacancies', component: VacanciesComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'profiles', component: ProfilesComponent, canActivate: [AuthGuard]},
  {path: 'applications', component: ApplicationsComponent, canActivate: [AuthGuard]},
  {path: 'apply', component: ApplyComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
