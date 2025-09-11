import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { carouselImages } from '../../../../../shared/data/data/bonus-ui/carousel';

@Component({
  selector: 'app-auto-play-carousel',
  imports: [CarouselModule],
  templateUrl: './auto-play-carousel.html',
  styleUrl: './auto-play-carousel.scss',
})
export class AutoPlayCarousel {
  public carouselImages = carouselImages;

  public options = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      668: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  };
}
