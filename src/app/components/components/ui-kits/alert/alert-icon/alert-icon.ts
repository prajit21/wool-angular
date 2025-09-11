import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-icon',
  imports: [],
  templateUrl: './alert-icon.html',
  styleUrl: './alert-icon.scss',
})
export class AlertIcon {
  public isShow: boolean[] = [true, true];

  dismissAlert(id: number) {
    this.isShow[id] = false;
  }
}
