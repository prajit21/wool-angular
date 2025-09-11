import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

import Swal from 'sweetalert2';

import { FeatherIcons } from '../../../../../shared/components/ui/feather-icons/feather-icons';

@Component({
  selector: 'app-login-sweet-alert',
  imports: [RouterModule, FormsModule, ReactiveFormsModule, FeatherIcons],
  templateUrl: './login-sweet-alert.html',
  styleUrl: './login-sweet-alert.scss',
})
export class LoginSweetAlert {
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
    if (!this.myForm.valid) {
      Swal.fire({
        title: 'Error!',
        text: 'Sorry, looks like some data are not filled, please try again !',
        icon: 'error',
        confirmButtonColor: 'var(--theme-deafult)',
      });
    } else {
      Swal.fire({
        title: 'Success!',
        text: "You've logged in successfully. !",
        icon: 'success',
        confirmButtonColor: 'var(--theme-deafult)',
      }).then(result => {
        if (result) {
          window.location.reload();
        }
      });
    }
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }
}
