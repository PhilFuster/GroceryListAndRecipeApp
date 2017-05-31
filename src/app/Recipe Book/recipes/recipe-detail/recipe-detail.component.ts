import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Output() toggleDropdown = new EventEmitter<{toggle: boolean}>();
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {

  }

  onDropdownMenuToggle() {

  }

}
