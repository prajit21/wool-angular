import { Component } from '@angular/core';

import { FeatherIcons } from '../../../../../shared/components/ui/feather-icons/feather-icons';

@Component({
  selector: 'app-dismiss-dark-alert',
  imports: [FeatherIcons],
  templateUrl: './dismiss-dark-alert.html',
  styleUrl: './dismiss-dark-alert.scss',
})
export class DismissDarkAlert {
  public isShow: boolean = true;

  dismissAlert() {
    this.isShow = false;
  }
}
