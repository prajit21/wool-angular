import { Component } from '@angular/core';

@Component({
  selector: 'app-default-toast',
  imports: [],
  templateUrl: './default-toast.html',
  styleUrl: './default-toast.scss',
})
export class DefaultToast {
  public isShow: boolean = true;

  constructor() {
    setTimeout(() => {
      this.isShow = false;
    }, 20000);
  }

  closeToast() {
    this.isShow = false;
  }
}
