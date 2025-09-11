import { Component } from '@angular/core';

import { touchSpinDetails } from '../../../../../../shared/data/data/form-widgets/touchspin';

@Component({
  selector: 'app-outlined-touch-spin',
  imports: [],
  templateUrl: './outlined-touch-spin.html',
  styleUrl: './outlined-touch-spin.scss',
})
export class OutlinedTouchSpin {
  public touchSpinDetails = touchSpinDetails;

  changeValue(id: number, value: number) {
    this.touchSpinDetails.filter(data => {
      if (data.id == id) {
        if (value == -1) {
          if (data.outlinedValue >= 1) {
            data.outlinedValue -= 1;
          }
        } else if (value == 1) {
          data.outlinedValue += 1;
        }
      }
    });
  }
}
