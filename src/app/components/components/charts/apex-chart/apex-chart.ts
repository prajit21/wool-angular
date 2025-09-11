import { Component } from '@angular/core';

import { AreaSpalineChart } from './area-spaline-chart/area-spaline-chart';
import { BarChart } from './bar-chart/bar-chart';
import { BasicAreaChart } from './basic-area-chart/basic-area-chart';
import { BubbleChart } from './bubble-chart/bubble-chart';
import { CandlestickChart } from './candlestick-chart/candlestick-chart';
import { ColumnChart } from './column-chart/column-chart';
import { ColumnChart2 } from './column-chart-2/column-chart-2';
import { DonutChart } from './donut-chart/donut-chart';
import { MixedChart } from './mixed-chart/mixed-chart';
import { PieChart } from './pie-chart/pie-chart';
import { RadarChart } from './radar-chart/radar-chart';
import { RadialBarChart } from './radial-bar-chart/radial-bar-chart';
import { SteplineChart } from './stepline-chart/stepline-chart';

@Component({
  selector: 'app-apex-chart',
  imports: [
    AreaSpalineChart,
    BarChart,
    BasicAreaChart,
    BubbleChart,
    CandlestickChart,
    ColumnChart,
    ColumnChart2,
    DonutChart,
    MixedChart,
    PieChart,
    RadarChart,
    RadialBarChart,
    SteplineChart,
  ],
  templateUrl: './apex-chart.html',
  styleUrl: './apex-chart.scss',
})
export class ApexChart {}
