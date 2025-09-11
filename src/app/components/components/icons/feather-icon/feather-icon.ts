import { Component, inject } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { FeatherIcons } from '../../../../shared/components/ui/feather-icons/feather-icons';
import { featherIcon } from '../../../../shared/data/data/icons/feather-icon';

@Component({
  selector: 'app-feather-icon',
  imports: [FeatherIcons],
  templateUrl: './feather-icon.html',
  styleUrl: './feather-icon.scss',
})
export class FeatherIcon {
  private toast = inject(ToastrService);

  public featherIcon = featherIcon;
  public details: boolean = false;
  public icon: string;
  public val: string;

  getDetails(value: string) {
    this.details = true;
    this.icon = value;
    this.val = '<app-feather-icons [icon]"=' + value + '"></app-feather-icons>';
  }

  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.toast.show('Code Copied to clipboard!', '', {
      positionClass: 'toast-bottom-right',
      closeButton: true,
      toastClass: 'alert alert-copy notify-alert',
      timeOut: 1000,
    });
  }
}
