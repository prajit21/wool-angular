import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ScrollingContentModal } from './scrolling-content-modal/scrolling-content-modal';
import { SimpleModal } from './simple-modal/simple-modal';
import { TooltipPopoverModal } from './tooltip-popover-modal/tooltip-popover-modal';
import { WoolModal } from './wool-modal/wool-modal';

@Component({
  selector: 'app-basic-modal',
  imports: [],
  templateUrl: './basic-modal.html',
  styleUrl: './basic-modal.scss',
})
export class BasicModal {
  private modal = inject(NgbModal);

  openModal(value: string) {
    if (value == 'simple') {
      this.modal.open(SimpleModal);
    } else if (value == 'scrolling') {
      this.modal.open(ScrollingContentModal);
    } else if (value == 'tooltip') {
      this.modal.open(TooltipPopoverModal, { centered: true });
    } else if (value == 'wool') {
      this.modal.open(WoolModal);
    }
  }
}
