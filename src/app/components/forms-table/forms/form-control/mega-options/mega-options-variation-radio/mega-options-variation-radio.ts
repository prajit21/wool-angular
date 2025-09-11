import { Component } from '@angular/core';

import { SvgIcon } from '../../../../../../shared/components/ui/svg-icon/svg-icon';
import { variationRadioDetails } from '../../../../../../shared/data/data/mega-options';

@Component({
  selector: 'app-mega-options-variation-radio',
  imports: [SvgIcon],
  templateUrl: './mega-options-variation-radio.html',
  styleUrl: './mega-options-variation-radio.scss',
})
export class MegaOptionsVariationRadio {
  public variationRadioDetails = variationRadioDetails;
}
