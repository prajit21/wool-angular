import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { svgPathChart } from '../../../../../shared/data/chart/chartist-chart';

@Component({
  selector: 'app-svg-path-chart',
  imports: [ChartistModule],
  templateUrl: './svg-path-chart.html',
  styleUrl: './svg-path-chart.scss',
})
export class SvgPathChart {
  public svgPathChart = svgPathChart;
}
