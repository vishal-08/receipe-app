import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { ReceipesComponent } from './receipes/receipes.component';
import { ReceipeListComponent } from './receipes/receipe-list/receipe-list.component';
import { ReceipeDetailComponent } from './receipes/receipe-detail/receipe-detail.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { ReceipeItemComponent } from './receipes/receipe-list/receipe-item/receipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    ReceipesComponent,
    ReceipeListComponent,
    ReceipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    ReceipeItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
