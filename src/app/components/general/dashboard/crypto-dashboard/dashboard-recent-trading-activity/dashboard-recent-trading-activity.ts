import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SvgIcon } from '../../../../../shared/components/ui/svg-icon/svg-icon';
import { Title } from '../../../../../shared/components/ui/title/title';
import { recentTradingActivity } from '../../../../../shared/data/data/dashboard';

@Component({
  selector: 'app-dashboard-recent-trading-activity',
  templateUrl: './dashboard-recent-trading-activity.html',
  styleUrl: './dashboard-recent-trading-activity.scss',
  imports: [SvgIcon, CommonModule, RouterModule, Title],
})
export class DashboardRecentTradingActivity {
  public recentTradingActivity = recentTradingActivity;
}
