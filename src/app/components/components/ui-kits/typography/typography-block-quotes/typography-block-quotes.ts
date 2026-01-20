import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

import { blockQuotes } from '../../../../../shared/data/data/ui-kits/typography';

@Component({
  selector: 'app-typography-block-quotes',
  imports: [NgClass],
  templateUrl: './typography-block-quotes.html',
  styleUrl: './typography-block-quotes.scss',
})
export class TypographyBlockQuotes {
  public blockQuotes = blockQuotes;
}
