import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FullScreenContentModal } from './full-screen-content-modal/full-screen-content-modal';
import { FullScreenLgModal } from './full-screen-lg-modal/full-screen-lg-modal';
import { FullScreenMdModal } from './full-screen-md-modal/full-screen-md-modal';
import { FullScreenSmModal } from './full-screen-sm-modal/full-screen-sm-modal';
import { FullScreenXlModal } from './full-screen-xl-modal/full-screen-xl-modal';
import { FullScreenXxlModal } from './full-screen-xxl-modal/full-screen-xxl-modal';

@Component({
  selector: 'app-full-screen-modal',
  imports: [],
  templateUrl: './full-screen-modal.html',
  styleUrl: './full-screen-modal.scss',
})
export class FullScreenModal {
  private modal = inject(NgbModal);

  openModal(value: string) {
    if (value == 'full') {
      this.modal.open(FullScreenContentModal, {
        fullscreen: true,
        windowClass: 'modal-fullscreen',
      });
    } else if (value == 'sm') {
      this.modal.open(FullScreenSmModal, { windowClass: 'modal-fullscreen-sm-down' });
    } else if (value == 'md') {
      this.modal.open(FullScreenMdModal, { windowClass: 'modal-fullscreen-md-down' });
    } else if (value == 'lg') {
      this.modal.open(FullScreenLgModal, { windowClass: 'modal-fullscreen-lg-down' });
    } else if (value == 'xl') {
      this.modal.open(FullScreenXlModal, { windowClass: 'modal-fullscreen-xl-down' });
    } else if (value == 'xxl') {
      this.modal.open(FullScreenXxlModal, { windowClass: 'modal-fullscreen-xxl-down' });
    }
  }
}
