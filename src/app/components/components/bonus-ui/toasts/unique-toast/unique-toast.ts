import { Component } from '@angular/core';

@Component({
  selector: 'app-unique-toast',
  imports: [],
  templateUrl: './unique-toast.html',
  styleUrl: './unique-toast.scss',
})
export class UniqueToast {
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
