import { Component } from '@angular/core';

import { DashboardConversionRate } from './dashboard-conversion-rate/dashboard-conversion-rate';
import { DashboardLatestSaleCustomers } from './dashboard-latest-sale-customers/dashboard-latest-sale-customers';
import { DashboardLatestSaleProducts } from './dashboard-latest-sale-products/dashboard-latest-sale-products';
import { DashboardProfit } from './dashboard-profit/dashboard-profit';
import { DashboardProfitDetails } from './dashboard-profit-details/dashboard-profit-details';
import { DashboardSalesAnalytics } from './dashboard-sales-analytics/dashboard-sales-analytics';
import { DashboardTopCountries } from './dashboard-top-countries/dashboard-top-countries';
import { DashboardTopDealers } from './dashboard-top-dealers/dashboard-top-dealers';
import { DashboardTopSelling } from './dashboard-top-selling/dashboard-top-selling';

@Component({
  selector: 'app-e-commerce-dashboard',
  templateUrl: './e-commerce-dashboard.html',
  styleUrl: './e-commerce-dashboard.scss',
  imports: [
    DashboardConversionRate,
    DashboardLatestSaleCustomers,
    DashboardLatestSaleProducts,
    DashboardProfit,
    DashboardProfitDetails,
    DashboardSalesAnalytics,
    DashboardTopCountries,
    DashboardTopDealers,
    DashboardTopSelling,
  ],
})
export class ECommerceDashboard {}
