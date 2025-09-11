import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonLoginForm } from '../common-login-form/common-login-form';

@Component({
  selector: 'app-login-bg-image',
  imports: [CommonLoginForm, RouterModule, CommonModule],
  templateUrl: './login-bg-image.html',
  styleUrl: './login-bg-image.scss',
})
export class LoginBgImage {}
