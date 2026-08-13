import { Component, ChangeDetectionStrategy } from '@angular/core';

import { leftRibbons } from '../../../../../shared/data/data/bonus-ui/ribbons';

@Component({
  selector: 'app-left-ribbons',
  imports: [],
  templateUrl: './left-ribbons.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './left-ribbons.scss',
})
export class LeftRibbons {
  public leftRibbons = leftRibbons;
}
