import { Component } from '@angular/core';

import { FeatherIcons } from '../../../../../shared/components/ui/feather-icons/feather-icons';

@Component({
  selector: 'app-outlined-alert',
  imports: [FeatherIcons],
  templateUrl: './outlined-alert.html',
  styleUrl: './outlined-alert.scss',
})
export class OutlinedAlert {
  public isShow: boolean[] = [true, true];

  dismissAlert(id: number) {
    this.isShow[id] = false;
  }
}
