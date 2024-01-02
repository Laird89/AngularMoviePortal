import { Component, OnInit, Injectable } from '@angular/core';
import { MovieService } from '../services/MovieService';
import { Movie, MovieCategory } from '../movieInterface';

@Component({
  selector: 'app-thriller',
  templateUrl: './thriller.component.html',
  styleUrls: ['./thriller.component.css']
})
export class ThrillerComponent implements OnInit {
  
  @Injectable({providedIn: 'root'})
  thrillerMovies!: Movie[];
  thrillerCategory!: MovieCategory;
  constructor(public thrillerSvc: MovieService){}

  
  ngOnInit(): void {
    this.thrillerMovies = this.thrillerSvc.getThrillerMovies();
    this.thrillerCategory = this.thrillerSvc.getThrillerCategory();
  }

}
