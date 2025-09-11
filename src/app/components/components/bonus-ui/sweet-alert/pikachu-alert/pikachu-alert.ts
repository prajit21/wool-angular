import { Component } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-pikachu-alert',
  imports: [],
  templateUrl: './pikachu-alert.html',
  styleUrl: './pikachu-alert.scss',
})
export class PikachuAlert {
  pikachuAlert() {
    Swal.fire({
      text: 'A wild Pikachu appeared! What do you want to do?',
      showDenyButton: true,
      showCancelButton: true,
      cancelButtonColor: '#EFEFEE !important',
      confirmButtonColor: 'var(--theme-deafult)',
      denyButtonColor: 'var(--theme-deafult)',
      cancelButtonText: 'Run away!',
      confirmButtonText: 'Throw Pokeball!',
      denyButtonText: 'Defeat',
      customClass: {
        cancelButton: 'order-1',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      },
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Yeah!',
          text: 'Pikachu was caught!',
          icon: 'success',
          confirmButtonColor: 'var(--theme-deafult)',
        });
      } else if (result.isDenied) {
        Swal.fire({
          text: 'Pikachu fainted! You gained 500 XP!',
          confirmButtonColor: 'var(--theme-deafult)',
        });
      } else {
        Swal.fire({
          text: 'Got away safely!',
          confirmButtonColor: 'var(--theme-deafult)',
        });
      }
    });
  }
}
