import { Component } from '@angular/core';

@Component({
  selector: 'app-color-schemes-toast',
  imports: [],
  templateUrl: './color-schemes-toast.html',
  styleUrl: './color-schemes-toast.scss',
})
export class ColorSchemesToast {
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
