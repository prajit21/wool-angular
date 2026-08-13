import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonLoginForm } from '../common-login-form/common-login-form';

@Component({
  selector: 'app-login-image-two',
  imports: [CommonLoginForm, RouterModule],
  templateUrl: './login-image-two.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './login-image-two.scss',
})
export class LoginImageTwo {}
