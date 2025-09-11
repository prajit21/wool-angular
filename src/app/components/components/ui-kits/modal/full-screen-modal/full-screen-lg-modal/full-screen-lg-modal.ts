import { Component, inject } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../../../shared/components/ui/feather-icons/feather-icons';

@Component({
  selector: 'app-full-screen-lg-modal',
  imports: [FeatherIcons],
  templateUrl: './full-screen-lg-modal.html',
  styleUrl: './full-screen-lg-modal.scss',
})
export class FullScreenLgModal {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
