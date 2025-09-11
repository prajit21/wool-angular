import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { radialBarChart } from '../../../../../shared/data/chart/apex-chart';

@Component({
  selector: 'app-radial-bar-chart',
  imports: [NgApexchartsModule],
  templateUrl: './radial-bar-chart.html',
  styleUrl: './radial-bar-chart.scss',
})
export class RadialBarChart {
  public radialBarChart = radialBarChart;
}
