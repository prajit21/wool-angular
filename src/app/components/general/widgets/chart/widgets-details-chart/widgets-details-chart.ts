import { Component, input } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { TotalSaleChartOption } from '../../../../../shared/interface/widgets/chart';

@Component({
  selector: 'app-widgets-details-chart',
  imports: [NgApexchartsModule],
  templateUrl: './widgets-details-chart.html',
  styleUrl: './widgets-details-chart.scss',
})
export class WidgetsDetailsChart {
  // 👇 enforce correct type instead of `any`
  readonly details = input.required<TotalSaleChartOption>();
}
