import { CartItem } from './../shared/models/cartItem';
import { CartService } from './../servicess/cart.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/Cart';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.scss'],
})
export class CartpageComponent implements OnInit {
  cartItem: Cart = new Cart();
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.setCart();
  }

  setCart() {
    this.cartItem = this.cartService.getCart();
  }


  removeFromCart(cartItem: CartItem): void {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
}
