import { Component, ChangeDetectionStrategy } from '@angular/core';

import { themeSale, variationCheckbox } from '../../../../../../shared/data/data/mega-options';

@Component({
  selector: 'app-mega-options-variation-checkbox',
  imports: [],
  templateUrl: './mega-options-variation-checkbox.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './mega-options-variation-checkbox.scss',
})
export class MegaOptionsVariationCheckbox {
  public variationCheckbox = variationCheckbox;
  public themeSale = themeSale;
}
