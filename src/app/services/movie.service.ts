import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { movie } from '../models/movie';

const httpOptions = {
  headers: new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieUrl: string = "http://localhost:1000";

  constructor(private http: HttpClient) { }

  getMovies() : Observable<movie[]>{
    return this.http.get<movie[]>(this.movieUrl+'/movies');
  }
  saveMovie(movie: movie) : Observable<movie[]>{
    return this.http.post<movie[]>(this.movieUrl+'/add', movie, httpOptions);
  }
  updatedMovie(movie: movie) :Observable<movie>{
    return this.http.put<movie>(this.movieUrl+'/update', movie, httpOptions);
  }
  deleteMovie(movie: movie | number):Observable<movie>{
    const m_id = typeof movie === 'number' ? movie : movie.m_id;
    return this.http.delete<movie>(this.movieUrl+'/'+m_id, httpOptions);
  }

}
