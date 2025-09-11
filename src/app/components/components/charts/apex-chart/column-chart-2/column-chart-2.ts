import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { columnChart2 } from '../../../../../shared/data/chart/apex-chart';

@Component({
  selector: 'app-column-chart-2',
  imports: [NgApexchartsModule],
  templateUrl: './column-chart-2.html',
  styleUrl: './column-chart-2.scss',
})
export class ColumnChart2 {
  public columnChart = columnChart2;
}
