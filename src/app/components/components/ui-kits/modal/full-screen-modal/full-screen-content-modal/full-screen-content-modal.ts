import { Component, inject } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../../../shared/components/ui/feather-icons/feather-icons';

@Component({
  selector: 'app-full-screen-content-modal',
  imports: [FeatherIcons],
  templateUrl: './full-screen-content-modal.html',
  styleUrl: './full-screen-content-modal.scss',
})
export class FullScreenContentModal {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
