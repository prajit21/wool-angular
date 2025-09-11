import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { SvgIcon } from '../../../../../shared/components/ui/svg-icon/svg-icon';
import { Title } from '../../../../../shared/components/ui/title/title';
import { conversionRateChart } from '../../../../../shared/data/chart/e-commerce-dashboard-chart';
import { conversionRate } from '../../../../../shared/data/data/e-commerce-dashboard';

@Component({
  selector: 'app-dashboard-conversion-rate',
  imports: [Title, NgApexchartsModule, SvgIcon],
  templateUrl: './dashboard-conversion-rate.html',
  styleUrl: './dashboard-conversion-rate.scss',
})
export class DashboardConversionRate {
  public conversionRateChart = conversionRateChart;
  public conversionRate = conversionRate;
}
