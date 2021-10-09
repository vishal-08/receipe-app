import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {

  receipes : Receipe[] = [
    new Receipe('A test Receipe', 'This is a simply test receipe', 'https://hips.hearstapps.com/delish/assets/17/31/1501791674-delish-chicken-curry-horizontal.jpg'),
    new Receipe('A test Receipe1', 'This is a simply test receipe', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6282786.jpg&w=272&h=272&c=sc&poi=face&q=85'),
    new Receipe('A test Receipe2', 'This is a simply test receipe', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/02/breakfast-recipes.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
