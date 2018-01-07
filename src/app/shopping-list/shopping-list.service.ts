import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";
import {Subject} from "rxjs/Subject";

export class ShoppingListService {

  ingredientsChange = new Subject<Ingredient[]>();
  itemEdit = new Subject<number>();
  private   ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients (){
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient:  Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChange.next(this.ingredients.slice());
  }

  addIngredients(ingrediens: Ingredient[]) {
    this.ingredients.push(...ingrediens);
    this.ingredientsChange.next(this.ingredients.slice());
  }
}
