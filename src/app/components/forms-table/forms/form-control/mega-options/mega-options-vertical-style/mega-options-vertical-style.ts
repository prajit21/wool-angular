import { Component } from '@angular/core';

import { verticalStyle } from '../../../../../../shared/data/data/mega-options';

@Component({
  selector: 'app-mega-options-vertical-style',
  imports: [],
  templateUrl: './mega-options-vertical-style.html',
  styleUrl: './mega-options-vertical-style.scss',
})
export class MegaOptionsVerticalStyle {
  public verticalStyle = verticalStyle;
}
