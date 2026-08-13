import { Component, ChangeDetectionStrategy } from '@angular/core';

import { secondaryStateCard } from '../../../../../shared/data/data/bonus-ui/creative-cards';

@Component({
  selector: 'app-border-secondary-state-card',
  imports: [],
  templateUrl: './border-secondary-state-card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './border-secondary-state-card.scss',
})
export class BorderSecondaryStateCard {
  public secondaryStateCard = secondaryStateCard;
}
