import { Component } from '@angular/core';

import { CustomValueSlider } from './custom-value-slider/custom-value-slider';
import { DefaultRangeSlider } from './default-range-slider/default-range-slider';
import { DisabledSlider } from './disabled-slider/disabled-slider';
import { MinMaxValueSlider } from './min-max-value-slider/min-max-value-slider';
import { PrettifyNumberSlider } from './prettify-number-slider/prettify-number-slider';

@Component({
  selector: 'app-range-slider',
  imports: [
    CustomValueSlider,
    DefaultRangeSlider,
    DisabledSlider,
    MinMaxValueSlider,
    PrettifyNumberSlider,
  ],
  templateUrl: './range-slider.html',
  styleUrl: './range-slider.scss',
})
export class RangeSlider {}
