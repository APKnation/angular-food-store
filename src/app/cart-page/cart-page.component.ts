import { Component,OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { FoodService } from '../services/food/food.service';
@Component({
  selector: 'app-cart-page',
  standalone: false,
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit {
  ngOnInit(): void {
    // Initialization logic here
  }
  cart!: Cart;
constructor(private cartService: CartService,){
  this.setCart();
}

removeFromCart(CartItem:CartItem){
this.cartService.removeFromCart(CartItem.food.id);
this.setCart();
}
changeQuantity(cartItem:CartItem, quantityInstring:string){
  const quantity=parseInt(quantityInstring);
  this.cartService.changeQuantity(cartItem.food.id, quantity);
  this.setCart();
}
setCart() {
  this.cart = this.cartService.getCart();
}
}
