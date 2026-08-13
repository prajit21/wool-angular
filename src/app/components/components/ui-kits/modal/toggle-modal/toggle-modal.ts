import { Component, TemplateRef, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-toggle-modal',
  imports: [RouterModule],
  templateUrl: './toggle-modal.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './toggle-modal.scss',
})
export class ToggleModal {
  private modal = inject(NgbModal);

  public modal1: NgbModalRef;

  openModal(value: string, content: TemplateRef<NgbModal>) {
    if (value == 'first') {
      this.modal1 = this.modal.open(content, { centered: true });
    } else if (value == 'second') {
      this.modal.dismissAll(this.modal1);
      this.modal.open(content, { centered: true });
    }
  }

  closeModal() {
    this.modal.dismissAll();
  }
}
