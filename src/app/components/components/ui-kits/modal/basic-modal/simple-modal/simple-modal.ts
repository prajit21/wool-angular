import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../../../shared/components/ui/feather-icons/feather-icons';

@Component({
  selector: 'app-simple-modal',
  imports: [FeatherIcons],
  templateUrl: './simple-modal.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './simple-modal.scss',
})
export class SimpleModal {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
