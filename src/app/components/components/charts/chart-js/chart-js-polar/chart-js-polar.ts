import { Component } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts';

import * as data from '../../../../../shared/data/chart/chart-js';

@Component({
  selector: 'app-chart-js-polar',
  imports: [BaseChartDirective],
  templateUrl: './chart-js-polar.html',
  styleUrl: './chart-js-polar.scss',
})
export class ChartJsPolar {
  public polarChartLabels = data.polarChartLabels;
  public polarChartData = data.polarChartData;
  public polarChartType = data.polarChartType;
  public polarChartColors = data.polarChartColors;
  public polarChartOptions = data.polarChartOptions;
  public polarChartLegend = data.polarChartLegend;
}
