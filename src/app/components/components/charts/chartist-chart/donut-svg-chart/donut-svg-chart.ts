import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { donutSVGChart } from '../../../../../shared/data/chart/chartist-chart';

@Component({
  selector: 'app-donut-svg-chart',
  imports: [ChartistModule],
  templateUrl: './donut-svg-chart.html',
  styleUrl: './donut-svg-chart.scss',
})
export class DonutSvgChart {
  public donutSVGChart = donutSVGChart;
}
