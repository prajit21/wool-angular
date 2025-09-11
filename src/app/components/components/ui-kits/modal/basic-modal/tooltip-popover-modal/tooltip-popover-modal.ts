import { Component, inject } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tooltip-popover-modal',
  imports: [],
  templateUrl: './tooltip-popover-modal.html',
  styleUrl: './tooltip-popover-modal.scss',
})
export class TooltipPopoverModal {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
