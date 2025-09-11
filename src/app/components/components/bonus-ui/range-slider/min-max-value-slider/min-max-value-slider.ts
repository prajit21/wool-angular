import { Component } from '@angular/core';

import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-min-max-value-slider',
  imports: [NgxSliderModule],
  templateUrl: './min-max-value-slider.html',
  styleUrl: './min-max-value-slider.scss',
})
export class MinMaxValueSlider {
  public value: number = 100;
  public maxValue: number = 70;

  public options: Options = {
    floor: 0,
    ceil: 200,
  };
}
