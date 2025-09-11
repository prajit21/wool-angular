import { Component, inject } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../../../shared/components/ui/feather-icons/feather-icons';
import { modalContent } from '../../../../../../shared/data/data/ui-kits/modal';

@Component({
  selector: 'app-size-full-screen-modal',
  imports: [FeatherIcons],
  templateUrl: './size-full-screen-modal.html',
  styleUrl: './size-full-screen-modal.scss',
})
export class SizeFullScreenModal {
  private modal = inject(NgbActiveModal);

  public modalContent = modalContent;

  closeModal() {
    this.modal.close();
  }
}
