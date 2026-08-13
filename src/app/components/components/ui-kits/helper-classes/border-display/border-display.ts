import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BorderDisplays } from '../../../../../shared/data/data/ui-kits/helper-classic';

@Component({
  selector: 'app-border-display',
  imports: [],
  templateUrl: './border-display.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './border-display.scss',
})
export class BorderDisplay {
  public BorderDisplay = BorderDisplays;
}
