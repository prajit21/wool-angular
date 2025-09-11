import { Component } from '@angular/core';

import { touchSpinDetails } from '../../../../../../shared/data/data/form-widgets/touchspin';

@Component({
  selector: 'app-default-touch-spin',
  imports: [],
  templateUrl: './default-touch-spin.html',
  styleUrl: './default-touch-spin.scss',
})
export class DefaultTouchSpin {
  public touchSpinDetails = touchSpinDetails;

  changeValue(id: number, value: number) {
    this.touchSpinDetails.filter(data => {
      if (data.id == id) {
        if (value == -1) {
          if (data.defaultValue >= 1) {
            data.defaultValue -= 1;
          }
        } else if (value == 1) {
          data.defaultValue += 1;
        }
      }
    });
  }
}
