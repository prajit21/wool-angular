import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { areaSpaLineChart } from '../../../../../shared/data/chart/apex-chart';

@Component({
  selector: 'app-area-spaline-chart',
  imports: [NgApexchartsModule],
  templateUrl: './area-spaline-chart.html',
  styleUrl: './area-spaline-chart.scss',
})
export class AreaSpalineChart {
  public areaSpaLineChart = areaSpaLineChart;
}
