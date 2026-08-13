import { TitleCasePipe } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { textColor } from '../../../../../shared/data/data/ui-kits/typography';

@Component({
  selector: 'app-typography-text-color',
  imports: [TitleCasePipe],
  templateUrl: './typography-text-color.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './typography-text-color.scss',
})
export class TypographyTextColor {
  public textColor = textColor;
}
