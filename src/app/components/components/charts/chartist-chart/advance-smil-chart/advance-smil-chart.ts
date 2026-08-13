import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { advanceSMILChart } from '../../../../../shared/data/chart/chartist-chart';

@Component({
  selector: 'app-advance-smil-chart',
  imports: [ChartistModule],
  templateUrl: './advance-smil-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './advance-smil-chart.scss',
})
export class AdvanceSmilChart {
  public advanceSMILChart = advanceSMILChart;
}
