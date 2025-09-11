import { Component, inject, input } from '@angular/core';

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

  readonly bookmarkDetails = input<bookmarks>();

  closeModal() {
    this.modal.close();
  }
}
