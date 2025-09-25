import { Component, inject, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { bookmarks } from '../../../../shared/interface/bookmark';

@Component({
  selector: 'app-edit-bookmark-modal',
  imports: [],
  templateUrl: './edit-bookmark-modal.html',
  styleUrl: './edit-bookmark-modal.scss',
})
export class EditBookmarkModal {
  private modal = inject(NgbActiveModal);

  @Input() bookmarkDetails!: bookmarks;

  closeModal() {
    this.modal.close();
  }
}
