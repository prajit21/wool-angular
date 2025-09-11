import { Component, inject } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../../../shared/components/ui/feather-icons/feather-icons';
import { modalContent } from '../../../../../../shared/data/data/ui-kits/modal';

@Component({
  selector: 'app-size-extra-large-modal',
  imports: [FeatherIcons],
  templateUrl: './size-extra-large-modal.html',
  styleUrl: './size-extra-large-modal.scss',
})
export class SizeExtraLargeModal {
  private modal = inject(NgbActiveModal);

  public modalContent = modalContent;

  closeModal() {
    this.modal.close();
  }
}
