import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { Title } from '../../../../../shared/components/ui/title/title';
import { followersGrowth } from '../../../../../shared/data/chart/widgets-general-chart';

@Component({
  selector: 'app-general-followers-growth',
  imports: [Title, NgApexchartsModule],
  templateUrl: './general-followers-growth.html',
  styleUrl: './general-followers-growth.scss',
})
export class GeneralFollowersGrowth {
  public followersGrowth = followersGrowth;
}
