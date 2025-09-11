import { Component } from '@angular/core';

import { GeneralAllDetails } from './general-all-details/general-all-details';
import { GeneralBalance } from './general-balance/general-balance';
import { GeneralCalender } from './general-calender/general-calender';
import { GeneralCommonAverageOfDay } from './general-common-average-of-day/general-common-average-of-day';
import { GeneralCommonCurrency } from './general-common-currency/general-common-currency';
import { GeneralCommonProductStatus } from './general-common-product-status/general-common-product-status';
import { GeneralCourses } from './general-courses/general-courses';
import { GeneralFollowersGrowth } from './general-followers-growth/general-followers-growth';
import { GeneralSocialMedia } from './general-social-media/general-social-media';
import { GeneralTotalUsers } from './general-total-users/general-total-users';
import { GeneralVisitorChart } from './general-visitor-chart/general-visitor-chart';
import {
  averageDayCharts,
  currencyChart,
  socialMediaData,
} from '../../../../shared/data/chart/widgets-general-chart';
import { productStatusDetails } from '../../../../shared/data/data/widgets-general';

@Component({
  selector: 'app-general',
  imports: [
    GeneralAllDetails,
    GeneralBalance,
    GeneralCalender,
    GeneralCommonAverageOfDay,
    GeneralCommonProductStatus,
    GeneralCommonCurrency,
    GeneralCourses,
    GeneralFollowersGrowth,
    GeneralCourses,
    GeneralSocialMedia,
    GeneralTotalUsers,
    GeneralVisitorChart,
  ],
  templateUrl: './general.html',
  styleUrl: './general.scss',
})
export class General {
  public currencyChart = currencyChart;
  public averageDayCharts = averageDayCharts;
  public productStatusDetails = productStatusDetails;
  public socialMedia = socialMediaData;
}
