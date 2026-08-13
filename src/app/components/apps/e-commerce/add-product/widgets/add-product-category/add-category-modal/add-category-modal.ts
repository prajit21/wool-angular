import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-category-modal',
  imports: [AngularEditorModule],
  templateUrl: './add-category-modal.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './add-category-modal.scss',
})
export class AddCategoryModal {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
