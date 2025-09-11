import { Component } from '@angular/core';

import { wishlistProducts } from '../../../../shared/data/data/e-commerce/wishlist';

@Component({
  selector: 'app-wishlist',
  imports: [],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.scss',
})
export class Wishlist {
  public wishlistProducts = wishlistProducts;
}
