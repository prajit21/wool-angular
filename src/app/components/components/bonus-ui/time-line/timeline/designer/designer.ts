import { Component } from '@angular/core';

import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-designer',
  imports: [CarouselModule],
  templateUrl: './designer.html',
  styleUrl: './designer.scss',
})
export class Designer {
  public options: OwlOptions = {
    loop: true,
    mouseDrag: false,
    dots: true,
    nav: true,
    navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
