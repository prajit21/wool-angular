import { Component } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts';

import * as data from '../../../../../shared/data/chart/chart-js';

@Component({
  selector: 'app-chart-js-line',
  imports: [BaseChartDirective],
  templateUrl: './chart-js-line.html',
  styleUrl: './chart-js-line.scss',
})
export class ChartJsLine {
  public barChartOptions = data.barChartOptions;
  public barChartLabels = data.barChartLabels;
  public barChartType = data.barChartType;
  public barChartLegend = data.barChartLegend;
  public barChartData = data.barChartData;
}
