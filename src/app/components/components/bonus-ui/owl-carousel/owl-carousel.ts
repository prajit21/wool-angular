import { Component } from '@angular/core';

import { AnimationCarousel } from './animation-carousel/animation-carousel';
import { AutoPlayCarousel } from './auto-play-carousel/auto-play-carousel';
import { DarkVariantCarousel } from './dark-variant-carousel/dark-variant-carousel';
import { SlidesOnlyCarousel } from './slides-only-carousel/slides-only-carousel';
import { WithCaptionCarousel } from './with-caption-carousel/with-caption-carousel';
import { WithControlCarousel } from './with-control-carousel/with-control-carousel';
import { WithIndicatorsCarousel } from './with-indicators-carousel/with-indicators-carousel';

@Component({
  selector: 'app-owl-carousel',
  imports: [
    AnimationCarousel,
    AutoPlayCarousel,
    DarkVariantCarousel,
    SlidesOnlyCarousel,
    WithCaptionCarousel,
    WithControlCarousel,
    WithIndicatorsCarousel,
  ],
  templateUrl: './owl-carousel.html',
  styleUrl: './owl-carousel.scss',
})
export class OwlCarousel {}
