import { Component, input } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { FeatherIcons } from '../../../../../shared/components/ui/feather-icons/feather-icons';
import { RadialChartOptions } from '../../../../../shared/interface/dashboard/chart';

@Component({
  selector: 'app-general-common-average-of-day',
  imports: [FeatherIcons, NgApexchartsModule],
  templateUrl: './general-common-average-of-day.html',
  styleUrl: './general-common-average-of-day.scss',
})
export class GeneralCommonAverageOfDay {
  readonly average = input<RadialChartOptions>();
}
