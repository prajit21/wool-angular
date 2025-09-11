import { Component } from '@angular/core';

import { SvgIcon } from '../../../../../shared/components/ui/svg-icon/svg-icon';
import { profitDetails } from '../../../../../shared/data/data/e-commerce-dashboard';

@Component({
  selector: 'app-dashboard-profit-details',
  imports: [SvgIcon],
  templateUrl: './dashboard-profit-details.html',
  styleUrl: './dashboard-profit-details.scss',
})
export class DashboardProfitDetails {
  public profitDetails = profitDetails;
}
