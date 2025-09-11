import { Component, input } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { SocialMediaChartOptions } from '../../../../../shared/interface/dashboard/chart';

@Component({
  selector: 'app-general-social-media',
  imports: [NgApexchartsModule],
  templateUrl: './general-social-media.html',
  styleUrl: './general-social-media.scss',
})
export class GeneralSocialMedia {
  readonly social = input<SocialMediaChartOptions>();
}
