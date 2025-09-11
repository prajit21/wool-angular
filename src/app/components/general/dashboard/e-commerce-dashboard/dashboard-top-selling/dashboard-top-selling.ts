import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Title } from '../../../../../shared/components/ui/title/title';
import { topSales } from '../../../../../shared/data/data/e-commerce-dashboard';

@Component({
  selector: 'app-dashboard-top-selling',
  templateUrl: './dashboard-top-selling.html',
  styleUrl: './dashboard-top-selling.scss',
  imports: [RouterModule, Title],
})
export class DashboardTopSelling {
  public topSales = topSales;
}
