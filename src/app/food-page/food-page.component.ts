import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common'; // <-- Import CurrencyPipe

@Component({
  selector: 'app-food-page',
 // <-- Add CurrencyPipe to providers
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'] ,
    providers: [CurrencyPipe],// Corrected to styleUrls
})
export class FoodPageComponent implements OnInit {
  food!: Food;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodServices: FoodService
  ) {
    // Fixing the syntax error in the subscribe method
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.food = this.foodServices.getFoodById(params['id']); // Ensure this returns the correct food data
      }
    });
  }

  ngOnInit(): void {
    // You can add other logic to initialize when the component is loaded
  }
}
