import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Array<Recipe> = [
    new Recipe(
      'Schinitzel',
      'Description Recipe',
      'https://www.destinomunique.com.br/wp-content/uploads/2016/11/Schnitzel-Receita-Segredo.jpg',
      [ new Ingredient('Meat', 1), new Ingredient('French Fries', 20) ]
    ),
    new Recipe(
      'Ratatouille',
      'Description Recipe',
      'https://s2.glbimg.com/jOvVw-5MaZswJgZvZ8ya1V7ZMXE=/0x0:800x533/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2018/c/r/mLrOqnRiemx034biSdHw/ratatouille.jpg',
      [ new Ingredient('Vegetables', 2), new Ingredient('Sauce', 1) ]
    ),
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes(): Array<Recipe> {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Array<Ingredient>): void {
    this.slService.addIngredients(ingredients);
  }
}
