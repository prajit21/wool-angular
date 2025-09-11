import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-unlock-user',
  imports: [RouterModule, NgbModule],
  templateUrl: './unlock-user.html',
  styleUrl: './unlock-user.scss',
})
export class UnlockUser {
  public show: boolean = false;

  password() {
    this.show = !this.show;
  }

  submit() {
    window.location.reload();
  }
}
