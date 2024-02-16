import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../myservices/movie.service';

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css'
})
export class ListMoviesComponent {

  movie:any[]=[];

  constructor(private movieService:MovieService){}

  ngOnInit(){
    this.movie=this.movieService.getMovies();
    console.log(this.movie);
  }
}
