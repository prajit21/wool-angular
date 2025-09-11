import { Component } from '@angular/core';

import { solidBorderStyle } from '../../../../../../shared/data/data/mega-options';

@Component({
  selector: 'app-mega-options-solid-border-style',
  imports: [],
  templateUrl: './mega-options-solid-border-style.html',
  styleUrl: './mega-options-solid-border-style.scss',
})
export class MegaOptionsSolidBorderStyle {
  public solidBorderStyle = solidBorderStyle;
}
