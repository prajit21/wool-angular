import { Component, TemplateRef, inject } from '@angular/core';

import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-static-modal',
  templateUrl: './static-modal.html',
  styleUrl: './static-modal.scss',
})
export class StaticModal {
  private config = inject(NgbModalConfig);
  private modalService = inject(NgbModal);

  open(content: TemplateRef<NgbModal>) {
    this.modalService.open(content);
  }

  closeModal() {
    this.modalService.dismissAll();
  }
}
