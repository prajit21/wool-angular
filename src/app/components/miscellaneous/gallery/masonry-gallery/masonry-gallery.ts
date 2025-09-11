import { Component } from '@angular/core';

import { LightboxModule } from 'ng-gallery/lightbox';
import { NgxMasonryModule, NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-masonry-gallery',
  imports: [NgxMasonryModule, LightboxModule],
  templateUrl: './masonry-gallery.html',
  styleUrl: './masonry-gallery.scss',
})
export class MasonryGallery {
  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
  };

  masonryItems = [
    { image: 'assets/images/masonry/1.jpg' },
    { image: 'assets/images/masonry/2.jpg' },
    { image: 'assets/images/masonry/3.jpg' },
    { image: 'assets/images/masonry/4.jpg' },
    { image: 'assets/images/masonry/5.jpg' },
    { image: 'assets/images/masonry/6.jpg' },
    { image: 'assets/images/masonry/7.jpg' },
    { image: 'assets/images/masonry/8.jpg' },
    { image: 'assets/images/masonry/9.jpg' },
    { image: 'assets/images/masonry/10.jpg' },
    { image: 'assets/images/masonry/11.jpg' },
    { image: 'assets/images/masonry/12.jpg' },
    { image: 'assets/images/masonry/13.jpg' },
    { image: 'assets/images/masonry/14.jpg' },
    { image: 'assets/images/masonry/15.jpg' },
    { image: 'assets/images/masonry/1.jpg' },
  ];
}
