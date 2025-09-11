import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-input-button-dropdown',
  imports: [NgbModule],
  templateUrl: './input-button-dropdown.html',
  styleUrl: './input-button-dropdown.scss',
})
export class InputButtonDropdown {
  public isLeft: boolean = false;
  public isRight: boolean = false;

  openDropdown(value: string) {
    if (value == 'left') {
      this.isLeft = !this.isLeft;
    } else if (value == 'right') {
      this.isRight = !this.isRight;
    }
  }
}
