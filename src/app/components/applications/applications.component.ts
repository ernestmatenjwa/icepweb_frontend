import { Component, OnInit } from '@angular/core';
import { apply } from '../../models/apply';
import { ApplicantService } from '../../services/applicant.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  applicant: apply[];
  currrentApply: apply = {
    firstName: "",
    lastName: "",
    email: "",
    studentno: 0,
    specialization: "",
    mobileno: 0
  }
  constructor(private applicantService: ApplicantService) { }

  ngOnInit(): void {
    this.applicantService.applications().subscribe(apply => { 
      this.applicant = apply;
    })
  }

}
