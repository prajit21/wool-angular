import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { radarChart } from '../../../../../shared/data/chart/apex-chart';

@Component({
  selector: 'app-radar-chart',
  imports: [NgApexchartsModule],
  templateUrl: './radar-chart.html',
  styleUrl: './radar-chart.scss',
})
export class RadarChart {
  public radarChart = radarChart;
}
