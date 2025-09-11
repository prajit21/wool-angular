import { Component } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-auto-close-alert',
  imports: [],
  templateUrl: './auto-close-alert.html',
  styleUrl: './auto-close-alert.scss',
})
export class AutoCloseAlert {
  timerAlert() {
    let timerInterval!: number;
    Swal.fire({
      title: 'Auto close alert!',
      text: 'just a wait! I will close in 30 second!',
      timer: 30000,
      timerProgressBar: true,
      confirmButtonColor: 'var(--theme-deafult)',
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then(result => {
      if (result.dismiss === Swal.DismissReason.timer) {
      }
    });
  }
}
