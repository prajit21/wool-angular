import { Component, input } from '@angular/core';

import { headerMessage } from '../../../../data/data/header';
import { FeatherIcons } from '../../../ui/feather-icons/feather-icons';

@Component({
  selector: 'app-header-message',
  imports: [FeatherIcons],
  templateUrl: './header-message.html',
  styleUrl: './header-message.scss',
})
export class HeaderMessage {
  readonly message = input<boolean>();

  public headerMessage = headerMessage;
}
