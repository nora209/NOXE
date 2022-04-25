import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  imgPrefex:string='https://image.tmdb.org/t/p/w500/';
  trendingTv:any[]=[];
  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.getTrending('tv').subscribe((data)=>{
      this.trendingTv = data.results;
    })
  }

}
