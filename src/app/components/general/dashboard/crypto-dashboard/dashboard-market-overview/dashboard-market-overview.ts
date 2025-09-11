import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { Title } from '../../../../../shared/components/ui/title/title';
import { marketOverview } from '../../../../../shared/data/chart/dashboard-chart';

@Component({
  selector: 'app-dashboard-market-overview',
  imports: [NgApexchartsModule, Title],
  templateUrl: './dashboard-market-overview.html',
  styleUrl: './dashboard-market-overview.scss',
})
export class DashboardMarketOverview {
  public marketOverview = marketOverview;
}
