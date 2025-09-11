import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-tooltip-form-validation',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './tooltip-form-validation.html',
  styleUrl: './tooltip-form-validation.scss',
})
export class TooltipFormValidation {
  public validate: boolean = false;

  public myForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    userName: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required),
  });

  submit() {
    this.validate = true;
    if (this.myForm.valid) {
      window.location.reload();
    }
  }

  get firstName() {
    return this.myForm.get('firstName');
  }

  get lastName() {
    return this.myForm.get('lastName');
  }

  get userName() {
    return this.myForm.get('userName');
  }

  get city() {
    return this.myForm.get('city');
  }

  get state() {
    return this.myForm.get('state');
  }

  get zip() {
    return this.myForm.get('zip');
  }
}
