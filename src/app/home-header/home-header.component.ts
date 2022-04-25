import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
//import { MoviesService } from '../service/movies.service';
@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {
  imgPrefex:string='https://image.tmdb.org/t/p/w500/';
   @Input() parentDate:any[] = [];

  trendingMovies:any[]=[];
    customOptions: OwlOptions = {
    loop: true,
    mouseDrag:true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
   margin:8,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: true
  }
  constructor() {
   }

  ngOnInit(): void {
  }

}
