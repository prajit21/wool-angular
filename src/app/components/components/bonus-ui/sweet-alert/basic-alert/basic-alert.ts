import { Component } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-basic-alert',
  imports: [],
  templateUrl: './basic-alert.html',
  styleUrl: './basic-alert.scss',
})
export class BasicAlert {
  basicAlert() {
    Swal.fire({
      title: 'Welcome! to the wool theme',
      confirmButtonColor: 'var(--theme-deafult)',
    });
  }
}
