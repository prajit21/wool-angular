import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';

import { visitorChart } from '../../../../../shared/data/chart/widgets-general-chart';

@Component({
  selector: 'app-general-visitor-chart',
  imports: [NgbModule, NgApexchartsModule],
  templateUrl: './general-visitor-chart.html',
  styleUrl: './general-visitor-chart.scss',
})
export class GeneralVisitorChart {
  public visitorChart = visitorChart;
}
