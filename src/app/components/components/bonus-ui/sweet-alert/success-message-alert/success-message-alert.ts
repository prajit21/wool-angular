import { Component } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-success-message-alert',
  imports: [],
  templateUrl: './success-message-alert.html',
  styleUrl: './success-message-alert.scss',
})
export class SuccessMessageAlert {
  successMessageAlert() {
    Swal.fire({
      title: 'Good job!',
      text: 'You clicked the button!',
      icon: 'success',
      confirmButtonColor: 'var(--theme-deafult)',
    });
  }
}
