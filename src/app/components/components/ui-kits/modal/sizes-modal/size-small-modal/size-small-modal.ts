import { Component, inject } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../../../shared/components/ui/feather-icons/feather-icons';
import { modalContent } from '../../../../../../shared/data/data/ui-kits/modal';

@Component({
  selector: 'app-size-small-modal',
  imports: [FeatherIcons],
  templateUrl: './size-small-modal.html',
  styleUrl: './size-small-modal.scss',
})
export class SizeSmallModal {
  private modal = inject(NgbActiveModal);

  public modalContent = modalContent;

  closeModal() {
    this.modal.close();
  }
}
