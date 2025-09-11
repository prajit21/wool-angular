import { Component } from '@angular/core';

import { FeatherIcons } from '../../../../../shared/components/ui/feather-icons/feather-icons';
import { stackingToast } from '../../../../../shared/data/data/bonus-ui/toast';

@Component({
  selector: 'app-stacking-toast',
  imports: [FeatherIcons],
  templateUrl: './stacking-toast.html',
  styleUrl: './stacking-toast.scss',
})
export class StackingToast {
  public stackingToast = stackingToast;

  constructor() {
    this.stackingToast.forEach(data => {
      if (data) {
        setTimeout(() => {
          data.show = false;
        }, data.timeOut);
      }
    });
  }

  closeToast(id: number) {
    this.stackingToast.filter(data => {
      if (data.id == id) {
        data.show = false;
      }
    });
  }
}
