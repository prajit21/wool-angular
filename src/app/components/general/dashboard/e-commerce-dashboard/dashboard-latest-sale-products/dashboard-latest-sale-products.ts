import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Title } from '../../../../../shared/components/ui/title/title';
import { latestSaleProducts } from '../../../../../shared/data/data/e-commerce-dashboard';

@Component({
  selector: 'app-dashboard-latest-sale-products',
  imports: [Title, RouterModule],
  templateUrl: './dashboard-latest-sale-products.html',
  styleUrl: './dashboard-latest-sale-products.scss',
})
export class DashboardLatestSaleProducts {
  public latestSaleProducts = latestSaleProducts;
}
