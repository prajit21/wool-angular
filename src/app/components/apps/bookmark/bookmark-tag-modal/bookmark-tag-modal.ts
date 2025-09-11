import { Component, inject } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bookmark-tag-modal',
  imports: [],
  templateUrl: './bookmark-tag-modal.html',
  styleUrl: './bookmark-tag-modal.scss',
})
export class BookmarkTagModal {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
