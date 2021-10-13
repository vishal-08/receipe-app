import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  ingredientsChanged = new EventEmitter<Ingredients[]>()
  private ingredients : Ingredients[] =  [
    new Ingredients("Apple", 6),
    new Ingredients("Green Chilli", 2),
    new Ingredients("Mango", 3)
  ]

  getShoppingList(){
    return this.ingredients.slice()
  }

  addIngredients(ingredient : Ingredients){
    this.ingredients.push(ingredient)
    this.ingredientsChanged.emit(this.ingredients.slice())  //for showing changed arRAY
  }

  addIngredient(ingredient: Ingredients[]){
    this.ingredients.push(...ingredient)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  constructor() { }
}
