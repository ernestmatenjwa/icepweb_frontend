import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../../services/applicant.service';
import { NgForm } from '@angular/forms'; 
import { Router } from '@angular/router'; 
import { login } from '../../models/login';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  login: login[];
  currrentLogin: login = {
    email: '',
    password: ''
  }
  constructor(private applicantService: ApplicantService, private router : Router) { }

  ngOnInit(): void {
     
  }
  profile(email, password){
    this.applicantService.login({email, password} as login).subscribe(login => {
      this.login = login ;
    })
  
  }


}
