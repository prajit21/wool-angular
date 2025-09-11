import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { headerNotification } from '../../../../data/data/header';

@Component({
  selector: 'app-header-notification',
  imports: [RouterModule],
  templateUrl: './header-notification.html',
  styleUrl: './header-notification.scss',
})
export class HeaderNotification {
  readonly notification = input<boolean>();

  public headerNotification = headerNotification;
}
