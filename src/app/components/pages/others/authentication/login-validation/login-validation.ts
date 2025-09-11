import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FeatherIcons } from '../../../../../shared/components/ui/feather-icons/feather-icons';

@Component({
  selector: 'app-login-validation',
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, FeatherIcons],
  templateUrl: './login-validation.html',
  styleUrl: './login-validation.scss',
})
export class LoginValidation {
  public validate: boolean = false;

  public myForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(8),
    ]),
  });

  public show: boolean = false;

  passwordToggle() {
    this.show = !this.show;
  }

  submit() {
    this.validate = true;
    if (this.myForm.valid) {
      window.location.reload();
    }
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }
}
