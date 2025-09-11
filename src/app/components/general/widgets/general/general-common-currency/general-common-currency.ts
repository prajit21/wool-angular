import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { FeatherIcons } from '../../../../../shared/components/ui/feather-icons/feather-icons';
import { SvgIcon } from '../../../../../shared/components/ui/svg-icon/svg-icon';
import { WidgetChartOptions } from '../../../../../shared/interface/widgets/chart';

@Component({
  selector: 'app-general-common-currency',
  imports: [NgApexchartsModule, FeatherIcons, SvgIcon, CommonModule],
  templateUrl: './general-common-currency.html',
  styleUrl: './general-common-currency.scss',
})
export class GeneralCommonCurrency {
  readonly currency = input<WidgetChartOptions>();
}
