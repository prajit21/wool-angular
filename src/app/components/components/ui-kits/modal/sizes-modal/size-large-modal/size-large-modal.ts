import { Component, inject } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../../../shared/components/ui/feather-icons/feather-icons';

@Component({
  selector: 'app-size-large-modal',
  imports: [FeatherIcons],
  templateUrl: './size-large-modal.html',
  styleUrl: './size-large-modal.scss',
})
export class SizeLargeModal {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
