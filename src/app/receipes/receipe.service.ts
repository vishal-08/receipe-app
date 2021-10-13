import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Receipe } from './receipe.model';

@Injectable({
  providedIn: 'root'
})
export class ReceipeService {

  receipeSelected = new EventEmitter<Receipe>()

 private receipes : Receipe[] = [
    new Receipe('A test Receipe', 'This is a simply test receipe', 'https://hips.hearstapps.com/delish/assets/17/31/1501791674-delish-chicken-curry-horizontal.jpg',[new Ingredients('bun', 1), new Ingredients('patty', 2)]),
    new Receipe('A test Receipe1', 'This is a simply test receipe', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6282786.jpg&w=272&h=272&c=sc&poi=face&q=85',[new Ingredients('bread', 1), new Ingredients('patatoes', 2)]),
    new Receipe('A test Receipe2', 'This is a simply test receipe', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/02/breakfast-recipes.jpg',[new Ingredients('wheat', 1), new Ingredients('ghee', 2), new Ingredients('sauce', 5)])
  ];

  getReceipe(){
    return this.receipes.slice()
  }

  addIngredientToShopping(ingredient : Ingredients[]){
    this.slservice.addIngredient(ingredient)
  }

  constructor(private slservice : ShoppingService) { }
}
