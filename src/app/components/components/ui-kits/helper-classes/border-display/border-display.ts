import { Component } from '@angular/core';

import { BorderDisplays } from '../../../../../shared/data/data/ui-kits/helper-classic';

@Component({
  selector: 'app-border-display',
  imports: [],
  templateUrl: './border-display.html',
  styleUrl: './border-display.scss',
})
export class BorderDisplay {
  public BorderDisplay = BorderDisplays;
}
