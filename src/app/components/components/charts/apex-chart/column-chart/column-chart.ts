import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { columnChart } from '../../../../../shared/data/chart/apex-chart';

@Component({
  selector: 'app-column-chart',
  imports: [NgApexchartsModule],
  templateUrl: './column-chart.html',
  styleUrl: './column-chart.scss',
})
export class ColumnChart {
  public columnChart = columnChart;
}
