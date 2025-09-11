import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { carouselImages } from '../../../../../shared/data/data/bonus-ui/carousel';

@Component({
  selector: 'app-with-indicators-carousel',
  imports: [CarouselModule],
  templateUrl: './with-indicators-carousel.html',
  styleUrl: './with-indicators-carousel.scss',
})
export class WithIndicatorsCarousel {
  public carouselImages = carouselImages;

  public options = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    dots: true,
    nav: true,
    navSpeed: 700,
    navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      740: {
        items: 3,
      },
    },
  };
}
