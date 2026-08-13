import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts';

import * as data from '../../../../../shared/data/chart/chart-js';

@Component({
  selector: 'app-chart-js-radar',
  imports: [BaseChartDirective],
  templateUrl: './chart-js-radar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './chart-js-radar.scss',
})
export class ChartJsRadar {
  public radarGraphOptions = data.radarGraphOptions;
  public radarGraphLabels = data.radarGraphLabels;
  public radarGraphType = data.radarGraphType;
  public radarGraphLegend = data.radarGraphLegend;
  public radarGraphData = data.radarGraphData;
}
