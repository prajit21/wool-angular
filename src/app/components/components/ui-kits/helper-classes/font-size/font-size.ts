import { Component, ChangeDetectionStrategy } from '@angular/core';

import { fontSize } from '../../../../../shared/data/data/ui-kits/helper-classic';

@Component({
  selector: 'app-font-size',
  imports: [],
  templateUrl: './font-size.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './font-size.scss',
})
export class FontSize {
  public fontSize = fontSize;
}
