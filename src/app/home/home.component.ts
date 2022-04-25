import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imgPrefex:string='https://image.tmdb.org/t/p/w500/';
trendingMovies:any[]=[];
trendingTv:any[]=[];
trendingPerson:any[]=[];

  constructor(private _movieService:MoviesService) {
    
   }

  ngOnInit(): void {
   this. _movieService.getTrending('movie').subscribe((data)=>{
      this.trendingMovies = data.results.slice(0,10);
    })


   this. _movieService.getTrending('tv').subscribe((data)=>{
      this.trendingTv = data.results.slice(0,10);
    })

    this._movieService.getTrending('person').subscribe((data)=>{
      this.trendingPerson = data.results.slice(0,10);
    })
  }

}
