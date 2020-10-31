import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  	@ViewChild('nameInput')itemName: ElementRef;
  	@ViewChild('amountInput')itemAmount: ElementRef;

	constructor(private shopListService: ShoppingListService) { }

	ngOnInit(): void {
	}

	onAddItem() {
		const ingName = this.itemName.nativeElement.value;
		const ingAmount = this.itemAmount.nativeElement.value;
		const newIngredient = new Ingredient(ingName, ingAmount);

		this.shopListService.addIngredient(newIngredient);
	}

}
