import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SvgIcon } from '../../../../../shared/components/ui/svg-icon/svg-icon';
import { popularCoins } from '../../../../../shared/data/data/dashboard';

@Component({
  selector: 'app-dashboard-popular-coins',
  imports: [RouterModule, SvgIcon],
  templateUrl: './dashboard-popular-coins.html',
  styleUrl: './dashboard-popular-coins.scss',
})
export class DashboardPopularCoins {
  public popularCoins = popularCoins;

  public activeTab: string = 'contact';

  getTab(value: string) {
    this.activeTab = value;
  }
}
