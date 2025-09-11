import { Component } from '@angular/core';

import { FeatherIcons } from '../../../../../shared/components/ui/feather-icons/feather-icons';
import { badgeButton } from '../../../../../shared/data/data/ui-kits/tag-pills';

@Component({
  selector: 'app-badge-button',
  imports: [FeatherIcons],
  templateUrl: './badge-button.html',
  styleUrl: './badge-button.scss',
})
export class BadgeButton {
  public badgeButton = badgeButton;
}
