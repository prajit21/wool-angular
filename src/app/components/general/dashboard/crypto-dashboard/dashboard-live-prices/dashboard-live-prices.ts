import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { SvgIcon } from '../../../../../shared/components/ui/svg-icon/svg-icon';
import { Title } from '../../../../../shared/components/ui/title/title';
import { livePrice } from '../../../../../shared/data/chart/dashboard-chart';

@Component({
  selector: 'app-dashboard-live-prices',
  imports: [SvgIcon, NgApexchartsModule, Title],
  templateUrl: './dashboard-live-prices.html',
  styleUrl: './dashboard-live-prices.scss',
})
export class DashboardLivePrices {
  public livePrice = livePrice;
}
