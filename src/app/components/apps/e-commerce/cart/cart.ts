import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FeatherIcons } from '../../../../shared/components/ui/feather-icons/feather-icons';
import { cartItem } from '../../../../shared/data/data/e-commerce/cart';

@Component({
  selector: 'app-cart',
  imports: [FeatherIcons, RouterModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  public cartItem = cartItem;

  changeValue(id: number, value: number) {
    this.cartItem.filter(data => {
      if (data.id == id) {
        if (value == 1) {
          data.counter += 1;
        } else if (value == -1) {
          if (data.counter > 1) {
            data.counter -= 1;
          }
        }
      }
    });
  }
}
