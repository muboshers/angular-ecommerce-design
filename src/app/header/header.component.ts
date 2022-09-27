import { Component, OnInit } from '@angular/core';
import { CartService } from '../servicess/cart.service';
import { Cart } from '../shared/models/Cart';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartItem: Cart = new Cart();

  constructor(private cartService: CartService) {
    this.cartItem = this.cartService.getCart();
  }

  ngOnInit(): void {}
}
