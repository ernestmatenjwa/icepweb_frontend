import { Component, OnInit } from '@angular/core';
import { post } from '../../models/post';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { ApplicantService } from '../../services/applicant.service';

@Component({
  selector: 'app-postv',
  templateUrl: './postv.component.html',
  styleUrls: ['./postv.component.css']
})
export class PostvComponent implements OnInit {
  posting: post[];
  currrentPost: post = {
    vacancyName: '',
    vacancyDesc: '',
    closingDate: '',
  }
  constructor(private applicantService: ApplicantService) { }

  ngOnInit(): void {
  }
  post(vacancyName, vacancyDesc, closingDate){
    this.applicantService.posting({vacancyName, vacancyDesc, closingDate} as post).subscribe
    (post => {
      console.log(post)
      window.history.back();
    })
  }

}
