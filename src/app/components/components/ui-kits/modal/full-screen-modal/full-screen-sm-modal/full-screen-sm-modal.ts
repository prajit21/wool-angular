import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../../../shared/components/ui/feather-icons/feather-icons';

@Component({
  selector: 'app-full-screen-sm-modal',
  imports: [FeatherIcons],
  templateUrl: './full-screen-sm-modal.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './full-screen-sm-modal.scss',
})
export class FullScreenSmModal {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
