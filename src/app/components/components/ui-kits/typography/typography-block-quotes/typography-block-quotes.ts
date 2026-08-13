import { NgClass } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { blockQuotes } from '../../../../../shared/data/data/ui-kits/typography';

@Component({
  selector: 'app-typography-block-quotes',
  imports: [NgClass],
  templateUrl: './typography-block-quotes.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './typography-block-quotes.scss',
})
export class TypographyBlockQuotes {
  public blockQuotes = blockQuotes;
}
