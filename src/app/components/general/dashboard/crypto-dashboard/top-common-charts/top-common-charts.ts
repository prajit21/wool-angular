import { Component, input } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { SvgIcon } from '../../../../../shared/components/ui/svg-icon/svg-icon';
import { CoinChartOptions } from '../../../../../shared/interface/dashboard/chart';

@Component({
  selector: 'app-top-common-charts',
  imports: [SvgIcon, NgApexchartsModule],
  templateUrl: './top-common-charts.html',
  styleUrl: './top-common-charts.scss',
})
export class TopCommonCharts {
  readonly chartData = input<CoinChartOptions>();
}
