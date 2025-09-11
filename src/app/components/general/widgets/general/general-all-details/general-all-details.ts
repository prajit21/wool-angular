import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { SvgIcon } from '../../../../../shared/components/ui/svg-icon/svg-icon';
import { orderChart, profitChart } from '../../../../../shared/data/chart/widgets-general-chart';
import { allDetails } from '../../../../../shared/data/data/widgets-general';

@Component({
  selector: 'app-general-all-details',
  imports: [SvgIcon, NgApexchartsModule],
  templateUrl: './general-all-details.html',
  styleUrl: './general-all-details.scss',
})
export class GeneralAllDetails {
  public allDetails = allDetails;
  public orderChart = orderChart;
  public profitChart = profitChart;
}
