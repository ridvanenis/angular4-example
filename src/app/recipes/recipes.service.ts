import {Recipe} from './model/recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {

  constructor(private slService: ShoppingListService) {}

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
      'https://static01.nyt.com/images/2014/01/06/dining/recipes-wildmushroomstew/recipes-wildmushroomstew-articleLarge.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Buns', 2)
      ])
  ];

  getRecepies() {
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
