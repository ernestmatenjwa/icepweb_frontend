import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { post } from '../models/post';
import { applicant } from '../models/applicant'
import { apply } from '../models/apply'
import { login } from '../models/login'
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  
  //applicantUrl: string = "http://localhost:5000";
  
  noAuthHeader = { Headers: new HttpHeaders({'NoAuth': 'True'})} 

  constructor(private http: HttpClient) { }
  signup(applicant: applicant) :Observable<applicant[]>{
    this.noAuthHeader
    return this.http.post<applicant[]>(environment.applicantUrl+'/stu_register', applicant, httpOptions);
  }
   apply(apply: apply) :Observable<apply[]>{
    this.noAuthHeader
    return this.http.post<apply[]>(environment.applicantUrl+'/apply', apply, httpOptions); 
  }
  login(login: login) :Observable<login[]>{
    this.noAuthHeader
    return this.http.post<login[]>(environment.applicantUrl+'/stu_login', login, httpOptions);
  }
  profiles(){
    return this.http.get<applicant[]>(environment.applicantUrl+'/profiles');
  }
  admin(login: login) :Observable<login[]>{
    this.noAuthHeader
    return this.http.post<login[]>(environment.applicantUrl+'/ad_login', login, httpOptions);
  }
  posts(){
    return this.http.get<post[]>(environment.applicantUrl+'/postsssss');
  }
  applications(){
    return this.http.get<apply[]>(environment.applicantUrl+'/Applicationss');
  }
  profile(){
    return this.http.get(environment.applicantUrl + '/profile');
  }

  setToken(token: string){
    localStorage.setItem('token', token);
  }     
  getT(){
    return localStorage.getItem('token')
  }
  deleteToken(){
    localStorage.removeItem('token');
  }
  getUser(){
    var token = localStorage.getItem('token');
    if(token){
      var user = atob(token.split('.')[1]);
      return JSON.parse(user);
    }else{
      return null;
    }
  }
  isIn(){
    var user = this.getUser();
    if(user){
      return user.exp > Date.now() / 2000;
    }else{
      return false;
    }
  }
  posting(post: post) :Observable<post[]>{
    this.noAuthHeader
    return this.http.post<post[]>(environment.applicantUrl+'/post', post, httpOptions);
  }

}
