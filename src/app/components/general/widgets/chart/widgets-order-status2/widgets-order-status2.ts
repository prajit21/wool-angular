import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { Title } from '../../../../../shared/components/ui/title/title';
import { orderStatus2 } from '../../../../../shared/data/chart/widgets-chart';

@Component({
  selector: 'app-widgets-order-status2',
  imports: [Title, NgApexchartsModule],
  templateUrl: './widgets-order-status2.html',
  styleUrl: './widgets-order-status2.scss',
})
export class WidgetsOrderStatus2 {
  public orderStatus = orderStatus2;
}
