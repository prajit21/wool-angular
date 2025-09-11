import { Component } from '@angular/core';

import { FeatherIcons } from '../../../../shared/components/ui/feather-icons/feather-icons';
import { navigation } from '../../../../shared/data/data/faq';

@Component({
  selector: 'app-faq-navigation',
  imports: [FeatherIcons],
  templateUrl: './faq-navigation.html',
  styleUrl: './faq-navigation.scss',
})
export class FaqNavigation {
  public navigation = navigation;
}
