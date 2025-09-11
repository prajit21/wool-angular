import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { bubbleChart } from '../../../../../shared/data/chart/apex-chart';

@Component({
  selector: 'app-bubble-chart',
  imports: [NgApexchartsModule],
  templateUrl: './bubble-chart.html',
  styleUrl: './bubble-chart.scss',
})
export class BubbleChart {
  public bubbleChart = bubbleChart;
}
