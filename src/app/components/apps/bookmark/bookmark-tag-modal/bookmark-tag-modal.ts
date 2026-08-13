import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bookmark-tag-modal',
  imports: [],
  templateUrl: './bookmark-tag-modal.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './bookmark-tag-modal.scss',
})
export class BookmarkTagModal {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
