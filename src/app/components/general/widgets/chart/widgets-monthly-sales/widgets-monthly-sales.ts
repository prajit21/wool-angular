import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { Title } from '../../../../../shared/components/ui/title/title';
import { monthlySales } from '../../../../../shared/data/chart/widgets-chart';

@Component({
  selector: 'app-widgets-monthly-sales',
  imports: [Title, NgApexchartsModule],
  templateUrl: './widgets-monthly-sales.html',
  styleUrl: './widgets-monthly-sales.scss',
})
export class WidgetsMonthlySales {
  public monthlySales = monthlySales;
}
