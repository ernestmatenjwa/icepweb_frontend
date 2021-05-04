import { Component, OnInit } from '@angular/core';
import { login } from '../../models/login';
import { ApplicantService } from '../../services/applicant.service';
import { NgForm } from '@angular/forms'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: login[];
  currrentLogin: login = {
    email: '',
    password: ''
  }
  constructor(private applicantService: ApplicantService, private router : Router ) { }

  ngOnInit(): void {
  }
  onSubmit(email, password){
    this.applicantService.login({email, password} as login).subscribe
    (res => {
      this.applicantService.setToken(res['token']);
      this.router.navigateByUrl('/dashboard')
    })
  
  }
  

}
