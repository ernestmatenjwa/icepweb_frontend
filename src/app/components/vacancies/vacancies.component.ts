import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../../services/applicant.service';
import { posts } from '../../models/postssssss';


@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
  post: posts[];
  currrentPosts: posts = {
    vacancyName: '',
    vacancyDesc: '',
    closingDate: '',
  }

  constructor(private applicantService: ApplicantService) { }

  ngOnInit(): void {
    this.applicantService.posts().subscribe(posts => {  
      this.post = posts;  
    })
  }

}
