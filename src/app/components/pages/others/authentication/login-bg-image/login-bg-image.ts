import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonLoginForm } from '../common-login-form/common-login-form';

@Component({
  selector: 'app-login-bg-image',
  imports: [CommonLoginForm, RouterModule],
  templateUrl: './login-bg-image.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './login-bg-image.scss',
})
export class LoginBgImage {}
