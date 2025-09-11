import { Component, inject } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../../../shared/components/ui/feather-icons/feather-icons';

@Component({
  selector: 'app-full-screen-xl-modal',
  imports: [FeatherIcons],
  templateUrl: './full-screen-xl-modal.html',
  styleUrl: './full-screen-xl-modal.scss',
})
export class FullScreenXlModal {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
