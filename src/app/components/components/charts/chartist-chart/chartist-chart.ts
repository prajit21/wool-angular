import { Component } from '@angular/core';

import { AdvanceSmilChart } from './advance-smil-chart/advance-smil-chart';
import { BiPolarBarChart } from './bi-polar-bar-chart/bi-polar-bar-chart';
import { BiPolarLineChart } from './bi-polar-line-chart/bi-polar-line-chart';
import { DonutSvgChart } from './donut-svg-chart/donut-svg-chart';
import { ExtremeResponsiveChart } from './extreme-responsive-chart/extreme-responsive-chart';
import { FillHolesDataChart } from './fill-holes-data-chart/fill-holes-data-chart';
import { HolesDataChart } from './holes-data-chart/holes-data-chart';
import { HorizontalBarChart } from './horizontal-bar-chart/horizontal-bar-chart';
import { LineAreaChart } from './line-area-chart/line-area-chart';
import { SimpleLineChart } from './simple-line-chart/simple-line-chart';
import { StackedBarChart } from './stacked-bar-chart/stacked-bar-chart';
import { SvgPathChart } from './svg-path-chart/svg-path-chart';

@Component({
  selector: 'app-chartist-chart',
  imports: [
    AdvanceSmilChart,
    BiPolarBarChart,
    BiPolarLineChart,
    DonutSvgChart,
    ExtremeResponsiveChart,
    FillHolesDataChart,
    HolesDataChart,
    HorizontalBarChart,
    LineAreaChart,
    SimpleLineChart,
    StackedBarChart,
    SvgPathChart,
  ],
  templateUrl: './chartist-chart.html',
  styleUrl: './chartist-chart.scss',
})
export class ChartistChart {}
