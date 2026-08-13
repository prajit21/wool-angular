import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { candleStickChart } from '../../../../../shared/data/chart/apex-chart';

@Component({
  selector: 'app-candlestick-chart',
  imports: [NgApexchartsModule],
  templateUrl: './candlestick-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './candlestick-chart.scss',
})
export class CandlestickChart {
  public candleStickChart = candleStickChart;
}
