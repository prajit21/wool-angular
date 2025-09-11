import { Component } from '@angular/core';

@Component({
  selector: 'app-live-toast',
  imports: [],
  templateUrl: './live-toast.html',
  styleUrl: './live-toast.scss',
})
export class LiveToast {
  public topRight: boolean = false;
  public bottomRight: boolean = false;
  public topLeft: boolean = false;
  public bottomLeft: boolean = false;

  ShowToast(value: string) {
    if (value == 'top-right') {
      this.topRight = true;
      setTimeout(() => {
        this.topRight = false;
      }, 3000);
    } else if (value == 'bottom-right') {
      this.bottomRight = true;
      setTimeout(() => {
        this.bottomRight = false;
      }, 3000);
    } else if (value == 'top-left') {
      this.topLeft = true;
      setTimeout(() => {
        this.topLeft = false;
      }, 3000);
    } else if (value == 'bottom-left') {
      this.bottomLeft = true;
      setTimeout(() => {
        this.bottomLeft = false;
      }, 3000);
    }
  }

  closeToast(value: string) {
    if (value == 'top-right') {
      this.topRight = false;
    } else if (value == 'bottom-right') {
      this.bottomRight = false;
    } else if (value == 'top-left') {
      this.topLeft = false;
    } else if (value == 'bottom-left') {
      this.bottomLeft = false;
    }
  }
}
