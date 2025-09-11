import { Component } from '@angular/core';

import { FeatherIcons } from '../../../../../shared/components/ui/feather-icons/feather-icons';

@Component({
  selector: 'app-left-border-alert',
  imports: [FeatherIcons],
  templateUrl: './left-border-alert.html',
  styleUrl: './left-border-alert.scss',
})
export class LeftBorderAlert {
  public isShow: boolean = true;

  dismissAlert() {
    this.isShow = false;
  }
}
