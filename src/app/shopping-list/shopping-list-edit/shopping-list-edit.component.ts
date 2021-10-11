import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild ('nameInput', {static : false}) nameInputRef :ElementRef
  @ViewChild ('amountInput', {static : false}) amountInputRef : ElementRef
  @Output() ingredientAdded = new EventEmitter<Ingredients>()

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const nameIng = this.nameInputRef.nativeElement.value
    const amountIng = this.amountInputRef.nativeElement.value
    const newIngredients = new Ingredients(nameIng, amountIng)
    this.ingredientAdded.emit(newIngredients)
  }

}
