import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { mixChart } from '../../../../../shared/data/chart/apex-chart';

@Component({
  selector: 'app-mixed-chart',
  imports: [NgApexchartsModule],
  templateUrl: './mixed-chart.html',
  styleUrl: './mixed-chart.scss',
})
export class MixedChart {
  public mixChart = mixChart;
}
