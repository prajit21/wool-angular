import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-prefix-postfix',
  imports: [],
  templateUrl: './icon-prefix-postfix.html',
  styleUrl: './icon-prefix-postfix.scss',
})
export class IconPrefixPostfix {
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
