import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { carouselImages } from '../../../../../shared/data/data/bonus-ui/carousel';

@Component({
  selector: 'app-with-caption-carousel',
  imports: [CarouselModule],
  templateUrl: './with-caption-carousel.html',
  styleUrl: './with-caption-carousel.scss',
})
export class WithCaptionCarousel {
  public carouselImages = carouselImages;

  public options = {
    loop: false,
    mouseDrag: false,
    autoplay: true,
    dots: true,
    nav: true,
    navSpeed: 1000,
    navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
