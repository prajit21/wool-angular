import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { FeatherIcons } from '../../shared/components/ui/feather-icons/feather-icons';

@Component({
  selector: 'app-auth-login',
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, FeatherIcons],
  templateUrl: './auth-login.html',
  styleUrl: './auth-login.scss',
})
export class AuthLogin {
  router = inject(Router);
  private toast = inject(ToastrService);

  public validate: boolean = false;

  constructor() {
    const router = this.router;

    const userData = localStorage.getItem('user');
    if (userData?.length != null) {
      router.navigate(['/dashboard/ecommerce']);
    }
  }
  public myForm = new FormGroup({
    email: new FormControl('Test@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('test123', [
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
      if (
        this.myForm.value['email'] == 'Test@gmail.com' &&
        this.myForm.value['password'] == 'test123'
      ) {
        let user = {
          email: 'Test@gmail.com',
          password: 'test123',
          name: 'test user',
        };
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/dashboard/ecommerce']);
        this.toast.success('Login Success...!', 'success', {
          positionClass: 'toast-top-right',
          closeButton: true,
          timeOut: 2000,
        });
      } else {
        this.toast.error('Please Enter valid email or password...!', '', {
          positionClass: 'toast-top-right',
          closeButton: true,
          timeOut: 2000,
        });
      }
    }
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }
}
