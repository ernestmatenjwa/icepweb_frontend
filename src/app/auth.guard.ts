import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 
import { ApplicantService } from '../app/services/applicant.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private applicantService: ApplicantService, private router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(!this.applicantService.isIn()){
        this.router.navigateByUrl('/home');
        this.applicantService.deleteToken();
        return false;
      }
    return true;
  }
  
}
