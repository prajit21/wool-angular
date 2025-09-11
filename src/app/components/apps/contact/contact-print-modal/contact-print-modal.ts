import { Component, inject, input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ContactDetails } from '../../../../shared/interface/contact';

@Component({
  selector: 'app-contact-print-modal',
  imports: [],
  templateUrl: './contact-print-modal.html',
  styleUrl: './contact-print-modal.scss',
})
export class ContactPrintModal {
  private modal = inject(NgbActiveModal);

  readonly printDetails = input<ContactDetails>();

  closeModal() {
    this.modal.close();
  }
}
