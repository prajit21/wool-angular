import { Component } from '@angular/core';

import { textColor } from '../../../../../shared/data/data/ui-kits/typography';

@Component({
  selector: 'app-text-color',
  imports: [],
  templateUrl: './text-color.html',
  styleUrl: './text-color.scss',
})
export class TextColor {
  public textColor = textColor;
}
