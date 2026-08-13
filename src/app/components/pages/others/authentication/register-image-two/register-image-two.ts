import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonRegisterForm } from '../common-register-form/common-register-form';

@Component({
  selector: 'app-register-image-two',
  imports: [RouterModule, CommonRegisterForm],
  templateUrl: './register-image-two.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './register-image-two.scss',
})
export class RegisterImageTwo {}
