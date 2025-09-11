import { Component } from '@angular/core';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { areaChart1 } from '../../../../../shared/data/chart/google-chart';

@Component({
  selector: 'app-area-chart-1',
  imports: [Ng2GoogleChartsModule],
  templateUrl: './area-chart-1.html',
  styleUrl: './area-chart-1.scss',
})
export class AreaChart1 {
  public areaChart1 = areaChart1;
}
