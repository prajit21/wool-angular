import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { barChart } from '../../../../../shared/data/chart/apex-chart';

@Component({
  selector: 'app-bar-chart',
  imports: [NgApexchartsModule],
  templateUrl: './bar-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './bar-chart.scss',
})
export class BarChart {
  public barChart = barChart;
}
