import { Component } from '@angular/core';

import { warningStateCard } from '../../../../../shared/data/data/bonus-ui/creative-cards';

@Component({
  selector: 'app-border-warning-state-card',
  imports: [],
  templateUrl: './border-warning-state-card.html',
  styleUrl: './border-warning-state-card.scss',
})
export class BorderWarningStateCard {
  public warningStateCard = warningStateCard;
}
