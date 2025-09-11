import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FeatherIcons } from '../../../../../shared/components/ui/feather-icons/feather-icons';

@Component({
  selector: 'app-common-register-form',
  imports: [FeatherIcons, RouterModule],
  templateUrl: './common-register-form.html',
  styleUrl: './common-register-form.scss',
})
export class CommonRegisterForm {
  public show: boolean = false;

  password() {
    this.show = !this.show;
  }

  submit() {
    window.location.reload();
  }
}
