import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { AngularEditorModule } from '@kolkov/angular-editor';

import { SvgIcon } from '../../../../../../shared/components/ui/svg-icon/svg-icon';

@Component({
  selector: 'app-add-product-details',
  imports: [CommonModule, FormsModule, SvgIcon, AngularEditorModule, ReactiveFormsModule],
  templateUrl: './add-product-details.html',
  styleUrl: './add-product-details.scss',
})
export class AddProductDetails {
  readonly activeStep = output<string>();

  public validate: boolean = false;

  public myForm = new FormGroup({
    product_title: new FormControl('', Validators.required),
  });

  next() {
    this.validate = true;
    if (this.myForm.valid) {
      this.activeStep.emit('gallery');
    }
  }

  get product_title() {
    return this.myForm.get('product_title');
  }
}
