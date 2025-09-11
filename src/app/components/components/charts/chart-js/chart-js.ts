import { Component } from '@angular/core';

import { ChartJsBar } from './chart-js-bar/chart-js-bar';
import { ChartJsDoughnut } from './chart-js-doughnut/chart-js-doughnut';
import { ChartJsLine } from './chart-js-line/chart-js-line';
import { ChartJsLineGraph } from './chart-js-line-graph/chart-js-line-graph';
import { ChartJsPolar } from './chart-js-polar/chart-js-polar';
import { ChartJsRadar } from './chart-js-radar/chart-js-radar';

@Component({
  selector: 'app-chart-js',
  imports: [ChartJsBar, ChartJsDoughnut, ChartJsLine, ChartJsLineGraph, ChartJsPolar, ChartJsRadar],
  templateUrl: './chart-js.html',
  styleUrl: './chart-js.scss',
})
export class ChartJs {}
