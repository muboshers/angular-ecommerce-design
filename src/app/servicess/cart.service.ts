import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/cartItem';
import { Foods } from '../shared/models/food.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  private cart: Cart = new Cart();

  addToCart(food: Foods): void {
    this.cart.items.push(new CartItem(food));
  }
  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter((item) => item.food.id !== foodId);
  }
 
  getCart(): Cart {
    return this.cart;
  }
}
