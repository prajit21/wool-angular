import { Component, inject } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../../../shared/components/ui/feather-icons/feather-icons';

@Component({
  selector: 'app-full-screen-md-modal',
  imports: [FeatherIcons],
  templateUrl: './full-screen-md-modal.html',
  styleUrl: './full-screen-md-modal.scss',
})
export class FullScreenMdModal {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
