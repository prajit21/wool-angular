import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonLoginForm } from '../common-login-form/common-login-form';

@Component({
  selector: 'app-login-image-two',
  imports: [CommonLoginForm, RouterModule],
  templateUrl: './login-image-two.html',
  styleUrl: './login-image-two.scss',
})
export class LoginImageTwo {}
