import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { stackedBarChart } from '../../../../../shared/data/chart/chartist-chart';

@Component({
  selector: 'app-stacked-bar-chart',
  imports: [ChartistModule],
  templateUrl: './stacked-bar-chart.html',
  styleUrl: './stacked-bar-chart.scss',
})
export class StackedBarChart {
  public stackedBarChart = stackedBarChart;
}
