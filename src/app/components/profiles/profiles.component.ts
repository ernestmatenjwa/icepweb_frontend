import { Component, OnInit } from '@angular/core';
import { applicant } from '../../models/applicant';
import { ApplicantService } from '../../services/applicant.service';
import { NgForm } from '@angular/forms'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

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
    this.applicantService.profiles().subscribe(applicant => { 
      this.applicant = applicant;
    })
  }

}
