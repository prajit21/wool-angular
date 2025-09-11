import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonRegisterForm } from '../common-register-form/common-register-form';

@Component({
  selector: 'app-register-image-two',
  imports: [RouterModule, CommonRegisterForm, CommonModule],
  templateUrl: './register-image-two.html',
  styleUrl: './register-image-two.scss',
})
export class RegisterImageTwo {}
