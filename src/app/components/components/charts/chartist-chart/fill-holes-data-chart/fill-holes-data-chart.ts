import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { filledHolesDataChart } from '../../../../../shared/data/chart/chartist-chart';

@Component({
  selector: 'app-fill-holes-data-chart',
  imports: [ChartistModule],
  templateUrl: './fill-holes-data-chart.html',
  styleUrl: './fill-holes-data-chart.scss',
})
export class FillHolesDataChart {
  public filledHolesDataChart = filledHolesDataChart;
}
