import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../model/recipe.model';
import {RecipesService} from '../recipes.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] ;

  constructor(private recipeService: RecipesService,
              private routeter: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[] ) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecepies();
  }

onNewRecipe() {
    this.routeter.navigate(['new'], {relativeTo: this.route}) ;
}
ngOnDestroy() {
    this.recipeService.recipesChanged.unsubscribe();
}
}
