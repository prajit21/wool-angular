import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { textColor } from '../../../../../shared/data/data/ui-kits/typography';

@Component({
  selector: 'app-typography-text-color',
  imports: [CommonModule],
  templateUrl: './typography-text-color.html',
  styleUrl: './typography-text-color.scss',
})
export class TypographyTextColor {
  public textColor = textColor;
}
