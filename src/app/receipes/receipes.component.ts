import { Component, OnInit } from '@angular/core';
import { Receipe } from './receipe.model';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css']
})
export class ReceipesComponent implements OnInit {

  selectReceipe : Receipe

  constructor() { }

  ngOnInit(): void {
  }

}
