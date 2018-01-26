import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipesService} from '../recipes/recipes.service';
import {Recipe} from '../recipes/model/recipe.model';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {

  constructor( private http: Http, private recipesService: RecipesService) { }

  onStoreData() {
    return this.http.put('https://ng-recipe-book-49bbb.firebaseio.com/recipes.json', this.recipesService.getRecepies());
  }

  getRecipes() {
    return this.http.get('https://ng-recipe-book-49bbb.firebaseio.com/recipes.json')
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (const recipe of recipes){
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
              console.log(recipe);
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe []) => {
          this.recipesService.setRecipes(recipes);
        }
      );
  }
}
