import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
//import * as EventEmitter from 'events';
import { movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.css']
})
export class AddMovieFormComponent implements OnInit {

  @Input() currrentMovie: movie;
  @Input() isEdit: boolean;
  
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }
   
  addMovie(m_title, m_description, m_release, m_genre){
    
    if(!m_title || !m_description || !m_release || !m_genre)
    {
      alert('Please fill all fields')
    }
    else{
      this.movieService.saveMovie({m_title, m_description, m_release, m_genre} as movie).subscribe
      (movie => {
        console.log(movie);
      })
    }
  }
  updateMovie(){
    this.movieService.updatedMovie(this.currrentMovie).subscribe(movie => {
      this.isEdit = false;
    })
  }
}
