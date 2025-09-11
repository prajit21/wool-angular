import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { Title } from '../../../../../shared/components/ui/title/title';
import { liveProduct } from '../../../../../shared/data/chart/widgets-chart';

@Component({
  selector: 'app-widgets-live-products',
  imports: [Title, NgApexchartsModule],
  templateUrl: './widgets-live-products.html',
  styleUrl: './widgets-live-products.scss',
})
export class WidgetsLiveProducts {
  public liveProduct = liveProduct;
}
