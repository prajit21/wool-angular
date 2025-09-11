import { Component } from '@angular/core';

import { touchSpinDetails } from '../../../../../../shared/data/data/form-widgets/touchspin';

@Component({
  selector: 'app-rounded-touch-spin',
  imports: [],
  templateUrl: './rounded-touch-spin.html',
  styleUrl: './rounded-touch-spin.scss',
})
export class RoundedTouchSpin {
  public touchSpinDetails = touchSpinDetails;

  changeValue(id: number, value: number) {
    this.touchSpinDetails.filter(data => {
      if (data.id == id) {
        if (value == -1) {
          if (data.roundedValue >= 1) {
            data.roundedValue -= 1;
          }
        } else if (value == 1) {
          data.roundedValue += 1;
        }
      }
    });
  }
}
