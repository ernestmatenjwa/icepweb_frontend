import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { apply } from '../../models/apply';
import { ApplicantService } from '../../services/applicant.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  
  @ViewChild('file', { static: false}) file: ElementRef;

  applicant: apply[];
  currrentApply: apply = {
    firstName: "",
    lastName: "",
    email: "",
    studentno: 0,
    specialization: "",
    mobileno: 0
  }

  constructor(private applyService: ApplicantService, private router : Router, private http: HttpClient) { }

  ngOnInit(): void {
  }
  apply(firstName, lastName, email, studentno, specialization, mobileno){
  
    const doc = this.file.nativeElement.files[0];
    const filee = new FormData();
    filee.set('file', doc);
    filee.set('firstName', firstName);
    filee.set('lastName', lastName);
    filee.set('email', email);
    filee.set('studentno', studentno);
    filee.set('specialization', specialization);
    filee.set('mobileno', mobileno);
    
    this.http.post('http://localhost:5000/apply', filee).subscribe(response => {
      console.log(response);
      window.history.back();
    })

}
}
