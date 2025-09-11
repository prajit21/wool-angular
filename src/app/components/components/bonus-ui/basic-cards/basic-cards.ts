import { Component } from '@angular/core';

import { BasicCard } from './basic-card/basic-card';
import { DarkColorCard } from './dark-color-card/dark-color-card';
import { FlatCard } from './flat-card/flat-card';
import { IconCard } from './icon-card/icon-card';
import { InfoColorsCard } from './info-colors-card/info-colors-card';
import { WithoutShadowCard } from './without-shadow-card/without-shadow-card';
import { infoColorCards } from '../../../../shared/data/data/bonus-ui/basic-card';

@Component({
  selector: 'app-basic-cards',
  imports: [WithoutShadowCard, InfoColorsCard, FlatCard, DarkColorCard, BasicCard, IconCard],
  templateUrl: './basic-cards.html',
  styleUrl: './basic-cards.scss',
})
export class BasicCards {
  public infoColorCards = infoColorCards;
}
