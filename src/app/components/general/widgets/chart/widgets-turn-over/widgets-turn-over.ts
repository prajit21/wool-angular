import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { Title } from '../../../../../shared/components/ui/title/title';
import { turnOver } from '../../../../../shared/data/chart/widgets-chart';

@Component({
  selector: 'app-widgets-turn-over',
  imports: [Title, NgApexchartsModule],
  templateUrl: './widgets-turn-over.html',
  styleUrl: './widgets-turn-over.scss',
})
export class WidgetsTurnOver {
  public turnOver = turnOver;
}
