import { Component } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-title-text-alert',
  imports: [],
  templateUrl: './title-text-alert.html',
  styleUrl: './title-text-alert.scss',
})
export class TitleTextAlert {
  openAlert() {
    Swal.fire({
      title: "It's Magic!",
      text: 'Thank you for visiting wool theme',
      confirmButtonColor: 'var(--theme-deafult)',
    });
  }
}
