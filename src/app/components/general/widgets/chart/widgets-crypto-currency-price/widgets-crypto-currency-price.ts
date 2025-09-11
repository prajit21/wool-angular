import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { Title } from '../../../../../shared/components/ui/title/title';
import { cryptoCurrencyPrice } from '../../../../../shared/data/chart/widgets-chart';

@Component({
  selector: 'app-widgets-crypto-currency-price',
  imports: [Title, NgApexchartsModule],
  templateUrl: './widgets-crypto-currency-price.html',
  styleUrl: './widgets-crypto-currency-price.scss',
})
export class WidgetsCryptoCurrencyPrice {
  public cryptoCurrencyPrice = cryptoCurrencyPrice;
}
