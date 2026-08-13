import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { infoCards } from '../../../../../shared/interface/bonus-ui';

@Component({
  selector: 'app-info-colors-card',
  imports: [],
  templateUrl: './info-colors-card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './info-colors-card.scss',
})
export class InfoColorsCard {
  readonly details = input<infoCards>();
}
