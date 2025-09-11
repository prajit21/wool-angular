import { Component } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts';

import { barChart } from '../../../../../shared/data/chart/chart-js';

@Component({
  selector: 'app-chart-js-bar',
  imports: [BaseChartDirective],
  templateUrl: './chart-js-bar.html',
  styleUrl: './chart-js-bar.scss',
})
export class ChartJsBar {
  public barChart = barChart;
  public barChartLegend = false;

  public barChartOptions = {
    responsive: false,
  };
}
