import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-alert-icon',
  imports: [],
  templateUrl: './alert-icon.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './alert-icon.scss',
})
export class AlertIcon {
  public isShow: boolean[] = [true, true];

  dismissAlert(id: number) {
    this.isShow[id] = false;
  }
}
