import {Recipe} from './model/recipe.model';
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'Test Recipe',
      'http://www.macsween.co.uk/media/1148/mac-recipe-3.jpg?crop=0.0000000000000001263187085796,0.15111111111111108,0,0.43222222222222229&cropmode=percentage&width=1200&height=500&rnd=130540467520000000',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Another Recipe',
      'Test Recipe',
      'http://www.macsween.co.uk/media/1148/mac-recipe-3.jpg?crop=0.0000000000000001263187085796,0.15111111111111108,0,0.43222222222222229&cropmode=percentage&width=1200&height=500&rnd=130540467520000000',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Buns', 2)
      ])
  ];

  getRecepies() {
    return this.recipes.slice();
  }

}
