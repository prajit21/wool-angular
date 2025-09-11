import { Component } from '@angular/core';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { pieChart3 } from '../../../../../shared/data/chart/google-chart';

@Component({
  selector: 'app-pie-chart-3',
  imports: [Ng2GoogleChartsModule],
  templateUrl: './pie-chart-3.html',
  styleUrl: './pie-chart-3.scss',
})
export class PieChart3 {
  public pieChart = pieChart3;
}
