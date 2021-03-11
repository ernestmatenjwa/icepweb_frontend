import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './components/data/data.component';


import { MovieService } from './services/movie.service';
import { AddMovieFormComponent } from './components/add-movie-form/add-movie-form.component'

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    AddMovieFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
