import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { SvgIcon } from '../../../../../shared/components/ui/svg-icon/svg-icon';
import { topDealers } from '../../../../../shared/data/data/e-commerce-dashboard';

@Component({
  selector: 'app-dashboard-top-dealers',
  imports: [SvgIcon, NgbModule, CarouselModule, RouterModule],
  templateUrl: './dashboard-top-dealers.html',
  styleUrl: './dashboard-top-dealers.scss',
})
export class DashboardTopDealers {
  public topDealers = topDealers;

  public options = {
    loop: true,
    nav: true,
    dots: false,
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      416: {
        items: 2,
      },
      800: {
        items: 4,
      },
    },
  };
}
