import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../../../shared/components/ui/feather-icons/feather-icons';

@Component({
  selector: 'app-scrolling-content-modal',
  imports: [FeatherIcons],
  templateUrl: './scrolling-content-modal.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './scrolling-content-modal.scss',
})
export class ScrollingContentModal {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
