import { Component } from '@angular/core';

import { offerStyleBorder } from '../../../../../../shared/data/data/mega-options';

@Component({
  selector: 'app-mega-options-offer-style-border',
  imports: [],
  templateUrl: './mega-options-offer-style-border.html',
  styleUrl: './mega-options-offer-style-border.scss',
})
export class MegaOptionsOfferStyleBorder {
  public offerStyleBorder = offerStyleBorder;
}
