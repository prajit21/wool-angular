import { Component } from '@angular/core';

@Component({
  selector: 'app-live-alert',
  imports: [],
  templateUrl: './live-alert.html',
  styleUrl: './live-alert.scss',
})
export class LiveAlert {
  public i = 0;
  public array: number[] = [];

  addAlert() {
    this.i++;
    this.array.push(this.i);
  }

  closeAlert(i: number) {
    this.array.splice(i, 1);
  }
}
