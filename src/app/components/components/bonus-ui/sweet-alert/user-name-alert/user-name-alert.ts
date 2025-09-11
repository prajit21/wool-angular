import { Component } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-name-alert',
  imports: [],
  templateUrl: './user-name-alert.html',
  styleUrl: './user-name-alert.scss',
})
export class UserNameAlert {
  usernameAlert() {
    Swal.fire({
      text: 'Please! Submit Your Username :',
      confirmButtonColor: 'var(--theme-deafult)',
      input: 'text',
    }).then(result => {
      if (result.value) {
        Swal.fire({
          text: 'Your name is :' + result.value,
          confirmButtonColor: 'var(--theme-deafult)',
        });
      }
    });
  }
}
