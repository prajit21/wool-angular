import { Component } from '@angular/core';

import { MegaOptionsDefaultStyle } from './mega-options-default-style/mega-options-default-style';
import { MegaOptionsHorizontalStyle } from './mega-options-horizontal-style/mega-options-horizontal-style';
import { MegaOptionsInlineStyle } from './mega-options-inline-style/mega-options-inline-style';
import { MegaOptionsOfferStyleBorder } from './mega-options-offer-style-border/mega-options-offer-style-border';
import { MegaOptionsSolidBorderStyle } from './mega-options-solid-border-style/mega-options-solid-border-style';
import { MegaOptionsVariationCheckbox } from './mega-options-variation-checkbox/mega-options-variation-checkbox';
import { MegaOptionsVariationRadio } from './mega-options-variation-radio/mega-options-variation-radio';
import { MegaOptionsVerticalStyle } from './mega-options-vertical-style/mega-options-vertical-style';
import { MegaOptionsWithoutBorderStyle } from './mega-options-without-border-style/mega-options-without-border-style';

@Component({
  selector: 'app-mega-options',
  imports: [
    MegaOptionsDefaultStyle,
    MegaOptionsHorizontalStyle,
    MegaOptionsVerticalStyle,
    MegaOptionsInlineStyle,
    MegaOptionsOfferStyleBorder,
    MegaOptionsSolidBorderStyle,
    MegaOptionsVariationCheckbox,
    MegaOptionsVariationRadio,
    MegaOptionsWithoutBorderStyle,
  ],
  templateUrl: './mega-options.html',
  styleUrl: './mega-options.scss',
})
export class MegaOptions {}
