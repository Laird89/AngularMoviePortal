import { Component, OnInit, Injectable } from '@angular/core';
import { Movie, MovieCategory } from '../movieInterface';
import { MovieService } from '../services/MovieService';


@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  @Injectable({providedIn: 'root'})
  actionMovies!: Movie[];
  actionCategory!: MovieCategory;
  constructor(public actionSvc: MovieService){

  }
  ngOnInit(): void {
    this.actionMovies = this.actionSvc.getActionMovies();
    this.actionCategory = this.actionSvc.getActionCategory();
  }



}
