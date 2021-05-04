import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { applicant } from '../../models/applicant';
import { ApplicantService } from '../../services/applicant.service';
import { NgForm } from '@angular/forms'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  //@Input() currrentApplicant: applicant;
  
  applicant: applicant[];
  currrentApplicant: applicant = {
    applicantId: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  
  constructor(private applicantService: ApplicantService, private router : Router) { }

  ngOnInit(): void {
  }
  sigup(firstName, lastName, email, password){
  
      this.applicantService.signup({firstName, lastName, email, password} as applicant).subscribe
      (applicant => {
        this.router.navigateByUrl('/login')
      })
    
  }

}
