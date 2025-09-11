import { Component } from '@angular/core';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { areaChart2 } from '../../../../../shared/data/chart/google-chart';

@Component({
  selector: 'app-area-chart-2',
  imports: [Ng2GoogleChartsModule],
  templateUrl: './area-chart-2.html',
  styleUrl: './area-chart-2.scss',
})
export class AreaChart2 {
  public areaChart2 = areaChart2;
}
