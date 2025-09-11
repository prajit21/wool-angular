import { Component } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts';

import * as chartData from '../../../../../shared/data/chart/chart-js';

@Component({
  selector: 'app-chart-js-line-graph',
  imports: [BaseChartDirective],
  templateUrl: './chart-js-line-graph.html',
  styleUrl: './chart-js-line-graph.scss',
})
export class ChartJsLineGraph {
  public lineGraphOptions = chartData.lineGraphOptions;
  public lineGraphLabels = chartData.lineGraphLabels;
  public lineGraphType = chartData.lineGraphType;
  public lineGraphLegend = chartData.lineGraphLegend;
  public lineGraphData = chartData.lineGraphData;
}
