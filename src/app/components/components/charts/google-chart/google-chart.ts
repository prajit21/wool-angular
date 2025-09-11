import { Component } from '@angular/core';

import { AreaChart1 } from './area-chart-1/area-chart-1';
import { AreaChart2 } from './area-chart-2/area-chart-2';
import { BarChart2 } from './bar-chart2/bar-chart2';
import { ColumnChart1 } from './column-chart-1/column-chart-1';
import { ComboChart } from './combo-chart/combo-chart';
import { GoogleColumnChart2 } from './google-column-chart2/google-column-chart2';
import { LineChart } from './line-chart/line-chart';
import { PieChart1 } from './pie-chart-1/pie-chart-1';
import { PieChart2 } from './pie-chart-2/pie-chart-2';
import { PieChart3 } from './pie-chart-3/pie-chart-3';
import { PieChart4 } from './pie-chart-4/pie-chart-4';
import { WordTreeChart } from './word-tree-chart/word-tree-chart';

@Component({
  selector: 'app-google-chart',
  imports: [
    AreaChart1,
    AreaChart2,
    BarChart2,
    ColumnChart1,
    GoogleColumnChart2,
    ComboChart,
    LineChart,
    PieChart1,
    PieChart2,
    PieChart3,
    PieChart4,
    WordTreeChart,
  ],
  templateUrl: './google-chart.html',
  styleUrl: './google-chart.scss',
})
export class GoogleChart {}
