import { Component } from '@angular/core';

import { AbsoluteCard } from './absolute-card/absolute-card';
import { BorderBottomCard } from './border-bottom-card/border-bottom-card';
import { BorderLeftCard } from './border-left-card/border-left-card';
import { BorderPrimaryStateCard } from './border-primary-state-card/border-primary-state-card';
import { BorderRightCard } from './border-right-card/border-right-card';
import { BorderSecondaryStateCard } from './border-secondary-state-card/border-secondary-state-card';
import { BorderTopCard } from './border-top-card/border-top-card';
import { BorderWarningStateCard } from './border-warning-state-card/border-warning-state-card';
import { absoluteCards } from '../../../../shared/data/data/bonus-ui/creative-cards';

@Component({
  selector: 'app-creative-cards',
  imports: [
    AbsoluteCard,
    BorderBottomCard,
    BorderLeftCard,
    BorderPrimaryStateCard,
    BorderRightCard,
    BorderSecondaryStateCard,
    BorderTopCard,
    BorderWarningStateCard,
  ],
  templateUrl: './creative-cards.html',
  styleUrl: './creative-cards.scss',
})
export class CreativeCards {
  public absoluteCards = absoluteCards;
}
