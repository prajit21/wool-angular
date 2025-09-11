import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { carouselImages } from '../../../../../shared/data/data/bonus-ui/carousel';

@Component({
  selector: 'app-slides-only-carousel',
  imports: [CarouselModule],
  templateUrl: './slides-only-carousel.html',
  styleUrl: './slides-only-carousel.scss',
})
export class SlidesOnlyCarousel {
  public slideOnly = carouselImages;
  public options = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    dots: false,
    nav: false,
    navSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
