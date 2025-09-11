import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { pieChart } from '../../../../../shared/data/chart/apex-chart';

@Component({
  selector: 'app-pie-chart',
  imports: [NgApexchartsModule],
  templateUrl: './pie-chart.html',
  styleUrl: './pie-chart.scss',
})
export class PieChart {
  public pieChart = pieChart;
}
