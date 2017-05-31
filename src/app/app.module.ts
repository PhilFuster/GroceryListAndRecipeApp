import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './Shopping List/shopping-list/shopping-list.component';
import { RecipeItemComponent } from './Recipe Book/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './Recipe Book/recipes/recipe-detail/recipe-detail.component';
import {HeaderComponent} from './header/header.component';
import { RecipesComponent } from './Recipe Book/recipes/recipes.component';
import {RecipeListComponent} from './Recipe Book/recipes/recipe-list/recipe-list.component';
import {ShoppingEditComponent} from './Shopping List/shopping-list/shopping-edit/shopping-edit.component';
import {DropdownDirective} from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
