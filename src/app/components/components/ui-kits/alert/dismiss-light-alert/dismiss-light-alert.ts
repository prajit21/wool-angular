import { Component } from '@angular/core';

import { FeatherIcons } from '../../../../../shared/components/ui/feather-icons/feather-icons';

@Component({
  selector: 'app-dismiss-light-alert',
  imports: [FeatherIcons],
  templateUrl: './dismiss-light-alert.html',
  styleUrl: './dismiss-light-alert.scss',
})
export class DismissLightAlert {
  public isShow: boolean = true;

  dismissAlert() {
    this.isShow = false;
  }
}
