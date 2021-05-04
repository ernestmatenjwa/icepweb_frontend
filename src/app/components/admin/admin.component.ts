import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../../services/applicant.service';
import { posts } from '../../models/postssssss';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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
