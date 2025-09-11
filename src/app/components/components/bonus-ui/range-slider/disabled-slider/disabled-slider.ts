import { Component } from '@angular/core';

import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-disabled-slider',
  imports: [NgxSliderModule],
  templateUrl: './disabled-slider.html',
  styleUrl: './disabled-slider.scss',
})
export class DisabledSlider {
  public value: number = 550;

  public options: Options = {
    floor: 100,
    ceil: 1000,
    disabled: true,
  };
}
