import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { holesDataChart } from '../../../../../shared/data/chart/chartist-chart';

@Component({
  selector: 'app-holes-data-chart',
  imports: [ChartistModule],
  templateUrl: './holes-data-chart.html',
  styleUrl: './holes-data-chart.scss',
})
export class HolesDataChart {
  public holesDataChart = holesDataChart;
}
