import { Component, TemplateRef, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-custom-modal-2',
  imports: [],
  templateUrl: './custom-modal-2.html',
  styleUrl: './custom-modal-2.scss',
})
export class CustomModal2 {
  private modal = inject(NgbModal);

  openModal(content: TemplateRef<NgbModal>) {
    this.modal.open(content, { centered: true, windowClass: 'modal-dialog-centered' });
  }
}
