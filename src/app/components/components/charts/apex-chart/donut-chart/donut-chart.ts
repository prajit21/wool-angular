import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { donutChart } from '../../../../../shared/data/chart/apex-chart';

@Component({
  selector: 'app-donut-chart',
  imports: [NgApexchartsModule],
  templateUrl: './donut-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './donut-chart.scss',
})
export class DonutChart {
  public donutChart = donutChart;
}
