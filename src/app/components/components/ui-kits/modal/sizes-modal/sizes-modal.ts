import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SizeExtraLargeModal } from './size-extra-large-modal/size-extra-large-modal';
import { SizeFullScreenModal } from './size-full-screen-modal/size-full-screen-modal';
import { SizeLargeModal } from './size-large-modal/size-large-modal';
import { SizeSmallModal } from './size-small-modal/size-small-modal';

@Component({
  selector: 'app-sizes-modal',
  templateUrl: './sizes-modal.html',
  styleUrl: './sizes-modal.scss',
})
export class SizesModal {
  private modal = inject(NgbModal);

  openModal(value: string) {
    if (value == 'full') {
      this.modal.open(SizeFullScreenModal, { fullscreen: true });
    } else if (value == 'xl') {
      this.modal.open(SizeExtraLargeModal, { size: 'xl' });
    } else if (value == 'lg') {
      this.modal.open(SizeLargeModal, { size: 'lg' });
    } else if (value == 'sm') {
      this.modal.open(SizeSmallModal, { size: 'sm' });
    }
  }
}
