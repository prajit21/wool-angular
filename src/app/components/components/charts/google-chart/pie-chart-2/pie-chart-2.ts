import { Component } from '@angular/core';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { pieChart2 } from '../../../../../shared/data/chart/google-chart';

@Component({
  selector: 'app-pie-chart-2',
  imports: [Ng2GoogleChartsModule],
  templateUrl: './pie-chart-2.html',
  styleUrl: './pie-chart-2.scss',
})
export class PieChart2 {
  public pieChart = pieChart2;
}
