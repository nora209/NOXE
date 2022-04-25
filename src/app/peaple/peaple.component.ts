import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-peaple',
  templateUrl: './peaple.component.html',
  styleUrls: ['./peaple.component.scss']
})
export class PeapleComponent implements OnInit {
  imgPrefex:string='https://image.tmdb.org/t/p/w500/';
  trendingPerson:any[]=[];
  constructor(private _movieService:MoviesService) { }

  ngOnInit(): void {

  this._movieService.getTrending('person').subscribe((data)=>{
    this.trendingPerson = data.results;
  })
}
}
