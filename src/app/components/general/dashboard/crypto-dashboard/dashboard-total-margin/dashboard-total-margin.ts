import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { SvgIcon } from '../../../../../shared/components/ui/svg-icon/svg-icon';

@Component({
  selector: 'app-dashboard-total-margin',
  templateUrl: './dashboard-total-margin.html',
  styleUrl: './dashboard-total-margin.scss',
  imports: [SvgIcon, NgApexchartsModule],
})
export class DashboardTotalMargin {}
