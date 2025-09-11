import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { carouselImages } from '../../../../../shared/data/data/bonus-ui/carousel';

@Component({
  selector: 'app-animation-carousel',
  imports: [CarouselModule],
  templateUrl: './animation-carousel.html',
  styleUrl: './animation-carousel.scss',
})
export class AnimationCarousel {
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
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
