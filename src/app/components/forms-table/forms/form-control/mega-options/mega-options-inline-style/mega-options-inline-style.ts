import { Component } from '@angular/core';

import { inlineStyle } from '../../../../../../shared/data/data/mega-options';

@Component({
  selector: 'app-mega-options-inline-style',
  imports: [],
  templateUrl: './mega-options-inline-style.html',
  styleUrl: './mega-options-inline-style.scss',
})
export class MegaOptionsInlineStyle {
  public inlineStyle = inlineStyle;
}
