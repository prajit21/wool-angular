import { Component } from '@angular/core';

@Component({
  selector: 'app-button-prefix-postfix',
  imports: [],
  templateUrl: './button-prefix-postfix.html',
  styleUrl: './button-prefix-postfix.scss',
})
export class ButtonPrefixPostfix {
  public value: number[] = [0, 0];

  changeValue(i: number, type: number) {
    if (i == 0 || i == 1) {
      if (type == -1) {
        if (this.value[i] >= 1) {
          this.value[i] -= 1;
        }
      } else if (type == 1) {
        this.value[i] += 1;
      }
    }
  }
}
