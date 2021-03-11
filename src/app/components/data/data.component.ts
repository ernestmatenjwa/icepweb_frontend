import { Component, OnInit } from '@angular/core';
import { movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  movie: movie[];
  currrentMovie: movie = {
    m_id: 0,
    m_title: '',
    m_description: '',
    m_release: '',
    m_genre: ''
  }
  isEdit: boolean;

  constructor( private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(movie => { 
      this.movie = movie;
    })
  }
  editMovie(movie: movie){
    this.currrentMovie = movie;
    this.isEdit = true;
  }
  deleteMovie(movie: movie){
    if(confirm('Are You Sure you want to delete this movie?')){
      this.movieService.deleteMovie(movie.m_id).subscribe()
    }
  }

}
