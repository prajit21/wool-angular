import { Component } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-warning-mode-alert',
  imports: [],
  templateUrl: './warning-mode-alert.html',
  styleUrl: './warning-mode-alert.scss',
})
export class WarningModeAlert {
  warningAlert() {
    Swal.fire({
      title: 'Good job!',
      text: 'You clicked the button!',
      icon: 'warning',
      confirmButtonColor: 'var(--theme-deafult)',
    });
  }
}
