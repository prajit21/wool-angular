import { Component } from '@angular/core';

import { withoutBorder } from '../../../../../../shared/data/data/mega-options';

@Component({
  selector: 'app-mega-options-without-border-style',
  imports: [],
  templateUrl: './mega-options-without-border-style.html',
  styleUrl: './mega-options-without-border-style.scss',
})
export class MegaOptionsWithoutBorderStyle {
  public withoutBorder = withoutBorder;
}
