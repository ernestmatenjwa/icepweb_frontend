import { Component, OnInit } from '@angular/core';
import { login } from '../../models/login';
import { ApplicantService } from '../../services/applicant.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-adlog',
  templateUrl: './adlog.component.html',
  styleUrls: ['./adlog.component.css']
})
export class AdlogComponent implements OnInit {

  login: login[];
  currrentLogin: login = {
    email: '',
    password: ''
  }

  constructor( private applicantService: ApplicantService, private router : Router ) { }

  ngOnInit(): void {
  }
  onSubmit(email, password){
    this.applicantService.admin({email, password} as login).subscribe
    (res => {
      this.applicantService.setToken(res['token']);
      this.router.navigateByUrl('/admin')
    })
  
  }
}
