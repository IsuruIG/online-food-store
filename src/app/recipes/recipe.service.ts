import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
  	new Recipe(
  		'Hamburger', 
  		'A juicy hamburger', 
  		'https://image.shutterstock.com/z/stock-photo-delicious-grilled-burgers-1146199442.jpg',
  		[
  			new Ingredient('Buns', 2),
  			new Ingredient('Patties(Chicken)', 2),
  			new Ingredient('Tomatoes', 1),
  			new Ingredient('Lettuce', 1),
  			new Ingredient('Onion', 1)
  		]),

  	new Recipe(
  		'Schnitzel',
  		'A delicious schnitzel',
  		'https://cdn.pixabay.com/photo/2019/03/25/20/20/schnitzel-4081269_1280.jpg',
  		[
  			new Ingredient('Chicken', 1),
  			new Ingredient('French Fries', 20)
  		])
  ];

  constructor(private shopListSvc: ShoppingListService) {}

  getRecipes() {
  	return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addToShoppingList(recipeIngredients: Ingredient[]) {
  		this.shopListSvc.addIngredients(recipeIngredients);
  }
}