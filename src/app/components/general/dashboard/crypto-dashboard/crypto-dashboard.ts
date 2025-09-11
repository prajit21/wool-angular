import { Component } from '@angular/core';

import { DashboardActiveOrder } from './dashboard-active-order/dashboard-active-order';
import { DashboardBalance } from './dashboard-balance/dashboard-balance';
import { DashboardBuySellCoin } from './dashboard-buy-sell-coin/dashboard-buy-sell-coin';
import { DashboardContactDetails } from './dashboard-contact-details/dashboard-contact-details';
import { DashboardLiveMarketCap } from './dashboard-live-market-cap/dashboard-live-market-cap';
import { DashboardLivePrices } from './dashboard-live-prices/dashboard-live-prices';
import { DashboardMarketOverview } from './dashboard-market-overview/dashboard-market-overview';
import { DashboardPopularCoins } from './dashboard-popular-coins/dashboard-popular-coins';
import { DashboardRecentTradingActivity } from './dashboard-recent-trading-activity/dashboard-recent-trading-activity';
import { DashboardTotalMargin } from './dashboard-total-margin/dashboard-total-margin';
import { TopCommonCharts } from './top-common-charts/top-common-charts';
import {
  bitcoinChart,
  ethereumChart,
  liteCoinChart,
} from '../../../../shared/data/chart/dashboard-chart';

@Component({
  selector: 'app-crypto-dashboard',
  templateUrl: './crypto-dashboard.html',
  styleUrl: './crypto-dashboard.scss',
  imports: [
    DashboardActiveOrder,
    DashboardBuySellCoin,
    DashboardLiveMarketCap,
    DashboardContactDetails,
    DashboardPopularCoins,
    DashboardLivePrices,
    DashboardRecentTradingActivity,
    DashboardTotalMargin,
    TopCommonCharts,
    DashboardBalance,
    DashboardMarketOverview,
  ],
})
export class CryptoDashboard {
  public bitcoinChart = bitcoinChart;
  public ethereumChart = ethereumChart;
  public liteCoinChart = liteCoinChart;
}
