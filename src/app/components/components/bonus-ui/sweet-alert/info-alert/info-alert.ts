import { Component } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-info-alert',
  imports: [],
  templateUrl: './info-alert.html',
  styleUrl: './info-alert.scss',
})
export class InfoAlert {
  infoAlert() {
    Swal.fire({
      text: "Please Click on this button it's big surprise for you.",
      confirmButtonColor: 'var(--theme-deafult)',
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire({
          text: 'Thank you for visit wool theme: true',
          confirmButtonColor: 'var(--theme-deafult)',
        });
      }
    });
  }
}
