import { Component } from '@angular/core';

import { DashboardBuyCoin } from './dashboard-buy-coin/dashboard-buy-coin';
import { DashboardSellCoin } from './dashboard-sell-coin/dashboard-sell-coin';

@Component({
  selector: 'app-dashboard-buy-sell-coin',
  imports: [DashboardSellCoin, DashboardBuyCoin],
  templateUrl: './dashboard-buy-sell-coin.html',
  styleUrl: './dashboard-buy-sell-coin.scss',
})
export class DashboardBuySellCoin {
  public activeTab: string = 'buy';

  changeTab(value: string) {
    this.activeTab = value;
  }
}
