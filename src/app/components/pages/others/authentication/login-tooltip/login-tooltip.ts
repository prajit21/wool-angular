import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FeatherIcons } from '../../../../../shared/components/ui/feather-icons/feather-icons';

@Component({
  selector: 'app-login-tooltip',
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, FeatherIcons],
  templateUrl: './login-tooltip.html',
  styleUrl: './login-tooltip.scss',
})
export class LoginTooltip {
  public show: boolean = false;

  password() {
    this.show = !this.show;
  }

  submit() {
    window.location.reload();
  }
}
