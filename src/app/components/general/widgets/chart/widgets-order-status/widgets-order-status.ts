import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { Title } from '../../../../../shared/components/ui/title/title';
import { orderStatus } from '../../../../../shared/data/chart/widgets-chart';

@Component({
  selector: 'app-widgets-order-status',
  imports: [Title, NgApexchartsModule],
  templateUrl: './widgets-order-status.html',
  styleUrl: './widgets-order-status.scss',
})
export class WidgetsOrderStatus {
  public orderStatus = orderStatus;
}
