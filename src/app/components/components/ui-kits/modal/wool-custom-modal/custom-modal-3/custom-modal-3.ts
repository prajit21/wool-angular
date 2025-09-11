import { Component, TemplateRef, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../../../shared/components/ui/feather-icons/feather-icons';

@Component({
  selector: 'app-custom-modal-3',
  imports: [RouterModule, FeatherIcons],
  templateUrl: './custom-modal-3.html',
  styleUrl: './custom-modal-3.scss',
})
export class CustomModal3 {
  private modal = inject(NgbModal);

  openModal(content: TemplateRef<NgbModal>) {
    this.modal.open(content, { centered: true, windowClass: 'modal-dialog-centered' });
  }
}
