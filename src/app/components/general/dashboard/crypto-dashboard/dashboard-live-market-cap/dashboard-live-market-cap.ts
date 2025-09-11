import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { Title } from '../../../../../shared/components/ui/title/title';
import { liveMarketCap } from '../../../../../shared/data/chart/dashboard-chart';

@Component({
  selector: 'app-dashboard-live-market-cap',
  imports: [NgApexchartsModule, Title],
  templateUrl: './dashboard-live-market-cap.html',
  styleUrl: './dashboard-live-market-cap.scss',
})
export class DashboardLiveMarketCap {
  public liveMarketCap = liveMarketCap;
}
