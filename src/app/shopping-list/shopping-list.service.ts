import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

Injectable()
export class ShoppingListService {
	ingredientsChanged = new EventEmitter<Ingredient[]>();
	ingredients: Ingredient[] = [
	  	new Ingredient('Flour', 500),
	  	new Ingredient('Tomatoes', 10)
  	];

  	getIngredients() {
  		return this.ingredients.slice();
  	}

  	addIngredient(ingredient: Ingredient) {
  		this.ingredients.push(ingredient);
  		this.ingredientsChanged.emit(this.ingredients.slice());
  	}

    addIngredients(ingredients: Ingredient[]) {
      // for (let ingredient of ingredients) {
      //   this.addIngredient(ingredient);    = Since addIngredient() emmits the more emmits could overload the application.
      // }

      this.ingredients.push(...ingredients);
      this.ingredientsChanged.emit(this.ingredients.slice());
    }
}