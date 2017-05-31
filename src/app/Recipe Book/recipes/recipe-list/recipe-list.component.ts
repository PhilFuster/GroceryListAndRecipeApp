import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'A test description',
      'https://search.chow.com/thumbnail/800/600/www.chowstatic.com/assets/recipe_photos/31153_RecipeImage_pulled_pork_enchaladas_.jpg'),
    new Recipe('A test Recipe 2', 'A test description 2',
      'https://search.chow.com/thumbnail/800/600/www.chowstatic.com/assets/recipe_photos/31153_RecipeImage_pulled_pork_enchaladas_.jpg')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(r: Recipe) {
    this.recipeWasSelected.emit(r);
  }

}
