import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredients[] =  [
    new Ingredients("Apple", 6),
    new Ingredients("Green Chilli", 2),
    new Ingredients("Mango", 3)
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onAddedIngredients(ingredient : Ingredients){
    this.ingredients.push(ingredient)
  }

}
