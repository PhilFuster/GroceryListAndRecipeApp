import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit {
  @Output() addIngredient = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') ingredientInputRef: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {

    this.addIngredient.emit({
      name: this.nameInputRef.nativeElement.value,
      amount: this.ingredientInputRef.nativeElement.value
    });
  }

}
