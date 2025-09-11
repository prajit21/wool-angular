import { Component, inject } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-category-modal',
  imports: [],
  templateUrl: './contact-category-modal.html',
  styleUrl: './contact-category-modal.scss',
})
export class ContactCategoryModal {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
