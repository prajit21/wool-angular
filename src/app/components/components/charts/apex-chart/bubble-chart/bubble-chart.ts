import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { bubbleChart } from '../../../../../shared/data/chart/apex-chart';

@Component({
  selector: 'app-bubble-chart',
  imports: [NgApexchartsModule],
  templateUrl: './bubble-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './bubble-chart.scss',
})
export class BubbleChart {
  public bubbleChart = bubbleChart;
}
