import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { Title } from '../../../../../shared/components/ui/title/title';
import { salesAnalyticsChart } from '../../../../../shared/data/chart/e-commerce-dashboard-chart';

@Component({
  selector: 'app-dashboard-sales-analytics',
  imports: [Title, NgApexchartsModule],
  templateUrl: './dashboard-sales-analytics.html',
  styleUrl: './dashboard-sales-analytics.scss',
})
export class DashboardSalesAnalytics {
  public salesAnalyticsChart = salesAnalyticsChart;
}
