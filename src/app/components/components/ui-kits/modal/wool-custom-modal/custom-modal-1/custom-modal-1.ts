import { Component, TemplateRef, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-custom-modal-1',
  imports: [RouterModule],
  templateUrl: './custom-modal-1.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './custom-modal-1.scss',
})
export class CustomModal1 {
  private modal = inject(NgbModal);

  openModal(content: TemplateRef<NgbModal>) {
    this.modal.open(content, { centered: true, windowClass: 'modal-dialog-centered' });
  }
}
