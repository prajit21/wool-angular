import { CommonModule } from '@angular/common';
import { Component, inject, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';

import { AddCategoryModal } from './add-category-modal/add-category-modal';
import { SvgIcon } from '../../../../../../shared/components/ui/svg-icon/svg-icon';

@Component({
  selector: 'app-add-product-category',
  imports: [CommonModule, SvgIcon, FormsModule, ReactiveFormsModule, TagInputModule],
  templateUrl: './add-product-category.html',
  styleUrl: './add-product-category.scss',
})
export class AddProductCategory {
  private modal = inject(NgbModal);

  readonly activeStep = output<string>();

  public items = ['watches', 'sports', 'clothes', 'bottles'];
  public validate: boolean = false;

  public myForm = new FormGroup({
    category: new FormControl('', Validators.required),
    tag: new FormControl(this.items, Validators.required),
    status: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
  });

  openModal() {
    this.modal.open(AddCategoryModal, { size: 'lg' });
  }

  previous() {
    this.activeStep.emit('gallery');
  }

  next() {
    this.validate = true;
    if (this.myForm.valid) {
      this.activeStep.emit('price');
    }
  }

  get category() {
    return this.myForm.get('category');
  }

  get tag() {
    return this.myForm.get('tag');
  }

  get status() {
    return this.myForm.get('status');
  }

  get date() {
    return this.myForm.get('date');
  }
}
