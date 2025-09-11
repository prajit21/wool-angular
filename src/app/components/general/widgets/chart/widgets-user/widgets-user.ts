import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { Title } from '../../../../../shared/components/ui/title/title';
import { user } from '../../../../../shared/data/chart/widgets-chart';

@Component({
  selector: 'app-widgets-user',
  imports: [Title, NgApexchartsModule],
  templateUrl: './widgets-user.html',
  styleUrl: './widgets-user.scss',
})
export class WidgetsUser {
  public user = user;
}
