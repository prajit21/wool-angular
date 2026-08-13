import { Component, ChangeDetectionStrategy } from '@angular/core';

import { primaryStateCard } from '../../../../../shared/data/data/bonus-ui/creative-cards';

@Component({
  selector: 'app-border-primary-state-card',
  imports: [],
  templateUrl: './border-primary-state-card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './border-primary-state-card.scss',
})
export class BorderPrimaryStateCard {
  public primaryStateCard = primaryStateCard;
}
