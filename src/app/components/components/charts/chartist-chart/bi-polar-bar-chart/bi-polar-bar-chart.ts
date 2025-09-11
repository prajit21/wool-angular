import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { biPolarBarChart } from '../../../../../shared/data/chart/chartist-chart';

@Component({
  selector: 'app-bi-polar-bar-chart',
  imports: [ChartistModule],
  templateUrl: './bi-polar-bar-chart.html',
  styleUrl: './bi-polar-bar-chart.scss',
})
export class BiPolarBarChart {
  public biPolarBarChart = biPolarBarChart;
}
