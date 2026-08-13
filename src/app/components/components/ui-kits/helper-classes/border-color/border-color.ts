import { Component, ChangeDetectionStrategy } from '@angular/core';

import { borderColor } from '../../../../../shared/data/data/ui-kits/helper-classic';

@Component({
  selector: 'app-border-color',
  imports: [],
  templateUrl: './border-color.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './border-color.scss',
})
export class BorderColor {
  public borderColor = borderColor;
}
