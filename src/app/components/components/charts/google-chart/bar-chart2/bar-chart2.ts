import { Component } from '@angular/core';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { barChart } from '../../../../../shared/data/chart/google-chart';

@Component({
  selector: 'app-bar-chart2',
  imports: [Ng2GoogleChartsModule],
  templateUrl: './bar-chart2.html',
  styleUrl: './bar-chart2.scss',
})
export class BarChart2 {
  public barChart = barChart;
}
