import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FeatherIcons } from '../../../../../shared/components/ui/feather-icons/feather-icons';

@Component({
  selector: 'app-common-login-form',
  imports: [RouterModule, FeatherIcons],
  templateUrl: './common-login-form.html',
  styleUrl: './common-login-form.scss',
})
export class CommonLoginForm {
  public show: boolean = false;

  password() {
    this.show = !this.show;
  }

  submit() {
    window.location.reload();
  }
}
