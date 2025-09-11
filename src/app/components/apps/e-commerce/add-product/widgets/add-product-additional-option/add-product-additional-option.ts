import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularEditorModule } from '@kolkov/angular-editor';
import { TagInputModule } from 'ngx-chips';

@Component({
  selector: 'app-add-product-additional-option',
  imports: [TagInputModule, AngularEditorModule, FormsModule],
  templateUrl: './add-product-additional-option.html',
  styleUrl: './add-product-additional-option.scss',
})
export class AddProductAdditionalOption {
  public items = ['watches', 'sports', 'clothes', 'bottles'];
}
