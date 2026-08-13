import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { extremeResponsiveChart } from '../../../../../shared/data/chart/chartist-chart';

@Component({
  selector: 'app-extreme-responsive-chart',
  imports: [ChartistModule],
  templateUrl: './extreme-responsive-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './extreme-responsive-chart.scss',
})
export class ExtremeResponsiveChart {
  public extremeResponsiveChart = extremeResponsiveChart;
}
