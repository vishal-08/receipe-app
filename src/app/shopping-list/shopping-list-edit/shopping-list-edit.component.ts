import { Component, ElementRef,  OnInit, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingService } from '../shopping.service';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild ('nameInput', {static : false}) nameInputRef :ElementRef
  @ViewChild ('amountInput', {static : false}) amountInputRef : ElementRef

  constructor(private slService : ShoppingService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const nameIng = this.nameInputRef.nativeElement.value
    const amountIng = this.amountInputRef.nativeElement.value
    const newIngredients = new Ingredients(nameIng, amountIng)
    this.slService.addIngredients(newIngredients)
  }

}
