import { Component } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-question-alert',
  imports: [],
  templateUrl: './question-alert.html',
  styleUrl: './question-alert.scss',
})
export class QuestionAlert {
  questionAlert() {
    Swal.fire({
      text: 'Are you sure you want to do this?',
      showCancelButton: true,
      confirmButtonText: 'Aww yiss!',
      cancelButtonText: 'Oh  noez!',
      confirmButtonColor: 'var(--theme-deafult)',
      customClass: {
        confirmButton: 'order-2',
        cancelButton: 'order-1',
      },
    });
  }
}
