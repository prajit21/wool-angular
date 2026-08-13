import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { horizontalBarChart } from '../../../../../shared/data/chart/chartist-chart';

@Component({
  selector: 'app-horizontal-bar-chart',
  imports: [ChartistModule],
  templateUrl: './horizontal-bar-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './horizontal-bar-chart.scss',
})
export class HorizontalBarChart {
  public horizontalBarChart = horizontalBarChart;
}
