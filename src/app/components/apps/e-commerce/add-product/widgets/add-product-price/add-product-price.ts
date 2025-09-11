import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-product-price',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-product-price.html',
  styleUrl: './add-product-price.scss',
})
export class AddProductPrice {
  readonly activeStep = output<string>();

  public validate: boolean = false;

  public myForm = new FormGroup({
    initial_cost: new FormControl('', Validators.required),
    selling_price: new FormControl('', Validators.required),
    currency: new FormControl('', Validators.required),
    stock: new FormControl('', Validators.required),
  });

  previous() {
    this.activeStep.emit('category');
  }

  next() {
    this.validate = true;
    if (this.myForm.valid) {
      this.activeStep.emit('advance');
    }
  }

  get initial_cost() {
    return this.myForm.get('initial_cost');
  }

  get selling_price() {
    return this.myForm.get('selling_price');
  }

  get currency() {
    return this.myForm.get('currency');
  }

  get stock() {
    return this.myForm.get('stock');
  }
}
