import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-category-modal',
  imports: [],
  templateUrl: './contact-category-modal.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './contact-category-modal.scss',
})
export class ContactCategoryModal {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
