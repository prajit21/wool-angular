import { Component } from '@angular/core';

import { defaultStyle } from '../../../../../../shared/data/data/mega-options';

@Component({
  selector: 'app-mega-options-default-style',
  imports: [],
  templateUrl: './mega-options-default-style.html',
  styleUrl: './mega-options-default-style.scss',
})
export class MegaOptionsDefaultStyle {
  public defaultStyle = defaultStyle;
}
