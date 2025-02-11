import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common'; // <-- Import CurrencyPipe
import { CartService } from '../services/cart/cart.service'; // <-- Import CartService

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
    private currencyPipe: CurrencyPipe, // <-- Use CurrencyPipe in the component constructor instead of app.component.ts
    private readonly cartService:CartService,
    private activatedRoute: ActivatedRoute,
    private foodServices: FoodService,
    private readonly router: Router
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
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-paage');
  }
}
