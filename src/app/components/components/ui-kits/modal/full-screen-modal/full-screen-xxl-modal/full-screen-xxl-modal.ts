import { Component, inject } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../../../shared/components/ui/feather-icons/feather-icons';

@Component({
  selector: 'app-full-screen-xxl-modal',
  imports: [FeatherIcons],
  templateUrl: './full-screen-xxl-modal.html',
  styleUrl: './full-screen-xxl-modal.scss',
})
export class FullScreenXxlModal {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
