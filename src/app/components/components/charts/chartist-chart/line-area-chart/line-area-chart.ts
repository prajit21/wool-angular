import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { lineAreaChart } from '../../../../../shared/data/chart/chartist-chart';

@Component({
  selector: 'app-line-area-chart',
  imports: [ChartistModule],
  templateUrl: './line-area-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './line-area-chart.scss',
})
export class LineAreaChart {
  public lineAreaChart = lineAreaChart;
}
