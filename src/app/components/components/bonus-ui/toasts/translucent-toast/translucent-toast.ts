import { Component } from '@angular/core';

import { FeatherIcons } from '../../../../../shared/components/ui/feather-icons/feather-icons';
import { translucentToasts } from '../../../../../shared/data/data/bonus-ui/toast';

@Component({
  selector: 'app-translucent-toast',
  imports: [FeatherIcons],
  templateUrl: './translucent-toast.html',
  styleUrl: './translucent-toast.scss',
})
export class TranslucentToast {
  public translucentToasts = translucentToasts;

  constructor() {
    this.translucentToasts.forEach(data => {
      if (data) {
        setTimeout(() => {
          data.show = false;
        }, data.timeout);
      }
    });
  }

  closeToast(id: number) {
    this.translucentToasts.filter(data => {
      if (data.id == id) {
        data.show = false;
      }
    });
  }
}
