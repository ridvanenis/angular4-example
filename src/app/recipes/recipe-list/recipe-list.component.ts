import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../model/recipe.model';
import {RecipesService} from '../recipes.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] ;
  subscription: Subscription;

  constructor(private recipeService: RecipesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
    this.recipes = this.recipeService.getRecepies();
  }

onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route}) ;
}
ngOnDestroy() {
    this.subscription.unsubscribe();
}
}
