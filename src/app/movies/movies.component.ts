import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
MoviesService
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  imgPrefex:string='https://image.tmdb.org/t/p/w500/';
trendingMovies:any[]=[];
  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this. _MoviesService.getTrending('movie').subscribe((data)=>{
      this.trendingMovies = data.results;
    })
  }

}
