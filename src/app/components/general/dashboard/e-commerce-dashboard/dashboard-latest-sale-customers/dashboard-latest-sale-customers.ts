import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Title } from '../../../../../shared/components/ui/title/title';
import { latestSaleCustomers } from '../../../../../shared/data/data/e-commerce-dashboard';

@Component({
  selector: 'app-dashboard-latest-sale-customers',
  imports: [Title, RouterModule],
  templateUrl: './dashboard-latest-sale-customers.html',
  styleUrl: './dashboard-latest-sale-customers.scss',
})
export class DashboardLatestSaleCustomers {
  public latestSaleCustomers = latestSaleCustomers;
}
