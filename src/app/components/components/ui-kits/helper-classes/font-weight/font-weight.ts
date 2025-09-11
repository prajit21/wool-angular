import { Component } from '@angular/core';

import { fontWeight } from '../../../../../shared/data/data/ui-kits/helper-classic';

@Component({
  selector: 'app-font-weight',
  imports: [],
  templateUrl: './font-weight.html',
  styleUrl: './font-weight.scss',
})
export class FontWeight {
  public fontWeight = fontWeight;
}
