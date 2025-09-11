import { Component } from '@angular/core';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { wordTreeChart } from '../../../../../shared/data/chart/google-chart';

@Component({
  selector: 'app-word-tree-chart',
  imports: [Ng2GoogleChartsModule],
  templateUrl: './word-tree-chart.html',
  styleUrl: './word-tree-chart.scss',
})
export class WordTreeChart {
  public wordTreeChart = wordTreeChart;
}
