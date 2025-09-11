import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { Title } from '../../../../../shared/components/ui/title/title';
import { skillStatus } from '../../../../../shared/data/chart/widgets-chart';

@Component({
  selector: 'app-widgets-skill-status',
  imports: [Title, NgApexchartsModule],
  templateUrl: './widgets-skill-status.html',
  styleUrl: './widgets-skill-status.scss',
})
export class WidgetsSkillStatus {
  public skillStatus = skillStatus;
}
