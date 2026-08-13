import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { simpleLineChart } from '../../../../../shared/data/chart/chartist-chart';

@Component({
  selector: 'app-simple-line-chart',
  imports: [ChartistModule],
  templateUrl: './simple-line-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './simple-line-chart.scss',
})
export class SimpleLineChart {
  public simpleLineChart = simpleLineChart;
}
