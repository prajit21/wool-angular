import { Component, inject } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-task-tag-modal',
  imports: [],
  templateUrl: './add-task-tag-modal.html',
  styleUrl: './add-task-tag-modal.scss',
})
export class AddTaskTagModal {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
