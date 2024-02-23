import { Component,EventEmitter,Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../myservices/movie.service';
import {Movie} from '../movie.model';

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css'
})
export class ListMoviesComponent {

  movie:any[]=[];
  private currentMovie!:Movie;

@Output() onSelectedMovie:EventEmitter<Movie>;

  constructor(private movieService:MovieService){
    this.onSelectedMovie=new EventEmitter();
  }

  ngOnInit(){
    this.movie=this.movieService.getMovies();
    console.log(this.movie);
  }

  selectMovie(myMovie:Movie):void{
    console.log(myMovie);
    this.currentMovie=myMovie;
    this.onSelectedMovie.emit(myMovie);
  }

  isSelected(movie:Movie):boolean{
    if (!movie||!this.currentMovie){
      return false;
    }
    return movie.title==this.currentMovie.title;
  }

  }

