import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-product-page-details',
  imports: [BarRatingModule, RouterModule],
  templateUrl: './product-page-details.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './product-page-details.scss',
})
export class ProductPageDetails {
  public cssRate = 1;
}
