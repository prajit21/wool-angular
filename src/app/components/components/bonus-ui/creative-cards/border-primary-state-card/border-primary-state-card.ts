import { Component } from '@angular/core';

import { primaryStateCard } from '../../../../../shared/data/data/bonus-ui/creative-cards';

@Component({
  selector: 'app-border-primary-state-card',
  imports: [],
  templateUrl: './border-primary-state-card.html',
  styleUrl: './border-primary-state-card.scss',
})
export class BorderPrimaryStateCard {
  public primaryStateCard = primaryStateCard;
}
