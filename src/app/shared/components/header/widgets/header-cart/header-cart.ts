import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { headerCart } from '../../../../data/data/header';
import { FeatherIcons } from '../../../ui/feather-icons/feather-icons';

@Component({
  selector: 'app-header-cart',
  templateUrl: './header-cart.html',
  styleUrl: './header-cart.scss',
  imports: [FeatherIcons, RouterModule],
})
export class HeaderCart {
  readonly cart = input<boolean>();

  public headerCart = headerCart;

  changeValue(id: number, value: number) {
    this.headerCart.filter(data => {
      if (data.id == id) {
        if (value == -1) {
          if (data.value > 1) {
            data.value -= 1;
          }
        } else if (value == 1) {
          data.value += 1;
        }
      }
    });
  }
}
