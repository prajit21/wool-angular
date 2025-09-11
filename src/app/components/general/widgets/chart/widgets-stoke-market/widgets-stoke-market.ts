import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { Title } from '../../../../../shared/components/ui/title/title';
import { stokeMarket } from '../../../../../shared/data/chart/widgets-chart';

@Component({
  selector: 'app-widgets-stoke-market',
  imports: [Title, NgApexchartsModule],
  templateUrl: './widgets-stoke-market.html',
  styleUrl: './widgets-stoke-market.scss',
})
export class WidgetsStokeMarket {
  public stokeMarket = stokeMarket;
}
