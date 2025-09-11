import { Component, input } from '@angular/core';

import { absoluteCard } from '../../../../../shared/interface/bonus-ui';

@Component({
  selector: 'app-absolute-card',
  imports: [],
  templateUrl: './absolute-card.html',
  styleUrl: './absolute-card.scss',
})
export class AbsoluteCard {
  readonly details = input<absoluteCard>();
}
