import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Test Recipe', 'http://www.macsween.co.uk/media/1148/mac-recipe-3.jpg?crop=0.0000000000000001263187085796,0.15111111111111108,0,0.43222222222222229&cropmode=percentage&width=1200&height=500&rnd=130540467520000000'),
    new Recipe('Another Recipe', 'Test Recipe', 'http://www.macsween.co.uk/media/1148/mac-recipe-3.jpg?crop=0.0000000000000001263187085796,0.15111111111111108,0,0.43222222222222229&cropmode=percentage&width=1200&height=500&rnd=130540467520000000')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
