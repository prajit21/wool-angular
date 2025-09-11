import { Component } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts';

import * as data from '../../../../../shared/data/chart/chart-js';

@Component({
  selector: 'app-chart-js-doughnut',
  imports: [BaseChartDirective],
  templateUrl: './chart-js-doughnut.html',
  styleUrl: './chart-js-doughnut.scss',
})
export class ChartJsDoughnut {
  public doughnutChartLabels = data.doughnutChartLabels;
  public doughnutChartData = data.doughnutChartData;
  public doughnutChartType = data.doughnutChartType;
  public doughnutChartColors = data.doughnutChartColors;
  public doughnutChartOptions = data.doughnutChartOptions;
  public doughnutChartLegend = data.doughnutChartLegend;
}
