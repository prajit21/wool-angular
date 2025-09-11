import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { SvgIcon } from '../../../../../shared/components/ui/svg-icon/svg-icon';
import { Title } from '../../../../../shared/components/ui/title/title';
import { profitChart } from '../../../../../shared/data/chart/e-commerce-dashboard-chart';

@Component({
  selector: 'app-dashboard-profit',
  imports: [NgApexchartsModule, Title, SvgIcon],
  templateUrl: './dashboard-profit.html',
  styleUrl: './dashboard-profit.scss',
})
export class DashboardProfit {
  public profitChart = profitChart;
}
