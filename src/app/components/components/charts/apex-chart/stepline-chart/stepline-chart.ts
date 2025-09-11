import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { stepLineChart } from '../../../../../shared/data/chart/apex-chart';

@Component({
  selector: 'app-stepline-chart',
  imports: [NgApexchartsModule],
  templateUrl: './stepline-chart.html',
  styleUrl: './stepline-chart.scss',
})
export class SteplineChart {
  public stepLineChart = stepLineChart;
}
