import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { Title } from '../../../../../shared/components/ui/title/title';
import { finance } from '../../../../../shared/data/chart/widgets-chart';

@Component({
  selector: 'app-widgets-finance',
  imports: [Title, NgApexchartsModule],
  templateUrl: './widgets-finance.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './widgets-finance.scss',
})
export class WidgetsFinance {
  public finance = finance;
}
