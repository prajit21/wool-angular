import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { Title } from '../../../../../shared/components/ui/title/title';
import { monthlyHistory } from '../../../../../shared/data/chart/widgets-chart';

@Component({
  selector: 'app-widgets-monthly-history',
  imports: [Title, NgApexchartsModule],
  templateUrl: './widgets-monthly-history.html',
  styleUrl: './widgets-monthly-history.scss',
})
export class WidgetsMonthlyHistory {
  public monthlyHistory = monthlyHistory;
}
