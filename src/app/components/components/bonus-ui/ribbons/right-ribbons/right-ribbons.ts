import { Component } from '@angular/core';

import { rightRibbons } from '../../../../../shared/data/data/bonus-ui/ribbons';

@Component({
  selector: 'app-right-ribbons',
  imports: [],
  templateUrl: './right-ribbons.html',
  styleUrl: './right-ribbons.scss',
})
export class RightRibbons {
  public rightRibbons = rightRibbons;
}
