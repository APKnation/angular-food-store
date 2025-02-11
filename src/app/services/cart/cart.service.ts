import { Injectable } from '@angular/core';
import { CartItem } from '../../shared/models/CartItem';
import{Food} from '../../shared/models/food';
import {Cart} from '../../shared/models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private readonly cart: Cart = { items: [], totalPrice: 0 };
  addToCart(food:Food):void{
    let cartItem   = this.cart.items.find((item: CartItem) => item.food.id === food.id);
    if(cartItem){
      this.changeQuantity(food.id,cartItem.quantity +1);
      return;
  }
this.cart.items.push(new CartItem(food));}
removeFromCart(foodId:number):void {
  this.cart.items=this.cart.items.filter((item: CartItem) => item.food.id !== foodId);
}
changeQuantity(foodId:number,quantity:number){
  let cartItem=this.cart.items.find((item: CartItem) => item.food.id === foodId);
  if(!cartItem) return;
  cartItem.quantity=quantity;
}
getCart():Cart{
return this.cart;
}
}
