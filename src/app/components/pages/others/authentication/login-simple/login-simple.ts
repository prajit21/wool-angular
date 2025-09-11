import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonLoginForm } from '../common-login-form/common-login-form';

@Component({
  selector: 'app-login-simple',
  imports: [CommonLoginForm, RouterModule],
  templateUrl: './login-simple.html',
  styleUrl: './login-simple.scss',
})
export class LoginSimple {}
