import { Component } from '@angular/core';

import { WidgetsCryptoAnnotation } from './widgets-crypto-annotation/widgets-crypto-annotation';
import { WidgetsCryptoCurrencyPrice } from './widgets-crypto-currency-price/widgets-crypto-currency-price';
import { WidgetsDetailsChart } from './widgets-details-chart/widgets-details-chart';
import { WidgetsFinance } from './widgets-finance/widgets-finance';
import { WidgetsLiveProducts } from './widgets-live-products/widgets-live-products';
import { WidgetsMonthlyHistory } from './widgets-monthly-history/widgets-monthly-history';
import { WidgetsMonthlySales } from './widgets-monthly-sales/widgets-monthly-sales';
import { WidgetsOrderStatus } from './widgets-order-status/widgets-order-status';
import { WidgetsOrderStatus2 } from './widgets-order-status2/widgets-order-status2';
import { WidgetsSkillStatus } from './widgets-skill-status/widgets-skill-status';
import { WidgetsStokeMarket } from './widgets-stoke-market/widgets-stoke-market';
import { WidgetsTurnOver } from './widgets-turn-over/widgets-turn-over';
import { WidgetsUser } from './widgets-user/widgets-user';
import { detailsChart } from '../../../../shared/data/chart/widgets-chart';

@Component({
  selector: 'app-chart',
  imports: [
    WidgetsDetailsChart,
    WidgetsMonthlyHistory,
    WidgetsSkillStatus,
    WidgetsOrderStatus,
    WidgetsLiveProducts,
    WidgetsOrderStatus2,
    WidgetsMonthlySales,
    WidgetsTurnOver,
    WidgetsUser,
    WidgetsCryptoAnnotation,
    WidgetsCryptoCurrencyPrice,
    WidgetsStokeMarket,
    WidgetsFinance,
  ],
  templateUrl: './chart.html',
  styleUrl: './chart.scss',
})
export class Chart {
  public detailsChart = detailsChart;
}
